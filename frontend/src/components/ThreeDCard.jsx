import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Wifi, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import logoWhite from '../images/brosa-logo-white.png';

const ThreeDCard = () => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position normalized (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery smooth 3D tilt
  const springConfig = { stiffness: 260, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [16, -16]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-16, 16]), springConfig);

  // Holographic glare position
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto select-none py-2"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
        className="relative h-[210px] sm:h-[220px] rounded-3xl p-6 bg-gradient-to-br from-[#1E0442] via-[#0E0222] to-[#06000F] text-white shadow-2xl shadow-purple-950/70 border border-[#320472]/60 overflow-hidden cursor-pointer group"
      >
        {/* Holographic foil glare layer with royal purple and gold/orange reflection */}
        <motion.div
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.35), rgba(249, 115, 22, 0.2) 35%, transparent 70%)',
            opacity: isHovered ? 0.95 : 0.35,
            transition: 'opacity 0.3s ease',
          }}
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
        />

        {/* Ambient neon royal purple & sunset backglow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#320472]/90 via-[#7C3AED]/40 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-[#EA580C]/40 via-[#320472]/40 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Card Content (Preserve 3D with elevation) */}
        <div style={{ transform: 'translateZ(30px)' }} className="relative z-10 flex flex-col justify-between h-full">

          {/* Card Top: Logo + Chip + Contactless */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoWhite} alt="Brosa" className="h-6 sm:h-7 w-auto object-contain" />
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#320472] text-purple-200 border border-purple-400/50 font-bold ml-1 shadow-sm">
                ROYAL METAL
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Golden EMV Chip */}
              <div className="w-9 h-7 rounded-md bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 shadow-sm border border-yellow-300/60 relative overflow-hidden flex items-center justify-center">
                <div className="w-full h-[1px] bg-amber-700/40" />
                <div className="absolute w-[1px] h-full bg-amber-700/40" />
                <div className="w-4 h-3 rounded-sm border border-amber-800/40 bg-amber-300/50" />
              </div>
              <Wifi className="w-5 h-5 text-purple-300/80 rotate-90" />
            </div>
          </div>

          {/* Card Middle: Balance or Card Number */}
          <div className="my-auto">
            <div className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mb-1 flex items-center gap-1.5">
              <span>Available Liquidity</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono flex items-center gap-2">
              <span>$12,450.00</span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded-md">
                +4.2%
              </span>
            </div>
          </div>

          {/* Card Bottom: Cardholder + Expiry + Multi-Currency */}
          <div className="flex items-end justify-between text-xs">
            <div>
              <div className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">Cardholder</div>
              <div className="font-bold tracking-wider text-slate-200 uppercase text-xs sm:text-sm font-mono mt-0.5">
                Sam ISRAEL
              </div>
            </div>

            <div className="text-right flex items-center gap-2">
              <div>
                <div className="text-[8px] text-slate-500 font-mono uppercase tracking-widest">Expires</div>
                <div className="font-mono text-slate-300 text-xs font-semibold">12/29</div>
              </div>
              <div className="pl-2 border-l border-white/10">
                <div className="text-[9px] font-black tracking-tighter text-[#F97316] font-mono">
                  GLOBAL
                </div>
                <div className="text-[8px] text-slate-400 font-mono">
                  PAYMENTS
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ThreeDCard;

