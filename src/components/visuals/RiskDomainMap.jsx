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

const domainCardThemes = [
  {
    bg: 'bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33]',
    border: 'border-[#38BDF8]/40 hover:border-[#38BDF8]',
    title: 'text-[#38BDF8]',
    badgeBg: 'bg-[#38BDF8]/15 border-[#38BDF8]/30 text-[#38BDF8]',
    footerText: 'text-[#38BDF8]',
    arrowColor: 'text-[#38BDF8]'
  },
  {
    bg: 'bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22]',
    border: 'border-[#34D399]/40 hover:border-[#34D399]',
    title: 'text-[#34D399]',
    badgeBg: 'bg-[#34D399]/15 border-[#34D399]/30 text-[#34D399]',
    footerText: 'text-[#34D399]',
    arrowColor: 'text-[#34D399]'
  },
  {
    bg: 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#0F172A]',
    border: 'border-[#A5B4FC]/40 hover:border-[#A5B4FC]',
    title: 'text-[#A5B4FC]',
    badgeBg: 'bg-[#A5B4FC]/15 border-[#A5B4FC]/30 text-[#A5B4FC]',
    footerText: 'text-[#A5B4FC]',
    arrowColor: 'text-[#A5B4FC]'
  },
  {
    bg: 'bg-gradient-to-br from-[#451A03] via-[#78350F] to-[#290F02]',
    border: 'border-[#FBBF24]/40 hover:border-[#FBBF24]',
    title: 'text-[#FBBF24]',
    badgeBg: 'bg-[#FBBF24]/15 border-[#FBBF24]/30 text-[#FBBF24]',
    footerText: 'text-[#FBBF24]',
    arrowColor: 'text-[#FBBF24]'
  },
  {
    bg: 'bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#0F172A]',
    border: 'border-[#CBD5E1]/40 hover:border-[#CBD5E1]',
    title: 'text-white',
    badgeBg: 'bg-white/15 border-white/30 text-white',
    footerText: 'text-white',
    arrowColor: 'text-white'
  },
  {
    bg: 'bg-gradient-to-br from-[#134E4A] via-[#0F766E] to-[#042F2C]',
    border: 'border-[#2DD4BF]/40 hover:border-[#2DD4BF]',
    title: 'text-[#2DD4BF]',
    badgeBg: 'bg-[#2DD4BF]/15 border-[#2DD4BF]/30 text-[#2DD4BF]',
    footerText: 'text-[#2DD4BF]',
    arrowColor: 'text-[#2DD4BF]'
  },
  {
    bg: 'bg-gradient-to-br from-[#4C0519] via-[#881337] to-[#2E030F]',
    border: 'border-[#FB7185]/40 hover:border-[#FB7185]',
    title: 'text-[#FB7185]',
    badgeBg: 'bg-[#FB7185]/15 border-[#FB7185]/30 text-[#FB7185]',
    footerText: 'text-[#FB7185]',
    arrowColor: 'text-[#FB7185]'
  }
];

export default function RiskDomainMap({ onSelectDomain }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {solutionsData.map((practice, index) => {
        const IconComponent = iconMap[practice.icon] || ShieldAlert;
        const theme = domainCardThemes[index % domainCardThemes.length];

        return (
          <motion.div
            key={practice.id}
            whileHover={{ y: -6, scale: 1.02 }}
            onClick={() => onSelectDomain && onSelectDomain(practice)}
            className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden group border shadow-xl flex flex-col justify-between ${theme.bg} ${theme.border} text-white`}
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
                    <IconComponent className="w-10 h-10" />
                  </div>
                )}
                <div className={`absolute top-2.5 left-2.5 backdrop-blur-md px-2.5 py-0.5 rounded border text-[10px] font-mono font-extrabold shadow-sm ${theme.badgeBg}`}>
                  MODULE {practice.number}
                </div>
              </div>

              {/* Title & Subheading */}
              <div className="space-y-1.5">
                <h3 className={`text-lg md:text-xl font-extrabold font-display leading-snug transition-colors ${theme.title}`}>
                  {practice.title}
                </h3>
                <p className="text-xs text-[#E2E8F0] font-medium leading-relaxed">
                  {practice.shortDesc}
                </p>
              </div>
            </div>

            {/* Simple Action Footer */}
            <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between">
              <span className={`text-xs font-mono font-extrabold uppercase tracking-wider group-hover:underline ${theme.footerText}`}>
                Inspect Practice
              </span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1.5 transition-transform ${theme.arrowColor}`} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
