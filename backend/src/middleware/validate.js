const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Only return the first error message to keep it clean
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

module.exports = validate;
