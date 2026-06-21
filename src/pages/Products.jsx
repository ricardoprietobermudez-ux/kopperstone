import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SOLID  = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/98dc5de89_generated_image.png';
const QUARTZ = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/6285b3a94_generated_image.png';
const CAB    = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/7caa8e76d_generated_image.png';
const VAN    = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/4454f1e2c_generated_image.png';
const BATH   = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/24219b1c5_generated_image.png';
const SHOWER = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/8eb20d42b_generated_image.png';
const SINK   = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/5f01c3e72_generated_image.png';
const APPL   = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/d69270869_generated_image.png';
const LIGHT  = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/00f6b86f6_generated_image.png';

const categories = [
  { title: 'Solid Surface Sheets',  path: '/products/solid-surface',  img: SOLID,  tag: 'Acrylic · Modified Acrylic',         badge: 'CARB · NSF 51' },
  { title: 'Quartz Countertops',    path: '/products/quartz',          img: QUARTZ, tag: '93% Natural Quartz',                 badge: 'NSF 51 · Greenguard' },
  { title: 'Kitchen Cabinets',      path: '/products/cabinets',        img: CAB,    tag: 'Custom & Semi-Custom Programs',       badge: 'CARB Ph2 · KCMA' },
  { title: 'Bathroom Vanities',     path: '/products/vanities',        img: VAN,    tag: 'Floating & Freestanding',             badge: 'CARB · CSA Plumbing' },
  { title: 'Bathroom Collection',   path: '/products/bathroom',        img: BATH,   tag: 'Full Bath Scope — Single Source',     badge: 'Multiple Certs' },
  { title: 'Shower Systems',        path: '/products/shower-systems',  img: SHOWER, tag: 'Pans · Panels · Surrounds',           badge: 'CSA B125.1 · IAPMO' },
  { title: 'Sinks & Faucets',       path: '/products/sinks-faucets',   img: SINK,   tag: 'NSF/ANSI 61 · Lead-Free Plumbing',   badge: 'NSF 61 · WaterSense' },
  { title: 'Appliances',            path: '/products/appliances',      img: APPL,   tag: 'Suite & Unit Packages',              badge: 'UL · Energy Star' },
  { title: 'Lighting',              path: '/products/lighting',        img: LIGHT,  tag: 'LED · Dimmable · CRI 90+',           badge: 'UL/cUL · Title 24' },
];

export default function Products() {
  return (
    <div className="bg-limestone pt-24">
      {/* Page header */}
      <section className="relative bg-obsidian py-24">
        <div className="absolute inset-0">
          <img src={QUARTZ} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-obsidian/80" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-[10px] font-sans tracking-widest uppercase text-copper mb-4">Product Catalog</p>
          <h1 className="font-serif text-4xl md:text-6xl text-limestone tracking-tight max-w-2xl">
            Nine Specification-Grade Categories
          </h1>
          <p className="mt-6 text-limestone/50 text-base leading-relaxed max-w-xl">
            Complete kitchen and bathroom scope for hotel, multi-family residential, healthcare, and commercial programs. All categories container-ready with FOB Shenzhen origin.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-copper text-limestone px-6 py-3 text-xs font-sans uppercase tracking-wide hover:bg-copper/90 transition-colors">
              Request Line Card <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button className="inline-flex items-center gap-2 border border-limestone/20 text-limestone px-6 py-3 text-xs font-sans uppercase tracking-wide hover:border-limestone/40 transition-colors">
              Download Master Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <div className="space-y-px bg-sandstone/30">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to={cat.path}
                className={`group grid grid-cols-1 lg:grid-cols-12 bg-limestone hover:bg-obsidian transition-colors duration-300 overflow-hidden`}
              >
                <div className={`lg:col-span-4 aspect-video lg:aspect-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-copper/70 group-hover:text-copper">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-sans tracking-wide text-stone group-hover:text-limestone/40 transition-colors">{cat.tag}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-obsidian group-hover:text-limestone transition-colors tracking-tight">
                    {cat.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cat.badge.split(' · ').map(b => (
                      <span key={b} className="text-[10px] font-sans tracking-wide text-stone/70 group-hover:text-limestone/40 border border-stone/20 group-hover:border-limestone/15 px-2 py-0.5 transition-colors">
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-copper text-xs font-sans tracking-wide">
                    View Specifications <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}