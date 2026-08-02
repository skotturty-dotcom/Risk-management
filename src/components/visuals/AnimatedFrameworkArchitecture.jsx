import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Layers, Target, Search, BarChart3, Eye, ArrowDown, Sparkles, CheckCircle2, Zap } from 'lucide-react';

const frameworkNodes = [
  {
    id: 'strategic-risk',
    level: '01 APEX GOVERNANCE',
    title: 'Strategic Risk & Vision',
    desc: 'Aligning corporate board vision with enterprise capital allocation, stakeholder commitments, and long-term risk appetite.',
    icon: Shield,
    badge: 'BOARD LEVEL',
    color: 'from-[#0F3161] to-[#008579]',
    details: 'Board-approved risk policy, CXO appetite oversight, strategic growth hedging.'
  },
  {
    id: 'erm-structure',
    level: '02 FRAMEWORK ALIGNMENT',
    title: 'Enterprise Risk Management (ERM)',
    desc: 'Deploying standardized COSO & ISO 31000 risk architectures across multi-site operations and business units.',
    icon: Layers,
    badge: 'ISO 31000 & COSO',
    color: 'from-[#008579] to-[#00437E]',
    details: 'Risk taxonomy, governance structure, policy documentation, risk owner assignments.'
  },
  {
    id: 'risk-appetite',
    level: '03 QUANTITATIVE METRICS',
    title: 'Risk Appetite & Tolerance',
    desc: 'Establishing quantitative financial, operational, and cyber risk thresholds that trigger escalation protocols.',
    icon: Target,
    badge: 'QUANTITATIVE',
    color: 'from-[#00437E] to-[#FF7729]',
    details: 'Loss tolerance limits, credit exposure caps, cyber breach tolerance thresholds.'
  },
  {
    id: 'risk-identification',
    level: '04 EXPOSURE AUDITING',
    title: 'Risk Identification & Taxonomy',
    desc: 'Proactive diagnostic scanning across vendor dependencies, IT infrastructure, legal contracts, and capital flows.',
    icon: Search,
    badge: 'DIAGNOSTIC SCAN',
    color: 'from-[#FF7729] to-[#FFB340]',
    details: 'Continuous vulnerability scanning, third-party due diligence, contract dispute reviews.'
  },
  {
    id: 'risk-assessment',
    level: '05 TELEMETRY SCORING',
    title: 'Risk Assessment & Matrix',
    desc: 'Evaluating Likelihood × Impact metrics on 5×5 matrices using RCSA workflows and Key Risk Indicators (KRIs).',
    icon: BarChart3,
    badge: '5×5 HEATMAP',
    color: 'from-[#FFB340] to-[#008579]',
    details: 'RCSA testing, KRI telemetry scoring, predictive threat modeling, stress testing.'
  },
  {
    id: 'continuous-governance',
    level: '06 BOARD TELEMETRY LOOP',
    title: 'Continuous Control & Telemetry',
    desc: 'Real-time board dashboard reporting, whistleblower integrity channels, and iterative control optimization.',
    icon: Eye,
    badge: 'CONTINUOUS CONTROL',
    color: 'from-[#008579] to-[#0F3161]',
    details: 'Whistleblower forensic channels, BCP crisis response, quarterly board reports.'
  }
];

