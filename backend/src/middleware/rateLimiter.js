const rateLimit = require('express-rate-limit');

// General limit for all standard routes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests from this IP, please try again after 15 minutes.' }
});

// Order creation - stricter
const createOrderLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20,
  message: { error: 'Too many order attempts from this IP, please try again after an hour.' }
});

// Verify payment - strict
const verifyPaymentLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { error: 'Too many verification attempts.' }
});

// Download endpoint
const downloadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 30,
  message: { error: 'Too many download requests, please try again later.' }
});

// Recovery endpoint - very strict (prevents email spam/enumeration)
const recoveryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many recovery attempts, please try again after 15 minutes.' }
});

// Verify reference - moderate
const verifyReferenceLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 30,
  message: { error: 'Too many requests.' }
});

// Admin Login - strictest brute-force protection
const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 5,
  message: { error: 'Too many login attempts. Account locked for 15 minutes.' }
});

module.exports = {
  globalLimiter,
  createOrderLimiter,
  verifyPaymentLimiter,
  downloadLimiter,
  recoveryLimiter,
  verifyReferenceLimiter,
  adminLoginLimiter
};
