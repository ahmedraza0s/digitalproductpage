const { generateToken, hashToken } = require('../utils/crypto');

const createSecureToken = () => {
  const rawToken = generateToken();
  const hashedToken = hashToken(rawToken);
  return { rawToken, hashedToken };
};

const verifyTokenHash = (rawToken, storedHash) => {
  return hashToken(rawToken) === storedHash;
};

module.exports = {
  createSecureToken,
  verifyTokenHash
};
