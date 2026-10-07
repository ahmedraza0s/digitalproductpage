const path = require('path');
const fs = require('fs');
const Purchase = require('../models/Purchase');
const { hashToken } = require('../utils/crypto');
const env = require('../config/env');
const logger = require('../utils/logger');

const PRIVATE_DIR = path.resolve(__dirname, '../../private/ebooks');

const downloadEbook = async (req, res, next) => {
  try {
    const rawToken = req.params.token;
    if (!rawToken) return res.status(401).json({ error: 'Token required' });

    const hashedToken = hashToken(rawToken);

    const purchase = await Purchase.findOne({ 
      accessTokenHash: hashedToken,
      paymentStatus: 'paid'
    }).populate('productId');

    if (!purchase) {
      return res.status(401).json({ error: 'Invalid or unauthorized token' });
    }

    if (purchase.tokenExpiry && purchase.tokenExpiry < new Date()) {
      return res.status(410).json({ error: 'Download link expired' });
    }

    // Pre-check: use current count to block abusers opening parallel requests.
    // The actual increment only happens after the stream finishes successfully.
    if (purchase.downloadCount >= env.MAX_DOWNLOADS_PER_PURCHASE) {
      return res.status(429).json({ error: 'Download limit exceeded for this purchase' });
    }

    const filePath = purchase.productId.filePath;
    const absolutePath = path.resolve(PRIVATE_DIR, filePath);

    if (!absolutePath.startsWith(PRIVATE_DIR)) {
      return res.status(403).json({ error: 'Access denied' });
    }

    if (!fs.existsSync(absolutePath)) {
      return res.status(404).json({ error: 'File not found on server' });
    }

    // Force download on all devices (including iOS Safari) instead of opening inline
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${purchase.productName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf"`);
    
    const fileStream = fs.createReadStream(absolutePath);

    // Only count the download after the stream completes successfully.
    // This prevents burning a count for broken connections or mid-transfer errors.
    res.on('finish', () => {
      Purchase.findByIdAndUpdate(purchase._id, {
        $inc: { downloadCount: 1 },
        $set: { lastDownloadAt: new Date() }
      }).catch(err => logger.error('Failed to update download count:', err));
    });

    // Handle broken pipe (user closes browser mid-download) gracefully
    fileStream.on('error', (streamErr) => {
      logger.error('File stream error during download:', streamErr.message);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Download interrupted' });
      }
    });

    fileStream.pipe(res);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  downloadEbook
};
