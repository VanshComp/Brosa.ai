import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import BrosaLogoWhite from '../images/brosa-logo-white.png';
import { WHATSAPP_LINK } from '../utils/constants';

const FOOTER_NAV = [
  {
    title: 'Product',
    links: [
      { label: 'P2P MoMo Transfer', href: '#product' },
      { label: 'MoMo to Bank', href: '#product' },
      { label: 'Snap & Pay OCR', href: '#product' },
      { label: 'Airtime & Data', href: '#product' },
      { label: 'AI Spending Insights', href: '#product' },
    ]
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Individuals & Families', href: '#use-cases' },
      { label: 'Merchants & Shops', href: '#use-cases' },
      { label: 'Freelancers & Creators', href: '#use-cases' },
      { label: 'Diaspora & Cross-Border', href: '#use-cases' },
      { label: 'Campus Ambassadors 🎓', href: '#ambassador' },
    ]
  },
  {
    title: 'Infrastructure',
    links: [
      { label: 'Developer APIs', href: '#developers' },
      { label: 'Dynamic QR Engine', href: '#features' },
      { label: 'Security & PIN Protocol', href: '#security' },
      { label: 'Emergency Lock', href: '#security' },
    ]
  },
  {
    title: 'Legal & Company',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Contact Support', href: "https://wa.me/233203431334?text=Support%20Brosa", isExternal: true },
      { label: 'FAQs', href: '#faq' },
    ]
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToTop: true } });
    }
  };

  const handleAnchorClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } });
      } else {
        const el = document.getElementById(id);
        if (el) {
          const navOffset = 80;
          const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-[#070112] text-slate-400 border-t border-[#320472]/50 relative overflow-hidden">
      {/* Ambient royal purple mesh glow with #320472 */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#320472]/45 via-[#4C1D95]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-t from-[#320472]/35 via-[#EA580C]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">

        {/* Top 4-Column Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 pb-14 border-b border-[#320472]/30">

          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <button
              onClick={handleLogoClick}
              className="inline-block group py-1 text-left cursor-pointer focus:outline-none"
              aria-label="Brosa Home - Scroll to top"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-[#320472] border border-[#320472]/80 shadow-lg shadow-[#320472]/40 group-hover:scale-105 transition-transform duration-200">
                <img
                  src={BrosaLogoWhite}
                  alt="Brosa"
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                />
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Brosa is a WhatsApp-based payment platform that makes it easy to send, receive, and make payments locally and across borders, without downloading another app.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#320472]/70 hover:bg-[#320472] border border-[#320472] shadow-md shadow-[#320472]/30 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_NAV.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                {col.title}
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => !link.isExternal && handleAnchorClick(e, link.href)}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Regulatory & Disclaimer */}
        <div className="py-8 border-b border-white/5 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> Brosa is a financial technology platform, not a licensed bank or deposit-taking institution. All financial transactions, including local and cross-border payments, fiat currency transfers, mobile money transactions, and bank settlements, are facilitated through licensed financial institutions and authorized payment service providers in their respective jurisdictions.
          </p>
          <p className='py-4'>All third-party trademarks, logos, and brand names are the property of their respective owners.
          </p>
        </div>

        {/* Bottom copyright & status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Brosa AI Inc. All rights reserved. Designed for Africa and the World.
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All Systems Operational (99.9% Uptime)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
