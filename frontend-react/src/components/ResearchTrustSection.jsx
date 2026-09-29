import React from 'react';

const badges = ["Skin", "Hair", "Fragrance", "Posture"];

const ResearchTrustSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.content}>
          <h2 style={styles.headline}>Built around research, not random internet advice.</h2>
          
          <div style={styles.badgeContainer}>
            {badges.map((badge, idx) => (
              <div key={idx} className="slide-up" style={{...styles.badge, animationDelay: `${idx * 0.1}s`}}>
                <span style={styles.badgeIcon}>🔬</span>
                {badge}
              </div>
            ))}
          </div>
          
          <div className="slide-up" style={{ animationDelay: '0.4s' }}>
            <p style={styles.note}><strong>Sources included inside the guide</strong></p>
            <p style={styles.disclaimer}>
              *Some evidence in these areas is still limited. The guide acknowledges this.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
  },
  headline: {
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    color: 'white',
    margin: 0,
  },
  badgeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '9999px',
    color: 'var(--text-trust)',
    fontWeight: '600',
    fontSize: '1rem',
    boxShadow: '0 0 15px rgba(139, 92, 246, 0.1)',
  },
  badgeIcon: {
    fontSize: '1.25rem',
  },
  note: {
    color: 'var(--accent-primary)',
    fontSize: '1.125rem',
    margin: '0 0 0.5rem 0',
  },
  disclaimer: {
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
    fontStyle: 'italic',
    margin: 0,
    opacity: 0.8,
  }
};

export default ResearchTrustSection;
