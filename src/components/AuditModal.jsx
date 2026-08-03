import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Lock, User, Mail, Building, Phone } from 'lucide-react';

export default function AuditModal({ isOpen, onClose, selectedPractice }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    primaryPractice: 'Enterprise Risk Management (ERM)',
    scopeDetails: ''
  });

  useEffect(() => {
    if (selectedPractice) {
      const practiceName = typeof selectedPractice === 'string' ? selectedPractice : selectedPractice.title;
      setFormData((prev) => ({ ...prev, primaryPractice: practiceName }));
    }
  }, [selectedPractice]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06152B]/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0A1725] text-white border border-[rgba(72,214,201,0.18)] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008579] via-[#00A896] to-[#FFB340]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)] text-[#55D9CC] text-xs font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#55D9CC]" />
                  <span>CONFIDENTIAL ENTERPRISE AUDIT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  Schedule Executive Diagnostic Audit
                </h3>
                <p className="text-sm font-medium text-[#CBD5E1]">
                  Provide your organizational parameters to initiate a senior advisory assessment with Guddeti Sanjay Raj.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#55D9CC] block">
                      FULL NAME *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Executive Name"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder-slate-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#55D9CC] block">
                      WORK EMAIL *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder-slate-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#55D9CC] block">
                      COMPANY NAME *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Enterprise Organization"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder-slate-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#55D9CC] block">
                      PHONE NUMBER
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder-slate-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#55D9CC] block">
                    PRIMARY RISK DOMAIN
                  </label>
                  <input
                    type="text"
                    value={formData.primaryPractice}
                    onChange={(e) => setFormData({ ...formData, primaryPractice: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#55D9CC] block">
                    AUDIT OBJECTIVES / SCOPE DETAILS
                  </label>
                  <textarea
                    rows="3"
                    value={formData.scopeDetails}
                    onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                    placeholder="Provide context regarding risk matrices, compliance mandates, or timeline expectations..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder-slate-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-sans text-[#CBD5E1] font-medium flex items-center space-x-1">
                    <Lock className="w-3.5 h-3.5 text-[#55D9CC]" />
                    <span>NDAs Executed On-Request</span>
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] hover:brightness-110 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Request Audit</span>
                    <ArrowRight className="w-4 h-4 text-[#FFB340]" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[#008579] dark:text-[#46A095] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold font-display text-[#0F3161] dark:text-white">
                Audit Request Submitted
              </h3>
              <p className="text-slate-700 dark:text-gray-200 text-sm font-medium max-w-sm mx-auto">
                Your parameters have been transmitted to Guddeti Sanjay Raj. We will contact you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-[#0F3161] dark:text-white font-extrabold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
