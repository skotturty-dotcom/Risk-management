import React, { useState } from 'react';
import { likelihoodLevels, impactLevels, heatmapMatrix } from '../../data/frameworkData';
import { Info, ShieldAlert, Zap, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RiskHeatmap() {
  const [hoveredCell, setHoveredCell] = useState(null);

  const getZoneStyling = (zone) => {
    switch (zone) {
      case 'Low':
        return 'bg-[#008579]/15 text-[#00685E] dark:text-[#56C4B7] border-[#008579]/30 hover:bg-[#008579]/25';
      case 'Medium':
        return 'bg-[#FFB340]/25 text-[#B45309] dark:text-[#FFB340] border-[#FFB340]/40 hover:bg-[#FFB340]/35';
      case 'High':
        return 'bg-[#FF7729]/25 text-[#C2410C] dark:text-[#FF7729] border-[#FF7729]/40 hover:bg-[#FF7729]/35';
      case 'Critical':
        return 'bg-[#E32D2D]/25 text-[#991B1B] dark:text-rose-300 border-[#E32D2D]/50 hover:bg-[#E32D2D]/35';
      default:
        return 'bg-slate-100 text-slate-900 border-slate-300';
    }
  };

  const getActionRecommendation = (zone) => {
    switch (zone) {
      case 'Low':
        return 'Standard operational monitoring. Routine ISO 31000 controls applied.';
      case 'Medium':
        return 'Management oversight required. Implement KRI tracking & quarterly RCSA.';
      case 'High':
        return 'Executive Board review mandatory. Deploy dedicated risk hedging strategy.';
      case 'Critical':
        return 'Immediate CXO escalation. Activate BCP / Crisis Governance Protocols.';
      default:
        return '';
    }
  };

  return (
    <div className="glass-panel p-7 md:p-10 rounded-3xl border border-slate-200 dark:border-teal-500/30 bg-white dark:bg-[#0F2342] space-y-8 shadow-2xl">
      {/* Header & Disclaimer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 text-[#008579] dark:text-[#46A095] font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30">
            <ShieldAlert className="w-4 h-4" />
            <span>INTERACTIVE ENTERPRISE RISK MATRIX</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold font-display text-[#0F3161] dark:text-white pt-1">
            5 × 5 Risk Heatmap Matrix
          </h3>
        </div>

        <div className="flex items-center space-x-2.5 text-xs font-sans text-slate-700 dark:text-gray-200 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-slate-300 dark:border-white/15 font-semibold">
          <Info className="w-4 h-4 text-[#008579] dark:text-[#46A095] shrink-0" />
          <span>Interactive Boardroom Exposure Visualization</span>
        </div>
      </div>

      {/* Heatmap Matrix Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[640px] grid grid-cols-6 gap-2.5 text-center">
          {/* Top Left Label */}
          <div className="p-3.5 font-sans text-xs text-slate-500 dark:text-gray-400 font-extrabold uppercase tracking-widest flex items-center justify-center bg-slate-50 dark:bg-[#06152B] rounded-xl border border-slate-200 dark:border-white/10">
            LIKELIHOOD ↓ / IMPACT →
          </div>

          {/* Column Headers (Impact) */}
          {impactLevels.map((impact) => (
            <div
              key={impact}
              className="p-3.5 font-sans text-xs font-extrabold uppercase tracking-wider text-[#0F3161] dark:text-white bg-slate-100 dark:bg-white/10 rounded-xl border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-sm"
            >
              {impact}
            </div>
          ))}

          {/* Matrix Rows */}
          {heatmapMatrix.map((row, rIdx) => {
            const likelihood = likelihoodLevels[4 - rIdx];

            return (
              <React.Fragment key={likelihood}>
                {/* Row Header (Likelihood) */}
                <div className="p-3.5 font-sans text-xs font-extrabold uppercase tracking-wider text-[#008579] dark:text-[#46A095] bg-slate-100 dark:bg-white/10 rounded-xl border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-sm">
                  {likelihood}
                </div>

                {/* Row Cells */}
                {row.map((cell, cIdx) => {
                  const isHovered =
                    hoveredCell &&
                    hoveredCell.rIdx === rIdx &&
                    hoveredCell.cIdx === cIdx;

                  const cellStyle = getZoneStyling(cell.zone);

                  return (
                    <div
                      key={cIdx}
                      onMouseEnter={() => setHoveredCell({ rIdx, cIdx, cell })}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center space-y-1 ${cellStyle} ${
                        isHovered ? 'ring-4 ring-[#0F3161] dark:ring-white scale-105 shadow-2xl z-20 font-bold' : 'shadow-sm'
                      }`}
                    >
                      <span className="text-lg md:text-xl font-extrabold font-display">{cell.score}</span>
                      <span className="text-[10px] font-sans uppercase font-extrabold tracking-widest">
                        {cell.zone}
                      </span>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Legend & Interactive Inspection Telemetry Drawer */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
            <span className="text-[#0F3161] dark:text-white font-extrabold uppercase tracking-wider">Risk Zones:</span>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#008579]/15 border border-[#008579]/30">
              <span className="w-3 h-3 rounded bg-[#008579]" />
              <span className="text-[#00685E] dark:text-[#56C4B7] font-bold">Low (1-6)</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#FFB340]/25 border border-[#FFB340]/40">
              <span className="w-3 h-3 rounded bg-[#FFB340]" />
              <span className="text-[#B45309] dark:text-[#FFB340] font-bold">Medium (8-10)</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#FF7729]/25 border border-[#FF7729]/40">
              <span className="w-3 h-3 rounded bg-[#FF7729]" />
              <span className="text-[#C2410C] dark:text-[#FF7729] font-bold">High (12-16)</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#E32D2D]/25 border border-[#E32D2D]/50">
              <span className="w-3 h-3 rounded bg-[#E32D2D]" />
              <span className="text-[#991B1B] dark:text-rose-300 font-bold">Critical (20-25)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Telemetry Box */}
        <div className="bg-[#06152B] text-white p-5 rounded-2xl border border-teal-500/30 text-xs font-sans shadow-inner flex flex-col md:flex-row md:items-center justify-between gap-3">
          {hoveredCell ? (
            <>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-teal-300 font-bold">
                  <Zap className="w-4 h-4 text-[#FFB340]" />
                  <span>
                    EXPOSURE PARAMETERS: <strong className="text-white font-extrabold">{hoveredCell.cell.likelihood}</strong> LIKELIHOOD × <strong className="text-white font-extrabold">{hoveredCell.cell.impact}</strong> IMPACT
                  </span>
                </div>
                <p className="text-slate-300 font-medium">
                  {getActionRecommendation(hoveredCell.cell.zone)}
                </p>
              </div>

              <div className="shrink-0 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-center font-display">
                <span className="text-xs font-bold text-amber-300 block uppercase">EXPOSURE SCORE</span>
                <span className="text-xl font-extrabold text-white">
                  {hoveredCell.cell.score} [{hoveredCell.cell.zone.toUpperCase()}]
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-2 text-slate-300 italic font-medium py-1">
              <Info className="w-4 h-4 text-[#FFB340] shrink-0" />
              <span>Hover over matrix cells to inspect real-time risk exposure scores and control protocols.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
