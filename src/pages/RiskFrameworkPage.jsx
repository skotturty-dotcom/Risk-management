import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import RiskHeatmap from '../components/visuals/RiskHeatmap';
import AnimatedFrameworkArchitecture from '../components/visuals/AnimatedFrameworkArchitecture';

export default function RiskFrameworkPage({ onOpenAudit }) {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-[#008579] dark:text-[#46A095] text-xs md:text-sm font-bold uppercase tracking-wider font-sans">
            <Shield className="w-4 h-4 text-[#008579] dark:text-[#46A095]" />
            <span>GLOBAL RISK STANDARDS</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-[#0F3161] dark:text-white leading-tight">
            ISO 31000 & COSO <br />
            <span className="text-gradient-emerald">Framework Architecture</span>
          </h1>

          <p className="text-slate-700 dark:text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            Our advisory methodologies integrate international risk governance standards, quantitative heatmaps, RCSA protocols, and continuous board telemetry.
          </p>
        </div>
      </section>

      {/* Animated System Hierarchy Engine */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedFrameworkArchitecture />
      </section>

      {/* Interactive 5x5 Heatmap Matrix */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiskHeatmap />
      </section>
    </div>
  );
}
