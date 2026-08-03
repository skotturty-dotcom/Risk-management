import React from 'react';
import { Shield } from 'lucide-react';
import RiskHeatmap from '../components/visuals/RiskHeatmap';
import AnimatedFrameworkArchitecture from '../components/visuals/AnimatedFrameworkArchitecture';

export default function RiskFrameworkPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)] text-[#008579] text-xs md:text-sm font-bold uppercase tracking-wider font-mono">
            <Shield className="w-4 h-4 text-[#008579]" />
            <span>GLOBAL RISK STANDARDS</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-[#06182D] leading-tight">
            ISO 31000 & COSO <br />
            <span className="text-[#008579] font-extrabold">Framework Architecture</span>
          </h1>

          <p className="text-[#CBD5E1] text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
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
