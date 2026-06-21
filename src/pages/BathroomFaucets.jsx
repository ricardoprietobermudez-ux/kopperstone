import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const faucets = [
{ sku: 'KP-6104', name: 'Square Basin Mixer', type: 'Basin Tap', img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/5c5b00e04_Screenshot2026-06-18at65443PM.png' },
{ sku: 'KP-6113', name: 'Slim Matte Black', type: 'Basin Tap', img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/c4ad9b4bf_Screenshot2026-06-18at65626PM.png' },
{ sku: 'KP-6114', name: 'Slender Single Lever', type: 'Basin Tap', img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/1f277cab4_Screenshot2026-06-18at70112PM.png' },
{ sku: 'KP-6117', name: 'Curved Lever', type: 'Basin Tap', img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/26a5eb260_Screenshot2026-06-18at70200PM.png' },
{ sku: 'KS-WB3009B', name: 'Tall Lever Black', type: 'Basin Tap' },
{ sku: 'KS-WB3010', name: 'Low-Arc Basin Mixer', type: 'Basin Tap' },
{ sku: 'KS-WB3014', name: 'Modern Square Lever', type: 'Basin Tap' },
{ sku: 'KS-WB301BY', name: 'Brushed Gold Lever', type: 'Basin Tap' },
{ sku: 'KS-WB3021Y', name: 'Gold Arc Mixer', type: 'Basin Tap' },
{ sku: 'KS-WB3019', name: 'Minimalist Pull-Out', type: 'Basin Tap' },
{ sku: 'KS-WB8143', name: 'Widespread Two-Handle', type: 'Widespread' },
{ sku: 'KS-WB8144', name: 'Deck-Mount Widespread', type: 'Widespread' },
{ sku: 'KS-WB8140', name: 'Wall-Mount Pair', type: 'Wall Mount' },
{ sku: 'KS-WB82302', name: 'Luxury Widespread', type: 'Widespread' }];


const finishSwatches = [
{ label: 'Chrome', color: 'bg-slate-300' },
{ label: 'Brushed Gold', color: 'bg-yellow-500' },
{ label: 'Matte Black', color: 'bg-zinc-900' },
{ label: 'Gunmetal', color: 'bg-slate-600' }];


export default function BathroomFaucets() {
  return (
    <div className="bg-cream">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-20">
          <div className="gold-overline mb-6">FIXTURES</div>
          <h1 className="font-serif text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            Bathroom<br /><em className="text-gold italic">Faucets</em>
          </h1>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-md">
            A curated selection of bathroom faucets for vanities, bathtubs, and wet rooms.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            {finishSwatches.map((f) =>
            <div key={f.label} className="flex flex-col items-center gap-1.5 hidden">
                <div className={`w-8 h-8 rounded-full ${f.color} border border-navy/10`} />
                <span className="text-[9px] font-sans text-warm-grey">{f.label}</span>
              </div>
            )}
          </div>
        </div>
        <div className="relative min-h-[350px]">
          <img src="https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/736843221_image.png" alt="Bathroom faucets" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="text-[10px] font-sans tracking-widest uppercase text-gold mb-10">FAUCET SERIES</h2>
          <div className="grid grid-cols-2 gap-6">
            {faucets.slice(0, 4).map((f, i) => (
              <motion.div key={f.sku} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group bg-white border border-navy/10 overflow-hidden hover:border-gold/40 transition-colors">
                <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                  {f.img
                    ? <img src={f.img} alt={f.sku} className="w-4/5 h-4/5 object-contain" />
                    : <div className="w-6 h-20 bg-white/10 rounded-full" />
                  }
                </div>
                <div className="px-6 py-4 border-t border-navy/10">
                  <p className="font-sans text-sm tracking-widest text-navy">{f.sku}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-2xl text-cream">Specify Your Faucet Program</h3>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request Specification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>);

}