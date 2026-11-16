import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Send,
  Building2,
  Smartphone,
  Camera,
  Wifi,
  PieChart,
  QrCode,
  ShieldAlert,
  CheckCircle2,
  Lock,
  Unlock,
  Shield,
  Sparkles,
  Zap
} from 'lucide-react';
import TiltCard from './TiltCard';
import FlippingScanCard from './FlippingScanCard';
import { WHATSAPP_LINK } from '../utils/constants';

const FeaturesSection = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('MTN');

  return (
    <section id="product" className="py-20 sm:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Anchor alias so both #product and #features scroll smoothly to this designated position */}
      <span id="features" className="absolute -top-24 pointer-events-none" />
      {/* Ambient background glow with #320472 */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-[#320472]/10 via-[#7C3AED]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#320472]/10 via-[#EA580C]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#320472]/10 border border-[#320472]/25 mb-4 shadow-sm shadow-[#320472]/10">
            <Sparkles className="w-4 h-4 text-[#320472]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#320472]">
              AI-Powered Financial Infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Move money with intelligence,{' '}
            <span className="text-gradient-purple-orange">not friction.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything your financial life needs — powered by AI. This isn’t just another fintech app. This is a conversational financial operating system.
          </p>
        </div>

        {/* 3D Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">

          {/* Card 1: Instant Send & Receive (Span 7) */}
          <div className="md:col-span-7">
            <TiltCard className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#320472]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                    Instant P2P & Bank Transfers
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Transfer money in seconds.
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
                  Send to any Mobile Money (MTN MoMo, Vodafone, Telecel Cash, AT Money) or 20+ banks and cross-border payments directly from WhatsApp. No switching apps. No long forms. Just tell Brosa.
                </p>
              </div>

              {/* Interactive Visual Widget */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="text-slate-400">Quick Transfer Prompt</span>
                    <span className="text-emerald-400 font-mono font-bold">● Status: Verified</span>
                  </div>

                  <div className="mt-3 flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[#F97316] flex items-center justify-center font-bold text-white text-xs">
                      💬
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-slate-200">
                      "Pay <span className="text-[#F97316] font-bold">2k</span> to <span className="text-emerald-400 font-bold">0553277031</span> Sam"
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400">Amount</div>
                      <div className="font-bold text-white text-xs sm:text-sm">$2,000.00</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400">Destination</div>
                      <div className="font-bold text-emerald-400 text-xs sm:text-sm">Direct Bank</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400">Speed</div>
                      <div className="font-bold text-[#F97316] text-xs sm:text-sm">Instant (2s)</div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 2: Interactive 3D Auto-Flipping Card (Snap & Pay + Scan & Pay) (Span 5) */}
          <div className="md:col-span-5 h-full">
            <FlippingScanCard />
          </div>

          {/* Card 3: Airtime & Data Bundles (Expanded to full 12 cols while Card 4 is hidden) */}
          <div className="md:col-span-12">
            <TiltCard className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 hover:border-[#320472]/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Description & Telco Network Switcher */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                      Instant Telco Top-up
                    </span>
                    <Wifi className="w-5 h-5 text-blue-500" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Airtime & High-Speed Data Bundles.
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Non-expiring high-speed internet data and instant airtime recharge across all major networks. No USSD code hassle, no scratch cards — just message Brosa.
                  </p>

                  {/* Telco Network Selector */}
                  <div className="pt-2 flex items-center gap-2 max-w-sm">
                    {['MTN', 'Telecel', 'AT'].map((net) => (
                      <button
                        key={net}
                        onClick={() => setSelectedNetwork(net)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${selectedNetwork === net
                          ? 'bg-slate-900 text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                      >
                        {net}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Bundle Packages Grid */}
                <div className="lg:col-span-6">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                      <span>Available Non-Expiring Bundles ({selectedNetwork})</span>
                      <span className="text-blue-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        Instant Top-Up
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                      {[
                        { size: '2.5 GB', price: '$5.00', tag: 'Basic' },
                        { size: '5 GB', price: '$10.00', tag: 'Popular' },
                        { size: '10 GB', price: '$18.00', tag: 'Best Value' },
                        { size: '25 GB', price: '$35.00', tag: 'Heavy User' }
                      ].map((bundle) => (
                        <div
                          key={bundle.size}
                          className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#EA580C] hover:shadow-md transition-all cursor-pointer group"
                        >
                          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            {bundle.tag}
                          </span>
                          <div className="text-sm font-extrabold text-slate-900 group-hover:text-[#EA580C] transition-colors">
                            {bundle.size}
                          </div>
                          <div className="text-xs font-bold text-[#EA580C] mt-0.5">
                            {bundle.price}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Prompt: "Buy 10GB for 055..."</span>
                      <span className="text-emerald-600 font-bold">Zero USSD · 3-Second Delivery</span>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Card 4: AI Financial Insights & Expense Tracker (Temporarily hidden - preserved for future reuse) */}
          {/*
          <div className="md:col-span-7">
            <TiltCard className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
                    AI Financial Insights
                  </span>
                  <PieChart className="w-5 h-5 text-purple-500" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Know where every dollar goes.
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Brosa automatically organizes and categorizes every payment you make. Get weekly spending reports, bill reminders, and smart savings suggestions right on WhatsApp.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] text-slate-500 font-medium">Food & Groceries</div>
                  <div className="text-base font-extrabold text-slate-900 mt-1">35%</div>
                  <div className="text-[10px] text-slate-400">$420.00</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] text-slate-500 font-medium">Transfers (P2P)</div>
                  <div className="text-base font-extrabold text-slate-900 mt-1">42%</div>
                  <div className="text-[10px] text-slate-400">$510.00</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] text-slate-500 font-medium">Utilities & Bills</div>
                  <div className="text-base font-extrabold text-slate-900 mt-1">15%</div>
                  <div className="text-[10px] text-slate-400">$180.00</div>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                  <div className="text-[11px] text-emerald-700 font-medium">Saved this Month</div>
                  <div className="text-base font-extrabold text-emerald-600 mt-1">$250</div>
                  <div className="text-[10px] text-emerald-700 font-semibold">+18% growth</div>
                </div>
              </div>
            </TiltCard>
          </div>
          */}

          {/* Card 5: Business Accounts & Merchant QR (Span 6) */}
          <div className="md:col-span-6">
            <TiltCard className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#EA580C]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                    Business & Merchant QR
                  </span>
                  <QrCode className="w-5 h-5 text-[#EA580C]" />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Accept payments at zero hassle.
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Generate dynamic QR codes for customers at your shop or market stall. Receive instant WhatsApp confirmation and automated daily sales summaries.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4 bg-orange-50/60 p-4 rounded-2xl border border-orange-100">
                <div className="w-14 h-14 bg-white rounded-xl p-2 shadow-sm flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-full h-full text-slate-900" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Dynamic Payment QR</div>
                  <div className="text-slate-500">Scan to pay directly from any banking or MoMo app globally.</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 6: Warm, Controlled Self-Service Freeze Card (Span 6) */}
          <div className="md:col-span-6">
            <TiltCard className="bg-gradient-to-br from-purple-50/90 via-white to-orange-50/80 rounded-3xl p-6 sm:p-8 border border-purple-200/90 hover:border-[#320472]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#320472] bg-purple-100/90 px-3 py-1 rounded-full border border-purple-200/90 shadow-sm flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-orange-600" />
                    <span>Instant Account Control</span>
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Lost your phone?{' '}
                  <span className="text-gradient-purple-orange">Freeze your account.</span>
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Misplaced your device? Text <strong className="text-[#320472] font-mono font-bold">"FREEZE"</strong> to immediately pause transfers, and <strong className="text-[#EA580C] font-mono font-bold">"UNFREEZE"</strong> with your PIN whenever you're ready.
                </p>
              </div>

              {/* Controlled Action Box with FREEZE & UNFREEZE Buttons */}
              <div className="mt-6 p-4 rounded-2xl bg-white/95 border border-purple-100/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#320472] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Lock className="w-4 h-4 text-[#320472]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Self-Service Protection</div>
                    <div className="text-[11px] text-slate-500">24/7 Total Command</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#320472] to-[#5B13B9] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5 text-purple-200" />
                    <span>FREEZE</span>
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Unlock className="w-3.5 h-3.5 text-orange-100" />
                    <span>UNFREEZE</span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
