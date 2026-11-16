import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  MessageSquare,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Camera,
  Zap,
  TrendingUp,
  Lock,
  ChevronLeft,
  Video,
  Phone,
  MoreVertical,
  Smile,
  Paperclip,
  Send,
  CheckCheck
} from 'lucide-react';
import BrosaShort from '../images/brosa-short.png';
import { WHATSAPP_LINK } from '../utils/constants';
import ThreeDCard from './ThreeDCard';
import { FloatingDollarCoin, FloatingLightningZap, LiveTransactionTicker } from './FloatingThreeDObjects';

const SIMULATED_CONVERSATIONS = [
  {
    type: 'p2p',
    pillLabel: '💸 Send ₵150',
    title: 'Instant P2P Transfer',
    steps: [
      { sender: 'user', text: 'Send ₵150 to 0553277031 Sam for lunch', time: '10:14 AM' },
      {
        sender: 'brosa',
        text: 'Got it! Transferring *₵150.00* to *Sam Israel*.\n\nFee: *₵0.00* · Free P2P\nReply *YES* with your 4-digit PIN to confirm.',
        time: '10:14 AM'
      },
      { sender: 'user', text: 'YES 2489', time: '10:15 AM' },
      {
        sender: 'brosa',
        isReceipt: true,
        receiptData: {
          title: 'Payment Sent! 🎉',
          amount: '₵150.00',
          recipient: 'Sam Israel (055•••7031)',
          ref: 'Lunch · #BRO-883921',
          time: 'Just now',
          status: 'Instant Transfer Verified'
        },
        time: '10:15 AM'
      }
    ]
  },
  {
    type: 'bank',
    pillLabel: '🏦 Send ₦2k to Bank',
    title: 'Direct Bank Settlement',
    steps: [
      { sender: 'user', text: 'Pay ₦2,000 to 14410003123 Access Bank', time: '11:02 AM' },
      {
        sender: 'brosa',
        text: 'Sending *₦2,000.00* to account *144••••715* at *Access Bank*.\nAccount Name: *Oluwaseyi Adewale*\n\nReply *YES* to authorize transfer.',
        time: '11:02 AM'
      },
      { sender: 'user', text: 'YES', time: '11:02 AM' },
      {
        sender: 'brosa',
        isReceipt: true,
        receiptData: {
          title: 'Bank Transfer Settled! 🏦',
          amount: '₦2,000.00',
          recipient: 'Oluwaseyi Adewale · Access bank',
          ref: 'Direct Interbank Clearing',
          time: 'Just now',
          status: 'Instant Pay Credited'
        },
        time: '11:03 AM'
      }
    ]
  },
  {
    type: 'snap',
    pillLabel: '📷 Snap Handwritten Bill',
    title: 'Snap & Pay (AI Receipt OCR)',
    steps: [
      {
        sender: 'user',
        isImage: true,
        imageCaption: '📷 [Handwritten Invoice: Account 9040013948008]',
        time: '01:45 PM'
      },
      {
        sender: 'brosa',
        text: '⚡ *AI Account Vision Detected!*\n\nBank: *Stanbic Bank*\nAccount: *904••••008*\nName: *Nana Ama Mensah*\n\nHow much would you like to transfer?',
        time: '01:45 PM'
      },
      { sender: 'user', text: '500 dollars', time: '01:46 PM' },
      {
        sender: 'brosa',
        isReceipt: true,
        receiptData: {
          title: 'Transferred $500.00 ✅',
          recipient: 'Nana Ama Mensah · Stanbic Bank',
          ref: 'OCR Auto-Pay · #BRO-391024',
          time: 'Just now',
          status: 'Direct Bank Settlement'
        },
        time: '01:46 PM'
      }
    ]
  }
];

