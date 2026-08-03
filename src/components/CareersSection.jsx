import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, Building2 } from 'lucide-react';

const homeOpenRoles = [
  {
    id: 'erm-lead',
    title: 'Senior Enterprise Risk Strategist',
    dept: 'Risk Advisory',
    loc: 'Hyderabad / Hybrid',
    exp: '6 - 10+ Yrs'
  },
  {
    id: 'cyber-lead',
    title: 'Cyber Risk & ISMS Lead Auditor',
    dept: 'Cybersecurity',
    loc: 'Hyderabad / Remote',
    exp: '4 - 8 Yrs'
  },
  {
    id: 'bcp-lead',
    title: 'Operational Resilience & BCP Lead',
    dept: 'Ops Risk & BCP',
    loc: 'Remote (India)',
    exp: '3 - 6 Yrs'
  }
];

export default function CareersSection() {
  const [selectedRole, setSelectedRole] = useState(homeOpenRoles[0].title);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', link: '' });

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="careers" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-extrabold text-[#008579] uppercase tracking-widest px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 inline-flex items-center space-x-2 shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-[#008579]" />
          <span>CAREERS & EXECUTIVE HIRING</span>
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#06182D] leading-tight">
          Join Srajai Tech Advisory Practice
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Build high-impact enterprise risk frameworks alongside senior risk strategists and board advisers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Active Executive Openings list */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#06182D] via-[#0B2545] to-[#13315C] border border-[#38BDF8]/40 text-white space-y-2 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />
            <h3 className="text-xs sm:text-sm font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider pt-1">
              ACTIVE EXECUTIVE OPENINGS
            </h3>
            <p className="text-xs text-[#E2E8F0] font-medium">
              Click any position below to select it for the application form.
            </p>
          </div>

          <div className="space-y-3">
            {homeOpenRoles.map((role) => {
              const isSelected = selectedRole === role.title;

              return (
                <motion.div
                  key={role.id}
                  whileHover={{ y: -3, scale: 1.01 }}
                  onClick={() => setSelectedRole(role.title)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border shadow-lg relative overflow-hidden group ${
                    isSelected
                      ? 'border-2 border-[#38BDF8] bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white ring-4 ring-[#38BDF8]/20 shadow-2xl scale-[1.01]'
                      : 'border-slate-200 hover:border-[#38BDF8] bg-white hover:bg-slate-50 text-slate-900 shadow-md'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#38BDF8]" />
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                        isSelected
                          ? 'text-[#38BDF8] bg-[#38BDF8]/15 border-[#38BDF8]/30'
                          : 'text-[#008579] bg-teal-50 border-teal-200'
                      }`}
                    >
                      {role.exp}
                    </span>
                    <span
                      className={`text-xs font-mono font-extrabold uppercase ${
                        isSelected ? 'text-[#38BDF8]' : 'text-[#008579]'
                      }`}
                    >
                      {role.dept}
                    </span>
                  </div>

                  <h4
                    className={`text-base sm:text-lg font-extrabold font-display mt-2.5 leading-snug transition-colors ${
                      isSelected
                        ? 'text-white group-hover:text-[#55D9CC]'
                        : 'text-[#06182D] group-hover:text-[#008579]'
                    }`}
                  >
                    {role.title}
                  </h4>

                  <div
                    className={`flex items-center space-x-3 text-xs font-mono mt-2 ${
                      isSelected ? 'text-[#E2E8F0]' : 'text-slate-600 font-medium'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin
                        className={`w-3.5 h-3.5 ${
                          isSelected ? 'text-[#38BDF8]' : 'text-[#008579]'
                        }`}
                      />
                      {role.loc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Executive Candidate Application Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl border-2 border-teal-500/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white shadow-2xl space-y-6 relative overflow-hidden">
            {/* Top Multi-Color Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008579] via-[#38BDF8] to-[#FFB340]" />

            <div className="space-y-2 border-b border-white/15 pb-5 pt-1">
              <span className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-widest px-3 py-1 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30 inline-block shadow-sm">
                EXECUTIVE CANDIDATE FORM
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-tight">
                Apply for {selectedRole}
              </h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleApply} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                      Resume / LinkedIn Profile URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={form.link}
                      onChange={(e) => setForm({ ...form, link: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#38BDF8] hover:bg-[#55D9CC] text-[#06182D] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 cursor-pointer border border-[#38BDF8] mt-2"
                >
                  <span>Submit Candidate Application</span>
                  <Send className="w-4 h-4 text-[#06182D]" />
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#38BDF8] mx-auto animate-bounce" />
                <h4 className="text-2xl font-extrabold text-[#38BDF8]">
                  Candidate Profile Submitted!
                </h4>
                <p className="text-sm text-[#E2E8F0] font-medium max-w-md mx-auto leading-relaxed">
                  We have successfully received your profile for <strong className="text-white">{selectedRole}</strong>. Our executive hiring board will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
