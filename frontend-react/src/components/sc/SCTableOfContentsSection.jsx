import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SCTableOfContentsSection = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 992;
  const chapters = [
    "Confidence Is a Skill, Not a Personality Type",
    "The Loop That Keeps You Stuck",
    "Let Your Body Go First",
    "Bring Your Own Energy",
    "Conversations That Keep Moving",
    "Humour, Teasing and Saying No",
    "Switching Off the Replay",
    "Thirty Days of Practice"
  ];

  const bonuses = [
    "A short exercise at the end of every chapter",
    "Scripts for teasing, disagreeing and declining invitations",
    "A week-by-week 30-day plan",
    "A pocket card to read before any social event",
    "A list of the studies used, if you want to read further"
  ];

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        
        <div style={isMobile ? { ...styles.grid, gridTemplateColumns: '1fr', gap: '2rem' } : styles.grid}>
          
          <div style={styles.chaptersColumn}>
            <h2 style={isMobile ? { ...styles.heading, textAlign: 'center' } : styles.heading}>What's Inside</h2>
            <div style={styles.chapterList}>
              {chapters.map((title, idx) => (
                <div key={idx} style={styles.chapterItem}>
                  <span style={styles.chapterNumber}>{idx + 1}</span>
                  <span style={styles.chapterTitle}>{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.bonusesColumn}>
            <div style={isMobile ? { ...styles.bonusCard, padding: '1.5rem' } : styles.bonusCard}>
              <h3 style={isMobile ? { ...styles.bonusHeading, textAlign: 'center' } : styles.bonusHeading}>Also in the PDF</h3>
              <ul style={styles.bonusList}>
                {bonuses.map((bonus, idx) => (
                  <li key={idx} style={styles.bonusItem}>
                    <span style={styles.checkIcon}>✅</span>
                    <span style={styles.bonusText}>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0A0A14',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    color: '#F1F0FF',
    marginBottom: '2rem',
  },
  chapterList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  chapterItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#111120',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    borderLeft: '4px solid transparent',
    ':hover': {
      borderLeft: '4px solid #6366F1',
      backgroundColor: '#1a1a2e',
    }
  },
  chapterNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    color: '#6366F1',
    borderRadius: '50%',
    fontWeight: '700',
    fontSize: '0.875rem',
  },
  chapterTitle: {
    fontSize: '1.125rem',
    color: '#F1F0FF',
  },
  bonusCard: {
    backgroundColor: 'rgba(16, 185, 129, 0.05)', // Emerald tint
    border: '1px solid rgba(16, 185, 129, 0.2)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
  },
  bonusHeading: {
    fontSize: '1.5rem',
    color: '#10B981',
    marginBottom: '1.5rem',
  },
  bonusList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  bonusItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  checkIcon: {
    fontSize: '1.25rem',
    lineHeight: '1.2',
  },
  bonusText: {
    fontSize: '1.05rem',
    color: '#C8C0FF',
    lineHeight: '1.5',
  }
};

// Add responsive styles directly if needed or rely on index.css utilities 
// We will assume a global media query handles grid columns on mobile.

export default SCTableOfContentsSection;
