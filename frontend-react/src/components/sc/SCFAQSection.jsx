import React, { useState } from 'react';

const SCFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const faqs = [
    {
      q: "I'm an introvert. Will this change me?",
      a: "No. Being introverted and being anxious are different things, and Chapter 4 explains how. The goal is less fear, not turning you into a party person."
    },
    {
      q: "Is this a replacement for therapy?",
      a: "No. It's a self-help guide. If anxiety is stopping you from working, studying or making friends, please speak to a psychologist or doctor. The book also tells you when that's a good idea."
    },
    {
      q: "Is it just theory?",
      a: "No. Every chapter ends with something to try, and the last chapter is a daily plan."
    },
    {
      q: "I'm very shy. Will it be too basic?",
      a: "It starts small. Week 1 is just saying thank you properly and keeping your phone in your pocket while you wait in queues. You build up from there."
    },
    {
      q: "How much time does it need?",
      a: "Around 10 to 20 minutes a day for 30 days."
    },
    {
      q: "What if I don't like it?",
      a: "Message us within 7 days at support@westernfexx.com and we'll refund you, no questions asked."
    },
    {
      q: "How do I get the book?",
      a: "Right after payment, you'll see a download link and also get it by email."
    }
  ];

  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <h2 style={styles.heading}>Questions People Ask</h2>
        
        <div style={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{
                ...styles.faqItem,
                borderLeft: openIndex === index ? '4px solid #6366F1' : '4px solid transparent',
                backgroundColor: openIndex === index ? 'rgba(99, 102, 241, 0.05)' : 'transparent'
              }}
            >
              <button 
                style={styles.questionBtn} 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span style={{...styles.questionText, color: openIndex === index ? '#F1F0FF' : '#C8C0FF'}}>
                  {faq.q}
                </span>
                <span style={{...styles.icon, transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)'}}>
                  ▼
                </span>
              </button>
              
              <div 
                style={{
                  ...styles.answerContainer,
                  maxHeight: openIndex === index ? '1000px' : '0',
                  paddingTop: openIndex === index ? '1rem' : '0',
                }}
              >
                <p style={styles.answerText}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#09090F',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#F1F0FF',
    marginBottom: '3rem',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  questionBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  },
  questionText: {
    fontSize: '1.125rem',
    fontWeight: '600',
    transition: 'color 0.2s',
  },
  icon: {
    color: '#6366F1',
    transition: 'transform 0.3s ease',
    fontSize: '0.875rem',
  },
  answerContainer: {
    padding: '0 1.5rem',
    transition: 'all 0.3s ease',
  },
  answerText: {
    color: '#9B9BD0',
    lineHeight: '1.6',
    fontSize: '1rem',
    margin: '0 0 1.5rem 0',
  }
};

export default SCFAQSection;
