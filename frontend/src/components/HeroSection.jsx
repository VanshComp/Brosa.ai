import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   Animated phone mockup showing live WhatsApp chat
───────────────────────────────────────────────────────────── */
const MESSAGES = [
  { type: 'user', text: 'Order jollof rice for me 🍛' },
  { type: 'bot',  text: "Sure! Found at Mama Abena's — GHS 30 each. How many?" },
  { type: 'user', text: '2 plates please!' },
  { type: 'bot',  text: '✅ Confirmed! Total: GHS 60. Pay now?' },
  { type: 'user', text: 'Yes, pay now!' },
  { type: 'bot',  text: '💰 Payment received! Ready in ~20 mins.' },
];

const PhoneMockup = () => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    let idx = 0;
    let timer;

    const next = () => {
      if (idx < MESSAGES.length) {
        const newItem = MESSAGES[idx];
        if (newItem) {
          setVisible(prev => [...prev, newItem]);
        }
        idx++;
        timer = setTimeout(next, 900);
      } else {
        // Restart after pause
        timer = setTimeout(() => { idx = 0; setVisible([]); next(); }, 2500);
      }
    };

    timer = setTimeout(next, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      width: '290px',
      borderRadius: '40px',
      background: 'linear-gradient(160deg, #1c1c1e, #2c2c2e)',
      padding: '10px',
      boxShadow: '0 50px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)',
      position: 'relative',
      flexShrink: 0,
    }}>
      {/* Screen */}
      <div style={{
        borderRadius: '32px',
        background: '#ECE5DD',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '530px',
      }}>
        {/* Status bar */}
        <div style={{ padding: '10px 18px 4px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', color: '#000' }}>
          <span>9:41</span>
          <span style={{ letterSpacing: '-1px' }}>●●●</span>
        </div>

        {/* WA Header */}
        <div style={{ background: '#fff', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #14B8A6, #0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '14px', flexShrink: 0 }}>B</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#000', lineHeight: 1.2 }}>Brosa</div>
            <div style={{ fontSize: '10px', color: '#25D366', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
              online
            </div>
          </div>
          <span style={{ fontSize: '15px' }}>📞</span>
        </div>

        {/* Chat */}
        <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '6px', minHeight: '380px' }}>
          {visible.map((msg, i) => {
            if (!msg) return null;
            return (
              <motion.div
                key={`${i}-${msg.text}`}
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', damping: 18, stiffness: 180 }}
                style={{
                  alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '82%',
                  background: msg.type === 'user' ? 'linear-gradient(135deg, #25D366, #128C7E)' : '#fff',
                  color: msg.type === 'user' ? '#fff' : '#1a1a1a',
                  padding: '7px 11px',
                  borderRadius: msg.type === 'user' ? '14px 14px 3px 14px' : '14px 14px 14px 3px',
                  fontSize: '11px',
                  lineHeight: '1.45',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}
              >
                {msg.text}
              </motion.div>
            );
          })}
        </div>

        {/* Input */}
        <div style={{ background: '#f0f0f0', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ flex: 1, background: '#fff', borderRadius: '20px', padding: '7px 14px', fontSize: '11px', color: '#bbb' }}>Message…</div>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #14B8A6, #0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>🎤</div>
        </div>
      </div>

      {/* Floating notification bubble */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-18px', right: '-28px',
          background: '#fff', borderRadius: '50px',
          padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: '9px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
          whiteSpace: 'nowrap', zIndex: 10,
        }}
      >
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #14B8A6, #0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>🛒</div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '12px', color: '#0f1117' }}>Order placed!</div>
          <div style={{ fontSize: '10px', color: '#9ca3af' }}>Mama Abena's Kitchen</div>
        </div>
      </motion.div>

      {/* Floating stats card */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        style={{
          position: 'absolute', bottom: '60px', left: '-44px',
          background: '#fff', borderRadius: '16px',
          padding: '12px 16px',
          boxShadow: '0 8px 28px rgba(0,0,0,0.1)',
          zIndex: 10, minWidth: '120px',
        }}
      >
        <div style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '4px', fontWeight: '500' }}>Today's Orders</div>
        <div style={{ fontSize: '22px', fontWeight: '800', color: '#14B8A6', lineHeight: 1 }}>47</div>
        <div style={{ fontSize: '10px', color: '#10b981', fontWeight: '700', marginTop: '4px' }}>↑ +12% today</div>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 130 } },
};

