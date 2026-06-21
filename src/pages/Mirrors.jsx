import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const mirrors = [
  { sku: 'KS-M8050-1', name: 'Round LED Backlit', dims: 'Ø 800mm' },
  { sku: 'KS-M8051', name: 'Oval LED Backlit', dims: '600 × 800mm' },
  { sku: 'KS-M8050-S', name: 'Round LED Square Surround', dims: 'Ø 800mm' },
  { sku: 'KS-M8053-1', name: 'Rectangular LED', dims: '800 × 1200mm' },
  { sku: 'KS-M6040', name: 'Frameless Rectangle', dims: '600 × 900mm' },
  { sku: 'KS-M9060', name: 'Full-Length Mirror', dims: '900 × 1800mm' },
];

export default function Mirrors() {
  return (
    <div className="bg-cream">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="relative min-h-[350px]">
          <img src="https://images.unsplash.com/photo-1613685703305-ce0e05a6fc5e?w=900&q=80" alt="Mirror collections" className="w-full h-full object-cover" />
        </div>
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">FORM &amp; REFLECTION</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            Mirror<br /><em className="text-gold italic">Collections</em>
          </h1>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-md">
            Framed and frameless mirrors for bathrooms, vanities and feature walls. Available in custom sizes, shapes and finishes. With LED backlit options for clean, modern finish.
          </p>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-[10px] font-sans tracking-widest uppercase text-gold/50 mb-10">LED BACKLIT COLLECTION</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {mirrors.map((m, i) => (
              <motion.div key={m.sku} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-navy-light border border-cream/8 p-6 text-center hover:border-gold transition-colors">
                <div className="aspect-[4/3] bg-navy flex items-center justify-center mb-4">
                  {m.name.includes('Round') ? (
                    <div className="w-20 h-20 rounded-full bg-cream/10 border border-gold/20 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-cream/5" />
                    </div>
                  ) : (
                    <div className="w-20 h-24 bg-cream/10 border border-gold/20" />
                  )}
                </div>
                <p className="text-[10px] font-sans text-cream/50">{m.sku}</p>
                <p className="text-sm font-sans text-cream mt-1">{m.name}</p>
                <p className="text-[10px] font-sans text-cream/35 mt-0.5">{m.dims}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 border-t border-navy/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-2xl text-navy">Specify Your Mirror Program</h3>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}