import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const bathtubs = [
  { sku: 'KS-B114',   name: 'KP-6208', dims: '1700 × 800 × 590mm', type: 'Freestanding', img: '/images/5d663b22f_Screenshot2026-06-16at80732PM.png' },
  { sku: 'KS-B117',   name: 'KP-6207', dims: '1680 × 780 × 600mm', type: 'Freestanding', img: '/images/a98d261f2_Screenshot2026-06-16at80838PM.png' },
  { sku: 'KS-B001A1', name: 'KP-6219', dims: '1700 × 800 × 650mm', type: 'Freestanding', img: '/images/ee022c15d_Screenshot2026-06-16at80944PM.png' },
  { sku: 'KS-B029A',  name: 'KP-6221', dims: '1700 × 800 × 580mm', type: 'Built-In',     img: '/images/184550f7f_Screenshot2026-06-17at51713PM.png' },
];

export default function Bathtubs() {
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
          <div className="gold-overline mb-3">PRODUCT CATALOG</div>
          <h2 className="font-serif text-3xl text-navy">Select Models</h2>
          <div className="w-10 h-px bg-gold mt-4" />
        </div>
      </section>

      {/* Product grid — navy cards, consistent with BathroomSinks / KitchenFaucets */}
      <section className="py-10 pb-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bathtubs.map((b, i) => (
              <motion.div
                key={b.sku}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-navy border border-cream/5 overflow-hidden hover:border-gold/40 transition-colors"
              >
                {/* Gold corner accents */}
                <div className="relative aspect-video bg-navy-light overflow-hidden">
                  <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/40 z-10" />
                  <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/40 z-10" />
                  <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/40 z-10" />
                  <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/40 z-10" />
                  {b.img && (
                    <img
                      src={b.img}
                      alt={b.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                {/* SKU label bar */}
                <div className="px-6 py-4 border-t border-cream/5 flex items-center justify-between">
                  <p className="font-sans text-sm tracking-widest text-cream">{b.name}</p>
                  <span className={`text-[9px] font-sans uppercase tracking-wide px-2 py-0.5 ${b.type === 'Freestanding' ? 'bg-gold/10 text-gold/70' : 'border border-cream/10 text-cream/30'}`}>
                    {b.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Specify Your Bathtub Program</h3>
            <p className="text-cream/40 text-sm mt-1 font-sans">All models available in matte white, stone grey, and custom finishes. Volume pricing for 30+ units.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap"
          >
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}