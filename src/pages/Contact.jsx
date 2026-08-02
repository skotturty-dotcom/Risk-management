import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, Phone, Building } from 'lucide-react';

const contactInfo = {
  email: 'Aegisrisk@gmail.com',
  location: 'Hyderabad, Telangana, India',
  hours: 'Monday – Friday, 09:00 – 18:00 IST'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    practice: 'Enterprise Risk Management (ERM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-[#008579] dark:text-[#46A095] text-xs md:text-sm font-bold uppercase tracking-wider font-sans">
          <ShieldCheck className="w-4 h-4 text-[#008579] dark:text-[#46A095]" />
          <span>ENGAGE PRINCIPAL RISK STRATEGISTS</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold font-display text-[#0F3161] dark:text-white leading-tight">
          Request an Enterprise Audit <br />
          <span className="text-gradient-emerald">& Advisory Consultation</span>
        </h1>

        <p className="text-slate-700 dark:text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
          Partner with Srajai Tech to evaluate, strengthen, and optimize your organization's risk profile. Our senior risk strategists deliver actionable governance frameworks.
        </p>
      </div>

      {/* Main Grid: Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Advisory Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-teal-500/30 space-y-7 shadow-xl">
            <h3 className="text-2xl font-extrabold font-display text-[#0F3161] dark:text-white">
              Direct Advisory Channels
            </h3>

            <p className="text-sm md:text-base text-slate-700 dark:text-gray-200 font-medium leading-relaxed">
              Reach out to our principal strategists for diagnostic audits, corporate board presentations, or customized risk framework implementations.
            </p>

            <div className="space-y-6 pt-2">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-[#008579] dark:text-[#46A095] shrink-0 mt-1 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold font-sans uppercase text-slate-500 dark:text-gray-400 tracking-wider block">
                    DIRECT ADVISORY EMAIL
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base md:text-lg font-extrabold text-[#0F3161] dark:text-white hover:text-[#008579] dark:hover:text-[#46A095] transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-[#008579] dark:text-[#46A095] shrink-0 mt-1 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold font-sans uppercase text-slate-500 dark:text-gray-400 tracking-wider block">
                    HEADQUARTERS
                  </span>
                  <p className="text-base md:text-lg font-extrabold text-[#0F3161] dark:text-white">
                    {contactInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-[#008579] dark:text-[#46A095] shrink-0 mt-1 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold font-sans uppercase text-slate-500 dark:text-gray-400 tracking-wider block">
                    ADVISORY OPERATING HOURS
                  </span>
                  <p className="text-base md:text-lg font-extrabold text-[#0F3161] dark:text-white">
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-sans text-slate-600 dark:text-gray-400 font-medium">
              <strong className="text-[#008579] dark:text-[#46A095]">NOTE:</strong> Direct email requests receive priority response within 24 hours.
            </div>
          </div>
        </div>

        {/* Right Column: High-Contrast Corporate Advisory Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-teal-500/30 shadow-xl space-y-6 bg-white dark:bg-[#0F2342]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold font-display text-[#0F3161] dark:text-white">
                    Schedule a Senior Advisory Session
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-gray-300">
                    Fill in your corporate details to request an executive diagnostic audit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-sans text-[#0F3161] dark:text-gray-200 tracking-wider block">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Executive Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-sans text-[#0F3161] dark:text-gray-200 tracking-wider block">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-sans text-[#0F3161] dark:text-gray-200 tracking-wider block">
                      COMPANY NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Enterprise Organization"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-sans text-[#0F3161] dark:text-gray-200 tracking-wider block">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase font-sans text-[#0F3161] dark:text-gray-200 tracking-wider block">
                    SELECT PRIMARY RISK PRACTICE
                  </label>
                  <select
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] transition-colors"
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

                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase font-sans text-[#0F3161] dark:text-gray-200 tracking-wider block">
                    MESSAGE / PROJECT SCOPE
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your organizational risk appetite, compliance objectives, or diagnostic audit goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#06152B] border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#008579] dark:focus:border-[#46A095] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-teal-600/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-[#FFB340]" />
                  <span>Submit Enterprise Advisory Request</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[#008579] dark:text-[#46A095] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-[#0F3161] dark:text-white">
                  Advisory Request Received
                </h3>
                <p className="text-slate-700 dark:text-gray-200 text-base font-medium max-w-md mx-auto">
                  Thank you for contacting Srajai Tech. A principal strategist will review your organizational scope and reach out within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-[#0F3161] dark:text-white font-extrabold text-xs uppercase tracking-wider"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
