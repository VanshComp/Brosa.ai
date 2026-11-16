import React from 'react';
import { Building2, Smartphone, ShieldCheck } from 'lucide-react';
import { SUPPORTED_BANKS, SUPPORTED_NETWORKS } from '../utils/constants';

const PartnersMarquee = () => {
  // Combine networks and top banks
  const partnerItems = [
    ...SUPPORTED_NETWORKS.map(n => ({ name: n.name, type: 'MoMo Network', isNetwork: true, color: n.color })),
    ...SUPPORTED_BANKS.slice(0, 14).map(b => ({ name: b, type: 'Commercial Bank', isNetwork: false }))
  ];

  // Duplicate for seamless loop
  const loopList = [...partnerItems, ...partnerItems];

  return (
    <section className="py-10 sm:py-14 bg-white border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
          Integrated with Ghana's Top Mobile Money Networks & 20+ Licensed Banks
        </p>
      </div>

      {/* Gradient fade edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div className="flex animate-marquee-infinite gap-4 sm:gap-6 items-center">
        {loopList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 shadow-sm hover:border-[#F97316]/40 hover:shadow-md transition-all duration-200 flex-shrink-0"
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${item.isNetwork
                ? 'bg-orange-100 text-[#EA580C]'
                : 'bg-slate-200/70 text-slate-700'
              }`}>
              {item.isNetwork ? <Smartphone className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">
                {item.name}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                {item.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersMarquee;

