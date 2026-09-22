import React from 'react';

const testimonials = [
  {
    quote: "I used to freeze up whenever someone said 'Hi'. This guide completely changed how I approach conversations. No more awkward silences!",
    name: "Rohan K.",
    tag: "College Student",
    initials: "RK",
    color: "#8B5CF6" // Violet
  },
  {
    quote: "Practical, easy to read, and it actually works. I tried the techniques at a networking event and finally felt like myself.",
    name: "Sneha M.",
    tag: "Software Engineer",
    initials: "SM",
    color: "#F59E0B" // Amber
  },
  {
    quote: "The best part is that it doesn't tell you to become someone you're not. It just gives you the tools to let conversations flow naturally.",
    name: "Aditya V.",
    tag: "Recent Graduate",
    initials: "AV",
    color: "#10B981" // Green
  }
];

const TestimonialsSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <div className="tag-badge" style={{ marginBottom: '1rem' }}>
            <span>⭐</span> Over 1,200+ Happy Readers
          </div>
          <h2 style={styles.title}>
            Don't Just Take <span className="gradient-text">Our Word For It</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={styles.card} className="slide-up" style={{...styles.card, animationDelay: `${idx * 0.2}s`}}>
              <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p style={styles.quote}>"{t.quote}"</p>
              
              <div style={styles.author}>
                <div style={{ ...styles.avatar, backgroundColor: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div style={styles.name}>{t.name}</div>
                  <div style={styles.tag}>{t.tag}</div>
                </div>
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
    backgroundColor: 'var(--bg-color)',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'rgba(28, 28, 58, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--border-color)',
    borderRadius: '1rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    transition: 'var(--transition-smooth)',
  },
  stars: {
    fontSize: '1.25rem',
  },
  quote: {
    fontSize: '1.125rem',
    color: 'var(--text-primary)',
    fontStyle: 'italic',
    lineHeight: 1.6,
    flexGrow: 1,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '1.125rem',
  },
  name: {
    fontWeight: '600',
    color: 'white',
  },
  tag: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
  }
};

export default TestimonialsSection;
