import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    category: 'DISCOVERY',
    title: 'Consultation',
    body: 'We define project scope, scale, and design preferences.',
    detail: ['Initial project brief review', 'Unit count and scale assessment', 'Design preferences and finish direction', 'Budget and timeline alignment'],
    img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/962cffd7d_image.png',
  },
  {
    num: '02',
    category: 'DESIGN',
    title: 'Design & Selection',
    body: 'Curated configurations or custom specs — every detail drafted and approved before production.',
    detail: ['Architectural drawings and elevations', 'Material and finish selection', 'Custom configuration drafting', 'Client approval before production'],
    img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/a35e4fe2d_image.png',
  },
  {
    num: '03',
    category: 'REVIEW',
    title: 'Proposal & Approval',
    body: 'Full proposal with selections, quantities, and timelines, ready for your sign off.',
    detail: ['Complete specification package', 'Itemised quantities and pricing', 'Production timeline confirmed', 'Written sign-off before manufacturing begins'],
    img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/1181a89b1_image.png',
  },
  {
    num: '04',
    category: 'PRODUCTION',
    title: 'Quality & Control',
    body: 'Every unit produced to spec, backed by third-party inspection and certification at every critical stage.',
    detail: ['ISO 9001 quality management', 'Third-party inspection at key milestones', 'Photo-documented production stages', 'Pre-shipment inspection report'],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
  },
  {
    num: '05',
    category: 'CLOSE',
    title: 'Delivery & Support',
    body: 'Coordinated delivery to your site, with installation guidance and dedicated after-sales support.',
    detail: ['End-to-end freight and customs management', 'Phased delivery to match construction schedule', 'Installation guidance and coordination', 'Dedicated after-sales support'],
    img: 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/91ec3eac7_image.png',
  },
];

export default function Process() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="bg-navy py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="gold-overline mb-6">OUR PROCESS</div>
          <h1 className="font-serif text-5xl md:text-6xl text-cream tracking-tight max-w-2xl">
            From Specification<br /><em className="text-gold italic">to Delivery</em>
          </h1>
          <p className="mt-6 text-cream/45 text-base leading-relaxed max-w-xl font-sans">
            Five stages. One point of contact. Full transparency at every step. Kopperstone manages the complete supply chain from initial specification through job-site delivery.
          </p>
        </div>
      </section>

      {/* Horizontal step strip */}
      <div className="bg-navy border-t border-cream/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-5 gap-0 relative">
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gold/20" />
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center px-2 relative z-10">
                <div className="w-14 h-14 border border-gold/40 bg-navy flex items-center justify-center mb-3">
                  <span className="font-serif text-xl text-gold">{step.num}</span>
                </div>
                <p className="text-[9px] font-sans text-gold/70 tracking-widest uppercase mb-0.5">{step.category}</p>
                <p className="text-xs font-sans text-cream/60">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full step sections */}
      <div>
        {steps.map((step, i) => (
          <motion.section
            key={step.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`${i % 2 === 0 ? 'bg-cream' : 'bg-[#F0EAE1]'} py-20 border-t border-navy/8`}
          >
            <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? '' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-last' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-serif text-5xl text-gold/20">{step.num}</span>
                    <div>
                      <p className="text-[10px] font-sans tracking-widest uppercase text-gold">{step.category}</p>
                      <h2 className="font-serif text-3xl text-navy">{step.title}</h2>
                    </div>
                  </div>
                  <p className="text-warm-grey text-base leading-relaxed font-sans">{step.body}</p>
                  <ul className="mt-8 space-y-2.5">
                    {step.detail.map(d => (
                      <li key={d} className="flex items-start gap-3 text-sm text-navy font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img src={step.img} alt={step.title} className="w-full aspect-[4/3] object-cover" />
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-3xl text-cream">Ready to start your specification?</h3>
            <p className="text-cream/40 text-sm mt-2">Our team responds within one business day.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}