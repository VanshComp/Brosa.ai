import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import food1 from '../assets/food1.avif';
import food2 from '../assets/food2.avif';
import busBookingGuy from '../assets/freepik_bus.png';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────
   useTypewriter Hook
───────────────────────────────────────────────────────── */
function useTypewriter(phrases, typingSpeed = 70, deletingSpeed = 40, pauseTime = 3000) {
  const [length, setLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentPhraseLength = phrases[loopNum % phrases.length].length;

    if (isDeleting) {
      if (length === 0) {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      } else {
        timer = setTimeout(() => {
          setLength(prev => prev - 1);
        }, deletingSpeed);
      }
    } else {
      if (length === currentPhraseLength) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        timer = setTimeout(() => {
          setLength(prev => prev + 1);
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [length, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return { length, loopNum: loopNum % phrases.length };
}

/* ─────────────────────────────────────────────────────────
   PhoneMockup
───────────────────────────────────────────────────────── */
const PhoneMockup = ({ messages, accent = '#F97316' }) => {
  const [visible, setVisible] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let idx = 0;
    let timer;

    const tick = () => {
      if (!isMounted) return;

      if (idx < messages.length) {
        const m = messages[idx];
        if (m) {
          if (m.type === 'click_action') {
            setClickedItem(m.itemIndex);
          } else {
            setVisible(p => [...p, m]);
          }
        }
        idx++;
        timer = setTimeout(tick, m?.type === 'click_action' ? 800 : 1200);
      } else {
        timer = setTimeout(() => {
          if (!isMounted) return;
          idx = 0;
          setVisible([]);
          setClickedItem(null);
          tick();
        }, 3000);
      }
    };

    setVisible([]); // Reset on start
    setClickedItem(null);
    timer = setTimeout(tick, 500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [messages]);

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        {/* status bar */}
        <div style={{ padding:'7px 14px 2px', display:'flex', justifyContent:'space-between', fontSize:'10px', fontWeight:'700', color:'#111' }}>
          <span>9:41</span><span>●●</span>
        </div>
        {/* whatsapp header */}
        <div style={{ background:'#fff', padding:'7px 12px', display:'flex', alignItems:'center', gap:'8px', borderBottom:'1px solid rgba(0,0,0,0.05)', flexShrink:0 }}>
          <div style={{ width:'28px', height:'28px', borderRadius:'50%', background:`linear-gradient(135deg,${accent},#C2410C)`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:'800', fontSize:'11px', flexShrink:0 }}>B</div>
          <div>
            <div style={{ fontSize:'11px', fontWeight:'700' }}>Brosa</div>
            <div style={{ fontSize:'9px', color:'#25D366', fontWeight:'600' }}>● online</div>
          </div>
        </div>
        {/* chat */}
        <div className="phone-chat" style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {visible.map((msg, i) => {
            const isPhotoCard = msg.type === 'photoCard';
            // We consider the card clicked if it has the static clicked prop, or if it matches the dynamic clickedItem
            const isClicked = msg.clicked || clickedItem === i;

            return msg && (
            <motion.div
              key={`${i}-${msg.text || msg.title}`}
              initial={{ opacity:0, y:8, scale:0.94 }}
              animate={{ opacity:1, y:0, scale:1 }}
              transition={{ type:'spring', damping:18, stiffness:180 }}
              style={{
                alignSelf: msg.type==='user' ? 'flex-end' : 'flex-start',
                maxWidth: isPhotoCard ? '94%' : '85%',
                background: msg.type==='user' ? `linear-gradient(135deg,#25D366,#128C7E)` : (isPhotoCard ? 'transparent' : '#fff'),
                color: msg.type==='user' ? '#fff' : '#1a1a1a',
                padding: isPhotoCard ? '0' : '5px 9px',
                borderRadius: msg.type==='user' ? '11px 11px 3px 11px' : '11px 11px 11px 3px',
                fontSize:'10px', lineHeight:'1.4',
                boxShadow: isPhotoCard ? '0 4px 12px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.08)',
              }}
            >
              {isPhotoCard ? (
                <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', paddingBottom: '4px' }}>
                  <img src={msg.image} alt={msg.title} style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                  <div style={{ padding: '6px 8px' }}>
                    <div style={{ fontSize: '10px', fontWeight: '800', color: '#1C0A00' }}>{msg.title}</div>
                    <div style={{ fontSize: '9px', fontWeight: '800', color: '#25D366', marginBottom: '6px' }}>{msg.price}</div>
                    <div style={{ 
                      background: isClicked ? '#25D366' : '#fff', 
                      color: isClicked ? '#fff' : accent, 
                      border: `1px solid ${isClicked ? '#25D366' : 'rgba(0,0,0,0.1)'}`, 
                      textAlign: 'center', padding: '5px', borderRadius: '16px', fontSize: '9px', fontWeight: '800',
                      transition: 'all 0.2s ease',
                      transform: clickedItem === i ? 'scale(0.96)' : 'scale(1)'
                    }}>
                      {isClicked ? '✓ Added' : 'Order Now'}
                    </div>
                  </div>
                </div>
              ) : msg.text}
            </motion.div>
          )})}
        </div>
        {/* input */}
        <div style={{ background:'#f0f0f0', padding:'6px 10px', display:'flex', alignItems:'center', gap:'6px', flexShrink:0 }}>
          <div style={{ flex:1, background:'#fff', borderRadius:'16px', padding:'5px 11px', fontSize:'9px', color:'#bbb' }}>Message…</div>
          <div style={{ width:'26px', height:'26px', borderRadius:'50%', background:`linear-gradient(135deg,${accent},#EA580C)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px' }}>🎤</div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────── */
const FAQS = [
  { q: 'What is Brosa?', a: 'Brosa is an AI-powered WhatsApp ordering platform. Customers browse menus, order, and pay — no app download needed.' },
  { q: 'How does Brosa work?', a: 'Customers scan a QR code or tap a WhatsApp link. Our AI guides them through your menu, takes the order, and processes payment inside WhatsApp.' },
  { q: 'Is Brosa secure?', a: "Yes — Brosa runs inside WhatsApp's end-to-end encrypted environment. Payments go through verified, secure payment gateways." },
  { q: 'How do I get started?', a: 'Setup takes 5 minutes. Register, add your menu, get your QR code. No technical knowledge required.' },
  { q: 'Does Brosa work for all businesses?', a: 'Absolutely — restaurants, vendors, salons, pharmacies and more. If you sell something, Brosa can help you sell through WhatsApp.' },
];

const Faq = () => {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth:'800px', margin:'0 auto' }}>
      {FAQS.map((f, i) => (
        <div key={i} style={{ borderBottom:'1px solid rgba(249,115,22,0.1)' }}>
          <button
            onClick={() => setOpen(open===i ? null : i)}
            style={{ width:'100%', textAlign:'left', background:'none', border:'none', cursor:'pointer', padding:'22px 0', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px', fontFamily:'inherit' }}
          >
            <span style={{ fontSize:'15px', fontWeight:'600', color: open===i ? '#EA580C' : '#1C0A00', transition:'color 0.2s' }}>{f.q}</span>
            <motion.div
              animate={{ rotate: open===i ? 45 : 0 }}
              transition={{ type:'spring', stiffness:300, damping:22 }}
              style={{ width:'26px', height:'26px', borderRadius:'50%', border:`1.5px solid ${open===i?'#F97316':'rgba(249,115,22,0.25)'}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', color: open===i?'#F97316':'#78716C', flexShrink:0 }}
            >+</motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open===i && (
              <motion.div
                key="a"
                initial={{ height:0, opacity:0 }}
                animate={{ height:'auto', opacity:1 }}
                exit={{ height:0, opacity:0 }}
                transition={{ height:{ type:'spring', damping:26, stiffness:200 }, opacity:{ duration:0.18 } }}
                style={{ overflow:'hidden' }}
              >
                <p style={{ fontSize:'14px', color:'#78716C', lineHeight:'1.7', paddingBottom:'20px', maxWidth:'680px' }}>{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   HomePage
───────────────────────────────────────────────────────── */
const typePhrases = [
  [ { text: "Transform Your ", color: "dark" }, { text: "Business Today", color: "orange" } ],
  [ { text: "Order. Pay. Done. ", color: "orange" }, { text: "All on WhatsApp", color: "dark" } ],
  [ { text: "WhatsApp Ordering ", color: "dark" }, { text: "Made Simple!", color: "orange" } ],
  [ { text: "No Apps. No Stress. ", color: "dark" }, { text: "Just Orders.", color: "orange" } ]
];

const HomePage = () => {
  const rootRef = useRef(null);

  const { length, loopNum } = useTypewriter(
    typePhrases.map(tokens => tokens.map(t => t.text).join('')),
    60, 30, 2500
  );

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      // Clear the state so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title);
      
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const NAV_HEIGHT = 72;
          const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500); // Increased delay to ensure layout and images are loaded
      return () => clearTimeout(timer);
    }
  }, [location]);

  const renderTypedText = () => {
    let remaining = length;
    return typePhrases[loopNum].map((token, i) => {
      if (remaining <= 0) return null;
      const chunk = token.text.substring(0, remaining);
      remaining -= token.text.length;
      
      if (token.color === 'orange') {
        return (
          <span key={i} style={{ background:'linear-gradient(135deg, #F97316, #EA580C)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            {chunk}
          </span>
        );
      } else {
        return (
          <span key={i} style={{ color: '#0A1A12' }}>
            {chunk}
          </span>
        );
      }
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // GPU-accelerate all scene backgrounds
      gsap.set('.gs-bg', {
        position: 'fixed', inset: 0,
        force3D: true,
        willChange: 'transform, opacity',
      });
      gsap.set('.gs-proxy', { position:'absolute', inset:0, zIndex:20, pointerEvents:'none' });
      // Ensure all interactive content inside fixed panels can receive clicks
      gsap.set('.gs-content', { pointerEvents:'all' });

      // Hero exit — scale + fade (GPU only)
      gsap.set('#hero-bg', { zIndex:1, transformOrigin:'50% 30%', force3D:true });
      gsap.to('#hero-bg', {
        scale: 0.82, yPercent: -6, opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger:'#hero-wrap', start:'top top', end:'bottom top', scrub:true },
      });

      // All scene panels — pure translateY (GPU compositor)
      const sceneBgs = gsap.utils.toArray('.scene-bg');
      sceneBgs.forEach((bg, i) => {
        const wrap = bg.closest('.gs-wrap');
        gsap.set(bg, { yPercent:100, zIndex:2+i, force3D:true, willChange:'transform' });
        gsap.to(bg, {
          yPercent: 0, ease: 'none',
          scrollTrigger: { trigger:wrap, start:'top bottom', end:'top top', scrub:true },
        });
      });

    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} style={{ background:'#FFFBF5' }}>

      {/* ═══════════════════════════════════════════════
          HERO — Warm cream with orange glows
      ══════════════════════════════════════════════ */}
      <div id="hero-wrap" className="gs-wrap gs-wrap--hero">
        <div id="hero-bg" className="gs-bg" style={{ background:'linear-gradient(150deg, #FFFBF5 0%, #FFF7ED 55%, #FFEDD5 100%)' }}>

          {/* Orange glow orbs */}
          <div style={{ position:'absolute', top:'8%', right:'4%', width:'520px', height:'520px', borderRadius:'50%', background:'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'10%', left:'5%', width:'360px', height:'360px', borderRadius:'50%', background:'radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'40%', left:'25%', width:'240px', height:'240px', borderRadius:'50%', background:'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />

          <div className="gs-content">
            <div className="gs-inner">
              <div className="two-col">

                {/* Left copy */}
                <motion.div
                  initial={{ opacity:0, y:36 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ type:'spring', damping:22, stiffness:100, delay:0.08 }}
                >
                  <motion.span
                    initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                    transition={{ delay:0.2, type:'spring', damping:20 }}
                    className="badge-pill"
                  >🚀 Now available across Ghana</motion.span>

                  <h1 className="t-h1" style={{ minHeight: '160px', display: 'flex', alignItems: 'center' }}>
                    <div>
                      {renderTypedText()}
                      <span className="cursor-blink" style={{ color: '#EA580C', fontWeight: 300, marginLeft: '2px' }}>|</span>
                    </div>
                  </h1>

                  <p style={{ fontSize:'17px', color:'#78716C', lineHeight:'1.72', marginBottom:'40px', maxWidth:'460px' }}>
                    Brosa helps businesses sell and helps customers order, pay, and get what they need — all in one simple chat.
                  </p>

                  <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
                    <a href="https://wa.me/message/52KOT5KCITWJB1" target="_blank" rel="noopener noreferrer" className="btn-dark">
                      💬 Try Brosa Now
                    </a>
                    <button
                      className="btn-outline"
                      onClick={() => { const el=document.getElementById('features'); if(el) el.scrollIntoView({ behavior:'smooth' }); }}
                    >See how it works ↓</button>
                  </div>

                  {/* Social proof */}
                  <div style={{ display:'flex', alignItems:'center', gap:'12px', marginTop:'36px' }}>
                    <div style={{ display:'flex' }}>
                      {['🧑🏿','👩🏽','👨🏾','👩🏿','🧑🏽'].map((em,i) => (
                        <div key={i} style={{ width:'28px', height:'28px', borderRadius:'50%', border:'2.5px solid #FFF7ED', background:`hsl(${20+i*15},75%,58%)`, marginLeft:i>0?'-8px':0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', flexShrink:0 }}>{em}</div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize:'13px', fontWeight:'700', color:'#1C0A00' }}>Loved by 500+ customers</div>
                      <div style={{ fontSize:'11px', color:'#a8a29e' }}>⭐️⭐️⭐️⭐️⭐️ across Ghana</div>
                    </div>
                  </div>
                </motion.div>

                {/* Right — phone */}
                <motion.div
                  initial={{ opacity:0, x:40, scale:0.92 }}
                  animate={{ opacity:1, x:0, scale:1 }}
                  transition={{ type:'spring', damping:22, stiffness:90, delay:0.3 }}
                  style={{ display:'flex', justifyContent:'center' }}
                >
                  <div className="phone-float" style={{ position:'relative', padding:'30px 50px 30px 40px' }}>
                    <PhoneMockup messages={[
                      { type:'user', text:'Order jollof rice for me 🍛' },
                      { type:'bot',  text:"Mama Abena's — GHS 30 each. How many?" },
                      { type:'user', text:'2 please!' },
                      { type:'bot',  text:'✅ Total GHS 60. Pay now?' },
                      { type:'user', text:'Yes pay now!' },
                      { type:'bot',  text:'💰 Done! Ready in ~20 mins.' },
                    ]} />
                    {/* Floating order badge */}
                    <div style={{ position:'absolute', top:'10px', right:'-10px', background:'#fff', borderRadius:'50px', padding:'8px 14px', display:'flex', alignItems:'center', gap:'8px', boxShadow:'0 8px 28px rgba(249,115,22,0.15)', whiteSpace:'nowrap', zIndex:10, animation:'phoneFloat 3.5s ease-in-out infinite' }}>
                      <div style={{ width:'28px', height:'28px', borderRadius:'50%', background:'linear-gradient(135deg,#F97316,#EA580C)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px' }}>🛒</div>
                      <div>
                        <div style={{ fontWeight:'700', fontSize:'11px', color:'#1C0A00' }}>Order placed!</div>
                        <div style={{ fontSize:'9px', color:'#a8a29e' }}>Mama Abena's Kitchen</div>
                      </div>
                    </div>
                    {/* Stats chip */}
                    <div style={{ position:'absolute', bottom:'55px', left:'-5px', background:'#fff', borderRadius:'14px', padding:'10px 14px', boxShadow:'0 8px 24px rgba(249,115,22,0.12)', zIndex:10, animation:'phoneFloat 4s ease-in-out infinite', animationDelay:'-2s' }}>
                      <div style={{ fontSize:'9px', color:'#a8a29e', marginBottom:'3px' }}>Today's Orders</div>
                      <div style={{ fontSize:'22px', fontWeight:'800', color:'#F97316', lineHeight:1 }}>47</div>
                      <div style={{ fontSize:'9px', color:'#22c55e', fontWeight:'700', marginTop:'3px' }}>↑ +12%</div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          FEATURE 1 — Order Food (Light cream)
      ══════════════════════════════════════════════ */}
      <div className="gs-wrap" id="features">
        <div className="gs-bg scene-bg" style={{ background:'#FFF7ED' }}>
          {/* Decorative orange blob */}
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div className="gs-content">
            <div className="gs-inner">
              <div className="two-col">
                <div className="col-phone phone-wrap">
                  <div className="phone-float" style={{ position:'relative' }}>
                    <PhoneMockup accent="#F97316" messages={[
                      { type: 'photoCard', image: food1, title: 'Spicy Jollof Rice', price: 'GHS 45' },
                      { type: 'photoCard', image: food2, title: 'Grilled Tilapia', price: 'GHS 60' },
                      { type: 'click_action', itemIndex: 1 },
                      { type: 'bot',  text: 'Total GHS 60. Confirm?' },
                      { type: 'user', text: 'Yes, confirm!' },
                      { type: 'bot',  text: '💰 Order placed! Ready in 20m.' },
                    ]} />
                    <div className="float-chip float-chip--orange" style={{ top:'12px', right:'-28px' }}>GH₵ 60.00 paid ✓</div>
                  </div>
                </div>
                <div>
                  <span className="t-tag">Ordering</span>
                  <h2 className="t-h2" style={{ color:'#1C0A00' }}>Order Food,<br/>Stress-Free</h2>
                  <p className="t-body">Chale, why stress?
Text Brosa on WhatsApp and get your favorite food — fast, simple, no app needed.</p>
                  <a href="https://wa.me/message/52KOT5KCITWJB1" className="btn-dark">Try It Out 🧡</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          FEATURE 1.5 — Bus Bookings (Warm dark — CONTRAST)
      ══════════════════════════════════════════════ */}
      <div className="gs-wrap">
        <div className="gs-bg scene-bg" style={{ background:'#1C0A00' }}>
          {/* Orange glow in dark */}
          <div style={{ position:'absolute', top:'20%', right:'5%', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'10%', left:'10%', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div className="gs-content">
            <div className="gs-inner">
              <div className="two-col">
                <div>
                  <span className="t-tag t-tag--light">Bus Bookings</span>
                  <h2 className="t-h2" style={{ color:'#fff' }}>Book Your Next<br/>Trip Happily</h2>
                  <p className="t-body t-body--light">Skip the app. Skip the queues. Book tickets instantly on WhatsApp with Brosa.</p>
                  <a href="https://wa.me/message/52KOT5KCITWJB1" className="btn-dark--inv">Try It Out</a>
                </div>
                <div className="phone-wrap">
                  <div className="phone-float--alt" style={{ position:'relative' }}>
                    <PhoneMockup accent="#FB923C" messages={[
                      { type: 'user', text: 'Book VIP Jeoun bus to Kumasi 🚌' },
                      { type: 'photoCard', image: busBookingGuy, title: 'VIP Jeoun (Accra to Kumasi)', price: 'GHS 150', clicked: false },
                      { type: 'click_action', itemIndex: 1 },
                      { type: 'bot',  text: 'Confirm & Pay' },
                      { type: 'user', text: 'GHS 150 Paid' },
                      { type: 'bot',  text: 'Have a happy journey' },
                    ]} />
                    <div className="float-chip float-chip--orange" style={{ top:'12px', left:'-28px' }}>🚌 Next Bus: 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          FEATURE 4 — Multi-Purpose (Light cream)
      ══════════════════════════════════════════════ */}
      <div className="gs-wrap">
        <div className="gs-bg scene-bg" style={{ background:'#FFF7ED' }}>
          <div style={{ position:'absolute', top:'15%', left:'-5%', width:'380px', height:'380px', borderRadius:'50%', background:'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div className="gs-content">
            <div className="gs-inner">
              <div className="two-col">
                <div>
                  <span className="t-tag">Multi-Purpose</span>
                  <h2 className="t-h2" style={{ color:'#1C0A00' }}>From your next meal<br/>to your next trip</h2>
                  <p className="t-body">One platform. Every need.
                    From meals to movies, health to insurance — Brosa handles it all on WhatsApp.</p>
                  <a href="https://wa.me/message/52KOT5KCITWJB1" className="btn-dark">Try It Out 🧡</a>
                </div>
                <div className="phone-wrap">
                  <div className="phone-float--alt" style={{ position:'relative', animationDuration:'4.2s' }}>
                    <PhoneMockup accent="#F97316" messages={[
                      { type:'user', text:'Book VIP Jeoun bus to Kumasi 🚌' },
                      { type:'bot',  text:'🎟️ VIP Jeoun (Accra to Kumasi). 2:00 PM available. 1 Seat?' },
                      { type:'user', text:'Yes, and 2 Silverbird movie tickets for tonight 🍿' },
                      { type:'bot',  text:'✅ Bus & Movie tickets secured! Pay GHS 350 to confirm.' },
                    ]} />
                    <div className="float-chip float-chip--orange" style={{ top:'12px', left:'-28px' }}>🚌 VIP Jeoun</div>
                    <div className="float-chip float-chip--dark" style={{ bottom:'18px', right:'-28px' }}>🍿 Silverbird</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          FEATURE 2 — Analytics (Warm dark — CONTRAST)
      ══════════════════════════════════════════════ */}
      <div className="gs-wrap">
        <div className="gs-bg scene-bg" style={{ background:'#1C0A00' }}>
          {/* Orange glow in dark */}
          <div style={{ position:'absolute', top:'20%', right:'5%', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'10%', left:'10%', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div className="gs-content">
            <div className="gs-inner">
              <div className="two-col">
                <div>
                  <span className="t-tag t-tag--light">Analytics</span>
                  <h2 className="t-h2" style={{ color:'#fff' }}>Manage Orders<br/>Online</h2>
                  <p className="t-body t-body--light">Vendors get real-time order summaries and daily sales reports delivered straight to WhatsApp — no dashboards to learn.</p>
                  <a href="https://wa.me/message/52KOT5KCITWJB1" className="btn-dark--inv">Try It Out</a>
                </div>
                <div className="phone-wrap">
                  <div className="phone-float--alt" style={{ position:'relative' }}>
                    <PhoneMockup accent="#FB923C" messages={[
                      { type:'bot',  text:'📊 Today: 47 orders · GHS 2,340' },
                      { type:'user', text:'Show top items' },
                      { type:'bot',  text:'🥇 Jollof Rice — 18 sold' },
                    ]} />
                    <div className="float-chip float-chip--orange" style={{ top:'12px', left:'-28px' }}>↑ +23% today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          PAYMENTS — Warm cream (Light)
      ══════════════════════════════════════════════ */}
      <div id="payments" className="gs-wrap">
        <div className="gs-bg scene-bg" style={{ background:'#FFF7ED' }}>
          <div style={{ position:'absolute', top:'-10%', left:'-5%', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div className="gs-content">
            <div className="gs-inner">
              <div className="two-col">
                <div className="col-phone phone-wrap">
                  <div className="phone-float" style={{ position:'relative' }}>
                    <PhoneMockup accent="#F59E0B" messages={[
                      { type: 'bot',  text: 'Select Payment Method:\n1. 🟡 MTN MoMo\n2. 🔴 Vodafone Cash\n3. 🔵 AirtelTigo Money\n4. 💳 Visa / Master Card' },
                      { type: 'user', text: '4. Visa Card' },
                      { type: 'bot',  text: 'Processing Visa payment for GHS 150...' },
                      { type: 'bot',  text: '✅ Payment Successful! Receipt: #BR782' },
                    ]} />
                    <div className="float-chip float-chip--orange" style={{ top:'25px', right:'-32px' }}>🔒 Encrypted Payment</div>
                    <div className="float-chip float-chip--dark" style={{ bottom:'60px', left:'-28px' }}>🇬🇭 All Networks</div>
                  </div>
                </div>
                <div>
                  <span className="t-tag">Payments</span>
                  <h2 className="t-h2" style={{ color:'#1C0A00' }}>Pay with Ease,<br/>Any Way You Want</h2>
                  <p className="t-body">Brosa supports all major mobile money networks. Simply select your preferred network and pay securely right in the chat — Hassle freeeee</p>
                  <div style={{ display:'flex', gap:'12px', marginTop:'24px', flexWrap:'wrap' }}>
                    <div style={{ padding:'8px 16px', background:'#fff', borderRadius:'10px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)', fontSize:'12px', fontWeight:'700', color:'#78716C' }}>🟡 MTN</div>
                    <div style={{ padding:'8px 16px', background:'#fff', borderRadius:'10px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)', fontSize:'12px', fontWeight:'700', color:'#78716C' }}>🔴 Vodafone</div>
                    <div style={{ padding:'8px 16px', background:'#fff', borderRadius:'10px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)', fontSize:'12px', fontWeight:'700', color:'#78716C' }}>🔵 AirtelTigo</div>
                    <div style={{ padding:'8px 16px', background:'#fff', borderRadius:'10px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)', fontSize:'12px', fontWeight:'700', color:'#78716C' }}>💳 Visa / Card</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          USE CASES — Warm dark (rich burnt)
      ══════════════════════════════════════════════ */}
      <div id="solutions" className="gs-wrap gs-wrap--short">
        <div className="gs-bg scene-bg" style={{ background:'#0C0601' }}>
          {/* Warm amber glow top */}
          <div style={{ position:'absolute', top:'-10%', left:'50%', transform:'translateX(-50%)', width:'800px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div className="gs-content">
            <div className="gs-inner">
              <div style={{ textAlign:'center', marginBottom:'48px' }}>
                <span className="t-tag t-tag--light">Order via WhatsApp</span>
                <h2 className="t-h2" style={{ color:'#fff' }}>Daily lifestyle platform</h2>
                <p style={{ fontSize:'15px', color:'rgba(255,255,255,0.50)', maxWidth:'480px', margin:'0 auto', lineHeight:'1.65' }}>
                  From your favourite restaurant to the next big movie — order, book, and pay without leaving WhatsApp.
                </p>
              </div>

              <div className="uc-grid">
                {[
                  {
                    icon: '🛵',
                    label: 'Order Delivery',
                    img: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=600&fit=crop&auto=format',
                    desc: 'Get hot meals, groceries, and more delivered right to your door — ordered and tracked through WhatsApp in seconds.',
                    badge: '#F97316',
                  },
                  {
                    icon: '🍽️',
                    label: 'Buffet Reservations',
                    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop&auto=format',
                    desc: 'Reserve your table, pre-order your meal, and skip the queue at your favourite restaurant — all on WhatsApp.',
                    badge: '#EA580C',
                  },
                  {
                    icon: '🚌',
                    label: 'Bus Ticketing · VIP JEOUN',
                    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=600&fit=crop&auto=format',
                    desc: 'Book VIP JEOUN intercity bus tickets instantly. Choose your seat, pay securely, and receive your e-ticket on WhatsApp.',
                    badge: '#C2410C',
                  },
                  {
                    icon: '🎬',
                    label: 'Movie Ticketing',
                    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=600&fit=crop&auto=format',
                    desc: "Pick your show, choose your seats, and pay — your cinema e-ticket lands straight in your WhatsApp chat.",
                    badge: '#9A3412',
                  },
                ].map((uc, i) => (
                  <div key={i} style={{ borderRadius:'20px', overflow:'hidden', background:'#1a0700', boxShadow:'0 12px 42px rgba(0,0,0,0.5)', display:'flex', flexDirection:'column' }}>
                    {/* Photo */}
                    <div style={{ height:'220px', position:'relative', overflow:'hidden', flexShrink:0 }}>
                      <img
                        src={uc.img}
                        alt={uc.label}
                        style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      {/* Gradient overlay */}
                      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.65))' }} />
                      {/* Label pill */}
                      <div style={{ position:'absolute', bottom:'13px', left:'13px', background:`${uc.badge}E6`, backdropFilter:'blur(8px)', borderRadius:'50px', padding:'6px 13px', fontSize:'12px', fontWeight:'700', display:'flex', alignItems:'center', gap:'6px', color:'#fff', whiteSpace:'nowrap' }}>
                        <span style={{ fontSize:'14px' }}>{uc.icon}</span>{uc.label}
                      </div>
                    </div>
                    {/* Description */}
                    <div style={{ padding:'18px 18px 22px', flex:1 }}>
                      <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.55)', lineHeight:'1.65', margin:0 }}>{uc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          FAQ (Very warm off-white)
      ══════════════════════════════════════════════ */}
      <div id="faq" className="gs-wrap gs-wrap--short">
        <div className="gs-bg scene-bg" style={{ background:'#FFFBF5' }}>
          <div className="gs-content">
            <div className="gs-inner">
              <div style={{ textAlign:'center', marginBottom:'52px' }}>
                <span className="t-tag">Got Questions?</span>
                <h2 className="t-h2" style={{ color:'#1C0A00' }}>Frequently Asked Questions</h2>
              </div>
              <Faq />
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

      {/* ═══════════════════════════════════════════════
          CTA — Premium dark-warm, centered
      ══════════════════════════════════════════════ */}
      <div className="gs-wrap gs-wrap--short">
        <div className="gs-bg scene-bg" style={{ background:'linear-gradient(160deg, #0C0601 0%, #2D0A00 55%, #431407 100%)' }}>

          {/* Soft orange glow — accent only, not background */}
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'900px', height:'500px', borderRadius:'50%', background:'radial-gradient(ellipse, rgba(249,115,22,0.10) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', width:'700px', height:'2px', background:'linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)', pointerEvents:'none' }} />

          <div className="gs-content">
            <div className="gs-inner">

              {/* Centered layout - pushed up specifically to avoid Footer overlap */}
              <div style={{ textAlign:'center', maxWidth:'720px', margin:'0 auto', paddingBottom:'25vh' }}>

                {/* Eyebrow tag */}
                <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(249,115,22,0.12)', border:'1px solid rgba(249,115,22,0.25)', borderRadius:'50px', padding:'6px 16px', marginBottom:'28px' }}>
                  <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#F97316', display:'inline-block', animation:'chipFloat 1.5s ease-in-out infinite' }} />
                  <span style={{ fontSize:'12px', fontWeight:'600', color:'#FB923C', letterSpacing:'0.06em', textTransform:'uppercase' }}>Ready to launch? Setup is free</span>
                </div>

                {/* Headline */}
                <h2 style={{ fontSize:'clamp(32px, 5vw, 62px)', fontWeight:'900', lineHeight:'1.08', letterSpacing:'-1px', color:'#fff', marginBottom:'20px' }}>
                  Start Taking Orders<br/>
                  <span style={{ background:'linear-gradient(135deg, #FB923C, #F97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>in 5 Minutes.</span>
                </h2>

                {/* Sub-text */}
                <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.50)', lineHeight:'1.75', marginBottom:'40px', maxWidth:'480px', margin:'0 auto 40px' }}>
                  Register your WhatsApp storefront, add your menu, and get your QR code — all in one go. No tech skills needed.
                </p>

                {/* 3-Step process row */}
                <div style={{ display:'flex', justifyContent:'center', gap:'0', marginBottom:'44px', flexWrap:'wrap' }}>
                  {[
                    { num:'01', label:'Register',   desc:'Create your storefront' },
                    { num:'02', label:'Add Menu',    desc:'Upload items & prices'  },
                    { num:'03', label:'Get Orders',  desc:'Share QR & go live'     },
                  ].map((step, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center' }}>
                      <div style={{ textAlign:'center', padding:'0 24px' }}>
                        <div style={{ fontSize:'11px', fontWeight:'800', color:'#F97316', letterSpacing:'0.08em', marginBottom:'6px' }}>{step.num}</div>
                        <div style={{ fontSize:'14px', fontWeight:'700', color:'#fff', marginBottom:'3px' }}>{step.label}</div>
                        <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.38)' }}>{step.desc}</div>
                      </div>
                      {i < 2 && <div style={{ width:'1px', height:'36px', background:'rgba(249,115,22,0.18)', flexShrink:0 }} />}
                    </div>
                  ))}
                </div>

                {/* Single CTA button */}
                <a
                  href="https://forms.gle/M2bzMeER3nURvzyM9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems:'center', gap:'10px',
                    background: '#fff',
                    color: '#C2410C',
                    padding: '16px 40px',
                    borderRadius: '14px',
                    fontSize: '16px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 20px 50px rgba(0,0,0,0.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.35)'; }}
                >
                  <span style={{ fontSize:'20px' }}>📝</span>
                  Register
                  <span style={{ fontSize:'18px', marginLeft:'2px' }}>→</span>
                </a>

                {/* Trust row */}
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'24px', marginTop:'28px', flexWrap:'wrap' }}>
                  {[
                    '✓ No setup fee',
                    '✓ 500+ businesses',
                    '✓ Live in 5 mins',
                  ].map((t, i) => (
                    <span key={i} style={{ fontSize:'12px', color:'rgba(255,255,255,0.35)', fontWeight:'500' }}>{t}</span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="gs-proxy" />
      </div>

    </div>
  );
};

export default HomePage;