import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { frameworkStages } from '../../data/frameworkData';
import { Search, Sliders, BarChart3, ShieldCheck, Eye, FileText, RefreshCw, ChevronRight } from 'lucide-react';

const stageIcons = {
  Search,
  Sliders,
  BarChart3,
  ShieldCheck,
  Eye,
  FileText,
  RefreshCw
};

export default function RiskFrameworkCircle() {
  const [activeStage, setActiveStage] = useState(frameworkStages[0]);

  return (
    <div className="space-y-8">
      {/* 7-Stage Interactive Flow */}
      <div className="relative overflow-x-auto pb-4 pt-2 no-scrollbar">
        <div className="flex items-center min-w-max justify-between space-x-3 px-2">
          {frameworkStages.map((stage, index) => {
            const Icon = stageIcons[stage.icon] || Search;
            const isSelected = activeStage.step === stage.step;

            return (
              <React.Fragment key={stage.step}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveStage(stage)}
                  className={`flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-300 min-w-[130px] border shadow-md ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#10243C] to-[#0B1A2C] border-[#55D9CC] ring-2 ring-[#55D9CC]/50 shadow-xl shadow-teal-500/20'
                      : 'bg-[#0A1725] border-[rgba(72,214,201,0.18)] hover:border-[#55D9CC]'
                  }`}
                >
                  <span className="text-[10px] font-mono font-extrabold text-[#55D9CC] mb-1">
                    STAGE {stage.step}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                      isSelected
                        ? 'bg-[#008579] text-white border border-[#55D9CC]'
                        : 'bg-[rgba(40,199,183,0.10)] text-[#55D9CC] border border-[rgba(72,214,201,0.25)]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold font-mono tracking-wider text-white uppercase text-center">
                    {stage.name}
                  </span>
                </motion.div>

                {index < frameworkStages.length - 1 && (
                  <div className="flex items-center shrink-0">
                    <ChevronRight className="w-5 h-5 text-[#55D9CC] animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Box with Bright Eye-Catching Typography */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass-panel p-6 md:p-8 rounded-2xl border-2 border-[#55D9CC] bg-[#06152B] text-white grid grid-cols-1 md:grid-cols-4 gap-6 items-center shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center space-x-4 md:col-span-1">
            <div className="w-16 h-16 rounded-2xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0 shadow-md">
              {React.createElement(stageIcons[activeStage.icon] || Search, { className: 'w-8 h-8' })}
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-mono font-extrabold text-[#55D9CC] uppercase tracking-wider block">
                STAGE {activeStage.step} OF 07
              </span>
              <h3 className="text-xl font-extrabold font-display text-white">
                {activeStage.name}
              </h3>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <h4 className="text-base sm:text-lg font-extrabold text-white font-heading">
              {activeStage.title}
            </h4>
            <p className="text-[#CBD5E1] text-sm leading-relaxed font-normal">
              {activeStage.desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
