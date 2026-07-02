import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMG = '/images/010726.jpg';

const materials = [
  {
    id: 'acrylic',
    label: 'ACRYLIC',
    desc: 'High-gloss premium finish with deep color saturation and superior moisture resistance — but shows fingerprints and scratches.',
    tradeNote: 'Best for: luxury hotel rooms, upscale residential. Avoid in high-traffic commercial kitchens.',
    swatch: 'bg-gray-100',
    img: '/images/fb23a07da_Screenshot2026-06-09at110524PM.png',
    heroImg: '/images/coci_2.jpg',
  },
  {
    id: 'lacquer',
    label: 'LACQUER',
    desc: 'Fully custom color matching in matte, satin, or gloss; can be refinished on-site but yellows over 8–10 years.',
    tradeNote: 'Best for: bespoke residential, boutique hotel. Budget for touch-up in commercial leases.',
    swatch: 'bg-emerald-800',
    img: '/images/047543dc3_Screenshot2026-06-09at111334PM.png',
    heroImg: '/images/170a32311_Screenshot2026-06-15at95404PM.png',
  },
  {
    id: 'laminate',
    label: 'LAMINATE',
    desc: 'Highest impact, scratch, and heat resistance; the workhorse choice for commercial, rental, and high-traffic builds.',
    tradeNote: 'Best for: multi-family rental, hotel back-of-house, healthcare. 10+ year lifecycle in heavy use.',
    swatch: 'bg-zinc-900',
    img: '/images/cde0703b7_Screenshot2026-06-09at111439PM.png',
    heroImg: '/images/6c0d868a9_Screenshot2026-06-15at95516PM.png',
  },
  {
    id: 'kpvc',
    label: 'KPVC SERIES',
    desc: 'Seamless PVC-wrapped MDF for detailed door profiles at mid-tier pricing; will delaminate near heat sources.',
    tradeNote: 'Best for: master bath vanities, bedroom cabinetry. Keep away from range and dishwasher zones.',
    swatch: 'bg-gray-50',
    img: '/images/8de464daf_Screenshot2026-06-15at94454PM.png',
    heroImg: '/images/d78887136_Screenshot2026-06-15at95648PM.png',
  },
  {
    id: 'melamine',
    label: 'MELAMINE',
    desc: 'Most economical option for closets, garages, and budget cabinet interiors; swells permanently if water penetrates the edge.',
    tradeNote: 'Best for: closet systems, utility storage, interior cabinet boxes. Not recommended for wet zones.',
    swatch: 'bg-amber-800',
    img: '/images/35662b316_Screenshot2026-06-15at94616PM.png',
    heroImg: '/images/5f3c856f9_Screenshot2026-06-15at95907PM.png',
  },
  {
    id: 'veneer',
    label: 'VENEER',
    desc: 'Authentic wood grain that stains and ages like solid lumber; requires dry zones and careful handling — damage cannot be patched invisibly.',
    tradeNote: 'Best for: premium residential, executive suites, low-humidity environments. Avoid near pool, spa.',
    swatch: 'bg-amber-200',
    img: '/images/25bb4e811_Screenshot2026-06-15at94829PM.png',
    heroImg: '/images/4d9566eb6_Screenshot2026-06-15at100205PM.png',
  },
];

export default function CabinetDoors() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3]">
          <img src={HERO_IMG} alt="Cabinet textures" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="w-10 h-px bg-gold mb-4" />
          <span className="text-[10px] font-sans tracking-widest uppercase text-gold mb-6">TEXTURE &amp; FINISH</span>
          <h1 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            Cabinet<br /><em className="text-gold italic">Textures</em> &amp; Finishes
          </h1>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-sm">
            Every cabinet is available in a curated range of textures and finishes, from matte lacquer to wood grain laminates. Fully customizable to match your project design language and scale.
          </p>
        </div>
      </section>

      {/* Materials */}
      <div className="border-t border-navy/10">
        {materials.map((mat, i) => (
          <motion.section
            key={mat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 border-b border-navy/8 ${i % 2 === 1 ? 'bg-[#F0EAE1]' : 'bg-cream'}`}
          >
            {/* Spec panel */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-[10px] font-sans tracking-widest uppercase text-gold mb-4">{mat.label}</p>
              {/* Swatch */}
              <div className="w-16 h-20 border border-navy/10 mb-6 overflow-hidden">
                <img src={mat.img} alt={mat.label} className="w-full h-full object-cover" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-charcoal font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                  {mat.desc}
                </li>
              </ul>
              <div className="mt-4 p-3 bg-navy/4 border-l-2 border-gold/40">
                <p className="text-xs text-warm-grey font-sans italic">{mat.tradeNote}</p>
              </div>
            </div>

            {/* Image */}
            <div className={`relative aspect-[4/3] ${i % 2 === 1 ? 'order-first lg:order-last' : ''}`}>
              <img src={mat.heroImg || mat.img} alt={mat.label} className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Request a Finish Sample Board</h3>
            <p className="text-cream/40 text-sm mt-2">Physical sample boards available for qualified projects. Ships within 5 business days.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Samples <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}