import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrosaLogo from '../images/brosa-logo.png';

import footerVideo from '../assets/footer_video.mp4';

const FOOTER_LINKS = [
  { label: 'Terms',          path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Blogs',          path: '/blog' },
];

const SOCIAL_LINKS = [
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/trybrosa?igsh=bmd3dXRrc3ZtcDdj', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  { 
    name: 'Facebook',  
    url: 'https://www.facebook.com/TryBrosa/',   
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  { 
    name: 'Twitter',   
    url: 'https://x.com/tryBrosa',                          
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    )
  },
  { 
    name: 'TikTok',   
    url: 'https://www.tiktok.com/@trybrosa',                          
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    )
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#FFF7ED', position: 'relative', zIndex: 18, borderTop: '1px solid rgba(249,115,22,0.1)' }}>

      {/* ── Top bar ─────────────────────────────────────── */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '16px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
        borderBottom: '1px solid rgba(249,115,22,0.06)',
      }}>
        <nav style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'center' }}>
          {FOOTER_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.path}
              style={{ fontSize: '14px', color: '#78716C', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = '#EA580C'}
              onMouseLeave={e => e.target.style.color = '#78716C'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p style={{ fontSize: '13px', color: '#a8a29e', fontWeight: '400' }}>
          © {year} Brosa AI. All rights reserved.
        </p>
      </div>

      {/* ── Brand strip ─────────────────────────────────── */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '24px 24px 32px',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '20px',
      }}>
        {/* Logo + Video */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '280px' }}>
          <video
            src={footerVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{ 
              width: '100%', 
              borderRadius: '24px', 
              boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
              mixBlendMode: 'multiply',
              filter: 'brightness(1.02) contrast(1.02)'
            }}
          />
        </div>

        {/* Right: tagline + socials */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
          <div style={{ textAlign: 'right', marginBottom: '8px' }}>
            <p style={{ fontSize: '12px', color: '#a8a29e', margin: '0', lineHeight: '1.1' }}>
              Your daily lifestyle, powered by Brosa
            </p>
            <p style={{ fontSize: '12px', color: '#a8a29e', margin: '0', lineHeight: '1.1' }}>
              Ghana 🇬🇭
            </p>
          </div>
          
          {/* Contact Details */}
          <div style={{ textAlign: 'right', marginBottom: '8px' }}>
            <a href="tel:+233203431334" style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1C0A00', textDecoration: 'none', lineHeight: '1.2' }}>+233 20 343 1334</a>
            <a href="mailto:Hello@brosa.ai" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#EA580C', textDecoration: 'none', lineHeight: '1.2' }}>Hello@brosa.ai</a>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {SOCIAL_LINKS.map(s => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', color: '#EA580C',
                  border: '1px solid rgba(249,115,22,0.12)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F97316, #EA580C)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(249,115,22,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#EA580C';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;