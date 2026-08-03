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

          <p className="text-slate-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
            Dedicated to transforming traditional risk management from a reactive defense mechanism into an intelligent, value-generating growth engine.
          </p>
        </div>
      </section>

      {/* Main Founder Profile & Expertise Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-teal-500/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xl">
          {/* Left Column: Clean Executive Emblem Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#0F3161] via-[#00437E] to-[#06152B] text-white border-2 border-[#008579] flex flex-col items-center justify-center p-6 sm:p-8 text-center shadow-2xl overflow-hidden group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-[#FFB340] dark:border-[#55D9CC] overflow-hidden shadow-2xl mb-5 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <img
                  src="/images/founder.png"
                  alt={founderData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-extrabold font-display text-white">
                {founderData.name}
              </h3>
              <p className="text-xs font-sans text-[#FFB340] uppercase tracking-wider mt-2 font-extrabold px-3 py-1 rounded bg-white/10 border border-white/20">
                {founderData.designation}
              </p>
              <div className="mt-6 pt-5 border-t border-white/10 text-xs font-sans text-teal-200 font-semibold space-y-1 w-full">
                <p className="flex items-center justify-center space-x-1.5">
                  <UserCheck className="w-4 h-4 text-[#FFB340]" />
                  <span>SRAJAI TECH FOUNDER</span>
                </p>
                <p className="text-[11px] text-slate-300">Enterprise Risk Strategy & ERM Specialist</p>
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

            {/* 4-Card Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {founderData.expertise.map((exp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-teal-500/30 space-y-2 shadow-md">
                  <h4 className="text-base md:text-lg font-extrabold text-[#0F3161] dark:text-white font-display">
                    {exp.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
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
