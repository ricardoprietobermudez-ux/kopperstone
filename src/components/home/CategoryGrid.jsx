import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SOLID  = '/images/98dc5de89_generated_image.png';
const QUARTZ = '/images/6285b3a94_generated_image.png';
const CAB    = '/images/7caa8e76d_generated_image.png';
const VAN    = '/images/4454f1e2c_generated_image.png';
const BATH   = '/images/24219b1c5_generated_image.png';
const SHOWER = '/images/8eb20d42b_generated_image.png';
const SINK   = '/images/5f01c3e72_generated_image.png';
const APPL   = '/images/d69270869_generated_image.png';
const LIGHT  = '/images/00f6b86f6_generated_image.png';

const cats = [
  { label: 'Solid Surface Sheets',  path: '/products/solid-surface',  img: SOLID,  sub: 'Acrylic & Modified Acrylic' },
  { label: 'Quartz Countertops',    path: '/products/quartz',          img: QUARTZ, sub: 'Engineered Stone' },
  { label: 'Kitchen Cabinets',      path: '/products/cabinets',        img: CAB,    sub: 'Custom & Stock Programs' },
  { label: 'Bathroom Vanities',     path: '/products/vanities',        img: VAN,    sub: 'Floating & Freestanding' },
  { label: 'Bathroom Collection',   path: '/products/bathroom',        img: BATH,   sub: 'Full Bath Scope' },
  { label: 'Shower Systems',        path: '/products/shower-systems',  img: SHOWER, sub: 'Pans · Panels · Surrounds' },
  { label: 'Sinks & Faucets',       path: '/products/sinks-faucets',   img: SINK,   sub: 'NSF/ANSI 61 Certified' },
  { label: 'Appliances',            path: '/products/appliances',      img: APPL,   sub: 'UL · Energy Star' },
  { label: 'Lighting',              path: '/products/lighting',        img: LIGHT,  sub: 'Specification Grade' },
];

export default function CategoryGrid() {
  const { t } = useLanguage();
  return (
    <section className="bg-limestone py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-copper" />
              <span className="text-[10px] font-sans tracking-widest uppercase text-copper">01 — Products</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-obsidian tracking-tight">{t('categories.title')}</h2>
            <p className="mt-4 text-stone text-base max-w-xl leading-relaxed">{t('categories.subtitle')}</p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-obsidian/20 text-obsidian px-6 py-3 text-xs font-sans uppercase tracking-wide hover:border-copper hover:text-copper transition-colors whitespace-nowrap"
          >
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sandstone/40">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.path}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <Link to={cat.path} className="group relative block aspect-[4/3] overflow-hidden bg-obsidian">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover opacity-55 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-sans tracking-widest uppercase text-copper/70 mb-1">{cat.sub}</p>
                  <h3 className="font-serif text-xl text-limestone leading-tight">{cat.label}</h3>
                  <div className="flex items-center gap-2 mt-2 text-copper text-xs font-sans tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    {t('categories.viewAll')} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}