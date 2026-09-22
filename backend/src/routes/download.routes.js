const express = require('express');
const downloadController = require('../controllers/download.controller');
const { downloadLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.get('/:token', downloadLimiter, downloadController.downloadEbook);

module.exports = router;
