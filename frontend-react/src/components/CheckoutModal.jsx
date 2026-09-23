import React, { useState } from 'react';
import { api, config } from '../services/api';

const CheckoutModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successData, setSuccessData] = useState(null);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Create order on backend
      const orderData = await api.createOrder({
        productId: config.PRODUCT_ID,
        ...formData
      });

      // 2. Initialize Razorpay
      const checkStatusWithRetry = async (orderId, retries = 3) => {
        for (let i = 0; i < retries; i++) {
          try {
            const statusRes = await api.checkPaymentStatus(orderId);
            if (statusRes.status === 'paid' && statusRes.success) {
              return statusRes;
            }
          } catch (e) {
            // Ignore error and continue retrying
          }
          if (i < retries - 1) {
            await new Promise(res => setTimeout(res, 2000));
          }
        }
        return null;
      };

      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID || orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Stop Being Awkward Ebook',
        description: 'Purchase Ebook',
        order_id: orderData.orderId,
        handler: async function (response) {
          try {
            setLoading(true);
            // 3. Verify payment on backend
            const verifyResult = await api.verifyPayment({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            if (verifyResult.success) {
              setSuccessData(verifyResult);
              
              // Track purchase event with Meta Pixel
              if (window.fbq) {
                window.fbq('track', 'Purchase', {
                  currency: orderData.currency || 'INR',
                  value: orderData.amount ? orderData.amount / 100 : 99
                });
              }
            } else {
              setError('Payment verification failed.');
            }
          } catch (err) {
            setError(err.message || 'Payment verification failed.');
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#7c3aed'
        },
        modal: {
          ondismiss: async function () {
            setLoading(true);
            const statusRes = await checkStatusWithRetry(orderData.orderId, 2);
            if (statusRes) {
              setSuccessData(statusRes);
            }
            setLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', async function (response) {
        setLoading(true);
        const statusRes = await checkStatusWithRetry(orderData.orderId, 3);
        if (statusRes) {
          setSuccessData(statusRes);
          setLoading(false);
          return;
        }
        
        setError(response.error.description || 'Payment failed. If amount was deducted, check your email in a few minutes.');
        setLoading(false);
      });
      rzp.open();

    } catch (err) {
      setError(err.message || 'Failed to initialize checkout.');
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setFormData({ name: '', email: '', phone: '' });
    setError(null);
    setSuccessData(null);
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={resetAndClose} style={styles.closeBtn}>×</button>
        
        {successData ? (
          <div style={styles.successContainer}>
            <div style={styles.successIcon}>✓</div>
            <h2 style={styles.title}>Payment Successful!</h2>
            <p style={styles.text}>Thank you for your purchase. Your ebook is ready.</p>
            <p style={styles.text}>We've also sent a backup link to <strong>{formData.email}</strong>.</p>
            
            <a href={successData.downloadLink} style={styles.downloadBtn} target="_blank" rel="noopener noreferrer">
              Download Ebook Now
            </a>
          </div>
        ) : (
          <div>
            <h2 style={styles.title}>Secure Checkout</h2>
            <p style={styles.text}>Enter your details to receive your digital download.</p>
            
            {error && <div style={styles.error}>{error}</div>}
            
            <form onSubmit={handleCheckout} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  style={styles.input}
                  placeholder="John Doe"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  style={styles.input}
                  placeholder="john@example.com"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  style={styles.input}
                  placeholder="+91 98765 43210"
                />
              </div>
              <button 
                type="submit" 
                style={{...styles.submitBtn, opacity: loading ? 0.7 : 1}} 
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Pay Securely'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '1rem',
  },
  modal: {
    backgroundColor: 'var(--card-bg, #1a1a24)',
    borderRadius: '16px',
    padding: '2rem',
    width: '100%',
    maxWidth: '450px',
    position: 'relative',
    border: '1px solid var(--border-color, #333)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: '#888',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '4px',
    lineHeight: 1,
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: 'white',
  },
  text: {
    color: '#aaa',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
    lineHeight: 1.5,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    color: '#ccc',
    fontWeight: '500',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#0a0a0a',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
  },
  submitBtn: {
    backgroundColor: '#7c3aed',
    color: 'white',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '0.5rem',
    transition: 'background-color 0.2s',
  },
  error: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: '#ef4444',
    padding: '0.75rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    border: '1px solid rgba(239, 68, 68, 0.2)',
  },
  successContainer: {
    textAlign: 'center',
    padding: '1rem 0',
  },
  successIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    margin: '0 auto 1.5rem',
  },
  downloadBtn: {
    display: 'inline-block',
    backgroundColor: '#10b981',
    color: 'white',
    textDecoration: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    width: '100%',
    textAlign: 'center',
  }
};

export default CheckoutModal;
