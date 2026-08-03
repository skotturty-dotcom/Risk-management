import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingNetworkCanvas from './components/FloatingNetworkCanvas';
import AuditModal from './components/AuditModal';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import RiskFrameworkPage from './pages/RiskFrameworkPage';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedAuditPractice, setSelectedAuditPractice] = useState(null);

  const handleOpenAudit = (practice) => {
    if (practice) {
      setSelectedAuditPractice(practice);
    }
    setIsAuditModalOpen(true);
  };
  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
    setSelectedAuditPractice(null);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <SEOHead />
          <div className="relative min-h-screen bg-white text-[#06182D] selection:bg-[#2563EB]/20 selection:text-[#2563EB] overflow-x-hidden font-sans transition-colors duration-300">
            {/* Ambient Canvas Visual Background */}
            <FloatingNetworkCanvas />

            {/* Custom Desktop Magnetic Cursor */}
            <CustomCursor />

            {/* Sticky Navigation Bar */}
            <Navbar onOpenAudit={handleOpenAudit} />

            {/* Main Content Router View */}
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home onOpenAudit={handleOpenAudit} />} />
                <Route path="/about" element={<AboutUs onOpenAudit={handleOpenAudit} />} />
                <Route path="/solutions" element={<Solutions onOpenAudit={handleOpenAudit} />} />
                <Route path="/industries" element={<Industries onOpenAudit={handleOpenAudit} />} />
                <Route path="/risk-framework" element={<RiskFrameworkPage onOpenAudit={handleOpenAudit} />} />
                <Route path="/founder" element={<Founder onOpenAudit={handleOpenAudit} />} />
                <Route path="/careers" element={<Careers onOpenAudit={handleOpenAudit} />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            {/* Corporate Footer */}
            <Footer onOpenAudit={handleOpenAudit} />

            {/* Audit Modal */}
            <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} selectedPractice={selectedAuditPractice} />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
