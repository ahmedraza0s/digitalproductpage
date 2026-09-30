import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import ScrollToTop from './components/ScrollToTop';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const GlowUpLandingPage = lazy(() => import('./pages/GlowUpLandingPage'));
const AccessPage = lazy(() => import('./pages/AccessPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const RefundPage = lazy(() => import('./pages/RefundPage'));

function AdminRedirect() {
  useEffect(() => {
    window.location.href = '/admin/index.html';
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#030305' }}></div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
