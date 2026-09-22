const purchaseService = require('../services/purchase.service');
const downloadService = require('../services/download.service');
const paymentService = require('../services/payment.service');
const emailService = require('../services/email.service');
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

      const { rawToken, hashedToken } = downloadService.createSecureToken();
      const expiry = new Date();
      expiry.setHours(expiry.getHours() + env.TOKEN_EXPIRY_HOURS);

      await purchaseService.updatePurchaseToPaid(purchase._id, {
        razorpayPaymentId: paymentId,
        paymentMethod: method,
        accessTokenHash: hashedToken,
        tokenExpiry: expiry,
        webhookVerified: true,
        webhookReceivedAt: new Date()
      });

      if (!purchase.emailSent) {
        try {
          await emailService.sendPurchaseEmail(purchase.customerEmail, purchase.productName, rawToken);
          purchase.emailSent = true;
          purchase.emailSentAt = new Date();
          await purchase.save();
        } catch (emailError) {
          logger.error('Failed to send purchase email during webhook:', emailError);
        }
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