const HeroSection = () => {
  const [activeConvIdx, setActiveConvIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Typewriter rotating headlines: Move money smarter / Payment made simple / Instant Settlements
  const TYPING_PHRASES = [
    'Move Money Smarter.',
    'Payment Made Simple.',
    'Instant Settlements.',
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState('Move money smarter.');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = TYPING_PHRASES[phraseIdx];
    let timer;

    if (!isDeleting) {
      if (typedText.length < targetPhrase.length) {
        timer = setTimeout(() => {
          setTypedText(targetPhrase.slice(0, typedText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(targetPhrase.slice(0, typedText.length - 1));
        }, 38);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % TYPING_PHRASES.length);
        }, 260);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx]);

  // Phone 3D interactive physics tilt
  const phoneX = useMotionValue(0);
  const phoneY = useMotionValue(0);
  const phoneSpring = { stiffness: 240, damping: 25 };
  const phoneRotateX = useSpring(useTransform(phoneY, [-0.5, 0.5], [7, -7]), phoneSpring);
  const phoneRotateY = useSpring(useTransform(phoneX, [-0.5, 0.5], [-7, 7]), phoneSpring);

  const handlePhoneMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    phoneX.set((e.clientX - rect.left) / rect.width - 0.5);
    phoneY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handlePhoneMouseLeave = () => {
    phoneX.set(0);
    phoneY.set(0);
  };

  const chatScrollRef = useRef(null);

  // Auto-scroll chat smoothly to bottom when new steps appear without showing scrollbars
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [activeStep, activeConvIdx]);

  // Auto-play steps and seamlessly loop continuously
  useEffect(() => {
    setActiveStep(0);
    const conv = SIMULATED_CONVERSATIONS[activeConvIdx];
    const timers = [];

    conv.steps.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setActiveStep(idx + 1);
      }, (idx + 1) * 1500);
      timers.push(timer);
    });

    // Automatically loop to next conversation
    const cycleTimer = setTimeout(() => {
      setActiveConvIdx((prev) => (prev + 1) % SIMULATED_CONVERSATIONS.length);
    }, (conv.steps.length + 1) * 1500 + 3500);
    timers.push(cycleTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [activeConvIdx]);

  const currentConv = SIMULATED_CONVERSATIONS[activeConvIdx];

  const selectConversation = (idx) => {
    setActiveConvIdx(idx);
    setActiveStep(0);
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#F8FAFC]">

      {/* Dynamic ambient luxury glows with #320472 royal purple */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#320472]/20 via-[#4C1D95]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-28 -left-24 w-96 h-96 bg-gradient-to-br from-[#320472]/30 via-purple-900/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-36 -right-24 w-96 h-96 bg-gradient-to-bl from-[#EA580C]/25 via-[#320472]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating 3D Elements positioned around hero */}
      <div className="hidden xl:block absolute top-36 left-12 z-20 pointer-events-none">
        <FloatingDollarCoin />
      </div>

      <div className="hidden xl:block absolute top-72 right-12 z-20 pointer-events-none">
        <FloatingLightningZap />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Centered Pill Badge with #320472 Classic Vibe */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-5"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#320472]/25 shadow-sm shadow-[#320472]/10 hover:border-[#320472]/50 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#320472] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#320472]" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
              Conversational Banking Live on WhatsApp
            </span>
            <span className="text-[11px] font-black uppercase px-2 py-0.5 rounded-full bg-[#320472] text-white shadow-sm">
              2.0
            </span>
          </div>
        </motion.div>

        {/* Main Hero Header with Live Typing Animation */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]"
          >
            <span className="inline-block relative">
              <span className="text-slate-900">{typedText || '\u00A0'}</span>
              <span
                className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.88em] bg-gradient-to-b from-[#320472] to-[#EA580C] ml-1 sm:ml-1.5 align-baseline rounded-full animate-pulse shadow-sm shadow-[#EA580C]/40"
                aria-hidden="true"
              />
            </span>
            <span className="text-gradient-purple-orange block mt-1">
              Across Wallets & Banks in One Chat.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Talk to money. Brosa gets it done. Send P2P transfers, bank transfers, pay for goods & services, buy data & airtime, and pay bills — directly on <strong className="font-bold text-slate-900">WhatsApp</strong> with no app downloads.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#320472] via-[#5B13B9] to-[#EA580C] shadow-lg shadow-[#320472]/35 hover:shadow-2xl hover:shadow-[#320472]/50 hover:scale-105 active:scale-100 transition-all duration-200 group border border-purple-400/20"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Start on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-[#320472] bg-white hover:bg-purple-50/60 border border-[#320472]/25 shadow-sm hover:shadow hover:border-[#320472]/50 transition-all duration-200"
            >
              <Zap className="w-4 h-4 text-[#EA580C]" />
              <span>See How It Works</span>
            </button>
          </motion.div>

          {/* Live Micro-Transaction Activity Ticker */}
          <div className="mt-6">
            <LiveTransactionTicker />
          </div>

          {/* Social Proof & Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[#F59E0B] font-black text-sm">★★★★★</span>
              <span className="font-bold text-slate-900">4.9/5 Rating</span>
              <span className="text-slate-500">(2,500+ users)</span>
            </div>
            <div className="hidden sm:inline text-slate-300">•</div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>$25M+ Transacted</span>
            </div>
            <div className="hidden sm:inline text-slate-300">•</div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-800">
              <Lock className="w-3.5 h-3.5 text-slate-600" />
              <span>Bank-Grade Encryption</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive "Try It Live" Prompt Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-center mb-2 px-2 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1 text-[#EA580C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click to test interactive banking in WhatsApp:</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {SIMULATED_CONVERSATIONS.map((c, i) => (
              <button
                key={c.type}
                onClick={() => selectConversation(i)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${activeConvIdx === i
                  ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white border-transparent shadow-md shadow-orange-500/25 scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300 hover:bg-orange-50/40'
                  }`}
              >
                {c.pillLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Showcase: Interactive 3D Card + Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">

          {/* Left Column: Interactive 3D Metal Card & Stats */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">

            {/* Interactive 3D Card with tilt */}
            <div className="relative">
              <div className="text-center lg:text-left mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#EA580C] bg-orange-100/70 px-2.5 py-0.5 rounded-md">
                  3D Interactive • Hover to Tilt
                </span>
              </div>
              <ThreeDCard />
            </div>

            {/* Quick Benefits Chips */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center flex-shrink-0 font-bold">
                  ⚡
                </div>
                <div>
                  <div className="font-bold text-slate-900">Instant Transfer</div>
                  <div className="text-[11px] text-slate-500">Free P2P Payments</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  🏦
                </div>
                <div>
                  <div className="font-bold text-slate-900">20+ Banks</div>
                  <div className="text-[11px] text-slate-500">Direct Clearing</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hyper-Realistic Flagship Smartphone */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center justify-center">

            {/* Outer Smartphone Frame with 3D Tilt Physics and Hardware Buttons */}
            <motion.div
              style={{
                perspective: 1200,
                rotateX: phoneRotateX,
                rotateY: phoneRotateY,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handlePhoneMouseMove}
              onMouseLeave={handlePhoneMouseLeave}
              className="relative w-full max-w-[370px] sm:max-w-[385px] cursor-pointer group"
            >

              {/* Physical Left Hardware Buttons (Titanium Milled) */}
              {/* Action Button */}
              <div className="absolute -left-[3.5px] top-[95px] w-[3.5px] h-[26px] bg-gradient-to-r from-[#4E525D] to-[#25272D] rounded-l-[3px] shadow-sm z-0" />
              {/* Volume Up */}
              <div className="absolute -left-[3.5px] top-[138px] w-[3.5px] h-[50px] bg-gradient-to-r from-[#4E525D] to-[#25272D] rounded-l-[3px] shadow-sm z-0" />
              {/* Volume Down */}
              <div className="absolute -left-[3.5px] top-[200px] w-[3.5px] h-[50px] bg-gradient-to-r from-[#4E525D] to-[#25272D] rounded-l-[3px] shadow-sm z-0" />

              {/* Physical Right Hardware Button (Power / Lock) */}
              <div className="absolute -right-[3.5px] top-[155px] w-[3.5px] h-[75px] bg-gradient-to-l from-[#4E525D] to-[#25272D] rounded-r-[3px] shadow-sm z-0" />

              {/* Titanium Chassis Outer Shell */}
              <div className="phone-mockup-outer relative z-10">

                {/* Subtle Antenna Bands */}
                <div className="absolute -top-[1.5px] left-[70px] w-[3px] h-[2px] bg-[#1E2026] pointer-events-none" />
                <div className="absolute -top-[1.5px] right-[70px] w-[3px] h-[2px] bg-[#1E2026] pointer-events-none" />
                <div className="absolute -bottom-[1.5px] left-[70px] w-[3px] h-[2px] bg-[#1E2026] pointer-events-none" />
                <div className="absolute -bottom-[1.5px] right-[70px] w-[3px] h-[2px] bg-[#1E2026] pointer-events-none" />

                {/* OLED Display Container with 19.5:9 flagship aspect ratio */}
                <div className="phone-mockup-inner flex flex-col h-[600px] sm:h-[650px] shadow-inner select-none">

                  {/* Glass Specular Reflection Sheen */}
                  <div className="pointer-events-none absolute inset-0 rounded-[44px] bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.06] z-30" />

                  {/* Micro Ear-Speaker Slit */}
                  <div className="w-12 h-[3px] bg-[#111317] rounded-full mx-auto mt-1 opacity-90 z-30 pointer-events-none border border-white/5" />

                  {/* Top Status Bar with Dynamic Island */}
                  <div className="bg-[#1F2C34] pt-1.5 px-6 pb-1 flex items-center justify-between text-white text-[12px] font-semibold relative z-20">
                    {/* Time */}
                    <span className="font-semibold tracking-tight text-[11px] sm:text-xs">9:41</span>

                    {/* Dynamic Island Pill */}
                    <div className="w-24 sm:w-28 h-[22px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner border border-white/5">
                      {/* Sensor dot */}
                      <div className="w-2 h-2 rounded-full bg-[#050608]" />
                      {/* TrueDepth Front Camera Lens with anti-reflective coating glint */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#080B14] border border-[#141B2D] relative overflow-hidden flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-gradient-to-tr from-blue-600/70 to-purple-600/40" />
                        <div className="w-0.5 h-0.5 rounded-full bg-white/70 absolute top-0.5 right-0.5" />
                      </div>
                    </div>

                    {/* Cellular, 5G & Battery */}
                    <div className="flex items-center gap-1.5 text-white/90">
                      {/* 4-bar cellular */}
                      <svg className="w-3.5 h-2.5 fill-white" viewBox="0 0 17 12">
                        <rect x="1" y="9" width="2.5" height="3" rx="0.5" />
                        <rect x="5" y="6.5" width="2.5" height="5.5" rx="0.5" />
                        <rect x="9" y="3.5" width="2.5" height="8.5" rx="0.5" />
                        <rect x="13" y="0.5" width="2.5" height="11.5" rx="0.5" />
                      </svg>
                      {/* 5G */}
                      <span className="text-[9px] font-black tracking-tight leading-none">5G</span>
                      {/* Battery glyph */}
                      <div className="flex items-center">
                        <div className="w-[19px] h-[10px] border border-white/80 rounded-[3px] p-[1.5px] flex items-center">
                          <div className="w-[85%] h-full bg-[#25D366] rounded-[1px]" />
                        </div>
                        <div className="w-[1.5px] h-[3.5px] bg-white/70 rounded-r-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp App Header Bar */}
                  <div className="bg-[#1F2C34] text-white px-3 py-2 flex items-center justify-between border-b border-[#2A3942]/60 relative z-20">
                    <div className="flex items-center gap-1.5">
                      <ChevronLeft className="w-5 h-5 text-[#00A884] -mr-1 cursor-pointer flex-shrink-0" />

                      {/* Brosa Official Avatar with Verified Checkmark */}
                      <div className="relative flex-shrink-0 cursor-pointer">
                        <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm flex items-center justify-center">
                          <img src={BrosaShort} alt="Brosa" className="w-full h-full object-cover rounded-full" />
                        </div>
                      </div>

                      <div className="ml-1">
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-[14px] text-[#E9EDEF] tracking-tight leading-tight">
                            Brosa
                          </span>
                          <span className="w-3.5 h-3.5 rounded-full bg-[#00A884] flex items-center justify-center text-[9px] text-white font-black shadow-sm" title="Verified Business">
                            ✓
                          </span>
                        </div>
                        <div className="text-[10px] text-[#00A884] font-medium flex items-center gap-1 leading-none mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00A884] animate-pulse" />
                          <span>online</span>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Action Icons */}
                    <div className="flex items-center gap-3.5 text-[#AEC0CC] pr-1">
                      <Video className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                      <Phone className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                      <MoreVertical className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>

                  {/* Chat Canvas with WhatsApp Dark Theme (Scrollbar Hidden & Auto-Scrolled) */}
                  <div
                    ref={chatScrollRef}
                    className="flex-1 px-3 sm:px-3.5 py-2 overflow-y-auto no-scrollbar space-y-2 bg-[#0B141A] text-xs relative"
                  >

                    {/* Centered Date & Security Notice */}
                    <div className="text-center my-0.5 space-y-1">
                      <span className="inline-block bg-[#182229]/95 text-[#8696A0] text-[9.5px] font-semibold px-2 py-0.5 rounded-md shadow-sm border border-white/5 uppercase tracking-wide">
                        TODAY
                      </span>
                      <div>
                        <div className="inline-flex items-center gap-1.5 bg-[#182229]/80 text-[#FFD279] text-[9.5px] px-2.5 py-1 rounded-md border border-yellow-500/10 leading-tight max-w-[94%] mx-auto">
                          <Lock className="w-2.5 h-2.5 text-[#FFD279] flex-shrink-0" />
                          <span>Messages are end-to-end encrypted · 24/7 AI Banking</span>
                        </div>
                      </div>
                    </div>

                    {/* Render conversation steps */}
                    {currentConv.steps.slice(0, activeStep).map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.22 }}
                        className={step.sender === 'user' ? 'bubble-user' : 'bubble-brosa'}
                      >
                        {step.isImage && (
                          <div className="mb-1.5 p-2 rounded-lg bg-black/40 border border-white/10 flex items-center gap-2 text-white">
                            <Camera className="w-4 h-4 text-[#F97316]" />
                            <span className="font-mono text-[10.5px]">{step.imageCaption}</span>
                          </div>
                        )}

                        {step.isReceipt ? (
                          <div className="bg-[#111B21] p-2.5 rounded-xl border border-emerald-500/40 text-white space-y-1.5">
                            <div className="flex items-center justify-between border-b border-white/10 pb-1">
                              <span className="font-bold text-emerald-400 text-xs">
                                {step.receiptData.title}
                              </span>
                              <span className="text-[9.5px] text-slate-400">{step.receiptData.time}</span>
                            </div>
                            <div className="text-lg sm:text-xl font-black text-white">
                              {step.receiptData.amount || 'Transferred'}
                            </div>
                            <div className="text-[11px] text-slate-300">
                              To: <strong className="text-white">{step.receiptData.recipient}</strong>
                            </div>
                            <div className="text-[9.5px] text-slate-400">
                              Ref: {step.receiptData.ref}
                            </div>
                            <div className="pt-0.5 flex items-center gap-1.5 text-[9.5px] text-emerald-400 font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{step.receiptData.status}</span>
                            </div>
                          </div>
                        ) : (
                          <p className="whitespace-pre-line text-[12px] leading-relaxed">{step.text}</p>
                        )}

                        <div className="text-[9px] text-right mt-0.5 opacity-70 flex items-center justify-end gap-1">
                          <span>{step.time}</span>
                          {step.sender === 'user' && (
                            <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                          )}
                        </div>
                      </motion.div>
                    ))}

                    {/* Animated Typing Indicator */}
                    {activeStep > 0 && activeStep < currentConv.steps.length && currentConv.steps[activeStep].sender === 'brosa' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bubble-brosa py-1.5 px-3 inline-flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A884] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A884] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A884] animate-bounce [animation-delay:0.4s]" />
                      </motion.div>
                    )}
                  </div>

                  {/* WhatsApp Chat Input Bar (Fully Inset to Prevent Edge Clipping) */}
                  <div className="px-3.5 sm:px-4 py-2 bg-[#1F2C34] flex items-center gap-2 border-t border-[#2A3942]/60 relative z-20">
                    <Smile className="w-5 h-5 text-[#8696A0] hover:text-[#00A884] transition-colors cursor-pointer ml-0.5 flex-shrink-0" />
                    <div className="flex-1 bg-[#2A3942] rounded-full h-8 sm:h-8.5 px-3 text-[#8696A0] text-[11px] sm:text-xs flex items-center justify-between min-w-0">
                      <span className="truncate pr-1">Type a payment (e.g. Pay $2k...)</span>
                      <div className="flex items-center gap-2 text-[#8696A0] flex-shrink-0">
                        <Paperclip className="w-3.5 h-3.5 -rotate-45 hover:text-white cursor-pointer" />
                        <Camera className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                      </div>
                    </div>
                    <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#00A884] flex items-center justify-center text-white shadow-md hover:bg-[#008f6f] active:scale-95 transition-all cursor-pointer flex-shrink-0">
                      <Send className="w-3.5 h-3.5 ml-0.5 fill-white" />
                    </div>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="bg-[#1F2C34] pb-2 pt-0.5 flex justify-center select-none relative z-20">
                    <div className="w-28 sm:w-32 h-1 bg-white/40 rounded-full" />
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Realistic Physical Contact Drop-Shadow Underneath */}
            <div className="w-[78%] h-5 bg-black/45 blur-xl rounded-full -mt-1 pointer-events-none" />
          </div>

        </div>

        {/* Feature Hashtag Pills Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700">
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[#EA580C]">
            #SendMoney
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            #BankTransfers
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            #AirtimeAndBundles
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            #SnapAndPay
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            #SmartSpending
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-emerald-700">
            #InstantLockSecurity
          </span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
