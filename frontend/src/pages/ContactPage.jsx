import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../utils/constants';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FAFAFA] min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            We’re here to help you{' '}
            <span className="text-gradient-orange">24/7.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need merchant onboarding assistance, developer API access, or transaction support, our team is always within reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-white border border-white/10 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Instant WhatsApp Support</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The fastest way to get in touch with our operations desk. Live agents available 24/7.
              </p>
              <div className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-lg shadow-orange-500/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message {WHATSAPP_NUMBER}</span>
                </a>
              </div>
            </div>

            {/* Email & Location */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Enquiries</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">support@brosa.ai</div>
                  <div className="text-xs text-slate-500">partnerships@brosa.ai</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Headquarters</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Accra, Greater Accra Region</div>
                  <div className="text-xs text-slate-500">Ghana, West Africa</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Operational Hours</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">24/7 Automated AI Banking</div>
                  <div className="text-xs text-slate-500">Human Escalation: 8am - 10pm GMT</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-8">
                Fill out the form below and an account specialist will respond within 4 business hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Thank you for reaching out. A Brosa representative will review your request and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Kwame Mensah"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#EA580C]"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="kwame@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#EA580C]"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+233 24 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#EA580C]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                      <input
                        type="text"
                        required
                        placeholder="Merchant Inquiry / API Access"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#EA580C]"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="How can Brosa help your business or personal transfers?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#EA580C]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
