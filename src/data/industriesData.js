export const industriesData = [
  {
    id: 1,
    name: 'Banking & Financial Services',
    riskCategory: 'Capital Adequacy & Credit Exposure',
    icon: 'Landmark',
    description: 'Credit risk profiling, liquidity stress testing, Basel III compliance, counterparty risk hedging, and financial regulation auditing.',
    details: 'Comprehensive advisory covering liquidity coverage ratios (LCR), net stable funding ratios (NSFR), credit default models, and statutory RBI/SEBI regulatory compliance.',
    kris: ['Non-Performing Asset (NPA) Ratio', 'Capital Adequacy Ratio (CAR)', 'Liquidity Coverage Ratio (LCR)']
  },
  {
    id: 2,
    name: 'Insurance',
    riskCategory: 'Actuarial & Solvency Risk',
    icon: 'ShieldCheck',
    description: 'Underwriting governance, asset-liability management, regulatory solvency compliance, and claims fraud detection.',
    details: 'Actuarial risk modelling, reinsurance strategy stress-testing, claim leakage audits, and IRDAI statutory compliance frameworks.',
    kris: ['Solvency Margin Ratio', 'Combined Loss Ratio', 'Claims Settlement Velocity']
  },
  {
    id: 3,
    name: 'Information Technology',
    riskCategory: 'Data Protection & Infrastructure Resilience',
    icon: 'Server',
    description: 'ISMS compliance, infrastructure vulnerability mitigation, cloud security governance, and operational business continuity planning.',
    details: 'ISO 27001 implementation, SOC 2 audit readiness, zero-trust architecture assessment, and disaster recovery SLA validation.',
    kris: ['Mean Time to Detect (MTTD)', 'System Downtime Percentage', 'Unpatched Vulnerability Count']
  },
  {
    id: 4,
    name: 'Software & SaaS',
    riskCategory: 'Cloud Security & Multi-Tenant TPRM',
    icon: 'Cloud',
    description: 'Cyber posture evaluation, data breach readiness, API vulnerability scanning, and SLA risk monitoring.',
    details: 'Multi-tenant data isolation testing, GDPR/DPDP data privacy compliance, vendor API integration risk audits, and customer uptime guarantee governance.',
    kris: ['API Exploitation Rate', 'Data Leakage Score', 'SLA Non-Compliance Cost']
  },
  {
    id: 5,
    name: 'Healthcare & Life Sciences',
    riskCategory: 'Patient Data Privacy & Regulatory Compliance',
    icon: 'HeartPulse',
    description: 'Clinical governance, statutory compliance audits, HIPAA/DPDP privacy frameworks, and medical device risk management.',
    details: 'EHR data security protocols, clinical trial regulatory oversight, medical equipment liability management, and hospital operational continuity.',
    kris: ['Patient Record Access Violations', 'Clinical Audit Deficiencies', 'Regulatory Non-Compliance Risk']
  },
  {
    id: 6,
    name: 'Pharmaceuticals',
    riskCategory: 'Supply Chain & IP Safeguarding',
    icon: 'Pill',
    description: 'Cross-border vendor audits, IP risk protection, US-FDA regulatory compliance, and cold-chain operational continuity.',
    details: 'Good Manufacturing Practice (GMP) audit, active pharmaceutical ingredient (API) supply chain risk, drug patent litigation defense support.',
    kris: ['Batch Recall Rate', 'FDA Warning Letter Index', 'Cold-Chain Failure Percentage']
  },
  {
    id: 7,
    name: 'Manufacturing',
    riskCategory: 'Plant Safety & Operations Continuity',
    icon: 'Factory',
    description: 'Industrial EHS compliance, equipment breakdown risk, raw material supply chain auditing, and worker safety governance.',
    details: 'ISO 45001 & ISO 14001 environmental safety governance, factory floor hazard risk assessments, and machinery breakdown business interruption mitigation.',
    kris: ['Lost Time Injury Frequency (LTIFR)', 'Unscheduled Downtime Hours', 'Supply Chain Bottleneck Score']
  },
  {
    id: 8,
    name: 'Retail & E-Commerce',
    riskCategory: 'Inventory Fraud & Payment Security',
    icon: 'ShoppingCart',
    description: 'PCI-DSS payment security, supply chain inventory shrinkage, consumer data privacy, and omnichannel operational risk.',
    details: 'Payment gateway fraud monitoring, warehouse inventory shrinkage audits, return fraud mitigation, and peak shopping surge IT resilience.',
    kris: ['Inventory Shrinkage Percentage', 'Chargeback Fraud Rate', 'Payment Gateway Failover Uptime']
  },
  {
    id: 9,
    name: 'Telecommunications',
    riskCategory: 'Network Availability & Spectrum Governance',
    icon: 'Wifi',
    description: '5G infrastructure security, spectrum license compliance, network outage disaster recovery, and subscriber data privacy.',
    details: 'Cell tower infrastructure security, telecom regulator TRAI compliance, core routing failover testing, and subscriber identity fraud prevention.',
    kris: ['Network Outage Duration', 'Subscriber Data Breach Incidents', 'Regulatory Penalty Risk Score']
  },
  {
    id: 10,
    name: 'Energy & Utilities',
    riskCategory: 'Grid Security & Environmental Liability',
    icon: 'Zap',
    description: 'Critical infrastructure cyber defense, SCADA/ICS security, environmental safety auditing, and renewable energy transition risk.',
    details: 'Power grid cyber attack resilience, industrial safety compliance, environmental damage liability management, and power generation failover protocols.',
    kris: ['SCADA Security Vulnerabilities', 'Environmental Incident Count', 'Grid Continuity Failover Speed']
  },
  {
    id: 11,
    name: 'Logistics & Supply Chain',
    riskCategory: 'Freight Security & Vendor Dependency',
    icon: 'Truck',
    description: 'Global supply chain disruption modeling, fleet safety governance, customs compliance, and warehousing risk control.',
    details: 'Third-party transport carrier due diligence, port congestion risk hedging, cargo theft protection, and customs regulatory compliance.',
    kris: ['On-Time In-Full (OTIF) Failure Rate', 'Cargo Loss/Damage Index', 'Vendor SLA Breach Percentage']
  },
  {
    id: 12,
    name: 'Automotive',
    riskCategory: 'Supply Chain & Vehicle Safety Recalls',
    icon: 'Car',
    description: 'Tier-1 supplier quality audits, EV battery safety compliance, product recall risk management, and manufacturing safety.',
    details: 'IATF 16949 quality management compliance, electric vehicle battery thermal safety risk, component defect recall financial hedging.',
    kris: ['Warranty Claim Rate', 'Recall Cost Exposure', 'Supplier Quality Defect PPM']
  },
  {
    id: 13,
    name: 'Real Estate & Infrastructure',
    riskCategory: 'FIDIC/CPWD Contract & Project Risk',
    icon: 'Building2',
    description: 'Construction contract dispute mitigation, FIDIC/CPWD compliance, site safety auditing, and project cost overrun governance.',
    details: 'Real estate regulatory authority (RERA) compliance, contractor delay arbitration risk, structural audit governance, and land acquisition legal review.',
    kris: ['Contract Dispute Escalations', 'Project Cost Variance %', 'Safety Incident Rate on Site']
  },
  {
    id: 14,
    name: 'Government & Public Sector',
    riskCategory: 'Public Governance & Regulatory Integrity',
    icon: 'Scale',
    description: 'Public sector enterprise risk management, procurement fraud prevention, statutory compliance, and digital governance security.',
    details: 'Government e-Marketplace (GeM) audit governance, public infrastructure risk matrices, e-Governance platform cybersecurity, and anti-corruption controls.',
    kris: ['Procurement Red-Flag Count', 'Statutory Compliance Audit Index', 'Public Service SLA Uptime']
  },
  {
    id: 15,
    name: 'EdTech & Education',
    riskCategory: 'Student Privacy & Learning Platform Security',
    icon: 'GraduationCap',
    description: 'Student data privacy compliance, online exam integrity monitoring, learning management system uptime, and accreditation risk.',
    details: 'EdTech platform data protection, student PII compliance, cloud learning infrastructure disaster recovery, and regulatory educational board compliance.',
    kris: ['Exam Cheating & Leakage Incidents', 'Platform Uptime during Exams', 'Student Data Privacy Audits']
  },
  {
    id: 16,
    name: 'Aerospace & Defence',
    riskCategory: 'National Security & High-Precision Compliance',
    icon: 'Plane',
    description: 'Defense procurement compliance, ITAR/export control risk, defense supply chain security, and high-reliability engineering audits.',
    details: 'Defense offset contract compliance, classified data security protocols, aviation safety standards (AS9100), and defense vendor vetting.',
    kris: ['Export Control Compliance Score', 'Defense Supply Vetting Index', 'Classified Incident Risk']
  },
  {
    id: 17,
    name: 'Media & Entertainment',
    riskCategory: 'Content Piracy & Digital Asset IP Risk',
    icon: 'Film',
    description: 'Digital rights management (DRM), anti-piracy risk controls, broadcast infrastructure resilience, and defamation liability mitigation.',
    details: 'Content streaming platform cybersecurity, copyright litigation defense, broadcast transmission failover, and digital asset intellectual property protection.',
    kris: ['Content Piracy Leak Rate', 'Broadcast Outage Duration', 'IP Copyright Infringement Risk']
  },
  {
    id: 18,
    name: 'Agriculture & AgTech',
    riskCategory: 'Climate Exposure & Supply Yield Risk',
    icon: 'Sprout',
    description: 'Agri-commodity price volatility hedging, climate change impact stress testing, food safety compliance, and cold storage continuity.',
    details: 'Agricultural supply chain tracing, crop yield insurance stress-testing, food processing safety compliance (FSSAI), and drone/IoT data risk control.',
    kris: ['Yield Loss Exposure Index', 'Food Safety Compliance Violations', 'Supply Chain Spoilage Rate']
  }
];
