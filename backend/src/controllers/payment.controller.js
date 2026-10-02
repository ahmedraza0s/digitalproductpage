const paymentService = require('../services/payment.service');
const purchaseService = require('../services/purchase.service');
const downloadService = require('../services/download.service');
const emailService = require('../services/email.service');
const metaService = require('../services/meta.service');
const Purchase = require('../models/Purchase');
const logger = require('../utils/logger');
const env = require('../config/env');

const createOrder = async (req, res, next) => {
  try {
    const { productId, name, email, phone, fbp, fbc } = req.body;

    const product = await purchaseService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found or inactive' });
    }

    const receiptId = `rcpt_${Date.now()}`;
    const order = await paymentService.createOrder(product.price, product.currency, receiptId);

    await purchaseService.createPurchase({
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      productId: product._id,
      productName: product.title,
      amount: product.price,
      currency: product.currency,
      razorpayOrderId: order.id,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent'),
      metaTracking: {
        fbp,
        fbc,
        userAgent: req.get('User-Agent'),
        clientIp: req.ip
      }
    });

    res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    next(error);
  }
};

const verifyPayment = async (req, res, next) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    const isValid = paymentService.verifySignature(razorpayOrderId, razorpayPaymentId, razorpaySignature);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    const purchase = await purchaseService.getPurchaseByOrderId(razorpayOrderId);
    if (!purchase) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (purchase.paymentStatus === 'paid') {
      const { rawToken, hashedToken } = downloadService.createSecureToken();
      const expiry = new Date();
      expiry.setHours(expiry.getHours() + env.TOKEN_EXPIRY_HOURS);
      
      purchase.accessTokenHash = hashedToken;
      purchase.tokenExpiry = expiry;
      await purchase.save();
      
      const downloadLink = `${env.BASE_URL}/api/download/${rawToken}`;
      return res.status(200).json({ success: true, referenceId: purchase.razorpayOrderId, downloadLink });
    }

    const { rawToken, hashedToken } = downloadService.createSecureToken();
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + env.TOKEN_EXPIRY_HOURS);

    await purchaseService.updatePurchaseToPaid(purchase._id, {
      razorpayPaymentId,
      razorpaySignature,
      accessTokenHash: hashedToken,
      tokenExpiry: expiry
    });

    // Send to Meta CAPI (fire-and-forget, do not block response)
    purchaseService.getPurchaseByOrderId(razorpayOrderId)
      .then(updatedPurchase => metaService.sendPurchaseEvent(updatedPurchase))
      .catch(err => logger.error('Meta CAPI error:', err));

    // Send email fire-and-forget — do NOT await before responding to user.
    // Awaiting SMTP before sending the response was causing the browser to
    // time out whenever Hostinger SMTP was slow, making users think payment failed.
    emailService.sendPurchaseEmail(purchase.customerEmail, purchase.productName, rawToken)
      .then(() => {
        // Use findByIdAndUpdate to avoid saving a stale document over the paid record
        return Purchase.findByIdAndUpdate(purchase._id, {
          $set: { emailSent: true, emailSentAt: new Date() }
        });
      })
      .catch(emailError => {
        logger.error('Failed to send purchase email during verification:', emailError);
      });

    const downloadLink = `${env.BASE_URL}/api/download/${rawToken}`;
    res.status(200).json({ success: true, referenceId: purchase.razorpayOrderId, downloadLink });
  } catch (error) {
    next(error);
  }
};

const checkStatus = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    
    if (!orderId) {
      return res.status(400).json({ error: 'Order ID is required' });
    }

    const purchase = await purchaseService.getPurchaseByOrderId(orderId);
    if (!purchase) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (purchase.paymentStatus === 'paid') {
      const { rawToken, hashedToken } = downloadService.createSecureToken();
      const expiry = new Date();
      expiry.setHours(expiry.getHours() + env.TOKEN_EXPIRY_HOURS);
      
      // Only generate a new token if none exists or the existing one has expired.
      // Overwriting unconditionally would invalidate the email link already sent.
      const tokenIsStillValid = purchase.accessTokenHash && 
        purchase.tokenExpiry && 
        purchase.tokenExpiry > new Date();

      if (!tokenIsStillValid) {
        purchase.accessTokenHash = hashedToken;
        purchase.tokenExpiry = expiry;
        await purchase.save();
      }

      const activeToken = tokenIsStillValid ? null : rawToken;

      // If token is still valid we can't return it (we don't store raw tokens).
      // Return a fresh one only when we actually generated one above.
      if (activeToken) {
        const downloadLink = `${env.BASE_URL}/api/download/${activeToken}`;
        return res.status(200).json({ status: 'paid', success: true, downloadLink });
      }

      // Token exists but is valid — tell frontend it's paid; user can use the email link.
      return res.status(200).json({ status: 'paid', success: true, downloadLink: null });
    }

    res.status(200).json({ status: purchase.paymentStatus, success: false });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createOrder,
  verifyPayment,
  checkStatus
};
