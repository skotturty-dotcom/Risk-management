import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import HeroRiskNetwork from '../components/visuals/HeroRiskNetwork';
import ValueCards from '../components/visuals/ValueCards';
import RiskDomainMap from '../components/visuals/RiskDomainMap';
import RiskFrameworkCircle from '../components/visuals/RiskFrameworkCircle';
import RiskHeatmap from '../components/visuals/RiskHeatmap';
import ResolverResourceHub from '../components/visuals/ResolverResourceHub';
import AnimatedFrameworkArchitecture from '../components/visuals/AnimatedFrameworkArchitecture';
import AdvisoryWorkflow from '../components/visuals/AdvisoryWorkflow';
import FloatingUI from '../components/FloatingUI';
import SectorModal from '../components/SectorModal';
import CareersSection from '../components/CareersSection';
import { solutionsData } from '../data/solutionsData';
import { industriesData } from '../data/industriesData';
import { frameworkArchitecture, frameworkFoundations } from '../data/frameworkData';
import { founderData } from '../data/founderData';
import {
  ShieldCheck, ArrowRight, CheckCircle2, Building2, ChevronDown, Lock,
  TrendingUp, Activity, FileCheck, Users, Search, Mail, MapPin, Clock, Quote, Phone, MessageSquare,
  Award, Briefcase, Target, Layers, Eye, Sliders, ChevronRight, Landmark, Cloud,
  HeartPulse, Pill, Factory, ShoppingCart, Wifi, Zap, Truck, Car, Scale, GraduationCap,
  Plane, Film, Sprout
} from 'lucide-react';

const sectorIconMap = {
  Landmark,
  ShieldCheck,
  Server: Activity,
  Cloud,
  HeartPulse,
  Pill,
  Factory,
  ShoppingCart,
  Wifi,
  Zap,
  Truck,
  Car,
  Building2,
  Scale,
  GraduationCap,
  Plane,
  Film,
  Sprout
};

const solutionIcons = {
  ShieldAlert: ShieldCheck,
  Lock,
  Activity,
  TrendingUp,
  FileCheck,
  Users,
  Search
};

