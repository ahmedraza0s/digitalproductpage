const axios = require('axios');
const crypto = require('crypto');
const logger = require('../utils/logger');
const env = require('../config/env');

const hashData = (val) => {
  if (!val) return undefined;
  return crypto.createHash('sha256').update(String(val).trim().toLowerCase()).digest('hex');
};

const sendPurchaseEvent = async (purchase) => {
  try {
    const pixelId = process.env.VITE_META_PIXEL_ID;
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      logger.warn('Meta CAPI is not configured. Missing VITE_META_PIXEL_ID or META_CAPI_ACCESS_TOKEN.');
      return;
    }

    const payload = {
      data: [
        {
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_id: purchase.razorpayOrderId, // Deduplication key
          event_source_url: process.env.BASE_URL,
          user_data: {
            em: hashData(purchase.customerEmail),
            ph: hashData(purchase.customerPhone),
            fn: hashData(purchase.customerName?.split(' ')[0]),
            ln: hashData(purchase.customerName?.split(' ').slice(1).join(' ')),
            client_ip_address: purchase.metaTracking?.clientIp || purchase.ipAddress,
            client_user_agent: purchase.metaTracking?.userAgent || purchase.userAgent,
            fbp: purchase.metaTracking?.fbp,
            fbc: purchase.metaTracking?.fbc
          },
          custom_data: {
            currency: purchase.currency || 'INR',
            value: (purchase.amount / 100).toFixed(2) // Assuming amount is in lowest denomination (paise/cents)
          }
        }
      ]
    };

    const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;
    
    const response = await axios.post(url, payload);
    logger.info(`Meta CAPI event sent successfully for order ${purchase.razorpayOrderId}`, response.data);
  } catch (error) {
    logger.error(`Failed to send Meta CAPI event for order ${purchase.razorpayOrderId}:`, error.response?.data || error.message);
  }
};

module.exports = {
  sendPurchaseEvent
};
