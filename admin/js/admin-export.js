document.addEventListener('DOMContentLoaded', () => {
  const exportBtn = document.getElementById('export-csv-btn');
  if (!exportBtn) return;

  exportBtn.addEventListener('click', async () => {
    exportBtn.disabled = true;
    const originalText = exportBtn.textContent;
    exportBtn.textContent = 'Exporting...';

    try {
      const params = new URLSearchParams();
      // Use currentFilters from admin-dashboard.js
      if (typeof currentFilters !== 'undefined') {
        Object.keys(currentFilters).forEach(key => {
          if (currentFilters[key] && key !== 'page' && key !== 'limit') {
            params.append(key, currentFilters[key]);
          }
        });
      }

      const blob = await adminApi.request(`/admin/purchases/export?${params.toString()}`, {
        responseType: 'blob'
      });

      // Create a hidden link and trigger download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `purchases-export-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export CSV. Please try again.');
    } finally {
      exportBtn.disabled = false;
      exportBtn.textContent = originalText;
    }
  });
});
