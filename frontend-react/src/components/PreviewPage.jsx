import React from 'react';

const PreviewPage = ({ title, items, style, delay = 0 }) => {
  return (
    <div className="preview-page-container" style={style}>
      <div className="preview-page" style={{ animationDelay: `${delay}s` }}>
        <div className="preview-header">
          <div className="preview-logo">SHARPER</div>
          <div className="preview-page-num">PAGE 14</div>
        </div>
        
        <h3 className="preview-title">{title}</h3>
        <div className="preview-divider"></div>
        
        <div className="preview-content">
          {items.map((item, i) => (
            <div key={i} className="preview-item">
              <div className="preview-icon">✦</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
        
        <div className="preview-footer">
          <div className="preview-bar"></div>
        </div>
      </div>
      
      <style>{`
        .preview-page-container {
          perspective: 1000px;
          z-index: 1;
        }
        
        .preview-page {
          width: 220px;
          height: 310px;
          background: #ffffff;
          border-radius: 6px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1);
          padding: 1.8rem 1.4rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          /* 3D styling */
          transform: rotateY(-10deg) rotateZ(3deg);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          animation: floatPreview 6s infinite ease-in-out;
          font-family: 'Inter', sans-serif;
        }
        
        .preview-page:hover {
          transform: rotateY(0deg) rotateZ(0deg) scale(1.08);
          z-index: 10;
          box-shadow: 0 35px 60px rgba(0,0,0,0.8);
        }
        
        @keyframes floatPreview {
          0% { transform: translateY(0) rotateY(-10deg) rotateZ(3deg); }
          50% { transform: translateY(-12px) rotateY(-10deg) rotateZ(3deg); }
          100% { transform: translateY(0) rotateY(-10deg) rotateZ(3deg); }
        }
        
        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .preview-logo {
          font-size: 0.55rem;
          font-weight: 800;
          color: #9ca3af;
          letter-spacing: 0.15em;
        }
        
        .preview-page-num {
          font-size: 0.5rem;
          color: #d1d5db;
          font-weight: 600;
          letter-spacing: 0.1em;
        }
        
        .preview-title {
          font-size: 1.1rem;
          color: #111827;
          font-weight: 800;
          margin: 0 0 0.75rem 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        
        .preview-divider {
          width: 35px;
          height: 3px;
          background: #8B5CF6; /* Violet accent matching main theme */
          margin-bottom: 1.5rem;
          border-radius: 2px;
        }
        
        .preview-content {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          flex-grow: 1;
        }
        
        .preview-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }
        
        .preview-icon {
          color: #F59E0B; /* Amber accent */
          font-size: 0.65rem;
          margin-top: 0.15rem;
        }
        
        .preview-item p {
          margin: 0;
          font-size: 0.65rem;
          color: #4b5563;
          line-height: 1.6;
          font-weight: 500;
        }
        
        .preview-footer {
          margin-top: auto;
          display: flex;
          justify-content: center;
        }
        
        .preview-bar {
          width: 30%;
          height: 3px;
          background: #e5e7eb;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default PreviewPage;
