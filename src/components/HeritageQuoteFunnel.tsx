'use client';

import React, { useState } from 'react';
import { Paintbrush, Home, CheckCircle2, ShieldCheck, ArrowRight, Phone, Clock, Palette, Sparkles, Building2 } from 'lucide-react';
import Link from 'next/link';

export const HERITAGE_ERAS = [
  {
    id: 'victorian',
    name: 'Victorian Era (1860 - 1901)',
    description: 'Iron lace verandahs, ornate timber trims, Hawthorn brick & high ceilings',
    badge: 'High Detail',
    baseRate: 7500,
    prepMultiplier: 1.3,
  },
  {
    id: 'federation',
    name: 'Federation / Queen Anne (1901 - 1914)',
    description: 'Decorative timber gables, turned verandah posts, fretwork & red iron roofs',
    badge: 'Timber Rich',
    baseRate: 6800,
    prepMultiplier: 1.25,
  },
  {
    id: 'edwardian',
    name: 'Edwardian & Californian (1910 - 1935)',
    description: 'Deep verandahs, horizontal timber weatherboards, leadlight windows & shingles',
    badge: 'Popular North East Style',
    baseRate: 5900,
    prepMultiplier: 1.15,
  },
  {
    id: 'homestead',
    name: 'Rural Country Homestead',
    description: 'Expansive wrap-around timber verandahs, corrugated Colorbond roofing & outbuildings',
    badge: 'Extensive Scope',
    baseRate: 8500,
    prepMultiplier: 1.2,
  },
];

export const HERITAGE_PALETTES = [
  {
    id: 'classic-heritage',
    name: 'Authentic Period Palette',
    description: 'Deep Brunswick Green, Indian Red fascias, Manilla / Hawthorn Cream weatherboards',
    colors: ['#1e3a24', '#7c2d2d', '#f3e5ab'],
  },
  {
    id: 'federation-earth',
    name: 'Federation Earth & Ochre',
    description: 'Earthy Terracotta, Raw Umber window trims, Warm Biscuit siding, Heritage White lace',
    colors: ['#8b4513', '#d2b48c', '#ffffff'],
  },
  {
    id: 'contemporary-heritage',
    name: 'Contemporary Heritage Nuance',
    description: 'Soft Monument trims, Vintage Linen weatherboards, Crisp Heritage White details',
    colors: ['#383e42', '#e6dec9', '#fbfbfb'],
  },
];

export const PREP_LEVELS = [
  {
    id: 'maintenance',
    label: 'Maintenance Recoat (Sound Surfaces)',
    detail: 'Light pressure wash, targeted sanding, spot priming, 2 premium topcoats.',
    mult: 1.0,
  },
  {
    id: 'heavy-weathered',
    label: 'Weathered & Flaking Timber',
    detail: 'Full scraping, linbide hand shaving, raw timber oil undercoat, flexible exterior fillers.',
    mult: 1.35,
  },
  {
    id: 'lead-safe',
    label: 'Historic Lead Paint Safe Abatement',
    detail: 'AS 4361.2 containment, infrared gentle heat stripping, HEPA filtration sanding.',
    mult: 1.7,
  },
];

