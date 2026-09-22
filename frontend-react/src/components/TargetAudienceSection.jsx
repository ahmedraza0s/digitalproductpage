import React from 'react';
import socialCollege from '../assets/images/social_college.jpg';

const isFor = [
  "You feel awkward meeting new people",
  "You don't know what to say after “Hi”",
  "Your conversations often become short and dry",
  "You overthink before speaking",
  "You struggle to keep conversations going"
];

const notFor = [
  "You naturally lead every conversation",
  "You love being the center of attention",
  "You never run out of things to say"
];

const TargetAudienceSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      {/* Background glow */}
      <div style={styles.glowTopRight}></div>

      <div className="container">
        
        <div style={styles.mainGrid}>
          {/* Text Content */}
          <div style={styles.contentColumn}>
            <div className="slide-up">
              <h2 style={styles.title}>This book is <span className="gradient-text">for you</span> if...</h2>
              <div style={styles.list}>
                {isFor.map((check, idx) => (
                  <div key={idx} style={{...styles.listItem, animationDelay: `${idx * 0.1}s`}} className="slide-up">
                    <div style={styles.checkIcon}>✓</div>
                    <p style={styles.listText}>{check}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="slide-up" style={{ marginTop: '4rem', animationDelay: '0.5s' }}>
              <h3 style={styles.subtitle}>Who it's <span style={{ color: '#EF4444' }}>NOT</span> for:</h3>
              <div style={styles.notForGrid}>
                {notFor.map((item, idx) => (
                  <div key={idx} style={styles.notForCard}>
                    <div style={styles.crossIcon}>✕</div>
                    <p style={styles.notForText}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="slide-up" style={styles.imageColumn}>
            <div style={styles.imageWrapper}>
              <img src={socialCollege} alt="Social setting" style={styles.image} />
              <div style={styles.imageOverlay}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--surface-color)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
    overflow: 'hidden',
  },
  glowTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, var(--accent-glow) 0%, rgba(10,10,20,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    '@media (maxWidth: 992px)': {
      gridTemplateColumns: '1fr',
    }
  },
  contentColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    marginBottom: '2.5rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    backgroundColor: 'var(--surface-hover)',
    padding: '1.25rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--border-color)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  checkIcon: {
    color: 'var(--success-color)',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    flexShrink: 0,
  },
  listText: {
    fontSize: '1.125rem',
    color: 'var(--text-primary)',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  notForGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
  },
  notForCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    opacity: 0.7,
  },
  crossIcon: {
    color: '#EF4444',
    fontWeight: 'bold',
    marginTop: '2px',
  },
  notForText: {
    color: 'var(--text-secondary)',
    fontSize: '0.9375rem',
    margin: 0,
    lineHeight: 1.5,
  },
  imageColumn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '500px',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    inset: 0,
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(19, 19, 42, 0.9), rgba(19, 19, 42, 0.1))',
  }
};

// Handle responsive grid
if (typeof window !== 'undefined' && window.innerWidth <= 992) {
  styles.mainGrid.gridTemplateColumns = '1fr';
  styles.imageWrapper.minHeight = '400px';
}

export default TargetAudienceSection;

