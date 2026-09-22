import React from 'react';

const MidPageCTA = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <div style={styles.contentWrapper}>
          <div style={styles.textSection}>
            <span style={styles.icon}>📖</span>
            <div>
              <h3 style={styles.heading}>You've seen what's inside.</h3>
              <p style={styles.subtext}>Why wait? Start reading in less than 2 minutes.</p>
            </div>
          </div>
          <div style={styles.actionSection}>
            <button className="btn btn-primary pulse" style={styles.button} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
              GET IT NOW — ₹99
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

// Responsive handling
if (typeof window !== 'undefined' && window.innerWidth <= 768) {
  styles.contentWrapper.flexDirection = 'column';
  styles.contentWrapper.textAlign = 'center';
  styles.textSection.flexDirection = 'column';
  styles.textSection.gap = '1rem';
  styles.actionSection.width = '100%';
}

export default MidPageCTA;
