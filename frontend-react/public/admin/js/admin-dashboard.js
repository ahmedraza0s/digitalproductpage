let currentFilters = {
  status: 'all',
  search: '',
  dateFrom: '',
  dateTo: '',
  page: 1,
  limit: 25,
  sortBy: 'initiatedAt',
  sortOrder: 'desc'
};

document.addEventListener('DOMContentLoaded', async () => {
  const token = sessionStorage.getItem('admin_token');
  
  if (!token) {
    window.location.href = 'index.html';
    return;
  }

  try {
    const session = await adminApi.request('/admin/verify-session');
    
    document.getElementById('auth-check').style.display = 'none';
    document.getElementById('dashboard-main').classList.remove('hidden');
    document.getElementById('current-username').textContent = session.username;

    // Load initial data
    loadDashboardData();

    // Bind event listeners
    bindEvents();
  } catch (error) {
    // Handled by adminApi (redirects to login)
  }
});

function bindEvents() {
  document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
      await adminApi.request('/admin/logout', { method: 'POST' });
    } catch (e) {
      console.error('Logout error', e);
    } finally {
      sessionStorage.removeItem('admin_token');
      window.location.href = 'index.html';
    }
  });

  document.getElementById('apply-filters-btn').addEventListener('click', () => {
    currentFilters.status = document.getElementById('filter-status').value;
    currentFilters.search = document.getElementById('filter-search').value;
    currentFilters.dateFrom = document.getElementById('filter-date-from').value;
    currentFilters.dateTo = document.getElementById('filter-date-to').value;
    currentFilters.page = 1; // Reset to page 1 on new filter
    
    loadTableData();
  });

  // Export CSV is handled in admin-export.js
  
  document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('detail-modal').classList.remove('active');
  });
}

async function loadDashboardData() {
  if (typeof renderStats === 'function') {
    renderStats();
  }
  loadTableData();
}

async function loadTableData() {
  if (typeof renderTable === 'function') {
    renderTable(currentFilters);
  }
}
