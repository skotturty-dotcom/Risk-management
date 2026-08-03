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
    <footer className="relative bg-[#06152B] text-white overflow-hidden border-t border-teal-500/20">
      {/* Resolver-Inspired Newsletter & Intelligence Subscription Banner */}
      <div className="relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#008579] via-[#00437E] to-[#00274A] py-12 px-4 sm:px-6 lg:px-8 border-b border-teal-400/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-extrabold text-[#FFB340] uppercase tracking-widest px-3 py-1 rounded bg-[#06152B]/40 border border-[#FFB340]/30 inline-block">
              SRAJAI TECH RISK INTELLIGENCE BULLETIN
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white">
              Subscribe to Boardroom Risk Briefings & Telemetry Insights
            </h3>
            <p className="text-sm text-teal-100 max-w-xl font-medium">
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
                  className="w-full sm:w-80 px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFB340] shadow-md"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FFB340] hover:bg-[#FFA41A] text-[#0F3161] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0"
                >
                  <span>Subscribe Briefs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-[#FFB340] font-mono text-sm font-bold bg-[#06152B]/60 px-5 py-3 rounded-xl border border-[#FFB340]/40">
                <CheckCircle2 className="w-5 h-5" />
                <span>Subscription Confirmed. Welcome to Srajai Tech Intelligence.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Corporate Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

            <p className="text-xs text-slate-300 leading-relaxed font-medium max-w-sm">
              Srajai Tech transforms traditional reactive risk management into a strategic growth driver. Built for enterprise boards, financial institutions, and multi-cloud technology organizations.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <p><strong className="text-white">Founder:</strong> Guddeti Sanjay Raj</p>
              <p><strong className="text-white">Headquarters:</strong> Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#FFB340]">
              Advisory Solutions
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><NavLink to="/solutions" className="hover:text-[#46A095] transition-colors">Enterprise Risk Management</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#46A095] transition-colors">Cyber Risk Governance</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#46A095] transition-colors">Operational Risk & BCP</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#46A095] transition-colors">Financial Risk Advisory</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#46A095] transition-colors">Legal & Regulatory (CPWD/FIDIC)</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#46A095] transition-colors">Third-Party Risk (TPRM)</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-[#46A095] transition-colors">Fraud Risk & Forensics</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#FFB340]">
              Company & Practice
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><NavLink to="/" className="hover:text-[#46A095] transition-colors">Home Platform</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#46A095] transition-colors">About Srajai Tech</NavLink></li>
              <li><NavLink to="/industries" className="hover:text-[#46A095] transition-colors">Industries We Serve (18 Sectors)</NavLink></li>
              <li><NavLink to="/risk-framework" className="hover:text-[#46A095] transition-colors">Risk Management Framework</NavLink></li>
              <li><NavLink to="/founder" className="hover:text-[#46A095] transition-colors">Founder Leadership</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#46A095] transition-colors">Contact Advisory Team</NavLink></li>
            </ul>
          </div>

          {/* Col 4: Audit Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#FFB340]">
              Enterprise Audit
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Schedule a confidential diagnostic audit with our principal risk strategists.
            </p>
            <button
              onClick={onOpenAudit}
              className="w-full py-3 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <Lock className="w-3.5 h-3.5 text-[#FFB340]" />
              <span>Request Diagnostic Audit</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} Srajai Tech. All Rights Reserved. Strategic Risk Advisory & Intelligence.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#46A095]">ISO 31000 & COSO Compliant</span>
            <div className="flex items-center gap-3">
              <a href="mailto:srajaitech@gmail.com" className="hover:text-white transition-colors">
                srajaitech@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+919182119045" className="hover:text-white transition-colors">
                +91 9182119045
              </a>
              <span>•</span>
              <a
                href="https://wa.me/919182119045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold"
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
