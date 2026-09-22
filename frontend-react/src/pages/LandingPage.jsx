import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import StrongMessageSection from '../components/StrongMessageSection';
import TableOfContents from '../components/TableOfContents';
import MidPageCTA from '../components/MidPageCTA';
import TargetAudienceSection from '../components/TargetAudienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OfferAndFAQSection from '../components/OfferAndFAQSection';
import StickyBuyBar from '../components/StickyBuyBar';
import CheckoutModal from '../components/CheckoutModal';

const LandingPage = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <div style={styles.page}>
      <Navbar openCheckout={openCheckout} />
      <main>
        <HeroSection openCheckout={openCheckout} />
        <ProblemSection />
        <SolutionSection />
        <StrongMessageSection openCheckout={openCheckout} />
        <TableOfContents openCheckout={openCheckout} />
        <MidPageCTA openCheckout={openCheckout} />
        <TargetAudienceSection />
        <TestimonialsSection />
        <OfferAndFAQSection openCheckout={openCheckout} />
      </main>
      
      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerContent}>
            <div style={styles.brand}>Stop Being Awkward</div>
            <p style={styles.footerText}>
              &copy; {new Date().getFullYear()} All rights reserved. <br/>
              Results may vary based on individual effort and application of the material.
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
      <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} />
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
  }
};

export default LandingPage;
