const transporter = require('../config/mailer');
const env = require('../config/env');
const logger = require('../utils/logger');

const sendPurchaseEmail = async (email, productName, rawToken) => {
  if (!transporter) {
    logger.warn('Skipping email send - no transporter configured.');
    return;
  }

  const downloadLink = `${env.BASE_URL}/api/download/${rawToken}`;

  const mailOptions = {
    from: env.EMAIL_FROM,
    to: email,
    subject: `Your ebook is ready: ${productName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2>Thank you for your purchase!</h2>
        <p>Your payment was successful and your ebook is ready to download.</p>
        <p><strong>Product:</strong> ${productName}</p>
        <div style="margin: 30px 0;">
          <a href="${downloadLink}" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Download Ebook</a>
        </div>
        <p style="color: #666; font-size: 14px;">This link will expire in ${env.TOKEN_EXPIRY_HOURS} hours for your security. Please save the PDF to your device.</p>
        <p>Need help? Reply to this email.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`Purchase email sent to ${email}`);
  } catch (error) {
    logger.error(`Failed to send purchase email to ${email}:`, error);
    throw error;
  }
};

const sendRecoveryEmail = async (email, productName, rawToken) => {
  if (!transporter) return;

  const downloadLink = `${env.BASE_URL}/api/download/${rawToken}`;

  const mailOptions = {
    from: env.EMAIL_FROM,
    to: email,
    subject: `Your download link for ${productName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2>Here is your download link</h2>
        <p>You recently requested access to your previous purchase.</p>
        <p><strong>Product:</strong> ${productName}</p>
        <div style="margin: 30px 0;">
          <a href="${downloadLink}" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Download Ebook</a>
        </div>
        <p style="color: #666; font-size: 14px;">This fresh link will expire in ${env.TOKEN_EXPIRY_HOURS} hours.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`Recovery email sent to ${email}`);
  } catch (error) {
    logger.error(`Failed to send recovery email to ${email}:`, error);
    throw error;
  }
};

module.exports = {
  sendPurchaseEmail,
  sendRecoveryEmail
};
