import React, { useEffect, useRef } from 'react';

const SCProblemSection = () => {
  const listRef = useRef(null);

  useEffect(() => {
    // Component mounts
  }, []);



  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.card}>
          <img 
            src="/images/does-this-sound-like-you.jpg" 
            alt="Does this sound like you?" 
            style={styles.image} 
          />
          
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
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    display: 'block',
    margin: '0 auto',
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
