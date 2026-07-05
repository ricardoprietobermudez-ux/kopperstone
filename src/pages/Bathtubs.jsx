import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CatalogRequestModal from '@/components/layout/CatalogRequestModal';

// NOTE: names below are descriptive placeholders based on photos — swap in real product names when available
const bathtubs = [
  { sku: 'KP-6208', name: 'Curved Freestanding Soaking Tub', dims: '1700 × 800 × 590mm', type: 'Freestanding', img: '/images/5d663b22f_Screenshot2026-06-16at80732PM.png' },
  { sku: 'KP-6207', name: 'Sculpted Oval Freestanding Tub', dims: '1680 × 780 × 600mm', type: 'Freestanding', img: '/images/a98d261f2_Screenshot2026-06-16at80838PM.png' },
  { sku: 'KP-6219', name: 'Matte Freestanding Soaking Tub', dims: '1700 × 800 × 650mm', type: 'Freestanding', img: '/images/ee022c15d_Screenshot2026-06-16at80944PM.png' },
  { sku: 'KP-6221', name: 'Ribbed Built-In Tub', dims: '1700 × 800 × 580mm', type: 'Built-In', img: '/images/184550f7f_Screenshot2026-06-17at51713PM.png' },
];

export default function Bathtubs() {
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <div className="bg-cream">

      {/* Hero — image left, copy right (mirrors Vanities / BathroomSinks) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="relative min-h-[380px]">
          <img
            src="/images/c863828dd_image.png"
            alt="Freestanding bathtub"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-navy flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">SOAK &amp; RESTORE</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-cream tracking-tight leading-tight">
            Bathtub<br /><em className="text-gold italic">Collections</em>
          </h1>
          <p className="mt-6 text-cream/50 text-base leading-relaxed font-sans max-w-md">
            Freestanding and built-in bathtubs crafted as the centerpiece of the bathroom. Every model is available in custom finishes, chosen to suit the space.
          </p>
        </div>
      </section>

      {/* Section header */}
      <section className="pt-20 pb-4">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="gold-overline mb-3">STYLES</div>
          <h2 className="font-serif text-3xl text-navy">Select Models</h2>
          <div className="w-10 h-px bg-gold mt-4" />
        </div>
      </section>

      {/* Product grid */}
      <section className="py-10 pb-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {bathtubs.map((b, i) => (
              <motion.div
                key={b.sku}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group"
              >
                <div className="relative aspect-video bg-gray-50 border border-navy/10 group-hover:border-gold transition-colors overflow-hidden">
                  {b.img && (
                    <img
                      src={b.img}
                      alt={b.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-navy">{b.name}</h3>
                    <p className="text-[10px] font-sans text-warm-grey mt-1 tracking-widest uppercase">{b.dims} · {b.sku}</p>
                  </div>
                  <span className={`text-[9px] font-sans uppercase tracking-wide px-2 py-1 whitespace-nowrap ${b.type === 'Freestanding' ? 'bg-gold/10 text-gold' : 'border border-navy/15 text-warm-grey'}`}>
                    {b.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking for more? */}
      <section className="bg-cream py-16 border-t border-navy/8">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-navy mb-3">Looking for More Options?</h3>
          <p className="text-warm-grey text-sm max-w-lg mx-auto mb-6">These are our most requested bathtub styles. We offer many more sizes, shapes, and finishes — request our full catalog and we'll send it your way.</p>
          <button onClick={() => setCatalogOpen(true)} className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
            Request Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {catalogOpen && <CatalogRequestModal category="Bathtubs" onClose={() => setCatalogOpen(false)} />}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Complete Your Bathroom</h3>
            <p className="text-cream/40 text-sm mt-1 font-sans">All bathtubs available in matte white, stone grey, and custom finishes.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap"
          >
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
