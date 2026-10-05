import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SCHeroSection from '../components/sc/SCHeroSection';
import SCProblemSection from '../components/sc/SCProblemSection';
import SCAboutSection from '../components/sc/SCAboutSection';
import SCWhatYouLearnSection from '../components/sc/SCWhatYouLearnSection';
import SCTableOfContentsSection from '../components/sc/SCTableOfContentsSection';
import SCOfferSection from '../components/sc/SCOfferSection';
import SCFAQSection from '../components/sc/SCFAQSection';
import SCStickyBuyBar from '../components/sc/SCStickyBuyBar';
import CheckoutModal from '../components/CheckoutModal';
import { SOCIAL_CONFIDENCE_BOOK_PRICE } from '../config';

const SocialConfidencePage = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState({ 
    id: 'ebook-003', 
    price: import.meta.env.VITE_SOCIAL_CONFIDENCE_BOOK_PRICE || '99' 
  });

  const openBookCheckout = () => {
    setCheckoutProduct({ 
      id: 'ebook-003', 
      price: import.meta.env.VITE_SOCIAL_CONFIDENCE_BOOK_PRICE || '99' 
    });
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => setIsCheckoutOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Social Confidence Plan — 30-Day Practice Guide";
  }, []);

  return (
    <div style={styles.page}>
      <Navbar openCheckout={openBookCheckout} title="The Social Confidence Plan" price={SOCIAL_CONFIDENCE_BOOK_PRICE} />
      <main>
        <SCHeroSection openCheckout={openBookCheckout} />
        <SCProblemSection />
        <SCAboutSection />
        <SCWhatYouLearnSection openCheckout={openBookCheckout} />
        <SCTableOfContentsSection />
        <SCOfferSection openBookCheckout={openBookCheckout} />
        <SCFAQSection />
      </main>

      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerContent}>
            <div style={styles.brand}>WESTERNFEXX</div>
            <p style={styles.footerText}>
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p style={styles.disclaimer}>
              <em>This book is for general education. It is not medical or psychological advice and does not replace a qualified professional.</em>
            </p>
            <div style={styles.footerLinks}>
              <a href="/terms.html" style={styles.link}>Terms</a>
              <a href="/privacy.html" style={styles.link}>Privacy</a>
              <a href="/refund.html" style={styles.link}>Refunds</a>
              <a href="/access" style={styles.link}>Access Policy</a>
            </div>
            <p style={styles.footerText}>
              Contact: support@westernfexx.com
            </p>
          </div>
        </div>
      </footer>

      <SCStickyBuyBar openBookCheckout={openBookCheckout} isCheckoutOpen={isCheckoutOpen} />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
        productId={checkoutProduct.id}
        price={checkoutProduct.price}
      />
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#09090F',
    color: '#F1F0FF',
    minHeight: '100vh',
  },
  footer: {
    padding: '4rem 0',
    backgroundColor: '#05050A',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    letterSpacing: '-0.5px',
  },
  footerText: {
    color: '#9B9BD0',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    maxWidth: '500px',
  },
  footerLinks: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  link: {
    color: '#9B9BD0',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s',
  },
  disclaimer: {
    fontSize: '0.875rem',
    color: '#9B9BD0',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    display: 'inline-block',
    margin: '0',
    lineHeight: 1.5,
  }
};

export default SocialConfidencePage;
