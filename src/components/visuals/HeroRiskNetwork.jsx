import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, TrendingUp, Activity, FileCheck, Users, Search, Compass } from 'lucide-react';

export default function HeroRiskNetwork({ onOpenAudit }) {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 'cyber', label: 'CYBER', desc: 'Threat governance & ISMS', icon: Lock, angle: 0, color: '#059669' },
    { id: 'finance', label: 'FINANCE', desc: 'Credit & liquidity hedging', icon: TrendingUp, angle: 51.4, color: '#D97706' },
    { id: 'operations', label: 'OPERATIONS', desc: 'BCP, DR & RCSA controls', icon: Activity, angle: 102.8, color: '#0D9488' },
    { id: 'legal', label: 'LEGAL', desc: 'CPWD/FIDIC contract audits', icon: FileCheck, angle: 154.2, color: '#6366F1' },
    { id: 'tprm', label: 'TPRM', desc: 'Vendor & supply chain audits', icon: Users, angle: 205.6, color: '#047857' },
    { id: 'fraud', label: 'FRAUD', desc: 'Red-flag & whistleblower integrity', icon: Search, angle: 257, color: '#DC2626' },
    { id: 'governance', label: 'GOVERNANCE', desc: 'Board appetite & KRIs', icon: Compass, angle: 308.4, color: '#B45309' }
  ];

  const radius = 140;

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-square flex items-center justify-center">
      {/* Animated Radar Pulse Rings */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-emerald-400/30 dark:border-emerald-500/20"
      />

      <div className="absolute inset-2 rounded-full border border-emerald-400/30 dark:border-emerald-500/20 flex items-center justify-center">
        <div className="absolute inset-10 rounded-full border border-slate-300/50 dark:border-white/5" />
        <div className="absolute inset-20 rounded-full border border-amber-400/30 dark:border-amber-500/15" />
        <div className="absolute inset-32 rounded-full border border-dashed border-emerald-400/40 dark:border-emerald-500/25" />

        {/* Radar Sweep Beam */}
        <div className="absolute w-full h-full rounded-full border border-t-emerald-500 dark:border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent animate-radar opacity-80" />
      </div>

      {/* SVG Connecting Lines & Animated Traveling Data Packets */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 400">
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 200 + radius * Math.cos(rad);
          const y = 200 + radius * Math.sin(rad);
          const isSelected = activeNode === node.id;

          return (
            <g key={node.id}>
              <line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke={isSelected ? node.color : 'rgba(5, 150, 105, 0.35)'}
                strokeWidth={isSelected ? '3' : '1.5'}
                strokeDasharray={isSelected ? 'none' : '4 4'}
              />

              <circle r={isSelected ? '5' : '3.5'} fill={node.color}>
                <animateMotion
                  path={`M 200 200 L ${x} ${y}`}
                  dur={`${2.2 + (node.angle % 2)}s`}
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="3" fill="#55D9CC">
                <animateMotion
                  path={`M ${x} ${y} L 200 200`}
                  dur={`${3 + (node.angle % 3)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Central ENTERPRISE Core Node with Floating Pulse & Hover Effects */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1, rotateZ: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenAudit}
        className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-slate-900 text-white border-2 border-emerald-400 flex flex-col items-center justify-center cursor-pointer shadow-2xl shadow-emerald-500/40 group"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-md pointer-events-none"
        />
        <Shield className="w-7 h-7 sm:w-9 sm:h-9 text-emerald-400 mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300 relative z-10" />
        <span className="text-[9px] sm:text-[11px] font-extrabold tracking-widest uppercase text-white font-mono relative z-10">
          ENTERPRISE
        </span>
        <span className="text-[7px] sm:text-[8px] text-amber-400 font-mono tracking-wider font-bold relative z-10">INTELLIGENCE</span>
      </motion.div>

      {/* 7 Orbiting Satellite Nodes with Creative Floating Animations */}
      {nodes.map((node, idx) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 200 + radius * Math.cos(rad) - 28;
        const y = 200 + radius * Math.sin(rad) - 28;
        const leftPercent = (x / 400) * 100;
        const topPercent = (y / 400) * 100;
        const Icon = node.icon;
        const isSelected = activeNode === node.id;

        return (
          <motion.div
            key={node.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, (idx % 2 === 0 ? -6 : 6), 0]
            }}
            transition={{
              scale: { duration: 0.5 },
              opacity: { duration: 0.5 },
              y: { duration: 3.5 + (idx % 3), repeat: Infinity, ease: 'easeInOut' }
            }}
            whileHover={{ scale: 1.18, zIndex: 30 }}
            onHoverStart={() => setActiveNode(node.id)}
            onHoverEnd={() => setActiveNode(null)}
            className={`absolute z-20 w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md ${
              isSelected
                ? 'border-emerald-500 ring-2 ring-emerald-500/40 shadow-xl shadow-emerald-500/20'
                : 'border-slate-300 dark:border-white/15 hover:border-emerald-500'
            }`}
            style={{
              left: `${leftPercent}%`,
              top: `${topPercent}%`
            }}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" style={{ color: node.color }} />
            <span className="text-[8px] sm:text-[9px] font-mono font-extrabold text-[#06182D] dark:text-white tracking-tight">
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Floating Status Badges */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 left-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5 shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>THREAT LEVEL: LOW</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/30 text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center space-x-1.5 shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
        <span>GOVERNANCE: ACTIVE</span>
      </motion.div>
    </div>
  );
}
