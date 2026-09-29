import React from 'react';
import { Link } from 'react-router-dom';
import { BOOK_PRICE, GLOW_UP_BOOK_PRICE } from '../config';

// Import images
import awkwardBookCover from '../assets/images/awkward_book_cover.jpg';
import glowupBookCover from '../assets/images/glowup_book_cover.png';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Background glow effects */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <header className="home-header">
        <div className="container nav">
          <div className="brand">WesternFexx</div>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          <div className="hero-section">
            <h1 className="title">Books that change how you move through life.</h1>
            <p className="subtitle">Actionable guides for personal transformation.</p>
          </div>

          <div className="books-grid">
            {/* Awkward Book Card */}
            <Link to="/awkward" className="book-card group">
              <div className="card-image-wrapper">
                <img src={awkwardBookCover} alt="Stop Being Awkward Book Cover" className="book-cover" />
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Stop Being Awkward</h2>
                <p className="card-desc">Master social dynamics, kill awkward silences, and build deep connections effortlessly.</p>
                <div className="card-footer">
                  <span className="price">₹{BOOK_PRICE}</span>
                  <span className="btn-primary">View Guide →</span>
                </div>
              </div>
            </Link>

            {/* Glow Up Book Card */}
            <Link to="/glow-up" className="book-card group">
              <div className="card-image-wrapper">
                <img src={glowupBookCover} alt="Glow Up for Men Book Cover" className="book-cover" />
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Glow Up for Men — Looks Maxing</h2>
                <p className="card-desc">The complete guide to physical and mental transformation for men.</p>
                <div className="card-footer">
                  <span className="price">₹{GLOW_UP_BOOK_PRICE}</span>
                  <span className="btn-primary">View Guide →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} WesternFexx. All rights reserved.</p>
      </footer>

      <style>{`
        .home-page {
          background-color: #030305;
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          opacity: 0.4;
          pointer-events: none;
        }
        
        .glow-1 {
          top: -20%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(0,0,0,0) 70%);
        }

        .glow-2 {
          bottom: -20%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%);
        }

        .home-header, .main-content, .home-footer {
          position: relative;
          z-index: 1;
        }

        .home-header {
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }

        .nav {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .brand {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          background: linear-gradient(90deg, #fff, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .main-content {
          flex: 1;
          padding: 5rem 1rem;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 5rem;
          animation: fadeInDown 0.8s ease-out;
        }

        .title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .book-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .book-card:hover {
          transform: translateY(-10px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(124, 58, 237, 0.1);
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .book-cover {
          width: auto;
          height: 100%;
          max-width: 100%;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.5s ease;
          position: relative;
          z-index: 2;
        }

        .book-card:hover .book-cover {
          transform: scale(1.05) translateY(-5px) rotate(2deg);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
        }

        .card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #f4f4f5;
          transition: color 0.3s;
        }

        .book-card:hover .card-title {
          color: #c4b5fd;
        }

        .card-desc {
          color: #a1a1aa;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 1.5rem;
        }

        .price {
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
        }

        .btn-primary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }

        .book-card:hover .btn-primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
        }

        .home-footer {
          text-align: center;
          padding: 2.5rem 1rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: #71717a;
          font-size: 0.875rem;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .books-grid {
            grid-template-columns: 1fr;
          }
          .card-image-wrapper {
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

