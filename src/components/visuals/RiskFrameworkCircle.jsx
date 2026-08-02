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
    <div className="space-y-12">
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
                  className={`flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-300 min-w-[130px] border ${
                    isSelected
                      ? 'bg-white dark:bg-[#111C2D] border-blue-600 dark:border-[#5BC0EB] shadow-lg shadow-blue-500/20 dark:shadow-[#5BC0EB]/20'
                      : 'bg-white dark:bg-[#0A1220] border-slate-200 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-[#5BC0EB]/40'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-[#5BC0EB] mb-1">
                    STAGE {stage.step}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white dark:bg-[#5BC0EB] dark:text-[#050B14]'
                        : 'bg-blue-50 text-blue-600 dark:bg-white/5 dark:text-[#5BC0EB]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase text-center">
                    {stage.name}
                  </span>
                </motion.div>

                {index < frameworkStages.length - 1 && (
                  <div className="text-slate-400 flex items-center shrink-0">
                    <ChevronRight className="w-5 h-5 text-blue-500 dark:text-[#5BC0EB]/60 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass-panel p-6 md:p-8 rounded-2xl border border-blue-500/30 dark:border-[#5BC0EB]/30 bg-white dark:bg-[#0A1220] grid grid-cols-1 md:grid-cols-4 gap-6 items-center shadow-lg"
        >
          <div className="flex items-center space-x-4 md:col-span-1">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-[#5BC0EB]/10 border border-blue-200 dark:border-[#5BC0EB]/40 flex items-center justify-center text-blue-600 dark:text-[#5BC0EB] shrink-0 shadow-md">
              {React.createElement(stageIcons[activeStage.icon] || Search, { className: 'w-8 h-8' })}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-[#5BC0EB]">
                STAGE {activeStage.step} OF 07
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                {activeStage.name}
              </h3>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10 pt-4 md:pt-0 md:pl-6">
            <h4 className="text-base font-semibold text-slate-900 dark:text-white font-heading">
              {activeStage.title}
            </h4>
            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
              {activeStage.desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
