import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const vanities = [
{ sku: 'KP-2101', label: 'kp-2101', size: '610mm', desc: 'Compact floating vanity for guest bathrooms and powder rooms.', img: '/images/b5af16793_Screenshot2026-06-16at74311PM.png' },
{ sku: 'KS-V100', label: 'kp-2107', size: '1000mm', desc: 'Single-sink floating vanity, standard hotel room specification.', img: '/images/92b3393d8_Screenshot2026-06-16at73256PM.png' },
{ sku: 'KS-V1200', label: 'kp-2110', size: '1200mm', desc: 'Extended single-sink vanity for larger guest suites.', img: '/images/44f9153ba_Screenshot2026-06-16at73348PM.png' },
{ sku: 'KS-V1500', label: 'kp-2111', size: '1500mm', desc: 'Standard double-sink vanity for residential master bathrooms.', img: '/images/00d15ce34_Screenshot2026-06-16at73706PM.png' },
{ sku: 'KS-V160A', label: 'kp-2203', size: '1600mm', desc: 'Double-sink vanity with extended storage — luxury residential.', img: '/images/a10dec276_Screenshot2026-06-16at73946PM.png' },
{ sku: 'KS-V160B', label: 'kp-2112', size: '1600mm', desc: 'Double-sink vanity with alternative door profile configuration.', img: '/images/36b3405a8_Screenshot2026-06-16at74041PM.png' }];


const finishes = ['Warm Oak', 'Dark Walnut', 'White Lacquer', 'Grey Lacquer', 'Custom RAL Color'];

export default function Vanities() {
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

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vanities.map((v, i) =>
            <motion.div key={v.sku} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className="bg-navy group overflow-hidden hover:bg-navy-light transition-colors">
                <div className="aspect-[4/3] bg-navy-light border-b border-cream/5 overflow-hidden flex items-center justify-center">
                  {v.img ?
                <img src={v.img} alt={v.label} className="w-full h-full object-cover" /> :

                <div className="text-center">
                      <div className="w-28 h-14 bg-white/10 mx-auto mb-2" />
                      <span className="text-[10px] font-sans text-cream/20 uppercase tracking-widest">{v.size}</span>
                    </div>
                }
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-sans text-gold/60 uppercase tracking-widest mb-1 hidden">{v.sku}</p>
                  <h3 className="font-serif text-lg text-cream">{v.label}</h3>
                  <p className="text-cream/40 text-xs leading-relaxed font-sans mt-2 hidden">{v.desc}</p>
                </div>
              </motion.div>
            )}
          </div>


        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-2xl text-cream">Specify Your Vanity Program</h3>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>);

}