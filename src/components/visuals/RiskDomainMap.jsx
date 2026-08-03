import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Activity, TrendingUp, Users, ShieldAlert, FileCheck, Search, ArrowRight } from 'lucide-react';
import { solutionsData } from '../../data/solutionsData';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Lock: Lock,
  Activity: Activity,
  TrendingUp: TrendingUp,
  FileCheck: FileCheck,
  Users: Users,
  Search: Search
};

export default function RiskDomainMap({ onSelectDomain }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {solutionsData.map((practice) => {
        const IconComponent = iconMap[practice.icon] || ShieldAlert;

        return (
          <motion.div
            key={practice.id}
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={() => onSelectDomain && onSelectDomain(practice)}
            className="p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden group border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-xl flex flex-col justify-between bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white"
          >
            <div className="space-y-3">
              {/* Practice Topic Header Banner */}
              <div className="relative h-28 sm:h-32 w-full rounded-lg overflow-hidden bg-black/40 border border-white/10 shadow-md">
                {practice.image ? (
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <IconComponent className="w-8 h-8 text-[#38BDF8]" />
                  </div>
                )}
                <div className="absolute top-2 left-2 backdrop-blur-md px-2 py-0.5 rounded border border-[#38BDF8]/30 bg-[#38BDF8]/15 text-[9px] font-mono font-extrabold text-[#38BDF8] shadow-sm">
                  MODULE {practice.number}
                </div>
              </div>

              {/* Title & Subheading */}
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-extrabold font-display leading-snug text-[#38BDF8] group-hover:text-[#55D9CC] transition-colors">
                  {practice.title}
                </h3>
                <p className="text-[11px] text-[#E2E8F0] font-medium leading-snug line-clamp-2">
                  {practice.shortDesc}
                </p>
              </div>
            </div>

            {/* Compact Action Footer */}
            <div className="pt-2.5 mt-2.5 border-t border-white/15 flex items-center justify-between">
              <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-[#38BDF8] group-hover:underline">
                Inspect Practice
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
