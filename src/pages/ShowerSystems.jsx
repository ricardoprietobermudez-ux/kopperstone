import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const tiles = [
  { label: '10×20 Vertical', dims: '100 × 200mm' },
  { label: '6×12 Vertical', dims: '150 × 300mm' },
  { label: '12×24 Contemporary', dims: '300 × 600mm' },
  { label: '4×15 Chevron', dims: '100 × 400mm' },
  { label: 'Harmony Mosaic', dims: '300 × 300mm' },
  { label: '4×15 Confetti', dims: '100 × 400mm' },
];

const drains = [
  { sku: 'KS-NAF002', name: 'Square Tile Insert', type: 'Point Drain' },
  { sku: 'KS-NAF002X', name: 'Square Anti-Odor', type: 'Point Drain' },
  { sku: 'KS-SAF001', name: 'Round Flat Cover', type: 'Point Drain' },
  { sku: 'KS-SAF007', name: 'Square Grid', type: 'Point Drain' },
  { sku: 'KS-LD01', name: 'Linear 600mm', type: 'Linear Drain' },
  { sku: 'KS-LD02', name: 'Linear 900mm', type: 'Linear Drain' },
  { sku: 'KS-LD03', name: 'Linear 1200mm', type: 'Linear Drain' },
];

export default function ShowerSystems() {
  return (
    <div className="bg-cream">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">SHOWER SYSTEMS</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            Tray &amp;<br /><em className="text-gold italic">Surroundings</em>
          </h1>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-md">
            Complete shower tray and wall surround solutions. Designed for seamless integration with your bathroom collection. Available in a range of materials, formats, and finishes for any project scale.
          </p>
        </div>
        <div className="relative min-h-[350px]">
          <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=80" alt="Shower system" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Wall tile patterns */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-[10px] font-sans tracking-widest uppercase text-gold mb-10">WALL TILE FORMATS</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {tiles.map((t, i) => (
              <motion.div key={t.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-cream border border-navy/10 p-4 hover:border-gold transition-colors">
                <div className="aspect-square bg-gray-50 flex items-center justify-center mb-3 border border-navy/5">
                  <div className="grid grid-cols-3 gap-0.5 w-16 h-16">
                    {[...Array(9)].map((_, j) => <div key={j} className="bg-slate-200 border border-white" />)}
                  </div>
                </div>
                <p className="text-xs font-sans text-navy font-medium">{t.label}</p>
                <p className="text-[10px] text-warm-grey mt-0.5 font-sans">{t.dims}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor drains */}
      <section className="bg-navy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-[10px] font-sans tracking-widest uppercase text-gold/50 mb-10">FLOOR DRAIN</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {drains.map((d, i) => (
              <motion.div key={d.sku} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-cream/5 border border-cream/10 p-4 text-center hover:border-gold transition-colors">
                <div className="aspect-square bg-cream/5 flex items-center justify-center mb-2">
                  <div className="w-10 h-10 bg-slate-300/30 border border-slate-300/20 rounded-sm" />
                </div>
                <p className="text-[9px] font-sans text-cream/50">{d.sku}</p>
                <p className="text-[10px] font-sans text-cream/70 mt-0.5">{d.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 border-t border-navy/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-2xl text-navy">Specify Your Shower Package</h3>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}