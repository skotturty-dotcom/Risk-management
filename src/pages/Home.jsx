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
import FloatingUI from '../components/FloatingUI';
import SectorModal from '../components/SectorModal';
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
  const [contactErrors, setContactErrors] = useState({});

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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = validateContact();
    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      return;
    }
    setContactSubmitted(true);
  };

  return (
    <div className="relative space-y-24 md:space-y-36 pb-20">
      {/* Floating Status Badges */}
      <FloatingUI />

      {/* ==========================================
          1. HERO SECTION (100vh)
         ========================================== */}
      <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-32 md:pt-36 pb-12 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#008579] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#008579]" />
                <span>Strategic Risk Advisory & Governance</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] text-[#06182D] tracking-tight">
                Navigating Strategic Risk with <br className="hidden sm:inline" />
                <span className="text-[#008579] font-extrabold">Uncompromising Resilience</span>
              </h1>

              <p className="text-slate-700 text-base md:text-lg max-w-2xl leading-relaxed font-heading font-medium">
                Integrated Risk Advisory Solutions across Enterprise, Cyber, Operational, Finance, Legal, TPRM, and Fraud Risk Domains.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a
                  href="#solutions"
                  className="btn-primary-cta px-7 py-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#FFFFFF] group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenAudit}
                  className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-[#06182D] bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-sm transition-all"
                >
                  Request an Enterprise Audit
                </button>
              </div>

              {/* Key Trust Tags */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008579] shrink-0" />
                  <span>ISO 31000 & COSO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008579] shrink-0" />
                  <span>CXO Governance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008579] shrink-0" />
                  <span>TPRM & Cyber</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Risk Network */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
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
          2. FOUNDER & PRINCIPAL LEADERSHIP SECTION (RIGHT AFTER HERO)
         ========================================== */}
      <section id="founder" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 md:p-9 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl bg-[#0A1725] border border-[rgba(72,214,201,0.18)]">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0F3161] via-[#06182D] to-[#020B14] text-white border-2 border-[#28C7B7] flex flex-col items-center justify-center p-5 sm:p-6 text-center shadow-2xl overflow-hidden group max-w-sm mx-auto lg:max-w-none">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#55D9CC] overflow-hidden shadow-2xl mb-3 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <img
                  src="/images/founder.png"
                  alt={founderData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-extrabold font-display text-white">
                {founderData.name}
              </h3>
              <p className="text-[11px] font-sans text-[#55D9CC] uppercase tracking-wider mt-1.5 font-extrabold px-3 py-0.5 rounded bg-[rgba(40,199,183,0.10)] border border-[rgba(40,199,183,0.25)]">
                {founderData.designation}
              </p>
              <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.10)] text-xs font-sans text-[#B8C4CF] font-semibold space-y-1 w-full">
                <p className="flex items-center justify-center space-x-1.5 text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#55D9CC]" />
                  <span>SRAJAI TECH FOUNDER</span>
                </p>
                <p className="text-[11px] text-[#8D9AA7]">Enterprise Risk Strategy & ERM Specialist</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold font-sans text-[#55D9CC] uppercase tracking-widest block">
                FOUNDER & PRINCIPAL LEADERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#55D9CC]">
                {founderData.name}
              </h2>
            </div>

            <p className="text-white text-sm sm:text-base leading-relaxed font-normal">
              {founderData.bio}
            </p>

            {/* Quote Block */}
            <div className="p-5 sm:p-6 rounded-xl border-l-4 border-l-[#55D9CC] bg-[rgba(10,23,37,0.85)] border border-[rgba(72,214,201,0.18)] space-y-3 shadow-md">
              <Quote className="w-6 h-6 text-[#55D9CC]" />
              <p className="text-sm sm:text-base font-bold text-white font-heading italic leading-relaxed">
                "{founderData.quote}"
              </p>
              <p className="text-xs font-sans text-[#55D9CC] font-extrabold tracking-wide">
                — Guddeti Sanjay Raj, Founder & Principal Risk Strategist
              </p>
            </div>

            {/* Expertise Grid - Light Grey Cards with Dark Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {founderData.expertise.map((exp, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-slate-100 border border-slate-300 hover:border-[#008579] space-y-1.5 shadow-md transition-all">
                  <h4 className="text-sm sm:text-base font-extrabold text-[#06182D] font-display">
                    {exp.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
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

        <RiskDomainMap />
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
                transition={{ duration: 0.6 }}
                className={`glass-panel p-8 md:p-12 rounded-3xl border border-[rgba(72,214,201,0.18)] hover:border-[#55D9CC] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0A1725] text-white shadow-2xl ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-[#55D9CC] px-3 py-1 rounded-md bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)]">
                      PRACTICE DOMAIN {sol.number}
                    </span>
                    <span className="text-xs font-mono text-[#B8C4CF] uppercase tracking-widest font-semibold">
                      ENTERPRISE ADVISORY
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white">
                    {sol.title}
                  </h3>

                  <p className="text-white text-base leading-relaxed font-normal">
                    {sol.fullDesc}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-[#55D9CC] uppercase tracking-wider">
                      Core Framework Scope:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sol.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-sm text-white font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#55D9CC] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Prominent Generated Topic Image + Name Below */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Large Prominent Topic Image */}
                  <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-2xl bg-[#06152B] border-2 border-[#008579] overflow-hidden shadow-2xl group">
                    {sol.image ? (
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0F3161] to-[#06152B] text-teal-400">
                        <Icon className="w-16 h-16" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-[#06152B]/85 backdrop-blur-md px-3 py-1 rounded-lg border border-teal-500/30 text-xs font-mono font-bold text-[#FFB340]">
                      PRACTICE 0{sol.number}
                    </div>
                  </div>

                  {/* Name & Action Block Below the Image */}
                  <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4 shadow-lg bg-white dark:bg-[#0F2342]">
                    <div className="space-y-1">
                      <span className="text-xs font-sans font-extrabold text-[#008579] dark:text-[#46A095] uppercase tracking-wider block">
                        MODULE 0{sol.number} ADVISORY DOMAIN
                      </span>
                      <h3 className="text-2xl font-extrabold font-display text-[#0F3161] dark:text-white leading-tight">
                        {sol.title}
                      </h3>
                    </div>

                    <button
                      onClick={onOpenAudit}
                      className="w-full py-3.5 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-teal-600/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Audit {sol.title.split(' ')[0]} Scope</span>
                      <ArrowRight className="w-4 h-4 text-[#FFB340]" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {industriesData.map((ind) => {
            const Icon = sectorIconMap[ind.icon] || Building2;

            return (
              <motion.div
                key={ind.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedSector(ind)}
                className="glass-panel p-8 rounded-3xl cursor-pointer transition-all duration-300 group relative overflow-hidden border border-slate-200 dark:border-white/10 hover:border-[#008579] dark:hover:border-[#46A095] shadow-xl hover:shadow-2xl flex flex-col justify-between bg-white dark:bg-[#0F2342]"
              >
                {/* Multi-Color Gradient Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008579] via-[#00437E] to-[#FFB340]" />

                <div className="space-y-5 pt-2">
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F3161] to-[#008579] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#FFB340]" />
                    </div>

                    <span className="text-xs font-mono font-extrabold text-[#008579] dark:text-[#46A095] bg-teal-50 dark:bg-teal-500/10 px-3.5 py-1.5 rounded-xl border border-teal-200 dark:border-teal-500/30 uppercase tracking-wider">
                      SECTOR {ind.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Subheading */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl md:text-2xl font-extrabold font-display text-white group-hover:text-[#55D9CC] transition-colors leading-snug">
                      {ind.name || ind.title}
                    </h3>
                    <p className="text-xs font-sans font-semibold uppercase tracking-wider text-[#55D9CC]">
                      {ind.riskCategory || ind.kri}
                    </p>
                  </div>

                  {/* Description Info Copy */}
                  <p className="text-sm md:text-base text-[#CBD5E1] font-normal leading-relaxed">
                    {ind.description || ind.desc}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-sans font-extrabold text-[#008579] dark:text-[#46A095] uppercase tracking-wider group-hover:underline">
                    Click to Inspect Scope
                  </span>
                  <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-[#008579] dark:text-[#46A095] group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#FFB340]" />
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
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#122B46] to-[#0F2238] border border-[rgba(85,217,204,0.35)] hover:border-[#55D9CC] transition-all flex items-start space-x-4 shadow-xl group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[rgba(85,217,204,0.15)] border border-[rgba(85,217,204,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-[#FFB340]" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold font-display text-white group-hover:text-[#55D9CC] transition-colors">
                  {found.name}
                </h3>
                <p className="text-xs text-[#CBD5E1] mt-1 font-medium leading-relaxed">
                  {found.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* ==========================================
          12. CONTACT ADVISORY TEAM & INQUIRY FORM
         ========================================== */}
      <section id="contact" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-[rgba(72,214,201,0.18)] space-y-6 bg-[#0A1725] text-white shadow-2xl">
              <div className="space-y-2">
                <span className="text-xs font-mono font-extrabold text-[#55D9CC] uppercase tracking-widest block">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl font-extrabold font-display text-white">
                  Connect with Our Advisory Team
                </h2>
              </div>

              <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                Partner with Srajai Tech to evaluate, strengthen, and optimize your organization's risk profile.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#55D9CC] font-extrabold block tracking-wider">
                      DIRECT EMAIL
                    </span>
                    <a
                      href="mailto:srajaitech@gmail.com"
                      className="text-[#55D9CC] hover:text-[#38BDF8] font-mono text-base font-extrabold transition-colors"
                    >
                      srajaitech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#55D9CC] font-extrabold block tracking-wider">
                      PHONE & WHATSAPP
                    </span>
                    <a
                      href="tel:+919182119045"
                      className="text-[#55D9CC] hover:text-[#38BDF8] font-mono text-base font-extrabold transition-colors block"
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
                  <div className="w-10 h-10 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#55D9CC] font-extrabold block tracking-wider">
                      HEADQUARTERS
                    </span>
                    <p className="text-white text-base font-extrabold">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#55D9CC] font-extrabold block tracking-wider">
                      ADVISORY OPERATING HOURS
                    </span>
                    <p className="text-white text-base font-extrabold">
                      Monday – Friday: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#06152B] border border-dashed border-[rgba(72,214,201,0.25)] text-xs text-[#CBD5E1] leading-relaxed font-mono">
                <span className="text-[#55D9CC] font-bold">NOTE:</span> Email reflects official client documentation.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-[rgba(72,214,201,0.18)] bg-[#0A1725] text-white shadow-2xl">
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
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-teal-600/30 hover:brightness-110 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Request a Confidential Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-teal-50 dark:bg-teal-500/20 border border-[#008579] dark:border-[#46A095] rounded-full flex items-center justify-center mx-auto text-[#008579] dark:text-[#46A095]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#0F3161] dark:text-white">
                    Consultation Inquiry Sent
                  </h3>
                  <p className="text-slate-700 dark:text-gray-200 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#008579] dark:text-[#46A095] font-semibold">{contactData.fullName}</span>. Our advisory board will review your requirements for <span className="text-[#0F3161] dark:text-white font-semibold">{contactData.companyName}</span> and respond to <span className="text-[#008579] dark:text-[#46A095] font-mono">{contactData.corporateEmail}</span> promptly.
                  </p>
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
                    className="px-6 py-2.5 rounded-lg bg-[#0F3161] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#06152B] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
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
