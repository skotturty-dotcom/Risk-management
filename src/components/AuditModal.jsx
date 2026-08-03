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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/srajaitech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Executive Diagnostic Audit Request - ${formData.companyName || formData.fullName}`,
          _template: "table",
          "Executive Name": formData.fullName,
          "Work Email": formData.workEmail,
          "Company Name": formData.companyName,
          "Phone Number": formData.phone || "N/A",
          "Primary Risk Domain": formData.primaryPractice,
          "Scope / Objectives": formData.scopeDetails || "N/A"
        })
      });
    } catch (err) {
      console.error("AuditModal email submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleDirectWhatsApp = () => {
    const message = `Hello Guddeti Sanjay Raj,\n\nI would like to request an Executive Diagnostic Audit for my organization.\n\nPrimary Risk Domain: ${formData.primaryPractice}`;
    const whatsappUrl = `https://wa.me/919182119045?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

        {/* Modal Container - Bright Crisp White Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white text-slate-900 border-2 border-[#008579] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header Multi-Color Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6 pt-1">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#008579] text-xs font-mono font-extrabold uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#008579]" />
                  <span>CONFIDENTIAL ENTERPRISE AUDIT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#06182D]">
                  Schedule Executive Diagnostic Audit
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  Provide your organizational parameters to initiate a senior advisory assessment with Guddeti Sanjay Raj.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#008579] block">
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#008579] border border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#008579] block">
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#008579] border border-slate-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#008579] block">
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#008579] border border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#008579] block">
                      PHONE NUMBER
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#008579] border border-slate-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#008579] block">
                    PRIMARY RISK DOMAIN
                  </label>
                  <input
                    type="text"
                    value={formData.primaryPractice}
                    onChange={(e) => setFormData({ ...formData, primaryPractice: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#008579] border border-slate-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#008579] block">
                    AUDIT OBJECTIVES / SCOPE DETAILS
                  </label>
                  <textarea
                    rows="3"
                    value={formData.scopeDetails}
                    onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                    placeholder="Provide context regarding risk matrices, compliance mandates, or timeline expectations..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#008579] border border-slate-300 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs font-sans text-slate-600 font-medium flex items-center space-x-1">
                    <Lock className="w-3.5 h-3.5 text-[#008579]" />
                    <span>NDAs Executed On-Request</span>
                  </span>

                  <div className="flex items-center space-x-2.5 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
                    >
                      <span>WhatsApp Audit</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 cursor-pointer transition-all border border-[#008579]"
                    >
                      <span>Submit & Open WhatsApp</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-[#008579] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 text-[#008579]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#06182D]">
                  Opening WhatsApp Chat...
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-semibold max-w-sm mx-auto leading-relaxed">
                  Your audit parameters have been pre-filled. Connect directly with Guddeti Sanjay Raj on WhatsApp (+91 91821 19045).
                </p>
              </div>
              <div className="flex justify-center space-x-3">
                <a
                  href={`https://wa.me/919182119045?text=${encodeURIComponent(
                    `Hello Guddeti Sanjay Raj,\n\nI would like to schedule an Executive Diagnostic Audit.\n\nName: ${formData.fullName}\nEmail: ${formData.workEmail}\nCompany: ${formData.companyName}\nDomain: ${formData.primaryPractice}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all inline-flex items-center space-x-2"
                >
                  <span>Re-open WhatsApp Chat</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#06182D] hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all"
                >
                  CLOSE WINDOW
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
