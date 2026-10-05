import React from 'react';

const SCAboutSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        
        <p style={styles.opening}>
          <em>"Most confidence advice says 'just be yourself' or 'fake it till you make it'. That doesn't help when your mind is racing."</em>
        </p>

        <div style={styles.content}>
          <p style={styles.paragraph}>
            This book works differently. It's built on the research behind cognitive behavioural therapy for social anxiety, one of the best-studied approaches in clinical psychology.
          </p>
          <p style={styles.paragraph}>
            I turned those ideas into plain language, with small exercises at the end of every chapter.
          </p>
        </div>

        <div style={styles.highlightCard}>
          <p style={styles.highlightText}>
            It's short on purpose. You can read it in one evening. The real change comes from the 30 days of practice after that.
          </p>
        </div>

        <div style={styles.statsRow}>
          <div style={styles.statPill}>📖 ~20 pages</div>
          <div style={styles.statPill}>🗓️ 30-day plan</div>
          <div style={styles.statPill}>🔬 CBT-based</div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#09090F',
  },
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
  },
  opening: {
    fontSize: '1.25rem',
    color: '#9B9BD0',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    opacity: 0.9,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginBottom: '3rem',
  },
  paragraph: {
    fontSize: '1.125rem',
    color: '#F1F0FF',
    lineHeight: '1.7',
    margin: 0,
  },
  highlightCard: {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.05))',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '3rem',
  },
  highlightText: {
    fontSize: '1.25rem',
    color: '#F1F0FF',
    fontWeight: '500',
    lineHeight: '1.6',
    margin: 0,
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  statPill: {
    backgroundColor: '#111120',
    border: '1px solid #333',
    color: '#C8C0FF',
    padding: '0.75rem 1.25rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
  }
};

export default SCAboutSection;
