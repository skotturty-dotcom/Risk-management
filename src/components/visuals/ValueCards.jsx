import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Server, Award } from 'lucide-react';

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
            animate={{ y: [0, (index % 2 === 0 ? -6 : 6), 0] }}
            transition={{
              y: { duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-8 rounded-3xl border border-[#38BDF8]/40 hover:border-[#38BDF8] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between shadow-2xl bg-gradient-to-br from-[#0B2545] via-[#13315C] to-[#061A33] text-white"
          >
            {/* Top Glowing Radar Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />

            {/* Background Orbital Glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#38BDF8]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            <div className="space-y-6 pt-2 relative z-10">
              {/* Header Badges & Icon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[#38BDF8] uppercase px-3.5 py-1 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 tracking-wider shadow-sm">
                  {card.badge}
                </span>

                <div className={`relative w-13 h-13 rounded-2xl bg-gradient-to-br ${card.gradient} text-[#FFB340] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 relative z-10" />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-[#38BDF8]/20 pointer-events-none"
                  />
                </div>
              </div>

              {/* Title & Subheading */}
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold font-display text-white group-hover:text-[#55D9CC] transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs font-mono font-extrabold uppercase tracking-wider text-white">
                  {card.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-[#E2E8F0] leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>

            {/* Telemetry Status Footer */}
            <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs font-sans font-bold relative z-10">
              <span className="text-[#E2E8F0] uppercase tracking-wider flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block mr-2 shadow-[0_0_8px_#34D399]" />
                {card.metric}
              </span>
              <span className="text-[#38BDF8] font-mono font-extrabold uppercase tracking-widest bg-[#38BDF8]/15 px-2.5 py-1 rounded border border-[#38BDF8]/30 shadow-sm">
                ACTIVE
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
