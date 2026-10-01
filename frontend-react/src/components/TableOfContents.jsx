import React from 'react';
import { BOOK_PRICE } from '../config';

const tocData = [
  { topic: "Starting Conversations", desc: "How to approach and open naturally without rehearsing lines." },
  { topic: "After “Hi”", desc: "Exactly what to say when the basic introduction is over." },
  { topic: "Conversation Flow", desc: "How to move smoothly from one topic to another." },
  { topic: "Better Questions", desc: "How to ask questions that create engaging, real conversation." },
  { topic: "Dead Ends", desc: "How to avoid short, dry responses that kill the conversation." },
  { topic: "New People", desc: "How to engage with someone you've just met for the first time." },
  { topic: "Overthinking", desc: "Practical techniques to stop mentally analyzing every sentence." },
  { topic: "Natural Confidence", desc: "How to become socially comfortable without faking an extrovert persona." }
];

const TableOfContents = ({ openCheckout }) => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <div className="tag-badge" style={{ marginBottom: '1rem' }}>Chapter Preview</div>
          <h2 style={styles.title}>Inside the <span className="gradient-text">45 Pages</span></h2>
        </div>
        
        <div className="toc-grid">
          {tocData.map((item, idx) => (
            <div key={idx} className="slide-up toc-card" style={{...styles.card, animationDelay: `${idx * 0.1}s`}}>
              <div style={styles.cardHeader}>
                <div style={styles.chapterNum}>Chapter {idx + 1}</div>
              </div>
              <h4 style={styles.topicTitle}>{item.topic}</h4>
              <p style={styles.topicDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={styles.bottomCta} className="slide-up">
          <button className="btn btn-primary pulse" style={{ padding: '1rem 2rem' }} onClick={openCheckout}>
            Get all 8 chapters for ₹{BOOK_PRICE} &rarr;
          </button>
        </div>
      </div>

      <style>{`
        .toc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .toc-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }
        
        @media (min-width: 992px) {
          .toc-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }
        
        .toc-card:hover {
          border-color: rgba(139, 92, 246, 0.4) !important;
          box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.2);
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
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
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
  },
  cardHeader: {
    marginBottom: '0.25rem',
  },
  chapterNum: {
    display: 'inline-block',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    color: 'var(--accent-primary)',
    padding: '0.25rem 0.6rem',
    borderRadius: '9999px',
    fontSize: '0.7rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  topicTitle: {
    fontSize: '1.125rem',
    color: 'white',
    margin: 0,
  },
  topicDesc: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
    margin: 0,
    flexGrow: 1,
  },
  bottomCta: {
    marginTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
  }
};

export default function WithHoverStyles(props) {
  return (
    <TableOfContents {...props} />
  );
}

