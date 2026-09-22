const express = require('express');
const { body } = require('express-validator');
const adminController = require('../controllers/admin.controller');
const adminAuth = require('../middleware/adminAuth');
const validate = require('../middleware/validate');
const { adminLoginLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Public routes (rate limited)
router.post(
  '/login',
  adminLoginLimiter,
  [
    body('username').trim().notEmpty().withMessage('Username required'),
    body('password').notEmpty().withMessage('Password required')
  ],
  validate,
  adminController.login
);

// Protected routes (require valid JWT)
router.use(adminAuth);

router.post('/logout', adminController.logout);
router.get('/verify-session', adminController.verifySession);

router.get('/stats', adminController.getStats);

router.get('/purchases', adminController.getPurchases);
router.get('/purchases/export', adminController.exportPurchases);
router.get('/purchases/:id', adminController.getPurchaseById);

router.patch(
  '/purchases/:id/notes',
  [
    body('notes').optional().isString().isLength({ max: 500 }).withMessage('Notes max length 500 chars')
  ],
  validate,
  adminController.updateNotes
);

router.post('/purchases/:id/generate-link', adminController.generateLink);

module.exports = router;
