const Purchase = require('../models/Purchase');
const Product = require('../models/Product');

const createPurchase = async (purchaseData) => {
  return await Purchase.create(purchaseData);
};

const getPurchaseByOrderId = async (razorpayOrderId) => {
  return await Purchase.findOne({ razorpayOrderId }).populate('productId');
};

const getPaidPurchaseByEmail = async (email) => {
  return await Purchase.findOne({ 
    customerEmail: email.toLowerCase(),
    paymentStatus: 'paid'
  }).populate('productId').sort({ purchaseDate: -1 });
};

const updatePurchaseToPaid = async (purchaseId, updateData) => {
  return await Purchase.findByIdAndUpdate(
    purchaseId, 
    { 
      $set: {
        paymentStatus: 'paid',
        purchaseDate: new Date(),
        ...updateData
      } 
    },
    { new: true }
  ).populate('productId');
};

const getProductById = async (productId) => {
  return await Product.findOne({ productId, active: true });
};

// Seed a dummy product for testing if none exists
const seedInitialProduct = async () => {
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.create({
      productId: 'ebook-001',
      title: 'Digital Ebook Premium',
      description: 'The complete guide to digital success.',
      price: parseInt(process.env.BOOK_PRICE || '99') * 100,
      filePath: 'ebook.pdf'
    });
  }
};

module.exports = {
  createPurchase,
  getPurchaseByOrderId,
  getPaidPurchaseByEmail,
  updatePurchaseToPaid,
  getProductById,
  seedInitialProduct
};
