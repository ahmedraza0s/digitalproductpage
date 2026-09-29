import React from 'react';
import bookCoverImg from '../assets/images/glowup_book_cover.png';

const BookMockup = ({ style, className }) => {
  return (
    <div className={`book-mockup-wrapper ${className || ''}`} style={{ ...styles.wrapper, ...style }}>
      {/* 3D Book */}
      <div className="book-3d-container">
        <div className="book-3d">
          {/* Back Cover (for thickness) */}
          <div className="book-back"></div>

          {/* Pages (Thickness) */}
          <div className="book-pages-right"></div>
          <div className="book-pages-top"></div>
          <div className="book-pages-bottom"></div>

          {/* Spine */}
          <div className="book-spine">
            <span className="spine-text">SHARPER</span>
          </div>

          {/* Front Cover */}
          <div className="book-front" style={{
            backgroundImage: `url(${bookCoverImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            {/* Elegant premium lighting overlays */}
            <div className="highlight-overlay"></div>
            <div className="shadow-overlay"></div>
            <div className="texture-overlay"></div>
          </div>
        </div>
      </div>

      <style>{`
        .book-mockup-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          padding: 20px;
        }

        .book-3d-container {
          position: relative;
          width: 250px;
          height: 370px;
          transform-style: preserve-3d;
          transform: rotateY(-22deg) rotateX(12deg) rotateZ(-2deg);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @media (hover: hover) {
          .book-mockup-wrapper:hover .book-3d-container {
            transform: rotateY(-12deg) rotateX(8deg) scale(1.03);
          }
        }

        .book-3d {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
        }

        /* Premium Front Cover */
        .book-front {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 4px 12px 12px 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-left: 2px solid rgba(255, 255, 255, 0.15);
          transform: translateZ(20px);
          overflow: hidden;
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.9);
          z-index: 5;
        }

        .book-back {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #08080C;
          border-radius: 4px 12px 12px 4px;
          transform: translateZ(-20px);
          box-shadow: -15px 25px 50px rgba(0,0,0,0.8);
        }

        .book-spine {
          position: absolute;
          width: 40px;
          height: 100%;
          background: linear-gradient(to right, #08080C, #13131A);
          left: 0;
          transform: rotateY(-90deg) translateZ(20px);
          transform-origin: left center;
          border-left: 1px solid rgba(255,255,255,0.03);
          box-shadow: inset 10px 0 20px rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px 0 0 4px;
        }

        .spine-text {
          color: #F59E0B; /* Elegant Amber */
          transform: rotate(-90deg);
          letter-spacing: 5px;
          font-weight: 700;
          font-size: 0.8rem;
          white-space: nowrap;
          text-shadow: 0 1px 5px rgba(245, 158, 11, 0.5);
        }

        /* Book Pages Edge */
        .book-pages-right {
          position: absolute;
          width: 38px;
          height: 98%;
          right: -1px;
          top: 1%;
          background: linear-gradient(to right, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
          transform: rotateY(90deg) translateZ(248px);
          transform-origin: right center;
          border-radius: 0 4px 4px 0;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.08) 2px,
            rgba(0,0,0,0.08) 4px
          );
        }

        .book-pages-top {
          position: absolute;
          width: 98%;
          height: 38px;
          top: -1px;
          left: 1%;
          background: #e9ecef;
          transform: rotateX(90deg) translateZ(20px);
          transform-origin: top center;
          background-image: repeating-linear-gradient(
            to right,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.08) 2px,
            rgba(0,0,0,0.08) 4px
          );
        }

        /* Lighting & Texture */
        .highlight-overlay {
          position: absolute;
          top: 0;
          left: 8%;
          width: 12%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%);
          pointer-events: none;
          z-index: 3;
        }

        .shadow-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
          z-index: 3;
        }
        
        .texture-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 4;
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

