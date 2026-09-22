const jwt = require('jsonwebtoken');
const env = require('../config/env');
const AdminSession = require('../models/AdminSession');

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Missing token' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify token signature and expiry
    const decoded = jwt.verify(token, env.ADMIN_JWT_SECRET);
    
    // Optional: Check if session is revoked
    const session = await AdminSession.findOne({ jti: decoded.jti });
    if (!session || !session.active) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Session expired or revoked' });
    }

    req.adminUser = {
      username: decoded.sub,
      jti: decoded.jti
    };
    
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized', message: 'Invalid or expired token' });
  }
};

module.exports = adminAuth;
