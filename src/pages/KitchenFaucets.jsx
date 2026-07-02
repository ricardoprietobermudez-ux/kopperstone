import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const faucets = [
  { sku: 'KP-9202', img: '/images/d5a34e9d3_Screenshot2026-06-16at120951PM.png' },
  { sku: 'KP-9220', img: '/images/111391d57_Screenshot2026-06-16at13336PM.png' },
  { sku: 'KP-9209', img: '/images/a55ece026_Screenshot2026-06-16at13659PM.png' },
  { sku: 'KP-9204', img: '/images/0e29e58c2_Screenshot2026-06-16at13855PM.png' },
  { sku: 'KP-9218', img: '/images/fd95f6aa0_Screenshot2026-06-16at14016PM.png' },
  { sku: 'KP-9223', img: '/images/13ce3592a_Screenshot2026-06-16at15138PM.png' },
];

export default function KitchenFaucets() {
  const [hovered, setHovered] = useState(null);

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

      {/* Section label */}
      <div className="bg-white border-t border-b border-navy/8 py-5 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <p className="text-[10px] font-sans tracking-widest uppercase text-gold">KP Series — Kitchen Faucet Catalog</p>
          <p className="text-[10px] font-sans tracking-widest uppercase text-warm-grey">All models available in custom finishes</p>
        </div>
      </div>

      {/* Faucet Catalog Grid */}
      <section className="bg-white pb-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-navy/10 border-x border-b border-navy/10">
            {faucets.map((f, i) => (
              <motion.div
                key={f.sku}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHovered(f.sku)}
                onMouseLeave={() => setHovered(null)}
                className="relative group aspect-[3/4] bg-white flex flex-col items-center justify-center p-10 cursor-default overflow-hidden"
              >
                {/* Subtle background on hover */}
                <div className={`absolute inset-0 bg-cream transition-opacity duration-300 ${hovered === f.sku ? 'opacity-100' : 'opacity-0'}`} />

                {/* Gold corner accent */}
                <div className={`absolute top-0 left-0 w-6 h-px bg-gold transition-all duration-300 ${hovered === f.sku ? 'w-10' : 'w-4'}`} />
                <div className={`absolute top-0 left-0 h-6 w-px bg-gold transition-all duration-300 ${hovered === f.sku ? 'h-10' : 'h-4'}`} />

                <motion.img
                  src={f.img}
                  alt={f.sku}
                  className="relative w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative flex flex-col items-center mt-4 gap-1">
                  <p className="text-sm font-sans tracking-widest text-charcoal">{f.sku}</p>
                  <div className={`h-px bg-gold transition-all duration-300 ${hovered === f.sku ? 'w-8' : 'w-0'}`} />
                </div>
              </motion.div>
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
            <h3 className="font-serif text-2xl text-cream">Specify Your Faucet Package</h3>
            <p className="text-cream/40 text-sm mt-1">Volume pricing for 30+ units. Custom finish available for 100+ unit orders.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}