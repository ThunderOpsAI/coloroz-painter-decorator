'use client';

import Link from 'next/link';
import { ArrowRight, Palette, CalendarCheck, Phone, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export function PreFooterCTAs() {
  const phoneNumber = '0429 691 397';
  const cleanPhone = '0429691397';

  return (
    <section className="py-14 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Heritage Quote Funnel */}
          <Link href="/#estimator" className="group block">
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="h-full p-8 sm:p-10 rounded-3xl bg-surface-950 text-white border border-surface-800 shadow-2xl hover:border-red-500/60 transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Palette className="w-32 h-32 text-red-400" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-800 text-xs font-black uppercase tracking-wider mb-4">
                  <Palette className="w-3.5 h-3.5" />
                  Interactive Heritage Funnel
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-400 transition-colors">
                  Heritage Quote Calculator
                </h3>
                <p className="mt-3 text-sm text-surface-300 font-normal leading-relaxed">
                  Select your period era (Victorian, Edwardian, Federation), timber prep condition, and authentic colour schemes for an instant restoration guide.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-red-400 group-hover:text-red-300">
                <span>Launch Quote Funnel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          </Link>

          {/* Card 2: View Restored Homes / Book Site Measure */}
          <Link href="/gallery" className="group block">
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-red-700 to-red-800 text-white shadow-2xl hover:shadow-red-900/40 transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none text-white">
                <Home className="w-32 h-32" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white border border-white/20 text-xs font-black uppercase tracking-wider mb-4">
                  <CalendarCheck className="w-3.5 h-3.5 text-white" />
                  Period Showcase
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  View Restored Homes
                </h3>
                <p className="mt-3 text-sm text-white/90 font-medium leading-relaxed">
                  Explore restored Victorian weatherboards, turned verandah fretwork, and high-ceiling cornices across Wangaratta &amp; Beechworth. Or call <strong>{phoneNumber}</strong>.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-black text-white group-hover:translate-x-1 transition-transform">
                <span>Explore Restoration Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
