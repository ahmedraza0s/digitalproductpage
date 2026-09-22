import React from 'react';
import bookCover from '../assets/images/book_cover.png';

const features = [
  {
    num: "01",
    title: "Start conversations",
    desc: "Know how to approach someone and break the initial awkwardness."
  },
  {
    num: "02",
    title: "Know what to say next",
    desc: "Stop getting stuck after “Hi” and basic introductions."
  },
  {
    num: "03",
    title: "Keep conversations going",
    desc: "Learn how to move from one topic to another naturally."
  },
  {
    num: "04",
    title: "Ask better questions",
    desc: "Avoid boring, interview-style questions and create better conversations."
  },
  {
    num: "05",
    title: "Avoid dead-end conversations",
    desc: "Recognize questions and responses that kill the conversation."
  },
  {
    num: "06",
    title: "Stop overthinking",
    desc: "Spend less time mentally rehearsing every sentence."
  },
  {
    num: "07",
    title: "Talk more naturally",
    desc: "Learn practical ways to become comfortable without pretending to be someone you're not."
  }
];

const SolutionSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>Stop Being Awkward</h2>
          <p style={styles.subtitle}>
            A practical <strong className="text-accent">45-page guide</strong> to help you handle real conversations more naturally.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.imageColumn}>
            <img src={bookCover} alt="Stop Being Awkward Book Cover" style={styles.bookImage} />
            <div style={styles.imageGlow}></div>
          </div>
          
          <div style={styles.featuresColumn}>
            <p style={styles.featuresIntro}>Inside, you'll learn how to:</p>
            <div style={styles.featuresList}>
              {features.map((feature, idx) => (
                <div key={idx} style={styles.featureItem}>
                  <div style={styles.featureNum}>{feature.num}</div>
                  <div>
                    <h4 style={styles.featureTitle}>{feature.title}</h4>
                    <p style={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </div>
              ))}
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
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  },
  imageColumn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  bookImage: {
    maxWidth: '100%',
    width: '350px',
    position: 'relative',
    zIndex: 2,
    borderRadius: '8px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  imageGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    backgroundColor: 'var(--accent-color)',
    filter: 'blur(100px)',
    opacity: 0.2,
    zIndex: 1,
  },
  featuresColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  featuresIntro: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  featureItem: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
  },
  featureNum: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--accent-color)',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
  },
  featureTitle: {
    fontSize: '1.125rem',
    marginBottom: '0.25rem',
    color: 'white',
  },
  featureDesc: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
  }
};

export default SolutionSection;
