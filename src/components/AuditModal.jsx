import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Lock, Send, User, Mail, Building, Phone, Layers } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    primaryPractice: 'Enterprise Risk Management (ERM)',
    scopeDetails: ''
  });

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
          className="relative w-full max-w-2xl bg-white dark:bg-[#0F2342] border border-slate-200 dark:border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008579] via-[#00437E] to-[#FFB340]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-[#008579] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-[#008579] dark:text-[#46A095] text-xs font-bold uppercase tracking-wider font-sans">
                  <ShieldCheck className="w-4 h-4 text-[#008579] dark:text-[#46A095]" />
                  <span>CONFIDENTIAL ENTERPRISE AUDIT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0F3161] dark:text-white">
                  Schedule Executive Diagnostic Audit
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-gray-200">
                  Provide your organizational parameters to initiate a senior advisory assessment with Guddeti Sanjay Raj.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-sans uppercase tracking-wider text-[#0F3161] dark:text-gray-200">
                      FULL NAME *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Executive Name"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-sans uppercase tracking-wider text-[#0F3161] dark:text-gray-200">
                      WORK EMAIL *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-sans uppercase tracking-wider text-[#0F3161] dark:text-gray-200">
                      COMPANY NAME *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Enterprise Organization"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-sans uppercase tracking-wider text-[#0F3161] dark:text-gray-200">
                      PHONE NUMBER
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold font-sans uppercase tracking-wider text-[#0F3161] dark:text-gray-200">
                    PRIMARY RISK DOMAIN
                  </label>
                  <select
                    value={formData.primaryPractice}
                    onChange={(e) => setFormData({ ...formData, primaryPractice: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095]"
                  >
                    <option value="Enterprise Risk Management (ERM)">Enterprise Risk Management (ERM)</option>
                    <option value="Cyber & ISMS Governance">Cyber & ISMS Governance</option>
                    <option value="Operational Risk & BCP">Operational Risk & BCP Architecture</option>
                    <option value="Financial & Credit Stress-Testing">Financial & Credit Stress-Testing</option>
                    <option value="FIDIC & CPWD Legal Compliance">FIDIC & CPWD Legal Compliance</option>
                    <option value="Third-Party Risk (TPRM)">Third-Party Risk & Vendor Due Diligence</option>
                    <option value="Corporate Fraud & Whistleblower">Corporate Fraud & Forensic Investigations</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold font-sans uppercase tracking-wider text-[#0F3161] dark:text-gray-200">
                    AUDIT OBJECTIVES / SCOPE DETAILS
                  </label>
                  <textarea
                    rows="3"
                    value={formData.scopeDetails}
                    onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                    placeholder="Provide context regarding risk matrices, compliance mandates, or timeline expectations..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-sans text-slate-500 dark:text-gray-400 font-semibold flex items-center space-x-1">
                    <Lock className="w-3.5 h-3.5 text-[#008579] dark:text-[#46A095]" />
                    <span>NDAs Executed On-Request</span>
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center space-x-2"
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
