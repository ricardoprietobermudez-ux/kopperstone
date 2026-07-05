import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CatalogRequestModal from '@/components/layout/CatalogRequestModal';

// NOTE: names below are descriptive placeholders based on photos — swap in real product names when available
const sinks = [
  { id: 1, img: '/images/792791dc1_Screenshot2026-06-16at61504PM.png', sku: 'KP-1101', name: 'Oval Vessel Basin' },
  { id: 2, img: '/images/201351091_Screenshot2026-06-16at61615PM.png', sku: 'KP-1103', name: 'Sculpted Oval Vessel' },
  { id: 3, img: '/images/eaba71f56_Screenshot2026-06-16at61708PM.png', sku: 'KP-1104', name: 'Round Vessel Basin' },
  { id: 4, img: '/images/a3037b51f_Screenshot2026-06-16at61800PM.png', sku: 'KP-1105', name: 'Faceted Vessel Basin' },
];

export default function BathroomSinks() {
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <div className="bg-cream">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">STYLES &amp; FINISHES</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            Bathroom Sink<br /><em className="text-gold italic">Collections</em>
          </h1>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-md">
            Complete basins or individual components specified to your exact form, material, and finish.
          </p>
        </div>
        <div className="relative min-h-[350px]">
          <img src="/images/26db784c2_image.png" alt="Bathroom sink" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {sinks.map((s, i) => (
              <div key={s.id} className="w-full sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-28px)]">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] bg-gray-50 border border-navy/10 group-hover:border-gold transition-colors overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="font-serif text-sm text-navy mt-3 text-center">{s.name}</p>
                  <p className="text-[10px] font-sans text-warm-grey mt-1 text-center tracking-wide">{s.sku}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking for more? */}
      <section className="bg-cream py-16 border-t border-navy/8">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-navy mb-3">Looking for More Options?</h3>
          <p className="text-warm-grey text-sm max-w-lg mx-auto mb-6">These are our most requested bathroom sink styles. We offer many more forms and models — request our full catalog and we'll send it your way.</p>
          <button onClick={() => setCatalogOpen(true)} className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
            Request Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {catalogOpen && <CatalogRequestModal category="Bathroom Sinks" onClose={() => setCatalogOpen(false)} />}
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
