import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const certs = [
  { name: 'CARB Phase 2', cat: 'Emissions' },
  { name: 'NSF/ANSI 51', cat: 'Food Safety' },
  { name: 'NSF/ANSI 61', cat: 'Water Safety' },
  { name: 'CSA', cat: 'Canada' },
  { name: 'UL Listed', cat: 'Electrical' },
  { name: 'ISO 9001', cat: 'Quality Mgmt' },
];

export default function ComplianceStrip() {
  return (
    <section className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-center text-[9px] font-sans tracking-widest uppercase text-warm-grey mb-10">
          Certifications & Compliance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-navy/5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-cream p-6 text-center group hover:bg-navy transition-colors duration-300"
            >
              <ShieldCheck className="w-5 h-5 text-gold mx-auto mb-3" />
              <p className="text-[9px] font-sans tracking-widest uppercase text-warm-grey group-hover:text-cream/40 mb-1">{cert.cat}</p>
              <p className="font-sans text-sm font-semibold text-navy group-hover:text-cream">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}