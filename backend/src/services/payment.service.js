const razorpay = require('../config/razorpay');
const { verifyPaymentSignature } = require('../utils/crypto');
const env = require('../config/env');

const createOrder = async (amount, currency = 'INR', receiptId) => {
  if (!razorpay) throw new Error('Razorpay is not configured');
  
  const options = {
    amount: amount, // in paise
    currency: currency,
    receipt: receiptId,
    payment_capture: 1 // auto capture
  };
  
  return await razorpay.orders.create(options);
};

const verifySignature = (orderId, paymentId, signature) => {
  return verifyPaymentSignature(orderId, paymentId, signature, env.RAZORPAY_KEY_SECRET);
};

module.exports = {
  createOrder,
  verifySignature
};
