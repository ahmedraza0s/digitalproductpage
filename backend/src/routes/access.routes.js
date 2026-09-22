const express = require('express');
const { body } = require('express-validator');
const accessController = require('../controllers/access.controller');
const validate = require('../middleware/validate');
const { recoveryLimiter, verifyReferenceLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/recover',
  recoveryLimiter,
  [
    body('email').trim().isEmail().withMessage('Valid email is required')
  ],
  validate,
  accessController.recoverAccess
);

router.post(
  '/verify-reference',
  verifyReferenceLimiter,
  [
    body('referenceId').trim().notEmpty().withMessage('Reference ID is required')
  ],
  validate,
  accessController.verifyReference
);

module.exports = router;
