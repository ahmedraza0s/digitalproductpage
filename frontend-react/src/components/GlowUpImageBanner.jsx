import React from 'react';
import bannerImage from '../assets/images/glowup_banner_new.png';

const GlowUpImageBanner = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <img 
          src={bannerImage} 
          alt="The Ultimate Guide to Enhance Your Glow Up" 
          className="banner-img"
          style={styles.image} 
        />
      </div>
      <style>{`
        .banner-img {
          height: auto;
          object-fit: cover;
          object-position: center;
        }
        @media (max-width: 768px) {
          .banner-img {
            height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    width: '100%',
    backgroundColor: 'var(--bg-color)',
    overflow: 'hidden',
    padding: '4rem 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  image: {
    width: '100%',
    borderRadius: '1rem',
    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
    display: 'block',
  }
};

export default GlowUpImageBanner;
