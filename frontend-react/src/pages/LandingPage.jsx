import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import StrongMessageSection from '../components/StrongMessageSection';
import TableOfContents from '../components/TableOfContents';
import TargetAudienceSection from '../components/TargetAudienceSection';
import OfferAndFAQSection from '../components/OfferAndFAQSection';

import logo from '../assets/images/logo.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Simple Header */}
      <header style={styles.header}>
        <div className="container" style={styles.headerContainer}>
          <img src={logo} alt="Stop Being Awkward Logo" style={styles.logo} />
        </div>
      </header>

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <StrongMessageSection />
        <TableOfContents />
        <TargetAudienceSection />
        <OfferAndFAQSection />
      </main>

      {/* Simple Footer */}
      <footer style={styles.footer}>
        <div className="container text-center">
          <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Stop Being Awkward. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    padding: '1rem 0',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid var(--border-color)',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    height: '40px',
    borderRadius: '4px',
  },
  footer: {
    padding: '2rem 0',
    borderTop: '1px solid var(--border-color)',
    marginTop: '4rem',
  }
};

export default LandingPage;
