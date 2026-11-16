import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Building2, Smartphone, Users, Award, HeartHandshake } from "lucide-react";
import { WHATSAPP_LINK } from "../utils/constants";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sam Israel",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
      bio: "Pioneering conversational fintech in Africa. Passionate about removing financial friction for millions through WhatsApp.",
    },
    {
      name: "Godwin Acquah",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      bio: "Leading regulatory compliance, banking partnerships, and nationwide merchant operations across Ghana.",
    },
    {
      name: "Vansh Gautam",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
      bio: "Architecting high-throughput AI NLP engines, sub-second GhIPSS bank settlement protocols, and computer vision OCR.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Friction Problem",
      description: "Recognized that Ghanaians lose countless hours wrestling with clunky mobile banking apps and USSD session timeouts.",
    },
    {
      year: "2025",
      title: "Conversational Banking Pilot",
      description: "Launched Brosa AI on WhatsApp. Handled over $5,000,000 in pilot P2P and merchant transactions with rapid organic adoption.",
    },
    {
      year: "2026",
      title: "Global Multi-Currency & Bank Integration",
      description: "Integrated direct settlements with 20+ commercial banks, instant computer vision receipt OCR, and merchant dynamic QR engine.",
    },
  ];

  const values = [
    {
      icon: Smartphone,
      title: "Frictionless Accessibility",
      desc: "No apps to download, no 10MB updates. Financial services should live in the chat app everyone already loves."
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      desc: "End-to-end encryption, 4-digit PIN authorizations, and an instant emergency kill-switch for absolute peace of mind."
    },
    {
      icon: Sparkles,
      title: "Context-Aware AI",
      desc: "Our AI understands natural Ghanaian speech, shorthand amounts like '2k', handwritten account receipts, and contact cards."
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAFAFA] min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80">
            About Brosa AI
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            One platform to rule your{' '}
            <span className="text-gradient-orange">financial world.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe moving money should be as simple and natural as texting a friend. Brosa is turning WhatsApp into Africa’s most intelligent financial assistant.
          </p>
        </div>

        {/* Mission Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-[#1C0A00] text-white rounded-3xl p-8 sm:p-14 mb-20 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">Our Mission</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Democratizing financial power for 1 billion Africans.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              By combining state-of-the-art conversational AI with existing mobile money and commercial banking rails, Brosa removes the friction, USSD timeouts, and confusion from every dollar you move.
            </p>
          </div>

          <div className="flex-shrink-0 text-center p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-4xl font-black text-[#F97316]">$25M+</div>
            <div className="text-xs text-slate-400 mt-1">Safely Transacted</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built on Unwavering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EA580C] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-[#EA580C] font-mono">{m.year}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">{m.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-orange-200"
                />
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <div className="text-xs font-semibold text-[#EA580C] mb-3">{member.position}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
