import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Server, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ValueCards() {
  const cards = [
    {
      id: 'capital',
      title: 'CORPORATE CAPITAL',
      badge: 'FINANCIAL GOVERNANCE',
      subtitle: 'Financial resilience, risk governance, and strategic protection.',
      desc: 'Formulating strategic capital protection frameworks, liquidity risk stress-testing, and executive appetite governance to safeguard shareholder equity.',
      icon: Landmark,
      metric: 'BASEL III & COSO READY',
      gradient: 'from-[#0F3161] to-[#008579]'
    },
    {
      id: 'infrastructure',
      title: 'DATA INFRASTRUCTURE',
      badge: 'CYBER RESILIENCE',
      subtitle: 'Cyber risk governance, information security, and data protection.',
      desc: 'Evaluating multi-cloud cyber posture, ISMS regulatory standards, vendor dependency vulnerabilities, and enterprise breach readiness.',
      icon: Server,
      metric: 'ISO 27001 & ISMS ENFORCED',
      gradient: 'from-[#00437E] to-[#008579]'
    },
    {
      id: 'reputation',
      title: 'BRAND REPUTATION',
      badge: 'REPUTATIONAL RESILIENCE',
      subtitle: 'Compliance, fraud prevention, operational resilience, and governance.',
      desc: 'Establishing proactive anti-fraud protocols, whistleblower channel integrity, FIDIC/CPWD contract reviews, and statutory compliance controls.',
      icon: Award,
      metric: 'CPWD & FIDIC COMPLIANT',
      gradient: 'from-[#008579] to-[#0F3161]'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#008579] dark:hover:border-[#46A095] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-teal-900/10"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#008579] dark:bg-[#46A095]" />

            <div className="space-y-6 pt-2">
              {/* Header Badges & Icon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#008579] dark:text-[#46A095] uppercase px-3.5 py-1 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 tracking-wider">
                  {card.badge}
                </span>

                <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${card.gradient} text-[#FFB340] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Subheading */}
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold font-display text-[#0F3161] dark:text-white group-hover:text-[#008579] dark:group-hover:text-[#46A095] transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs font-sans font-extrabold uppercase tracking-wider text-[#008579] dark:text-[#46A095]">
                  {card.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-700 dark:text-gray-200 leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>

            {/* Telemetry Status Footer */}
            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-sans font-bold">
              <span className="text-slate-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-2" />
                {card.metric}
              </span>
              <span className="text-[#008579] dark:text-[#46A095] font-extrabold uppercase tracking-widest bg-teal-50 dark:bg-teal-500/10 px-2.5 py-1 rounded border border-teal-200 dark:border-teal-500/30">
                ACTIVE
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
