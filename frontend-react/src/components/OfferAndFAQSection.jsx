import React, { useState, useEffect } from 'react';
import { BOOK_PRICE } from '../config';

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

const OfferAndFAQSection = ({ openCheckout }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 13 });

  useEffect(() => {
    // Session-based countdown timer (3 hours)
    let endTime = sessionStorage.getItem('offerEndTime');
    if (!endTime) {
      endTime = new Date().getTime() + 3 * 60 * 60 * 1000;
      sessionStorage.setItem('offerEndTime', endTime);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <section style={styles.section} className="section-padding" id="buy-section">
      <div className="container" style={styles.container}>
        
        {/* Premium Offer Card */}
        <div className="slide-up" style={styles.offerWrapper}>
          <div style={styles.offerCardGlow}></div>
          <div style={styles.offerCard}>
            
            <div style={styles.timerBadge}>
              <span style={styles.timerIcon}>⏰</span>
              Offer ends in: 
              <span style={styles.timerNumber}>{formatTime(timeLeft.hours)}</span>:
              <span style={styles.timerNumber}>{formatTime(timeLeft.minutes)}</span>:
              <span style={styles.timerNumber}>{formatTime(timeLeft.seconds)}</span>
            </div>
            
            <h2 style={styles.offerTitle}>Stop Overthinking Every Conversation.</h2>
            <p style={styles.offerSubtitle}>Get the complete <strong>Stop Being Awkward</strong> guide today.</p>
            
            {/* Value Stack */}
            <div style={styles.valueStack}>
              <h4 style={styles.valueStackTitle}>What you get for ₹{BOOK_PRICE}:</h4>
              <div style={styles.valueStackList}>
                <div style={styles.valueStackItem}>
                  <div style={styles.valueCheck}>✅</div>
                  <div style={styles.valueText}>Stop Being Awkward (45-page guide)</div>
                  <div style={styles.valuePrice}>Value: ₹1,000</div>
                </div>
                <div style={styles.valueStackItem}>
                  <div style={styles.valueCheck}>✅</div>
                  <div style={styles.valueText}>Conversation Starter Templates</div>
                  <div style={styles.valuePrice}>Value: ₹299</div>
                </div>
                <div style={styles.valueStackItem}>
                  <div style={styles.valueCheck}>✅</div>
                  <div style={styles.valueText}>"What to say next" Reference</div>
                  <div style={styles.valuePrice}>Value: ₹199</div>
                </div>
                <div style={styles.valueStackItem}>
                  <div style={styles.valueCheck}>✅</div>
                  <div style={styles.valueText}>Lifetime PDF Access</div>
                  <div style={styles.valuePriceFree}>Free</div>
                </div>
              </div>
              
              <div style={styles.valueStackTotalRow}>
                <span style={styles.totalValueLabel}>Total Value:</span>
                <span style={styles.totalValuePrice}>₹1,498</span>
              </div>
              <div style={styles.valueStackTodayRow}>
                <span style={styles.todayPriceLabel}>Today's Price:</span>
                <span style={styles.todayPrice}>₹{BOOK_PRICE}</span>
              </div>
            </div>
            
            <button className="btn btn-primary pulse" style={styles.ctaButton} onClick={openCheckout}>
              GET EVERYTHING FOR ₹{BOOK_PRICE} &rarr;
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
                className="slide-up"
                style={{
                  ...styles.faqItem, 
                  animationDelay: `${idx * 0.1}s`,
                  borderColor: openIndex === idx ? 'var(--accent-primary)' : 'var(--border-color)',
                  backgroundColor: openIndex === idx ? 'var(--surface-color)' : 'var(--bg-color)'
                }}
                onClick={() => toggleFaq(idx)}
              >
                <div style={styles.faqHeader}>
                  <h4 style={{...styles.faqQuestion, color: openIndex === idx ? 'white' : 'var(--text-primary)'}}>{faq.q}</h4>
                  <div style={{...styles.faqIconBox, backgroundColor: openIndex === idx ? 'var(--accent-primary)' : 'rgba(139,92,246,0.08)', color: openIndex === idx ? 'white' : 'var(--accent-primary)'}}>
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

        {/* Final CTA Block */}
        <div className="slide-up" style={styles.finalCtaBlock}>
          <h3 style={styles.finalCtaTitle}>Still on the fence?</h3>
          <p style={styles.finalCtaText}>
            For less than a cup of coffee (₹{BOOK_PRICE}), you could stop dreading every new social interaction.
          </p>
          <button className="btn btn-primary pulse" style={styles.finalCtaButton} onClick={openCheckout}>
            YES, I WANT TO STOP BEING AWKWARD &rarr;
          </button>
          <p style={styles.microText}>Instant PDF • ₹{BOOK_PRICE} one-time • No subscription</p>
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
    opacity: 0.65,
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
  timerBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: '#EF4444',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    padding: '0.75rem 1.25rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '1rem',
    marginBottom: '2rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  timerIcon: {
    marginRight: '0.25rem',
  },
  timerNumber: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    padding: '0.1rem 0.3rem',
    borderRadius: '4px',
    letterSpacing: '1px',
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
  valueStack: {
    backgroundColor: 'var(--bg-color)',
    padding: '2rem',
    borderRadius: '1rem',
    width: '100%',
    maxWidth: '500px',
    border: '1px solid var(--border-color)',
    marginBottom: '2.5rem',
    textAlign: 'left',
  },
  valueStackTitle: {
    fontSize: '1.125rem',
    color: 'white',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.75rem',
  },
  valueStackList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  valueStackItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  valueCheck: {
    flexShrink: 0,
  },
  valueText: {
    color: 'var(--text-primary)',
    flexGrow: 1,
    fontSize: '0.9375rem',
  },
  valuePrice: {
    color: 'var(--text-secondary)',
    textDecoration: 'line-through',
    fontSize: '0.875rem',
    whiteSpace: 'nowrap',
  },
  valuePriceFree: {
    color: 'var(--success-color)',
    fontWeight: '600',
    fontSize: '0.875rem',
  },
  valueStackTotalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px dashed var(--border-color)',
    marginBottom: '0.5rem',
  },
  totalValueLabel: {
    color: 'var(--text-secondary)',
    fontSize: '1.125rem',
  },
  totalValuePrice: {
    color: '#7B7BAA',
    textDecoration: 'line-through',
    fontSize: '1.25rem',
  },
  valueStackTodayRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todayPriceLabel: {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: '600',
  },
  todayPrice: {
    color: '#F59E0B',
    fontSize: '2.5rem',
    fontWeight: '800',
  },
  ctaButton: {
    width: '100%',
    maxWidth: '500px',
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
    backgroundColor: 'rgba(16,185,129,0.06)',
    borderRadius: '8px',
    padding: '0.75rem',
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
  },
  finalCtaBlock: {
    marginTop: '6rem',
    backgroundColor: 'var(--surface-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '1.5rem',
    padding: '3rem',
    textAlign: 'center',
    boxShadow: '0 0 60px rgba(245,158,11,0.08)',
  },
  finalCtaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  finalCtaText: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    maxWidth: '500px',
    margin: '0 auto 2rem auto',
  },
  finalCtaButton: {
    padding: '1.25rem 2rem',
    fontSize: '1.125rem',
    marginBottom: '1rem',
  },
  microText: {
    fontSize: '0.875rem',
    color: 'var(--text-trust)',
    margin: 0,
  }
};

export default OfferAndFAQSection;


