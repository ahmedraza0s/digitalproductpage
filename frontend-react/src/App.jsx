import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AccessPage from './pages/AccessPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/access.html" element={<AccessPage />} />
        <Route path="/privacy.html" element={<PrivacyPage />} />
        <Route path="/terms.html" element={<TermsPage />} />
        <Route path="/refund.html" element={<RefundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
