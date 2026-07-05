import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// NOTE: names below are descriptive placeholders based on photos — swap in real product names when available
const faucets = [
  { sku: 'KP-9202', name: 'Pro Coil Pull-Down', img: '/images/d5a34e9d3_Screenshot2026-06-16at120951PM.png' },
  { sku: 'KP-9220', name: 'Angular Single-Lever', img: '/images/111391d57_Screenshot2026-06-16at13336PM.png' },
  { sku: 'KP-9209', name: 'Classic Pull-Down Gooseneck', img: '/images/a55ece026_Screenshot2026-06-16at13659PM.png' },
  { sku: 'KP-9204', name: 'Compact Coil Pull-Down', img: '/images/0e29e58c2_Screenshot2026-06-16at13855PM.png' },
  { sku: 'KP-9218', name: 'Curved Pull-Down', img: '/images/fd95f6aa0_Screenshot2026-06-16at14016PM.png' },
  { sku: 'KP-9223', name: 'Geometric Single-Lever', img: '/images/13ce3592a_Screenshot2026-06-16at15138PM.png' },
];

export default function KitchenFaucets() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="relative min-h-[350px] overflow-hidden">
          <img
            src="/images/3b98cc36b_Screenshot2026-06-16at115831AM.png"
            alt="Kitchen faucets"
            className="w-full h-full object-cover scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-navy/20" />
        </div>
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">FIXTURES</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            Kitchen Faucet<br /><em className="text-gold italic">Collections</em>
          </h1>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-md">
            A refined selection of kitchen faucets, available in multiple styles and finishes — engineered to last, without compromising design.
          </p>
        </div>
      </section>

      {/* Faucet Grid */}
      <section className="py-20 border-t border-navy/8 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-center text-[11px] font-sans tracking-widest uppercase text-gold mb-14">Kitchen Faucet Styles</h2>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {faucets.map((f, i) => (
              <div key={f.sku} className="w-full sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-28px)]">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] bg-gray-50 border border-navy/10 group-hover:border-gold transition-colors overflow-hidden flex items-center justify-center">
                    <img src={f.img} alt={f.name} className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="font-serif text-sm text-navy mt-3 text-center">{f.name}</p>
                  <p className="text-[10px] font-sans text-warm-grey mt-1 text-center tracking-wide">{f.sku}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes strip */}
      <section className="bg-cream py-14 border-t border-navy/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-[10px] font-sans tracking-widest uppercase text-gold mb-8 text-center">Available Finishes</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Polished Chrome', color: '#C8CDD3' },
              { label: 'Brushed Gold', color: '#C9A77C' },
              { label: 'Matte Black', color: '#1C1C1C' },
              { label: 'Gunmetal', color: '#5A6068' },
              { label: 'Brushed Steel', color: '#9BA3AB' },
            ].map(f => (
              <div key={f.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-navy/10 shadow-sm" style={{ backgroundColor: f.color }} />
                <p className="text-[9px] font-sans tracking-widest uppercase text-warm-grey">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14 border-t border-cream/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Complete Your Kitchen</h3>
            <p className="text-cream/40 text-sm mt-1">All faucets available in Polished Chrome, Brushed Gold, Matte Black, Gunmetal, and Brushed Steel finishes.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
