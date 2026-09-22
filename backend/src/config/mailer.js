const nodemailer = require('nodemailer');
const env = require('./env');
const logger = require('../utils/logger');

let transporter = null;

if (env.EMAIL_HOST && env.EMAIL_USER && env.EMAIL_PASSWORD) {
  transporter = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: env.EMAIL_PORT,
    secure: env.EMAIL_PORT === 465, // true for 465, false for other ports
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASSWORD,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      logger.error('SMTP Connection Error:', error);
    } else {
      logger.info('SMTP Server is ready to take our messages');
    }
  });
} else {
  logger.warn('Email configuration missing, email sending disabled.');
}

module.exports = transporter;
