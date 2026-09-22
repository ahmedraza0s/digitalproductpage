import React from 'react';

const ProblemSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container text-center" style={styles.container}>
        <h2 style={styles.kicker} className="text-accent">Ever had this happen?</h2>
        
        <div style={styles.storyContainer}>
          <p style={styles.storyText}>You meet someone new.</p>
          
          <div style={styles.dialogueBox}>
            <strong>“Hi, how are you?”</strong>
          </div>
          
          <p style={styles.storyText}>They answer.</p>
          <p style={styles.storyText}>And suddenly...</p>
          
          <h3 style={styles.dramaticText}>Your mind goes blank.</h3>
          
          <div style={styles.thoughtsContainer}>
            <p style={styles.thoughtItem}>&ldquo;What should I ask now?&rdquo;</p>
            <p style={styles.thoughtItem}>&ldquo;Am I being boring?&rdquo;</p>
            <p style={styles.thoughtItem}>&ldquo;What if this gets awkward?&rdquo;</p>
            <p style={styles.thoughtItem}>&ldquo;Should I say something?&rdquo;</p>
            <p style={styles.thoughtItem}>&ldquo;What do I even talk about?&rdquo;</p>
          </div>
          
          <p style={styles.storyText}>Then the conversation slowly dies.</p>
        </div>

        <div style={styles.bottomHighlight}>
          <p style={styles.highlightText}>The problem isn't that you can't talk.</p>
          <h3 style={styles.solutionHint}>You just don't know how to keep the conversation moving.</h3>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--surface-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '800px',
  },
  kicker: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '3rem',
  },
  storyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
    marginBottom: '4rem',
  },
  storyText: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
  },
  dialogueBox: {
    backgroundColor: 'var(--bg-color)',
    padding: '1rem 2rem',
    borderRadius: '1rem',
    border: '1px solid var(--border-color)',
    fontSize: '1.5rem',
    color: 'white',
    margin: '1rem 0',
  },
  dramaticText: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: 'white',
    margin: '2rem 0',
  },
  thoughtsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontStyle: 'italic',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
  },
  thoughtItem: {
    fontSize: '1.125rem',
  },
  bottomHighlight: {
    backgroundColor: 'rgba(56, 189, 248, 0.05)',
    border: '1px solid rgba(56, 189, 248, 0.2)',
    padding: '3rem 2rem',
    borderRadius: '1rem',
  },
  highlightText: {
    fontSize: '1.5rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
  },
  solutionHint: {
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    color: 'var(--accent-color)',
    lineHeight: 1.2,
    margin: 0,
  }
};

export default ProblemSection;
