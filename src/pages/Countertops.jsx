import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MARBLE_IMG = 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&q=80';

// NOTE: names below are descriptive placeholders based on swatch appearance — swap in real product names when available
const quartzSlabs = [
{ sku: 'KP-9303', name: 'Calacatta Whisper', img: '/images/c5ffbfa6d_Screenshot2026-06-09at74951PM.png' },
{ sku: 'KP-9304', name: 'Golden Calacatta', img: '/images/02634e67f_Screenshot2026-06-09at75032PM.png' },
{ sku: 'KP-9305', name: 'Statuario Grey', img: '/images/7152a3cd3_Screenshot2026-06-09at75047PM.png' },
{ sku: 'KP-9306', name: 'Dramatic Vein Calacatta', img: '/images/4361945da_Screenshot2026-06-09at75108PM.png' },
{ sku: 'KP-9307', name: 'Classic Carrara', img: '/images/cca0999b6_Screenshot2026-06-09at75146PM.png' },
{ sku: 'KP-9308', name: 'Fine Vein White', img: '/images/a540a2b11_Screenshot2026-06-09at75203PM.png' },
{ sku: 'KP-9309', name: 'Pure White', img: '/images/87532eefb_Screenshot2026-06-09at75238PM.png' },
{ sku: 'KP-9310', name: 'Charcoal Stone', img: '/images/077b2c322_Screenshot2026-06-09at75410PM.png' },
{ sku: 'KP-9311', name: 'Cloud Grey', img: '/images/71972c1b0_Screenshot2026-06-09at75432PM.png' },
{ sku: 'KP-9313', name: 'Nero Solid', img: '/images/8f1755071_Screenshot2026-06-09at75456PM.png' },
{ sku: 'KP-9314', name: 'Snow Terrazzo', img: '/images/a91fb4312_Screenshot2026-06-09at75604PM.png' },
{ sku: 'KP-9315', name: 'Pebble Grey', img: '/images/e51089582_Screenshot2026-06-09at75619PM.png' },
{ sku: 'KP-9301', name: 'Alpine White', img: '/images/5683dcbf9_Screenshot2026-06-09at75708PM.png' },
{ sku: 'KP-9302', name: 'Misty Grey', img: '/images/222c22acd_Screenshot2026-06-09at75723PM.png' },
];


const solidSurfaceSlabs = [
  { sku: 'KP-9401', name: 'Linen White', img: '/images/919916366_Screenshot2026-06-09at105010PM.png' },
  { sku: 'KP-9402', name: 'Arctic Blue', img: '/images/b63402219_Screenshot2026-06-09at105105PM.png' },
  { sku: 'KP-9403', name: 'Sahara Cream', img: '/images/31b72a16c_Screenshot2026-06-09at105128PM.png' },
  { sku: 'KP-9404', name: 'Vertical Grey', img: '/images/342bbbe7d_Screenshot2026-06-09at105150PM.png' },
  { sku: 'KP-9405', name: 'Amber Vein', img: '/images/854dbc6b9_Screenshot2026-06-09at105249PM.png' },
  { sku: 'KP-9406', name: 'Storm Web Grey', img: '/images/140611fb4_Screenshot2026-06-09at105317PM.png' },
  { sku: 'KP-9407', name: 'Frost Speckle', img: '/images/6e3fa32d7_Screenshot2026-06-09at105339PM.png' },
  { sku: 'KP-9408', name: 'Soft Diagonal Grey', img: '/images/a54797b4e_Screenshot2026-06-09at105425PM.png' },
  { sku: 'KP-9409', name: 'Ivory Solid', img: '/images/8dffd6954_Screenshot2026-06-09at105516PM.png' },
  { sku: 'KP-9410', name: 'Cloud Marble', img: '/images/497261d5a_Screenshot2026-06-09at105615PM.png' },
  { sku: 'KP-9411', name: 'Fine Grey', img: '/images/e4afcc4a2_Screenshot2026-06-09at105631PM.png' },
  { sku: 'KP-9412', name: 'Nero Marquina', img: '/images/25fd29255_Screenshot2026-06-09at105657PM.png' },
  { sku: 'KP-9413', name: 'Golden Linen', img: '/images/ade8fc1f5_Screenshot2026-06-09at105724PM.png' },
  { sku: 'KP-9414', name: 'Warm Oak Stone', img: '/images/11e724bad_Screenshot2026-06-09at105747PM.png' },
];

const solidSurfaceSpecs = [
  ['Material', '100% Acrylic / Modified Acrylic'],
  ['Standard Sizes', '2440mm · 3050mm · Custom available'],
  ['Thickness', '6mm · 12mm · 19mm'],
  ['Finish', 'Matte · Gloss · Suede'],
  ['Color Range', 'Pure white · Marble look · Solid colors · Terrazzo · Custom'],
  ['Fabrication', 'Cuttable · Thermoformable · Seamless jointing'],
  ['Certifications', 'NSF/ANSI 51 · CARB Phase 2 compliant'],
];

