import React, { useEffect, useRef } from 'react';

const SCProblemSection = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.list-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    { icon: '💭', text: 'You replay a conversation for two days because of one thing you said' },
    { icon: '🔄', text: 'You rehearse your next sentence and miss what the other person just said' },
    { icon: '😶', text: 'Small talk makes your mind go blank' },
    { icon: '🙈', text: 'You say yes when you want to say no' },
    { icon: '🕊️', text: "You don't want to become the loudest person in the room. You just want to feel calm around people." }
  ];

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.card}>
          <h2 style={styles.title}>Does This Sound Like You?</h2>
          
          <ul ref={listRef} style={styles.list}>
            {items.map((item, index) => (
              <li key={index} className="list-item" style={styles.listItem}>
                <span style={styles.icon}>{item.icon}</span>
                <span style={styles.text}>{item.text}</span>
              </li>
            ))}
          </ul>
          
          <div style={styles.callout}>
            <p style={styles.calloutText}>
              If you nodded at two or more, this book was written for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#09090F',
  },
  card: {
    backgroundColor: '#111120',
    borderRadius: '16px',
    padding: '3rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#F1F0FF',
    marginBottom: '2.5rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s ease-out',
  },
  icon: {
    fontSize: '1.5rem',
    flexShrink: 0,
    marginTop: '0.125rem',
  },
  text: {
    fontSize: '1.125rem',
    color: '#C8C0FF',
    lineHeight: '1.6',
  },
  callout: {
    marginTop: '3rem',
    padding: '1.5rem',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderLeft: '4px solid #6366F1',
    borderRadius: '0 8px 8px 0',
  },
  calloutText: {
    margin: 0,
    fontSize: '1.25rem',
    color: '#F1F0FF',
    fontWeight: '600',
    textAlign: 'center',
  }
};

export default SCProblemSection;
