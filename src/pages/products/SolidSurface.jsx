import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const HERO  = '/images/98dc5de89_generated_image.png';
const QUARTZ= '/images/6285b3a94_generated_image.png';
const BATH  = '/images/24219b1c5_generated_image.png';
const SHOWER= '/images/8eb20d42b_generated_image.png';
const KITCHEN='/images/00f6b86f6_generated_image.png';

const specs = [
  { label: 'Material',          value: '100% Acrylic / Modified Acrylic' },
  { label: 'Standard Sizes',    value: '2440mm · 3050mm · 3500mm · 3660mm · Custom sizes available' },
  { label: 'Thickness Options', value: '6mm · 8mm · 12mm · 20mm · 30mm' },
  { label: 'Surface Finish',    value: 'Matte / Semi-gloss' },
  { label: 'Color Range',       value: 'Pure white · Marble look · Solid colors · Terrazzo colors · Custom colors' },
  { label: 'Fabrication',       value: 'Cuttable · Thermoformable · Seamless jointing' },
];

const collections = [
  { name: 'Arctic White',     sub: '100% Acrylic · Pure Matte',   code: 'SS-AW-001' },
  { name: 'Calacatta Oro',    sub: 'Marble Look · Polished',       code: 'SS-CO-002' },
  { name: 'Glacier Terrazzo', sub: 'Terrazzo Pattern · Matte',     code: 'SS-GT-003' },
  { name: 'Charcoal Stone',   sub: 'Modified Acrylic · Honed',     code: 'SS-CS-004' },
  { name: 'Warm Concrete',    sub: 'Modified Acrylic · Semi-gloss', code: 'SS-WC-005' },
  { name: 'Ivory Vein',       sub: 'Marble Look · Matte',          code: 'SS-IV-006' },
  { name: 'Tundra Grey',      sub: 'Modified Acrylic · Matte',     code: 'SS-TG-007' },
  { name: 'Sandstone Beige',  sub: '100% Acrylic · Matte',         code: 'SS-SB-008' },
];

const tabs = [
  {
    id: 'seamless',
    title: 'Seamless Surface',
    headline: 'Seamless Joints For Clean, Continuous Design',
    desc: 'Solid surface sheets can be joined invisibly, creating smooth, continuous surfaces without visible seams. Used in countertops, wall cladding, and reception desks where visual continuity is a specification requirement.',
    img: KITCHEN,
  },
  {
    id: 'thermo',
    title: 'Thermoformable Design Freedom',
    headline: 'Thermoformable For Curves And Custom Shapes',
    desc: 'Solid surface can be thermoformed into curves and integrated forms without cracking or breaking. Enables curved countertop edges, integrated basins, and radius wall panels — no additional joints required.',
    img: BATH,
  },
  {
    id: 'hygienic',
    title: 'Non-Porous & Hygienic',
    headline: 'Non-Porous Material For Hygiene-Critical Spaces',
    desc: 'The non-porous structure prevents moisture absorption, stains, and bacteria buildup — ideal for commercial kitchens, healthcare facilities, and hospitality environments where hygiene compliance is mandatory.',
    img: SHOWER,
  },
  {
    id: 'repairable',
    title: 'Repairable & Renewable',
    headline: 'Repairable Surface That Extends Product Life',
    desc: 'Scratches and wear can be sanded and restored to original condition using standard abrasives. Reduces long-term maintenance cost and replacement frequency across multi-unit programs.',
    img: QUARTZ,
  },
  {
    id: 'colorbody',
    title: 'Color Through-Body Consistency',
    headline: 'Solid Color Through The Entire Sheet',
    desc: 'Color runs consistently through the full thickness of each sheet, ensuring uniform appearance after cutting, edge profiling, sanding, or fabrication. Critical for multi-unit specification consistency.',
    img: HERO,
  },
];

