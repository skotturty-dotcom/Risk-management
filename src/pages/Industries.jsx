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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredIndustries.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Landmark;

            return (
              <motion.div
                key={ind.id}
                whileHover={{ y: -3, scale: 1.01 }}
                onClick={() => setSelectedSectorModal(ind)}
                className="p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 group relative overflow-hidden border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-lg flex flex-col justify-between bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white"
              >
                <div className="space-y-2">
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-md bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>

                    <span className="text-[8.5px] font-mono font-extrabold text-[#38BDF8] bg-[#38BDF8]/15 px-2 py-0.5 rounded border border-[#38BDF8]/30 uppercase tracking-wider shadow-sm">
                      SECTOR {ind.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Subheading */}
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-base font-extrabold font-display text-[#38BDF8] group-hover:text-[#55D9CC] transition-colors leading-tight">
                      {ind.title}
                    </h3>
                    <p className="text-[10px] font-mono font-extrabold text-[#38BDF8] tracking-wider uppercase">
                      {ind.kri}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[10.5px] text-[#E2E8F0] font-medium leading-snug line-clamp-2">
                    {ind.desc}
                  </p>
                </div>

                {/* Compact Action Footer */}
                <div className="pt-2 mt-2 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider group-hover:underline">
                    Inspect Scope
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
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
