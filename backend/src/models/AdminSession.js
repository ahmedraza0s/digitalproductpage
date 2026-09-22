const mongoose = require('mongoose');

const adminSessionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  },
  jti: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  active: {
    type: Boolean,
    default: true
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expires: 0 } // TTL index, auto-deletes expired sessions
  }
}, { timestamps: true });

module.exports = mongoose.model('AdminSession', adminSessionSchema);
