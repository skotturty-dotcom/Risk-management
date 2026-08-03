import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Landmark, ShieldCheck, Server, Cloud, HeartPulse, Pill, Factory, ShoppingCart,
  Wifi, Zap, Truck, Car, Building2, Scale, GraduationCap, Plane, Film, Sprout,
  ArrowRight, Search, Shield
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import SectorModal from '../components/SectorModal';

const iconMap = {
  Landmark, ShieldCheck, Server, Cloud, HeartPulse, Pill, Factory, ShoppingCart,
  Wifi, Zap, Truck, Car, Building2, Scale, GraduationCap, Plane, Film, Sprout
};

export default function Industries({ onOpenAudit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectorModal, setSelectedSectorModal] = useState(null);

  const filteredIndustries = industriesData.filter(ind =>
    ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ind.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ind.kri.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-[#008579] dark:text-[#46A095] text-xs font-bold uppercase tracking-wider font-sans">
              <Shield className="w-3.5 h-3.5 text-[#008579] dark:text-[#46A095]" />
              <span>18 ENTERPRISE SECTOR PRACTICE DOMAINS</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold font-display text-[#0F3161] dark:text-white leading-tight">
              Specialized Industry Risk & <br />
              <span className="text-gradient-emerald">Compliance Frameworks</span>
            </h1>

            <p className="text-[#06182D] text-base md:text-lg font-semibold leading-relaxed">
              Diagnostic risk profiling, statutory compliance audits, and custom Key Risk Indicators (KRIs) tailored across 18 major global sectors.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 18 sectors..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-[#06152B] border border-slate-300 dark:border-white/15 text-xs text-slate-900 dark:text-white placeholder-slate-400 font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] shadow-sm transition-all"
            />
          </div>
        </div>
      </section>

      {/* 18 Clean Compact Sector Cards Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Landmark;

            return (
              <motion.div
                key={ind.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedSectorModal(ind)}
                className="glass-panel p-6 rounded-2xl cursor-pointer transition-all duration-200 group relative overflow-hidden border border-slate-200 dark:border-white/10 hover:border-[#008579] dark:hover:border-[#46A095] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 flex items-center justify-center text-[#008579] dark:text-[#46A095]">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#55D9CC] bg-[rgba(40,199,183,0.10)] px-2.5 py-0.5 rounded border border-[rgba(72,214,201,0.25)] uppercase tracking-wider">
                      SECTOR 0{ind.id}
                    </span>
                  </div>

                  {/* Title & Subheading */}
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-bold font-display text-white group-hover:text-[#55D9CC] transition-colors leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs font-sans font-semibold text-[#55D9CC] tracking-wider uppercase">
                      {ind.kri}
                    </p>
                  </div>

                  {/* Description Info Copy */}
                  <p className="text-xs md:text-sm text-[#CBD5E1] font-normal leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B8C4CF] group-hover:text-[#55D9CC]">
                    Inspect Scope
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#FFB340] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sector Scope Diagnostic Modal */}
      {selectedSectorModal && (
        <SectorModal
          sector={selectedSectorModal}
          onClose={() => setSelectedSectorModal(null)}
          onOpenAudit={onOpenAudit}
        />
      )}
    </div>
  );
}