export default function SolidSurface() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <div className="bg-limestone pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden bg-obsidian">
        <img src={HERO} alt="Solid surface sheets" className="w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 to-obsidian/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full pb-16">
            <p className="text-[10px] font-sans tracking-widest uppercase text-copper mb-3">Category — Surfaces</p>
            <h1 className="font-serif text-4xl md:text-6xl text-limestone tracking-tight">Solid Surface Sheets</h1>
            <p className="mt-4 text-limestone/55 text-base max-w-xl leading-relaxed">
              100% acrylic and modified acrylic sheets for commercial countertops, wall cladding, and integrated fixture fabrication. Specification-grade, container-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border bg-limestone">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs font-sans text-stone">
          <Link to="/" className="hover:text-copper transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-copper transition-colors">Products</Link>
          <span>/</span>
          <span className="text-obsidian">Solid Surface Sheets</span>
        </div>
      </div>

      {/* Specs table */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-copper" />
              <span className="text-[10px] font-sans tracking-widest uppercase text-copper">Specifications</span>
            </div>
            <h2 className="font-serif text-3xl text-obsidian mb-8">Technical Specification</h2>
            <div className="border-t border-border">
              {specs.map(s => (
                <div key={s.label} className="grid grid-cols-2 border-b border-border py-4 gap-4">
                  <span className="text-xs font-sans uppercase tracking-wide text-stone">{s.label}</span>
                  <span className="text-sm font-sans text-obsidian">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 border border-obsidian/20 px-5 py-2.5 text-xs font-sans uppercase tracking-wide text-obsidian hover:border-copper hover:text-copper transition-colors">
                <Download className="w-3.5 h-3.5" /> Download Spec Sheet
              </button>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-copper text-limestone px-5 py-2.5 text-xs font-sans uppercase tracking-wide hover:bg-copper/90 transition-colors">
                Request Samples <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <img src={QUARTZ} alt="Solid surface detail" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      {/* Feature tabs */}
      <section className="bg-obsidian py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-px bg-copper" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-copper">Features</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 min-h-[440px]">
            {/* Left tabs */}
            <div className="lg:col-span-4 flex flex-col">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(i)}
                  className={`text-left px-6 py-5 border-b border-limestone/8 transition-all duration-200 ${i === activeTab ? 'bg-limestone text-obsidian' : 'text-limestone/40 hover:text-limestone/70 hover:bg-limestone/5'}`}
                >
                  <span className="text-xs font-sans tracking-wide">
                    {String(i + 1).padStart(2, '0')}. {t.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right panel */}
            <div className="lg:col-span-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <img src={tab.img} alt={tab.title} className="w-full h-full object-cover opacity-50 absolute inset-0" />
                  <div className="absolute inset-0 bg-obsidian/70" />
                  <div className="relative z-10 p-10 flex flex-col justify-end h-full min-h-[360px]">
                    <h3 className="font-serif text-2xl md:text-3xl text-limestone leading-tight max-w-lg">
                      {tab.headline}
                    </h3>
                    <p className="mt-4 text-limestone/55 text-sm leading-relaxed max-w-lg">
                      {tab.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Collections grid */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-copper" />
          <span className="text-[10px] font-sans tracking-widest uppercase text-copper">Collections</span>
        </div>
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-3xl text-obsidian">Available Collections</h2>
          <Link to="/contact" className="text-xs font-sans text-copper tracking-wide hover:underline">
            Request Custom Color →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sandstone/40">
          {collections.map((col) => (
            <div key={col.code} className="group bg-limestone p-6 hover:bg-obsidian transition-colors duration-300 cursor-pointer">
              <div className="w-full aspect-square bg-sandstone/30 group-hover:bg-limestone/10 mb-4 transition-colors" />
              <p className="text-[10px] font-sans tracking-widest uppercase text-stone/60 group-hover:text-limestone/40">{col.code}</p>
              <h4 className="font-serif text-base text-obsidian group-hover:text-limestone mt-1">{col.name}</h4>
              <p className="text-xs text-stone group-hover:text-limestone/40 mt-0.5">{col.sub}</p>
              <div className="mt-4 text-xs text-copper opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Spec <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-limestone">Ready to Specify Solid Surface?</h3>
            <p className="text-limestone/45 text-sm mt-2">Request samples, spec sheets, or a project quote.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-copper text-limestone px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-copper/90 transition-colors whitespace-nowrap">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}