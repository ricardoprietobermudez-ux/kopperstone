import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ArchitecturalDrawing from '@/components/kitchens/ArchitecturalDrawing';

const HERO_IMG = '/images/kitchen_1.png';

const collections = [
{
  id: 'modern',
  name: 'Modern Collection',
  overline: 'CLEAN · CONTEMPORARY',
  desc: 'Minimalist lines, integrated appliances, and handleless door profiles. Matte lacquer finishes in a curated palette from pure white to deep charcoal. Designed for urban multi-family and boutique hotel properties.',
  components: ['Handleless base and wall cabinets', 'Solid surface or quartz countertop', 'Under-cabinet LED lighting'],
  img: '/images/kitchen_1.png'
},
{
  id: 'french',
  name: 'French Collection',
  overline: 'SOFT · TRANSITIONAL',
  desc: 'Soft transitional design with arched upper cabinet profiles, shaker door detailing, and painted finishes. Natural marble-look countertops, brushed gold hardware, and open shelf elements with integrated lighting.',
  components: ['Arched upper cabinet doors', 'Painted finish, custom color matching', 'Marble-look quartz countertops'],
  img: '/images/kitchen_2.png'
},
{
  id: 'american',
  name: 'American Collection',
  overline: 'CLASSIC · GRAND',
  desc: 'Rich walnut cabinetry with glass display uppers, brass accent hardware, and a statement marble island. Designed for luxury residential towers, boutique hotels, and hospitality properties demanding timeless American craftsmanship.',
  components: ['Walnut cabinetry, full height', 'Marble waterfall island with seating', 'Professional range with hood'],
  img: '/images/kitchen_3.png'
},
{
  id: 'industrial',
  name: 'Industrial Collection',
  overline: 'RAW · MODERN',
  desc: 'Dark grey cabinetry with oak wood accents, exposed ductwork integration, concrete-look surfaces, and a breakfast bar layout. Designed for loft apartments, restaurant fit-outs, and co-living developments.',
  components: ['Dark grey flat-panel cabinets', 'Concrete-look countertop', 'Matte black hardware and fixtures'],
  img: '/images/kitchen_4.png'
},
{
  id: 'european',
  name: 'European Collection',
  overline: 'LUXURY · TRANSITIONAL',
  desc: 'Two-tone island compositions, soft grey cabinetry with marble surfaces, and brushed gold hardware. Designed for five-star hotel properties and premium residential developments demanding specification-grade European elegance.',
  components: ['Soft grey Shaker upper cabinets', 'Full-height marble backsplash', 'Marble island with integrated sink'],
  img: '/images/kitchen_5.png'
}];


export default function Kitchens() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative bg-navy py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Kitchen collections" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="gold-overline mb-6">CURATED FOR EXCELLENCE</div>
          <h1 className="font-serif text-5xl md:text-7xl text-cream tracking-tight">
            Kitchen<br /><em className="text-gold italic">Collections</em>
          </h1>
          <p className="mt-6 text-cream/50 text-base max-w-xl leading-relaxed font-sans">
            Precision-crafted kitchens for the modern home. Every collection is fully customizable, from cabinet finish to countertop material, and built around the way each space is meant to be lived in.
          </p>
        </div>
      </section>

      {/* Collections */}
      <div>
        {collections.map((col, i) =>
        <motion.section
          key={col.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-navy/10"
        >
          {/* Image — contained with fixed height */}
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-10">
            <div className="w-full h-[480px] overflow-hidden">
              <img
                src={col.img}
                alt={col.name}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Caption bar */}
          <div className="bg-white border-t border-navy/10 px-8 py-8">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
              {/* Collection name */}
              <div className="md:w-48 flex-shrink-0 border-r border-navy/15 pr-8">
                <h2 className="font-serif text-3xl text-navy leading-tight">
                  {col.name.replace(' Collection', '')}
                </h2>
                <em className="font-serif text-2xl text-gold italic">Collection</em>
              </div>

              {/* Components two columns */}
              <div className="flex-1">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
                  {col.components.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-charcoal font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal flex-shrink-0 mt-1.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* K logo mark */}
              <div className="flex-shrink-0 self-end">
                <div className="w-10 h-10 border border-navy/30 flex items-center justify-center">
                  <span className="font-serif text-lg text-navy font-semibold">K</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        )}
      </div>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
            <div>
              <h3 className="font-serif text-3xl text-cream">Ready to specify your kitchen collection?</h3>
              <p className="text-cream/40 text-sm mt-2">Volume pricing for 30+ units. Fully customizable to your project's specifications.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="border-t border-cream/10 pt-10">
            <Link to="/configurator?mode=kitchen" className="flex items-center justify-between border border-gold/40 px-6 py-5 group hover:bg-gold/5 transition-colors max-w-md">
              <div>
                <p className="text-[9px] font-sans uppercase tracking-widest text-gold mb-1">Interactive Tool</p>
                <p className="font-serif text-lg text-cream">Design Configurator</p>
                <p className="text-cream/40 text-xs font-sans mt-1">Choose your layout, finishes, and fixtures</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>);

}