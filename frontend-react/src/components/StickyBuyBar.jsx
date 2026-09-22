import React, { useState, useEffect } from 'react';
import CheckoutModal from './CheckoutModal';
import { BOOK_PRICE } from '../config';

const StickyBuyBar = ({ openCheckout }) => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      // Show the bar earlier on mobile, as the hero takes up more viewport
      const threshold = window.innerWidth <= 768 ? 200 : 500;
      if (window.scrollY > threshold) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <div style={styles.barContainer} className="fade-in">
      <div className="container" style={styles.content}>
        <div style={styles.info}>
          {!isMobile ? (
            <div style={styles.titleGroup}>
              <span style={styles.title}>Stop Being Awkward</span>
              <span style={styles.subtitle}>45-Page Guide</span>
            </div>
          ) : (
            <div style={styles.titleGroup}>
              <span style={{...styles.title, fontSize: '0.85rem'}}>Stop Being Awkward</span>
            </div>
          )}
          
          <div style={styles.priceGroup}>
            <span style={styles.oldPrice}>₹1,000</span>
            <span style={styles.newPrice}>₹{BOOK_PRICE}</span>
          </div>
        </div>
        
        <button 
          className="btn btn-primary pulse" 
          style={{...styles.button, ...(isMobile ? styles.mobileButton : {})}} 
          onClick={openCheckout}
        >
          Buy Now &rarr;
        </button>
      </div>
    </div>
  );
};


const styles = {
  barContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(10, 10, 20, 0.95)',
    backdropFilter: 'blur(12px)',
    borderTop: '1px solid rgba(245,158,11,0.2)',
    zIndex: 9999,
    padding: '0.75rem 0',
    boxShadow: '0 -10px 30px rgba(0,0,0,0.6), 0 -1px 0 rgba(245,158,11,0.15)',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexGrow: 1,
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: '700',
    color: 'white',
    fontSize: '1rem',
  },
  subtitle: {
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
  },
  priceGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  oldPrice: {
    color: '#6B6B9A',
    textDecoration: 'line-through',
    fontSize: '0.875rem',
  },
  newPrice: {
    color: '#F59E0B',
    fontWeight: '800',
    fontSize: '1.25rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  mobileButton: {
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    width: 'auto',
  }
};

export default StickyBuyBar;
