import React from 'react';

const problems = [
  { icon: '🧴', text: 'Trying 10 skincare products with no results' },
  { icon: '💈', text: 'Hair loss panic, no idea what actually works' },
  { icon: '👕', text: "Wearing clothes that just don't fit right" },
  { icon: '💨', text: 'Spraying too much cologne, or too little' },
  { icon: '🧍', text: 'Slouching without even noticing it' },
  { icon: '🔄', text: 'Stuck in a loop of random internet advice' },
];

const ProblemSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>You don't need 20 products.</h2>
          <h3 style={styles.subtitle}>You need to know what actually works.</h3>
        </div>
        
        <div style={styles.grid}>
          {problems.map((prob, idx) => (
            <div key={idx} className="slide-up" style={{...styles.problemCard, animationDelay: `${idx * 0.1}s`}}>
              <div style={styles.icon}>{prob.icon}</div>
              <p style={styles.problemText}>{prob.text}</p>
            </div>
          ))}
        </div>

        <div className="slide-up" style={{...styles.bottomHighlight, animationDelay: '0.6s'}}>
          <div style={styles.highlightIcon}>🎯</div>
          <div>
            <h3 style={styles.solutionHint}>SHARPER puts everything into one simple system.</h3>
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
  },
  container: {
    maxWidth: '900px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    color: 'var(--text-secondary)',
    fontWeight: 'normal',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  problemCard: {
    backgroundColor: 'var(--surface-hover)',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  icon: {
    fontSize: '2rem',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    flexShrink: 0,
  },
  problemText: {
    fontSize: '1.0625rem',
    color: 'var(--text-primary)',
    margin: 0,
    lineHeight: 1.4,
  },
  bottomHighlight: {
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    borderLeft: '5px solid var(--accent-primary)',
    padding: '2.5rem 2rem',
    borderRadius: '0.5rem',
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  highlightIcon: {
    fontSize: '2rem',
  },
  solutionHint: {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    color: 'white',
    lineHeight: 1.3,
    margin: 0,
  }
};

export default ProblemSection;
