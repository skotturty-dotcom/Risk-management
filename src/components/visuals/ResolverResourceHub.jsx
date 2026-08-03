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
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-[rgba(72,214,201,0.18)] bg-[#0A1725] text-white space-y-6 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#55D9CC] uppercase tracking-widest px-3 py-0.5 rounded bg-[rgba(40,199,183,0.10)] border border-[rgba(72,214,201,0.25)]">
              RESOLVER ADVISORY MODEL
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white">
              Risk Management & Security Resource Hub
            </h2>
            <p className="text-sm text-[#CBD5E1] font-normal max-w-2xl">
              Explore playbooks, eBooks, datasheets, case studies, and executive benchmark reports curated by Srajai Tech principal strategists.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#06152B] border border-white/15 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#55D9CC] transition-colors shadow-sm font-medium"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-white/10">
          <Filter className="w-3.5 h-3.5 text-[#55D9CC] shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#008579] to-[#0F3161] text-white border-[#55D9CC] shadow-sm'
                  : 'bg-[#06152B] text-[#CBD5E1] border-white/10 hover:border-[#55D9CC]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Resource Banner */}
      {featuredResource && selectedCategory === 'ALL RESOURCES' && !searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-6 md:p-8 text-white bg-[#06152B] border border-teal-500/30 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-lg relative overflow-hidden"
        >
          <div className="lg:col-span-8 space-y-4 relative z-10">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono font-extrabold text-[#06152B] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#FFB340]">
                {featuredResource.tag}
              </span>
              <span className="text-xs font-mono text-amber-300 font-bold">{featuredResource.readTime}</span>
            </div>

            <h3 className="text-xl md:text-3xl font-extrabold font-display text-white leading-tight">
              {featuredResource.title}
            </h3>

            <p className="text-sm text-[#CBD5E1] font-normal leading-relaxed max-w-2xl">
              {featuredResource.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAudit}
                className="px-5 py-2.5 rounded-lg bg-[#008579] hover:bg-[#00685E] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center space-x-2"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Download Executive eBook</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB340]" />
              </button>
              <span className="text-xs font-mono text-[#55D9CC] font-bold flex items-center space-x-1.5 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB340]" />
                <span>CONFIDENTIAL BOARD ADVISORY</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3D Executive eBook Cover */}
          <div className="lg:col-span-4 flex justify-center relative z-10">
            <div className="w-48 sm:w-52 aspect-[3/4] rounded-xl border border-teal-500/30 shadow-xl overflow-hidden relative bg-[#06152B]">
              <img
                src="/images/ebook_cover.png"
                alt="2026 Enterprise Risk Management & Board Telemetry Guide eBook"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredResources.map((res) => {
            const IconComponent = res.icon || FileText;

            return (
              <motion.div
                key={res.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-5 rounded-2xl cursor-pointer border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all duration-300 flex flex-col justify-between group shadow-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white"
              >
                <div className="space-y-3">
                  {/* Top Badges & Category Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-md bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#38BDF8] bg-[#38BDF8]/15 px-2 py-0.5 rounded border border-[#38BDF8]/30 shadow-sm">
                        {res.tag}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-[#E2E8F0] font-semibold">
                      {res.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-extrabold font-display text-[#38BDF8] group-hover:text-[#55D9CC] transition-colors leading-snug">
                    {res.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-[#E2E8F0] leading-relaxed font-medium line-clamp-3">
                    {res.desc}
                  </p>
                </div>

                {/* Simple Action Footer */}
                <div className="pt-4 mt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#E2E8F0] uppercase font-extrabold tracking-wider">
                    {res.type}
                  </span>
                  <button
                    onClick={onOpenAudit}
                    className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#38BDF8] hover:underline"
                  >
                    <span>Download</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
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
