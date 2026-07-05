import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CatalogRequestModal from '@/components/layout/CatalogRequestModal';

// NOTE: names below are descriptive placeholders based on photos — swap in real product names when available
const vanities = [
  { sku: 'KP-2101', name: 'Compact Powder Room Vanity', size: '610mm', desc: 'A compact floating vanity for guest bathrooms and powder rooms.', img: '/images/b5af16793_Screenshot2026-06-16at74311PM.png' },
  { sku: 'KP-2107', name: 'Classic Single-Sink Vanity', size: '1000mm', desc: 'A clean, single-sink floating vanity that fits comfortably in most bathrooms.', img: '/images/92b3393d8_Screenshot2026-06-16at73256PM.png' },
  { sku: 'KP-2110', name: 'Extended Single-Sink Vanity', size: '1200mm', desc: 'Extended single-sink vanity with extra counter space for larger bathrooms.', img: '/images/44f9153ba_Screenshot2026-06-16at73348PM.png' },
  { sku: 'KP-2111', name: 'Classic Double-Sink Vanity', size: '1500mm', desc: 'A standard double-sink vanity, ideal for residential master bathrooms.', img: '/images/00d15ce34_Screenshot2026-06-16at73706PM.png' },
  { sku: 'KP-2203', name: 'Double-Sink Vanity with Marble Top', size: '1600mm', desc: 'Double-sink vanity with extended storage, for a luxury residential feel.', img: '/images/a10dec276_Screenshot2026-06-16at73946PM.png' },
  { sku: 'KP-2112', name: 'Double-Sink Vanity in Grey', size: '1600mm', desc: 'Double-sink vanity with a sleek, slab-front door style.', img: '/images/36b3405a8_Screenshot2026-06-16at74041PM.png' },
];

export default function Vanities() {
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <div className="bg-cream">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-navy flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">KOPPERSTONE SERIES</div>
          <h1 className="font-serif text-5xl md:text-6xl text-cream tracking-tight leading-tight">
            Vanity<br /><em className="text-gold italic">Collections</em>
          </h1>
          <p className="mt-6 text-cream/50 text-base max-w-xl leading-relaxed font-sans">
            Complete assemblies or individual components specified to your exact finish, material, and configuration.
          </p>
        </div>
        <div className="relative min-h-[350px]">
          <img src="/images/6e6b967ef_image.png" alt="Vanity collection" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {vanities.map((v, i) => (
              <motion.div
                key={v.sku}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group"
              >
                <div className="relative aspect-[4/3] bg-gray-50 border border-navy/10 group-hover:border-gold transition-colors overflow-hidden">
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-serif text-lg text-navy">{v.name}</h3>
                  <p className="text-[10px] font-sans text-warm-grey mt-1 tracking-widest uppercase">{v.size} · {v.sku}</p>
                  <p className="text-warm-grey text-xs leading-relaxed font-sans mt-2 max-w-xs mx-auto">{v.desc}</p>
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
          <p className="text-warm-grey text-sm max-w-lg mx-auto mb-6">These are our most requested vanity styles. We offer many more sizes, finishes, and configurations — request our full catalog and we'll send it your way.</p>
          <button onClick={() => setCatalogOpen(true)} className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
            Request Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {catalogOpen && <CatalogRequestModal category="Vanities" onClose={() => setCatalogOpen(false)} />}
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
