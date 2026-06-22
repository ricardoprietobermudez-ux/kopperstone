import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const sinks = [
  { id: 1, img: '/images/792791dc1_Screenshot2026-06-16at61504PM.png', sku: 'KP-1101' },
  { id: 2, img: '/images/201351091_Screenshot2026-06-16at61615PM.png', sku: 'KP-1103' },
  { id: 3, img: '/images/eaba71f56_Screenshot2026-06-16at61708PM.png', sku: 'KP-1104' },
  { id: 4, img: '/images/a3037b51f_Screenshot2026-06-16at61800PM.png', sku: 'KP-1105' },
];

export default function BathroomSinks() {
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

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-6">
            {sinks.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative aspect-[4/3] bg-navy border border-navy/10 overflow-hidden"
              >
                {s.img && (
                  <img
                    src={s.img}
                    alt={s.sku}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {s.sku && (
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-3 border-t border-navy/10">
                    <p className="text-sm font-sans tracking-widest text-charcoal text-center">{s.sku}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-2xl text-cream">Specify Your Sink Collection</h3>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}