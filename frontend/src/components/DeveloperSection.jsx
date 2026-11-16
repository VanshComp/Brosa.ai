import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Layers, Key, Check, Copy, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

const CODE_SAMPLE = `// Brosa Conversational Payment SDK
import { BrosaClient } from '@brosa/sdk';

const brosa = new BrosaClient({
  apiKey: process.env.BROSA_API_KEY,
  secretKey: process.env.BROSA_SECRET_KEY,
});

// Trigger Instant Global or Bank Transfer
const transfer = await brosa.payments.create({
  amount: 150.00,
  currency: 'USD',
  recipient: '0553277031',
  network: 'DIRECT_PAY', // or Bank code: 'STANBIC', 'ECOBANK'
  reference: 'Order #9821',
  notifyWhatsApp: true,
});

console.log('Settlement Status:', transfer.status); // "SETTLED"`;

const APIS = [
  {
    title: 'Payments & Settlement API',
    desc: 'Send and accept instant P2P wallet & bank transfers globally with 99.9% uptime and instant webhooks.',
    tag: 'Core API · Coming Soon'
  },
  {
    title: 'Dynamic QR Engine',
    desc: 'Generate dynamic payment QR codes with embedded transaction amount and merchant reference for instant counter scanning.',
    tag: 'Merchant API · Coming Soon'
  },
  {
    title: 'Conversational AI Banking Webhooks',
    desc: 'Allow your customers to query balances, place orders, and pay with natural language prompts directly on WhatsApp.',
    tag: 'AI & NLP · Coming Soon'
  },
  {
    title: 'Identity & Account Resolution API',
    desc: 'Verify recipient names across commercial banks and major mobile money networks before initiating transfers.',
    tag: 'Verification · Coming Soon'
  }
];

const DeveloperSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(CODE_SAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="py-20 sm:py-32 bg-[#080214] text-white relative overflow-hidden border-t border-[#320472]/40">
      {/* Ambient background glows with #320472 royal purple */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-[#320472]/60 via-[#4C1D95]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#320472]/40 via-[#EA580C]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header with Prominent Coming Soon Notice */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#320472]/40 border border-[#320472] text-xs font-bold text-purple-200 mb-4 shadow-lg shadow-[#320472]/30">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-black">Coming Soon · Developer Platform</span>
            <span className="text-[10px] bg-[#320472] px-2 py-0.5 rounded-full text-purple-200 font-mono border border-purple-400/40">Future Release</span>
          </div>

          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Build the future of African finance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Powerful APIs for developers. Scalable payment infrastructure for enterprises, e-commerce, and logistics.
          </p>

          <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium text-left max-w-xl">
            <span className="text-base flex-shrink-0">🚧</span>
            <span><strong>Developer Notice:</strong> Public API access and developer sandbox keys are currently in private preparation and not live yet. This section represents upcoming architecture.</span>
          </div>
        </div>

        {/* 2 Column: API Cards + Live Code Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

          {/* Left API Cards */}
          <div className="lg:col-span-6 space-y-4">
            {APIS.map((api, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#320472] hover:bg-[#320472]/15 hover:shadow-lg hover:shadow-[#320472]/25 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {api.title}
                  </h3>
                  <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-md bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20">
                    {api.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {api.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Live Code Box */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0F172A] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-400 text-xs ml-2">brosa-payment.ts</span>
                </div>

                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SDK</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Editor */}
              <div className="p-5 sm:p-6 overflow-x-auto text-slate-300 leading-relaxed font-mono">
                <pre>{CODE_SAMPLE}</pre>
              </div>

              {/* Footer bar */}
              <div className="px-5 py-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Global Banking & Security Standards Compliant</span>
                </div>
                <span className="text-[#F97316] font-semibold">SDK & APIs Coming Soon</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DeveloperSection;

