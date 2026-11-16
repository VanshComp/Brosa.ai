import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare, ArrowRight, ShieldCheck, Zap, Building2, Store } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

const SERVICES = [
  {
    name: 'Personal Banking',
    badge: 'Everyday Users',
    price: 'Free',
    period: 'no monthly fee',
    desc: 'For individuals sending money, buying data, and paying bills directly on WhatsApp.',
    features: [
      'Instant P2P transfers across all major wallets',
      'Bank transfers to 20+ commercial banks (up to $10k)',
      'Snap & Pay (AI Receipt & Contact OCR)',
      'Airtime & high-speed data bundles',
      'AI spending insights and weekly summaries',
      'Emergency account freeze safety switch',
    ],
    popular: true,
    cta: 'Start Free on WhatsApp',
  },
  {
    name: 'Merchant & Business',
    badge: 'Shops & Vendors',
    price: 'Zero Rental',
    period: 'pay per transaction',
    desc: 'Turn WhatsApp into your merchant POS terminal with dynamic QR codes and instant alerts.',
    features: [
      'Dynamic counter payment QR codes',
      'Instant WhatsApp payment notifications',
      'Daily automated revenue reconciliation',
      'Multi-cashier soundbox alerts',
      'Referral ambassador tracking portal',
      'Priority 24/7 WhatsApp business support',
    ],
    popular: false,
    cta: 'Open Business Account',
  },
  {
    name: 'Enterprise & APIs',
    badge: 'Developers & Fintechs',
    price: 'Custom',
    period: 'volume based',
    desc: 'Embed conversational payments, bank verification, and automated payouts into your apps.',
    features: [
      'Dedicated REST & Webhook APIs',
      'Real-time GhIPSS interbank settlement',
      'Account name verification engine',
      '99.95% uptime SLA guarantee',
      'Dedicated engineering account manager',
      'Custom webhook event triggers',
    ],
    popular: false,
    cta: 'Contact API Team',
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-28 pb-20 bg-[#FAFAFA] min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80">
            Transparent Services & Pricing
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            Clear fees. Zero hidden charges.{' '}
            <span className="text-gradient-orange block mt-1">
              Pure financial power.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose how you want to move money with Brosa. No app subscriptions, no hardware rentals, no unexpected deductions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-white border flex flex-col justify-between transition-all duration-300 relative ${s.popular
                ? 'border-[#EA580C] shadow-2xl shadow-orange-500/10 ring-2 ring-[#EA580C]'
                : 'border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300'
                }`}
            >
              {s.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full">
                  {s.badge}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">{s.name}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">{s.desc}</p>

                <div className="mt-6 mb-8 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">{s.price}</span>
                  <span className="text-xs text-slate-400 ml-2 font-medium">/ {s.period}</span>
                </div>

                <div className="space-y-3">
                  {s.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${s.popular
                    ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white shadow-lg shadow-orange-500/25 hover:shadow-xl'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{s.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Cap and Limits Guide */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-[#EA580C]" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Institutional Limits & Security Standards
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            In accordance with digital banking standards, standard single transactions are capped at <strong>$10,000.00</strong>. When transferring funds to bank accounts, transparent processing charges (typically $1 – $3 depending on routing) are computed in real time and displayed prior to secret PIN confirmation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs text-slate-500">Max Single Transfer</div>
              <div className="text-xl font-black text-slate-900 mt-1">$10,000</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs text-slate-500">Settlement Time</div>
              <div className="text-xl font-black text-emerald-600 mt-1">Instant (3s)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs text-slate-500">Supported Banks</div>
              <div className="text-xl font-black text-[#EA580C] mt-1">20+ Banks</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
