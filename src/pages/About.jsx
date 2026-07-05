import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

const FOUNDERS_IMG = '/images/e894a3faa_websitephoto.pdf';

export default function About() {
  return (
    <div className="bg-navy">

      {/* ── Section 1: Where it started ── */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="gold-overline mb-6">ABOUT KOPPERSTONE</div>
          <h1 className="font-serif text-4xl md:text-5xl text-cream tracking-tight leading-tight mb-8">
            Where it started
          </h1>
          <p className="text-cream/60 text-base leading-relaxed font-sans">
            Santiago Rojas, Ricardo Prieto, and Cesar Padilla shared the same way of looking at the world. That common vision became the foundation for Kopperstone a company built on trust, craftsmanship, and getting things done right.
          </p>
        </motion.div>

        {/* Founders portraits */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10">
          {[
            { src: '/images/db1326dde_IMG_1399.jpg', name: 'Ricardo Prieto', title: 'Co-Founder', pos: '15%', zoom: true },
            { src: '/images/e69e4d93b_IMG_1400.jpg', name: 'Santiago Rojas', title: 'Co-Founder', pos: '0%', zoom: true },
            { src: '/images/abeb0c9e1_a4dc7d2e-bbba-4ec6-b925-55ff64a65eff.jpg', name: 'Cesar Padilla', title: 'Co-Founder', pos: '15%', zoom: false },
          ].map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-4">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-gold/40 flex-shrink-0 bg-navy">
                <img src={p.src} alt={p.name} className="w-full h-full object-cover" style={{ objectPosition: `center ${p.pos}`, transform: p.zoom ? 'scale(1.1)' : 'scale(1)' }} />
              </div>
              <div className="text-center">
                <p className="font-serif text-lg text-cream">{p.name}</p>
                <p className="text-cream/45 text-xs font-sans mt-0.5">{p.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <div className="border-t border-cream/8" />

      {/* ── Section 2: Why we built Kopperstone ── */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight mb-8">
            Why we built Kopperstone
          </h2>
          <div className="space-y-6 text-cream/60 text-base leading-relaxed font-sans">
            <p>
              North America is facing one of the largest housing shortages in modern history, and developers and homeowners are often stuck choosing between rushed contractors and unreliable supply chains for the materials.
            </p>
            <p>
              We founded Kopperstone to close that gap. By delivering precision-crafted kitchens, bathrooms, and building materials, we help every project move from vision to reality — with fewer delays, predictable costs, and craftsmanship you can trust.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="border-t border-cream/8" />

      {/* ── Section 3: What we're building ── */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight mb-8">
            What we're building
          </h2>
          <p className="text-cream/60 text-base leading-relaxed font-sans">
            Kopperstone is growing into a parent company for a family of focused, quality-driven businesses — each built to solve a real problem in home renovation and design. The mission stays the same: bring transparency, craftsmanship, and reliability to the homes we help build.
          </p>
        </motion.div>
      </section>

      <div className="border-t border-cream/8" />

      {/* ── Leadership ── */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="gold-overline mb-4">LEADERSHIP</div>
          <h2 className="font-serif text-4xl text-cream tracking-tight mb-14">
            The team behind <em className="text-gold italic">Kopperstone</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { initials: 'RP', name: 'Ricardo Prieto', title: 'Co-Founder', email: 'ricardo@kopperstone.com' },
            { initials: 'SR', name: 'Santiago Rojas', title: 'Co-Founder', email: 'santiago@kopperstone.com' },
            { initials: 'CP', name: 'Cesar Padilla', title: 'Co-Founder', email: 'cesar@kopperstone.com' },
          ].map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-light border border-cream/10 p-8 flex items-center gap-6"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-charcoal border border-gold/40 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-xl text-cream">{person.initials}</span>
              </div>
              <div>
                <p className="font-serif text-xl text-cream mb-1">{person.name}</p>
                <p className="text-cream/45 text-sm font-sans">
                  {person.title}
                </p>
                <p className="text-sm font-sans mt-0.5">
                  <a href={`mailto:${person.email}`} className="text-gold/70 hover:text-gold transition-colors">
                    {person.email}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LinkedIn CTA ── */}
      <div className="border-t border-cream/8" />
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="gold-overline mb-4">STAY CONNECTED</div>
          <h2 className="font-serif text-3xl text-cream tracking-tight mb-8">Follow our journey</h2>
          <a
            href="https://www.linkedin.com/company/kopperstone/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 text-sm font-sans uppercase tracking-wide hover:bg-gold/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            Follow Kopperstone on LinkedIn <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-cream/8 py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Start Your Project with Kopperstone</h3>
            <p className="text-cream/40 text-sm mt-2">Precision-crafted kitchens and bathrooms, delivered with craftsmanship you can trust.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}