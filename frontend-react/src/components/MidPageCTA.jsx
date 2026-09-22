import React from 'react';
import { BOOK_PRICE } from '../config';
import { useWindowSize } from '../hooks/useWindowSize';

const MidPageCTA = ({ openCheckout }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <div style={isMobile ? { ...styles.contentWrapper, flexDirection: 'column', textAlign: 'center' } : styles.contentWrapper}>
          <div style={isMobile ? { ...styles.textSection, flexDirection: 'column', gap: '1rem' } : styles.textSection}>
            <span style={styles.icon}>📖</span>
            <div>
              <h3 style={styles.heading}>You've seen what's inside.</h3>
              <p style={styles.subtext}>Why wait? Start reading in less than 2 minutes.</p>
            </div>
          </div>
          <div style={isMobile ? { ...styles.actionSection, width: '100%' } : styles.actionSection}>
            <button className="btn btn-primary pulse" style={styles.button} onClick={openCheckout}>
              GET IT NOW — ₹{BOOK_PRICE}
            </button>
            <p style={styles.microText}>Instant PDF • Read tonight</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(245, 158, 11, 0.05) 100%)',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    padding: '4rem 0',
  },
  container: {
    maxWidth: '900px',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    backgroundColor: 'var(--surface-color)',
    padding: '2.5rem',
    borderRadius: '1.5rem',
    border: '1px solid rgba(139, 92, 246, 0.4)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 0 40px rgba(139,92,246,0.1)',
  },
  textSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  icon: {
    fontSize: '3rem',
  },
  heading: {
    fontSize: '1.5rem',
    color: 'white',
    margin: '0 0 0.5rem 0',
  },
  subtext: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    margin: 0,
  },
  actionSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    flexShrink: 0,
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    width: '100%',
  },
  microText: {
    fontSize: '0.875rem',
    color: 'var(--text-trust)',
    margin: 0,
  }
};

export default MidPageCTA;
