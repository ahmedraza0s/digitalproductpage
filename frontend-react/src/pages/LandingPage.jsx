import React, { useState, useEffect } from 'react';
import { api, config } from '../services/api';

const LandingPage = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutState, setCheckoutState] = useState('form'); // form, processing, success, error
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);

  useEffect(() => {
    // Check if user already purchased
    if (localStorage.getItem('ebook_purchase_ref')) {
      setHasPurchased(true);
    }

    // Scroll listener for sticky CTA
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 500;
      if (window.scrollY > heroHeight) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id.replace('cust-', '')]: e.target.value });
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setCheckoutState('processing');

    try {
      const orderData = await api.createOrder({
        productId: config.PRODUCT_ID,
        ...formData
      });

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Ebook Store",
        description: "Premium Ebook",
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#7c3aed"
        },
        handler: async function (response) {
          setCheckoutState('processing');
          try {
            const verifyResult = await api.verifyPayment({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature
            });

            if (verifyResult.success) {
              localStorage.setItem('ebook_purchase_ref', verifyResult.referenceId);
              setCheckoutState('success');
              setHasPurchased(true);
            }
          } catch (err) {
            setErrorMessage(err.message || "Payment verification failed.");
            setCheckoutState('error');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        setErrorMessage(response.error.description);
        setCheckoutState('error');
      });
      rzp.open();
    } catch (err) {
      setErrorMessage(err.message || "Failed to initiate order.");
      setCheckoutState('error');
    }
  };

  return (
    <>
      {hasPurchased && (
        <div id="recovery-banner" className="recovery-banner">
          <div className="container">
            You have already purchased this ebook! <a href="/access">Access it here &rarr;</a>
          </div>
        </div>
      )}

      <header className="site-header">
        <div className="container">
          <div className="logo">EbookLogo</div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">New Release</div>
            <h1 className="hero-title">The Complete Digital Guide</h1>
            <p className="hero-desc">Master the art of building scalable digital products with this comprehensive 120-page guide.</p>
            
            <div className="price-block">
              <div className="price">₹499</div>
            </div>
            
            <button className="btn btn-primary btn-block buy-now-btn" style={{ maxWidth: '300px' }} onClick={() => setShowCheckout(true)}>
              Get Instant Access
            </button>
          </div>
          <div className="hero-image">
            <div style={{ width: '350px', height: '450px', background: 'linear-gradient(135deg, var(--color-surface-2), var(--color-accent))', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 'bold', color: 'white', textAlign: 'center', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
              Ebook<br/>Cover<br/>Mockup
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="benefits-grid">
            <div className="card benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Quick Start</h3>
              <p className="mt-2 text-muted">Launch your product in days, not months.</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Expert Strategies</h3>
              <p className="mt-2 text-muted">Learn the exact frameworks used by top creators.</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Scale Faster</h3>
              <p className="mt-2 text-muted">Automate your sales and grow your revenue.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4 className="faq-q">Is this a physical book?</h4>
              <p className="faq-a">No, this is a digital PDF ebook. You will get instant access to download it immediately after payment.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-q">How do I receive the ebook?</h4>
              <p className="faq-a">After payment, you will see a success message and we will instantly email you a secure download link.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-q">What if I accidentally close the page after paying?</h4>
              <p className="faq-a">Don't worry! Your secure download link is sent to the email address you provide during checkout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Ready to get started?</h2>
          <button className="btn btn-primary buy-now-btn" style={{ padding: '16px 48px', fontSize: '1.25rem' }} onClick={() => setShowCheckout(true)}>
            Buy Now - ₹499
          </button>
          <p className="mt-4 text-muted">One-time payment. Instant access.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-links">
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/terms.html">Terms of Service</a>
            <a href="/refund.html">Refund Policy</a>
            <a href="/access">Recover Purchase</a>
          </div>
          <p>&copy; 2026 EbookLogo. All rights reserved.</p>
        </div>
      </footer>

      <div id="sticky-cta" className={`sticky-cta ${!showStickyCTA ? 'hidden' : ''}`}>
        <div className="price" style={{ fontSize: '1.5rem' }}>₹499</div>
        <button className="btn btn-primary buy-now-btn" onClick={() => setShowCheckout(true)}>Buy Now</button>
      </div>

      {showCheckout && (
        <div id="checkout-modal" className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => { setShowCheckout(false); setCheckoutState('form'); }}>&times;</button>
            
            {checkoutState === 'form' && (
              <div id="checkout-form-container">
                <h2 className="mb-4">Complete your purchase</h2>
                <form id="checkout-form" onSubmit={handleCheckoutSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" id="cust-name" className="form-input" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address (for delivery)</label>
                    <input type="email" id="cust-email" className="form-input" required value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone (Optional)</label>
                    <input type="tel" id="cust-phone" className="form-input" value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mt-4">Proceed to Pay ₹499</button>
                </form>
              </div>
            )}

            {checkoutState === 'processing' && (
              <div id="checkout-processing" className="text-center">
                <h3 className="mb-2">Processing...</h3>
                <p className="text-muted">Please wait while we securely process your order.</p>
              </div>
            )}

            {checkoutState === 'success' && (
              <div id="checkout-success" className="text-center">
                <div style={{ fontSize: '4rem', color: 'var(--color-success)', marginBottom: '16px' }}>✓</div>
                <h2 className="mb-2">Payment Successful!</h2>
                <p className="text-muted mb-4">Your ebook is ready. We have sent the secure download link to your email.</p>
                <p className="text-muted">Please check your inbox (and spam folder).</p>
              </div>
            )}

            {checkoutState === 'error' && (
              <div id="checkout-error" className="text-center">
                <div style={{ fontSize: '3rem', color: 'var(--color-error)', marginBottom: '16px' }}>!</div>
                <h3 className="mb-2">Payment Failed</h3>
                <p className="text-muted mb-4">{errorMessage}</p>
                <button className="btn btn-outline" onClick={() => setCheckoutState('form')}>Try Again</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
