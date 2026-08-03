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
        <span className="text-xs font-mono font-extrabold text-[#008579] uppercase tracking-widest px-3.5 py-1 rounded bg-teal-50 border border-teal-200 inline-block shadow-sm">
          CAREERS & HIRING
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#06182D]">
          Join Srajai Tech Advisory Practice
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-700 font-semibold leading-relaxed">
          Build high-impact enterprise risk frameworks alongside senior risk strategists and board advisers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Featured Openings list */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 text-white space-y-2 shadow-lg">
            <h3 className="text-xs sm:text-sm font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider">
              ACTIVE EXECUTIVE OPENINGS
            </h3>
            <p className="text-xs text-[#E2E8F0] font-medium">
              Select a position to pre-fill the candidate application.
            </p>
          </div>

          <div className="space-y-4">
            {homeOpenRoles.map((role) => (
              <motion.div
                key={role.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedRole(role.title)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border shadow-xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white ${
                  selectedRole === role.title
                    ? 'border-2 border-[#38BDF8] ring-4 ring-[#38BDF8]/20'
                    : 'border-[#38BDF8]/40 hover:border-[#38BDF8]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#38BDF8] bg-[#38BDF8]/15 px-2.5 py-0.5 rounded border border-[#38BDF8]/30 uppercase">
                    {role.exp}
                  </span>
                  <span className="text-xs font-mono text-[#38BDF8] font-bold">
                    {role.dept}
                  </span>
                </div>

                <h4 className="text-lg font-extrabold font-display text-[#38BDF8] mt-2">
                  {role.title}
                </h4>

                <div className="flex items-center space-x-3 text-xs font-mono text-[#E2E8F0] mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {role.loc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Application Form Container */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white shadow-2xl space-y-6">
            <div className="space-y-1 border-b border-white/15 pb-4">
              <span className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                EXECUTIVE CANDIDATE FORM
              </span>
              <h3 className="text-2xl font-extrabold font-display text-[#38BDF8]">
                Apply for {selectedRole}
              </h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase block">
                      Resume / LinkedIn Profile URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={form.link}
                      onChange={(e) => setForm({ ...form, link: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#55D9CC] text-[#06182D] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
                >
                  <span>Submit Candidate Application</span>
                  <Send className="w-4 h-4 text-[#06182D]" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#38BDF8] mx-auto" />
                <h4 className="text-xl font-extrabold text-[#38BDF8]">
                  Candidate Profile Submitted!
                </h4>
                <p className="text-xs text-[#E2E8F0] font-medium">
                  We have logged your application for <strong className="text-white">{selectedRole}</strong>. Our team will review your profile shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
