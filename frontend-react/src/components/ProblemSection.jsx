import React from 'react';

const ProblemSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <div className="tag-badge" style={{ marginBottom: '1.5rem' }}>Ever had this happen?</div>
        </div>
        
        <div style={styles.storyContainer}>
          
          <div className="slide-up" style={{...styles.storyCard, animationDelay: '0s'}}>
            <div style={styles.stepNum}>1</div>
            <p style={styles.storyText}>You meet someone new.</p>
          </div>
          
          <div className="slide-up" style={{...styles.storyCard, ...styles.highlightCard, animationDelay: '0.2s'}}>
            <div style={styles.stepNum}>2</div>
            <strong>“Hi, how are you?”</strong>
          </div>
          
          <div className="slide-up" style={{...styles.storyCard, animationDelay: '0.4s'}}>
            <div style={styles.stepNum}>3</div>
            <p style={styles.storyText}>They answer.</p>
            <p style={styles.storyText}>And suddenly...</p>
          </div>
          
          <div className="slide-up" style={{...styles.storyCard, ...styles.dramaticCard, animationDelay: '0.6s'}}>
            <h3 style={styles.dramaticText}>Your mind goes blank.</h3>
            
            <div style={styles.thoughtsContainer}>
              <p style={styles.thoughtItem}>&ldquo;What should I ask now?&rdquo;</p>
              <p style={styles.thoughtItem}>&ldquo;Am I being boring?&rdquo;</p>
              <p style={styles.thoughtItem}>&ldquo;What if this gets awkward?&rdquo;</p>
            </div>
            
            <p style={styles.storyText}>Then the conversation slowly dies.</p>
          </div>
        </div>

        <div className="slide-up" style={{...styles.bottomHighlight, animationDelay: '0.8s'}}>
          <div style={styles.highlightIcon}>💡</div>
          <div>
            <p style={styles.highlightText}>The problem isn't that you can't talk.</p>
            <h3 style={styles.solutionHint}>You just don't know how to keep the conversation moving.</h3>
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
    maxWidth: '700px',
  },
  header: {
    textAlign: 'center',
  },
  storyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  storyCard: {
    backgroundColor: 'var(--surface-hover)',
    padding: '1.5rem 2rem',
    borderRadius: '1rem',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  highlightCard: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    color: 'white',
    fontSize: '1.25rem',
  },
  dramaticCard: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--accent-primary)',
    padding: '2.5rem 2rem',
  },
  stepNum: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    fontWeight: '700',
    fontSize: '0.875rem',
    flexShrink: 0,
  },
  storyText: {
    fontSize: '1.125rem',
    color: 'var(--text-primary)',
    margin: 0,
  },
  dramaticText: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    color: 'var(--accent-primary)',
    margin: '0 0 1.5rem 0',
  },
  thoughtsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontStyle: 'italic',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    paddingLeft: '1rem',
    borderLeft: '2px solid rgba(139, 92, 246, 0.5)',
  },
  thoughtItem: {
    fontSize: '1rem',
    margin: 0,
  },
  bottomHighlight: {
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    borderLeft: '5px solid var(--accent-primary)',
    padding: '2.5rem 2rem',
    borderRadius: '0.5rem',
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
  },
  highlightIcon: {
    fontSize: '2rem',
  },
  highlightText: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
  },
  solutionHint: {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    color: 'white',
    lineHeight: 1.3,
    margin: 0,
  }
};

export default ProblemSection;

