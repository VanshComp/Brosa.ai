import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  ArrowRight,
  QrCode,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Award,
  DollarSign,
  Gift,
  ExternalLink,
  CheckCircle2,
  Users
} from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../utils/constants';
import ambassadorBanner from '../images/campus-ambassador-banner.jpeg';
import ambassadorQR from '../images/ambassador-qr.png';

const AMBASSADOR_FORM_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSfR1jLm1B2Fjd2dk-M9b31sWAhI57XUhtIlrhrWx_oF58jafA/viewform?usp=header';

const CTABannerSection = () => {
  return (
    <section id="ambassador" className="py-20 sm:py-32 bg-[#070112] text-white relative overflow-hidden border-t border-[#320472]/40">
      {/* Background royal purple radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#320472]/70 via-[#4C1D95]/30 to-[#EA580C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#320472]/50 via-[#EA580C]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-20">

        {/* ════════════════════════════════════════════════════════════════════════
            CARD 1: MAIN CONVERSATIONAL FINTECH BANNER
            ════════════════════════════════════════════════════════════════════════ */}
        <div className="rounded-3xl sm:rounded-4xl bg-gradient-to-b from-[#320472]/35 via-white/[0.05] to-white/[0.02] border border-[#320472]/60 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl shadow-[#320472]/30 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Text and CTA */}
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#320472]/50 border border-[#320472] text-purple-200 text-xs font-bold uppercase tracking-wider shadow-md shadow-[#320472]/30">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Zero App Downloads Required</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Send. Spend. Settle.{' '}
              <span className="text-gradient-purple-orange block mt-1">
                Smarter.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Experience the new standard of African financial technology. Transfer money, buy airtime, pay utility bills, and manage expenses — straight from your favorite chat app.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#320472] via-[#6D28D9] to-[#EA580C] shadow-lg shadow-[#320472]/40 hover:shadow-2xl hover:shadow-[#320472]/60 hover:scale-105 transition-all duration-200 border border-purple-400/20"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>Try Now on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <div className="text-xs text-slate-400 font-mono text-center sm:text-left">
                Direct: <span className="text-white font-bold">{WHATSAPP_NUMBER}</span>
              </div>
            </div>

          </div>

          {/* Right QR Code Card (Scan with Phone) */}
          <div className="flex-shrink-0 w-full sm:w-72 bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl text-center space-y-4 border border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-[#320472]/10 text-[#320472] flex items-center justify-center mx-auto">
              <QrCode className="w-5 h-5 text-[#320472]" />
            </div>

            <div>
              <div className="text-base font-extrabold text-slate-900">Scan to Start Chat</div>
              <div className="text-xs text-slate-500 mt-0.5">Point phone camera to launch</div>
            </div>

            {/* QR Code graphic */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(WHATSAPP_LINK)}&margin=8`}
                alt="Scan to Chat on WhatsApp"
                className="w-44 h-44 rounded-xl"
              />
            </div>

            <div className="text-[11px] text-slate-400 font-mono">
              wa.me/233598111199
            </div>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════════
            CARD 2: BROSA CAMPUS AMBASSADOR MEGA SHOWCASE (PREMIUM & MASS ATTRACTION)
            ════════════════════════════════════════════════════════════════════════ */}
        <div className="relative rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[#1C0438] via-[#0E0220] to-[#070110] border-2 border-[#320472] p-6 sm:p-10 lg:p-12 shadow-2xl shadow-purple-950/80 overflow-hidden">

          {/* Ambient Corner Glows */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#EA580C]/35 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#320472]/80 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge & Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#320472]/50">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#320472] border border-purple-400/40 text-purple-200 text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
                <GraduationCap className="w-4 h-4 text-orange-400" />
                <span>2026/2027 Cohort · Student Leadership Program</span>
                <span className="text-[10px] bg-orange-500 text-white font-black px-2 py-0.5 rounded-full ml-1 animate-pulse">
                  APPLY NOW
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Become a <span className="text-gradient-purple-orange">Brosa Campus Ambassador</span>
              </h3>
              <p className="mt-2 text-sm sm:text-base text-purple-200/80 max-w-2xl leading-relaxed">
                Lead the AI banking revolution at your university. Earn monthly cash stipends, gain verified corporate experience, score exclusive Brosa merch, and build your resume.
              </p>
            </div>

            {/* Quick Fast-Apply Direct Button (Desktop) */}
            <div className="hidden lg:flex flex-col items-end gap-2 flex-shrink-0">
              <a
                href={AMBASSADOR_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#EA580C] shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-100 transition-all duration-200 group border border-orange-300/40"
              >
                <Sparkles className="w-4 h-4" />
                <span>Fill Application Form</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Center Banner Graphic with Luxury Framed Sheen */}
          <div className="relative z-10 mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
            <img
              src={ambassadorBanner}
              alt="Brosa Campus Ambassador Application Form"
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070110]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Grid: Ambassador Perks + QR Code Card */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left 4 Perks Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#320472]/60 hover:border-purple-400/40 hover:bg-white/[0.06] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#320472] text-orange-400 flex items-center justify-center mb-3 shadow-md shadow-[#320472]/50">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Earn Monthly Stipends & Bonuses
                </h4>
                <p className="text-xs text-purple-200/70 leading-relaxed">
                  Earn cash commissions on user signups, transaction volume, and campus activations.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#320472]/60 hover:border-purple-400/40 hover:bg-white/[0.06] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#320472] text-orange-400 flex items-center justify-center mb-3 shadow-md shadow-[#320472]/50">
                  <Gift className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  VIP Swag & Merchandise Kit
                </h4>
                <p className="text-xs text-purple-200/70 leading-relaxed">
                  Get high-end Brosa hoodies, custom tees, stickers, notebooks, and ambassador badges.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#320472]/60 hover:border-purple-400/40 hover:bg-white/[0.06] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#320472] text-orange-400 flex items-center justify-center mb-3 shadow-md shadow-[#320472]/50">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Letter of Recommendation
                </h4>
                <p className="text-xs text-purple-200/70 leading-relaxed">
                  Official recommendation signed by the founders + LinkedIn endorsement and mentorship.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-[#320472]/60 hover:border-purple-400/40 hover:bg-white/[0.06] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#320472] text-orange-400 flex items-center justify-center mb-3 shadow-md shadow-[#320472]/50">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Internship Fast-Track
                </h4>
                <p className="text-xs text-purple-200/70 leading-relaxed">
                  Top performing ambassadors get fast-tracked interviews for full-time & internship roles at Brosa.
                </p>
              </div>

            </div>

            {/* Right Ambassador QR Code Card */}
            <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl text-center space-y-4 border border-purple-200">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#320472]/10 text-[#320472] text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-orange-500" />
                <span>Instant Mobile Apply</span>
              </div>

              <div>
                <div className="text-base font-extrabold text-slate-900">Scan to Open Form</div>
                <div className="text-xs text-slate-500 mt-0.5">Point camera to open Google Form</div>
              </div>

              {/* Verified QR Code to Google Form */}
              <div className="p-3 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center justify-center">
                <img
                  src={ambassadorQR}
                  alt="Scan QR to Apply for Brosa Campus Ambassador"
                  className="w-44 h-44 rounded-xl shadow-sm"
                />
              </div>

              <div>
                <a
                  href={AMBASSADOR_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#320472] to-[#EA580C] shadow-md shadow-[#320472]/20 hover:shadow-lg hover:scale-105 active:scale-100 transition-all"
                >
                  <span>Open Form Directly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-[10px] text-slate-400 font-mono">
                Official Google Form · Brosa
              </div>
            </div>

          </div>

          {/* Mobile Full-Width Button */}
          <div className="lg:hidden mt-6 pt-4 border-t border-[#320472]/40 text-center">
            <a
              href={AMBASSADOR_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#EA580C] shadow-xl shadow-orange-500/30 hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Fill Ambassador Application Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTABannerSection;
