import React from 'react';
import { Link } from 'react-router-dom';
import { BOOK_PRICE, GLOW_UP_BOOK_PRICE } from '../config';

const HomePage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div className="container" style={styles.nav}>
          <div style={styles.brand}>WesternFexx</div>
        </div>
      </header>
      
      <main style={styles.main}>
        <div className="container">
          <div style={styles.hero}>
            <h1 style={styles.title}>Books that change how you move through life.</h1>
            <p style={styles.subtitle}>Actionable guides for personal transformation.</p>
          </div>

          <div style={styles.grid}>
            {/* Awkward Book Card */}
            <div style={styles.card}>
              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>Stop Being Awkward</h2>
                <p style={styles.cardDesc}>Master social dynamics, kill awkward silences, and build deep connections effortlessly.</p>
                <div style={styles.price}>₹{BOOK_PRICE}</div>
                <Link to="/awkward" style={styles.btn}>Get It Now →</Link>
              </div>
            </div>

            {/* Glow Up Book Card */}
            <div style={styles.card}>
              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>Glow Up for Men — Looks Maxing</h2>
                <p style={styles.cardDesc}>The complete guide to physical and mental transformation for men.</p>
                <div style={styles.price}>₹{GLOW_UP_BOOK_PRICE}</div>
                <Link to="/glow-up" style={styles.btn}>Get It Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <p style={{color: '#666', fontSize: '0.875rem'}}>&copy; {new Date().getFullYear()} WesternFexx. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#05050A',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Inter, system-ui, sans-serif'
  },
  header: {
    padding: '1.5rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '-0.5px'
  },
  main: {
    flex: 1,
    padding: '4rem 0'
  },
  hero: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '1rem',
    background: 'linear-gradient(to right, #fff, #aaa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#888'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#111116',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
  },
  cardContent: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  cardDesc: {
    color: '#aaa',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    flex: 1
  },
  price: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#7c3aed',
    marginBottom: '1.5rem'
  },
  btn: {
    display: 'inline-block',
    backgroundColor: '#7c3aed',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'background 0.2s'
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  }
};

export default HomePage;
