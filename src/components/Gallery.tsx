'use client';

import React, { useState } from 'react';
import { Paintbrush, MapPin, CheckCircle2, ShieldCheck, Home, Palette, Building2 } from 'lucide-react';
import Link from 'next/link';

const categories = [
  'All',
  'Victorian Homesteads',
  'Federation Weatherboards',
  'Edwardian Verandahs',
  'Ornate Interior Plaster',
  'Authentic Heritage Palettes'
] as const;

type Category = typeof categories[number];

const projectGallery = [
  {
    id: 1,
    title: 'Victorian Homestead Weatherboard Restoration (1888)',
    location: 'Beechworth Historic Precinct',
    category: 'Victorian Homesteads',
    tag: 'Lead-Safe Thermal Stripping & Dulux Heritage',
    desc: 'Complete restoration of double-storey historic timber weatherboards, iron lacework balustrades, and Hawthorn cream fascias with deep Brunswick green trims.'
  },
  {
    id: 2,
    title: 'Federation Timber Gables & Turned Verandah Fretwork',
    location: 'Chiltern, VIC',
    category: 'Federation Weatherboards',
    tag: 'Authentic Federation Ochre & Indian Red',
    desc: 'Meticulous hand restoration of intricately carved timber sunrise gables, turned verandah posts, and linseed oil priming on Baltic pine weatherboards.'
  },
  {
    id: 3,
    title: 'Edwardian Country Residence Weatherboard Overhaul',
    location: 'Wangaratta Historic Streetscape',
    category: 'Edwardian Verandahs',
    tag: 'AS 4361.2 Compliant Lead Containment',
    desc: 'Safe removal of failing lead paint layers down to sound timber, followed by 3-coat flexible acrylic system and eased double-hung sash windows.'
  },
  {
    id: 4,
    title: '12-Foot Ornamental Plaster Cornices & Ceiling Roses',
    location: 'Milawa Heritage Residence',
    category: 'Ornate Interior Plaster',
    tag: 'Artisan Micro-Crack Bridging',
    desc: 'Stabilising historic hairline fractures in ornate plaster cornices, picture rails, and ceiling roses, finished in ultra-flat heritage white ceiling paints.'
  },
  {
    id: 5,
    title: 'National Trust Authentic Tri-Colour Specification',
    location: 'Rutherglen Wine Region',
    category: 'Authentic Heritage Palettes',
    tag: 'National Trust Approved Palette',
    desc: 'Authentic three-tier heritage colour placement: Manilla cream weatherboards, deep Indian red fascias, and Brunswick green sills and fretwork.'
  },
  {
    id: 6,
    title: 'Corrugated Iron Verandah & Bullnose Roof Restoration',
    location: 'Eldorado, VIC',
    category: 'Victorian Homesteads',
    tag: 'Heritage Red Colorbond System',
    desc: 'High-pressure wash, zinc chromate priming, and dual-coat application of Manor Red exterior membrane on classic bullnose verandah iron.'
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectGallery
    : projectGallery.filter((p) => p.category === selectedCategory);

  return (
    <section className="pt-32 pb-16 bg-surface-50 text-surface-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-900 text-xs font-black uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-red-700" />
            Architectural Preservation Showcase
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-surface-900 tracking-tight">
            Restored Heritage Homes Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-surface-600 font-normal">
            Showcasing Victorian, Edwardian, and Federation timber weatherboards, authentic heritage palettes, and ornamental plastering across North East Victoria.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-white border border-surface-200 text-surface-700 hover:bg-surface-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 border border-surface-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-red-800">
                    {project.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-surface-500">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-surface-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-surface-600 leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-100 flex items-center justify-between">
                <span className="text-xs font-bold text-red-700">{project.category}</span>
                <Link
                  href="/quote"
                  className="text-xs font-bold text-surface-700 hover:text-red-700 transition-colors"
                >
                  Request Timber Audit &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
