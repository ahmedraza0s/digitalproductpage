import React, { useState, useEffect } from 'react';
import { BOOK_PRICE } from '../config';
import logo from '../assets/images/logo.jpg';
import { useWindowSize } from '../hooks/useWindowSize';

const Navbar = ({ openCheckout }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{...styles.nav, ...(scrolled ? styles.navScrolled : {})}}>
      <div className="container" style={styles.container}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Stop Being Awkward Logo" style={styles.logo} />
          <span style={styles.logoText}>Stop Being Awkward</span>
        </div>
        
        <div style={isMobile ? { ...styles.links, display: 'none' } : styles.links}>
          <a href="#what-inside" className="nav-link">What's Inside</a>
          <a href="#who-for" className="nav-link">Who It's For</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>

        <button className="btn btn-primary pulse" style={styles.ctaButton} onClick={openCheckout}>
          Get for ₹{BOOK_PRICE}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 0',
    transition: 'var(--transition-smooth)',
    backgroundColor: 'transparent',
  },
  navScrolled: {
    backgroundColor: 'rgba(10, 10, 20, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border-color)',
    padding: '0.75rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    height: '32px',
    borderRadius: '4px',
  },
  logoText: {
    fontWeight: '700',
    fontSize: '1.125rem',
    display: 'inline',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    '@media (maxWidth: 768px)': {
      display: 'none',
    }
  },
  link: {
    color: 'var(--text-trust)',
    fontWeight: '500',
    fontSize: '0.9375rem',
    position: 'relative',
    textDecoration: 'none',
  },
  ctaButton: {
    padding: '0.6rem 1.25rem',
    fontSize: '0.9375rem',
  }
};

export default Navbar;
