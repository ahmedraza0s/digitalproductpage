import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/GlowUpHeroSection';
import ProblemSection from '../components/GlowUpProblemSection';
import GlowUpImageBanner from '../components/GlowUpImageBanner';
import SolutionSection from '../components/GlowUpSolutionSection';
import TableOfContents from '../components/GlowUpTableOfContents';
import TimelineSection from '../components/GlowUpTimelineSection';
import TestimonialsSection from '../components/GlowUpTestimonialsSection';
import TargetAudienceSection from '../components/GlowUpTargetAudienceSection';
import OfferAndFAQSection from '../components/GlowUpOfferAndFAQSection';
import StickyBuyBar from '../components/GlowUpStickyBuyBar';
import CheckoutModal from '../components/CheckoutModal';
import { GLOW_UP_BOOK_PRICE } from '../config';

const GlowUpLandingPage = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "30-Day Men's Glow Up - Transformation Guide";
  }, []);

  return (
    <div style={styles.page}>
      <Navbar openCheckout={openCheckout} title="30-Day Men's Glow Up" price={GLOW_UP_BOOK_PRICE} />
      <main>
        <HeroSection openCheckout={openCheckout} />
        <ProblemSection />
        <GlowUpImageBanner />
        <SolutionSection />
        <TimelineSection />
        <TableOfContents openCheckout={openCheckout} />
        <TestimonialsSection />
        <TargetAudienceSection />
        <OfferAndFAQSection openCheckout={openCheckout} />
      </main>

      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerContent}>
            <div style={styles.brand}>SHARPER</div>
            <p style={styles.footerText}>
              &copy; {new Date().getFullYear()} All rights reserved. <br />
              Results may vary based on individual effort and application of the material.
            </p>
            <p style={styles.disclaimer}>
              📋 Educational content only not medical advice.
              For medical conditions, consult a qualified professional.
            </p>
            <div style={styles.footerLinks}>
              <a href="/terms" style={styles.link}>Terms</a>
              <a href="/privacy" style={styles.link}>Privacy</a>
              <a href="/refund" style={styles.link}>Refunds</a>
              <a href="/access" style={styles.link}>Access Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <StickyBuyBar openCheckout={openCheckout} />

      {/* 🆕 Using product ebook-002 and reading new price env variable */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
        productId="ebook-002"
        price={import.meta.env.VITE_GLOW_UP_BOOK_PRICE}
      />
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: 'var(--bg-color)',
    color: 'var(--text-primary)',
    minHeight: '100vh',
  },
  footer: {
    padding: '4rem 0',
    backgroundColor: '#05050A',
    borderTop: '1px solid var(--border-color)',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    letterSpacing: '-0.5px',
  },
  footerText: {
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    maxWidth: '500px',
  },
  footerLinks: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  link: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s',
  },
  disclaimer: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'inline-block',
    margin: '0',
    lineHeight: 1.5,
  }
};

export default GlowUpLandingPage;
