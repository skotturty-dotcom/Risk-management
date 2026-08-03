import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart3, ShieldCheck, Activity, ArrowRight, CheckCircle2, ChevronRight, Zap, RefreshCw } from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    step: 'STEP 01',
    title: 'Diagnostic Risk Audit & Baseline',
    shortDesc: 'ISO 31000 & COSO gap assessments across executive business units.',
    icon: Search,
    color: '#008579',
    deliverables: [
      'Board-level Risk Taxonomy Formulation',
      'COSO & ISO 31000 Maturity Gap Assessment',
      'CXO Advisory Interviews & Risk Culture Audit'
    ],
    metric: '98% Baseline Precision',
    badge: 'DIAGNOSTIC PHASE'
  },
  {
    id: 2,
    step: 'STEP 02',
    title: 'Quantitative Modeling & KRIs',
    shortDesc: 'Setting quantitative loss tolerance limits and telemetry thresholds.',
    icon: BarChart3,
    color: '#38BDF8',
    deliverables: [
      '5×5 Likelihood vs Impact Risk Heatmaps',
      'Key Risk Indicators (KRI) Telemetry Setup',
      'Credit & Liquidity Stress Test Parameters'
    ],
    metric: '5×5 Matrix Telemetry',
    badge: 'QUANTITATIVE PHASE'
  },
  {
    id: 3,
    step: 'STEP 03',
    title: 'Control Architecture & Policy',
    shortDesc: 'Deploying ISMS, BCP runbooks, and CPWD/FIDIC legal compliance.',
    icon: ShieldCheck,
    color: '#FFB340',
    deliverables: [
      'ISO 27001 ISMS & Cyber Readiness Protocols',
      'Business Continuity (BCP) & Crisis Runbooks',
      'FIDIC / CPWD Contract & Third-Party Risk Audits'
    ],
    metric: '100% Policy Compliance',
    badge: 'IMPLEMENTATION PHASE'
  },
  {
    id: 4,
    step: 'STEP 04',
    title: 'Board Telemetry & Governance Loop',
    shortDesc: 'Real-time board reporting, whistleblower channels, and control optimization.',
    icon: Activity,
    color: '#55D9CC',
    deliverables: [
      'Quarterly Board Risk Advisory Dashboards',
      'Whistleblower & Anti-Fraud Integrity Channel',
      'Iterative Control Optimization & Re-testing'
    ],
    metric: 'Real-Time Telemetry',
    badge: 'GOVERNANCE PHASE'
  }
];

export default function AdvisoryWorkflow({ onOpenAudit }) {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-advance workflow step every 4.5 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const current = workflowSteps[activeStep];
  const IconComponent = current.icon;

  return (
    <section id="workflow" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3">
          <span className="text-xs font-mono font-extrabold text-[#008579] uppercase tracking-widest px-3.5 py-1 rounded bg-teal-50 border border-teal-200 shadow-sm inline-flex items-center space-x-2">
            <Zap className="w-3.5 h-3.5 text-[#008579] animate-pulse" />
            <span>INTERACTIVE ADVISORY WORKFLOW</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#06182D]">
            End-to-End Strategic Risk Methodology
          </h2>
          <p className="text-slate-600 text-base max-w-xl font-medium leading-relaxed">
            How Srajai Tech transforms enterprise risk exposure into board-level strategic clarity across 4 seamless phases.
          </p>
        </div>

        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#008579] px-3.5 py-1.5 rounded-lg bg-teal-50 border border-teal-200 hover:bg-teal-100 transition-colors shrink-0"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${autoPlay ? 'animate-spin' : ''}`} />
          <span>{autoPlay ? 'Auto-Advancing Workflow' : 'Paused (Click to Resume)'}</span>
        </button>
      </div>

      {/* 4-Step Animated Pipeline Nodes Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {workflowSteps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = activeStep === idx;

          return (
            <motion.div
              key={step.id}
              onClick={() => {
                setActiveStep(idx);
                setAutoPlay(false);
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden group border flex flex-col justify-between shadow-lg ${
                isActive
                  ? 'bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border-2 border-[#38BDF8] ring-4 ring-[#38BDF8]/20 text-white shadow-2xl scale-[1.02]'
                  : 'bg-white border-slate-200 hover:border-[#008579] text-slate-900'
              }`}
            >
              {/* Progress Bar Line when Active */}
              {isActive && (
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4.5, ease: 'linear' }}
                  className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]"
                />
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                      isActive
                        ? 'text-[#38BDF8] bg-[#38BDF8]/15 border-[#38BDF8]/30'
                        : 'text-[#008579] bg-teal-50 border-teal-200'
                    }`}
                  >
                    {step.step}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#38BDF8] text-[#06182D] shadow-md scale-110'
                        : 'bg-teal-50 text-[#008579] group-hover:bg-[#008579] group-hover:text-white'
                    }`}
                  >
                    <StepIcon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-base font-extrabold font-display leading-snug ${
                      isActive ? 'text-white' : 'text-[#06182D] group-hover:text-[#008579]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[11px] mt-1 font-medium leading-snug line-clamp-2 ${
                      isActive ? 'text-[#E2E8F0]' : 'text-slate-600'
                    }`}
                  >
                    {step.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/20 flex items-center justify-between">
                <span className={`text-[10px] font-mono font-extrabold uppercase ${isActive ? 'text-[#38BDF8]' : 'text-[#008579]'}`}>
                  Phase {step.id} of 4
                </span>
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform ${
                    isActive ? 'text-[#38BDF8] translate-x-1' : 'text-slate-400 group-hover:translate-x-1'
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Active Phase Deliverables Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border-2 border-[#38BDF8]/40 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
        >
          {/* Top Multi-Color Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />

          {/* Left Details Column */}
          <div className="lg:col-span-8 space-y-6 pt-1">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono font-extrabold text-[#38BDF8] px-3 py-1 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30 uppercase tracking-widest shadow-sm">
                {current.badge}
              </span>
              <span className="text-xs font-mono text-[#FFB340] font-extrabold uppercase tracking-wider">
                {current.metric}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-tight">
                {current.step}: {current.title}
              </h3>
              <p className="text-sm text-[#E2E8F0] font-medium leading-relaxed max-w-2xl">
                {current.shortDesc}
              </p>
            </div>

            {/* Key Deliverables Bullet Points */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider">
                Key Strategic Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {current.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                    <p className="text-xs text-[#E2E8F0] font-medium leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action & Metric Callout Column */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-black/40 border border-white/15 space-y-6 text-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mx-auto shadow-inner">
              <IconComponent className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                DELIVERABLE ACCELERATOR
              </span>
              <h4 className="text-lg font-extrabold font-display text-white">
                {current.metric}
              </h4>
            </div>

            <button
              onClick={() => onOpenAudit && onOpenAudit(current.title)}
              className="w-full py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#55D9CC] text-[#06182D] font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-[#38BDF8]"
            >
              <span>Initiate Phase {current.id} Audit</span>
              <ArrowRight className="w-4 h-4 text-[#06182D]" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
