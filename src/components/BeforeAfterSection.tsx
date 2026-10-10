'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, CheckCircle2, ShieldCheck, Home, Palette, Building2 } from 'lucide-react';
import Link from 'next/link';

const COMPARISON_SETS = [
  {
    id: 'weatherboard-comp',
    title: 'Victorian Weatherboards: Flaking Lead Paint to 3-Coat Period Protection',
    subtitle: 'From cracked, failing exterior timber siding with severe sun weathering to a fully preserved, flexible 3-coat heritage finish.',
    beforeTitle: 'Weathered & Flaking 1890s Pine',
    beforeDesc: 'Failing lead paint, hairline wood splits, dry rot, and severe chalking along northern exposure walls.',
    afterTitle: 'Restored & Flexible 3-Coat Finish',
    afterDesc: 'Thermal stripped, epoxy wood rot stabilised, penetrating oil undercoated, and finished in Dulux Heritage Weathershield.',
    milestones: [
      { step: '01', title: 'Infrared Strip', desc: 'AS 4361.2 containment & gentle thermal paint removal.' },
      { step: '02', title: 'Rot Stabilisation', desc: 'Excavation of dry rot & 2-part epoxy timber consolidant.' },
      { step: '03', title: 'Oil Penetration', desc: 'Slow-drying raw linseed and alkyd primer soak.' },
      { step: '04', title: '3-Coat System', desc: 'Flexible elastomeric acrylic resisting Victoria’s temperature swings.' },
    ]
  },
  {
    id: 'cornice-comp',
    title: 'Decorative Ceilings: Cracked Lathe-and-Plaster to Restored Ornamental Rose',
    subtitle: 'Preserving fragile 12-foot ornamental ceilings, repairing historic settlement cracks, and crisp hand enamelling on picture rails.',
    beforeTitle: 'Cracked Lathe-and-Plaster',
    beforeDesc: 'Sagging ceiling keys, structural settlement cracks, and obscured cornice details from layers of old lime wash.',
    afterTitle: 'Crisp Ornamental Plastering',
    afterDesc: 'Re-secured ceiling keys, flexible acoustic crack bridging, and micro-detail brushwork revealing sharp petals.',
    milestones: [
      { step: '01', title: 'Plaster Re-securing', desc: 'Discreet acoustic screw-anchoring to ceiling joists.' },
      { step: '02', title: 'Detail Cleaning', desc: 'Gentle dry-scraping of caked emulsion from plaster petals.' },
      { step: '03', title: 'Elastic Bridging', desc: 'Fibreglass reinforced micro-crack flexible compound.' },
      { step: '04', title: 'Ultra-Flat White', desc: 'Glare-free heritage ceiling flat paint with razor architrave lines.' },
    ]
  },
  {
    id: 'fretwork-comp',
    title: 'Verandah Fretwork: Rusted Lacework to Authentic Tri-Colour Elegance',
    subtitle: 'Restoring delicate cast iron lace and turned timber posts with rust inhibitive primers and authentic period colour matching.',
    beforeTitle: 'Rusted Iron & Peeling Posts',
    beforeDesc: 'Surface rust bleeding through, missing timber decorative brackets, and peeling oil gloss on verandah beams.',
    afterTitle: 'Tri-Colour Period Splendour',
    afterDesc: 'Zinc phosphate anti-corrosion barrier, hand-turned timber replacements, and Brunswick Green with Indian Red highlights.',
    milestones: [
      { step: '01', title: 'Rust Passivation', desc: 'Mechanical wire brush & phosphoric rust converter.' },
      { step: '02', title: 'Zinc Barrier', desc: 'Heavy-duty zinc phosphate anti-corrosion primer.' },
      { step: '03', title: 'Fretwork Repair', desc: 'Custom timber replica brackets turned and glued.' },
      { step: '04', title: 'Satin Architectural', desc: 'UV-blocking architectural enamel in authentic National Trust shades.' },
    ]
  }
];

export function BeforeAfterSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSet = COMPARISON_SETS[activeIdx];

  return (
    <section className="py-20 bg-surface-950 text-surface-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950 text-red-300 border border-red-800 text-xs font-black uppercase tracking-wider mb-3">
            <Paintbrush className="w-3.5 h-3.5" />
            Restoration Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Historic Preservation Transformations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-300">
            Compare before-and-after conditions across timber weatherboards, ornate plaster ceilings, and period verandah fretwork.
          </p>
        </div>

        {/* Set Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {COMPARISON_SETS.map((set, idx) => (
            <button
              key={set.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                idx === activeIdx
                  ? 'bg-red-700 text-white shadow-lg shadow-red-900/40 font-black'
                  : 'bg-surface-800 text-surface-300 hover:bg-surface-750 hover:text-white'
              }`}
            >
              {set.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Transformation Showcase Card */}
        <div className="bg-surface-900/90 rounded-3xl p-6 sm:p-10 border border-surface-800 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              {activeSet.title}
            </h3>
            <p className="text-sm text-surface-400">
              {activeSet.subtitle}
            </p>
          </div>

          {/* Before & After Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-surface-950 rounded-2xl p-6 border border-amber-600/30 relative">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-black uppercase mb-3">
                Condition Before Restoration
              </span>
              <h4 className="text-lg font-bold text-white mb-2">{activeSet.beforeTitle}</h4>
              <p className="text-xs sm:text-sm text-surface-400">{activeSet.beforeDesc}</p>
            </div>

            <div className="bg-surface-950 rounded-2xl p-6 border border-red-500/40 relative">
              <span className="inline-block px-3 py-1 rounded-full bg-red-950 text-red-300 text-xs font-black uppercase mb-3">
                Restored Heritage Condition
              </span>
              <h4 className="text-lg font-bold text-white mb-2">{activeSet.afterTitle}</h4>
              <p className="text-xs sm:text-sm text-surface-400">{activeSet.afterDesc}</p>
            </div>
          </div>

          {/* 4-Step Process Milestones */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-red-400 mb-4">
              Restoration Process &amp; Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeSet.milestones.map((m, idx) => (
                <div key={idx} className="bg-surface-950/80 rounded-xl p-4 border border-surface-800">
                  <span className="text-red-400 text-xs font-black block mb-1">{m.step}</span>
                  <div className="text-white text-sm font-bold mb-1">{m.title}</div>
                  <div className="text-surface-400 text-xs">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-surface-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span>Full Workmanship Guarantee • Dulux Accredited Heritage Applicator</span>
            </div>
            <Link
              href="/quote"
              className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl text-xs transition-all shadow-md"
            >
              Request Period Home Audit &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
