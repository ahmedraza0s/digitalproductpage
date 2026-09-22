const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const connectDB = require('./src/config/db');
const env = require('./src/config/env');
const logger = require('./src/utils/logger');
const { globalLimiter } = require('./src/middleware/rateLimiter');
const errorHandler = require('./src/middleware/errorHandler');

// Initialize Express App
const app = express();

const purchaseService = require('./src/services/purchase.service');

// Connect Database
connectDB().then(() => {
  // Seed initial product if empty
  purchaseService.seedInitialProduct();
});

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: env.BASE_URL,
  methods: ['GET', 'POST', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Apply global rate limiting (skip if using specific limiters)
app.use(globalLimiter);

// Webhook route MUST be parsed before standard express.json()
// to verify raw signature
app.use('/api/webhook', require('./src/routes/webhook.routes'));

// Body Parser for everything else
app.use(express.json({ limit: '10kb' }));

// API Routes
app.use('/api/payment', require('./src/routes/payment.routes'));
app.use('/api/download', require('./src/routes/download.routes'));
app.use('/api/access', require('./src/routes/access.routes'));
app.use('/api/admin', require('./src/routes/admin.routes'));

// Health Check
app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok' }));

// 404 Handler for API Routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Serve Admin Panel statically
const adminPath = path.join(__dirname, '../admin');
app.use('/admin', express.static(adminPath));

// Serve frontend in production
if (env.NODE_ENV === 'production' || process.env.SERVE_FRONTEND === 'true') {
  const frontendPath = path.join(__dirname, '../frontend-react/dist');
  app.use(express.static(frontendPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
} else {
  // 404 Handler for anything else in development
  app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
  });
}

// Global Error Handler
app.use(errorHandler);

const PORT = env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running in ${env.NODE_ENV} mode on port ${PORT}`);
});
