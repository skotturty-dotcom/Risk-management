import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Layers, Target, Search, BarChart3, Eye, Sparkles, CheckCircle2, Zap } from 'lucide-react';

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
    color: 'from-[#00437E] to-[#55D9CC]',
    details: 'Loss tolerance limits, credit exposure caps, cyber breach tolerance thresholds.'
  },
  {
    id: 'risk-identification',
    level: '04 EXPOSURE AUDITING',
    title: 'Risk Identification & Taxonomy',
    desc: 'Proactive diagnostic scanning across vendor dependencies, IT infrastructure, legal contracts, and capital flows.',
    icon: Search,
    badge: 'DIAGNOSTIC SCAN',
    color: 'from-[#55D9CC] to-[#FFB340]',
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
    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[rgba(72,214,201,0.18)] bg-[#0A1725] text-white space-y-10 shadow-2xl relative overflow-hidden">
      {/* Background Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-[#55D9CC]/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
        <div className="inline-flex items-center space-x-2 text-[#55D9CC] font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)]">
          <Sparkles className="w-4 h-4 text-[#FFB340]" />
          <span>INTERACTIVE SYSTEM HIERARCHY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
          Framework Architecture Engine
        </h2>
        <p className="text-[#CBD5E1] text-base md:text-lg font-normal">
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
                  whileHover={{ scale: 1.02, x: 6 }}
                  onClick={() => setActiveNode(node)}
                  className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden flex items-center justify-between shadow-lg ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0F3161] via-[#00437E] to-[#008579] text-white border-[#55D9CC] ring-2 ring-[#55D9CC]/50 shadow-2xl shadow-teal-500/20'
                      : 'bg-[#06152B] text-white border-[rgba(72,214,201,0.15)] hover:border-[#55D9CC]'
                  }`}
                >
                  {/* Left Icon & Info */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-md ${
                        isSelected
                          ? 'bg-white/15 text-[#FFB340] border-white/30'
                          : 'bg-[rgba(40,199,183,0.10)] text-[#55D9CC] border-[rgba(72,214,201,0.25)]'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <span
                        className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                          isSelected ? 'text-[#FFB340]' : 'text-[#55D9CC]'
                        }`}
                      >
                        {node.level}
                      </span>
                      <h4 className="text-lg md:text-xl font-extrabold font-display leading-tight text-white">
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Badge */}
                  <span
                    className={`text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider hidden sm:block ${
                      isSelected
                        ? 'bg-[#FFB340] text-[#0F3161]'
                        : 'bg-white/10 text-[#CBD5E1] border border-white/15'
                    }`}
                  >
                    {node.badge}
                  </span>
                </motion.div>

                {/* Animated Connecting Laser Connector */}
                {idx < frameworkNodes.length - 1 && (
                  <div className="flex justify-center my-1 relative">
                    <div className="w-0.5 h-6 bg-white/20 relative overflow-hidden">
                      <motion.div
                        animate={{ y: [0, 24] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                        className="w-full h-3 bg-gradient-to-b from-[#55D9CC] via-[#FFB340] to-transparent shadow-[0_0_8px_#55D9CC]"
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Dynamic Inspection Telemetry Card with Floating Physics */}
        <div className="lg:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              className="glass-panel p-8 rounded-3xl border-2 border-[#55D9CC] space-y-6 shadow-2xl bg-[#06152B] text-white relative overflow-hidden"
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-11 h-11 rounded-xl bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)] flex items-center justify-center text-[#55D9CC]">
                  <Zap className="w-6 h-6 text-[#FFB340] relative z-10" />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-xl bg-[#FFB340]/20 pointer-events-none"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#55D9CC] uppercase tracking-wider block">
                    TELEMETRY INSPECTION
                  </span>
                  <h3 className="text-xl font-extrabold font-display text-white">
                    {activeNode.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#CBD5E1] font-normal leading-relaxed">
                {activeNode.desc}
              </p>

              <div className="p-5 rounded-2xl bg-[#0F2342] border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#55D9CC] uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB340]" />
                  <span>CORE GOVERNANCE CONTROLS</span>
                </span>
                <p className="text-sm text-white font-semibold leading-relaxed">
                  {activeNode.details}
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-[#B8C4CF] font-semibold flex items-center justify-between border-t border-white/10">
                <span>ISO 31000 & COSO ENFORCED</span>
                <span className="text-[#55D9CC] font-bold flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5 inline-block" />
                  SYSTEM READY
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
