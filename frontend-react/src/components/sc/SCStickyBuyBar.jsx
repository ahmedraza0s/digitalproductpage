import React, { useState, useEffect } from 'react';

const SCStickyBuyBar = ({ openBookCheckout, isCheckoutOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling down 400px
      if (window.scrollY > 400 && !isCheckoutOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCheckoutOpen]);

  // Also hide if checkout is currently open
  useEffect(() => {
    if (isCheckoutOpen) {
      setIsVisible(false);
    }
  }, [isCheckoutOpen]);

  return (
    <div style={{
      ...styles.bar,
      transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
    }}>
      <div className="container" style={styles.container}>
        <div style={styles.info}>
          <span style={styles.title} className="responsive-hide">The Social Confidence Plan</span>
          <span style={styles.price}>₹99</span>
        </div>
        <button onClick={openBookCheckout} style={styles.button} className="btn">
          Get it Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  bar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(9, 9, 15, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(99, 102, 241, 0.2)',
    padding: '1rem 0',
    zIndex: 900,
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.5)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  title: {
    color: '#F1F0FF',
    fontSize: '1.125rem',
    fontWeight: '600',
  },
  price: {
    color: '#10B981', // Emerald
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
  }
};

export default SCStickyBuyBar;