export default function AnimatedFrameworkArchitecture() {
  const [activeNode, setActiveNode] = useState(frameworkNodes[0]);

  return (
    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-teal-500/30 bg-white dark:bg-[#0F2342] space-y-10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
        <div className="inline-flex items-center space-x-2 text-[#008579] dark:text-[#46A095] font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30">
          <Sparkles className="w-4 h-4 text-[#FFB340]" />
          <span>INTERACTIVE SYSTEM HIERARCHY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-display text-[#0F3161] dark:text-white">
          Framework Architecture Engine
        </h2>
        <p className="text-slate-700 dark:text-gray-200 text-base md:text-lg font-medium">
          Strategic alignment flow from corporate vision to continuous control telemetry. Click any node to inspect governance scope.
        </p>
      </div>

      {/* Animated Vertical Laser Flow Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        {/* Left Interactive Animated Tree Stack */}
        <div className="lg:col-span-7 space-y-4 relative">
          {frameworkNodes.map((node, idx) => {
            const IconComp = node.icon;
            const isSelected = activeNode.id === node.id;

            return (
              <React.Fragment key={node.id}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  onClick={() => setActiveNode(node)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden flex items-center justify-between shadow-md ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0F3161] via-[#00437E] to-[#008579] text-white border-[#008579] ring-2 ring-[#008579]/40 shadow-xl'
                      : 'bg-slate-50 dark:bg-[#06152B] text-slate-800 dark:text-gray-200 border-slate-200 dark:border-white/10 hover:border-[#008579]'
                  }`}
                >
                  {/* Left Icon & Info */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-white/15 text-[#FFB340] border-white/30'
                          : 'bg-teal-50 dark:bg-teal-500/10 text-[#008579] dark:text-[#46A095] border-teal-200 dark:border-teal-500/30'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <span
                        className={`text-[11px] font-sans font-bold uppercase tracking-wider block ${
                          isSelected ? 'text-[#FFB340]' : 'text-[#008579] dark:text-[#46A095]'
                        }`}
                      >
                        {node.level}
                      </span>
                      <h4
                        className={`text-lg md:text-xl font-bold font-display leading-tight ${
                          isSelected ? 'text-white' : 'text-[#0F3161] dark:text-white'
                        }`}
                      >
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Badge */}
                  <span
                    className={`text-[10px] font-sans font-extrabold px-3 py-1 rounded-full uppercase tracking-wider hidden sm:block ${
                      isSelected
                        ? 'bg-[#FFB340] text-[#0F3161]'
                        : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-gray-300'
                    }`}
                  >
                    {node.badge}
                  </span>
                </motion.div>

                {/* Animated Connecting Laser Connector */}
                {idx < frameworkNodes.length - 1 && (
                  <div className="flex justify-center my-1 relative">
                    <div className="w-0.5 h-6 bg-slate-300 dark:bg-white/20 relative overflow-hidden">
                      <motion.div
                        animate={{ y: [0, 24] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                        className="w-full h-3 bg-gradient-to-b from-[#008579] via-[#FFB340] to-transparent shadow-glow"
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Dynamic Inspection Telemetry Card */}
        <div className="lg:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              className="glass-panel p-8 rounded-3xl border-2 border-[#008579] dark:border-[#46A095] space-y-6 shadow-2xl bg-white dark:bg-[#06152B]"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-[#008579] dark:text-[#46A095]">
                  <Zap className="w-5 h-5 text-[#FFB340]" />
                </div>
                <div>
                  <span className="text-xs font-sans font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-wider block">
                    TELEMETRY INSPECTION
                  </span>
                  <h3 className="text-xl font-extrabold font-display text-[#0F3161] dark:text-white">
                    {activeNode.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 dark:text-gray-200 font-medium leading-relaxed">
                {activeNode.desc}
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0F2342] border border-slate-200 dark:border-white/10 space-y-2">
                <span className="text-xs font-sans font-bold text-[#008579] dark:text-[#46A095] uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB340]" />
                  <span>CORE GOVERNANCE CONTROLS</span>
                </span>
                <p className="text-sm text-slate-800 dark:text-gray-100 font-bold leading-relaxed">
                  {activeNode.details}
                </p>
              </div>

              <div className="pt-2 text-xs font-sans text-slate-500 dark:text-gray-400 font-medium flex items-center justify-between border-t border-slate-200 dark:border-white/10">
                <span>ISO 31000 & COSO ENFORCED</span>
                <span className="text-[#008579] dark:text-[#46A095] font-bold">SYSTEM READY</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
