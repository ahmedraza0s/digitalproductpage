import React from 'react';

const tocData = [
  { topic: "Starting Conversations", desc: "How to approach and open naturally" },
  { topic: "After “Hi”", desc: "What to say when the basic introduction is over" },
  { topic: "Conversation Flow", desc: "How to move naturally between topics" },
  { topic: "Better Questions", desc: "How to ask questions that create real conversation" },
  { topic: "Dead Ends", desc: "How to avoid conversations that go nowhere" },
  { topic: "New People", desc: "How to engage with someone you've just met" },
  { topic: "Overthinking", desc: "How to stop mentally analyzing every sentence" },
  { topic: "Natural Confidence", desc: "How to become socially comfortable without faking it" }
];

const TableOfContents = () => {
  return (
    <section style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <h2 style={styles.title} className="text-center">Inside the 45 Pages</h2>
        
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Topic</th>
                <th style={styles.th}>What you'll learn</th>
              </tr>
            </thead>
            <tbody>
              {tocData.map((item, idx) => (
                <tr key={idx} style={styles.tr}>
                  <td style={styles.tdTopic}><strong>{item.topic}</strong></td>
                  <td style={styles.tdDesc}>{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '800px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
  },
  tableContainer: {
    overflowX: 'auto',
    backgroundColor: 'var(--surface-color)',
    borderRadius: '1rem',
    border: '1px solid var(--border-color)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  th: {
    padding: '1.5rem',
    borderBottom: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontSize: '0.875rem',
  },
  tr: {
    borderBottom: '1px solid var(--border-color)',
    transition: 'background-color 0.2s',
  },
  tdTopic: {
    padding: '1.5rem',
    color: 'white',
    whiteSpace: 'nowrap',
  },
  tdDesc: {
    padding: '1.5rem',
    color: 'var(--text-secondary)',
  }
};

export default TableOfContents;