export default function Home({ onOpenAudit }) {
  const [selectedSector, setSelectedSector] = useState(null);

  // Contact Form State
  const [contactData, setContactData] = useState({
    fullName: '',
    corporateEmail: '',
    companyName: '',
    phone: '',
    practice: 'Enterprise Risk Management (ERM)',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactErrors, setContactErrors] = useState({});
  const [homeGmailUrl, setHomeGmailUrl] = useState('');
  const [homeMailtoUrl, setHomeMailtoUrl] = useState('');

  const validateContact = () => {
    const errs = {};
    if (!contactData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!contactData.corporateEmail.trim()) {
      errs.corporateEmail = 'Corporate email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactData.corporateEmail)) {
      errs.corporateEmail = 'Valid corporate email required';
    }
    if (!contactData.companyName.trim()) errs.companyName = 'Company name is required';
    return errs;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const errs = validateContact();
    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      return;
    }

    setContactSubmitting(true);

    const subject = `New Enterprise Advisory Consultation Request - ${contactData.companyName || contactData.fullName}`;
    const body = `Hello Srajai Tech Advisory Team,

I would like to request a Confidential Advisory Consultation with the following details:

- Full Name: ${contactData.fullName}
- Corporate Email: ${contactData.corporateEmail}
- Company Name: ${contactData.companyName}
- Phone Number: ${contactData.phone || 'N/A'}
- Primary Risk Practice: ${contactData.practice}

Message / Project Scope:
${contactData.message || 'N/A'}

Best regards,
${contactData.fullName}`;

    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=srajaitech@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailto = `mailto:srajaitech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setHomeGmailUrl(gmail);
    setHomeMailtoUrl(mailto);

    // Auto open Gmail compose window immediately on user click
    try {
      window.open(gmail, '_blank');
    } catch (e) {
      console.warn("Could not auto-open tab:", e);
    }

    try {
      await fetch("https://formsubmit.co/ajax/srajaitech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          "Full Name": contactData.fullName,
          "Corporate Email": contactData.corporateEmail,
          "Company Name": contactData.companyName,
          "Phone Number": contactData.phone || "N/A",
          "Primary Risk Practice": contactData.practice,
          "Message / Project Scope": contactData.message || "N/A"
        })
      });
    } catch (err) {
      console.error("FormSubmit error:", err);
    } finally {
      setContactSubmitting(false);
      setContactSubmitted(true);
    }
  };

  return (
    <div className="relative space-y-24 md:space-y-36 pb-20">
      {/* Floating Status Badges */}
      <FloatingUI />

      {/* ==========================================
          1. HERO SECTION (100vh)
         ========================================== */}
      <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-32 md:pt-36 pb-12 overflow-hidden">
        {/* Animated Floating Ambient Background Orbits */}
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-12 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#008579] text-xs font-mono font-bold uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#008579] animate-pulse" />
                <span>Strategic Risk Advisory & Governance</span>
              </motion.div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] text-[#06182D] tracking-tight">
                Navigating Strategic Risk with <br className="hidden sm:inline" />
                <span className="text-[#008579] font-extrabold">Uncompromising Resilience</span>
              </h1>

              <p className="text-slate-700 text-base md:text-lg max-w-2xl leading-relaxed font-heading font-medium">
                Integrated Risk Advisory Solutions across Enterprise, Cyber, Operational, Finance, Legal, TPRM, and Fraud Risk Domains.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="#solutions"
                  className="btn-primary-cta px-7 py-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 group shadow-xl"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#FFFFFF] group-hover:translate-x-1.5 transition-transform" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenAudit}
                  className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-[#06182D] bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-sm transition-all cursor-pointer"
                >
                  Request an Enterprise Audit
                </motion.button>
              </div>

              {/* Key Trust Tags */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-700 font-semibold">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008579] shrink-0" />
                  <span>ISO 31000 & COSO</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008579] shrink-0" />
                  <span>CXO Governance</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008579] shrink-0" />
                  <span>TPRM & Cyber</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Interactive Risk Network */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative pt-8 lg:pt-0"
            >
              <HeroRiskNetwork onOpenAudit={onOpenAudit} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. FOUNDER & PRINCIPAL LEADERSHIP SECTION (VERTICAL LAYOUT)
         ========================================== */}
      <section id="founder" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 sm:p-10 md:p-12 rounded-3xl flex flex-col items-center text-center space-y-8 shadow-2xl bg-[#0A1725] border border-[rgba(72,214,201,0.18)] relative overflow-hidden"
        >
          {/* Top Multi-Color Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />

          {/* Section Header */}
          <div className="space-y-2 max-w-2xl mx-auto pt-2">
            <span className="text-xs font-mono font-extrabold text-[#55D9CC] uppercase tracking-widest px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 inline-block shadow-sm">
              FOUNDER & PRINCIPAL LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Architecting Executive Risk Resilience
            </h2>
          </div>

          {/* Vertical Founder Card - Pure White Box with Extra Large Photo & Small Text */}
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            <div className="relative rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-[#008579] flex flex-col items-center justify-center p-6 sm:p-8 text-center shadow-2xl overflow-hidden group space-y-3 transition-all duration-300">
              {/* Permanent Executive Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />

              {/* Extra Large Executive Photo Box */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl p-1 bg-gradient-to-tr from-[#008579] via-[#38BDF8] to-[#FFB340] shadow-2xl group-hover:scale-[1.01] transition-transform duration-300 shrink-0 mt-1">
                <div className="w-full h-full rounded-xl border-2 border-white overflow-hidden bg-slate-100">
                  <img
                    src="/images/founder.png"
                    alt={founderData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Compact Small Executive Typography */}
              <div className="space-y-1 pt-1">
                <h3 className="text-base sm:text-lg font-bold font-display text-[#06182D] tracking-tight uppercase">
                  {founderData.name}
                </h3>
                <span className="inline-block text-[10px] font-mono font-bold text-[#008579] uppercase tracking-widest px-3 py-0.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-sm">
                  {founderData.designation}
                </span>
              </div>

              <div className="w-full pt-2.5 border-t border-slate-100 font-sans space-y-0.5">
                <p className="flex items-center justify-center space-x-1.5 text-[10px] font-mono font-extrabold text-[#06182D] tracking-wider uppercase">
                  <ShieldCheck className="w-3 h-3 text-[#008579]" />
                  <span>SRAJAI TECH FOUNDER</span>
                </p>
                <p className="text-[10px] text-slate-500 font-medium">Enterprise Risk Strategy & ERM Specialist</p>
              </div>
            </div>
          </div>

          {/* Vertical Bio Text */}
          <p className="text-[#CBD5E1] text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
            {founderData.bio}
          </p>

          {/* Vertical Quote Block */}
          <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl border-l-4 border-l-[#55D9CC] bg-[rgba(6,21,43,0.9)] border border-[rgba(72,214,201,0.2)] space-y-3 shadow-xl text-center">
            <Quote className="w-7 h-7 text-[#55D9CC] mx-auto" />
            <p className="text-base sm:text-lg font-bold text-white font-heading italic leading-relaxed">
              "{founderData.quote}"
            </p>
            <p className="text-xs font-sans text-[#55D9CC] font-extrabold tracking-wide">
              — Guddeti Sanjay Raj, Founder & Principal Risk Strategist
            </p>
          </div>

          {/* Vertical Expertise Cards Grid */}
          <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {founderData.expertise.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-100 border border-slate-300 hover:border-[#008579] space-y-1.5 text-left shadow-md transition-all">
                <h4 className="text-base font-extrabold text-[#06182D] font-display">
                  {exp.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          3. PROTECTING ENTERPRISE VALUE SECTION
         ========================================== */}
      <section id="enterprise-value" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-widest px-3.5 py-1 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">
            VALUE PRESERVATION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#06182D] dark:text-white">
            Protecting Enterprise Value in a Dynamic World
          </h2>
          <p className="text-dark-navy text-base leading-relaxed font-semibold">
            Srajai Tech provides end-to-end framework architecture, diagnostic audits, and governance frameworks designed to safeguard corporate capital, data infrastructure, and brand reputation.
          </p>
        </div>

        <ValueCards />
      </section>

      {/* ==========================================
          3. CORE SOLUTION DOMAINS (7-CARD ECOSYSTEM)
         ========================================== */}
      <section id="risk-domains" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-widest px-3.5 py-1 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">
              PRACTICE ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#06182D] dark:text-white">
              Core Solution Domains
            </h2>
            <p className="text-dark-navy text-base max-w-xl font-semibold">
              Seven integrated advisory pillars surrounding enterprise risk intelligence.
            </p>
          </div>

          <NavLink
            to="/solutions"
            className="inline-flex items-center space-x-2 text-sm font-bold font-mono text-[#008579] dark:text-[#46A095] hover:underline uppercase tracking-wider transition-colors"
          >
            <span>Inspect All Practice Frameworks</span>
            <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>

        <RiskDomainMap onSelectDomain={(practice) => onOpenAudit && onOpenAudit(practice)} />
      </section>

      {/* ==========================================
          RESOLVER-INSPIRED RESOURCE & ADVISORY HUB
         ========================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResolverResourceHub onOpenAudit={onOpenAudit} />
      </section>

      {/* ==========================================
          4. COMPREHENSIVE PRACTICE SOLUTIONS (DEEP DIVE)
         ========================================== */}
      <section id="solutions" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-widest px-3.5 py-1 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">
            DETAILED PRACTICE ADVISORY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#06182D] dark:text-white">
            Comprehensive Practice Solutions
          </h2>
          <p className="text-dark-navy text-base font-semibold">
            Customized frameworks structured to maintain operational continuity, financial stability, and regulatory compliance.
          </p>
        </div>

        <div className="space-y-16">
          {solutionsData.map((sol, index) => {
            const Icon = solutionIcons[sol.icon] || ShieldCheck;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-5 sm:p-6 md:p-8 rounded-2xl border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white shadow-xl ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-4 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-mono font-extrabold text-[#38BDF8] px-2.5 py-0.5 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30 uppercase tracking-widest shadow-sm">
                      PRACTICE DOMAIN {sol.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#E2E8F0] uppercase tracking-widest font-extrabold">
                      ENTERPRISE ADVISORY
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold font-display text-white group-hover:text-[#55D9CC] transition-colors leading-tight">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-medium">
                    {sol.fullDesc}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-[11px] font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider">
                      Core Framework Scope:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sol.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2 text-xs text-[#E2E8F0] font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Compact Topic Image + Action Block */}
                <div className="lg:col-span-5 space-y-3">
                  {/* Compact Topic Image */}
                  <div className="relative h-44 sm:h-48 md:h-52 w-full rounded-xl bg-black/40 border border-white/15 overflow-hidden shadow-lg group">
                    {sol.image ? (
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#38BDF8]">
                        <Icon className="w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute top-2.5 left-2.5 bg-[#38BDF8]/15 backdrop-blur-md px-2.5 py-0.5 rounded border border-[#38BDF8]/30 text-[10px] font-mono font-extrabold text-[#38BDF8] shadow-sm">
                      PRACTICE 0{sol.number}
                    </div>
                  </div>

                  {/* Name & Action Block Below the Image */}
                  <div className="p-3.5 sm:p-4 rounded-xl border border-white/15 bg-black/30 space-y-2.5 shadow-md">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                        MODULE 0{sol.number} ADVISORY DOMAIN
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold font-display text-white leading-snug">
                        {sol.title}
                      </h4>
                    </div>

                    <button
                      onClick={onOpenAudit}
                      className="w-full py-2.5 rounded-lg bg-white hover:bg-slate-100 text-[#06182D] text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer border border-white"
                    >
                      <span>Audit {sol.title.split(' ')[0]} Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#06182D]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          5. ABOUT US & 3-STEP METHODOLOGY
         ========================================== */}
      <section id="about" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[rgba(72,214,201,0.18)] bg-[#0A1725] text-white space-y-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-extrabold text-[#55D9CC] uppercase tracking-widest">
              ABOUT SRAJAI TECH
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
              Building Resilient Enterprises Through Strategic Risk
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
              We provide integrated risk advisory capabilities spanning enterprise, cyber, operational, financial, legal, third-party, and fraud risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#008579] space-y-3 shadow-lg relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-[#008579]">01</span>
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#008579] group-hover:scale-110 transition-transform shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold font-display text-[#06182D]">Diagnose</h3>
              <p className="text-xs font-mono uppercase text-[#008579] tracking-wider font-extrabold">
                Understand Organizational Exposure
              </p>
              <p className="text-xs text-[#06182D] leading-relaxed font-semibold">
                Comprehensive diagnostic scanning across data, capital, contract liabilities, and third-party dependencies.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#008579] space-y-3 shadow-lg relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-[#008579]">02</span>
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#008579] group-hover:scale-110 transition-transform shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold font-display text-[#06182D]">Design</h3>
              <p className="text-xs font-mono uppercase text-[#008579] tracking-wider font-extrabold">
                Build Resilience Architecture
              </p>
              <p className="text-xs text-[#06182D] leading-relaxed font-semibold">
                Formulating governance controls, KRIs, RCSA protocols, BCP architectures, and board appetite thresholds.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#008579] space-y-3 shadow-lg relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-[#008579]">03</span>
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#008579] group-hover:scale-110 transition-transform shadow-sm">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold font-display text-[#06182D]">Strengthen</h3>
              <p className="text-xs font-mono uppercase text-[#008579] tracking-wider font-extrabold">
                Continuous Governance & Telemetry
              </p>
              <p className="text-xs text-[#06182D] leading-relaxed font-semibold">
                Continuous control monitoring, board dashboard reporting, whistleblower integrity testing, and optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. FULL 18 INDUSTRIES ECOSYSTEM GRID (INTERACTIVE & CLICKABLE)
         ========================================== */}
      <section id="industries" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-widest px-3.5 py-1 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">
              SECTOR GOVERNANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0F3161] dark:text-white">
              Industries We Serve
            </h2>
            <p className="text-dark-navy text-base max-w-xl font-semibold">
              Click on any sector box below to inspect its full advisory scope and Key Risk Indicators.
            </p>
          </div>

          <NavLink
            to="/industries"
            className="inline-flex items-center space-x-2 text-sm font-bold font-mono text-[#008579] dark:text-[#46A095] hover:underline uppercase tracking-wider transition-colors"
          >
            <span>Explore All 18 Sectors</span>
            <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industriesData.map((ind) => {
            const Icon = sectorIconMap[ind.icon] || Building2;

            return (
              <motion.div
                key={ind.id}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setSelectedSector(ind)}
                className="p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-xl flex flex-col justify-between bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white"
              >
                {/* Multi-Color Gradient Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#38BDF8] via-[#008579] to-[#FFB340]" />

                <div className="space-y-3 pt-1">
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-4 h-4 text-[#38BDF8]" />
                    </div>

                    <span className="text-[9px] font-mono font-extrabold text-[#38BDF8] bg-[#38BDF8]/15 px-2.5 py-0.5 rounded-lg border border-[#38BDF8]/30 uppercase tracking-wider shadow-sm">
                      SECTOR {ind.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Subheading */}
                  <div className="space-y-0.5">
                    <h3 className="text-base md:text-lg font-extrabold font-display text-white group-hover:text-[#55D9CC] transition-colors leading-snug">
                      {ind.name || ind.title}
                    </h3>
                    <p className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-white">
                      {ind.riskCategory || ind.kri}
                    </p>
                  </div>

                  {/* Description Info Copy */}
                  <p className="text-[11px] text-[#E2E8F0] font-medium leading-snug line-clamp-3">
                    {ind.description || ind.desc}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 mt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider group-hover:underline">
                    Click to Inspect Scope
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3 text-[#38BDF8]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          7. RISK MANAGEMENT FRAMEWORK & FLOW
         ========================================== */}
      <section id="risk-framework" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-widest px-3.5 py-1 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">
            FRAMEWORK METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0F3161] dark:text-white">
            Risk Management Framework
          </h2>
          <p className="text-dark-navy text-base md:text-lg font-semibold leading-relaxed">
            A structured approach to identifying, assessing, mitigating, monitoring, and continuously improving enterprise risk.
          </p>
        </div>

        <RiskFrameworkCircle />
      </section>

      {/* ==========================================
          8. FRAMEWORK ARCHITECTURE SYSTEM HIERARCHY
         ========================================== */}
      <section id="framework-architecture" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedFrameworkArchitecture />
      </section>

      {/* ==========================================
          9. 5 x 5 RISK HEATMAP MATRIX
         ========================================== */}
      <section id="risk-heatmap" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiskHeatmap />
      </section>

      {/* ==========================================
          10. FRAMEWORK FOUNDATIONS
         ========================================== */}
      <section id="framework-foundations" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-[#55D9CC] uppercase tracking-widest px-3.5 py-1 rounded-md bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)]">
            METHODOLOGY PILLARS
          </span>
          <h2 className="text-3xl font-extrabold font-display text-[#06182D]">
            Framework Foundations
          </h2>
          <p className="text-dark-navy text-base md:text-lg font-semibold leading-relaxed">
            Core international standards and internal control components underpinning Srajai Tech advisory architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkFoundations.map((found, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white via-teal-50/30 to-slate-50 border-2 border-teal-500/40 hover:border-[#008579] transition-all duration-300 flex items-center space-x-4 shadow-lg hover:shadow-2xl hover:shadow-[#008579]/25 group cursor-pointer relative overflow-hidden"
            >
              {/* Permanent Executive Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />

              {/* Bold Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008579] to-[#005B53] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-lg font-extrabold font-display text-[#06182D] group-hover:text-[#008579] transition-colors duration-200">
                  {found.name}
                </h3>
                <p className="text-xs text-slate-700 font-semibold mt-0.5 leading-relaxed">
                  {found.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* ==========================================
          11. INTERACTIVE 4-STEP ADVISORY WORKFLOW
         ========================================== */}
      <AdvisoryWorkflow onOpenAudit={onOpenAudit} />

      {/* ==========================================
          12. CAREERS & EXECUTIVE HIRING SECTION
         ========================================== */}
      <CareersSection />

      {/* ==========================================
          12. CONTACT ADVISORY TEAM & INQUIRY FORM
         ========================================== */}
      <section id="contact" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl border border-[#38BDF8]/40 space-y-6 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white shadow-2xl">
              <div className="space-y-2">
                <span className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-widest block">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl font-extrabold font-display text-[#38BDF8]">
                  Connect with Our Advisory Team
                </h2>
              </div>

              <p className="text-sm text-[#E2E8F0] leading-relaxed font-medium">
                Partner with Srajai Tech to evaluate, strengthen, and optimize your organization's risk profile.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#38BDF8] font-extrabold block tracking-wider">
                      DIRECT EMAIL
                    </span>
                    <a
                      href="mailto:srajaitech@gmail.com"
                      className="text-[#38BDF8] hover:text-[#55D9CC] font-mono text-base font-extrabold transition-colors"
                    >
                      srajaitech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#38BDF8] font-extrabold block tracking-wider">
                      PHONE & WHATSAPP
                    </span>
                    <a
                      href="tel:+919182119045"
                      className="text-[#38BDF8] hover:text-[#55D9CC] font-mono text-base font-extrabold transition-colors block"
                    >
                      +91 9182119045
                    </a>
                    <div className="flex items-center gap-2 pt-1.5">
                      <a
                        href="tel:+919182119045"
                        className="px-2.5 py-1 rounded text-xs font-extrabold bg-[#008579] text-white hover:bg-[#00685E] transition-colors"
                      >
                        Call
                      </a>
                      <a
                        href="https://wa.me/919182119045"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded text-xs font-extrabold bg-[#25D366] text-white hover:bg-[#1DA851] transition-colors flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#38BDF8] font-extrabold block tracking-wider">
                      HEADQUARTERS
                    </span>
                    <p className="text-white text-base font-extrabold">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#38BDF8] font-extrabold block tracking-wider">
                      ADVISORY OPERATING HOURS
                    </span>
                    <p className="text-white text-base font-extrabold">
                      Monday – Friday: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#06152B] border border-dashed border-[#38BDF8]/30 text-xs text-[#E2E8F0] leading-relaxed font-mono">
                <span className="text-[#38BDF8] font-bold">NOTE:</span> Email reflects official client documentation.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white shadow-2xl">
              {!contactSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-extrabold font-display text-white">
                      Request a Confidential Consultation
                    </h3>
                    <p className="text-xs text-[#CBD5E1] mt-1 font-medium">
                      Fill in your corporate details to schedule a senior advisory session.
                    </p>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#55D9CC] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={contactData.fullName}
                          onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })}
                          placeholder="Executive Name"
                          className="w-full bg-white text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors shadow-sm"
                        />
                        {contactErrors.fullName && <p className="text-xs text-rose-400 mt-1 font-mono">{contactErrors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#55D9CC] mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          value={contactData.corporateEmail}
                          onChange={(e) => setContactData({ ...contactData, corporateEmail: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-white text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors shadow-sm"
                        />
                        {contactErrors.corporateEmail && <p className="text-xs text-rose-400 mt-1 font-mono">{contactErrors.corporateEmail}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#55D9CC] mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          value={contactData.companyName}
                          onChange={(e) => setContactData({ ...contactData, companyName: e.target.value })}
                          placeholder="Enterprise Organization"
                          className="w-full bg-white text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors shadow-sm"
                        />
                        {contactErrors.companyName && <p className="text-xs text-rose-400 mt-1 font-mono">{contactErrors.companyName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#55D9CC] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={contactData.phone}
                          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-white text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#55D9CC] mb-1.5">
                        Select Primary Risk Practice
                      </label>
                      <select
                        value={contactData.practice}
                        onChange={(e) => setContactData({ ...contactData, practice: e.target.value })}
                        className="w-full bg-white text-slate-900 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors font-mono text-xs shadow-sm"
                      >
                        <option value="Enterprise Risk Management (ERM)">Enterprise Risk Management (ERM)</option>
                        <option value="Cyber Risk Governance">Cyber Risk Governance</option>
                        <option value="Operational Risk & Continuity">Operational Risk & Continuity</option>
                        <option value="Financial Risk Advisory">Financial Risk Advisory</option>
                        <option value="Legal, Regulatory & Compliance">Legal, Regulatory & Compliance</option>
                        <option value="Third-Party Risk Management (TPRM)">Third-Party Risk Management (TPRM)</option>
                        <option value="Fraud Risk Management">Fraud Risk Management & Forensics</option>
                        <option value="Other">Other Strategic Risk Consultations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-[#55D9CC] mb-1.5">
                        Message / Project Scope
                      </label>
                      <textarea
                        rows={4}
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        placeholder="Detail your organizational risk appetite, compliance objectives, or diagnostic audit goals..."
                        className="w-full bg-white text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors resize-none shadow-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-teal-600/30 hover:brightness-110 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
                    >
                      <Mail className="w-4 h-4 text-[#FFB340]" />
                      <span>{contactSubmitting ? 'Transmitting Request to Email...' : 'Request a Confidential Consultation'}</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 bg-teal-50 dark:bg-teal-500/20 border border-[#008579] dark:border-[#46A095] rounded-full flex items-center justify-center mx-auto text-[#008579] dark:text-[#46A095]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Consultation Request Transmitted & Auto-Opened in Gmail!
                  </h3>
                  <p className="text-slate-200 text-sm max-w-md mx-auto leading-relaxed font-medium">
                    Thank you, <span className="text-[#55D9CC] font-semibold">{contactData.fullName}</span>. Your details for <span className="text-white font-semibold">{contactData.companyName}</span> have been transmitted to <strong className="text-[#55D9CC]">srajaitech@gmail.com</strong> and pre-filled into Gmail.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={homeGmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-4 h-4 text-[#FFB340]" />
                      <span>Open Gmail Web Compose</span>
                    </a>
                    <a
                      href={homeMailtoUrl}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 border border-slate-500"
                    >
                      <Mail className="w-4 h-4 text-[#55D9CC]" />
                      <span>Open System Mail App</span>
                    </a>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactData({
                          fullName: '',
                          corporateEmail: '',
                          companyName: '',
                          phone: '',
                          practice: 'Enterprise Risk Management (ERM)',
                          message: ''
                        });
                        setContactErrors({});
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold uppercase tracking-wider border border-slate-600 transition-colors shadow-md"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sector Modal */}
      {selectedSector && (
        <SectorModal
          sector={selectedSector}
          onClose={() => setSelectedSector(null)}
          onOpenAudit={onOpenAudit}
        />
      )}
    </div>
  );
}
