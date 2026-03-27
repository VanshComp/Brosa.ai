import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Typed from 'typed.js';
import anime from 'animejs';
import gif_promotion from '../images/promotion.gif';
import gif_smartphone from '../images/smartphone.gif';
import gif_credit from '../images/credit-card.gif';

const HeroSection = () => {
  const typedRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // Initialize Typed.js for typewriter effect
    const typed = new Typed(typedRef.current, {
      strings: [
        'WhatsApp Ordering Made Simple!',
        'No Apps. No Stress. Just Orders.',
        'Transform Your Business Today',
        'Order. Pay. Done. All on WhatsApp',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    // Animate elements on load
    const animateElements = async () => {
      await controls.start({
        opacity: [0, 1],
        y: [50, 0],
        transition: { duration: 0.8, ease: 'easeOut' },
      });

      // Animate floating elements
      anime({
        targets: '.float-element',
        translateY: [-10, 10],
        duration: 3000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
      });
    };

    animateElements();

    return () => {
      typed.destroy();
    };
  }, [controls]);

  const MotionLink = motion(Link);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-teal-100 rounded-full opacity-60 float-element"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-100 rounded-lg opacity-60 float-element"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-purple-100 rounded-full opacity-60 float-element"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-teal-50 rounded-lg opacity-40 float-element"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="heading-gradient">
                <span ref={typedRef}></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Brosa helps businesses sell and helps customers order, pay, and get what they need — all in one simple chat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motionLink
                to="/register"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(20, 184, 166, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Register Your Store
              </motionLink>
              <motionLink
                to="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Start Now
              </motionLink>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: gif_smartphone, title: 'No App, Just Chat', desc: 'Order instantly' },
                { icon: gif_credit, title: 'Simplified Payments', desc: 'Secure & fast' },
                { icon: gif_promotion, title: 'All in WhatsApp', desc: 'All in One' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="mx-auto mb-2 h-12 w-12 object-contain"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
    <div className="relative w-[320px] h-[660px] rounded-[40px] bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-2.5 shadow-[0_30px_90px_rgba(0,0,0,0.65)]">

      {/* Soft glow */}
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 blur-xl" />

      {/* Screen */}
      <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#efeae2] flex flex-col">

        {/* Status bar */}
        <div className="h-6 px-3 flex justify-between items-center text-[11px] font-medium">
          <span>9:41</span>
          <div className="flex gap-1">📶 🔋</div>
        </div>

        {/* Header */}
        <div className="backdrop-blur-md bg-white/85 border-b px-3 py-2 flex items-center gap-2.5">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold shadow"
          >
            B
          </motion.div>

          <div className="flex-1 leading-tight">
            <p className="text-[13px] font-semibold">Brosa</p>
            <p className="text-[10px] text-emerald-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              online
            </p>
          </div>

          <div className="flex gap-2 text-emerald-600 text-sm">📹 📞</div>
        </div>

        {/* Chat */}
        <div className="flex-1 px-2.5 py-3 space-y-3 overflow-y-auto">

          {/* User message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-end"
          >
            <div className="bg-gradient-to-br from-emerald-300 to-emerald-400 px-3 py-1.5 rounded-2xl text-[12px] shadow">
              Hallo 👋
            </div>
          </motion.div>

          {/* Catalog card (no image dependency) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border"
          >
            {/* Fake image area */}
            <img
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73"
              className="h-36 w-full object-cover"
            />


            <div className="p-3">
              <p className="font-semibold text-[13px]">Brosa Store</p>
              <p className="text-[11px] text-zinc-500">
                30 products · trending 🔥
              </p>

              <p className="text-[12px] mt-1.5">
                Explore what’s hot today & order instantly ⚡
              </p>

              <button className="mt-2 w-full py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-[12px] font-semibold shadow hover:scale-[1.02] transition">
                View Products
              </button>
            </div>
          </motion.div>

          {/* Order card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-2xl p-3 shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-xl">
                🥐
              </div>
              <div>
                <p className="font-medium text-[12px]">🛒 8 items</p>
                <p className="text-[12px] opacity-80">€10.00</p>
              </div>
            </div>

            <button className="mt-2 w-full bg-black/80 text-white py-1.5 rounded-xl text-[12px] font-semibold hover:scale-[1.03] transition">
              View Order
            </button>
          </motion.div>
        </div>

        {/* Input */}
        <div className="bg-white/85 backdrop-blur-md border-t px-2.5 py-2 flex items-center gap-2">
          <span className="text-xl text-emerald-500">＋</span>
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[12px] text-zinc-400">
            Message…
          </div>
          <span className="text-xl text-emerald-500">🎤</span>
        </div>
      </div>
    </div>
              {/* Floating Elements Around Phone */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-pulse"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;