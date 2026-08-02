import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Srajai Tech | Strategic Risk Advisory & Risk Management Solutions',
  '/about': 'About Us | Building Resilient Enterprises — Srajai Tech',
  '/solutions': 'Risk Solutions | Integrated Advisory Practice Domains — Srajai Tech',
  '/industries': 'Industries We Serve | Enterprise Sector Governance — Srajai Tech',
  '/risk-framework': 'Risk Management Framework | Identification to Improvement — Srajai Tech',
  '/founder': 'Guddeti Sanjay Raj | Founder & Principal Risk Strategist — Srajai Tech',
  '/contact': 'Contact Advisory Team | Confidential Audit & Consultation — Srajai Tech'
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Srajai Tech | Strategic Risk Advisory';
    document.title = title;

    // Scroll smoothly to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}
