import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Download, ShieldCheck, ArrowRight, BookOpen, Layers, TrendingUp, Filter, FileCheck, FileCode, Sparkles } from 'lucide-react';

const resourcesData = [
  {
    id: 'erm-benchmark-2026',
    category: 'EBOOKS & GUIDES',
    type: 'Executive Guide',
    readTime: '8 min read',
    title: '2026 Enterprise Risk Management & Board Telemetry Guide',
    desc: 'Actionable guidance for CXOs and Enterprise Boards on aligning COSO & ISO 31000 frameworks with real-time operational risk matrices.',
    downloadUrl: '#',
    icon: BookOpen,
    featured: true,
    tag: 'FEATURED EBOOK'
  },
  {
    id: 'cyber-isms-checklist',
    category: 'AUDIT PLAYBOOKS',
    type: 'Audit Playbook',
    readTime: '6 min read',
    title: 'ISO 27001 & Multi-Cloud Cyber Risk Governance Playbook',
    desc: 'Diagnostic roadmap for auditing third-party cloud infrastructure, ISMS compliance, and enterprise breach response readiness.',
    downloadUrl: '#',
    icon: Layers,
    featured: false,
    tag: 'PLAYBOOK'
  },
  {
    id: 'financial-liquidity-guide',
    category: 'DATASHEETS',
    type: 'Solution Datasheet',
    readTime: '5 min read',
    title: 'Executive Liquidity Stress-Testing & Credit Risk Datasheet',
    desc: 'Quantitative models for assessing counterparty risk, interest rate hedging strategies, and capital adequacy governance.',
    downloadUrl: '#',
    icon: TrendingUp,
    featured: false,
    tag: 'DATASHEET'
  },
  {
    id: 'fidic-cpwd-compliance',
    category: 'CASE STUDIES',
    type: 'Client Case Study',
    readTime: '7 min read',
    title: 'CPWD & FIDIC Mega-Infrastructure Risk & Dispute Mitigation Case Study',
    desc: 'Legal audit protocols for mitigating arbitration liabilities, claim escalations, and statutory compliance in large enterprise construction.',
    downloadUrl: '#',
    icon: FileCheck,
    featured: false,
    tag: 'CASE STUDY'
  },
  {
    id: 'tprm-vendor-audit',
    category: 'AUDIT PLAYBOOKS',
    type: 'Advisory Playbook',
    readTime: '9 min read',
    title: 'Third-Party Vendor Due Diligence & Supply Chain Continuity Playbook',
    desc: 'Establishing Tier-1 vendor risk assessments, SLA enforcement metrics, and supply chain vulnerability telemetry.',
    downloadUrl: '#',
    icon: FileCode,
    featured: false,
    tag: 'PLAYBOOK'
  },
  {
    id: 'fraud-red-flag-forensics',
    category: 'RESEARCH REPORTS',
    type: 'Research Whitepaper',
    readTime: '10 min read',
    title: 'Whistleblower Integrity & Corporate Red-Flag Detection Research',
    desc: 'Proactive anti-fraud measures, forensic investigation workflows, and corporate ethics channel protection architectures.',
    downloadUrl: '#',
    icon: Sparkles,
    featured: false,
    tag: 'RESEARCH'
  }
];

const categories = [
  'ALL RESOURCES',
  'EBOOKS & GUIDES',
  'AUDIT PLAYBOOKS',
  'DATASHEETS',
  'CASE STUDIES',
  'RESEARCH REPORTS'
];

