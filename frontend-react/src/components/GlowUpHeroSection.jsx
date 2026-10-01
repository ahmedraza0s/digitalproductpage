import React, { useState, useEffect } from 'react';
import { GLOW_UP_BOOK_PRICE } from '../config';
import BookMockup from './BookMockup';
import { useWindowSize } from '../hooks/useWindowSize';

const HeroSection = ({ openCheckout }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 992;

  const bookContent = (
    <div className="fade-in" style={styles.imageColumn}>
      <div style={styles.showcaseContainer}>
        <BookMockup />
        <div style={styles.staticChips}>
           <span style={styles.chip}>✦ Skincare Protocol</span>
           <span style={styles.chip}>✦ Posture & Style</span>
        </div>
      </div>
    </div>
  );

  const offerBoxContent = (
    <div style={isMobile ? { ...styles.offerBox, margin: '0 auto 2rem auto' } : styles.offerBox}>
      <div style={isMobile ? { ...styles.priceContainer, justifyContent: 'center' } : styles.priceContainer}>
        <span style={styles.oldPrice}>₹499</span>
        <span style={styles.newPrice}>₹{GLOW_UP_BOOK_PRICE}</span>
        <span style={styles.discountBadge}>80% OFF</span>
      </div>
      
      <button className="btn btn-primary pulse" style={styles.ctaButton} onClick={openCheckout}>
        GET SHARPER &mdash; ₹{GLOW_UP_BOOK_PRICE} &rarr;
      </button>
      
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <span style={styles.secondaryText}>
          Instant Digital Access &bull; One-Time Payment
        </span>
      </div>
    </div>
  );

  return (
    <section style={styles.heroSection} className="section-padding">
      <div className="container" style={isMobile ? { ...styles.grid, gridTemplateColumns: '1fr', textAlign: 'center', gap: '2rem' } : styles.grid}>
        
        {/* Left Content */}
        <div className="fade-in" style={isMobile ? { ...styles.textContent, alignItems: 'center', textAlign: 'center' } : styles.textContent}>
          
          {isMobile && bookContent}
          {isMobile && offerBoxContent}

          <div style={styles.badge}>
            <span style={styles.badgeIcon}>📖</span>
            <span style={styles.badgeText}>30-Day Digital Guide</span>
          </div>

          <h1 style={styles.headline}>
            Look <span className="gradient-text">Sharper</span><br />
            in 30 Days.
          </h1>

          <p style={isMobile ? { ...styles.subheadline, margin: '0 auto' } : styles.subheadline}>
            Without buying 20 products. Become the best version of yourself with one simple 30-day system.
          </p>

          <div style={isMobile ? { ...styles.socialProof, justifyContent: 'center' } : styles.socialProof}>
            <span style={styles.proofItem}>📖 Digital PDF</span>
            <span style={styles.proofDot}>•</span>
            <span style={styles.proofItem}>🇮🇳 Made in India</span>
            <span style={styles.proofDot}>•</span>
            <span style={styles.proofItem}>✅ Research-backed</span>
          </div>

          {!isMobile && offerBoxContent}
        </div>

        {/* Right Content - 3D Book & Previews */}
        {!isMobile && bookContent}

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
    paddingTop: '8rem',
    paddingBottom: '4rem',
    backgroundColor: 'var(--bg-color)',
    background: 'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, rgba(10,10,20,0) 50%), radial-gradient(circle at 10% 90%, rgba(245,158,11,0.08) 0%, rgba(10,10,20,0) 40%), var(--bg-color)',
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
  secondaryText: {
    fontSize: '0.9375rem',
    color: 'var(--text-trust)',
    display: 'inline-block',
  },
  imageColumn: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showcaseContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    zIndex: 2,
  },
  staticChips: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  chip: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#D1D5DB',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontWeight: '500',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }
};

export default HeroSection;

