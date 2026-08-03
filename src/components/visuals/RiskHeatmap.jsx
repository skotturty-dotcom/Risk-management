import React, { useState } from 'react';
import { likelihoodLevels, impactLevels, heatmapMatrix } from '../../data/frameworkData';
import { Info, ShieldAlert, Zap } from 'lucide-react';

export default function RiskHeatmap() {
  const [hoveredCell, setHoveredCell] = useState(null);

  const getZoneStyling = (zone) => {
    switch (zone) {
      case 'Low':
        return 'bg-[#008579]/20 text-[#55D9CC] border-[#008579]/40 hover:bg-[#008579]/30';
      case 'Medium':
        return 'bg-[#FFB340]/25 text-[#FFB340] border-[#FFB340]/40 hover:bg-[#FFB340]/35';
      case 'High':
        return 'bg-[#FF7729]/25 text-[#FF7729] border-[#FF7729]/40 hover:bg-[#FF7729]/35';
      case 'Critical':
        return 'bg-[#E32D2D]/25 text-rose-300 border-[#E32D2D]/50 hover:bg-[#E32D2D]/35';
      default:
        return 'bg-white/10 text-white border-white/20';
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
    <div className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-[rgba(85,217,204,0.28)] bg-[#10243C] text-white space-y-6 shadow-2xl max-w-5xl mx-auto">
      {/* Header & Disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="space-y-0.5">
          <div className="inline-flex items-center space-x-1.5 text-[#55D9CC] font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FFB340]" />
            <span>INTERACTIVE ENTERPRISE RISK MATRIX</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white pt-0.5">
            5 × 5 Risk Heatmap Matrix
          </h3>
        </div>

        <div className="flex items-center space-x-2 text-[11px] font-mono text-[#CBD5E1] bg-white/5 px-3 py-1.5 rounded-lg border border-white/15 font-semibold shrink-0">
          <Info className="w-3.5 h-3.5 text-[#55D9CC] shrink-0" />
          <span>Interactive Boardroom Visualization</span>
        </div>
      </div>

      {/* Heatmap Matrix Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[560px] grid grid-cols-6 gap-2 text-center">
          {/* Top Left Label */}
          <div className="p-2.5 font-mono text-[11px] text-[#B8C4CF] font-extrabold uppercase tracking-wider flex items-center justify-center bg-[#06152B] rounded-lg border border-white/10">
            LIKELIHOOD ↓ / IMPACT →
          </div>

          {/* Column Headers (Impact) */}
          {impactLevels.map((impact) => (
            <div
              key={impact}
              className="p-2.5 font-mono text-[11px] font-extrabold uppercase tracking-wider text-white bg-white/10 rounded-lg border border-white/15 flex items-center justify-center shadow-sm"
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
                <div className="p-2.5 font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#55D9CC] bg-white/10 rounded-lg border border-white/15 flex items-center justify-center shadow-sm">
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
                      className={`p-2.5 sm:p-3 rounded-lg border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center space-y-0.5 ${cellStyle} ${
                        isHovered ? 'ring-2 ring-[#55D9CC] scale-105 shadow-xl z-20 font-bold' : 'shadow-sm'
                      }`}
                    >
                      <span className="text-base sm:text-lg font-extrabold font-display leading-none">{cell.score}</span>
                      <span className="text-[9px] font-mono uppercase font-extrabold tracking-wider">
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

      {/* Legend & Dynamic Inspection Telemetry Box */}
      <div className="space-y-3 pt-3 border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span className="text-white font-extrabold uppercase tracking-wider">Risk Zones:</span>
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#008579]/20 border border-[#008579]/40">
              <span className="w-2.5 h-2.5 rounded bg-[#008579]" />
              <span className="text-[#55D9CC] font-bold">Low (1-6)</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#FFB340]/25 border border-[#FFB340]/40">
              <span className="w-2.5 h-2.5 rounded bg-[#FFB340]" />
              <span className="text-[#FFB340] font-bold">Medium (8-10)</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#FF7729]/25 border border-[#FF7729]/40">
              <span className="w-2.5 h-2.5 rounded bg-[#FF7729]" />
              <span className="text-[#FF7729] font-bold">High (12-16)</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#E32D2D]/25 border border-[#E32D2D]/50">
              <span className="w-2.5 h-2.5 rounded bg-[#E32D2D]" />
              <span className="text-rose-300 font-bold">Critical (20-25)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Telemetry Box */}
        <div className="bg-[#06152B] text-white p-3.5 rounded-xl border border-[rgba(72,214,201,0.25)] text-[11px] font-mono shadow-inner flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {hoveredCell ? (
            <>
              <div className="space-y-0.5">
                <div className="flex items-center space-x-1.5 text-[#55D9CC] font-bold">
                  <Zap className="w-3.5 h-3.5 text-[#FFB340]" />
                  <span>
                    EXPOSURE PARAMETERS: <strong className="text-white font-extrabold">{hoveredCell.cell.likelihood}</strong> LIKELIHOOD × <strong className="text-white font-extrabold">{hoveredCell.cell.impact}</strong> IMPACT
                  </span>
                </div>
                <p className="text-[#CBD5E1] font-normal">
                  {getActionRecommendation(hoveredCell.cell.zone)}
                </p>
              </div>

              <div className="shrink-0 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-center font-display">
                <span className="text-[10px] font-bold text-[#FFB340] block uppercase">EXPOSURE SCORE</span>
                <span className="text-base font-extrabold text-white">
                  {hoveredCell.cell.score} [{hoveredCell.cell.zone.toUpperCase()}]
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-2 text-[#CBD5E1] font-medium py-0.5">
              <Info className="w-3.5 h-3.5 text-[#FFB340] shrink-0" />
              <span>Hover over matrix cells to inspect real-time risk exposure scores and control protocols.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
