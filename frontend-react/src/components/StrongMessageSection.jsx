import React from 'react';

const StrongMessageSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <h2 style={styles.headline}>
          You Don't Need To Become <br />
          <span className="text-accent">An Extrovert.</span>
        </h2>
        
        <div style={styles.list}>
          <p style={styles.listItem}>
            <span style={styles.icon}>✕</span>
            You don't need to become the loudest person in the room.
          </p>
          <p style={styles.listItem}>
            <span style={styles.icon}>✕</span>
            You don't need a completely different personality.
          </p>
          <p style={styles.listItem}>
            <span style={styles.icon}>✕</span>
            And you definitely don't need to memorize hundreds of pickup lines.
          </p>
        </div>

        <div style={styles.coreMessage}>
          <p style={styles.coreText}>
            You need to understand <strong>how conversations actually flow.</strong>
          </p>
          
          <div style={styles.flowDiagram}>
            <div style={styles.flowStep}>Start</div>
            <div style={styles.flowArrow}>&rarr;</div>
            <div style={styles.flowStep}>Respond</div>
            <div style={styles.flowArrow}>&rarr;</div>
            <div style={styles.flowStep}>Ask</div>
            <div style={styles.flowArrow}>&rarr;</div>
            <div style={styles.flowStep}>Build</div>
            <div style={styles.flowArrow}>&rarr;</div>
            <div style={styles.flowStep}>Continue</div>
          </div>
          
          <p style={styles.conclusion}>
            That's what this book focuses on.
          </p>
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
  container: {
    maxWidth: '800px',
    textAlign: 'center',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    marginBottom: '3rem',
    lineHeight: 1.1,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
    marginBottom: '4rem',
  },
  listItem: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  icon: {
    color: '#EF4444', /* Red for the cross */
    fontWeight: 'bold',
  },
  coreMessage: {
    backgroundColor: 'var(--bg-color)',
    padding: '3rem 2rem',
    borderRadius: '1rem',
    border: '1px solid var(--border-color)',
  },
  coreText: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  flowDiagram: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  flowStep: {
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    color: 'var(--accent-color)',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontWeight: '600',
    border: '1px solid var(--accent-color)',
  },
  flowArrow: {
    color: 'var(--text-secondary)',
    fontWeight: 'bold',
  },
  conclusion: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
  }
};

export default StrongMessageSection;
