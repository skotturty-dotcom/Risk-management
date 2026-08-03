import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, ArrowRight, CheckCircle2, Building2, Landmark, Server, Cloud, HeartPulse, Pill, Factory, ShoppingCart, Wifi, Zap, Truck, Car, Scale, GraduationCap, Plane, Film, Sprout } from 'lucide-react';

const iconMap = {
  Landmark,
  ShieldCheck,
  Server,
  Cloud,
  HeartPulse,
  Pill,
  Factory,
  ShoppingCart,
  Wifi,
  Zap,
  Truck,
  Car,
  Building2,
  Scale,
  GraduationCap,
  Plane,
  Film,
  Sprout
};

export default function SectorModal({ sector, onClose, onOpenAudit }) {
  if (!sector) return null;
  const Icon = iconMap[sector.icon] || Building2;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06152B]/75 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0F2342] p-7 sm:p-9 rounded-3xl border border-teal-500/40 shadow-2xl z-10 overflow-hidden text-slate-900 dark:text-white max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 rounded-xl bg-slate-100 dark:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#008579]/10 dark:bg-teal-500/10 border border-[#008579]/30 dark:border-teal-400/30 flex items-center justify-center text-[#008579] dark:text-[#46A095] shrink-0 shadow-md">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-extrabold text-[#008579] dark:text-[#46A095] uppercase px-2.5 py-0.5 rounded bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30">
                  SECTOR {sector.id.toString().padStart(2, '0')}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase font-bold">ENTERPRISE SCOPE</span>
              </div>
              <h3 className="text-2xl font-extrabold font-display text-[#0F3161] dark:text-white mt-1">
                {sector.name}
              </h3>
            </div>
          </div>

          {/* Content Body */}
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-200 dark:border-white/10">
              <span className="text-xs font-mono font-bold text-[#FFB340] uppercase tracking-wider block mb-1">
                PRIMARY RISK CATEGORY
              </span>
              <p className="text-base font-extrabold font-heading text-[#0F3161] dark:text-white">
                {sector.riskCategory}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-gray-400 tracking-wider mb-2">
                Executive Advisory Overview
              </h4>
              <p className="text-sm text-[#06182D] dark:text-white leading-relaxed font-semibold">
                {sector.details}
              </p>
            </div>

            {sector.kris && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-[#008579] dark:text-[#46A095] tracking-wider mb-3">
                  Key Risk Indicators (KRIs) Monitored:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sector.kris.map((kri, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-lg bg-white dark:bg-[#132B4F] border border-slate-200 dark:border-white/10 text-xs font-extrabold text-[#06182D] dark:text-white">
                      <CheckCircle2 className="w-4 h-4 text-[#008579] dark:text-[#46A095] shrink-0" />
                      <span>{kri}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-500 dark:text-gray-400">
                Srajai Tech Sector Governance Ready
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenAudit();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#008579] to-[#0F3161] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <span>Request {sector.name} Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
