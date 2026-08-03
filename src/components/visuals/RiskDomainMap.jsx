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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
      {solutionsData.map((practice) => {
        const IconComponent = iconMap[practice.icon] || ShieldAlert;

        return (
          <motion.div
            key={practice.id}
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={() => onSelectDomain && onSelectDomain(practice)}
            className="p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden group border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-lg flex flex-col justify-between bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white"
          >
            <div className="space-y-2.5">
              {/* Practice Topic Header Banner */}
              <div className="relative h-24 sm:h-28 w-full rounded-lg overflow-hidden bg-black/40 border border-white/10 shadow-md">
                {practice.image ? (
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <IconComponent className="w-7 h-7 text-[#38BDF8]" />
                  </div>
                )}
                <div className="absolute top-1.5 left-1.5 backdrop-blur-md px-2 py-0.5 rounded border border-[#38BDF8]/30 bg-[#38BDF8]/15 text-[8.5px] font-mono font-extrabold text-[#38BDF8] shadow-sm">
                  MODULE {practice.number}
                </div>
              </div>

              {/* Title & Subheading */}
              <div className="space-y-0.5">
                <h3 className="text-sm sm:text-base font-extrabold font-display leading-tight text-white group-hover:text-[#55D9CC] transition-colors">
                  {practice.title}
                </h3>
                <p className="text-[10.5px] text-[#E2E8F0] font-medium leading-tight line-clamp-2">
                  {practice.shortDesc}
                </p>
              </div>
            </div>

            {/* Compact Action Footer */}
            <div className="pt-2 mt-2 border-t border-white/15 flex items-center justify-between">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#38BDF8] group-hover:text-white transition-colors">
                Request Audit & Fill Form
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
