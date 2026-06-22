import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BATH   = '/images/24219b1c5_generated_image.png';
const TUB    = '/images/5f01c3e72_generated_image.png';
const VAN    = '/images/4454f1e2c_generated_image.png';
const SOLID  = '/images/98dc5de89_generated_image.png';
const SHOWER = '/images/8eb20d42b_generated_image.png';
const QUARTZ = '/images/6285b3a94_generated_image.png';

const featured = [
  {
    title: 'Luxury & Project Bathtubs',
    sub: 'Freestanding & Built-In',
    img: TUB,
    desc: 'Ergonomically designed for five-star hotels and premium apartments. Superior heat retention and a velvet-touch matte finish. Material is 100% renewable — surface scratches can be sanded and restored on-site. Available in freestanding and alcove configurations for project efficiency.',
  },
  {
    title: 'Sinks & Basins',
    sub: 'Solid Surface · Undermount · Vessel',
    img: VAN,
    desc: 'Solid surface basins feature 100% non-porous surfaces and invisible joints, eliminating bacteria-breeding crevices. Specify for healthcare, hospitality, and commercial applications where NSF/ANSI 51 compliance is required. Custom dimensions available.',
  },
  {
    title: 'Cultured Marble Vanity Sinks',
    sub: 'Cultured Marble · Integrated',
    img: BATH,
    desc: 'Natural marble patterns meet superior durability, designed for rapid hospitality and residential deployment. Factory-integrated basin-to-deck construction eliminates field fabrication. Available in 36", 48", 60", and 72" configurations with standard or custom vanity base.',
  },
];

const secondary = [
  {
    title: 'Custom Countertops & Worktops',
    sub: 'Quartz · Solid Surface · Marble',
    img: QUARTZ,
    desc: 'We support seamless large-scale fabrication (up to 10m+) and offer 99% color matching accuracy to maintain global franchise and property management branding consistency. FOB pricing, pre-cut to specification.',
  },
  {
    title: 'Solid Surface Shower Pan & Wall Panels',
    sub: 'Acrylic Solid Surface',
    img: SHOWER,
    desc: 'The ultimate solution for premium hospitality and luxury residences. Solid surface panels and pans feature a matte, velvet-touch finish with zero visible seams. Pre-fabricated to specification for rapid installation.',
  },
  {
    title: 'One-Stop Bathroom Accessories',
    sub: 'Towel Racks · Trays · Niches',
    img: SOLID,
    desc: 'We simplify your procurement process by providing a comprehensive suite of matching accessories, including electric towel racks, bathtub trays, and integrated shower niches. Specified and ordered as a single line item.',
  },
];

export default function Bathroom() {
  return (
    <div className="bg-limestone pt-24">
      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden bg-obsidian">
        <img src={BATH} alt="Luxury bathroom collection" className="w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 to-obsidian/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full pb-16">
            <p className="text-[10px] font-sans tracking-widest uppercase text-copper mb-3">Category — Bathroom</p>
            <h1 className="font-serif text-4xl md:text-6xl text-limestone tracking-tight">Bathroom Collection</h1>
            <p className="mt-4 text-limestone/55 text-base max-w-xl leading-relaxed">
              Complete bathroom specification for hotel, multi-family residential, and commercial programs. Sourced as a single scope.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs font-sans text-stone">
          <Link to="/" className="hover:text-copper transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-copper transition-colors">Products</Link>
          <span>/</span>
          <span className="text-obsidian">Bathroom Collection</span>
        </div>
      </div>

      {/* Primary three-column */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-copper" />
          <span className="text-[10px] font-sans tracking-widest uppercase text-copper">Featured Categories</span>
        </div>
        <h2 className="font-serif text-3xl text-obsidian mb-12">Primary Bath Scope</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sandstone/40">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-limestone group"
            >
              <div className="relative aspect-square overflow-hidden bg-obsidian">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] font-sans tracking-widest uppercase text-copper/70">{item.sub}</p>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl text-obsidian mb-3">{item.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-xs text-copper font-sans tracking-wide hover:underline">
                  Request Spec Sheet <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary three-column */}
      <section className="bg-obsidian py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-copper" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-copper">Extended Scope</span>
          </div>
          <h2 className="font-serif text-3xl text-limestone mb-12">Surfaces, Pans & Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-limestone/5">
            {secondary.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-obsidian group border border-limestone/8 hover:border-copper/30 transition-colors"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] font-sans tracking-widest uppercase text-copper/60">{item.sub}</p>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl text-limestone mb-3">{item.title}</h3>
                  <p className="text-limestone/45 text-sm leading-relaxed">{item.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-xs text-copper font-sans tracking-wide">
                    Request Spec Sheet <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-limestone py-16 border-t border-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-obsidian">Specify the Complete Bathroom Scope</h3>
            <p className="text-stone text-sm mt-2">Single point of supply. Container-ready. Delivered to schedule.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-copper text-limestone px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-copper/90 transition-colors whitespace-nowrap">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}