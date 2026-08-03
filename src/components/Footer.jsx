import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Mail, MapPin, Phone, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

export default function Footer({ onOpenAudit }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-white text-slate-900 overflow-hidden border-t border-slate-200 shadow-2xl">
      {/* Resolver-Inspired Newsletter & Intelligence Subscription Banner - PURE WHITE CONTAINER BOX */}
      <div className="relative bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 shadow-sm text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-extrabold text-[#008579] uppercase tracking-widest px-3.5 py-1 rounded bg-teal-50 border border-teal-200 inline-block shadow-sm">
              SRAJAI TECH RISK INTELLIGENCE BULLETIN
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-[#06182D]">
              Subscribe to Boardroom Risk Briefings & Telemetry Insights
            </h3>
            <p className="text-sm text-slate-600 max-w-xl font-medium leading-relaxed">
              Join over 5,000+ CXOs, risk officers, and governance directors receiving our monthly advisory breakdown.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="w-full sm:w-80 px-4 py-3 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#008579] shadow-inner border border-slate-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
                >
                  <span>Subscribe Briefs</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-[#008579] font-mono text-sm font-extrabold bg-teal-50 px-5 py-3 rounded-xl border border-teal-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#008579]" />
                <span>Subscription Confirmed. Welcome to Srajai Tech Intelligence.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Corporate Footer Links - PURE CRISP WHITE BACKGROUND */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo-dark.png"
                alt="Srajai Tech Logo"
                className="h-14 sm:h-16 md:h-20 max-h-20 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium max-w-sm">
              Srajai Tech transforms traditional reactive risk management into a strategic growth driver. Built for enterprise boards, financial institutions, and multi-cloud technology organizations.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-700 space-y-1">
              <p><strong className="text-[#008579]">Founder:</strong> Guddeti Sanjay Raj</p>
              <p><strong className="text-[#008579]">Headquarters:</strong> Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#008579]">
              Advisory Solutions
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li><NavLink to="/solutions" className="hover:text-[#008579] transition-colors">Enterprise Risk Management</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#008579] transition-colors">Cyber Risk Governance</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#008579] transition-colors">Operational Risk & BCP</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#008579] transition-colors">Financial Risk Advisory</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#008579] transition-colors">Legal & Regulatory (CPWD/FIDIC)</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#008579] transition-colors">Third-Party Risk (TPRM)</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#008579] transition-colors">Fraud Risk & Forensics</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#008579]">
              Company & Practice
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li><NavLink to="/" className="hover:text-[#008579] transition-colors">Home Platform</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#008579] transition-colors">About Srajai Tech</NavLink></li>
              <li><NavLink to="/industries" className="hover:text-[#008579] transition-colors">Industries We Serve (18 Sectors)</NavLink></li>
              <li><NavLink to="/risk-framework" className="hover:text-[#008579] transition-colors">Risk Management Framework</NavLink></li>
              <li><NavLink to="/founder" className="hover:text-[#008579] transition-colors">Founder Leadership</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-[#008579] transition-colors">Careers & Hiring</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#008579] transition-colors">Contact Advisory Team</NavLink></li>
            </ul>
          </div>

          {/* Col 4: Audit Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#008579]">
              Enterprise Audit
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Schedule a confidential diagnostic audit with our principal risk strategists.
            </p>
            <button
              onClick={onOpenAudit}
              className="w-full py-3.5 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2 border border-[#008579] cursor-pointer"
            >
              <Lock className="w-4 h-4 text-white" />
              <span>Request Diagnostic Audit</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 font-mono gap-4">
          <p>© {new Date().getFullYear()} Srajai Tech. All Rights Reserved. Strategic Risk Advisory & Intelligence.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#008579] font-extrabold">ISO 31000 & COSO Compliant</span>
            <div className="flex items-center gap-3">
              <a href="mailto:srajaitech@gmail.com" className="hover:text-[#008579] transition-colors font-bold">
                srajaitech@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+919182119045" className="hover:text-[#008579] transition-colors font-bold">
                +91 9182119045
              </a>
              <span>•</span>
              <a
                href="https://wa.me/919182119045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008579] hover:underline font-extrabold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
