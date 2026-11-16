import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Unlock, Smartphone, EyeOff, ShieldAlert, KeyRound, CheckCircle2, Sliders } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

const SECURITY_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Instant Account Freeze & Unfreeze',
    desc: 'Misplaced your phone or taking a pause? Text "FREEZE" from any WhatsApp device to instantly lock all payments, and "UNFREEZE" with your secret PIN whenever ready.',
    highlight: 'Total User Control'
  },
  {
    icon: KeyRound,
    title: '4-Digit Secret PIN Authorization',
    desc: 'Every outgoing transfer and sensitive withdrawal requires your unique secret PIN before execution. No funds move without your explicit approval.',
    highlight: 'Zero Unauthorized Moves'
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    desc: 'Your banking commands, phone numbers, and transaction records are encrypted end-to-end via WhatsApp protocol and 256-bit bank-grade SSL.',
    highlight: 'Bank-Grade Standards'
  },
  {
    icon: EyeOff,
    title: 'Privacy on Your Terms',
    desc: 'Brosa never exposes your full bank account or phone numbers in unmasked text. Masking (e.g. 904••••008) is enforced throughout.',
    highlight: 'Data Masking Enforced'
  }
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-20 sm:py-32 bg-white relative border-t border-slate-200/80 overflow-hidden">
      {/* Subtle royal purple ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#320472]/5 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#320472] bg-[#320472]/10 px-3.5 py-1.5 rounded-full border border-[#320472]/25 shadow-sm">
            Uncompromising Security
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bank-grade protection for every single penny.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We built Brosa with institutional-grade risk controls, KYC, multi-factor verification, and instant emergency protocols.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SECURITY_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                    {item.highlight}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified & Protected</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warm & Controlled Account Freeze / Unfreeze Card (Light Orange & Royal Purple) */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-purple-50/90 via-white to-orange-50/80 rounded-3xl p-6 sm:p-10 border border-purple-200/90 shadow-xl shadow-purple-900/5 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-200/35 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-200/40 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Left Text & Reassurance */}
          <div className="space-y-3 relative z-10 text-center lg:text-left">
            {/* <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#320472] bg-purple-100/90 px-3.5 py-1.5 rounded-full border border-purple-200/90 shadow-sm">
              <Sliders className="w-3.5 h-3.5 text-orange-600" />
            </div> */}

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Lost Your Phone?{' '}
              <span className="text-gradient-purple-orange">Freeze your account.</span>
            </h3>
          </div>

          {/* Right Action Buttons: FREEZE & UNFREEZE */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full lg:w-auto relative z-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#320472] via-[#4C1D95] to-[#320472] hover:from-[#21024D] hover:to-[#320472] shadow-lg shadow-[#320472]/25 hover:shadow-xl hover:shadow-[#320472]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group border border-purple-400/30"
            >
              <Lock className="w-4 h-4 text-purple-200 group-hover:scale-110 transition-transform" />
              <span>FREEZE</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#EA580C] hover:from-[#C2410C] hover:to-[#EA580C] shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group border border-orange-300/40"
            >
              <Unlock className="w-4 h-4 text-orange-100 group-hover:scale-110 transition-transform" />
              <span>UNFREEZE</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SecuritySection;

