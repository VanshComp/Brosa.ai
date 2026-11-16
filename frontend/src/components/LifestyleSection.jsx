import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Store, Briefcase, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

const LIFESTYLES = [
  {
    id: 'individuals',
    title: 'Individuals & Families',
    icon: User,
    badge: 'Everyday Life',
    heading: 'For everyday people managing real-life money.',
    description: 'Send pocket money to family, split dinner bills with friends, recharge internet data, and pay utility bills without opening 5 different bank apps.',
    bullets: [
      'Instant P2P & Bank transfers with natural words ("Pay $150 to Sam")',
      'Zero monthly maintenance fees or hidden charges',
      'Instant receipt sharing on WhatsApp immediately upon settlement'
    ],
    sampleCommand: 'Send $200 to Mum for groceries',
    metric: '99.99%',
    metricLabel: 'Satisfaction rating across individual users'
  },
  {
    id: 'businesses',
    title: 'Merchants & Shops',
    icon: Store,
    badge: 'Commerce & Retail',
    heading: 'Run your shop with conversational instant payments.',
    description: 'Accept mobile wallets and bank transfers with zero hardware rental costs. Print your Brosa Dynamic QR code or send payment links directly to customers.',
    bullets: [
      'Generate dynamic branded QR codes for instant counter checkout',
      'Daily automated revenue reconciliation delivered directly to WhatsApp',
      'Eliminate cash handling risks and counterfeit notes'
    ],
    sampleCommand: 'Show today sales summary for Downtown Store',
    metric: '$0',
    metricLabel: 'POS hardware or terminal rental costs'
  },
  {
    id: 'freelancers',
    title: 'Freelancers & Creators',
    icon: Briefcase,
    badge: 'Digital Economy',
    heading: 'Get paid faster. Track every invoice and milestone.',
    description: 'Receive payments from clients globally directly into your wallet. Easily track pending payments, send automated receipts, and budget with AI.',
    bullets: [
      'Create instant branded payment prompts for your clients',
      'Separate business receipts from personal expenses automatically',
      'Export monthly transaction logs in 1 tap'
    ],
    sampleCommand: 'Generate invoice receipt for $3,500 Website Design',
    metric: '< 5 sec',
    metricLabel: 'Average time to create and send an invoice'
  },
  {
    id: 'global',
    title: 'Diaspora & Cross-Border',
    icon: Globe,
    badge: 'Global Connectivity',
    heading: 'Support loved ones back home without exorbitant wire fees.',
    description: 'Whether you are in the UK, US, Canada, or Europe, Brosa allows you to directly send support (school fees, medical expenses and utilities) in 10+ countires.',
    bullets: [
      'Direct payment of School fees, Water & Light bills from abroad',
      'Real-time transparency on foreign exchange rates',
      'Instant payouts with receipts evidence'
    ],
    sampleCommand: 'Pay ECG electricity bill for Meter 41208910',
    metric: '100%',
    metricLabel: 'Real-time utility & merchant settlement'
  }
];

const MERCHANT_BRANCHES = [
  {
    id: 'downtown',
    name: 'Downtown Store',
    sales: '$2,840.00',
    orders: 68,
    growth: '+22.4%',
    wallets: '$1,890.00',
    banks: '$950.00',
    status: 'Instant Settled',
  },
  {
    id: 'airport',
    name: 'Airport Mall',
    sales: '$1,620.00',
    orders: 39,
    growth: '+14.1%',
    wallets: '$980.00',
    banks: '$640.00',
    status: 'Instant Settled',
  },
  {
    id: 'eastlegon',
    name: 'East Legon Kiosk',
    sales: '$890.00',
    orders: 24,
    growth: '+8.7%',
    wallets: '$670.00',
    banks: '$220.00',
    status: 'Instant Settled',
  },
];

