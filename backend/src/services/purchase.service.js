const Purchase = require('../models/Purchase');
const Product = require('../models/Product');

const createPurchase = async (purchaseData) => {
  return await Purchase.create(purchaseData);
};

const getPurchaseByOrderId = async (razorpayOrderId) => {
  return await Purchase.findOne({ razorpayOrderId }).populate('productId');
};

const getPaidPurchaseByEmail = async (email) => {
  // .sort() has no effect on .findOne() in Mongoose — use .find().sort().limit(1) instead
  const results = await Purchase.find({ 
    customerEmail: email.toLowerCase(),
    paymentStatus: 'paid'
  }).populate('productId').sort({ purchaseDate: -1 }).limit(1);
  return results[0] || null;
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

// Seed a dummy product for testing if none exists, and ensure price is synced
const seedInitialProduct = async () => {
  const currentPrice = parseInt(process.env.BOOK_PRICE || '99') * 100;
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.create({
      productId: 'ebook-001',
      title: 'Digital Ebook Premium',
      description: 'The complete guide to digital success.',
      price: currentPrice,
      filePath: 'Stop Being Awkward.pdf'
    });
  } else {
    // Sync price if it changed in .env and ensure correct filePath
    await Product.updateOne(
      { productId: 'ebook-001' }, 
      { $set: { price: currentPrice, filePath: 'Stop Being Awkward.pdf' } }
    );
  }

  const glowUpPrice = parseInt(process.env.GLOW_UP_BOOK_PRICE || '99') * 100;
  const glowUpExists = await Product.findOne({ productId: 'ebook-002' });
  if (!glowUpExists) {
    await Product.create({
      productId: 'ebook-002',
      title: 'Glow Up for Men — Looks Maxing',
      description: 'The complete guide to male glow up and looks maxing.',
      price: glowUpPrice,
      filePath: 'Sharper Mens Glow Up Guide.pdf'
    });
  } else {
    await Product.updateOne(
      { productId: 'ebook-002' },
      { $set: { price: glowUpPrice, filePath: 'Sharper Mens Glow Up Guide.pdf' } }
    );
  }

  // ebook-003: The Social Confidence Plan (book only)
  const scPrice = parseInt(process.env.SOCIAL_CONFIDENCE_BOOK_PRICE || '99') * 100;
  const scExists = await Product.findOne({ productId: 'ebook-003' });
  if (!scExists) {
    await Product.create({
      productId: 'ebook-003',
      title: 'The Social Confidence Plan',
      description: 'Calm, practical steps for people who overthink conversations. Includes a 30-day practice plan.',
      price: scPrice,
      filePath: 'The Social Confidence Plan.pdf'
    });
  } else {
    await Product.updateOne(
      { productId: 'ebook-003' },
      { $set: { price: scPrice, filePath: 'The Social Confidence Plan.pdf' } }
    );
  }

  // ebook-003-bundle: The Social Confidence Plan + Practice Pack
  const scBundlePrice = parseInt(process.env.SOCIAL_CONFIDENCE_BUNDLE_PRICE || '149') * 100;
  const scBundleExists = await Product.findOne({ productId: 'ebook-003-bundle' });
  if (!scBundleExists) {
    await Product.create({
      productId: 'ebook-003-bundle',
      title: 'The Social Confidence Plan + Practice Pack',
      description: 'Book + Printable 30-day tracker, scripts cheat sheet, and pocket card.',
      price: scBundlePrice,
      filePath: 'The Social Confidence Plan.pdf'
    });
  } else {
    await Product.updateOne(
      { productId: 'ebook-003-bundle' },
      { $set: { price: scBundlePrice, filePath: 'The Social Confidence Plan.pdf' } }
    );
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