export default function ResolverResourceHub({ onOpenAudit }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL RESOURCES');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resourcesData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'ALL RESOURCES' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResource = resourcesData.find((item) => item.featured);

  return (
    <div className="space-y-8">
      {/* Resolver Header Banner */}
      <div className="p-6 md:p-8 rounded-2xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white space-y-6 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-widest px-3 py-1 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30">
              RESOLVER ADVISORY MODEL
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white">
              Risk Management & Security Resource Hub
            </h2>
            <p className="text-sm text-[#E2E8F0] font-medium max-w-2xl">
              Explore playbooks, eBooks, datasheets, case studies, and executive benchmark reports curated by Srajai Tech principal strategists.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/20 text-xs text-white placeholder-gray-300 focus:outline-none focus:border-[#38BDF8] transition-colors shadow-sm font-medium"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-white/15">
          <Filter className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-[#38BDF8] text-[#06182D] border-[#38BDF8] font-extrabold shadow-sm'
                  : 'bg-black/30 text-[#CBD5E1] border-white/10 hover:border-[#38BDF8]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Resource Banner - SOLID WHITE PREMIUM BOX */}
      {featuredResource && selectedCategory === 'ALL RESOURCES' && !searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 md:p-8 text-slate-900 bg-white border border-slate-200 hover:border-[#008579] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        >
          {/* Top Brand Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579]" />

          <div className="lg:col-span-8 space-y-4 relative z-10">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono font-extrabold text-[#06182D] uppercase tracking-wider px-3 py-1 rounded-md bg-[#FFB340] shadow-sm">
                {featuredResource.tag}
              </span>
              <span className="text-xs font-mono text-[#008579] font-extrabold">{featuredResource.readTime}</span>
            </div>

            <h3 className="text-xl md:text-3xl font-extrabold font-display text-[#06182D] leading-tight group-hover:text-[#008579] transition-colors">
              {featuredResource.title}
            </h3>

            <p className="text-sm text-slate-700 font-semibold leading-relaxed max-w-2xl">
              {featuredResource.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAudit}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#008579] via-[#00A896] to-[#008579] hover:brightness-110 text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Executive eBook</span>
                <ArrowRight className="w-4 h-4 text-[#FFB340]" />
              </button>
              <span className="text-xs font-mono text-[#008579] font-bold flex items-center space-x-1.5 uppercase">
                <ShieldCheck className="w-4 h-4 text-[#008579]" />
                <span>CONFIDENTIAL BOARD ADVISORY</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3D Executive eBook Cover */}
          <div className="lg:col-span-4 flex justify-center relative z-10">
            <div className="w-48 sm:w-52 aspect-[3/4] rounded-xl border border-slate-200 shadow-xl overflow-hidden relative bg-slate-900 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/images/ebook_cover.png"
                alt="2026 Enterprise Risk Management & Board Telemetry Guide eBook"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Resource Cards Grid - BLUE ANIMATED BOXES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredResources.map((res, index) => {
            const IconComponent = res.icon || FileText;

            return (
              <motion.div
                key={res.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="p-6 rounded-2xl cursor-pointer border border-[#38BDF8]/50 hover:border-[#55D9CC] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-[#092039] via-[#0F355E] to-[#071A2E] text-white shadow-[0_6px_25px_rgba(14,165,233,0.22)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.5)] animate-blue-glow"
              >
                {/* Animated Shimmer Beam across Top */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-75 group-hover:opacity-100 group-hover:via-[#55D9CC] animate-shimmer-blue" />

                {/* Animated Blue Ambient Radial Light */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#38BDF8]/20 rounded-full blur-2xl group-hover:bg-[#38BDF8]/40 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#008579]/20 rounded-full blur-2xl group-hover:bg-[#55D9CC]/30 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Top Badges & Category Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-[#06182D] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-[0_0_12px_rgba(56,189,248,0.35)]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#38BDF8] bg-[#38BDF8]/20 px-2.5 py-0.5 rounded-md border border-[#38BDF8]/40 shadow-[0_0_10px_rgba(56,189,248,0.25)] group-hover:border-[#38BDF8] transition-all">
                        {res.tag}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-[#94A3B8] font-semibold group-hover:text-[#E2E8F0] transition-colors">
                      {res.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-extrabold font-display text-white group-hover:text-[#38BDF8] transition-colors duration-300 leading-snug">
                    {res.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-[#E2E8F0] leading-relaxed font-normal line-clamp-3 group-hover:text-white transition-colors duration-300">
                    {res.desc}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-[#38BDF8] group-hover:text-[#55D9CC] uppercase font-extrabold tracking-wider transition-colors">
                    {res.type}
                  </span>
                  <button
                    onClick={onOpenAudit}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#008579] via-[#00A896] to-[#38BDF8] hover:brightness-110 text-xs font-extrabold text-white transition-all duration-300 shadow-md hover:shadow-cyan-500/40 cursor-pointer"
                  >
                    <span>Download</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-10 glass-panel rounded-2xl p-6 border border-white/10 space-y-2 bg-[#0A1725] text-white">
          <BookOpen className="w-8 h-8 text-[#55D9CC] mx-auto" />
          <h4 className="text-base font-bold text-white">No Matching Resources Found</h4>
          <p className="text-xs text-[#CBD5E1] font-mono">
            Try adjusting your search criteria or selecting a different category tab.
          </p>
        </div>
      )}
    </div>
  );
}
