import React, { useState } from 'react';

const faqs = [
  {
    q: "Is this book for introverts only?",
    a: "No. The book is for anyone who struggles with starting or continuing conversations with people they don't know well."
  },
  {
    q: "Do I need to become an extrovert?",
    a: "No. The focus is on becoming more comfortable and natural in conversations—not changing your personality."
  },
  {
    q: "How long is the book?",
    a: "The book is 45 pages."
  },
  {
    q: "Is this a physical book?",
    a: "No. It's a digital book that you can read on your phone, tablet, or computer."
  },
  {
    q: "What will I learn?",
    a: "You'll learn practical approaches for starting conversations, knowing what to say next, asking better questions, keeping conversations going, and reducing overthinking."
  },
  {
    q: "How much does it cost?",
    a: "The current offer price is ₹99, reduced from ₹1,000."
  }
];

const OfferAndFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        
        {/* Offer Box */}
        <div style={styles.offerCard}>
          <h2 style={styles.offerTitle}>Stop Overthinking Every Conversation.</h2>
          <p style={styles.offerSubtitle}>Get the complete <strong>Stop Being Awkward</strong> digital book today.</p>
          
          <div style={styles.priceInfo}>
            <div style={styles.priceRow}>
              <span style={styles.priceLabel}>Regular Price:</span>
              <span style={styles.oldPrice}>₹1,000</span>
            </div>
            <div style={styles.priceRow}>
              <span style={styles.priceLabel}>Today:</span>
              <span style={styles.newPrice}>₹99</span>
            </div>
          </div>
          
          <div style={styles.savingsBox}>
            <p style={styles.savingsText}>You Save ₹901</p>
            <span style={styles.badge}>90% OFF</span>
          </div>
          
          <button className="btn btn-primary" style={styles.ctaButton}>
            GET THE BOOK — ₹99
          </button>
          
          <p style={styles.guaranteeText}>
            Instant digital access after successful payment.
          </p>
        </div>

        {/* FAQ Section */}
        <div style={styles.faqSection}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                style={styles.faqItem}
                onClick={() => toggleFaq(idx)}
              >
                <div style={styles.faqHeader}>
                  <h4 style={styles.faqQuestion}>{faq.q}</h4>
                  <span style={styles.faqIcon}>
                    {openIndex === idx ? '−' : '+'}
                  </span>
                </div>
                {openIndex === idx && (
                  <div style={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--surface-hover)',
  },
  container: {
    maxWidth: '800px',
  },
  offerCard: {
    backgroundColor: 'var(--bg-color)',
    padding: '4rem 2rem',
    borderRadius: '1.5rem',
    textAlign: 'center',
    border: '1px solid var(--accent-color)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    marginBottom: '5rem',
  },
  offerTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '1rem',
  },
  offerSubtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
  },
  priceInfo: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1rem',
  },
  priceLabel: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
  },
  oldPrice: {
    fontSize: '1.25rem',
    textDecoration: 'line-through',
    color: 'var(--text-secondary)',
  },
  newPrice: {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'white',
    lineHeight: 1,
  },
  savingsBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
  },
  savingsText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--success-color)',
    margin: 0,
  },
  badge: {
    backgroundColor: 'var(--success-color)',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontWeight: 'bold',
  },
  ctaButton: {
    width: '100%',
    maxWidth: '400px',
    fontSize: '1.25rem',
    padding: '1.25rem',
    marginBottom: '1rem',
  },
  guaranteeText: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
  },
  faqSection: {
    marginTop: '4rem',
  },
  faqTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  },
  faqHeader: {
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    margin: 0,
    fontSize: '1.125rem',
    fontWeight: '600',
  },
  faqIcon: {
    fontSize: '1.5rem',
    color: 'var(--accent-color)',
    fontWeight: '300',
  },
  faqAnswer: {
    padding: '0 1.5rem 1.5rem 1.5rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
  }
};

export default OfferAndFAQSection;
