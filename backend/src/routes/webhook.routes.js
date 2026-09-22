const express = require('express');
const webhookController = require('../controllers/webhook.controller');
const rawBodyParser = require('../middleware/rawBody');

const router = express.Router();

// Raw body parser is required here to verify Razorpay signature
router.post('/razorpay', rawBodyParser, webhookController.handleRazorpayWebhook);

module.exports = router;
