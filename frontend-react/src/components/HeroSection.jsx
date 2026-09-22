import React from 'react';
import heroPc from '../assets/images/hero_pc.jpg';
import heroMobile from '../assets/images/hero_mobile.jpg';

const HeroSection = () => {
  return (
    <section style={styles.heroSection} className="section-padding">
      {/* Background Image Setup */}
      <picture style={styles.pictureBg}>
        <source media="(max-width: 768px)" srcSet={heroMobile} />
        <img src={heroPc} alt="Hero Background" style={styles.imgBg} />
      </picture>
      <div style={styles.overlay}></div>

      <div className="container" style={styles.content}>
        <div className="fade-in" style={styles.textContent}>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>📖</span>
            <span style={styles.badgeText}>45-Page Practical Digital Book</span>
          </div>

          <h1 style={styles.headline}>
            You Know How to Say “Hi.”<br />
            <span className="text-accent">But What Do You Say Next?</span>
          </h1>

          <p style={styles.subheadline}>
            Stop awkward silences, overthinking, and conversations that die after the first few lines.
            Learn how to start conversations, keep them going, and talk naturally with people you just met.
          </p>

          <div style={styles.offerBox}>
            <div style={styles.priceContainer}>
              <span style={styles.oldPrice}>₹1,000</span>
              <span style={styles.newPrice}>₹99</span>
              <span style={styles.discountBadge}>90% OFF</span>
            </div>
            <button className="btn btn-primary" style={styles.ctaButton}>
              GET THE BOOK FOR ₹99 &rarr;
            </button>
            <p style={styles.supportingLine}>
              Instant digital access &bull; Read on your phone, tablet or laptop
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  pictureBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  imgBg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center right',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.85)', /* Slate 900 with opacity */
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    border: '1px solid var(--accent-color)',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
  },
  badgeIcon: {
    fontSize: '1.25rem',
  },
  badgeText: {
    color: 'var(--accent-color)',
    fontWeight: '600',
    fontSize: '0.875rem',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  subheadline: {
    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  offerBox: {
    marginTop: '2rem',
    padding: '2rem',
    backgroundColor: 'rgba(30, 41, 59, 0.8)', /* Slate 800 */
    backdropFilter: 'blur(12px)',
    borderRadius: '1rem',
    border: '1px solid var(--border-color)',
    width: '100%',
    maxWidth: '500px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  oldPrice: {
    color: 'var(--text-secondary)',
    textDecoration: 'line-through',
    fontSize: '1.25rem',
  },
  newPrice: {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'white',
    lineHeight: 1,
  },
  discountBadge: {
    backgroundColor: 'var(--success-color)',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontWeight: '700',
    fontSize: '0.875rem',
  },
  ctaButton: {
    width: '100%',
    fontSize: '1.25rem',
    padding: '1.25rem',
  },
  supportingLine: {
    marginTop: '1rem',
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
  }
};

export default HeroSection;
