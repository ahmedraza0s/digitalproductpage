import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import BookMockup from './BookMockup';

const checklist = [
  "Skin routine (morning + night)",
  "Hair-loss guide (products + treatments)",
  "Beard & haircut tips",
  "8-piece wardrobe essentials",
  "Fragrance rules & hygiene",
  "Posture exercises (8-min daily)",
  "30-day tracker checklist",
  "Research & sources included"
];

const TableOfContents = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 992;

  return (
    <section style={styles.section} className="section-padding" id="what-inside">
      <div className="container">
        <div style={isMobile ? { ...styles.grid, gridTemplateColumns: '1fr', gap: '3rem' } : styles.grid}>
          
          <div className="slide-up" style={styles.contentColumn}>
            <div className="tag-badge" style={{ marginBottom: '1rem' }}>What You'll Get</div>
            <h2 style={{ ...styles.title, marginBottom: isMobile ? '1.5rem' : styles.title.marginBottom }}>Inside the <span className="gradient-text">Guide</span></h2>
            
            <div style={isMobile ? { ...styles.checklist, gridTemplateColumns: '1fr', gap: '0.75rem' } : styles.checklist}>
              {checklist.map((item, idx) => (
                <div key={idx} style={{
                  ...styles.checkItem, 
                  animationDelay: `${idx * 0.1}s`,
                  padding: isMobile ? '0.625rem 1rem' : styles.checkItem.padding
                }} className="slide-up">
                  <div style={styles.checkIcon}>✓</div>
                  <span style={{ ...styles.checkText, fontSize: isMobile ? '0.9375rem' : styles.checkText.fontSize }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slide-up" style={{...styles.imageColumn, animationDelay: '0.4s'}}>
            <div style={styles.imageWrapper}>
              <BookMockup />
              <div style={styles.imageGlow}></div>
            </div>
          </div>
          
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  contentColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    marginBottom: '1.75rem',
  },
  checklist: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'var(--surface-color)',
    padding: '0.75rem 1.25rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--border-color)',
  },
  checkIcon: {
    color: 'var(--success-color)',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  checkText: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '450px',
  },
  image: {
    width: '100%',
    borderRadius: '1rem',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  imageGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    backgroundColor: 'var(--accent-primary)',
    filter: 'blur(80px)',
    opacity: 0.2,
    zIndex: 1,
  }
};

export default TableOfContents;
