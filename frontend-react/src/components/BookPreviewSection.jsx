import React from 'react';

const previews = [
  { label: "Skin", title: "SKIN ROUTINE", text: "Morning: Cleanser + Moisturizer + SPF\nNight: Cleanser + Moisturizer" },
  { label: "Hair", title: "HAIR LOSS OPTIONS", text: "Minoxidil: Increases blood flow\nFinasteride: Blocks DHT\nKetoconazole: Reduces scalp DHT" },
  { label: "Style", title: "PROPORTIONS", text: "Rule of thirds: Avoid splitting the body in half. Wear pants at your natural waist or layer a shorter jacket over a longer shirt to create a 1/3 to 2/3 ratio." },
  { label: "Posture", title: "DAILY ROUTINE", text: "Wall Angels (3x10)\nChin Tucks (3x10)\nThoracic Extensions (2x15)" },
  { label: "30-Day Plan", title: "PHASE 1: SUBTRACT", text: "Week 1: Stop buying new products.\nWeek 2: Clear out expired items.\nWeek 3: Establish baseline routine." }
];

const BookPreviewSection = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>See what's inside before you buy.</h2>
        </div>

        <div style={styles.sliderContainer}>
          <div style={styles.grid}>
            {previews.map((preview, idx) => (
              <div key={idx} className="slide-up preview-card" style={{...styles.card, animationDelay: `${idx * 0.1}s`}}>
                <div style={styles.pageMockup}>
                  <div style={styles.pageHeader}>SHARPER GUIDE</div>
                  <h3 style={styles.pageTitle}>{preview.title}</h3>
                  <div style={styles.pageContent}>
                    {preview.text.split('\n').map((line, i) => (
                      <p key={i} style={styles.pageText}>• {line}</p>
                    ))}
                  </div>
                  <div style={styles.pageFooter}>{idx + 12}</div>
                </div>
                <h4 style={styles.label}>{preview.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .preview-grid {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 2rem;
          margin: 0 -1.5rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        
        .preview-grid::-webkit-scrollbar {
          height: 8px;
        }
        .preview-grid::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .preview-grid::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 4px;
        }
        .preview-grid::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }

        .preview-card {
          width: 280px;
          flex-shrink: 0;
          scroll-snap-align: center;
          transition: transform 0.3s ease;
        }
        .preview-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--surface-color)',
    borderBottom: '1px solid var(--border-color)',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    margin: 0,
  },
  sliderContainer: {
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  pageMockup: {
    width: '100%',
    backgroundColor: '#FAFAFA', // Light page color
    border: '1px solid #E5E7EB',
    borderRadius: '4px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.4), inset 5px 0 15px rgba(0,0,0,0.05)',
    aspectRatio: '3/4',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 1.5rem',
    color: '#1F2937',
    position: 'relative',
    textAlign: 'left',
    overflow: 'hidden',
  },
  pageHeader: {
    fontSize: '0.6rem',
    color: '#9CA3AF',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '2rem',
    borderBottom: '1px solid #E5E7EB',
    paddingBottom: '0.5rem',
  },
  pageTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    flexGrow: 1,
  },
  pageText: {
    fontSize: '0.85rem',
    color: '#4B5563',
    lineHeight: 1.6,
    margin: 0,
  },
  pageFooter: {
    fontSize: '0.6rem',
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 'auto',
  },
  label: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  }
};

// Wrapper for clean style injection
const OriginalBookPreviewSection = BookPreviewSection;
export default function Wrapper() {
  const original = OriginalBookPreviewSection();
  const newGrid = React.cloneElement(
    original.props.children[0].props.children[1].props.children, 
    { className: 'preview-grid' }
  );
  
  const newContainerChildren = [
    original.props.children[0].props.children[0],
    React.cloneElement(original.props.children[0].props.children[1], {}, newGrid)
  ];
  
  const newContainer = React.cloneElement(original.props.children[0], {}, newContainerChildren);
  
  return React.cloneElement(original, {}, [newContainer, original.props.children[1]]);
}
