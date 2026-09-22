const logger = require('../utils/logger');
const env = require('../config/env');

const errorHandler = (err, req, res, next) => {
  logger.error(`${err.name}: ${err.message}\n${err.stack}`);

  // Don't leak stack traces to client in production
  const response = {
    error: err.name || 'ServerError',
    message: err.message || 'An unexpected error occurred.'
  };

  if (env.NODE_ENV !== 'production') {
    response.stack = err.stack;
  }

  // Handle specific Mongoose errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'ValidationError',
      message: Object.values(err.errors).map(val => val.message).join(', ')
    });
  }

  res.status(err.statusCode || 500).json(response);
};

module.exports = errorHandler;
