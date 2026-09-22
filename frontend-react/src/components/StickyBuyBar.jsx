import React, { useState, useEffect } from 'react';

const StickyBuyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling down a bit (e.g., past the hero)
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div style={styles.barContainer} className="fade-in">
      <div className="container" style={styles.content}>
        <div style={styles.info}>
          <div style={styles.titleGroup}>
            <span style={styles.title}>Stop Being Awkward</span>
            <span style={styles.subtitle}>45-Page Guide</span>
          </div>
          <div style={styles.priceGroup}>
            <span style={styles.oldPrice}>₹1,000</span>
            <span style={styles.newPrice}>₹99</span>
          </div>
        </div>
        <button className="btn btn-primary pulse" style={styles.button} onClick={() => alert("Payment gateway integration goes here")}>
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
    borderTop: '1px solid var(--border-color)',
    zIndex: 9999,
    padding: '0.75rem 0',
    boxShadow: '0 -10px 30px rgba(0,0,0,0.5)',
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
    color: 'var(--text-secondary)',
    textDecoration: 'line-through',
    fontSize: '0.875rem',
  },
  newPrice: {
    color: 'white',
    fontWeight: '800',
    fontSize: '1.25rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  }
};

// Responsive adjustments
if (typeof window !== 'undefined' && window.innerWidth <= 768) {
  styles.info.display = 'none'; // Hide text on small screens to prioritize button and price if needed, or re-layout
  styles.content.flexDirection = 'column';
  styles.content.gap = '0.5rem';
  styles.button.width = '100%';
  styles.info = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
}

export default StickyBuyBar;
