import React, { useState, useEffect } from 'react';
import { GLOW_UP_BOOK_PRICE } from '../config';
import BookMockup from './BookMockup';
import PreviewPage from './PreviewPage';
import { useWindowSize } from '../hooks/useWindowSize';

const HeroSection = ({ openCheckout }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 992;
  return (
    <section style={styles.heroSection} className="section-padding">
      {/* Background with mesh gradient feel */}
      <div style={styles.backgroundGlow}></div>
      <div style={styles.backgroundGlowAmber}></div>

      <div className="container" style={isMobile ? { ...styles.grid, gridTemplateColumns: '1fr', textAlign: 'center' } : styles.grid}>
        
        {/* Left Content */}
        <div className="fade-in" style={isMobile ? { ...styles.textContent, alignItems: 'center', textAlign: 'center' } : styles.textContent}>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>📖</span>
            <span style={styles.badgeText}>90-Day Digital Guide</span>
          </div>

          <h1 style={styles.headline}>
            <span className="gradient-text">SHARPER</span><br />
            Command Attention & Radiate Confidence
          </h1>

          <p style={isMobile ? { ...styles.subheadline, margin: '0 auto' } : styles.subheadline}>
            Stop blending in. The ultimate 90-day blueprint to build sharp style, clear skin, and the magnetic presence that naturally attracts.
          </p>

          <div style={isMobile ? { ...styles.socialProof, justifyContent: 'center' } : styles.socialProof}>
            <span style={styles.proofItem}>📖 Digital PDF</span>
            <span style={styles.proofDot}>•</span>
            <span style={styles.proofItem}>🇮🇳 Made in India</span>
            <span style={styles.proofDot}>•</span>
            <span style={styles.proofItem}>✅ Research-backed</span>
          </div>

          <div style={isMobile ? { ...styles.offerBox, margin: '2rem auto 0 auto' } : styles.offerBox}>
            <div style={isMobile ? { ...styles.priceContainer, justifyContent: 'center' } : styles.priceContainer}>
              <span style={styles.oldPrice}>₹1,000</span>
              <span style={styles.newPrice}>₹{GLOW_UP_BOOK_PRICE}</span>
              <span style={styles.discountBadge}>90% OFF</span>
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
        </div>

        {/* Right Content - 3D Book & Previews */}
        <div className="fade-in" style={styles.imageColumn}>
          <div style={styles.imageGlow}></div>
          
          <div style={styles.showcaseContainer}>
            {/* Left Preview Page */}
            <div style={styles.previewLeft}>
              <PreviewPage 
                title="Skincare Protocol" 
                items={[
                  "The 3-step morning routine.",
                  "Ingredients that actually work.",
                  "How to eliminate acne scars."
                ]}
                delay={0}
              />
            </div>
            
            {/* Center Main Book */}
            <div style={styles.mainBook}>
              <BookMockup />
            </div>

            {/* Right Preview Page */}
            <div style={styles.previewRight}>
              <PreviewPage 
                title="Posture & Style" 
                items={[
                  "Fixing anterior pelvic tilt.",
                  "Color theory for your skin tone.",
                  "Building a lean silhouette."
                ]}
                delay={3}
              />
            </div>
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
    paddingTop: '8rem',
    paddingBottom: '4rem',
    backgroundColor: 'var(--bg-color)',
  },
  backgroundGlow: {
    position: 'absolute',
    top: '20%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(10,10,20,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  backgroundGlowAmber: {
    position: 'absolute',
    bottom: '10%',
    left: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, rgba(10,10,20,0) 70%)',
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
    height: '450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  mainBook: {
    position: 'relative',
    zIndex: 5,
  },
  previewLeft: {
    position: 'absolute',
    left: '-10%',
    top: '15%',
    zIndex: 3,
    transform: 'scale(0.85)',
    opacity: 0.9,
    '@media (maxWidth: 992px)': {
      display: 'none',
    }
  },
  previewRight: {
    position: 'absolute',
    right: '-10%',
    bottom: '5%',
    zIndex: 4,
    transform: 'scale(0.9)',
    opacity: 0.95,
    '@media (maxWidth: 992px)': {
      display: 'none',
    }
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

export default HeroSection;
