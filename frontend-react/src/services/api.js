export const config = {
  // Replace with your actual deployed backend URL or leave empty to use relative paths if hosted together
  API_BASE_URL: window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1') 
    ? 'http://localhost:5000/api' 
    : '/api',
  
  PRODUCT_ID: 'ebook-001'
};

export const api = {
  async request(endpoint, options = {}) {
    try {
      const url = `${config.API_BASE_URL}${endpoint}`;
      
      const defaultOptions = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const finalOptions = { ...defaultOptions, ...options };
      if (options.headers) {
        finalOptions.headers = { ...defaultOptions.headers, ...options.headers };
      }

      const response = await fetch(url, finalOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'API Request Failed');
      }

      return data;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  },

  createOrder(data) {
    return this.request('/payment/create-order', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  verifyPayment(data) {
    return this.request('/payment/verify', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  checkPaymentStatus(orderId) {
    return this.request(`/payment/status/${orderId}`, {
      method: 'GET'
    });
  },

  verifyReference(referenceId) {
    return this.request('/access/verify-reference', {
      method: 'POST',
      body: JSON.stringify({ referenceId })
    });
  },

  recoverAccess(email) {
    return this.request('/access/recover', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  }
};
