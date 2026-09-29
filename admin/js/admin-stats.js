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

    if (stats.perBookStats && stats.perBookStats.length > 0) {
      const bookCards = stats.perBookStats.map(b => `
        <div class="stat-card">
          <div class="stat-title">${b.bookName}</div>
          <div class="stat-value" style="font-size:18px;">${formatCurrency(b.revenue)}</div>
          <div style="font-size:12px; color:var(--admin-text-muted);">${b.count} sales</div>
        </div>
      `).join('');
      container.innerHTML += `
        <div class="stats-section-label" style="width: 100%; margin-top: 1rem; font-weight: bold; grid-column: 1 / -1;">Per-Book Breakdown</div>
        ${bookCards}
      `;
    }
  } catch (error) {
    console.error('Failed to load stats', error);
  }
}
