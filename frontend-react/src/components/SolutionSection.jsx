import React from 'react';
import heroBookMockup from '../assets/images/new_awkward_cover.jpg';

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
            Master The Art of <br />
            <span className="gradient-text" style={{ textDecoration: 'underline', textDecorationColor: 'var(--accent-primary)', textUnderlineOffset: '8px' }}>
              Natural Conversation
            </span>
          </h2>
          <p style={styles.subtitle}>
            A practical 45-page guide to help you handle real conversations more naturally.
          </p>
        </div>

        <div className="solution-layout">
          <div className="slide-up book-mockup-wrapper" style={styles.imageWrapper}>
            <img src={heroBookMockup} alt="Stop Being Awkward Book Cover" style={styles.bookImage} className="book-image" />
            <div style={styles.imageGlow}></div>
          </div>

          <div className="solution-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="slide-up hover-card-border" style={{ ...styles.card, animationDelay: `${idx * 0.1}s` }}>
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

      <style>{`
        .solution-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }
        .solution-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
        }
        .solution-layout .book-image {
          width: 100%;
          max-width: 250px;
        }
        
        @media (min-width: 640px) {
          .solution-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 992px) {
          .solution-layout {
            flex-direction: row;
            align-items: flex-start;
            gap: 4rem;
          }
          .solution-layout .book-mockup-wrapper {
            position: sticky;
            top: 8rem;
            flex: 0 0 35%;
            display: flex;
            justify-content: center;
          }
          .solution-grid {
            flex: 1;
            grid-template-columns: repeat(2, 1fr);
          }
          .solution-layout .book-image {
            max-width: 320px;
          }
        }
        
        @media (hover: hover) {
          .solution-layout .book-mockup-wrapper:hover .book-image {
            transform: rotate(0deg) scale(1.02) !important;
          }
        }
        .hover-card-border:hover {
          border-color: rgba(139, 92, 246, 0.4) !important;
          transform: translateY(-2px);
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
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    marginBottom: '1rem',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  bookImage: {
    height: 'auto',
    borderRadius: '4px 12px 12px 4px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '-10px 15px 30px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.05)',
    transform: 'rotate(2deg)',
    transition: 'transform 0.3s ease',
    position: 'relative',
    zIndex: 2,
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
  card: {
    backgroundColor: 'var(--surface-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '1rem',
    padding: '1.25rem',
    transition: 'var(--transition-smooth)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    cursor: 'default',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.5rem',
  },
  featureNum: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-trust)',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    padding: '0.25rem 0.5rem',
    borderRadius: '9999px',
  },
  featureTitle: {
    fontSize: '1.125rem',
    color: 'white',
    margin: 0,
  },
  featureDesc: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
    margin: 0,
  }
};

export default SolutionSection;

