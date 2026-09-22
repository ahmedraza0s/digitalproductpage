async function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;

  try {
    const stats = await adminApi.request('/admin/stats');
    
    const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(val);

    container.innerHTML = `
      <div class="stat-card">
        <div class="stat-title">Total Revenue</div>
        <div class="stat-value" style="color: var(--admin-success)">${formatCurrency(stats.totalRevenue)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">Today's Revenue</div>
        <div class="stat-value">${formatCurrency(stats.todayRevenue)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">Paid Purchases</div>
        <div class="stat-value">${stats.totalPaidPurchases}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">Conversion Rate</div>
        <div class="stat-value">${stats.conversionRate}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">Total Initiated</div>
        <div class="stat-value">${stats.totalInitiatedOrders}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">Total Downloads</div>
        <div class="stat-value">${stats.totalDownloads}</div>
      </div>
    `;
  } catch (error) {
    console.error('Failed to load stats', error);
  }
}
