const purchaseService = require('../services/purchase.service');
const downloadService = require('../services/download.service');
const paymentService = require('../services/payment.service');
const emailService = require('../services/email.service');
const metaService = require('../services/meta.service');
const Purchase = require('../models/Purchase');
const { verifyWebhookSignature } = require('../utils/crypto');
const { isAlreadyPaid } = require('../utils/idempotency');
const env = require('../config/env');
const logger = require('../utils/logger');

const handleRazorpayWebhook = async (req, res, next) => {
  try {
    const signature = req.headers['x-razorpay-signature'];
    if (!signature) {
      return res.status(400).send('Missing signature');
    }

    // req.body is raw buffer because of rawBody.js middleware
    const isValid = verifyWebhookSignature(req.body, signature, env.RAZORPAY_WEBHOOK_SECRET);
    if (!isValid) {
      return res.status(400).send('Invalid signature');
    }

    const payload = JSON.parse(req.body.toString());

    if (payload.event === 'payment.captured') {
      const paymentEntity = payload.payload.payment.entity;
      const orderId = paymentEntity.order_id;
      const paymentId = paymentEntity.id;
      const method = paymentEntity.method;

      if (await isAlreadyPaid(orderId)) {
        return res.status(200).send('OK'); // Already processed
      }

      const purchase = await purchaseService.getPurchaseByOrderId(orderId);
      if (!purchase) {
        return res.status(404).send('Order not found');
      }

      // Only generate a token in the webhook if verifyPayment hasn't already set one.
      // Both paths fire in the normal payment flow; whichever runs second must not
      // overwrite the token that was already emailed to the customer.
      const tokenAlreadySet = purchase.accessTokenHash &&
        purchase.tokenExpiry &&
        purchase.tokenExpiry > new Date();

      let rawToken;
      const updateData = {
        razorpayPaymentId: paymentId,
        paymentMethod: method,
        webhookVerified: true,
        webhookReceivedAt: new Date()
      };

      if (!tokenAlreadySet) {
        const { rawToken: newRawToken, hashedToken } = downloadService.createSecureToken();
        rawToken = newRawToken;
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + env.TOKEN_EXPIRY_HOURS);
        updateData.accessTokenHash = hashedToken;
        updateData.tokenExpiry = expiry;
      }

      await purchaseService.updatePurchaseToPaid(purchase._id, updateData);

      // Send to Meta CAPI
      const updatedPurchase = await purchaseService.getPurchaseByOrderId(orderId);
      metaService.sendPurchaseEvent(updatedPurchase);

      // Only send the email from the webhook if verifyPayment hasn't sent it already,
      // AND we have a raw token to put in it (i.e. we generated a fresh one above).
      if (!purchase.emailSent && rawToken) {
        emailService.sendPurchaseEmail(purchase.customerEmail, purchase.productName, rawToken)
          .then(() => {
            // Use findByIdAndUpdate to avoid saving a stale document over the paid record
            return Purchase.findByIdAndUpdate(purchase._id, {
              $set: { emailSent: true, emailSentAt: new Date() }
            });
          })
          .catch(emailError => {
            logger.error('Failed to send purchase email during webhook:', emailError);
          });
      }
    }

    res.status(200).send('OK');
  } catch (error) {
    logger.error('Webhook error:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  handleRazorpayWebhook
};
