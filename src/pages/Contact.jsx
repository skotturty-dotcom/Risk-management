import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, Phone, Building, MessageSquare } from 'lucide-react';

const contactInfo = {
  email: 'srajaitech@gmail.com',
  phone: '+91 9182119045',
  whatsapp: '919182119045',
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [gmailUrl, setGmailUrl] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `New Enterprise Advisory Consultation Request - ${formData.company || formData.name}`;
    const body = `Hello Srajai Tech Advisory Team,

I would like to request a Confidential Advisory Consultation with the following details:

- Full Name: ${formData.name}
- Corporate Email: ${formData.email}
- Company Name: ${formData.company}
- Phone Number: ${formData.phone || 'N/A'}
- Primary Risk Practice: ${formData.practice}

Message / Project Scope:
${formData.message || 'N/A'}

Best regards,
${formData.name}`;

    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=srajaitech@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailto = `mailto:srajaitech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setGmailUrl(gmail);
    setMailtoUrl(mailto);

    // Auto open email composer window / app immediately on user click
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (typeof window !== 'undefined' && window.innerWidth <= 768);

    if (isMobile) {
      // On mobile devices, open native mail app directly with pre-filled composed email
      const a = document.createElement('a');
      a.href = mailto;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      try {
        const opened = window.open(gmail, '_blank');
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
          window.location.href = mailto;
        }
      } catch (e) {
        console.warn("Could not auto-open tab:", e);
        window.location.href = mailto;
      }
    }

    try {
      await fetch("https://formsubmit.co/ajax/srajaitech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          "Full Name": formData.name,
          "Corporate Email": formData.email,
          "Company Name": formData.company,
          "Phone Number": formData.phone || "N/A",
          "Primary Risk Practice": formData.practice,
          "Message / Project Scope": formData.message || "N/A"
        })
      });
    } catch (err) {
      console.error("FormSubmit error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
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

        <p className="text-[#06182D] text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
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

            <p className="text-sm md:text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
              Reach out to our principal strategists for diagnostic audits, corporate board presentations, or customized risk framework implementations.
            </p>

            <div className="space-y-6 pt-2">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0 mt-1 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold font-mono uppercase text-[#55D9CC] tracking-wider block">
                    DIRECT ADVISORY EMAIL
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base md:text-lg font-extrabold text-[#55D9CC] hover:text-[#38BDF8] transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0 mt-1 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold font-mono uppercase text-[#55D9CC] tracking-wider block">
                    PHONE & WHATSAPP
                  </span>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="text-base md:text-lg font-extrabold text-[#55D9CC] hover:text-[#38BDF8] transition-colors block"
                  >
                    {contactInfo.phone}
                  </a>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-[#008579] text-white hover:bg-[#00685E] transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-[#25D366] text-white hover:bg-[#1DA851] transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0 mt-1 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold font-mono uppercase text-[#55D9CC] tracking-wider block">
                    HEADQUARTERS
                  </span>
                  <p className="text-base md:text-lg font-extrabold text-white">
                    {contactInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.30)] flex items-center justify-center text-[#55D9CC] shrink-0 mt-1 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold font-mono uppercase text-[#55D9CC] tracking-wider block">
                    ADVISORY OPERATING HOURS
                  </span>
                  <p className="text-base md:text-lg font-extrabold text-white">
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#06152B] border border-dashed border-[rgba(72,214,201,0.25)] text-xs font-mono text-[#CBD5E1] font-medium">
              <strong className="text-[#55D9CC]">NOTE:</strong> Direct phone/WhatsApp and email requests receive priority response within 24 hours.
            </div>
          </div>
        </div>

        {/* Right Column: High-Contrast Corporate Advisory Form */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 rounded-3xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white shadow-2xl space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold font-display text-white">
                    Schedule a Senior Advisory Session
                  </h3>
                  <p className="text-sm font-medium text-[#CBD5E1]">
                    Fill in your corporate details to request an executive diagnostic audit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-mono text-[#55D9CC] tracking-wider block">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Executive Name"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-mono text-[#55D9CC] tracking-wider block">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-mono text-[#55D9CC] tracking-wider block">
                      COMPANY NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Enterprise Organization"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase font-mono text-[#55D9CC] tracking-wider block">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase font-mono text-[#55D9CC] tracking-wider block">
                    SELECT PRIMARY RISK PRACTICE
                  </label>
                  <select
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors"
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
                  <label className="text-xs font-extrabold uppercase font-mono text-[#55D9CC] tracking-wider block">
                    MESSAGE / PROJECT SCOPE
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your organizational risk appetite, compliance objectives, or diagnostic audit goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#55D9CC] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] hover:from-[#00685E] hover:to-[#00685E] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-teal-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4 text-[#FFB340]" />
                  <span>{isSubmitting ? 'Transmitting Request to Email...' : 'Request a Confidential Consultation'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#55D9CC] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10 text-[#55D9CC]" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-white">
                  Consultation Request Transmitted & Mail App Opened!
                </h3>
                <p className="text-gray-200 text-base font-medium max-w-md mx-auto leading-relaxed">
                  Your details have been transmitted to <strong className="text-[#55D9CC]">srajaitech@gmail.com</strong> and pre-filled into your mail application.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4 text-[#FFB340]" />
                    <span>Open Native Mail App</span>
                  </a>
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 border border-slate-500"
                  >
                    <Mail className="w-4 h-4 text-[#55D9CC]" />
                    <span>Open Gmail Web Compose</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md border border-slate-600"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
