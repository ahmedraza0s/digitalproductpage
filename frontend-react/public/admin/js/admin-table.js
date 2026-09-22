async function renderTable(filters) {
  const tbody = document.getElementById('purchases-table-body');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" class="text-center">Loading...</td></tr>';

  try {
    // Build query string
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) params.append(key, filters[key]);
    });

    const response = await adminApi.request(`/admin/purchases?${params.toString()}`);
    
    if (response.data.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="color: var(--admin-text-muted);">No purchases found matching filters.</td></tr>';
      updatePagination(response.pagination);
      return;
    }

    const formatDate = (dateStr) => {
      if (!dateStr) return '-';
      const d = new Date(dateStr);
      return `${d.toLocaleDateString()} <span style="color:var(--admin-text-muted);font-size:11px;">${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>`;
    };

    const getStatusBadge = (status) => {
      const map = {
        'paid': 'badge-success',
        'pending': 'badge-warning',
        'failed': 'badge-error'
      };
      return `<span class="badge ${map[status] || 'badge-warning'}">${status}</span>`;
    };

    const formatCurrency = (val) => `₹${(val/100).toFixed(2)}`;

    tbody.innerHTML = response.data.map(p => `
      <tr>
        <td>${formatDate(p.initiatedAt)}</td>
        <td>
          <div style="font-weight:500;">${p.customerName}</div>
          <div style="font-size:12px;"><a href="mailto:${p.customerEmail}">${p.customerEmail}</a></div>
          ${p.customerPhone ? `<div style="font-size:11px;color:var(--admin-text-muted);">${p.customerPhone}</div>` : ''}
        </td>
        <td>${formatCurrency(p.amount)}</td>
        <td>${getStatusBadge(p.paymentStatus)}</td>
        <td>
          <div style="font-size:11px;color:var(--admin-text-muted);max-width:150px;overflow:hidden;text-overflow:ellipsis;">
            ${p.razorpayPaymentId || '-'}
          </div>
        </td>
        <td class="text-center">${p.downloadCount}</td>
        <td class="table-actions">
          <button class="btn btn-outline" style="padding: 4px 8px; font-size: 12px;" onclick="viewPurchaseDetails('${p._id}')">View</button>
        </td>
      </tr>
    `).join('');

    updatePagination(response.pagination);

  } catch (error) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="color: var(--admin-error);">Error loading data.</td></tr>`;
  }
}

function updatePagination(pagination) {
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  const info = document.getElementById('page-info');

  if (!prevBtn || !nextBtn || !info) return;

  info.textContent = `Page ${pagination.page} of ${pagination.totalPages} (${pagination.total} total)`;

  prevBtn.disabled = pagination.page <= 1;
  nextBtn.disabled = pagination.page >= pagination.totalPages;

  prevBtn.onclick = () => {
    if (currentFilters.page > 1) {
      currentFilters.page--;
      loadTableData();
    }
  };

  nextBtn.onclick = () => {
    if (currentFilters.page < pagination.totalPages) {
      currentFilters.page++;
      loadTableData();
    }
  };
}

async function viewPurchaseDetails(id) {
  const modal = document.getElementById('detail-modal');
  const contentArea = document.getElementById('modal-content-area');
  
  contentArea.innerHTML = '<p>Loading details...</p>';
  modal.classList.add('active');

  try {
    const p = await adminApi.request(`/admin/purchases/${id}`);
    
    const formatDate = (dateStr) => {
      if (!dateStr) return 'N/A';
      return new Date(dateStr).toLocaleString();
    };
    
    contentArea.innerHTML = `
      <div class="detail-grid">
        <div class="detail-section">
          <h4>Customer Info</h4>
          <div class="detail-row"><span class="detail-label">Name</span> <span class="detail-value">${p.customerName}</span></div>
          <div class="detail-row"><span class="detail-label">Email</span> <span class="detail-value"><a href="mailto:${p.customerEmail}">${p.customerEmail}</a></span></div>
          <div class="detail-row"><span class="detail-label">Phone</span> <span class="detail-value">${p.customerPhone || 'N/A'}</span></div>
          <div class="detail-row"><span class="detail-label">IP Address</span> <span class="detail-value">${p.ipAddress || 'N/A'}</span></div>
        </div>
        
        <div class="detail-section">
          <h4>Payment Info</h4>
          <div class="detail-row"><span class="detail-label">Status</span> <span class="detail-value" style="text-transform:uppercase;font-weight:600;">${p.paymentStatus}</span></div>
          <div class="detail-row"><span class="detail-label">Amount</span> <span class="detail-value">₹${(p.amount/100).toFixed(2)}</span></div>
          <div class="detail-row"><span class="detail-label">Method</span> <span class="detail-value">${p.paymentMethod || 'N/A'}</span></div>
          <div class="detail-row"><span class="detail-label">Initiated</span> <span class="detail-value" style="font-size:11px;">${formatDate(p.initiatedAt)}</span></div>
          <div class="detail-row"><span class="detail-label">Paid At</span> <span class="detail-value" style="font-size:11px;">${formatDate(p.purchaseDate)}</span></div>
        </div>

        <div class="detail-section">
          <h4>Identifiers</h4>
          <div class="detail-row" style="flex-direction:column; align-items:flex-start;">
            <span class="detail-label" style="margin-bottom:4px;">Razorpay Order ID</span>
            <div style="display:flex; width:100%; gap:8px;">
              <input type="text" class="form-input" style="padding:4px 8px; font-size:11px;" value="${p.razorpayOrderId}" readonly>
            </div>
          </div>
          <div class="detail-row" style="flex-direction:column; align-items:flex-start; margin-top:12px;">
            <span class="detail-label" style="margin-bottom:4px;">Razorpay Payment ID</span>
            <div style="display:flex; width:100%; gap:8px;">
              <input type="text" class="form-input" style="padding:4px 8px; font-size:11px;" value="${p.razorpayPaymentId || ''}" readonly>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4>Access & Delivery</h4>
          <div class="detail-row"><span class="detail-label">Product</span> <span class="detail-value">${p.productName}</span></div>
          <div class="detail-row"><span class="detail-label">Downloads</span> <span class="detail-value">${p.downloadCount}</span></div>
          <div class="detail-row"><span class="detail-label">Last Download</span> <span class="detail-value" style="font-size:11px;">${formatDate(p.lastDownloadAt)}</span></div>
          <div class="detail-row"><span class="detail-label">Email Sent</span> <span class="detail-value">${p.emailSent ? 'Yes' : 'No'}</span></div>
          <div class="detail-row"><span class="detail-label">Webhook Verified</span> <span class="detail-value">${p.webhookVerified ? 'Yes' : 'No'}</span></div>
        </div>
      </div>
      
      <div class="detail-section" style="margin-bottom:0;">
        <h4>Admin Notes</h4>
        <textarea id="admin-notes-text" class="form-input" rows="3" style="resize:vertical; margin-bottom:8px;">${p.notes || ''}</textarea>
        <button class="btn btn-primary" onclick="saveNotes('${p._id}')" id="save-notes-btn">Save Note</button>
        <span id="notes-msg" style="margin-left:12px; font-size:12px;"></span>
      </div>
    `;

  } catch (error) {
    contentArea.innerHTML = '<p style="color:var(--admin-error);">Error loading details.</p>';
  }
}

async function saveNotes(id) {
  const notes = document.getElementById('admin-notes-text').value;
  const btn = document.getElementById('save-notes-btn');
  const msg = document.getElementById('notes-msg');
  
  btn.disabled = true;
  btn.textContent = 'Saving...';
  
  try {
    await adminApi.request(`/admin/purchases/${id}/notes`, {
      method: 'PATCH',
      body: JSON.stringify({ notes })
    });
    msg.textContent = 'Saved successfully!';
    msg.style.color = 'var(--admin-success)';
    setTimeout(() => { msg.textContent = ''; }, 3000);
  } catch (error) {
    msg.textContent = 'Failed to save.';
    msg.style.color = 'var(--admin-error)';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save Note';
  }
}
