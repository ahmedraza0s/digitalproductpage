import React from 'react';

const SCStoryPreviewSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        
        <h2 style={styles.heading}>A Small Taste From Inside</h2>

        <div style={styles.quoteCard} className="fade-in">
          <div style={styles.quoteMark}>"</div>
          
          <p style={styles.storyText}>
            Maya is at a colleague's dinner. The woman beside her mentions she just moved to the city. Maya is silently rehearsing "So what do you do?" and only half hears it. She asks something that was already answered, feels her face heat up, and decides the evening proves what she always suspected.
          </p>
          <p style={styles.storyText}>
            Nothing in the woman's face suggested judgment. Maya's attention was simply somewhere else.
          </p>

          <div style={styles.attribution}>
            — Chapter 2, The Social Confidence Plan
          </div>
        </div>

        <div style={styles.hookContainer}>
          <p style={styles.hookText}>
            If that made you wince, Chapter 2 is for you.
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
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#F1F0FF',
    marginBottom: '3rem',
  },
  quoteCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '16px',
    padding: '3rem 4rem',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
  },
  quoteMark: {
    position: 'absolute',
    top: '1rem',
    left: '2rem',
    fontSize: '6rem',
    color: 'rgba(99, 102, 241, 0.2)',
    fontFamily: 'Georgia, serif',
    lineHeight: '1',
  },
  storyText: {
    fontSize: '1.25rem',
    color: '#818CF8', // Lavender for story text
    lineHeight: '1.7',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 1,
  },
  attribution: {
    fontSize: '1rem',
    color: '#9B9BD0',
    textAlign: 'right',
    marginTop: '2rem',
  },
  hookContainer: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  hookText: {
    fontSize: '1.25rem',
    color: '#10B981', // Emerald for positive hook
    fontWeight: '600',
  }
};

export default SCStoryPreviewSection;
