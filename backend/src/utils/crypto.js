const crypto = require('crypto');

/**
 * Generate a cryptographically secure random token (64 hex characters)
 */
const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

/**
 * Generate SHA-256 hash of a given string (like a token)
 */
const hashToken = (token) => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

/**
 * Verify Razorpay Webhook Signature
 */
const verifyWebhookSignature = (body, signature, secret) => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return expectedSignature === signature;
};

/**
 * Verify Razorpay Payment Signature
 */
const verifyPaymentSignature = (orderId, paymentId, signature, secret) => {
  const payload = orderId + '|' + paymentId;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return expectedSignature === signature;
};

module.exports = {
  generateToken,
  hashToken,
  verifyWebhookSignature,
  verifyPaymentSignature
};
