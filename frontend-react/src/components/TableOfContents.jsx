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
        
        <div style={styles.grid}>
          {tocData.map((item, idx) => (
            <div key={idx} className="slide-up" style={{...styles.card, animationDelay: `${idx * 0.1}s`}}>
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
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
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
  },
  cardHeader: {
    marginBottom: '0.5rem',
  },
  chapterNum: {
    display: 'inline-block',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    color: 'var(--accent-primary)',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  topicTitle: {
    fontSize: '1.25rem',
    color: 'white',
    margin: 0,
  },
  topicDesc: {
    fontSize: '0.9375rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: 0,
    flexGrow: 1,
  },
  bottomCta: {
    marginTop: '4rem',
    display: 'flex',
    justifyContent: 'center',
  }
};

// Add hover styles using style tag
const hoverStyles = `
  .slide-up:hover {
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
  }
`;

export default function WithHoverStyles() {
  return (
    <>
      <style>{hoverStyles}</style>
      <TableOfContents />
    </>
  );
}