export function HeritageQuoteFunnel() {
  const [selectedEraId, setSelectedEraId] = useState('victorian');
  const [selectedPaletteId, setSelectedPaletteId] = useState('classic-heritage');
  const [selectedPrepId, setSelectedPrepId] = useState('heavy-weathered');
  const [includeInterior, setIncludeInterior] = useState(false);

  const selectedEra = HERITAGE_ERAS.find((e) => e.id === selectedEraId) || HERITAGE_ERAS[0];
  const selectedPalette = HERITAGE_PALETTES.find((p) => p.id === selectedPaletteId) || HERITAGE_PALETTES[0];
  const selectedPrep = PREP_LEVELS.find((p) => p.id === selectedPrepId) || PREP_LEVELS[1];

  // Price calculation
  const calculatedEstimate = Math.round(
    selectedEra.baseRate * selectedPrep.mult * (includeInterior ? 1.55 : 1.0)
  );

  const quoteUrl = `/quote?era=${encodeURIComponent(selectedEra.name)}&palette=${encodeURIComponent(selectedPalette.name)}&prep=${encodeURIComponent(selectedPrep.label)}&estimate=${calculatedEstimate}&interior=${includeInterior}`;

  return (
    <section id="estimator" className="py-20 bg-surface-950 text-surface-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950 text-red-300 border border-red-800 text-xs font-black uppercase tracking-wider mb-3">
            <Paintbrush className="w-3.5 h-3.5" />
            Interactive Heritage Repainting Quote Funnel
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Configure Your Period Home Restoration
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-300">
            North East Victoria is home to some of Australia’s finest historic timber architecture. Select your home’s architectural era, prep requirements, and colour scheme for an authentic estimate.
          </p>
        </div>

        {/* Step 1: Era Selector */}
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Step 1: Select Your Architectural Era
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HERITAGE_ERAS.map((era) => {
              const active = era.id === selectedEraId;
              return (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => setSelectedEraId(era.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 relative ${
                    active
                      ? 'bg-red-950/60 border-red-500 text-white shadow-xl shadow-red-950/40 ring-2 ring-red-500'
                      : 'bg-surface-900/60 border-surface-800 text-surface-300 hover:border-surface-700 hover:bg-surface-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-surface-800 text-surface-300">
                      {era.badge}
                    </span>
                    {active && <CheckCircle2 className="w-5 h-5 text-red-400" />}
                  </div>
                  <div className="font-extrabold text-base text-white">{era.name}</div>
                  <div className="text-xs text-surface-400 mt-1">{era.description}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Surface Preparation Level */}
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Step 2: Timber Condition &amp; Preparation Level
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PREP_LEVELS.map((prep) => {
              const active = prep.id === selectedPrepId;
              return (
                <button
                  key={prep.id}
                  type="button"
                  onClick={() => setSelectedPrepId(prep.id)}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    active
                      ? 'bg-red-950/60 border-red-500 text-white shadow-lg ring-2 ring-red-500'
                      : 'bg-surface-900/60 border-surface-800 text-surface-300 hover:border-surface-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">{prep.label}</span>
                    {active && <CheckCircle2 className="w-4 h-4 text-red-400" />}
                  </div>
                  <p className="text-xs text-surface-400">{prep.detail}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Heritage Colour Palette Preference */}
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
            <Palette className="w-4 h-4" /> Step 3: Authentic Period Colour Palette
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HERITAGE_PALETTES.map((pal) => {
              const active = pal.id === selectedPaletteId;
              return (
                <button
                  key={pal.id}
                  type="button"
                  onClick={() => setSelectedPaletteId(pal.id)}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    active
                      ? 'bg-red-950/60 border-red-500 text-white shadow-lg ring-2 ring-red-500'
                      : 'bg-surface-900/60 border-surface-800 text-surface-300 hover:border-surface-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {pal.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <div className="font-bold text-sm text-white mb-1">{pal.name}</div>
                  <div className="text-xs text-surface-400">{pal.description}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Include Interior Ornate Plaster */}
        <div className="mb-12">
          <label className="flex items-center gap-3 p-4 rounded-2xl bg-surface-900/80 border border-surface-800 cursor-pointer max-w-xl hover:border-surface-700">
            <input
              type="checkbox"
              checked={includeInterior}
              onChange={(e) => setIncludeInterior(e.target.checked)}
              className="w-5 h-5 rounded text-red-600 focus:ring-red-500"
            />
            <div>
              <span className="font-bold text-sm text-white block">
                Include Interior High Ceilings &amp; Ornate Cornices (+Decorative Plaster)
              </span>
              <span className="text-xs text-surface-400">
                Covers picture rails, ceiling roses, door architraves, and heritage woodwork enamel.
              </span>
            </div>
          </label>
        </div>

        {/* Live Estimate Summary & CTA Box */}
        <div className="bg-gradient-to-r from-surface-950 via-surface-900 to-surface-950 border border-red-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-red-400">
                Heritage Restoration Estimate Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedEra.name} Restoration Package
              </h3>
              <p className="text-sm text-surface-300">
                Prep: <strong className="text-white">{selectedPrep.label.split('(')[0]}</strong> • Palette: <strong className="text-white">{selectedPalette.name}</strong>
                {includeInterior && ' • Full Interior & Exterior Scope'}
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-surface-400 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Dulux Accredited • AS 4361.2 Lead Safe Certified • Full Scaffolding Included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center lg:text-right">
                <div className="text-xs text-surface-400 uppercase font-black tracking-wider">Estimated Project Guide</div>
                <div className="text-4xl sm:text-5xl font-black text-red-400 tracking-tight">
                  ${calculatedEstimate.toLocaleString()}
                </div>
                <div className="text-[11px] text-surface-400">Subject to complimentary on-site timber audit</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={quoteUrl}
                  className="flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black rounded-2xl text-base shadow-lg shadow-red-900/40 transition-all hover:scale-103"
                >
                  <span>Book Site Measure</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="tel:0429691397"
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-surface-800 hover:bg-surface-700 text-white font-bold rounded-2xl text-sm transition-all border border-surface-700"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call 0429 691 397</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
