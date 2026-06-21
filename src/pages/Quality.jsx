import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, ClipboardList, Scale, ArrowRight } from 'lucide-react';

const certifications = [
  { name: 'CARB Phase 2', category: 'Emissions', desc: 'California Air Resources Board formaldehyde emission standard for composite wood products. Required for all cabinet, vanity, and engineered wood products sold in Canada and the U.S.' },
  { name: 'NSF/ANSI 51', category: 'Food Safety', desc: 'Material safety standard for food equipment and surfaces. Required for kitchen countertops and surfaces in commercial and healthcare applications.' },
  { name: 'NSF/ANSI 61', category: 'Water Safety', desc: 'Health effects standard for materials in contact with drinking water. Required for all sink, faucet, and water-contact surface products.' },
  { name: 'CSA', category: 'Safety — CA', desc: 'Canadian Standards Association product safety certification. Required for all plumbing and electrical products sold in Canada.' },
  { name: 'UL Listed', category: 'Electrical', desc: 'Underwriters Laboratories safety mark for electrical products. Required for all appliance and electrical accessory items.' },
  { name: 'ISO 9001', category: 'Quality Mgmt', desc: 'Manufacturing quality management system certification. Held by all primary factory partners in the Kopperstone supplier network.' },
];

export default function Quality() {
  return (
    <div className="bg-cream">
      <section className="bg-navy py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="gold-overline mb-5">QUALITY &amp; COMPLIANCE</div>
          <h1 className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
            Rigorous Standards.<br /><em className="text-gold italic">Documented Results.</em>
          </h1>
          <p className="mt-5 text-cream/45 text-base max-w-xl leading-relaxed font-sans">
            Every Kopperstone material is tested, inspected, and documented from the factory floor to the job site. Full compliance for U.S. and Canadian commercial and multi-family applications.
          </p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 space-y-24">
        {/* Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-gold">01 — Certifications</span>
          </div>
          <h2 className="font-serif text-3xl text-navy mb-12">Product Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/8">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-cream p-8 group hover:bg-navy transition-colors duration-300">
                <ShieldCheck className="w-5 h-5 text-gold mb-4" />
                <p className="text-[10px] font-sans tracking-widest uppercase text-gold/60 group-hover:text-gold/50 mb-2">{cert.category}</p>
                <h3 className="font-serif text-xl text-navy group-hover:text-cream mb-3">{cert.name}</h3>
                <p className="text-sm text-warm-grey group-hover:text-cream/45 leading-relaxed font-sans">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QC Process */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-gold">02 — QC Process</span>
          </div>
          <h2 className="font-serif text-3xl text-navy mb-4">Three-Stage Inspection Protocol</h2>
          <p className="text-warm-grey text-base mb-14 max-w-xl font-sans">Applied to every production order. Third-party inspection available through SGS, Bureau Veritas, and Intertek.</p>
          <div className="space-y-0">
            {[
              { stage: '01', title: 'Pre-Production Sample Approval', desc: 'Material samples, finish samples, and engineering drawings reviewed and approved before production authorization. Written approval required before production start.' },
              { stage: '02', title: 'In-Line Inspection at 30%', desc: 'On-site inspection when production reaches 30% completion. Dimensional tolerance, finish quality, hardware function, and packaging verified. Non-conformities reported within 24 hours.' },
              { stage: '03', title: 'Final Random Inspection (AQL 2.5)', desc: 'Pre-shipment inspection per ANSI/ASQ Z1.4 at Acceptable Quality Level 2.5. Container loading supervised. Seal number recorded. Report provided before payment release.' },
            ].map((stage, i) => (
              <motion.div key={stage.stage} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border py-12">
                <div className="lg:col-span-2">
                  <span className="font-serif text-6xl text-gold/15">{stage.stage}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-xl text-navy">{stage.title}</h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-warm-grey text-sm leading-relaxed font-sans">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Warranty */}
        <section className="bg-navy p-12 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <FileCheck className="w-6 h-6 text-gold mb-6" />
              <h2 className="font-serif text-3xl text-cream mb-4">Warranty Policy</h2>
              <p className="text-cream/55 text-sm leading-relaxed font-sans">All Kopperstone-supplied materials carry a minimum 5-year limited warranty against manufacturing defects. Cabinetry structural components are warranted for 10 years.</p>
              <p className="text-cream/55 text-sm leading-relaxed mt-4 font-sans">Claims are processed through our North American operations — no overseas correspondence required.</p>
            </div>
            <div className="space-y-5">
              {[
                ['Surfaces (Solid Surface, Quartz)', '5-year limited — commercial / 10-year — residential'],
                ['Cabinetry Structural Components', '10-year limited warranty'],
                ['Hardware (Hinges, Slides)', 'Lifetime — Blum components / 5-year — others'],
                ['Plumbing Fixtures', 'Manufacturer 5-year — Kopperstone handles claims'],
              ].map(([item, term]) => (
                <div key={item} className="border-b border-cream/10 pb-4">
                  <p className="text-xs text-cream/40 font-sans uppercase tracking-wide">{item}</p>
                  <p className="text-sm text-cream mt-1 font-sans">{term}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade compliance */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-gold">04 — Trade Compliance</span>
          </div>
          <h2 className="font-serif text-3xl text-navy mb-8">Trade Compliance Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-warm-grey text-sm leading-relaxed font-sans">
              <p>Kopperstone provides full documentation packages for every shipment entering the U.S. or Canada: commercial invoices, packing lists, certificates of origin, material safety data sheets, and applicable test reports.</p>
              <p>Country-of-origin declarations are accurate and verifiable. AD/CVD exposure is assessed for each product category and disclosed to clients prior to order placement.</p>
            </div>
            <div className="space-y-3">
              {['Commercial invoice with accurate declared value', 'Certificate of origin (factory-issued and notarized)', 'Material safety data sheets (MSDS/SDS)', 'Test reports for applicable certifications', 'ISF (Importer Security Filing) for U.S. entries', 'CBSA advance commercial information for Canada', 'AD/CVD disclosure per product category'].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-navy font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="bg-navy py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-cream">Request Compliance Documentation</h3>
            <p className="text-cream/45 text-sm mt-2">Certificates, test reports, and compliance letters available on request.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors whitespace-nowrap">
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}