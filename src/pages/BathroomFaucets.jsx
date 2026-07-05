import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CatalogRequestModal from '@/components/layout/CatalogRequestModal';

const faucets = [
  { sku: 'KP-6104', name: 'Square Basin Mixer', img: '/images/5c5b00e04_Screenshot2026-06-18at65443PM.png' },
  { sku: 'KP-6113', name: 'Slim Matte Black', img: '/images/c4ad9b4bf_Screenshot2026-06-18at65626PM.png' },
  { sku: 'KP-6114', name: 'Slender Single Lever', img: '/images/1f277cab4_Screenshot2026-06-18at70112PM.png' },
  { sku: 'KP-6117', name: 'Curved Lever', img: '/images/26a5eb260_Screenshot2026-06-18at70200PM.png' },
];

export default function BathroomFaucets() {
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <div className="bg-cream">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">FIXTURES</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            Bathroom<br /><em className="text-gold italic">Faucets</em>
          </h1>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-md">
            A curated selection of bathroom faucets for vanities, bathtubs, and wet rooms.
          </p>
        </div>
        <div className="relative min-h-[350px]">
          <img src="/images/736843221_image.png" alt="Bathroom faucets" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-center text-[10px] font-sans tracking-widest uppercase text-gold mb-14">Bathroom Faucet Styles</h2>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {faucets.map((f, i) => (
              <div key={f.sku} className="w-full sm:w-[calc(50%-24px)]">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] bg-gray-50 border border-navy/10 group-hover:border-gold transition-colors overflow-hidden flex items-center justify-center">
                    <img src={f.img} alt={f.name} className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="font-serif text-base text-navy mt-3 text-center">{f.name}</p>
                  <p className="text-[10px] font-sans text-warm-grey mt-1 text-center tracking-wide">{f.sku}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes strip */}
      <section className="bg-cream py-14 border-t border-navy/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col items-center">
          <p className="text-[10px] font-sans tracking-widest uppercase text-gold mb-6 text-center">Available Finishes</p>
          <img src="/images/bdae2337e_Screenshot2026-06-15at105351PM.png" alt="Available finishes: Steel, Gold, Gunmetal, Black" className="max-w-[320px] w-full" />
        </div>
      </section>

      {/* Looking for more? */}
      <section className="bg-white py-16 border-t border-navy/8">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-navy mb-3">Looking for More Options?</h3>
          <p className="text-warm-grey text-sm max-w-lg mx-auto mb-6">These are our most requested faucet styles. We offer many more finishes and models — request our full catalog and we'll send it your way.</p>
          <button onClick={() => setCatalogOpen(true)} className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
            Request Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {catalogOpen && <CatalogRequestModal category="Bathroom Faucets" onClose={() => setCatalogOpen(false)} />}
      </AnimatePresence>

      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-2xl text-cream">Complete Your Bathroom</h3>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
