import React, { useState, useEffect } from 'react';

const SCStickyBuyBar = ({ openBookCheckout, isCheckoutOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling down 400px
      if (window.scrollY > 400 && !isCheckoutOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCheckoutOpen]);

  // Also hide if checkout is currently open
  useEffect(() => {
    if (isCheckoutOpen) {
      setIsVisible(false);
    }
  }, [isCheckoutOpen]);

  return (
    <>
      <style>{`
        .sc-sticky-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: rgba(10, 10, 20, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          padding: 1rem 0;
          z-index: 900;
          transition: transform 0.3s ease-in-out;
          box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
        }
        .sc-sticky-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sc-sticky-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .sc-sticky-title {
          color: #F1F0FF;
          font-size: 1.125rem;
          font-weight: 600;
        }
        .sc-sticky-price-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .sc-sticky-old-price {
          text-decoration: line-through;
          color: #9B9BD0;
          font-size: 1rem;
          font-weight: 500;
        }
        .sc-sticky-price {
          color: #10B981;
          font-size: 1.5rem;
          font-weight: 800;
          font-family: var(--font-family);
          line-height: 1;
        }
        .sc-sticky-btn {
          padding: 0.75rem 2rem;
          font-size: 1.125rem;
        }
        
        @media (max-width: 768px) {
          .sc-sticky-bar {
            padding: 0.75rem 0;
            background-color: rgba(10, 10, 20, 0.98);
          }
          .sc-sticky-container {
            justify-content: center;
            gap: 1.5rem;
          }
          .sc-sticky-title {
            display: none;
          }
          .sc-sticky-price {
            font-size: 1.75rem;
          }
          .sc-sticky-old-price {
            font-size: 1.125rem;
          }
          .sc-sticky-btn {
            padding: 0.75rem 1.5rem;
            width: 100%;
            max-width: 220px;
          }
        }
      `}</style>
      <div
        className="sc-sticky-bar"
        style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
      >
        <div className="container sc-sticky-container">
          <div className="sc-sticky-info">
            <span className="sc-sticky-title">The Social Confidence Plan</span>
            <div className="sc-sticky-price-wrapper">
              <span className="sc-sticky-old-price">₹199</span>
              <span className="sc-sticky-price">₹99</span>
            </div>
          </div>
          <button onClick={openBookCheckout} className="btn btn-primary pulse sc-sticky-btn">
            Get it Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SCStickyBuyBar;
