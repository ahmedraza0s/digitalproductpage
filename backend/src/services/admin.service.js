const Purchase = require('../models/Purchase');

const getDashboardStats = async () => {
  const [totals, metrics] = await Promise.all([
    Purchase.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $cond: [{ $eq: ["$paymentStatus", "paid"] }, "$amount", 0] } },
          totalPaid: { $sum: { $cond: [{ $eq: ["$paymentStatus", "paid"] }, 1, 0] } },
          totalInitiated: { $sum: 1 },
          totalFailed: { $sum: { $cond: [{ $in: ["$paymentStatus", ["failed", "pending"]] }, 1, 0] } },
          totalDownloads: { $sum: "$downloadCount" }
        }
      }
    ]),
    
    // Revenue for today
    Purchase.aggregate([
      {
        $match: {
          paymentStatus: 'paid',
          purchaseDate: { 
            $gte: new Date(new Date().setHours(0, 0, 0, 0)) 
          }
        }
      },
      {
        $group: {
          _id: null,
          todayRevenue: { $sum: "$amount" },
          todayPurchases: { $sum: 1 }
        }
      }
    ])
  ]);

  const stats = totals[0] || {
    totalRevenue: 0,
    totalPaid: 0,
    totalInitiated: 0,
    totalFailed: 0,
    totalDownloads: 0
  };

  const todayStats = metrics[0] || {
    todayRevenue: 0,
    todayPurchases: 0
  };

  const conversionRate = stats.totalInitiated > 0 
    ? ((stats.totalPaid / stats.totalInitiated) * 100).toFixed(1) + '%' 
    : '0%';

  return {
    totalRevenue: stats.totalRevenue / 100, // convert paise to rupees
    totalPaidPurchases: stats.totalPaid,
    totalInitiatedOrders: stats.totalInitiated,
    totalFailedOrders: stats.totalFailed,
    totalDownloads: stats.totalDownloads,
    todayRevenue: todayStats.todayRevenue / 100,
    todayPurchases: todayStats.todayPurchases,
    conversionRate
  };
};

module.exports = {
  getDashboardStats
};
