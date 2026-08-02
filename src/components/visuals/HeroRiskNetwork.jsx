import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, TrendingUp, Activity, FileCheck, Users, Search, Compass, Zap } from 'lucide-react';

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

  const radius = 140; // Scaled radius

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-square flex items-center justify-center">
      {/* Multi-Ring Radar Scan Background */}
      <div className="absolute inset-2 rounded-full border border-emerald-400/30 dark:border-emerald-500/20 flex items-center justify-center">
        <div className="absolute inset-10 rounded-full border border-slate-300/50 dark:border-white/5" />
        <div className="absolute inset-20 rounded-full border border-amber-400/30 dark:border-amber-500/15" />
        <div className="absolute inset-32 rounded-full border border-dashed border-emerald-400/40 dark:border-emerald-500/25" />

        {/* Sweep Beam */}
        <div className="absolute w-full h-full rounded-full border border-t-emerald-600 dark:border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent animate-radar opacity-80" />
      </div>

      {/* SVG Connecting Lines & Animated Packets */}
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

              <circle r={isSelected ? '4.5' : '3'} fill={node.color}>
                <animateMotion
                  path={`M 200 200 L ${x} ${y}`}
                  dur={`${2.5 + (node.angle % 2)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Central ENTERPRISE Core Node */}
      <motion.div
        whileHover={{ scale: 1.1, rotateZ: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenAudit}
        className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-slate-900 text-white border-2 border-emerald-500 dark:border-emerald-400 flex flex-col items-center justify-center cursor-pointer shadow-2xl shadow-emerald-600/30 group"
      >
        <Shield className="w-7 h-7 sm:w-9 sm:h-9 text-emerald-400 mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-[9px] sm:text-[11px] font-extrabold tracking-widest uppercase text-white font-mono">
          ENTERPRISE
        </span>
        <span className="text-[7px] sm:text-[8px] text-amber-400 font-mono tracking-wider font-bold">INTELLIGENCE</span>
      </motion.div>

      {/* 7 Orbital Practice Nodes (Percentage Scaled) */}
      {nodes.map((node) => {
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
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.15, zIndex: 30 }}
            onHoverStart={() => setActiveNode(node.id)}
            onHoverEnd={() => setActiveNode(null)}
            className={`absolute z-20 w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white dark:bg-[#131823] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border shadow-md ${
              isSelected
                ? 'border-emerald-600 dark:border-emerald-400 ring-2 ring-emerald-500/40 shadow-xl'
                : 'border-slate-300 dark:border-white/15 hover:border-emerald-500'
            }`}
            style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5" style={{ color: node.color }} />
            <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-wider text-slate-900 dark:text-white">
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Floating Status Indicators */}
      <div className="absolute top-0 left-0 bg-white/90 dark:bg-[#090D16]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/30 text-[8px] sm:text-[9px] font-mono text-emerald-800 dark:text-emerald-400 font-bold flex items-center space-x-1.5 shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
        <span>THREAT LEVEL: LOW</span>
      </div>

      <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-[#090D16]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-300 dark:border-amber-500/30 text-[8px] sm:text-[9px] font-mono text-amber-800 dark:text-amber-400 font-bold flex items-center space-x-1.5 shadow-md">
        <Zap className="w-3 h-3 text-amber-600 dark:text-amber-400 animate-bounce" />
        <span>GOVERNANCE: ACTIVE</span>
      </div>
    </div>
  );
}
