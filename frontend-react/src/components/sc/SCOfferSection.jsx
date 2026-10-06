import React from 'react';
import bookCover from '../../assets/social_confidence_cover_new.jpg';

const SCOfferSection = ({ openBookCheckout }) => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        
        <h2 style={styles.heading}>Get The Book</h2>

        <div style={styles.grid}>
          
          <div style={styles.imageContainer}>
            <img src={bookCover} alt="The Social Confidence Blueprint" style={styles.bookImage} />
          </div>

          <div style={styles.cardPrimary}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitlePrimary}>The Social Confidence Blueprint</h3>
              <p style={styles.cardDesc}>The core 30-day practice plan.</p>
            </div>
            
            <div style={styles.priceContainer}>
              <span style={styles.oldPrice}>₹199</span>
              <span style={styles.newPricePrimary}>₹99</span>
            </div>

            <ul style={styles.featureList}>
              <li style={styles.featureItem}>
                <span style={styles.checkPrimary}>✔</span> The Social Confidence Blueprint (PDF)
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkPrimary}>✔</span> A short exercise at the end of every chapter
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkPrimary}>✔</span> Scripts for teasing, disagreeing and declining invitations
              </li>
              <li style={styles.featureItem}>
                <span style={styles.checkPrimary}>✔</span> A week-by-week 30-day plan
              </li>
            </ul>

            <button onClick={openBookCheckout} style={styles.btnPrimary} className="btn pulse">
              Get the Book for ₹99
            </button>
          </div>

        </div>

        <div style={styles.footerInfo}>
          <p>Instant download after payment. Link shown on screen and sent to your email.</p>
          <p><em>Launch price valid till October 15th. After that, the book moves to ₹199.</em></p>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0A0A14',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#F1F0FF',
    marginBottom: '3rem',
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
    maxWidth: '900px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center',
  },
  bookImage: {
    width: '100%',
    maxWidth: '350px',
    borderRadius: '12px',
    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
  },
  cardPrimary: {
    flex: '1 1 400px',
    backgroundColor: '#111120',
    border: '2px solid #10B981',
    borderRadius: '16px',
    padding: '3rem 2.5rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
    width: '100%',
  },

  cardHeader: {
    marginBottom: '1.5rem',
    textAlign: 'center',
  },

  cardTitlePrimary: {
    fontSize: '1.75rem',
    color: '#F1F0FF',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    color: '#9B9BD0',
    fontSize: '0.95rem',
    margin: 0,
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '2rem',
  },
  oldPrice: {
    fontSize: '1.25rem',
    color: '#666',
    textDecoration: 'line-through',
  },
  newPricePrimary: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#fff',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    flexGrow: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    color: '#F1F0FF',
    fontSize: '1rem',
  },

  checkPrimary: {
    color: '#10B981',
    fontWeight: 'bold',
  },

  btnPrimary: {
    width: '100%',
    backgroundColor: '#10B981',
    border: 'none',
    color: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  footerInfo: {
    marginTop: '4rem',
    textAlign: 'center',
    color: '#9B9BD0',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  }
};

export default SCOfferSection;
