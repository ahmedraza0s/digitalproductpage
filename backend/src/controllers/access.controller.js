const purchaseService = require('../services/purchase.service');
const downloadService = require('../services/download.service');
const emailService = require('../services/email.service');
const env = require('../config/env');
const logger = require('../utils/logger');

const recoverAccess = async (req, res, next) => {
  try {
    const { email } = req.body;

    const purchase = await purchaseService.getPaidPurchaseByEmail(email);
    
    if (purchase) {
      const { rawToken, hashedToken } = downloadService.createSecureToken();
      const expiry = new Date();
      expiry.setHours(expiry.getHours() + env.TOKEN_EXPIRY_HOURS);

      purchase.accessTokenHash = hashedToken;
      purchase.tokenExpiry = expiry;
      await purchase.save();

      try {
        await emailService.sendRecoveryEmail(purchase.customerEmail, purchase.productName, rawToken);
      } catch (error) {
        logger.error('Failed to send recovery email:', error);
      }
    } else {
      logger.info(`Recovery attempted for non-existent purchase with email: ${email}`);
    }

    res.status(200).json({ message: 'If this email has a purchase, a link has been sent.' });
  } catch (error) {
    next(error);
  }
};

const verifyReference = async (req, res, next) => {
  try {
    const { referenceId } = req.body;
    if (!referenceId) return res.status(200).json({ paid: false });

    const purchase = await purchaseService.getPurchaseByOrderId(referenceId);
    if (purchase && purchase.paymentStatus === 'paid') {
      return res.status(200).json({ paid: true });
    }
    
    return res.status(200).json({ paid: false });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  recoverAccess,
  verifyReference
};
