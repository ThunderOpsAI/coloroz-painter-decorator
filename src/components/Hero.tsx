'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Paintbrush,
  Home,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Palette,
  Building2,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const HERITAGE_SHOWCASES = [
  {
    id: 'weatherboard-restoration',
    name: 'Timber Weatherboard Restoration',
    shortName: 'Weatherboards',
    icon: Home,
    category: 'Period Exterior Preservation',
    headline: 'Victorian & Federation Weatherboard Revival',
    description: 'Expert stabilization and restoration of aged historic timber siding across Beechworth, Chiltern, and Wangaratta. Precision scraping, wood rot treatments, linseed oil priming, and flexible exterior acrylic coats engineered for harsh Australian sun.',
    specs: {
      preparation: 'Linbide Hand Shaving & Flexible Timber Repair Resins',
      coatingSystem: '3-Coat Dulux Weathershield Heritage Formulation',
      longevity: 'Guaranteed 10-Year Weatherboard Protection',
    },
    badge: 'North East Heritage Specialist',
  },
  {
    id: 'verandah-fretwork',
    name: 'Ornate Lace & Verandah Fretwork',
    shortName: 'Lace & Fretwork',
    icon: Sparkles,
    category: 'Architectural Details',
    headline: 'Cast Iron Lacework & Turned Timber Posts',
    description: 'Specialist restoration of intricate Victorian cast iron filigree and Federation timber fretwork. Meticulous hand preparation, rust inhibiting primers, and satin architectural enamels in period-authentic hues.',
    specs: {
      rustTreatment: 'Zinc Phosphate Rust Inhibitive Primers for Ironwork',
      timberDetails: 'Fine Detail Brushwork on Gables, Dentils & Turned Posts',
      finish: 'High-Durability Satin & Gloss Heritage Enamels',
    },
    badge: 'Fine Architectural Detailing',
  },
  {
    id: 'ornate-plaster',
    name: 'Interior Decorative Plaster & Ceilings',
    shortName: 'Decorative Ceilings',
    icon: Paintbrush,
    category: 'Interior Period Finishes',
    headline: 'Ornate Cornices, Ceiling Roses & High Plaster',
    description: 'Specialist interior restoration of 12-foot lathe-and-plaster ceilings, delicate ornamental cornices, picture rails, and ceiling roses. Hairline crack bridging, low-sheen architectural paints, and subtle gold-leaf accenting.',
    specs: {
      plasterCare: 'Fibre-Reinforced Acoustic & Hairline Crack Stabilisation',
      ceilingSystem: 'Ultra-Flat Heritage White Reflective Ceiling Coatings',
      woodwork: 'Hand-Brushed Oil-Based Satin Enamels on Architraves',
    },
    badge: 'Artisan Interior Finish',
  },
  {
    id: 'lead-safe',
    name: 'Certified Lead-Safe Paint Abatement',
    shortName: 'Lead-Safe Certified',
    icon: ShieldCheck,
    category: 'Safe Heritage Decontamination',
    headline: 'AS 4361.2 Certified Lead Paint Containment',
    description: 'Safely handling pre-1970 historic lead-based paints with zero dust contamination to your family, garden, or soil. Infrared thermal stripping and HEPA-filtered sanding systems compliant with heritage preservation standards.',
    specs: {
      compliance: 'AS 4361.2 Guide to Lead Paint Management Compliant',
      technology: 'Speedheater Infrared Thermal Stripping (Zero Toxic Fumes)',
      containment: 'Negative Pressure Containment & HEPA H14 Filtration',
    },
    badge: 'Family & Soil Safe',
  },
];

export function Hero() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeShowcase = HERITAGE_SHOWCASES[selectedIdx];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const phoneNumber = '0429 691 397';
  const cleanPhone = '0429691397';

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % HERITAGE_SHOWCASES.length);
    }, 6000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    startTimer();
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-900 border border-red-300 text-xs font-black uppercase tracking-wider">
            <Paintbrush className="w-3.5 h-3.5 text-red-700" />
            North East Victoria’s Heritage Restoration Painter
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-800 text-surface-300 border border-surface-700 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
            Victorian • Edwardian • Federation Specialists
          </div>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-surface-900 tracking-tight leading-[1.08]">
              Restoring Historic Character, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-800 via-red-600 to-amber-600 bg-clip-text text-transparent">
                Weatherboard Homes &amp; Period Architecture
              </span>
            </h1>

            <p className="text-base sm:text-lg text-surface-600 leading-relaxed max-w-2xl font-normal">
              Specialist painting and decorating for historic homes across Wangaratta, Beechworth, Chiltern, and Milawa. Authentic period colour consultations, lead-safe paint removal, ornate plaster cornice restoration, and weatherboard preservation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black rounded-2xl text-base shadow-xl shadow-red-900/30 transition-all hover:scale-103"
              >
                <span>Heritage Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/gallery"
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-surface-900 hover:bg-surface-800 text-white font-bold rounded-2xl text-base transition-all border border-surface-700 shadow-md"
              >
                <Home className="w-5 h-5 text-red-400" />
                <span>View Restored Homes</span>
              </Link>

              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center justify-center gap-2 px-5 py-4 bg-white hover:bg-surface-100 text-surface-900 font-bold rounded-2xl text-base transition-all border border-surface-200 shadow-sm"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>{phoneNumber}</span>
              </a>
            </div>

            {/* Micro Trust points */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-surface-200 text-xs text-surface-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>National Trust Palettes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Lead-Safe AS 4361.2</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Master Painters Member</span>
              </div>
            </div>
          </div>

          {/* Interactive Feature Card Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-surface-950 text-white rounded-3xl p-6 sm:p-8 border border-surface-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-950 text-red-300 border border-red-800">
                  {activeShowcase.badge}
                </span>
                <span className="text-xs text-surface-400">{activeShowcase.category}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcase.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-black text-white leading-tight">
                    {activeShowcase.headline}
                  </h3>
                  <p className="text-sm text-surface-300 leading-relaxed">
                    {activeShowcase.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-surface-800/80">
                    {Object.entries(activeShowcase.specs).map(([key, val]) => (
                      <div key={key} className="flex items-start gap-2 text-xs text-surface-300">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 mt-6 pt-5 border-t border-surface-800">
                {HERITAGE_SHOWCASES.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = idx === selectedIdx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl text-left text-xs transition-all ${
                        isActive
                          ? 'bg-red-600 text-white font-bold shadow-md shadow-red-900/40'
                          : 'bg-surface-900 text-surface-400 hover:text-white hover:bg-surface-850'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.shortName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
