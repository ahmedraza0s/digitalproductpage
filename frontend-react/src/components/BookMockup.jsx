import React from 'react';
import bookCoverImg from '../assets/images/30_day_mens_glow_up.png';

const BookMockup = ({ style, className }) => {
  return (
    <div className={`book-mockup-wrapper ${className || ''}`} style={{ ...styles.wrapper, ...style }}>
      <img src={bookCoverImg} alt="Glow Up for Men Cover" className="book-image" />
      <style>{`
        .book-mockup-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .book-image {
          width: 250px;
          height: auto;
          border-radius: 4px 12px 12px 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: -10px 15px 30px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.05);
          transform: rotate(2deg);
          transition: transform 0.3s ease;
        }

        @media (hover: hover) {
          .book-mockup-wrapper:hover .book-image {
            transform: rotate(0deg) scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    margin: '0 auto',
  }
};

export default BookMockup;

