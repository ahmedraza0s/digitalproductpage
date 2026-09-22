import React from 'react';
import heroMobile from '../assets/images/hero_mobile.jpg';

const checks = [
  "You feel awkward meeting new people",
  "You don't know what to say after “Hi”",
  "Your conversations often become short and dry",
  "You overthink before speaking",
  "You struggle to keep conversations going",
  "You want to become better at talking to new people",
  "You want practical guidance instead of generic motivation"
];

const TargetAudienceSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.grid}>
          
          <div style={styles.content}>
            <h2 style={styles.title}>This book is for you if...</h2>
            
            <div style={styles.list}>
              {checks.map((check, idx) => (
                <div key={idx} style={styles.listItem}>
                  <div style={styles.checkIcon}>✓</div>
                  <p style={styles.checkText}>{check}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div style={styles.imageColumn}>
            <img src={heroMobile} alt="Reading on mobile" style={styles.image} />
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
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  },
  content: {
    order: 2,
  },
  imageColumn: {
    order: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '1rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--border-color)',
  },
  checkIcon: {
    color: 'var(--success-color)',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  checkText: {
    fontSize: '1.125rem',
    color: 'white',
    margin: 0,
  }
};

/* For mobile, fix order to show text then image if preferred, but usually image first looks good too. */
if (typeof window !== 'undefined' && window.innerWidth > 768) {
  styles.content.order = 1;
  styles.imageColumn.order = 2;
}

export default TargetAudienceSection;
