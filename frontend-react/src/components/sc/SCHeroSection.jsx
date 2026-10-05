import React from 'react';
import bookCover from '../../assets/social_confidence_cover_new.jpg';
import { useWindowSize } from '../../hooks/useWindowSize';

const SCHeroSection = ({ openCheckout }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 992;
  const bookContent = (
    <div style={isMobile ? { ...styles.imageWrapper, margin: '0 auto', maxWidth: '300px' } : styles.imageWrapper} className="fade-in">
      <img 
        src={bookCover} 
        alt="The Social Confidence Plan Ebook Cover" 
        style={styles.image}
      />
    </div>
  );

  const offerBoxContent = (
    <div style={isMobile ? { ...styles.offerBox, margin: '0 auto 2rem auto', textAlign: 'center' } : styles.offerBox}>
      <div style={isMobile ? { ...styles.priceContainer, justifyContent: 'center' } : styles.priceContainer}>
        <span style={styles.oldPrice}>₹199</span>
        <span style={styles.newPrice}>₹99</span>
        <span style={styles.discountBadge}>50% OFF</span>
      </div>

      <div style={styles.ctaWrapper}>
        <button onClick={openCheckout} className="btn btn-primary pulse" style={styles.button}>
          Get the Book for ₹99
        </button>
        <p style={isMobile ? { ...styles.trustText, textAlign: 'center' } : styles.trustText}>
          ⚡ Instant PDF download · UPI · Card · Net Banking
        </p>
      </div>
    </div>
  );

  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={isMobile ? { ...styles.grid, gridTemplateColumns: '1fr', textAlign: 'center', gap: '2rem' } : styles.grid}>
          
          <div style={isMobile ? { ...styles.content, alignItems: 'center', textAlign: 'center' } : styles.content} className="slide-up">
            
            {isMobile && bookContent}
            {isMobile && offerBoxContent}

            <div style={styles.badgeWrapper}>
              <span style={styles.launchBadge}>🔥 Launch Offer · ₹99 instead of ₹199</span>
            </div>
            
            <h1 style={isMobile ? { ...styles.title, fontSize: 'clamp(2rem, 8vw, 2.5rem)' } : styles.title}>
              The Social Confidence Plan
            </h1>
            <p style={styles.subtitle}>
              Calm, practical steps for people who overthink conversations. Includes a 30-day practice plan.
            </p>
            
            <p style={isMobile ? { ...styles.description, margin: '0 auto' } : styles.description}>
              A short PDF guide based on the research behind CBT for social anxiety. Written in plain language, with small exercises you can do the same day.
            </p>

            {!isMobile && offerBoxContent}
          </div>

          {!isMobile && (
            <div className="fade-in">
              {bookContent}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    paddingTop: '8rem', // extra padding for fixed nav
    paddingBottom: '6rem',
    position: 'relative',
    overflow: 'hidden',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '4rem',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  badgeWrapper: {
    display: 'flex',
    marginBottom: '0.5rem',
  },
  launchBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    color: '#F59E0B',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
    border: '1px solid rgba(245, 158, 11, 0.3)',
    display: 'inline-block',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    color: '#F1F0FF',
    marginBottom: '0',
  },
  subtitle: {
    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
    color: '#C8C0FF',
    fontWeight: '500',
    lineHeight: '1.4',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1.125rem',
    color: '#9B9BD0',
    lineHeight: '1.6',
    maxWidth: '90%',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  oldPrice: {
    fontSize: '1.25rem',
    color: '#666',
    textDecoration: 'line-through',
  },
  newPrice: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#fff',
  },
  discountBadge: {
    backgroundColor: '#F59E0B',
    color: '#fff',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontWeight: '700',
  },
  offerBox: {
    marginTop: '1rem',
    width: '100%',
    maxWidth: '400px',
  },
  ctaWrapper: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  button: {
    width: '100%',
    maxWidth: '400px',
    padding: '1.25rem',
    fontSize: '1.25rem',
    backgroundColor: '#10B981', // Emerald CTA
    backgroundImage: 'linear-gradient(135deg, #10B981, #059669)',
    boxShadow: '0 6px 24px rgba(16, 185, 129, 0.4)',
  },
  trustText: {
    fontSize: '0.875rem',
    color: '#9B9BD0',
    textAlign: 'left', // will be centered on mobile via utility
  },
  imageWrapper: {
    position: 'relative',
    maxWidth: '450px',
    width: '100%',
    animation: 'float 6s ease-in-out infinite',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.3)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
  }
};

export default SCHeroSection;
