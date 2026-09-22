// Replace with your actual backend URL if needed
const API_BASE_URL = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1') 
  ? 'http://localhost:5000/api' 
  : '/api';

const adminApi = {
  getToken() {
    return sessionStorage.getItem('admin_token');
  },

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json'
    };

    const token = this.getToken();
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const finalOptions = { 
      ...options,
      headers: { ...defaultHeaders, ...options.headers }
    };

    try {
      const response = await fetch(url, finalOptions);
      
      // Handle unauthorized (session expired/invalid)
      if (response.status === 401 && !url.includes('/admin/login')) {
        sessionStorage.removeItem('admin_token');
        window.location.href = '/admin/';
        throw new Error('Session expired. Please log in again.');
      }

      if (options.responseType === 'blob') {
        if (!response.ok) throw new Error('Failed to download file');
        return await response.blob();
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'API Request Failed');
      }

      return data;
    } catch (error) {
      console.error(`Admin API Error (${endpoint}):`, error);
      throw error;
    }
  }
};
