import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, QrCode, RotateCw, CheckCircle2, Sparkles, Scan, ArrowRight } from 'lucide-react';

const FlippingScanCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-flip continuously on a smooth loop (4.5s per face)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative w-full h-full min-h-[420px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full min-h-[420px]"
      >
        {/* ═══════════════════════════════════════════════════════════════════
            FRONT SIDE: Snap & Pay (OCR Computer Vision)
            ═══════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="absolute inset-0 w-full h-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_12px_40px_-10px_rgba(50,4,114,0.08),0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_-12px_rgba(50,4,114,0.16),0_8px_24px_-4px_rgba(249,115,22,0.1)] hover:border-[#320472]/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Header: Badge + Flip Indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-emerald-500" />
                <span>AI Computer Vision</span>
              </span>

              {/* Flip Button / Auto-Loop Indicator */}
              <button
                type="button"
                onClick={() => setIsFlipped(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200/80 text-[11px] font-semibold text-slate-600 transition-colors cursor-pointer group"
                title="Click to flip to Scan & Pay"
              >
                <span>1/2 · Snap</span>
                <RotateCw className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Snap & Pay.
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Snap a handwritten account number, invoice, or share a phone contact. Brosa reads the digits, resolves the bank, and sets up your transfer.
            </p>
          </div>

          {/* Visual Scan Preview Widget */}
          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
              <span>Account OCR Scanner</span>
              <span className="text-emerald-600 font-bold">● 99.8% Precision</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-dashed border-orange-300 flex items-center justify-between text-xs">
              <div className="space-y-1">
                <div className="font-mono text-slate-900 font-bold">9040013948008</div>
                <div className="text-slate-500 text-[11px]">Stanbic Bank · Detected in Contact</div>
              </div>
              <div className="text-[11px] font-bold text-white bg-emerald-600 px-2 py-1 rounded-lg shadow-sm">
                Resolved
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BACK SIDE: Scan & Pay (Universal QR Code Payments)
            ═══════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20 rounded-3xl p-6 sm:p-8 border border-[#320472]/30 shadow-[0_12px_40px_-10px_rgba(50,4,114,0.08),0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_-12px_rgba(50,4,114,0.16),0_8px_24px_-4px_rgba(249,115,22,0.1)] hover:border-[#320472]/50 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Header: Badge + Flip Indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#320472] bg-[#320472]/10 px-3 py-1 rounded-full border border-[#320472]/25 inline-flex items-center gap-1.5 shadow-sm">
                <QrCode className="w-3.5 h-3.5 text-orange-500" />
                <span>Universal QR Engine</span>
              </span>

              {/* Flip Button / Auto-Loop Indicator */}
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#320472]/10 hover:bg-[#320472]/20 text-[11px] font-semibold text-[#320472] transition-colors cursor-pointer group"
                title="Click to flip to Snap & Pay"
              >
                <span>2/2 · Scan</span>
                <RotateCw className="w-3 h-3 text-[#320472] group-hover:-rotate-180 transition-transform duration-300" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Scan & Pay.
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Scan any QR code to counter merchants in 1 tap. Brosa decodes payment tags and triggers instant zero-fee settlement.
            </p>
          </div>

          {/* Visual Dynamic QR Scan Preview Widget */}
          <div className="mt-6 bg-[#320472]/[0.03] border border-[#320472]/20 rounded-2xl p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
              <span className="flex items-center gap-1.5">
                <Scan className="w-3.5 h-3.5 text-[#320472]" />
                <span>Dynamic QR Scanner</span>
              </span>
              <span className="text-emerald-600 font-bold">● 0.1s Instant Match</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-dashed border-[#320472]/40 flex items-center justify-between text-xs shadow-sm">
              <div className="flex items-center gap-3">
                {/* Mini Animated QR with Laser Scan Line */}
                <div className="w-10 h-10 rounded-lg bg-[#320472]/10 border border-[#320472]/20 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  <QrCode className="w-6 h-6 text-[#320472]" />
                  <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-orange-500 via-amber-300 to-orange-500 animate-pulse shadow-sm shadow-orange-500 top-1/2 -translate-y-1/2" />
                </div>

                <div className="space-y-0.5">
                  <div className="font-mono text-slate-900 font-bold text-xs">
                    Downtown Market #4829
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Merchants & Individual P2P
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-bold text-white bg-gradient-to-r from-[#320472] to-[#EA580C] px-2.5 py-1 rounded-lg shadow-sm">
                Verified
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlippingScanCard;