const solidSurfaceTabs = [
{ id: 'seamless', label: 'Seamless Surface', content: 'Seamless joints for clean, continuous design. Ideal for long kitchen runs, bathroom vanities, and commercial applications where hygiene and visual continuity are paramount. Joints are invisible after fabrication and polishing.' },
{ id: 'thermoform', label: 'Thermoformable Design', content: 'Curves and custom shapes without cracking or delaminating. Solid surface can be heat-formed into radius edges, curved island fronts, and custom architectural profiles — design freedom unavailable in stone or engineered quartz.' },
{ id: 'hygienic', label: 'Non-Porous & Hygienic', content: 'Non-porous, bacteria-resistant surface ideal for commercial kitchens, healthcare facilities, and food service environments. Meets NSF/ANSI 51 material safety standards for food-contact surfaces. No sealing required.' },
{ id: 'repairable', label: 'Repairable & Renewable', content: 'Unlike stone or quartz, solid surface can be sanded and refinished on-site. Scratches, burns, and minor impact damage are repaired with standard woodworking tools without replacement. Significant lifecycle cost advantage for commercial operators.' },
{ id: 'consistency', label: 'Color Through-Body', content: 'Color and pattern run through the full thickness of the sheet, ensuring uniform appearance after cutting, routing, or edge profiling. No visible brown or black substrate at cut edges — consistent finish in any fabrication scenario.' }];


export default function Countertops() {
  const [activeTab, setActiveTab] = useState('seamless');
  const activeContent = solidSurfaceTabs.find((t) => t.id === activeTab);

  return (
    <div className="bg-cream">
      {/* Hero — two-column split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="relative min-h-[400px]">
          <img src="/images/2817dc910_generated_60eb22ce.png" alt="Marble countertop" className="w-full h-full object-cover" />
        </div>
        <div className="bg-navy flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">PREMIUM SURFACES</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-cream tracking-tight leading-tight">
            Countertops &amp; Solid<br />Surface<br /><em className="text-gold italic">Solutions</em>
          </h1>
          <p className="mt-6 text-cream/50 text-base leading-relaxed font-sans max-w-md">
            Available in quartz and solid surface, both offered in custom dimensions, edge profiles, and finishes. Durable, design-forward, and specified to your project's exact requirements.
          </p>
        </div>
      </section>

      {/* QUARTZ section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-center text-[10px] font-sans tracking-widest uppercase text-warm-grey mb-10">QUARTZ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {quartzSlabs.map((slab, i) =>
            <motion.div
              key={slab.sku}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group">

                <div className={`relative aspect-[2/3] border border-navy/10 group-hover:border-gold transition-colors overflow-hidden ${slab.img ? '' : slab.bg}`}>
                  {slab.img && <img src={slab.img} alt={slab.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />}
                </div>
                <p className="font-serif text-sm text-navy mt-3 text-center">{slab.name}</p>
                <p className="text-[10px] font-sans text-warm-grey mt-1 text-center tracking-wide">{slab.sku}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* SOLID SURFACE swatch + specs section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-center text-[10px] font-sans tracking-widest uppercase text-warm-grey mb-10">SOLID SURFACE</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {solidSurfaceSlabs.map((slab, i) =>
              <motion.div
                key={slab.sku}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group">
                <div className="relative aspect-[2/3] border border-navy/10 group-hover:border-gold transition-colors overflow-hidden bg-warm-grey/10">
                  {slab.img && <img src={slab.img} alt={slab.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />}
                </div>
                <p className="font-serif text-sm text-navy mt-3 text-center">{slab.name}</p>
                <p className="text-[10px] font-sans text-warm-grey mt-1 text-center tracking-wide">{slab.sku}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* SOLID SURFACE features section */}
      <section className="bg-navy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-center text-[10px] font-sans tracking-widest uppercase text-gold/50 mb-12">SOLID SURFACE</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Tabs */}
            <div className="lg:col-span-4 flex flex-col">
              {solidSurfaceTabs.map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-6 py-5 border-b border-cream/8 text-sm font-sans transition-all ${activeTab === tab.id ? 'bg-cream/10 text-cream border-l-2 border-l-gold' : 'text-cream/40 hover:text-cream/70'}`}>
                
                  {tab.label}
                </button>
              )}
            </div>

            {/* Content */}
            <div className="lg:col-span-8 bg-navy-light border border-cream/10 p-10 flex items-center">
              <motion.div key={activeTab} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <h3 className="font-serif text-2xl text-cream mb-5">{activeContent?.label}</h3>
                <p className="text-cream/55 text-base leading-relaxed font-sans">{activeContent?.content}</p>
              </motion.div>
            </div>
          </div>

          {/* Spec table */}
          <div className="mt-12 border border-cream/10">
            <h3 className="text-[10px] font-sans tracking-widest uppercase text-gold/50 px-6 py-4 border-b border-cream/10">Technical Specifications</h3>
            {[
            ['Material', '100% Acrylic / Modified Acrylic'],
            ['Standard Sizes', '2440mm · 3050mm · 3500mm · 3660mm · Custom available'],
            ['Thickness', '6mm · 8mm · 12mm · 20mm · 30mm'],
            ['Finish', 'Matte / Semi-gloss'],
            ['Color Range', 'Pure white · Marble look · Solid colors · Terrazzo · Custom'],
            ['Fabrication', 'Cuttable · Thermoformable · Seamless jointing'],
            ['Certifications', 'NSF/ANSI 51 · CARB Phase 2 compliant']].
            map(([k, v]) =>
            <div key={k} className="grid grid-cols-2 px-6 py-3.5 border-b border-cream/5">
                <span className="text-xs font-sans text-cream/40">{k}</span>
                <span className="text-xs font-sans text-cream/75">{v}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-3xl text-navy">Request Material Samples</h3>
            <p className="text-warm-grey text-sm mt-2">Full-size slab samples and solid surface test pieces available for qualified projects.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Samples <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>);

}