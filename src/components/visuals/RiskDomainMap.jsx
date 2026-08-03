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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {solutionsData.map((practice) => {
        const IconComponent = iconMap[practice.icon] || ShieldAlert;

        return (
          <motion.div
            key={practice.id}
            whileHover={{ y: -6, scale: 1.02 }}
            onClick={() => onSelectDomain && onSelectDomain(practice)}
            className="p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden group border border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-2xl flex flex-col justify-between bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white"
          >
            <div className="space-y-4">
              {/* Practice Topic Header Banner */}
              <div className="relative h-36 w-full rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-md">
                {practice.image ? (
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <IconComponent className="w-10 h-10 text-[#38BDF8]" />
                  </div>
                )}
                <div className="absolute top-2.5 left-2.5 backdrop-blur-md px-2.5 py-0.5 rounded border border-[#38BDF8]/30 bg-[#38BDF8]/15 text-[10px] font-mono font-extrabold text-[#38BDF8] shadow-sm">
                  MODULE {practice.number}
                </div>
              </div>

              {/* Title & Subheading */}
              <div className="space-y-1.5">
                <h3 className="text-lg md:text-xl font-extrabold font-display leading-snug text-[#38BDF8] group-hover:text-[#55D9CC] transition-colors">
                  {practice.title}
                </h3>
                <p className="text-xs text-[#E2E8F0] font-medium leading-relaxed">
                  {practice.shortDesc}
                </p>
              </div>
            </div>

            {/* Simple Action Footer */}
            <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#38BDF8] group-hover:underline">
                Inspect Practice
              </span>
              <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1.5 transition-transform" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
