import React from 'react';
import heroBookMockup from '../assets/images/hero_book_mockup.jpg';

const features = [
  {
    num: "01",
    title: "Start conversations",
    desc: "Know how to approach someone and break the initial awkwardness.",
    icon: "💬"
  },
  {
    num: "02",
    title: "Know what to say next",
    desc: "Stop getting stuck after “Hi” and basic introductions.",
    icon: "🤔"
  },
  {
    num: "03",
    title: "Keep conversations going",
    desc: "Learn how to move from one topic to another naturally.",
    icon: "🔄"
  },
  {
    num: "04",
    title: "Ask better questions",
    desc: "Avoid boring, interview-style questions and create better conversations.",
    icon: "❓"
  },
  {
    num: "05",
    title: "Avoid dead ends",
    desc: "Recognize questions and responses that kill the conversation.",
    icon: "🛑"
  },
  {
    num: "06",
    title: "Stop overthinking",
    desc: "Spend less time mentally rehearsing every sentence.",
    icon: "🧠"
  },
  {
    num: "07",
    title: "Talk more naturally",
    desc: "Learn practical ways to become comfortable without faking it.",
    icon: "✨"
  },
  {
    num: "08",
    title: "Build real connections",
    desc: "Turn small talk into meaningful relationships and friendships.",
    icon: "🤝"
  }
];

const SolutionSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <div className="tag-badge" style={{ marginBottom: '1rem' }}>The Solution</div>
          <h2 style={styles.title}>
            Master The Art of <br/>
            <span className="gradient-text" style={{ textDecoration: 'underline', textDecorationColor: 'var(--accent-primary)', textUnderlineOffset: '8px' }}>
              Natural Conversation
            </span>
          </h2>
          <p style={styles.subtitle}>
            A practical 45-page guide to help you handle real conversations more naturally.
          </p>
        </div>

        <div style={styles.layout}>
          <div className="slide-up" style={styles.imageWrapper}>
            <img src={heroBookMockup} alt="Stop Being Awkward Book Cover" style={styles.bookImage} className="hover-tilt" />
            <div style={styles.imageGlow}></div>
          </div>
          
          <div style={styles.grid}>
            {features.map((feature, idx) => (
              <div key={idx} className="slide-up" style={{...styles.card, animationDelay: `${idx * 0.1}s`}}>
                <div style={styles.cardHeader}>
                  <span style={styles.icon}>{feature.icon}</span>
                  <span style={styles.featureNum}>{feature.num}</span>
                </div>
                <h4 style={styles.featureTitle}>{feature.title}</h4>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add global style for hover tilt if not using external css framework */}
      <style>{`
        .hover-tilt {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-tilt:hover {
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1.02);
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
  },
  bookImage: {
    width: '100%',
    position: 'relative',
    zIndex: 2,
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  imageGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--accent-primary)',
    filter: 'blur(100px)',
    opacity: 0.15,
    zIndex: 1,
    borderRadius: '50%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    width: '100%',
  },
  card: {
    backgroundColor: 'var(--surface-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '1rem',
    padding: '2rem',
    transition: 'var(--transition-smooth)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    cursor: 'default',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: '2rem',
  },
  featureNum: {
    fontSize: '0.875rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    backgroundColor: 'var(--surface-hover)',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
  },
  featureTitle: {
    fontSize: '1.25rem',
    color: 'white',
    margin: 0,
  },
  featureDesc: {
    fontSize: '0.9375rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: 0,
  }
};

export default SolutionSection;

