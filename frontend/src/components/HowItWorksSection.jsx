import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  Send,
  Zap,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Check,
  CreditCard,
  QrCode,
  ShieldAlert,
  Clock
} from 'lucide-react';
import brosaLogoAvatar from '../images/Artboard 2@360x.png';
import { WHATSAPP_LINK } from '../utils/constants';

const STEPS = [
  {
    stepNumber: 'Step 1',
    stepIndex: '01',
    title: 'Open WhatsApp & Search @brosa.ai',
    badge: 'Zero App Downloads',
    previewType: 'search',
    timing: '5 seconds',
  },
  {
    stepNumber: 'Step 2',
    stepIndex: '02',
    title: 'Say "Hi" & follow the prompts',
    badge: '10-Sec Setup',
    previewType: 'chat',
    timing: '15 seconds',
  },
  {
    stepNumber: 'Step 3',
    stepIndex: '03',
    title: 'Make Your First Payment',
    desc: '',
    badge: 'Instant Settlement',
    previewType: 'settle',
    timing: '2 seconds',
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the 3 steps smoothly every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80"
    >
      {/* Dynamic ambient backdrop glows */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-br from-[#320472]/8 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[650px] h-[450px] bg-gradient-to-tl from-[#EA580C]/8 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ════════════════════════════════════════════════════════════════════════
            TOP SECTION HEADER (XARA UI/UX EDITORIAL IDEATION)
            ════════════════════════════════════════════════════════════════════════ */}
        <div className="mb-14 sm:mb-20">
          {/* Top Xara-style Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#320472]/20 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#320472] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#320472]">
              Get Started in Seconds
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Big Editorial Title */}
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Up and running in under{' '}
                <span className="font-serif italic font-normal text-gradient-purple-orange">
                  Seconds.
                </span>{' '}
              </h2>
            </div>

            {/* Right Subtitle / Philosophy Text */}
            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Most banking apps force you through 15-page KYC forms. Brosa accepts however you communicate — directly in your WhatsApp chat.
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════════
            THE 3 STEPS: ASCENDING STAIRCASE WITH VERTICAL ACCENT DIVIDERS (XARA SIGNATURE)
            Step 1 (Lowest) -> Step 2 (Mid) -> Step 3 (Highest)
            ════════════════════════════════════════════════════════════════════════ */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            // Xara cascading ascending staircase offset:
            // Step 1: lower (pt-16), Step 2: mid (pt-8), Step 3: highest (pt-0)
            const staircasePaddings = ['lg:pt-16', 'lg:pt-8', 'lg:pt-0'];

            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col justify-start transition-all duration-300 cursor-pointer group ${staircasePaddings[idx]} ${idx < STEPS.length - 1
                  ? 'lg:border-r lg:border-transparent lg:pr-8 xl:pr-12'
                  : 'lg:pl-8 xl:pl-12'
                  } ${idx === 1 ? 'lg:pl-8 xl:pl-12' : ''}`}
              >
                {/* Vertical Divider Line with Ascending Height and Dynamic Glow Beam (Xara Signature) */}
                {idx < STEPS.length - 1 && (
                  <div
                    className={`hidden lg:block absolute right-0 bottom-0 w-[2px] transition-all duration-500 ${idx === 0 ? 'top-16' : 'top-8'
                      } ${isActive || activeStep === idx + 1
                        ? 'bg-gradient-to-b from-[#320472] via-[#7C3AED] to-[#EA580C] shadow-[0_0_12px_rgba(50,4,114,0.45)]'
                        : 'bg-slate-200/80 group-hover:bg-slate-300'
                      }`}
                  />
                )}

                {/* Step Header: Title + Step Pill (Snug, satisfying gap without empty descriptions) */}
                <div className="flex items-start justify-between gap-4 min-h-[58px]">
                  <h3
                    className={`text-2xl sm:text-[28px] font-extrabold tracking-tight leading-snug transition-colors duration-200 ${isActive
                      ? 'text-[#320472]'
                      : 'text-slate-900 group-hover:text-[#320472]'
                      }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step Pill (Xara Style) */}
                  <span
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isActive
                      ? 'bg-gradient-to-r from-[#320472] to-[#EA580C] text-white shadow-md shadow-[#320472]/30 scale-105'
                      : 'bg-purple-50 text-[#320472] border border-purple-200/70 group-hover:bg-purple-100'
                      }`}
                  >
                    {step.stepNumber}
                  </span>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    INTERACTIVE ANIMATED MICRO-WIDGET PREVIEW FOR EACH STEP
                    Equalized 168px height for pure geometric harmony
                    ════════════════════════════════════════════════════════════ */}
                <div className="mt-5">
                  {/* STEP 1: Search @brosa.ai Preview */}
                  {step.previewType === 'search' && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`h-[168px] p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${isActive
                        ? 'bg-white border-[#320472]/40 shadow-xl shadow-purple-900/10 ring-2 ring-[#320472]/10'
                        : 'bg-white/85 border-slate-200/80 shadow-sm'
                        }`}
                    >
                      {/* WhatsApp Search Input Bar */}
                      <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-xs font-mono text-slate-800">
                        <Search className="w-4 h-4 text-[#EA580C]" />
                        <span className="font-bold text-[#320472]">@brosa.ai</span>
                        <span className="ml-auto flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                      </div>

                      {/* Verified Profile Card with Official Brosa Circular Logo */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50/60 border border-purple-100/80 text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm border border-purple-200/80 bg-white flex items-center justify-center flex-shrink-0">
                            <img
                              src={brosaLogoAvatar}
                              alt="Brosa Official"
                              className="w-full h-full object-cover scale-[1.48]"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 flex items-center gap-1">
                              <span>Brosa</span>
                              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold">
                                ✓
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500">Personal Finance Platform</div>
                          </div>
                        </div>

                        <span className="text-[10px] font-bold text-white bg-gradient-to-r from-[#320472] to-[#EA580C] px-3 py-1.5 rounded-full shadow-sm hover:opacity-95">
                          Chat Now
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Say "Hi" & Follow Prompts Preview */}
                  {step.previewType === 'chat' && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`h-[168px] p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${isActive
                        ? 'bg-white border-[#320472]/40 shadow-xl shadow-purple-900/10 ring-2 ring-[#320472]/10'
                        : 'bg-white/85 border-slate-200/80 shadow-sm'
                        }`}
                    >
                      {/* User Says Hi Bubble */}
                      <div className="flex justify-end">
                        <div className="px-3 py-1.5 rounded-xl bg-[#005C4B] text-white text-xs font-medium shadow-sm inline-flex items-center gap-1.5">
                          <span>Hi Brosa</span>
                          <span className="text-[10px] text-emerald-200">10:14 AM ✓✓</span>
                        </div>
                      </div>

                      {/* Brosa Instant Reply Bubble with Official Avatar */}
                      <div className="flex justify-start">
                        <div className="flex items-start gap-2 max-w-full">
                          <div className="w-6 h-6 rounded-full overflow-hidden shadow-sm border border-purple-200/80 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <img
                              src={brosaLogoAvatar}
                              alt="Brosa Official"
                              className="w-full h-full object-cover scale-[1.48]"
                            />
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-xs text-slate-800 space-y-1 flex-1">
                            <div className="font-bold text-[#320472] flex items-center gap-1">
                              <span>Welcome to Brosa! 🚀</span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-tight">
                              Click continue to add the payment method.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Complete Payment Preview */}
                  {step.previewType === 'settle' && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`h-[168px] p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${isActive
                        ? 'bg-white border-[#EA580C]/40 shadow-xl shadow-orange-900/10 ring-2 ring-[#EA580C]/10'
                        : 'bg-white/85 border-slate-200/80 shadow-sm'
                        }`}
                    >
                      {/* Transfer Command Bar */}
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                        <span className="font-mono text-slate-800 font-semibold">
                          Pay ₵150 to kwabena asare
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          YES
                        </span>
                      </div>

                      {/* Instant Settlement Badge */}
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-50 via-purple-50/30 to-orange-50/30 border border-emerald-200/80 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                            ✓
                          </div>
                          <div>
                            <div className="font-bold text-slate-900">Payment Successful!</div>
                            <div className="text-[10px] text-slate-500 font-mono">2-Second Bank Rails</div>
                          </div>
                        </div>
                        <span className="font-extrabold text-[#320472] font-mono text-base">
                          ₵150.00
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Step Indicator Bar with Auto-Cycle Progress */}
                <div className="mt-6 pt-3 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Phase {step.stepIndex}
                    </span>
                    <span className="text-[10px] font-semibold text-purple-600/80 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100/60">
                      {step.timing}
                    </span>
                  </div>
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${isActive
                      ? 'w-16 bg-gradient-to-r from-[#320472] to-[#EA580C]'
                      : 'w-6 bg-slate-200 group-hover:bg-slate-300'
                      }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════════════
            ANIMATED LIGHT STREAM CIRCUIT BEAMS (XARA FOOTER SIGNATURE)
            Multi-layered glowing neon tracks with continuous flowing pulses
            ════════════════════════════════════════════════════════════════════════ */}


        {/* ════════════════════════════════════════════════════════════════════════
            CENTRAL INVITATION CTA
            ════════════════════════════════════════════════════════════════════════ */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#320472] via-[#5B13B9] to-[#EA580C] shadow-lg shadow-[#320472]/30 hover:shadow-2xl hover:shadow-[#320472]/50 hover:scale-105 active:scale-100 transition-all duration-200 group border border-purple-400/20"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>Try sending your first transaction right now</span>
            <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
