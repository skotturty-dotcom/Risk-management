import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Activity, TrendingUp, Scale, Users, ShieldAlert, FileCheck, Search, ArrowRight, CheckCircle2, FileText, Download } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import ResolverResourceHub from '../components/visuals/ResolverResourceHub';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Lock: Lock,
  Activity: Activity,
  TrendingUp: TrendingUp,
  FileCheck: FileCheck,
  Users: Users,
  Search: Search
};

export default function Solutions({ onOpenAudit }) {
  const [selectedPractice, setSelectedPractice] = useState(solutionsData[0]);

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-[#008579] dark:text-[#46A095] text-xs font-bold uppercase tracking-wider font-sans">
            <Shield className="w-3.5 h-3.5 text-[#008579] dark:text-[#46A095]" />
            <span>7 ENTERPRISE ADVISORY DOMAINS</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold font-display text-[#0F3161] dark:text-white leading-tight">
            Integrated Risk Practices & <br />
            <span className="text-gradient-emerald">Quantitative Frameworks</span>
          </h1>

          <p className="text-slate-700 dark:text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
            Srajai Tech operates across seven core risk disciplines, delivering diagnostic reviews, control design, KRI architecture, and continuous board telemetry.
          </p>
        </div>
      </section>

      {/* Clean Compact Practice Cards Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((practice) => {
            const IconComponent = iconMap[practice.icon] || ShieldAlert;
            const isSelected = selectedPractice.id === practice.id;

            return (
              <motion.div
                key={practice.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPractice(practice)}
                className={`glass-panel p-6 rounded-2xl cursor-pointer transition-all duration-200 relative overflow-hidden group border shadow-sm flex flex-col justify-between bg-white dark:bg-[#0F2342] ${
                  isSelected
                    ? 'border-2 border-[#008579] dark:border-[#46A095] ring-2 ring-[#008579]/20 shadow-md'
                    : 'border-slate-200 dark:border-white/10 hover:border-[#008579] dark:hover:border-[#46A095]'
                }`}
              >
                <div className="space-y-4">
                  {/* Practice Topic Header Banner */}
                  <div className="relative h-36 w-full rounded-xl overflow-hidden bg-[#06152B] border border-slate-700/40 shadow-sm">
                    {practice.image ? (
                      <img
                        src={practice.image}
                        alt={practice.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0F3161] to-[#06152B] flex items-center justify-center text-teal-400">
                        <IconComponent className="w-10 h-10" />
                      </div>
                    )}
                    <div className="absolute top-2.5 left-2.5 bg-[#06152B]/85 backdrop-blur-md px-2.5 py-0.5 rounded border border-teal-500/30 text-[10px] font-mono font-bold text-[#FFB340]">
                      MODULE {practice.number}
                    </div>
                  </div>

                  {/* Title & Subheading */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg md:text-xl font-bold font-display text-[#0F3161] dark:text-white group-hover:text-[#008579] dark:group-hover:text-[#46A095] transition-colors leading-snug">
                      {practice.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-gray-300 font-medium leading-relaxed">
                      {practice.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Simple Action Footer */}
                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#008579] dark:text-[#46A095] uppercase">
                    Inspect Practice
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#FFB340] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Detailed Domain Inspector */}
      {selectedPractice && (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-10 rounded-2xl border-2 border-[#008579] dark:border-[#46A095] space-y-6 shadow-xl bg-white dark:bg-[#0F2342]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-widest px-3 py-0.5 rounded bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30">
                  ACTIVE PRACTICE DEPLOYMENT SCOPE
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#0F3161] dark:text-white">
                  {selectedPractice.title}
                </h2>
              </div>

              <button
                onClick={onOpenAudit}
                className="px-5 py-2.5 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center space-x-2 shrink-0 transition-all"
              >
                <span>Request {selectedPractice.title.split(' ')[0]} Audit</span>
                <ArrowRight className="w-4 h-4 text-[#FFB340]" />
              </button>
            </div>

            <p className="text-slate-700 dark:text-gray-200 text-base md:text-lg font-medium leading-relaxed">
              {selectedPractice.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {selectedPractice.features?.map((feat, fIdx) => (
                <div key={fIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-200 dark:border-white/10 space-y-1 shadow-sm">
                  <div className="flex items-center space-x-2 text-[#008579] dark:text-[#46A095]">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB340]" />
                    <span className="text-xs font-mono font-bold uppercase">Control Core 0{fIdx + 1}</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-800 dark:text-gray-100 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resolver Resource Hub Component */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResolverResourceHub onOpenAudit={onOpenAudit} />
      </section>
    </div>
  );
}
