import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Lock, ArrowRight, FileCheck, Layers, Quote, UserCheck } from 'lucide-react';
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
          {/* Left Column: Clean Executive Emblem Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-[290px] sm:max-w-[330px] relative rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-[#008579] flex flex-col items-center justify-center p-3.5 sm:p-4 text-center shadow-xl overflow-hidden group space-y-2.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />
              
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-[#008579] via-[#38BDF8] to-[#FFB340] shadow-md group-hover:scale-[1.02] transition-transform duration-300 shrink-0 mt-1">
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-slate-100">
                  <img
                    src="/images/founder.png"
                    alt={founderData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold font-display text-[#06182D] tracking-tight uppercase">
                  {founderData.name}
                </h3>
                <span className="inline-block text-[9px] sm:text-[10px] font-mono font-bold text-[#008579] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-sm">
                  {founderData.designation}
                </span>
              </div>

              <div className="w-full pt-2 border-t border-slate-100 font-sans space-y-0.5">
                <p className="flex items-center justify-center space-x-1 text-[9px] sm:text-[10px] font-mono font-extrabold text-[#06182D] tracking-wider uppercase">
                  <UserCheck className="w-3 h-3 text-[#008579]" />
                  <span>SRAJAI TECH FOUNDER</span>
                </p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Enterprise Risk Strategy & ERM Specialist</p>
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

            <p className="text-slate-800 dark:text-slate-100 text-base md:text-xl leading-relaxed font-semibold">
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

            {/* 4-Card Expertise Grid - Light Grey Cards with Dark Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {founderData.expertise.map((exp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-100 border border-slate-300 hover:border-[#008579] space-y-2 shadow-md transition-all">
                  <h4 className="text-base md:text-lg font-extrabold text-[#06182D] font-display">
                    {exp.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
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
