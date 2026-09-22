import React from 'react';
import confidentChat from '../assets/images/confident_chat.jpg';
import { useWindowSize } from '../hooks/useWindowSize';

const StrongMessageSection = () => {
  const { width } = useWindowSize();
  const isTablet = width <= 992;
  const isMobile = width <= 768;
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        
        <div style={isTablet ? { ...styles.grid, gridTemplateColumns: '1fr' } : styles.grid}>
          <div className="slide-up" style={styles.imageColumn}>
            <img src={confidentChat} alt="Confident Conversation" style={styles.image} />
            <div style={isTablet ? { ...styles.imageOverlay, background: 'linear-gradient(to top, rgba(28, 28, 58, 0.8), rgba(28, 28, 58, 0.2))' } : styles.imageOverlay}></div>
          </div>

          <div className="slide-up" style={{...styles.contentColumn, animationDelay: '0.2s'}}>
            <h2 style={styles.headline}>
              You Don't Need To Become <br />
              <span className="gradient-text">An Extrovert.</span>
            </h2>
            
            <div style={styles.list}>
              <div style={styles.listItem}>
                <span style={styles.icon}>✕</span>
                <p style={styles.listText}>You don't need to become the loudest person in the room.</p>
              </div>
              <div style={styles.listItem}>
                <span style={styles.icon}>✕</span>
                <p style={styles.listText}>You don't need a completely different personality.</p>
              </div>
              <div style={styles.listItem}>
                <span style={styles.icon}>✕</span>
                <p style={styles.listText}>And you definitely don't need to memorize pickup lines.</p>
              </div>
            </div>

            <div style={styles.coreMessage}>
              <p style={styles.coreText}>
                You just need to understand <strong>how conversations actually flow.</strong>
              </p>
              
              <div style={styles.stepper}>
                <div style={styles.step}>
                  <div style={styles.stepDot}>1</div>
                  <span style={styles.stepLabel}>Start</span>
                </div>
                <div style={styles.stepLine}></div>
                <div style={styles.step}>
                  <div style={styles.stepDot}>2</div>
                  <span style={styles.stepLabel}>Respond</span>
                </div>
                <div style={styles.stepLine}></div>
                <div style={styles.step}>
                  <div style={styles.stepDot}>3</div>
                  <span style={styles.stepLabel}>Ask</span>
                </div>
                <div style={styles.stepLine}></div>
                <div style={styles.step}>
                  <div style={styles.stepDot}>4</div>
                  <span style={styles.stepLabel}>Build</span>
                </div>
              </div>
              
              <button className="btn btn-primary pulse" style={isMobile ? { ...styles.ctaButton, width: '100%' } : styles.ctaButton} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
                Ready to stop overthinking? &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--surface-hover)',
    borderBottom: '1px solid var(--border-color)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    '@media (maxWidth: 992px)': {
      gridTemplateColumns: '1fr',
    }
  },
  imageColumn: {
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(28, 28, 58, 0.2), rgba(28, 28, 58, 0.8))',
  },
  contentColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    lineHeight: 1.1,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  listItem: {
    backgroundColor: 'var(--danger-bg)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    padding: '1rem 1.5rem',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  icon: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  listText: {
    color: 'var(--text-secondary)',
    fontSize: '1.0625rem',
    margin: 0,
  },
  coreMessage: {
    marginTop: '1rem',
  },
  coreText: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: 'white',
  },
  stepper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative',
    zIndex: 2,
  },
  stepDot: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    border: '2px solid var(--accent-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    color: 'var(--accent-primary)',
  },
  stepLabel: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  stepLine: {
    flexGrow: 1,
    height: '2px',
    background: 'linear-gradient(90deg, var(--accent-primary), rgba(139,92,246,0.1))',
    position: 'relative',
    top: '-12px',
    margin: '0 0.5rem',
    zIndex: 1,
  },
  ctaButton: {
    marginTop: '2rem',
    padding: '1rem 2.5rem',
  }
};

export default StrongMessageSection;

