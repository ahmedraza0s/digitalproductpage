const Purchase = require('../models/Purchase');

/**
 * Helper to prevent duplicate processing of Razorpay webhooks or verification
 * Returns true if purchase is already marked as paid
 */
const isAlreadyPaid = async (razorpayOrderId) => {
  const purchase = await Purchase.findOne({ razorpayOrderId });
  if (!purchase) return false;
  return purchase.paymentStatus === 'paid';
};

module.exports = {
  isAlreadyPaid
};
