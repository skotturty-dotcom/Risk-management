import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Activity, TrendingUp, Scale, Users, ShieldAlert, FileCheck, Search, ArrowRight } from 'lucide-react';
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
            whileHover={{ y: -4 }}
            onClick={() => onSelectDomain && onSelectDomain(practice)}
            className="glass-panel p-6 rounded-2xl cursor-pointer transition-all duration-200 relative overflow-hidden group border border-[rgba(72,214,201,0.18)] hover:border-[#55D9CC] shadow-lg bg-[#0A1725] text-white flex flex-col justify-between"
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
                <h3 className="text-lg md:text-xl font-extrabold font-display text-[#55D9CC] group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {practice.title}
                </h3>
                <p className="text-xs text-[#CBD5E1] font-medium leading-relaxed">
                  {practice.shortDesc}
                </p>
              </div>
            </div>

            {/* Simple Action Footer */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#55D9CC] uppercase tracking-wider group-hover:underline">
                Inspect Practice
              </span>
              <ArrowRight className="w-4 h-4 text-[#FFB340] group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
