const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true, lowercase: true, index: true },
  customerPhone: { type: String },
  
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  productName: { type: String, required: true }, // Denormalized for records
  
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  
  razorpayOrderId: { type: String, required: true, unique: true, index: true },
  razorpayPaymentId: { type: String, unique: true, sparse: true },
  razorpaySignature: { type: String },
  
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'paid', 'failed', 'refunded'], 
    default: 'pending' 
  },
  paymentMethod: { type: String }, // from webhook e.g. upi, card
  
  initiatedAt: { type: Date, default: Date.now },
  purchaseDate: { type: Date },
  
  accessTokenHash: { type: String },
  tokenExpiry: { type: Date },
  downloadCount: { type: Number, default: 0 },
  lastDownloadAt: { type: Date },
  
  emailSent: { type: Boolean, default: false },
  emailSentAt: { type: Date },
  
  webhookVerified: { type: Boolean, default: false },
  webhookReceivedAt: { type: Date },
  
  ipAddress: { type: String },
  userAgent: { type: String },
  notes: { type: String }
}, { timestamps: true });

// Compound index for dashboard queries
purchaseSchema.index({ paymentStatus: 1, purchaseDate: -1 });

module.exports = mongoose.model('Purchase', purchaseSchema);
