import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from "react";
import BrosaLogo from '../images/brosa-logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/' },
      { label: 'Press', path: '/' },
      { label: 'Contact', path: '/contact' },
    ],
    product: [
      { label: 'Features', path: '/services' },
      { label: 'Pricing', path: '/' },
      { label: 'Integrations', path: '/' },
      { label: 'API', path: '/' },
    ],
    resources: [
      { label: 'Blog', path: '/' },
      { label: 'Documentation', path: '/' },
      { label: 'Help Center', path: '/' },
      { label: 'Community', path: '/' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/' },
      { label: 'Terms of Service', path: '/' },
      { label: 'Cookie Policy', path: '/' },
      { label: 'GDPR', path: '/' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: 'https://www.instagram.com/brosaai?igsh=OGhtMTZvODBxMTdk' },
    { name: 'Facebook', icon: 'f', url: 'https://www.facebook.com/profile.php?id=61578964603121&_rdc=1&_rdr#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'TikTok', icon: 'Tk', url: ' https://www.tiktok.com/@brosa.ai7?_r=1&_t=ZM-9340dXbkX8O' },
  ];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return alert("Please enter an email");

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Subscribed successfully 🎉");
      setEmail("");
    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-gray-100 border-t border-gray-200">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src={BrosaLogo}
                alt="Brosa AI"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Transform your business with WhatsApp ordering. No apps needed - just scan, order, and pay. The simplest solution for online orders.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Stay Updated with Brosa AI
        </h3>
        <p className="text-gray-600 mb-6">
          Get the latest features, tips, and industry insights delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            onClick={handleSubscribe}
            className="btn-primary whitespace-nowrap"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </div>
      </div>
    </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Brosa AI Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-600 text-sm">Made with ❤️ for businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;