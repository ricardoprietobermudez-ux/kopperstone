import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, FileText, Box, Lightbulb, BookOpen, ArrowRight, Lock } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';

const lightingDiagrams = [
  { code: 'WL-01', label: 'Under-Cabinet LED Strip', desc: 'Continuous LED strip under upper cabinet, task lighting application' },
  { code: 'WL-02', label: 'Wall Cabinet Interior', desc: 'Interior cabinet illumination, touch or motion sensor' },
  { code: 'WL-03', label: 'Base Cabinet Interior', desc: 'Base cabinet interior LED, hinged door sensor' },
  { code: 'WL-04', label: 'Upper Shelf Display', desc: 'Open shelf display lighting, upper cabinet' },
  { code: 'WL-05', label: 'Toe-Kick LED Strip', desc: 'Continuous LED strip along toe-kick, ambient level' },
  { code: 'WL-06', label: 'Valance Under-Cabinet', desc: 'Concealed valance application, integrated transformer' },
  { code: 'BL-01', label: 'Base Drawer Accent', desc: 'Interior drawer LED, motion activated' },
  { code: 'BL-02', label: 'Corner Cabinet', desc: 'Lazy Susan or blind corner LED application' },
  { code: 'BL-03', label: 'Appliance Garage', desc: 'Appliance garage interior, hinged sensor' },
  { code: 'TL-01', label: 'Tall Pantry Interior', desc: 'Full-height pantry, shelf-mounted strips' },
  { code: 'TL-02', label: 'Pantry Door-Activated', desc: 'Door-activated full pantry illumination' },
];

const cabinetDrawings = [
  { name: 'Base Cabinet — Standard Run',     type: 'PDF / CAD', size: '2.4 MB', locked: false },
  { name: 'Upper Cabinet — Wall Mount',      type: 'PDF / CAD', size: '1.8 MB', locked: false },
  { name: 'Tall Pantry — Full Height',       type: 'PDF / CAD', size: '3.1 MB', locked: true  },
  { name: 'Island Configuration — Double',  type: 'PDF / CAD', size: '4.2 MB', locked: true  },
  { name: 'Corner Cabinet — Lazy Susan',     type: 'PDF / CAD', size: '2.0 MB', locked: true  },
  { name: 'Kitchen Layout Plan — 3 Types',  type: 'PDF',       size: '5.6 MB', locked: true  },
];

const specs = [
  { name: 'Solid Surface Sheets — Full Spec',  type: 'PDF', size: '1.2 MB' },
  { name: 'Quartz Countertops — Spec Sheet',   type: 'PDF', size: '0.9 MB' },
  { name: 'CARB Phase 2 Compliance Letter',    type: 'PDF', size: '0.4 MB' },
  { name: 'NSF/ANSI 51 Certificate',           type: 'PDF', size: '0.3 MB' },
  { name: 'NSF/ANSI 61 Certificate',           type: 'PDF', size: '0.3 MB' },
  { name: 'ISO 9001 Certification',            type: 'PDF', size: '0.5 MB' },
];

export default function Engineering() {
  const [gateEmail, setGateEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (gateEmail) {
      await base44.entities.Lead.create({ company_name: 'Resource Download', contact_name: 'Download Request', email: gateEmail });
      setUnlocked(true);
    }
  };

  return (
    <div className="bg-limestone pt-24 pb-24">
      {/* Hero */}
      <section className="bg-obsidian py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-[10px] font-sans tracking-widest uppercase text-copper mb-4">Technical Resources</p>
          <h1 className="font-serif text-4xl md:text-6xl text-limestone tracking-tight max-w-2xl">Engineering & Technical Library</h1>
          <p className="mt-5 text-limestone/45 text-base max-w-xl leading-relaxed">
            Downloadable drawings, specification sheets, lighting diagrams, and BIM files for spec writers, architects, and procurement managers.
          </p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 space-y-20">
        {/* Cabinet elevation drawings */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-4 h-4 text-copper" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-copper">01 — Drawings</span>
          </div>
          <h2 className="font-serif text-3xl text-obsidian mb-10">Cabinet Elevation Drawings & Layout Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sandstone/30">
            {cabinetDrawings.map(d => (
              <div key={d.name} className="bg-limestone p-6 group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm text-obsidian font-medium">{d.name}</p>
                    <p className="text-xs text-stone mt-1">{d.type} · {d.size}</p>
                  </div>
                  {d.locked && !unlocked ? (
                    <Lock className="w-4 h-4 text-stone flex-shrink-0 mt-0.5" />
                  ) : (
                    <button className="flex-shrink-0 border border-obsidian/20 p-1.5 hover:border-copper hover:text-copper transition-colors">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lighting diagrams */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-4 h-4 text-copper" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-copper">02 — Lighting</span>
          </div>
          <h2 className="font-serif text-3xl text-obsidian mb-10">Lighting Solution Diagrams</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-sandstone/30">
            {lightingDiagrams.map(ld => (
              <motion.div
                key={ld.code}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-obsidian group p-5 border border-limestone/8 hover:border-copper/30 transition-colors cursor-pointer"
              >
                <div className="w-full aspect-square bg-limestone/5 group-hover:bg-copper/5 mb-4 transition-colors flex items-center justify-center">
                  <span className="font-sans text-xs text-copper/40 group-hover:text-copper/70 tracking-widest">{ld.code}</span>
                </div>
                <p className="text-xs font-sans font-semibold text-limestone/80 group-hover:text-limestone">{ld.label}</p>
                <p className="text-[11px] text-limestone/30 group-hover:text-limestone/50 mt-1 leading-tight">{ld.desc}</p>
                <div className="mt-3 text-[10px] text-copper opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Download <Download className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Spec sheets */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-4 h-4 text-copper" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-copper">03 — Spec Sheets</span>
          </div>
          <h2 className="font-serif text-3xl text-obsidian mb-10">Material Specification Sheets & Compliance Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sandstone/30">
            {specs.map(s => (
              <div key={s.name} className="bg-limestone p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-sm text-obsidian">{s.name}</p>
                  <p className="text-xs text-stone mt-0.5">{s.type} · {s.size}</p>
                </div>
                <button className="border border-obsidian/20 p-1.5 hover:border-copper hover:text-copper transition-colors flex-shrink-0">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* BIM + gate */}
        <section className="bg-obsidian p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Box className="w-6 h-6 text-copper mb-4" />
              <h2 className="font-serif text-3xl text-limestone mb-4">3D Renders & BIM File Requests</h2>
              <p className="text-limestone/50 text-sm leading-relaxed">
                BIM files (Revit .rfa) and high-resolution 3D product renders are available for specification-stage projects. Submit your email to access the download library or request files for a specific collection.
              </p>
            </div>
            <div>
              {!unlocked ? (
                <form onSubmit={handleUnlock} className="space-y-3">
                  <p className="text-xs text-limestone/40 font-sans">Enter your work email to access gated resources.</p>
                  <Input
                    type="email"
                    placeholder="your@company.com"
                    value={gateEmail}
                    onChange={e => setGateEmail(e.target.value)}
                    required
                    className="bg-limestone/10 border-limestone/20 text-limestone placeholder:text-limestone/30"
                  />
                  <button type="submit" className="w-full bg-copper text-limestone py-3 text-xs font-sans uppercase tracking-wide hover:bg-copper/90 transition-colors">
                    Unlock Library Access
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-limestone/70 text-sm mb-4">Library access granted. Downloads are now available above.</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-copper text-xs font-sans tracking-wide">
                    Request BIM files for a specific program <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}