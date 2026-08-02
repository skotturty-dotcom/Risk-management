export const frameworkStages = [
  {
    step: "01",
    name: "IDENTIFY",
    title: "Risk Identification",
    desc: "Comprehensive diagnostic scanning to uncover emerging operational, financial, cyber, and legal risk exposures across the enterprise.",
    icon: "Search"
  },
  {
    step: "02",
    name: "ASSESS",
    title: "Risk Assessment",
    desc: "Qualitative and quantitative evaluation of risk probability, potential business impact, and exposure thresholds.",
    icon: "Sliders"
  },
  {
    step: "03",
    name: "ANALYZE",
    title: "Risk Analysis",
    desc: "Deep-dive root cause investigation, bottleneck identification, and cross-functional dependency mapping.",
    icon: "BarChart3"
  },
  {
    step: "04",
    name: "MITIGATE",
    title: "Control & Mitigation",
    desc: "Designing robust internal controls, policy interventions, hedging strategies, and incident response protocols.",
    icon: "ShieldCheck"
  },
  {
    step: "05",
    name: "MONITOR",
    title: "Continuous Monitoring",
    desc: "Deploying Key Risk Indicators (KRIs) and continuous telemetry to track control efficacy in real time.",
    icon: "Eye"
  },
  {
    step: "06",
    name: "REPORT",
    title: "Board & Executive Reporting",
    desc: "Synthesizing risk telemetry into actionable CXO and board-level risk heatmaps and governance dashboards.",
    icon: "FileText"
  },
  {
    step: "07",
    name: "IMPROVE",
    title: "Continuous Improvement",
    desc: "Iteratively refining frameworks, updating appetite thresholds, and strengthening organizational resilience.",
    icon: "RefreshCw"
  }
];

export const frameworkArchitecture = [
  "STRATEGIC RISK",
  "ENTERPRISE RISK MANAGEMENT",
  "RISK APPETITE & TOLERANCE",
  "RISK IDENTIFICATION",
  "RISK ASSESSMENT",
  "CONTROL & MITIGATION",
  "MONITORING & KRIs",
  "BOARD / EXECUTIVE REPORTING",
  "CONTINUOUS IMPROVEMENT"
];

export const frameworkFoundations = [
  { name: "ISO 31000", desc: "International Risk Standard" },
  { name: "COSO Framework", desc: "Enterprise Internal Control & Governance" },
  { name: "Risk Appetite", desc: "Corporate Risk Tolerance Parameters" },
  { name: "Risk Tolerance", desc: "Operational Variance Limits" },
  { name: "KRIs", desc: "Key Risk Indicators & Telemetry" },
  { name: "RCSA", desc: "Risk & Control Self-Assessment" },
  { name: "BCP", desc: "Business Continuity Planning" },
  { name: "DR & Crisis", desc: "Disaster Recovery & Crisis Management" },
  { name: "Governance & Reporting", desc: "Board-Level Transparency" }
];

export const likelihoodLevels = [
  "Rare",
  "Unlikely",
  "Possible",
  "Likely",
  "Almost Certain"
];

export const impactLevels = [
  "Insignificant",
  "Minor",
  "Moderate",
  "Major",
  "Severe"
];

// Matrix grid scores (Impact index x Likelihood index)
// Low (Green/Blue): 1-5, Medium (Yellow/Amber): 6-12, High/Critical (Red/Orange): 15-25
export const heatmapMatrix = [
  // Likelihood 4 (Almost Certain)
  [
    { impact: "Insignificant", likelihood: "Almost Certain", zone: "Low", score: 5, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { impact: "Minor", likelihood: "Almost Certain", zone: "Medium", score: 10, color: "bg-blue-500/30 text-blue-200 border-blue-500/40" },
    { impact: "Moderate", likelihood: "Almost Certain", zone: "High", score: 15, color: "bg-amber-500/30 text-amber-200 border-amber-500/40" },
    { impact: "Major", likelihood: "Almost Certain", zone: "Critical", score: 20, color: "bg-rose-500/40 text-rose-200 border-rose-500/50" },
    { impact: "Severe", likelihood: "Almost Certain", zone: "Critical", score: 25, color: "bg-rose-600/60 text-white border-rose-400" }
  ],
  // Likelihood 3 (Likely)
  [
    { impact: "Insignificant", likelihood: "Likely", zone: "Low", score: 4, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { impact: "Minor", likelihood: "Likely", zone: "Medium", score: 8, color: "bg-blue-500/30 text-blue-200 border-blue-500/40" },
    { impact: "Moderate", likelihood: "Likely", zone: "High", score: 12, color: "bg-amber-500/30 text-amber-200 border-amber-500/40" },
    { impact: "Major", likelihood: "Likely", zone: "High", score: 16, color: "bg-amber-600/40 text-amber-100 border-amber-400" },
    { impact: "Severe", likelihood: "Likely", zone: "Critical", score: 20, color: "bg-rose-500/40 text-rose-200 border-rose-500/50" }
  ],
  // Likelihood 2 (Possible)
  [
    { impact: "Insignificant", likelihood: "Possible", zone: "Low", score: 3, color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { impact: "Minor", likelihood: "Possible", zone: "Low", score: 6, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { impact: "Moderate", likelihood: "Possible", zone: "Medium", score: 9, color: "bg-blue-500/30 text-blue-200 border-blue-500/40" },
    { impact: "Major", likelihood: "Possible", zone: "High", score: 12, color: "bg-amber-500/30 text-amber-200 border-amber-500/40" },
    { impact: "Severe", likelihood: "Possible", zone: "High", score: 15, color: "bg-amber-600/40 text-amber-100 border-amber-400" }
  ],
  // Likelihood 1 (Unlikely)
  [
    { impact: "Insignificant", likelihood: "Unlikely", zone: "Low", score: 2, color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { impact: "Minor", likelihood: "Unlikely", zone: "Low", score: 4, color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { impact: "Moderate", likelihood: "Unlikely", zone: "Low", score: 6, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { impact: "Major", likelihood: "Unlikely", zone: "Medium", score: 8, color: "bg-blue-500/30 text-blue-200 border-blue-500/40" },
    { impact: "Severe", likelihood: "Unlikely", zone: "High", score: 10, color: "bg-amber-500/30 text-amber-200 border-amber-500/40" }
  ],
  // Likelihood 0 (Rare)
  [
    { impact: "Insignificant", likelihood: "Rare", zone: "Low", score: 1, color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { impact: "Minor", likelihood: "Rare", zone: "Low", score: 2, color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { impact: "Moderate", likelihood: "Rare", zone: "Low", score: 3, color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    { impact: "Major", likelihood: "Rare", zone: "Low", score: 4, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { impact: "Severe", likelihood: "Rare", zone: "Medium", score: 5, color: "bg-blue-500/30 text-blue-200 border-blue-500/40" }
  ]
];
