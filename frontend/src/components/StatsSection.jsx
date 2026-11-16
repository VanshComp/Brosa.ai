import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { METRICS } from '../utils/constants';

const StatsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Eyebrow and Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            Real Money · Real Users · Real Growth
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            How Ghana moves money with{' '}
            <span className="text-gradient-orange">Brosa.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            From university campuses in Legon to merchants in Makola and families in Kumasi, Brosa powers thousands of daily frictionless transactions.
          </p>
        </div>

        {/* 4 Large Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#F97316]/40 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-[#F97316] transition-colors">
                {m.value}
              </div>
              <div className="mt-3 text-base font-bold text-slate-200">
                {m.label}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {m.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
