import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Briefcase, Target, Quote, Mail, MapPin, ArrowRight, UserCheck } from 'lucide-react';
import { founderData } from '../data/founderData';

export default function Founder({ onOpenAudit }) {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-[#008579] dark:text-[#46A095] text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm font-sans">
            <ShieldCheck className="w-4 h-4 text-[#008579] dark:text-[#46A095]" />
            <span>FOUNDER & PRINCIPAL LEADERSHIP</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-[#0F3161] dark:text-white leading-tight">
            Visionary Leadership in <br />
            <span className="text-gradient-emerald">Enterprise Risk Strategy</span>
          </h1>

          <p className="text-[#06182D] text-lg md:text-xl leading-relaxed font-semibold">
            Dedicated to transforming traditional risk management from a reactive defense mechanism into an intelligent, value-generating growth engine.
          </p>
        </div>
      </section>

      {/* Main Founder Profile & Expertise Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl text-white">
          {/* Left Column: Clean Executive Emblem Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white text-slate-900 border border-slate-200 hover:border-[#008579] flex flex-col items-center justify-center p-6 sm:p-8 text-center shadow-2xl overflow-hidden group space-y-3 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl p-1 bg-gradient-to-tr from-[#008579] via-[#38BDF8] to-[#FFB340] shadow-2xl group-hover:scale-[1.01] transition-transform duration-300 shrink-0 mt-1">
                <div className="w-full h-full rounded-xl border-2 border-white overflow-hidden bg-slate-100">
                  <img
                    src="/images/founder.png"
                    alt={founderData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

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
                  <UserCheck className="w-3 h-3 text-[#008579]" />
                  <span>SRAJAI TECH FOUNDER</span>
                </p>
                <p className="text-[10px] text-slate-500 font-medium">Enterprise Risk Strategy & ERM Specialist</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Quote & Expertise Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs md:text-sm font-bold font-sans text-[#008579] dark:text-[#46A095] uppercase tracking-widest">
                FOUNDER & PRINCIPAL RISK STRATEGIST
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
    </div>
  );
}
