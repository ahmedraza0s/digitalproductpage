import React from 'react';

const categories = [
  {
    title: "SKIN",
    icon: "🧴",
    color: "#06b6d4", // Cyan/Teal
    desc: "Build a simple routine + sunscreen + skin-barrier basics"
  },
  {
    title: "HAIR",
    icon: "💈",
    color: "#F59E0B", // Amber
    desc: "Hair-loss options, minoxidil, finasteride, dutasteride & more"
  },
  {
    title: "STYLE",
    icon: "👕",
    color: "#8B5CF6", // Violet
    desc: "Fit, proportions, wardrobe essentials"
  },
  {
    title: "SCENT",
    icon: "🌿",
    color: "#10B981", // Green
    desc: "How much to spray + hygiene + fragrance basics"
  },
  {
    title: "POSTURE",
    icon: "🧘",
    color: "#3B82F6", // Blue
    desc: "8-minute daily posture routine"
  }
];

const SolutionSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <div className="tag-badge" style={{ marginBottom: '1rem' }}>What's Inside</div>
          <h2 style={styles.title}>
            The 5 Pillars of <br/>
            <span className="gradient-text" style={{ textDecoration: 'underline', textDecorationColor: 'var(--accent-primary)', textUnderlineOffset: '8px' }}>
              Your Glow-Up
            </span>
          </h2>
        </div>

        <div style={styles.sliderContainer}>
          <div style={styles.grid}>
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="slide-up hover-card" 
                style={{
                  ...styles.card, 
                  animationDelay: `${idx * 0.1}s`,
                  borderTop: `4px solid ${cat.color}`
                }}
              >
                <div style={styles.iconContainer}>
                  <span style={styles.icon}>{cat.icon}</span>
                </div>
                <h4 style={styles.catTitle}>{cat.title}</h4>
                <p style={styles.catDesc}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 992px) {
          .cat-grid {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 1.5rem;
            margin: 0 -1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            gap: 1.5rem;
          }
          .hover-card {
            min-width: 280px;
            scroll-snap-align: center;
            flex-shrink: 0;
          }
        }
        
        .cat-grid::-webkit-scrollbar {
          display: none;
        }
        .cat-grid {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
  },
  sliderContainer: {
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1.5rem',
    width: '100%',
  },
  card: {
    backgroundColor: 'var(--surface-color)',
    borderRadius: '1rem',
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem',
    cursor: 'default',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  },
  icon: {
    fontSize: '2.5rem',
  },
  catTitle: {
    fontSize: '1.25rem',
    color: 'white',
    margin: 0,
    letterSpacing: '0.05em',
  },
  catDesc: {
    fontSize: '0.9375rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: 0,
  }
};

// Wrapper for clean style injection
const OriginalSolutionSection = SolutionSection;
export default function Wrapper() {
  const original = OriginalSolutionSection();
  const newGrid = React.cloneElement(
    original.props.children[0].props.children[1].props.children, 
    { className: 'cat-grid' }
  );
  
  const newContainerChildren = [
    original.props.children[0].props.children[0],
    React.cloneElement(original.props.children[0].props.children[1], {}, newGrid)
  ];
  
  const newContainer = React.cloneElement(original.props.children[0], {}, newContainerChildren);
  
  return React.cloneElement(original, {}, [newContainer, original.props.children[1]]);
}
