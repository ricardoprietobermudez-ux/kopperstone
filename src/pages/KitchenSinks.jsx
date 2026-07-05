import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CatalogRequestModal from '@/components/layout/CatalogRequestModal';

const dropIn = [
  {
    sku: 'KS-DSB-01',
    name: 'SINGLE BOWL',
    img: '/images/25bd5f26d_Screenshot2026-06-15at104756PM.png',
  },
  {
    sku: 'KS-DDB-01',
    name: 'DOUBLE BOWL',
    img: '/images/0d2d74a05_Screenshot2026-06-15at104912PM.png',
  },
];

const farmhouse = [
  {
    sku: 'KS-FSB-01',
    name: 'SINGLE BOWL',
    img: '/images/8949bcc5c_Screenshot2026-06-15at105028PM.png',
  },
  {
    sku: 'KS-FWS-01',
    name: 'DOUBLE BOWL',
    img: '/images/841a084a6_Screenshot2026-06-15at105129PM.png',
  },
];

// NOTE: names below are descriptive placeholders based on swatch appearance — swap in real product names when available
const stoneSinks = [
  { sku: 'KP-8101', name: 'Deep Single Basin', img: '/images/9bb02c155_Screenshot2026-06-15at105854PM.png' },
  { sku: 'KP-8104', name: 'Compact Single Basin', img: '/images/e5b23d6ef_Screenshot2026-06-15at110313PM.png' },
  { sku: 'KP-8102', name: 'Wide Double Basin', img: '/images/be79bc133_Screenshot2026-06-15at110124PM.png' },
  { sku: 'KP-8105', name: 'Classic Double Basin', img: '/images/cd6bf43d9_Screenshot2026-06-15at110351PM.png' },
  { sku: 'KP-8103', name: 'Offset Double Basin', img: '/images/b5b973241_Screenshot2026-06-15at110230PM.png' },
  { sku: 'KP-8106', name: 'Rounded Double Basin', img: '/images/423732cf9_Screenshot2026-06-15at110425PM.png' },
];

function FinishSwatches() {
  return (
    <div className="mt-4 pt-4 border-t border-navy/10">
      <p className="text-[9px] font-sans tracking-widest uppercase text-charcoal mb-3">Available Finishes</p>
      <img src="/images/bdae2337e_Screenshot2026-06-15at105351PM.png" alt="Available finishes: Steel, Gold, Gunmetal, Black" className="max-w-[220px] w-full" />
    </div>
  );
}

function SinkCard({ sku, name, img, showFinishes, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="relative aspect-[4/3] bg-gray-50 border border-navy/10 group-hover:border-gold transition-colors overflow-hidden flex items-center justify-center">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <span className="text-[10px] text-warm-grey font-sans tracking-widest">{name}</span>
        )}
      </div>
      <p className="font-serif text-sm text-navy mt-3 text-center">{name}</p>
      {!sku.startsWith('KS') && (
        <p className="text-[10px] font-sans text-warm-grey mt-1 text-center tracking-wide">{sku}</p>
      )}
      {showFinishes && <FinishSwatches />}
    </motion.div>
  );
}

function SinkSection({ overline, items, showFinishes, cardWidth }) {
  return (
    <section className="py-20 border-t border-navy/8 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <h2 className="text-center text-[11px] font-sans tracking-widest uppercase text-gold mb-14">{overline}</h2>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {items.map((sink, i) => (
            <div key={sink.sku} className={cardWidth}>
              <SinkCard {...sink} showFinishes={showFinishes} delay={i * 0.06} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function KitchenSinks() {
  const [catalogOpen, setCatalogOpen] = useState(false);
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-navy flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">STYLES &amp; FINISHES</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-cream tracking-tight leading-tight">
            Sinks<br /><em className="text-gold italic">Collections</em>
          </h1>
          <p className="mt-6 text-cream/50 text-base leading-relaxed font-sans max-w-md">
            Every sink is available in a curated range of styles and finishes — from undermount workstation sinks to farmhouse apron fronts. Fully customizable to match your home's design and style.
          </p>
        </div>
        <div className="relative min-h-[350px]">
          <img src="/images/5841edf23_image.png" alt="Kitchen sink" className="w-full h-full object-cover" />
        </div>
      </section>

      <SinkSection overline="DROP IN WORKSTATION" items={dropIn} showFinishes cardWidth="w-full sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-28px)]" />
      <SinkSection overline="FARMHOUSE WORKSTATION" items={farmhouse} showFinishes cardWidth="w-full sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-28px)]" />
      <SinkSection overline="STONE KITCHEN SINK" items={stoneSinks} cardWidth="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-24px)]" />

      {/* Looking for more? */}
      <section className="bg-cream py-16 border-t border-navy/8">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-navy mb-3">Looking for More Options?</h3>
          <p className="text-warm-grey text-sm max-w-lg mx-auto mb-6">These are our most requested sink styles. We offer many more finishes, sizes, and models — request our full catalog and we'll send it your way.</p>
          <button onClick={() => setCatalogOpen(true)} className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
            Request Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {catalogOpen && <CatalogRequestModal category="Kitchen Sinks" onClose={() => setCatalogOpen(false)} />}
      </AnimatePresence>

      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Complete Your Kitchen</h3>
            <p className="text-cream/40 text-sm mt-1">All sinks available in Steel, Gold, Gunmetal, and Matte Black finishes.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
