import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import GlowUpLandingPage from './pages/GlowUpLandingPage';
import AccessPage from './pages/AccessPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';

function AdminRedirect() {
  useEffect(() => {
    window.location.href = '/admin/index.html';
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/awkward" element={<LandingPage />} />
        <Route path="/glow-up" element={<GlowUpLandingPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/access.html" element={<AccessPage />} />
        <Route path="/privacy.html" element={<PrivacyPage />} />
        <Route path="/terms.html" element={<TermsPage />} />
        <Route path="/refund.html" element={<RefundPage />} />
        <Route path="/admin" element={<AdminRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
