const express = require('express');
const { body } = require('express-validator');
const paymentController = require('../controllers/payment.controller');
const validate = require('../middleware/validate');
const { createOrderLimiter, verifyPaymentLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/create-order',
  createOrderLimiter,
  [
    body('productId').notEmpty().withMessage('Product ID is required'),
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('phone').optional().trim()
  ],
  validate,
  paymentController.createOrder
);

router.post(
  '/verify',
  verifyPaymentLimiter,
  [
    body('razorpayOrderId').notEmpty().withMessage('Order ID required'),
    body('razorpayPaymentId').notEmpty().withMessage('Payment ID required'),
    body('razorpaySignature').notEmpty().withMessage('Signature required')
  ],
  validate,
  paymentController.verifyPayment
);

router.get(
  '/status/:orderId',
  paymentController.checkStatus
);

module.exports = router;
