import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

const LIVE_TRANSACTIONS = [
  { user: 'Alex M.', action: 'sent $150.00 to Sam', via: 'Direct Pay', time: 'Just now', icon: '⚡' },
  { user: 'Sophia O.', action: 'transferred $2,000 to Bank Account', via: 'Global Bank', time: '2s ago', icon: '🏦' },
  { user: 'David B.', action: 'received $450.00 invoice payment', via: 'Instant', time: '5s ago', icon: '💳' },
  { user: 'Emma D.', action: 'settled monthly utility bill', via: 'Auto-Pay', time: '8s ago', icon: '💡' },
];

export const FloatingDollarCoin = () => {
  return (
    <motion.div
      animate={{
        y: [-6, 6, -6],
        rotateY: [0, 180, 360],
        rotateZ: [-3, 3, -3],
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        rotateY: { duration: 8, repeat: Infinity, ease: 'linear' },
        rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#D97706] via-[#FBBF24] to-[#F59E0B] p-1.5 shadow-xl shadow-amber-500/30 border-2 border-yellow-200 cursor-pointer group select-none flex items-center justify-center"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#B45309] border border-yellow-300/60 flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-inner">
        <span className="drop-shadow-md font-mono">$</span>
      </div>
    </motion.div>
  );
};

export const FloatingLightningZap = () => {
  return (
    <motion.div
      animate={{
        y: [8, -8, 8],
        rotate: [-6, 6, -6],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="p-3.5 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#F97316] text-white shadow-xl shadow-orange-500/40 border border-orange-300/40 select-none flex items-center gap-2"
    >
      <Zap className="w-6 h-6 fill-white drop-shadow" />
      <div className="text-left font-mono leading-tight">
        <div className="text-[10px] text-orange-100 uppercase tracking-widest font-semibold">Settlement</div>
        <div className="text-xs font-black text-white">in Seconds</div>
      </div>
    </motion.div>
  );
};

export const FloatingShieldSecurity = () => {
  return (
    <motion.div
      animate={{
        y: [-7, 7, -7],
        rotate: [4, -4, 4],
      }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="p-3.5 rounded-2xl bg-slate-900 text-white shadow-2xl shadow-black/40 border border-emerald-500/40 select-none flex items-center gap-2.5"
    >
      <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
        <ShieldCheck className="w-4 h-4" />
      </div>
      <div className="text-left">
        <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">PIN Protected</div>
        <div className="text-xs font-mono font-bold text-slate-200">256-Bit SSL</div>
      </div>
    </motion.div>
  );
};

export const LiveTransactionTicker = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % LIVE_TRANSACTIONS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const tx = LIVE_TRANSACTIONS[currentIdx];

  return (
    <div className="h-10 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-sm text-xs text-slate-800 backdrop-blur-md"
        >
          <span className="text-base">{tx.icon}</span>
          <span className="font-bold text-slate-900">{tx.user}</span>
          <span className="text-slate-600">{tx.action}</span>
          <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#C2410C] font-mono text-[10px] font-bold">
            {tx.via}
          </span>
          <span className="text-slate-400 text-[10px]">{tx.time}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
