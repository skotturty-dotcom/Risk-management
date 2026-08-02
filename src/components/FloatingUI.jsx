import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Lock, Eye, CheckCircle2, Sliders } from 'lucide-react';

export default function FloatingUI() {
  const badges = [
    {
      label: 'RISK STATUS: OPTIMIZED',
      icon: ShieldCheck,
      color: '#5BC0EB',
      position: 'top-[15%] left-4 lg:left-10',
      delay: 0
    },
    {
      label: 'CONTROL MONITOR: ACTIVE',
      icon: Activity,
      color: '#10B981',
      position: 'top-[35%] right-4 lg:right-10',
      delay: 1.5
    },
    {
      label: 'THREAT ANALYSIS: LOW',
      icon: Lock,
      color: '#2F80ED',
      position: 'top-[55%] left-4 lg:left-8',
      delay: 3
    },
    {
      label: 'COMPLIANCE: VERIFIED',
      icon: CheckCircle2,
      color: '#8B5CF6',
      position: 'top-[75%] right-4 lg:right-12',
      delay: 4.5
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden xl:block">
      {badges.map((b, i) => {
        const Icon = b.icon;
        return (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: b.delay
            }}
            className={`absolute ${b.position} glass-panel px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-white flex items-center space-x-2 shadow-xl bg-[#0A1220]/80 backdrop-blur-md opacity-70 hover:opacity-100 transition-opacity`}
          >
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: b.color }}
            />
            <Icon className="w-3.5 h-3.5" style={{ color: b.color }} />
            <span className="tracking-wider uppercase font-semibold">{b.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
