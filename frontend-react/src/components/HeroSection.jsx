import React from 'react';
import heroBookMockup from '../assets/images/hero_book_mockup.jpg';

const HeroSection = () => {
  return (
    <section style={styles.heroSection} className="section-padding">
      {/* Background with mesh gradient feel */}
      <div style={styles.backgroundGlow}></div>
      <div style={styles.backgroundGlowAmber}></div>

      <div className="container" style={styles.grid}>
        
        {/* Left Content */}
        <div className="fade-in" style={styles.textContent}>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>📖</span>
            <span style={styles.badgeText}>45-Page Practical Digital Book</span>
          </div>

          <h1 style={styles.headline}>
            You Know How to Say “Hi.”<br />
            <span className="gradient-text">But What Do You Say Next?</span>
          </h1>

          <p style={styles.subheadline}>
            Stop awkward silences, overthinking, and conversations that die after the first few lines.
            Learn how to start conversations, keep them going, and talk naturally with people you just met.
          </p>

          <div style={styles.socialProof}>
            <span style={styles.proofItem}>📚 1,200+ readers</span>
            <span style={styles.proofDot}>•</span>
            <span style={styles.proofItem}>⭐ 4.8 stars</span>
            <span style={styles.proofDot}>•</span>
            <span style={styles.proofItem}>🇮🇳 Trusted across India</span>
          </div>

          <div style={styles.offerBox}>
            <div style={styles.priceContainer}>
              <span style={styles.oldPrice}>₹1,000</span>
              <span style={styles.newPrice}>₹99</span>
              <span style={styles.discountBadge}>90% OFF</span>
            </div>
            
            <button className="btn btn-primary pulse" style={styles.ctaButton} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
              GET THE BOOK FOR ₹99 &rarr;
            </button>
            
            <div style={{ marginTop: '1rem' }}>
              <a href="#what-inside" style={styles.secondaryLink}>
                See what's inside &darr;
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Book */}
        <div className="fade-in" style={styles.imageColumn}>
          <div style={styles.imageWrapper}>
            <img src={heroBookMockup} alt="Stop Being Awkward Book" style={styles.bookImage} />
            <div style={styles.imageGlow}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: '8rem', // extra padding for fixed navbar
    paddingBottom: '4rem',
  },
  backgroundGlow: {
    position: 'absolute',
    top: '20%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, var(--accent-glow) 0%, rgba(10,10,20,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  backgroundGlowAmber: {
    position: 'absolute',
    bottom: '10%',
    left: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, rgba(10,10,20,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    '@media (maxWidth: 992px)': {
      gridTemplateColumns: '1fr',
      textAlign: 'center',
    }
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.5rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
  },
  badgeIcon: {
    fontSize: '1.125rem',
  },
  badgeText: {
    color: 'var(--accent-primary)',
    fontWeight: '600',
    fontSize: '0.875rem',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    color: 'var(--text-primary)',
  },
  subheadline: {
    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
    color: 'var(--text-secondary)',
    maxWidth: '540px',
  },
  socialProof: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    marginTop: '0.5rem',
  },
  proofItem: {
    fontSize: '0.9375rem',
    color: 'var(--text-trust)',
    fontWeight: '500',
  },
  proofDot: {
    color: 'rgba(139,92,246,0.5)',
  },
  offerBox: {
    marginTop: '2rem',
    width: '100%',
    maxWidth: '400px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  oldPrice: {
    color: '#7B7BAA',
    textDecoration: 'line-through',
    fontSize: '1.125rem',
  },
  newPrice: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#F59E0B',
    lineHeight: 1,
  },
  discountBadge: {
    backgroundColor: 'var(--success-color)',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontWeight: '700',
    fontSize: '0.95rem',
    letterSpacing: '0.04em',
  },
  ctaButton: {
    width: '100%',
    fontSize: '1.125rem',
    padding: '1.25rem',
  },
  secondaryLink: {
    fontSize: '0.9375rem',
    color: 'var(--accent-primary)',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    display: 'inline-block',
  },
  imageColumn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    animation: 'float 6s ease-in-out infinite',
  },
  bookImage: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    zIndex: 2,
    borderRadius: '16px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  imageGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    background: 'var(--accent-glow)',
    filter: 'blur(80px)',
    zIndex: 1,
    borderRadius: '50%',
  }
};

// Handle responsive styles for flex items
if (typeof window !== 'undefined' && window.innerWidth <= 992) {
  styles.grid.gridTemplateColumns = '1fr';
  styles.textContent.alignItems = 'center';
  styles.textContent.textAlign = 'center';
  styles.subheadline.margin = '0 auto';
  styles.socialProof.justifyContent = 'center';
  styles.offerBox.margin = '2rem auto 0 auto';
}

export default HeroSection;

