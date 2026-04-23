import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import food1 from '../assets/food1.avif';
import food2 from '../assets/food2.avif';
import busPhoto from '../assets/freepik_bus.png';

/* ─── Shared animation variants ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 120 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show:   { opacity: 1, x:  0, transition: { type: 'spring', damping: 22, stiffness: 120 } },
};
const fadeRight = {
  hidden: { opacity: 0, x:  50 },
  show:   { opacity: 1, x:  0, transition: { type: 'spring', damping: 22, stiffness: 120 } },
};
const staggerContainer = (delay = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: delay } },
});

/* ─── Mini Phone ─────────────────────────────────────────── */
const FeaturePhone = ({ messages, accent = '#14B8A6' }) => {
  const [clickStep, setClickStep] = React.useState(0);

  React.useEffect(() => {
    const hasPhotoCards = messages.some(m => m.type === 'photoCard');
    if (!hasPhotoCards) return;

    let timers = [];
    const runSequence = () => {
      setClickStep(0);
      timers.push(setTimeout(() => setClickStep(1), 1200)); // Pause before click
      timers.push(setTimeout(() => setClickStep(2), 1500)); // Button is pressed (scale down)
      timers.push(setTimeout(() => setClickStep(3), 1650)); // Button turns green (Added)
      timers.push(setTimeout(() => setClickStep(4), 2800)); // Brosa: Confirm & Pay
      timers.push(setTimeout(() => setClickStep(5), 4000)); // User: GHS 150 Paid
      timers.push(setTimeout(() => setClickStep(6), 5200)); // Brosa: Have a happy journey
    };

    runSequence();
    const interval = setInterval(runSequence, 8000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [messages]);

  return (
  <div style={{
    width: '230px',
    borderRadius: '32px',
    background: 'linear-gradient(160deg, #1c1c1e, #2c2c2e)',
    padding: '8px',
    boxShadow: '0 30px 70px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06)',
    flexShrink: 0,
  }}>
    <div style={{ borderRadius: '26px', background: '#ECE5DD', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: '380px' }}>
      {/* Status */}
      <div style={{ padding: '7px 14px 3px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: '700', color: '#000' }}>
        <span>9:41</span><span>●●</span>
      </div>
      {/* Header */}
      <div style={{ background: '#fff', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `linear-gradient(135deg, ${accent}, #0EA5E9)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '11px', flexShrink: 0 }}>B</div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: '700' }}>Brosa</div>
          <div style={{ fontSize: '9px', color: '#25D366', fontWeight: '600' }}>● online</div>
        </div>
      </div>
      {/* Messages */}
      <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {messages.filter(m => !m.showAfterStep || clickStep >= m.showAfterStep).map((msg, i) => {
          const isPhotoCard = msg.type === 'photoCard';
          // Make the second photo card be the one that gets clicked
          const isTargetBtn = isPhotoCard && msg.clicked === true;
          const isClickedState = isTargetBtn && clickStep >= 3;
          const isPressingState = isTargetBtn && clickStep === 2;

          return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', damping: 18, stiffness: 180 }}
            style={{
              alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: isPhotoCard ? '90%' : '82%',
              background: msg.type === 'user' ? `linear-gradient(135deg, ${accent}, #0EA5E9)` : (isPhotoCard ? 'transparent' : '#fff'),
              color: msg.type === 'user' ? '#fff' : '#1a1a1a',
              padding: isPhotoCard ? '0' : '6px 10px',
              borderRadius: msg.type === 'user' ? '12px 12px 3px 12px' : '12px 12px 12px 3px',
              fontSize: '10px',
              lineHeight: '1.4',
              boxShadow: isPhotoCard ? '0 2px 6px rgba(0,0,0,0.06)' : '0 1px 4px rgba(0,0,0,0.08)',
            }}
          >
            {isPhotoCard ? (
              <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', paddingBottom: '4px' }}>
                <img src={msg.image} alt={msg.title} style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
                <div style={{ padding: '6px 8px' }}>
                  <div style={{ fontSize: '10px', fontWeight: '800', color: '#1C0A00' }}>{msg.title}</div>
                  <div style={{ fontSize: '9px', fontWeight: '800', color: '#25D366', marginBottom: '6px' }}>{msg.price}</div>
                  <div style={{ 
                    background: isClickedState ? '#25D366' : '#fff', 
                    color: isClickedState ? '#fff' : accent, 
                    border: `1px solid ${isClickedState ? '#25D366' : 'rgba(0,0,0,0.1)'}`, 
                    textAlign: 'center', padding: '5px', borderRadius: '16px', fontSize: '9px', fontWeight: '800',
                    transform: isPressingState ? 'scale(0.95)' : 'scale(1)',
                    transition: 'all 0.15s ease'
                  }}>
                    {isClickedState ? '✓ Added' : 'Order Now'}
                  </div>
                </div>
              </div>
            ) : msg.text}
          </motion.div>
        );
      })}
      </div>
    </div>
  </div>
);
};

/* ─── Feature Row ────────────────────────────────────────── */
const FeatureRow = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  const isEven = index % 2 === 0; // even = phone left, odd = phone right

  return (
    <section ref={ref} className="stacked-section" style={{ background: feature.bg, zIndex: 10 + index }}>
      <div
        className="feature-grid"
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '40px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Phone column */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          style={{
            order: isEven ? 1 : 2,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
          className="feature-phone-col"
        >
          {/* Watermark bg text */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 'clamp(52px, 9vw, 100px)',
            fontWeight: '900',
            color: 'rgba(0,0,0,0.035)',
            letterSpacing: '-3px',
            pointerEvents: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}>{feature.bgText}</div>

          {/* Floating phone */}
          <motion.div
            variants={isEven ? fadeLeft : fadeRight}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FeaturePhone messages={feature.messages} accent={feature.accent} />
            </motion.div>
          </motion.div>

          {/* Floating badge chips */}
          {feature.chips?.map((chip, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              animate={{ y: [0, -7, 0] }}
              transition={isInView ? {
                y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }
              } : {}}
              style={{
                position: 'absolute',
                ...chip.pos,
                background: chip.dark ? '#0f1117' : '#fff',
                color: chip.dark ? '#fff' : '#0f1117',
                borderRadius: '50px',
                padding: '8px 14px',
                fontSize: '12px',
                fontWeight: '700',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                whiteSpace: 'nowrap',
                zIndex: 2,
              }}
            >
              {chip.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Text column */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          style={{ order: isEven ? 2 : 1 }}
          className="feature-text-col"
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.12em',
              color: feature.accent,
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            {feature.tag}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 46px)',
              fontWeight: '800',
              color: '#0f1117',
              lineHeight: '1.12',
              letterSpacing: '-0.5px',
              marginBottom: '18px',
            }}
          >
            {feature.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '16px',
              color: '#64748b',
              lineHeight: '1.72',
              marginBottom: '32px',
              maxWidth: '420px',
            }}
          >
            {feature.description}
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="https://wa.me/message/52KOT5KCITWJB1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 28px rgba(0,0,0,0.18)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#0f1117',
              color: '#fff',
              padding: '11px 26px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
            }}
          >
            Try It Out
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .feature-phone-col { order: 1 !important; }
          .feature-text-col {
            order: 2 !important;
            text-align: center;
          }
          .feature-text-col p { max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
          .feature-text-col a { display: inline-flex !important; }
        }
      `}</style>
    </section>
  );
};

/* ─── FeaturesSection ────────────────────────────────────── */
const FEATURES = [
  {
    tag: 'Ordering',
    title: 'Order Food,\nStress-Free',
    description: 'Customers scan your Brosa QR code and order instantly through WhatsApp — no app download, no account, no friction.',
    bg: '#EDE9FE',
    accent: '#F97316',
    bgText: 'ORDER',
    messages: [
      { type: 'photoCard', image: food1, title: 'Spicy Jollof Rice', price: 'GHS 45', clicked: false },
      { type: 'photoCard', image: food2, title: 'Grilled Tilapia', price: 'GHS 60', clicked: true },
    ],
    chips: [
      { label: 'GH₵ 60.00 paid ✓', pos: { top: '16px', right: '-8px' }, dark: false },
      { label: '🛒', pos: { bottom: '70px', right: '-18px' }, dark: true },
    ],
  },
  {
    tag: 'Multi-Purpose',
    title: 'From your next meal\nto your next trip — Brosa handles it.',
    description: 'Brosa isn’t just about food. Whether you need VIP bus tickets, a table at a top restaurant, or movie tickets, Brosa handles it all in one chat.',
    bg: '#F0FDFA',
    accent: '#F97316',
    bgText: 'ANYTHING',
    messages: [
      { type: 'user', text: 'Book VIP Jeoun bus to Kumasi 🚌' },
      { type: 'photoCard', image: busPhoto, title: 'VIP Jeoun (Accra to Kumasi)', price: 'GHS 150', clicked: true },
      { type: 'bot',  text: 'Confirm & Pay', showAfterStep: 4 },
      { type: 'user', text: 'GHS 150 Paid', showAfterStep: 5 },
      { type: 'bot',  text: 'Have a happy journey', showAfterStep: 6 },
    ],
    chips: [
      { label: '🚌 VIP Jeoun', pos: { top: '18px', left: '-12px' }, dark: false },
      { label: '🍿 Silverbird', pos: { bottom: '80px', left: '-18px' }, dark: true },
    ],
  },
  {
    tag: 'Analytics',
    title: 'Know Your\nBusiness Numbers',
    description: 'Vendors get real-time order summaries and daily sales reports delivered straight to WhatsApp — no dashboards to learn.',
    bg: '#F0FDFA',
    accent: '#0EA5E9',
    bgText: 'TRACK',
    messages: [
      { type: 'bot',  text: '📊 Today: 47 orders · GHS 2,340' },
      { type: 'user', text: 'Show top items' },
      { type: 'bot',  text: '🥇 Jollof Rice — 18 sold\n🥈 Fried Chicken — 14 sold' },
    ],
    chips: [
      { label: '↑ +23% today', pos: { top: '20px', left: '-12px' }, dark: true },
    ],
  },
  {
    tag: 'Payments',
    title: 'Pay with Ease,\nAny Way You Want',
    description: 'Brosa supports all major mobile money networks. Simply select your preferred network and pay securely right in the chat.',
    bg: '#FFFBF5',
    accent: '#F59E0B',
    bgText: 'PAY',
    messages: [
      { type: 'bot',  text: 'Select Payment Method:\n1. 🟡 MTN MoMo\n2. 🔴 Vodafone Cash\n3. 🔵 AirtelTigo Money\n4. 💳 Visa / Master Card' },
      { type: 'user', text: '4. Visa Card' },
      { type: 'bot',  text: 'Processing Visa payment for GHS 150...' },
      { type: 'bot',  text: '✅ Payment Successful! Receipt: #BR782' },
    ],
    chips: [
      { label: '💳 Secured', pos: { top: '15px', right: '-15px' }, dark: false },
      { label: '🇬🇭 All Networks', pos: { bottom: '70px', right: '-10px' }, dark: true },
    ],
  },
];

const FeaturesSection = () => (
  <div id="features">
    {FEATURES.map((f, i) => <FeatureRow key={i} feature={f} index={i} />)}
  </div>
);

export default FeaturesSection;
