import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import StrongMessageSection from '../components/StrongMessageSection';
import TableOfContents from '../components/TableOfContents';
import TargetAudienceSection from '../components/TargetAudienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OfferAndFAQSection from '../components/OfferAndFAQSection';

import logo from '../assets/images/logo.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <StrongMessageSection />
        <div id="what-inside">
          <TableOfContents />
        </div>
        <div id="who-for">
          <TargetAudienceSection />
        </div>
        <TestimonialsSection />
        <div id="faq">
          <OfferAndFAQSection />
        </div>
      </main>

      <footer style={styles.footer}>
        <div className="container text-center" style={styles.footerContainer}>
          <div style={styles.footerBrand}>
            <img src={logo} alt="Stop Being Awkward Logo" style={styles.footerLogo} />
            <span style={styles.footerBrandText}>Stop Being Awkward</span>
          </div>
          
          <div style={styles.footerLinks}>
            <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
            <a href="/terms" style={styles.footerLink}>Terms & Conditions</a>
            <a href="/refund" style={styles.footerLink}>Refund Policy</a>
            <a href="/access" style={styles.footerLink}>Access Issue?</a>
          </div>

          <p className="text-secondary" style={styles.copyright}>
            &copy; {new Date().getFullYear()} Stop Being Awkward. All rights reserved.<br/>
            Made with ❤️ in India
          </p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  footer: {
    padding: '4rem 0 2rem 0',
    borderTop: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-color)',
    position: 'relative',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  footerBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  footerLogo: {
    height: '32px',
    borderRadius: '4px',
  },
  footerBrandText: {
    fontWeight: '700',
    fontSize: '1.25rem',
    color: 'white',
  },
  footerLinks: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerLink: {
    color: 'var(--text-secondary)',
    fontSize: '0.9375rem',
  },
  copyright: {
    fontSize: '0.875rem',
    lineHeight: '1.8',
  }
};

export default LandingPage;
