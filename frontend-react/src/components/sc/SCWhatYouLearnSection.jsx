import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SCWhatYouLearnSection = ({ openCheckout }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 992;
  const [currentIdx, setCurrentIdx] = useState(0);

  const cards = [
    {
      icon: '🔁',
      title: 'Why you stay nervous',
      text: 'A loop of harsh self-beliefs, watching yourself, and small "safety habits" keeps anxiety alive. Once you see the loop, you can break it.'
    },
    {
      icon: '👁️',
      title: 'Why people notice you less than you think',
      text: 'In one study, students wore an embarrassing T-shirt and guessed half the room would notice. About a quarter did.'
    },
    {
      icon: '💙',
      title: 'Why people like you more than you think',
      text: 'Researchers call it the liking gap, and it shows up even in shy people.'
    },
    {
      icon: '🗣️',
      title: 'How to never run out of things to say',
      text: 'A simple method called threading: pick up something the other person said and ask about it.'
    },
    {
      icon: '🚫',
      title: 'How to handle teasing and say no calmly',
      text: 'With word-for-word lines you can borrow for difficult situations.'
    },
    {
      icon: '🔄',
      title: 'How to stop the replay',
      text: 'A 5-step reset for the "I shouldn\'t have said that" loop after conversations.'
    }
  ];

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % cards.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, [isMobile, cards.length]);

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <h2 style={styles.sectionTitle}>What You'll Learn</h2>
        
        {isMobile ? (
          <div style={styles.sliderContainer}>
            <div style={styles.sliderWrapper}>
              <div style={{...styles.sliderTrack, transform: `translateX(-${currentIdx * 100}%)`}}>
                {cards.map((card, idx) => (
                  <div key={idx} style={styles.slideItem}>
                    <div style={styles.card}>
                      <div style={styles.icon}>{card.icon}</div>
                      <h3 style={styles.cardTitle}>{card.title}</h3>
                      <p style={styles.cardText}>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.dotsContainer}>
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  style={{
                    ...styles.dot,
                    backgroundColor: currentIdx === idx ? '#10B981' : 'rgba(16, 185, 129, 0.3)'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div style={styles.grid}>
            {cards.map((card, idx) => (
              <div key={idx} style={styles.card}>
                <div style={styles.icon}>{card.icon}</div>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardText}>{card.text}</p>
              </div>
            ))}
          </div>
        )}

        <div style={styles.ctaContainer}>
          <button onClick={openCheckout} className="btn btn-primary" style={styles.button}>
            Get the Book for ₹99
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#09090F',
    position: 'relative',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#F1F0FF',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  card: {
    backgroundColor: '#111120',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    borderRadius: '16px',
    padding: '2rem',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: '#F1F0FF',
    marginBottom: '1rem',
    lineHeight: '1.3',
  },
  cardText: {
    fontSize: '1rem',
    color: '#9B9BD0',
    lineHeight: '1.6',
    margin: 0,
  },
  ctaContainer: {
    textAlign: 'center',
  },
  button: {
    padding: '1.25rem 3rem',
    fontSize: '1.25rem',
    backgroundColor: '#10B981',
    backgroundImage: 'linear-gradient(135deg, #10B981, #059669)',
    border: 'none',
  },
  sliderContainer: {
    marginBottom: '4rem',
  },
  sliderWrapper: {
    overflow: 'hidden',
    width: '100%',
    borderRadius: '16px',
  },
  sliderTrack: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    width: '100%',
  },
  slideItem: {
    minWidth: '100%',
    boxSizing: 'border-box',
    padding: '0 0.5rem',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1.5rem',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default SCWhatYouLearnSection;
