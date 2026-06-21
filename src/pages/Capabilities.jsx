import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Pencil, Globe, ShieldCheck, Truck, Wrench, Users, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    num: '01',
    icon: Pencil,
    title: 'In-House Design Studio',
    desc: 'Architectural drawings, 3D renders, BIM files, and full specification packages produced by our in-house design team. We design to the same standards as the architects and project managers we work alongside.',
    detail: ['Architectural plan views and elevations', '3D client presentation renders', 'BIM files for design integration', 'Full material and finish specification', 'Unlimited revisions before production'],
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    num: '02',
    icon: Globe,
    title: 'Global Manufacturing Network',
    desc: 'Vetted production partners across multiple manufacturing regions with ISO 9001 certified facilities. Our supply chain is built for project-scale consistency — the same product in container 1 and container 20.',
    detail: ['ISO 9001 certified facilities', 'Pre-production sample approval program', 'Factory qualification and audit program', 'Multi-container production consistency', 'No single-source dependency'],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Three-stage inspection protocol on every production run. Pre-production sample approval, in-line inspection at 30%, and final random inspection (AQL 2.5) before container loading. Photo-documented throughout.',
    detail: ['Pre-production sample approval', 'In-line inspection at 30% production', 'Final random inspection — AQL 2.5', 'Container loading supervision', 'Full photo documentation package'],
    img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
  },
  {
    num: '04',
    icon: Truck,
    title: 'Logistics & Customs',
    desc: 'Full end-to-end coordination for U.S. and Canadian imports. We act as the importer of record, manage customs brokerage, coordinate bonded warehousing, and handle last-mile delivery to job site.',
    detail: ['U.S. and Canadian import compliance', 'Customs brokerage and ISF filing', 'Bonded warehousing in Austin, TX', 'Phased delivery across containers', 'Last-mile coordination to job site'],
    img: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=800&q=80',
  },
  {
    num: '05',
    icon: Wrench,
    title: 'Installation Services',
    desc: 'Optional turnkey installation through our certified contractor network in major U.S. and Canadian markets. We coordinate site readiness, schedule installation teams, and manage punch-list resolution.',
    detail: ['Certified contractor network', 'Site readiness coordination', 'Installation scheduling and management', 'Punch-list documentation and resolution', 'Available in major U.S. and Canadian markets'],
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    num: '06',
    icon: Users,
    title: 'Project Management',
    desc: 'Dedicated account managers for programs exceeding 50 units. Single point of contact from specification through warranty claims. Multi-container delivery scheduling aligned to your construction timeline.',
    detail: ['Dedicated account manager per program', 'Multi-container delivery scheduling', 'Specification lock and change management', 'On-site delivery coordination', 'Post-install warranty claims handled centrally'],
    img: 'https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&q=80',
  },
];

export default function Capabilities() {
  return (
    <div className="bg-cream pt-0">
      {/* Hero */}
      <section className="bg-navy py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="gold-overline mb-6">HOW WE WORK</div>
          <h1 className="font-serif text-5xl md:text-6xl text-cream tracking-tight max-w-2xl">
            A Vertically Integrated<br /><em className="text-gold italic">Supply Chain</em>
          </h1>
          <p className="mt-6 text-cream/45 text-base leading-relaxed max-w-xl font-sans">
            From factory qualification to job-site delivery, Kopperstone controls every stage of the supply chain for kitchen and bathroom materials at project scale.
          </p>
        </div>
      </section>

      {/* Capability sections */}
      <div>
        {capabilities.map((cap, i) => {
          const { num, icon: CapIcon, title, desc, detail, img } = cap;
          return (
          <motion.section
            key={num}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${i % 2 === 0 ? 'bg-cream' : 'bg-[#F0EAE1]'} py-20 border-t border-navy/8`}
          >
            <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-last' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 border border-gold/30 flex items-center justify-center">
                      <CapIcon className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-[10px] font-sans tracking-widest uppercase text-gold">{num}</span>
                  </div>
                  <h2 className="font-serif text-3xl text-navy tracking-tight">{title}</h2>
                  <p className="mt-5 text-warm-grey text-base leading-relaxed font-sans">{desc}</p>
                  <ul className="mt-8 space-y-2.5">
                    {detail.map(d => (
                      <li key={d} className="flex items-start gap-3 text-sm text-navy font-sans">
                        <span className="text-gold mt-1 flex-shrink-0">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img src={img} alt={title} className="w-full aspect-[4/3] object-cover" />
                </div>
              </div>
            </div>
          </motion.section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-3xl text-cream">Ready to Start a Program?</h3>
            <p className="text-cream/45 text-sm mt-2 max-w-lg">Describe your project scope, unit count, and target timeline. Our team responds within one business day.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}