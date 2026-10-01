import React from 'react';

const timelineWeeks = [
  {
    week: 1,
    emoji: '🧴',
    title: 'Skin + Hygiene Foundations',
    points: ['Determine your exact skin type', 'Build a 3-step routine', 'Upgrade oral and body hygiene']
  },
  {
    week: 2,
    emoji: '💈',
    title: 'Hair + Grooming Mastery',
    points: ['Identify your face shape & best haircut', 'Tackle thinning hair proactively', 'Master facial hair grooming']
  },
  {
    week: 3,
    emoji: '👕',
    title: 'Style + Scent Identity',
    points: ['Understand fit and proportions', 'Build a versatile capsule wardrobe', 'Find your signature fragrance']
  },
  {
    week: 4,
    emoji: '🧍',
    title: 'Posture + Lock-In System',
    points: ['Fix forward head posture & rounded shoulders', 'Build confident body language', 'Solidify your 5-minute daily habits']
  }
];

const TimelineSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Your <span className="gradient-text">30-Day</span> Roadmap.</h2>
          <p style={styles.subtitle}>A step-by-step system, not a confusing brain dump.</p>
        </div>

        <div style={styles.timelineWrapper}>
          {timelineWeeks.map((week, idx) => (
            <div key={idx} className="slide-up" style={{...styles.weekCard, animationDelay: `${idx * 0.15}s`}}>
              <div style={styles.weekHeader}>
                <span style={styles.weekBadge}>WEEK {week.week}</span>
                <span style={styles.weekEmoji}>{week.emoji}</span>
              </div>
              <h3 style={styles.weekTitle}>{week.title}</h3>
              <ul style={styles.pointsList}>
                {week.points.map((point, pIdx) => (
                  <li key={pIdx} style={styles.pointItem}>
                    <span style={styles.checkIcon}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
  },
  container: {
    maxWidth: '1000px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
    color: 'var(--text-secondary)',
  },
  timelineWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '2rem',
  },
  weekCard: {
    backgroundColor: 'var(--surface-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '1rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  weekHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  weekBadge: {
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    color: 'var(--accent-primary)',
    fontWeight: '700',
    fontSize: '0.875rem',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    letterSpacing: '0.05em',
  },
  weekEmoji: {
    fontSize: '2rem',
  },
  weekTitle: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    color: 'white',
    lineHeight: 1.4,
  },
  pointsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: 'auto',
  },
  pointItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    color: 'var(--text-secondary)',
    fontSize: '0.9375rem',
    lineHeight: 1.5,
  },
  checkIcon: {
    color: 'var(--success-color)',
    fontWeight: 'bold',
  }
};

export default TimelineSection;
