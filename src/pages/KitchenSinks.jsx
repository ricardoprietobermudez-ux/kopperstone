import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const finishSwatches = [
  { label: 'Steel', img: '/images/e50630d91_Screenshot2026-06-15at104127PM.png' },
  { label: 'Gold', img: '/images/49a1a21cd_Screenshot2026-06-15at104203PM.png' },
  { label: 'Gunmetal', img: '/images/128aad42b_Screenshot2026-06-15at104230PM.png' },
  { label: 'Black', img: null, color: 'bg-zinc-900' },
];

const dropIn = [
  {
    sku: 'KS-DSB-01',
    name: 'SINGLE BOWL',
    dims: '32" x 19" x 4-10"',
    img: '/images/25bd5f26d_Screenshot2026-06-15at104756PM.png',
  },
  {
    sku: 'KS-DDB-01',
    name: 'DOUBLE BOWL',
    dims: '31" x 18" x 4-10"',
    img: '/images/0d2d74a05_Screenshot2026-06-15at104912PM.png',
  },
];

const farmhouse = [
  {
    sku: 'KS-FSB-01',
    name: 'SINGLE BOWL',
    dims: '36" x 18" x 4-10"',
    img: '/images/8949bcc5c_Screenshot2026-06-15at105028PM.png',
  },
  {
    sku: 'KS-FWS-01',
    name: 'DOUBLE BOWL',
    dims: '36" x 20" x 7-10"',
    img: '/images/841a084a6_Screenshot2026-06-15at105129PM.png',
  },
];

const stoneSinks = [
  { sku: 'KP-8101', img: '/images/9bb02c155_Screenshot2026-06-15at105854PM.png' },
  { sku: 'KP-8104', img: '/images/e5b23d6ef_Screenshot2026-06-15at110313PM.png' },
  { sku: 'KP-8102', img: '/images/be79bc133_Screenshot2026-06-15at110124PM.png' },
  { sku: 'KP-8105', img: '/images/cd6bf43d9_Screenshot2026-06-15at110351PM.png' },
  { sku: 'KP-8103', img: '/images/b5b973241_Screenshot2026-06-15at110230PM.png' },
  { sku: 'KP-8106', img: '/images/423732cf9_Screenshot2026-06-15at110425PM.png' },
];

function FinishSwatches() {
  return (
    <div>
      <p className="text-[9px] font-sans tracking-widest uppercase text-charcoal mb-3">Available Finishes</p>
      <img src="/images/bdae2337e_Screenshot2026-06-15at105351PM.png" alt="Available finishes: Steel, Gold, Gunmetal, Black" className="max-w-[260px] w-full" />
    </div>
  );
}

function SinkPairSection({ overline, items }) {
  return (
    <section className="py-20 border-t border-navy/8 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <h2 className="text-center text-[11px] font-sans tracking-widest uppercase text-gold mb-16">{overline}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-navy/10">
          {items.map((sink, i) => (
            <motion.div
              key={sink.sku}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 lg:px-16 py-10 flex flex-col"
            >
              {/* Product image */}
              <div className="flex items-center justify-center mb-10 min-h-[200px]">
                {sink.img ? (
                  <img src={sink.img} alt={sink.name} className="w-full max-w-xs object-contain" />
                ) : (
                  <div className="w-full max-w-xs aspect-[4/3] bg-gray-50 border border-navy/8 flex items-center justify-center">
                    <span className="text-[10px] text-warm-grey font-sans tracking-widest">{sink.sku}</span>
                  </div>
                )}
              </div>

              {/* Name & dims */}
              <p className="text-[11px] font-sans font-semibold tracking-widest uppercase text-charcoal mb-1">{sink.name}</p>
              <p className="text-sm text-warm-grey font-sans mb-6">{sink.dims}</p>

              <div className="border-t border-navy/10 pt-5">
                <FinishSwatches />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoneSinkSection() {
  return (
    <section className="py-20 border-t border-navy/8 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <h2 className="text-center text-[11px] font-sans tracking-widest uppercase text-gold mb-16">STONE KITCHEN SINK</h2>
        <div className="grid grid-cols-2 gap-0 divide-x divide-navy/10">
          {/* Left column */}
          <div className="pr-8 lg:pr-16 space-y-12">
            {stoneSinks.filter((_, i) => i % 2 === 0).map((sink, i) => (
              <motion.div
                key={sink.sku}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-full aspect-[4/3] bg-gray-50 border border-navy/8 flex items-center justify-center mb-4 overflow-hidden">
                  {sink.img ? <img src={sink.img} alt={sink.sku} className="w-full h-full object-contain p-4" /> : <span className="text-[10px] text-warm-grey font-sans tracking-widest">{sink.sku}</span>}
                </div>
                <p className="text-[11px] font-sans tracking-widest text-charcoal">{sink.sku}</p>
              </motion.div>
            ))}
          </div>
          {/* Right column */}
          <div className="pl-8 lg:pl-16 space-y-12">
            {stoneSinks.filter((_, i) => i % 2 === 1).map((sink, i) => (
              <motion.div
                key={sink.sku}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-full aspect-[4/3] bg-gray-50 border border-navy/8 flex items-center justify-center mb-4 overflow-hidden">
                  {sink.img ? <img src={sink.img} alt={sink.sku} className="w-full h-full object-contain p-4" /> : <span className="text-[10px] text-warm-grey font-sans tracking-widest">{sink.sku}</span>}
                </div>
                <p className="text-[11px] font-sans tracking-widest text-charcoal">{sink.sku}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function KitchenSinks() {
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
            Every sink is available in a curated range of styles and finishes — from undermount workstation sinks to farmhouse apron fronts. Fully customizable to match your project's design language at any scale.
          </p>
        </div>
        <div className="relative min-h-[350px]">
          <img src="/images/5841edf23_image.png" alt="Kitchen sink" className="w-full h-full object-cover" />
        </div>
      </section>

      <SinkPairSection overline="DROP IN WORKSTATION" items={dropIn} />
      <SinkPairSection overline="FARMHOUSE WORKSTATION" items={farmhouse} />
      <StoneSinkSection />

      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Specify Your Sink Package</h3>
            <p className="text-cream/40 text-sm mt-1">All sinks available in Steel, Gold, Gunmetal, and Matte Black finishes.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}