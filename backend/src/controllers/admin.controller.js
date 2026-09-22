const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { parse } = require('json2csv');
const env = require('../config/env');
const AdminSession = require('../models/AdminSession');
const Purchase = require('../models/Purchase');
const adminService = require('../services/admin.service');
const logger = require('../utils/logger');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (username !== env.ADMIN_USERNAME) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, env.ADMIN_PASSWORD_HASH);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const jti = uuidv4();
    const token = jwt.sign({ sub: username, jti }, env.ADMIN_JWT_SECRET, { expiresIn: env.ADMIN_JWT_EXPIRY });
    
    // Calculate exact expiry date for the DB session log
    const decoded = jwt.decode(token);
    
    await AdminSession.create({
      username,
      jti,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent'),
      expiresAt: new Date(decoded.exp * 1000)
    });

    res.status(200).json({ token, expiresAt: decoded.exp });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    if (req.adminUser && req.adminUser.jti) {
      await AdminSession.findOneAndUpdate({ jti: req.adminUser.jti }, { active: false });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

const verifySession = (req, res) => {
  res.status(200).json({ valid: true, username: req.adminUser.username });
};

const getStats = async (req, res, next) => {
  try {
    const stats = await adminService.getDashboardStats();
    res.status(200).json(stats);
  } catch (error) {
    next(error);
  }
};

const buildPurchaseQuery = (req) => {
  const { status, search, dateFrom, dateTo } = req.query;
  const query = {};

  if (status && status !== 'all') {
    query.paymentStatus = status;
  }

  if (search) {
    query.$or = [
      { customerName: { $regex: search, $options: 'i' } },
      { customerEmail: { $regex: search, $options: 'i' } },
      { customerPhone: { $regex: search, $options: 'i' } },
      { razorpayOrderId: { $regex: search, $options: 'i' } },
      { razorpayPaymentId: { $regex: search, $options: 'i' } }
    ];
  }

  if (dateFrom || dateTo) {
    query.initiatedAt = {};
    if (dateFrom) query.initiatedAt.$gte = new Date(dateFrom);
    if (dateTo) query.initiatedAt.$lte = new Date(dateTo);
  }

  return query;
};

const getPurchases = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 25, 100);
    const skip = (page - 1) * limit;
    
    const sortBy = req.query.sortBy || 'initiatedAt';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
    
    const query = buildPurchaseQuery(req);

    const [purchases, total] = await Promise.all([
      Purchase.find(query)
        .select('-accessTokenHash -razorpaySignature') // exclude sensitive fields
        .sort({ [sortBy]: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(),
      Purchase.countDocuments(query)
    ]);

    res.status(200).json({
      data: purchases,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

const getPurchaseById = async (req, res, next) => {
  try {
    const purchase = await Purchase.findById(req.params.id)
      .select('-accessTokenHash -razorpaySignature')
      .lean();
      
    if (!purchase) {
      return res.status(404).json({ error: 'Purchase not found' });
    }
    
    res.status(200).json(purchase);
  } catch (error) {
    next(error);
  }
};

const updateNotes = async (req, res, next) => {
  try {
    const { notes } = req.body;
    const purchase = await Purchase.findByIdAndUpdate(
      req.params.id,
      { notes },
      { new: true }
    ).select('-accessTokenHash -razorpaySignature').lean();
    
    if (!purchase) {
      return res.status(404).json({ error: 'Purchase not found' });
    }
    
    res.status(200).json(purchase);
  } catch (error) {
    next(error);
  }
};

const exportPurchases = async (req, res, next) => {
  try {
    const query = buildPurchaseQuery(req);
    const purchases = await Purchase.find(query)
      .sort({ initiatedAt: -1 })
      .lean();

    const fields = [
      { label: 'Date', value: 'initiatedAt' },
      { label: 'Paid At', value: 'purchaseDate' },
      { label: 'Name', value: 'customerName' },
      { label: 'Email', value: 'customerEmail' },
      { label: 'Phone', value: 'customerPhone' },
      { label: 'Amount', value: row => row.amount / 100 },
      { label: 'Status', value: 'paymentStatus' },
      { label: 'Method', value: 'paymentMethod' },
      { label: 'Order ID', value: 'razorpayOrderId' },
      { label: 'Payment ID', value: 'razorpayPaymentId' },
      { label: 'Downloads', value: 'downloadCount' },
      { label: 'Email Sent', value: 'emailSent' }
    ];

    const csv = parse(purchases, { fields });
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="purchases-export.csv"');
    res.status(200).send(csv);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  logout,
  verifySession,
  getStats,
  getPurchases,
  getPurchaseById,
  updateNotes,
  exportPurchases
};
