import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Lock, ArrowRight, FileCheck, Layers, Quote, UserCheck, CheckCircle2, Landmark } from 'lucide-react';
import ValueCards from '../components/visuals/ValueCards';
import { founderData } from '../data/founderData';

export default function AboutUs({ onOpenAudit }) {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-[#008579] dark:text-[#46A095] text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm font-sans">
            <ShieldCheck className="w-4 h-4 text-[#008579] dark:text-[#46A095]" />
            <span>ABOUT SRAJAI TECH</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-[#0F3161] dark:text-white leading-tight">
            Building Resilient Enterprises <br />
            <span className="text-gradient-emerald">Through Strategic Risk</span>
          </h1>

          <p className="text-[#06182D] text-lg md:text-xl leading-relaxed font-semibold">
            Srajai Tech provides integrated risk advisory capabilities spanning enterprise, cyber, operational, financial, legal, third-party, and fraud risk. We align corporate governance with quantitative risk appetite to safeguard capital and enable sustainable growth.
          </p>
        </div>
      </section>

      {/* 3-Step Methodology Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs md:text-sm font-bold font-sans text-[#008579] dark:text-[#46A095] uppercase tracking-widest px-4 py-1.5 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">
            OUR ADVISORY APPROACH
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0F3161] dark:text-white">
            The 3-Step Resilience Methodology
          </h2>
          <p className="text-[#06182D] text-base md:text-lg font-semibold">
            Structured engagement workflow from diagnostic evaluation to continuous governance optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all space-y-5 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-extrabold font-mono text-[#38BDF8]">
                01
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                <Target className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-[#38BDF8]">
              Diagnose
            </h3>

            <p className="text-xs md:text-sm font-extrabold font-mono uppercase text-[#38BDF8] tracking-wider">
              Understand Organizational Exposure
            </p>

            <p className="text-sm md:text-base text-[#E2E8F0] leading-relaxed font-medium">
              We conduct thorough diagnostic audits across corporate capital, data infrastructure, vendor dependencies, and legal obligations to pinpoint critical single-point vulnerabilities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all space-y-5 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-extrabold font-mono text-[#38BDF8]">
                02
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                <Layers className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-[#38BDF8]">
              Design
            </h3>

            <p className="text-xs md:text-sm font-extrabold font-mono uppercase text-[#38BDF8] tracking-wider">
              Build Resilience Architecture
            </p>

            <p className="text-sm md:text-base text-[#E2E8F0] leading-relaxed font-medium">
              We formulate tailored frameworks, internal controls, Key Risk Indicators (KRIs), RCSA protocols, and Business Continuity Plans (BCP) aligned with ISO 31000 and COSO standards.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all space-y-5 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-extrabold font-mono text-[#38BDF8]">
                03
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                <Eye className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-[#38BDF8]">
              Strengthen
            </h3>

            <p className="text-xs md:text-sm font-extrabold font-mono uppercase text-[#38BDF8] tracking-wider">
              Continuous Governance & Telemetry
            </p>

            <p className="text-sm md:text-base text-[#E2E8F0] leading-relaxed font-medium">
              We assist boards and CXOs in continuous telemetry monitoring, board dashboard reporting, whistleblower integrity testing, and iterative risk appetite refinement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER & LEADERSHIP SECTION INTEGRATED INTO ABOUT US PAGE */}
      <section id="founder-profile" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl text-white">
          {/* LEFT SIDE: Big Executive Portrait Photo Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-[rgba(72,214,201,0.35)] hover:border-[#55D9CC] transition-all group">
              <img
                src="/images/founder.png"
                alt={founderData.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06152B] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#06152B]/85 backdrop-blur-md border border-[rgba(72,214,201,0.3)] text-left space-y-1 shadow-xl">
                <h4 className="text-lg font-extrabold text-white font-display tracking-tight">{founderData.name}</h4>
                <p className="text-xs font-mono font-bold text-[#55D9CC] uppercase tracking-wider">{founderData.designation}</p>
                <div className="flex items-center space-x-1.5 text-xs text-slate-300 pt-0.5 font-medium">
                  <UserCheck className="w-4 h-4 text-[#55D9CC]" />
                  <span>Srajai Tech Founder & ERM Specialist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Quote & Expertise Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs md:text-sm font-bold font-sans text-[#008579] dark:text-[#46A095] uppercase tracking-widest">
                FOUNDER & PRINCIPAL LEADERSHIP
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#0F3161] dark:text-white">
                {founderData.name}
              </h2>
            </div>

            <p className="text-[#CBD5E1] text-[10px] sm:text-[11px] leading-normal font-normal">
              {founderData.bio}
            </p>

            {/* Quote Block */}
            <div className="p-7 sm:p-8 rounded-2xl border-l-4 border-l-[#008579] dark:border-l-[#46A095] bg-slate-100 dark:bg-[#0B132B] border border-slate-200 dark:border-teal-500/30 space-y-4 shadow-md">
              <Quote className="w-9 h-9 text-[#008579] dark:text-[#46A095]" />
              <p className="text-lg md:text-xl font-bold text-[#0F3161] dark:text-white font-heading italic leading-relaxed">
                "{founderData.quote}"
              </p>
              <p className="text-sm font-sans text-[#008579] dark:text-[#FFB340] font-extrabold tracking-wide">
                — Guddeti Sanjay Raj, Founder & Principal Risk Strategist
              </p>
            </div>

            {/* 4-Card Expertise Grid - Distinct Multi-Color Executive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {founderData.expertise.map((exp, idx) => {
                const cardThemes = [
                  {
                    bg: "bg-gradient-to-br from-emerald-50 via-teal-50/90 to-white border-2 border-emerald-500/50 hover:border-emerald-600",
                    bar: "bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600",
                    titleColor: "text-emerald-950",
                    icon: <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  },
                  {
                    bg: "bg-gradient-to-br from-sky-50 via-blue-50/90 to-white border-2 border-sky-500/50 hover:border-sky-600",
                    bar: "bg-gradient-to-r from-sky-500 via-blue-400 to-cyan-500",
                    titleColor: "text-sky-950",
                    icon: <Landmark className="w-4 h-4 text-sky-600 shrink-0" />
                  },
                  {
                    bg: "bg-gradient-to-br from-amber-50 via-yellow-50/90 to-white border-2 border-amber-500/50 hover:border-amber-600",
                    bar: "bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600",
                    titleColor: "text-amber-950",
                    icon: <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  },
                  {
                    bg: "bg-gradient-to-br from-indigo-50 via-purple-50/90 to-white border-2 border-indigo-500/50 hover:border-indigo-600",
                    bar: "bg-gradient-to-r from-indigo-500 via-purple-400 to-violet-600",
                    titleColor: "text-indigo-950",
                    icon: <Target className="w-4 h-4 text-indigo-600 shrink-0" />
                  }
                ];
                const theme = cardThemes[idx % cardThemes.length];
                return (
                  <div key={idx} className={`relative p-5 rounded-2xl ${theme.bg} text-slate-900 space-y-1.5 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group`}>
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.bar}`} />
                    <h4 className={`text-base font-extrabold ${theme.titleColor} font-display flex items-center space-x-2 pt-1`}>
                      {theme.icon}
                      <span>{exp.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAudit}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#008579] to-[#0F3161] text-white text-xs md:text-sm font-extrabold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center space-x-2"
              >
                <span>Schedule Advisory Session with Sanjay Raj</span>
                <ArrowRight className="w-4 h-4 text-[#FFB340]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Risk Telemetry Display Area */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-teal-500/30 space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div>
              <span className="text-xs md:text-sm font-bold font-sans text-[#008579] dark:text-[#46A095] uppercase tracking-widest block">
                FRAMEWORK ARCHITECTURE INTEGRITY
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-[#0F3161] dark:text-white mt-1">
                Integrated Advisory Domains & Governance Standards
              </h3>
            </div>

            <div className="flex items-center space-x-2 text-xs md:text-sm font-bold font-sans text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-300 dark:border-emerald-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
              <span>SYSTEM ADVISORY READY</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-teal-500/30 space-y-2 shadow-md">
              <FileCheck className="w-8 h-8 text-[#008579] dark:text-[#46A095] mx-auto" />
              <h4 className="text-lg font-extrabold text-[#0F3161] dark:text-white font-display">ISO 31000 & COSO</h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-gray-300 font-medium">Standard Alignment</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-teal-500/30 space-y-2 shadow-md">
              <Lock className="w-8 h-8 text-[#008579] dark:text-[#46A095] mx-auto" />
              <h4 className="text-lg font-extrabold text-[#0F3161] dark:text-white font-display">ISMS & Cyber</h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-gray-300 font-medium">Governance Security</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-teal-500/30 space-y-2 shadow-md">
              <ShieldCheck className="w-8 h-8 text-[#008579] dark:text-[#46A095] mx-auto" />
              <h4 className="text-lg font-extrabold text-[#0F3161] dark:text-white font-display">FIDIC & CPWD</h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-gray-300 font-medium">Legal Review Mastery</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-teal-500/30 space-y-2 shadow-md">
              <Target className="w-8 h-8 text-[#008579] dark:text-[#46A095] mx-auto" />
              <h4 className="text-lg font-extrabold text-[#0F3161] dark:text-white font-display">BCP / DR & KRIs</h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-gray-300 font-medium">Operational Continuity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl md:text-4xl font-extrabold font-display text-[#0F3161] dark:text-white text-center">
          Core Pillars of Enterprise Value Preservation
        </h2>
        <ValueCards />
      </section>
    </div>
  );
}