const HeroSection = () => (
  <section
    id="hero"
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(150deg, #f0fdf9 0%, #f8faff 55%, #eff6ff 100%)',
      paddingTop: '72px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background glows */}
    <div style={{ position: 'absolute', top: '8%', right: '3%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '5%', left: '2%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', width: '100%' }}>
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

        {/* Left — copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(14,165,233,0.12))',
              border: '1px solid rgba(20,184,166,0.25)',
              borderRadius: '50px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#14B8A6',
              letterSpacing: '0.05em',
              marginBottom: '20px',
            }}>
              🚀 Now available across Ghana
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(36px, 5.5vw, 68px)',
              fontWeight: '800',
              lineHeight: '1.08',
              color: '#0f1117',
              letterSpacing: '-1.5px',
              marginBottom: '22px',
            }}
          >
            Your AI WhatsApp<br />
            <span style={{ color: '#14B8A6' }}>Shopping Assistant,</span><br />
            Anytime.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '17px',
              color: '#64748b',
              lineHeight: '1.72',
              marginBottom: '40px',
              maxWidth: '460px',
            }}
          >
            Brosa lets businesses sell and customers order, pay, and track — all through a single WhatsApp conversation. No app download needed.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <motion.a
              href="https://wa.me/message/52KOT5KCITWJB1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2, boxShadow: '0 16px 40px rgba(15,17,23,0.3)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#0f1117', color: '#fff',
                padding: '14px 28px', borderRadius: '12px',
                fontSize: '15px', fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
              }}
            >
              <span style={{ fontSize: '18px' }}>💬</span>
              Try Brosa Now
            </motion.a>

            <motion.button
              onClick={() => {
                const el = document.getElementById('features');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(20,184,166,0.08)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'transparent',
                border: '1.5px solid rgba(20,184,166,0.3)',
                color: '#14B8A6', padding: '14px 24px',
                borderRadius: '12px', fontSize: '15px',
                fontWeight: '600', cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background-color 0.2s ease',
              }}
            >
              See how it works ↓
            </motion.button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '36px' }}
          >
            <div style={{ display: 'flex' }}>
              {['🧑🏿', '👩🏽', '👨🏾', '👩🏿', '🧑🏽'].map((em, i) => (
                <div key={i} style={{
                  width: '30px', height: '30px', borderRadius: '50%',
                  border: '2px solid #fff',
                  background: `linear-gradient(135deg, hsl(${i * 60},70%,60%), hsl(${i * 60 + 30},70%,50%))`,
                  marginLeft: i > 0 ? '-8px' : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '15px', flexShrink: 0,
                }}>{em}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f1117' }}>Loved by 500+ customers</div>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>⭐️⭐️⭐️⭐️⭐️ across Ghana</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — phone */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 22, stiffness: 100, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ padding: '30px 40px 30px 40px' }} // breathing room for float cards
          >
            <PhoneMockup />
          </motion.div>
        </motion.div>

      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .hero-grid {
          grid-template-columns: 1fr !important;
          gap: 56px !important;
          text-align: center;
        }
        .hero-grid > div:last-child { order: -1; }
        .hero-grid p { margin-left: auto !important; margin-right: auto !important; }
        .hero-grid > div:first-child > div:last-of-type { justify-content: center; }
      }
    `}</style>
  </section>
);

export default HeroSection;