const LifestyleSection = () => {
  const [activeTab, setActiveTab] = useState('individuals');
  const [selectedBranch, setSelectedBranch] = useState(0);
  const current = LIFESTYLES.find(l => l.id === activeTab) || LIFESTYLES[0];

  return (
    <section id="use-cases" className="py-20 sm:py-32 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#320472] bg-[#320472]/10 px-3.5 py-1.5 rounded-full border border-[#320472]/25 shadow-sm">
            Fits Every Lifestyle
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Adapted for the way you live and work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Built for individuals, businesses, creators, and families — wherever money needs to move.
          </p>
        </div>

        {/* Tab Navigation with #320472 Active Pill */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 max-w-full overflow-x-auto gap-1 sm:gap-2 shadow-inner">
            {LIFESTYLES.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${isActive
                    ? 'bg-gradient-to-r from-[#320472] to-[#4C1D95] text-white shadow-lg shadow-[#320472]/30 border border-[#320472]'
                    : 'text-slate-600 hover:text-[#320472] hover:bg-white/60'
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-[#FAFAFA] rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] bg-orange-100/80 px-3 py-1 rounded-full">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {current.heading}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                {current.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#EA580C] hover:text-[#C2410C] group"
                >
                  <span>Experience this on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Interactive Mockup Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-3.5">
                <div className="flex items-center justify-between text-xs pb-2.5 border-b border-white/10">
                  <span className="text-slate-400 font-medium">Interactive WhatsApp Prompt</span>
                  <span className="text-[#F97316] font-mono text-[11px] font-bold">Brosa 2.0</span>
                </div>

                {current.id === 'businesses' ? (
                  /* Multi-Merchant Interactive Showcase */
                  <div className="space-y-3">
                    {/* Prompt Box */}
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-emerald-300">
                      💬 "Show today sales summary for <span className="text-[#F97316] font-bold">{MERCHANT_BRANCHES[selectedBranch].name}</span>"
                    </div>

                    {/* Merchant / Branch Switcher Pills */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                      {MERCHANT_BRANCHES.map((b, bIdx) => (
                        <button
                          key={b.id}
                          onClick={() => setSelectedBranch(bIdx)}
                          className={`flex-1 py-1 px-1.5 rounded-lg text-[10.5px] font-bold transition-all text-center truncate ${selectedBranch === bIdx
                              ? 'bg-[#EA580C] text-white shadow-sm'
                              : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                          {b.name}
                        </button>
                      ))}
                    </div>

                    {/* Live WhatsApp Bot Interactive Sales Report */}
                    <motion.div
                      key={selectedBranch}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-3.5 rounded-xl bg-[#0B141A] border border-white/10 space-y-2.5 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                            Sales Report · {MERCHANT_BRANCHES[selectedBranch].name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">Today (Live)</span>
                      </div>

                      <div className="flex items-baseline justify-between pt-0.5">
                        <div>
                          <div className="text-2xl font-black text-white font-mono">
                            {MERCHANT_BRANCHES[selectedBranch].sales}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {MERCHANT_BRANCHES[selectedBranch].orders} Paid Orders · avg $39.50/tx
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          {MERCHANT_BRANCHES[selectedBranch].growth}
                        </span>
                      </div>

                      {/* Rail Breakdown */}
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-slate-400 text-[10px]">Mobile Wallets</div>
                          <div className="font-bold text-slate-200 mt-0.5">{MERCHANT_BRANCHES[selectedBranch].wallets}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-slate-400 text-[10px]">Instant Bank Pay</div>
                          <div className="font-bold text-slate-200 mt-0.5">{MERCHANT_BRANCHES[selectedBranch].banks}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/5">
                        <span className="flex items-center gap-1 text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          {MERCHANT_BRANCHES[selectedBranch].status}
                        </span>
                        <span className="text-[#F97316] font-semibold">
                          Click branches above to switch
                        </span>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* Standard Result Mockup for Other Persona Tabs */
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm font-mono text-emerald-300">
                      💬 "{current.sampleCommand}"
                    </div>

                    <div className="pt-2">
                      <div className="text-3xl font-black text-white">{current.metric}</div>
                      <div className="text-xs text-slate-400 mt-1">{current.metricLabel}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default LifestyleSection;

