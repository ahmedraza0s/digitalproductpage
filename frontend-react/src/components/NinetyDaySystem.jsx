import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const phases = [
  {
    day: "DAY 1–10",
    title: "SUBTRACT",
    color: "#EF4444", // Red
    desc: "Remove bad habits + establish basics"
  },
  {
    day: "DAY 11–20",
    title: "ADD",
    color: "#F59E0B", // Amber
    desc: "Introduce upgrades"
  },
  {
    day: "DAY 21–30",
    title: "REFINE",
    color: "#10B981", // Green
    desc: "Compare progress + fix weak areas"
  }
];

const NinetyDaySystem = ({ openCheckout }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <div className="tag-badge" style={{ marginBottom: '1rem' }}>The Roadmap</div>
          <h2 style={styles.title}>The <span className="gradient-text">30-Day</span> System</h2>
          <p style={styles.subtitle}>
            A structured plan so you always know exactly what to focus on.
          </p>
        </div>

        <div style={isMobile ? { ...styles.timeline, flexDirection: 'column', gap: '0.75rem' } : styles.timeline}>
          {phases.map((phase, idx) => (
            <React.Fragment key={idx}>
              <div className="slide-up" style={{...styles.card, padding: isMobile ? '1.5rem' : '2.5rem 2rem', minHeight: isMobile ? 'auto' : '220px', animationDelay: `${idx * 0.2}s`}}>
                <div style={{...styles.dayBadge, backgroundColor: phase.color + '20', color: phase.color, border: `1px solid ${phase.color}40`}}>
                  {phase.day}
                </div>
                <h3 style={{...styles.phaseTitle, color: phase.color}}>{phase.title}</h3>
                <p style={styles.phaseDesc}>{phase.desc}</p>
              </div>
              
              {idx < phases.length - 1 && (
                <div className="slide-up" style={{...styles.connector, animationDelay: `${idx * 0.2 + 0.1}s`, padding: isMobile ? '0.5rem 0' : '0'}}>
                  {isMobile ? '↓' : '→'}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="slide-up" style={{ textAlign: 'center', marginTop: '4rem', animationDelay: '0.8s' }}>
          <button className="btn btn-primary pulse" style={styles.ctaButton} onClick={openCheckout}>
            START MY 90 DAYS &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--surface-hover)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
  },
  timeline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'var(--surface-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '1.5rem',
    padding: '2.5rem 2rem',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    minHeight: '220px',
  },
  dayBadge: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
  },
  phaseTitle: {
    fontSize: '1.75rem',
    fontWeight: '800',
    marginBottom: '1rem',
    letterSpacing: '0.05em',
  },
  phaseDesc: {
    color: 'var(--text-primary)',
    fontSize: '1rem',
    lineHeight: 1.6,
    margin: 0,
  },
  connector: {
    fontSize: '2rem',
    color: 'var(--text-secondary)',
    opacity: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaButton: {
    padding: '1.25rem 2.5rem',
    fontSize: '1.125rem',
  }
};

export default NinetyDaySystem;
