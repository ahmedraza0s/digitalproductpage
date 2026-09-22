import React, { useState } from 'react';

const faqs = [
  {
    q: "Is this book for introverts only?",
    a: "No. The book is for anyone who struggles with starting or continuing conversations with people they don't know well, regardless of personality type."
  },
  {
    q: "Do I need to become an extrovert?",
    a: "No. The focus is on becoming more comfortable and natural in conversations—not changing who you fundamentally are."
  },
  {
    q: "How long is the book?",
    a: "The book is 45 pages long, designed to be read in a single evening so you can start using the techniques tomorrow."
  },
  {
    q: "Is this a physical book?",
    a: "No. It's a digital PDF book that you can read immediately on your phone, tablet, or computer after purchase."
  },
  {
    q: "What exactly will I learn?",
    a: "You'll learn practical approaches for starting conversations, knowing what to say next, asking better questions, keeping conversations going, and reducing overthinking."
  },
  {
    q: "Is the payment safe?",
    a: "Yes, we use secure, encrypted payment gateways. Your payment information is never stored on our servers."
  }
];

const OfferAndFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        
        {/* Premium Offer Card */}
        <div className="slide-up" style={styles.offerWrapper}>
          <div style={styles.offerCardGlow}></div>
          <div style={styles.offerCard}>
            
            <div style={styles.urgencyBadge}>🔥 Limited-time offer price</div>
            
            <h2 style={styles.offerTitle}>Stop Overthinking Every Conversation.</h2>
            <p style={styles.offerSubtitle}>Get the complete <strong>Stop Being Awkward</strong> guide today.</p>
            
            <div style={styles.priceBox}>
              <div style={styles.priceRow}>
                <span style={styles.priceLabel}>Regular Price:</span>
                <span style={styles.oldPrice}>₹1,000</span>
              </div>
              <div style={styles.priceRowMain}>
                <span style={styles.newPrice}>₹99</span>
                <span style={styles.discountPill}>Save ₹901 (90% OFF)</span>
              </div>
            </div>

            <div style={styles.guaranteeList}>
              <div style={styles.guaranteeItem}>
                <span style={styles.check}>✓</span> Instant digital access
              </div>
              <div style={styles.guaranteeItem}>
                <span style={styles.check}>✓</span> Works on all devices (PDF)
              </div>
              <div style={styles.guaranteeItem}>
                <span style={styles.check}>✓</span> Read in 1 evening
              </div>
            </div>
            
            <button className="btn btn-primary pulse" style={styles.ctaButton} onClick={() => alert("Payment gateway integration goes here")}>
              GET THE BOOK — ₹99
            </button>
            
            <div style={styles.secureBox}>
              <span>🔒</span>
              <p style={styles.secureText}>
                100% Secure Checkout. Instant access after successful payment.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={styles.faqSection}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                style={{
                  ...styles.faqItem, 
                  borderColor: openIndex === idx ? 'var(--accent-primary)' : 'var(--border-color)',
                  backgroundColor: openIndex === idx ? 'var(--surface-color)' : 'var(--bg-color)'
                }}
                className="slide-up"
                style={{...styles.faqItem, animationDelay: `${idx * 0.1}s`,
                  borderColor: openIndex === idx ? 'var(--accent-primary)' : 'var(--border-color)',
                  backgroundColor: openIndex === idx ? 'var(--surface-color)' : 'var(--bg-color)'
                }}
                onClick={() => toggleFaq(idx)}
              >
                <div style={styles.faqHeader}>
                  <h4 style={{...styles.faqQuestion, color: openIndex === idx ? 'white' : 'var(--text-primary)'}}>{faq.q}</h4>
                  <div style={{...styles.faqIconBox, backgroundColor: openIndex === idx ? 'var(--accent-primary)' : 'transparent', color: openIndex === idx ? 'white' : 'var(--accent-primary)'}}>
                    {openIndex === idx ? '−' : '+'}
                  </div>
                </div>
                <div style={{...styles.faqAnswer, maxHeight: openIndex === idx ? '500px' : '0', opacity: openIndex === idx ? 1 : 0}}>
                  <p style={styles.faqAnswerText}>{faq.a}</p>
                </div>
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
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '800px',
  },
  offerWrapper: {
    position: 'relative',
    marginBottom: '6rem',
    marginTop: '2rem',
  },
  offerCardGlow: {
    position: 'absolute',
    inset: '-2px',
    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
    borderRadius: '1.6rem',
    filter: 'blur(10px)',
    opacity: 0.5,
    zIndex: 0,
  },
  offerCard: {
    position: 'relative',
    backgroundColor: 'var(--surface-color)',
    padding: '4rem 2.5rem',
    borderRadius: '1.5rem',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  urgencyBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: '#EF4444',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '0.875rem',
    marginBottom: '2rem',
    display: 'inline-block',
  },
  offerTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '1rem',
    lineHeight: 1.1,
  },
  offerSubtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
  },
  priceBox: {
    backgroundColor: 'var(--bg-color)',
    padding: '1.5rem 2rem',
    borderRadius: '1rem',
    width: '100%',
    maxWidth: '450px',
    border: '1px solid var(--border-color)',
    marginBottom: '2rem',
  },
  priceRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  priceLabel: {
    color: 'var(--text-secondary)',
  },
  oldPrice: {
    textDecoration: 'line-through',
    color: 'var(--text-secondary)',
  },
  priceRowMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  newPrice: {
    fontSize: '4rem',
    fontWeight: '800',
    color: 'white',
    lineHeight: 1,
    background: 'linear-gradient(135deg, #fff, var(--text-secondary))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  discountPill: {
    backgroundColor: 'var(--success-color)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '0.875rem',
  },
  guaranteeList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '2.5rem',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  guaranteeItem: {
    fontSize: '1.0625rem',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  check: {
    color: 'var(--success-color)',
    fontWeight: 'bold',
  },
  ctaButton: {
    width: '100%',
    maxWidth: '450px',
    fontSize: '1.25rem',
    padding: '1.5rem',
    marginBottom: '1.5rem',
  },
  secureBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
  },
  secureText: {
    margin: 0,
  },
  faqSection: {
    marginTop: '2rem',
  },
  faqTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    border: '1px solid var(--border-color)',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  },
  faqHeader: {
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  faqQuestion: {
    margin: 0,
    fontSize: '1.125rem',
    fontWeight: '600',
    transition: 'color 0.2s',
  },
  faqIconBox: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '300',
    border: '1px solid var(--border-color)',
    transition: 'var(--transition-smooth)',
    flexShrink: 0,
  },
  faqAnswer: {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
  },
  faqAnswerText: {
    padding: '0 1.5rem 1.5rem 1.5rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: 0,
  }
};

export default OfferAndFAQSection;

