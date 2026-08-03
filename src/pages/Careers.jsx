import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, UserCheck, ShieldCheck, Send, CheckCircle2, ArrowRight, Upload, MapPin, Clock, Award, Building2 } from 'lucide-react';

const openPositions = [
  {
    id: 'erm-lead',
    title: 'Senior Enterprise Risk Management (ERM) Strategist',
    department: 'Executive Risk Advisory',
    location: 'Hyderabad, India (Hybrid)',
    type: 'Full-Time',
    exp: '6 - 10+ Years',
    badge: 'HIGH PRIORITY',
    desc: 'Lead COSO & ISO 31000 diagnostic audits, formulate corporate risk appetite statements, and design board telemetry dashboards for enterprise clients.'
  },
  {
    id: 'cyber-auditor',
    title: 'Cyber Risk & ISMS Lead Auditor',
    department: 'Cyber Risk & Information Security',
    location: 'Hyderabad / Remote',
    type: 'Full-Time',
    exp: '4 - 8 Years',
    badge: 'FEATURED',
    desc: 'Conduct ISO 27001 / SOC2 audits, vulnerability assessments, ransomware incident readiness evaluations, and cloud security governance.'
  },
  {
    id: 'bcp-consultant',
    title: 'Operational Resilience & BCP Consultant',
    department: 'Operational Risk & Business Continuity',
    location: 'Remote (India)',
    type: 'Full-Time',
    exp: '3 - 6 Years',
    badge: 'ACTIVE OPENING',
    desc: 'Develop Business Impact Analyses (BIA), RCSA frameworks, crisis response runbooks, and disaster recovery simulation tests.'
  },
  {
    id: 'tprm-analyst',
    title: 'Third-Party Risk (TPRM) Advisory Lead',
    department: 'Vendor & Supply Chain Risk',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    exp: '4 - 7 Years',
    badge: 'ACTIVE OPENING',
    desc: 'Evaluate vendor risk posture, execute CPWD/FIDIC legal compliance reviews, and construct automated vendor scorecard metrics.'
  }
];

export default function Careers({ onOpenAudit }) {
  const [selectedRole, setSelectedRole] = useState(openPositions[0].title);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: openPositions[0].title,
    experience: '5-8 Years',
    portfolioUrl: '',
    coverNote: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs md:text-sm font-extrabold uppercase tracking-wider shadow-sm font-mono">
            <Briefcase className="w-4 h-4 text-[#38BDF8]" />
            <span>CAREERS & EXECUTIVE HIRING</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-[#06182D] dark:text-white leading-tight">
            Shape the Future of <br />
            <span className="text-[#008579] dark:text-[#55D9CC]">Enterprise Risk Intelligence</span>
          </h1>

          <p className="text-[#06182D] dark:text-[#CBD5E1] text-lg md:text-xl leading-relaxed font-semibold max-w-3xl">
            Join Srajai Tech's elite risk advisory team. We collaborate directly with CXOs and corporate boards to protect capital, safeguard data infrastructure, and build resilient enterprises.
          </p>
        </div>
      </section>

      {/* Why Join Us Cards */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 shadow-2xl text-white space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold font-display text-[#38BDF8]">
              Boardroom Impact
            </h3>
            <p className="text-sm text-[#E2E8F0] font-medium leading-relaxed">
              Advise senior directors, CEOs, and risk committees on high-stakes quantitative frameworks, COSO alignments, and strategic risk appetite.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 shadow-2xl text-white space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold font-display text-[#38BDF8]">
              Continuous Mastery
            </h3>
            <p className="text-sm text-[#E2E8F0] font-medium leading-relaxed">
              Master cross-disciplinary domains spanning ISO 31000, ISO 27001, CPWD/FIDIC legal compliance, TPRM, and advanced threat telemetry.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 shadow-2xl text-white space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold font-display text-[#38BDF8]">
              Executive Culture
            </h3>
            <p className="text-sm text-[#E2E8F0] font-medium leading-relaxed">
              Work in a meritocratic, high-autonomy advisory environment with competitive executive compensation, hybrid work, and fast-track leadership paths.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-mono font-extrabold text-[#008579] dark:text-[#55D9CC] uppercase tracking-widest px-3.5 py-1 rounded bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30">
            CURRENT ADVISORY OPENINGS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#06182D] dark:text-white">
            Explore Open Executive Roles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openPositions.map((pos) => (
            <motion.div
              key={pos.id}
              whileHover={{ y: -6, scale: 1.01 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] border border-[#38BDF8]/40 shadow-2xl text-white flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-extrabold text-[#38BDF8] bg-[#38BDF8]/15 px-3 py-1 rounded border border-[#38BDF8]/30 uppercase tracking-widest shadow-sm">
                    {pos.badge}
                  </span>
                  <span className="text-xs font-mono text-[#E2E8F0] font-bold">
                    {pos.exp}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold font-display text-[#38BDF8]">
                  {pos.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-[#CBD5E1]">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {pos.department}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {pos.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                    {pos.type}
                  </span>
                </div>

                <p className="text-sm text-[#E2E8F0] font-medium leading-relaxed">
                  {pos.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <a
                  href="#candidate-form"
                  onClick={() => setSelectedRole(pos.title)}
                  className="px-5 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#55D9CC] text-[#06182D] text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
                >
                  <span>Apply For Role</span>
                  <ArrowRight className="w-4 h-4 text-[#06182D]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Candidate Application Form Section */}
      <section id="candidate-form" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white shadow-2xl space-y-8">
          <div className="space-y-2 border-b border-white/15 pb-6">
            <span className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-widest block">
              EXECUTIVE HIRING APPLICATION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-[#38BDF8]">
              Submit Your Candidate Profile
            </h2>
            <p className="text-sm text-[#E2E8F0] font-medium">
              Selected role: <strong className="text-white">{selectedRole}</strong>
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                    Professional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                    Position Applied For
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                  >
                    {openPositions.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                    Total Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                  >
                    <option value="2-5 Years">2 - 5 Years</option>
                    <option value="5-8 Years">5 - 8 Years</option>
                    <option value="8-12 Years">8 - 12 Years</option>
                    <option value="12+ Years">12+ Years Executive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                  LinkedIn / Portfolio / Resume URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile or Google Drive Resume link"
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                  Cover Note / Executive Advisory Statement
                </label>
                <textarea
                  rows={4}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Briefly describe your experience in enterprise risk advisory, audits, or cybersecurity governance..."
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] border border-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl flex items-center justify-center space-x-2 cursor-pointer transition-all"
              >
                <span>Submit Executive Application</span>
                <Send className="w-4 h-4 text-[#FFB340]" />
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8] flex items-center justify-center text-[#38BDF8] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#38BDF8]">
                Application Received
              </h3>
              <p className="text-base text-[#E2E8F0] font-medium max-w-lg mx-auto">
                Thank you for applying for <strong className="text-white">{selectedRole}</strong>. Our talent acquisition committee will review your credentials and contact you within 48 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#38BDF8] text-[#06182D] font-extrabold text-xs uppercase tracking-wider hover:bg-[#55D9CC] transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
