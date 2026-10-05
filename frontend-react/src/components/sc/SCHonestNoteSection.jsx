import React from 'react';

const SCHonestNoteSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        
        <div style={styles.card}>
          <div style={styles.icon}>🔍</div>
          <h2 style={styles.heading}>An Honest Note</h2>
          
          <p style={styles.text}>
            I left out the hype. The book explains what power posing really showed (much less than the viral talk claimed) and what the eye contact research actually says. 
          </p>
          <p style={styles.text}>
            If a popular idea didn't hold up, I said so.
          </p>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#09090F',
  },
  card: {
    backgroundColor: '#111120',
    border: '1px solid rgba(255, 255, 255, 0.1)', // Lighter, more neutral border
    borderRadius: '16px',
    padding: '3rem',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: 'none', // No glow to signal grounded honesty
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: '1.75rem',
    color: '#F1F0FF',
    marginBottom: '1.5rem',
  },
  text: {
    fontSize: '1.125rem',
    color: '#9B9BD0',
    lineHeight: '1.7',
    marginBottom: '1rem',
  }
};

export default SCHonestNoteSection;
