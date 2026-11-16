import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_LINK } from '../utils/constants';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 sm:py-32 bg-[#FAFAFA] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80">
            A Closer Look
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Ghanaians use Brosa every single day.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-slate-600">
            <span className="text-[#F59E0B] font-bold">★★★★★</span>
            <span className="text-slate-900 font-extrabold">4.9/5 Rating</span>
            <span className="text-slate-400">· Trusted by 10,000+ active users</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-[#F59E0B] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* User profile */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.author}</div>
                  <div className="text-[11px] text-slate-500">{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to join */}
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Join 10,000+ Happy Users on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;

