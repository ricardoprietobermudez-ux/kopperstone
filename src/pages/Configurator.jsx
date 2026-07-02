import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Copy, Mail, ArrowRight, Check } from 'lucide-react';
import KitchenCanvas from '@/components/configurator/KitchenCanvas';
import BathroomCanvas from '@/components/configurator/BathroomCanvas';
import EmailSpecModal from '@/components/configurator/EmailSpecModal';
import QuoteModal from '@/components/configurator/QuoteModal';

const KITCHEN_STEPS = ['Layout', 'Cabinets', 'Countertops', 'Hardware', 'Fixtures'];
const BATHROOM_STEPS = ['Layout', 'Vanity', 'Counter & Sink', 'Shower', 'Hardware'];

const KITCHEN_DEFAULTS = {
  layout: 'galley',
  cabinet: 'acrylic-white',
  countertop: 'calacatta',
  hardware: 'brushed-gold',
  sink: 'drop-in-single',
  faucet: 'pull-down-spring',
};

const BATHROOM_DEFAULTS = {
  layout: 'single-vanity',
  vanity: 'acrylic-white',
  counter: 'integrated-solid',
  shower: 'walkin-glass',
  hardware: 'brushed-gold',
};

function generateCode(mode, config) {
  const keys = Object.values(config).map(v => v.slice(0, 2).toUpperCase()).join('');
  return `KS-${mode === 'kitchen' ? 'K' : 'B'}-${keys}`;
}

export default function Configurator() {
  const [mode, setMode] = useState('kitchen');
  const [step, setStep] = useState(0);
  const [kitchenConfig, setKitchenConfig] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ks-kitchen-config')) || KITCHEN_DEFAULTS; }
    catch { return KITCHEN_DEFAULTS; }
  });
  const [bathroomConfig, setBathroomConfig] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ks-bathroom-config')) || BATHROOM_DEFAULTS; }
    catch { return BATHROOM_DEFAULTS; }
  });
  const [savedCode, setSavedCode] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const config = mode === 'kitchen' ? kitchenConfig : bathroomConfig;
  const setConfig = mode === 'kitchen' ? setKitchenConfig : setBathroomConfig;
  const steps = mode === 'kitchen' ? KITCHEN_STEPS : BATHROOM_STEPS;
  const totalSteps = steps.length;
  const isComplete = step === totalSteps - 1;

  useEffect(() => {
    localStorage.setItem('ks-kitchen-config', JSON.stringify(kitchenConfig));
  }, [kitchenConfig]);

  useEffect(() => {
    localStorage.setItem('ks-bathroom-config', JSON.stringify(bathroomConfig));
  }, [bathroomConfig]);

  useEffect(() => { setStep(0); }, [mode]);

  const handleSave = () => {
    const code = generateCode(mode, config);
    setSavedCode(code);
  };

  const handleCopy = () => {
    if (savedCode) { navigator.clipboard.writeText(savedCode); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  return (
    <div className="min-h-screen bg-navy flex flex-col pt-16">
      {/* Header bar */}
      <div className="bg-navy border-b border-cream/10 px-6 lg:px-10 py-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="gold-overline mb-2">DESIGN CONFIGURATOR</div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl text-cream">Design your space, your way.</h1>
              <p className="text-cream/40 text-xs font-sans mt-1 max-w-xl">Choose your layout, finishes, and fixtures — then save your design or book a free consultation with our team.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setMode('kitchen')}
                className={`px-5 py-2 text-[11px] font-sans tracking-wide uppercase transition-colors border ${mode === 'kitchen' ? 'bg-gold text-navy border-gold' : 'border-cream/20 text-cream/60 hover:border-cream/40 hover:text-cream'}`}
              >
                Kitchen
              </button>
              <button
                onClick={() => setMode('bathroom')}
                className={`px-5 py-2 text-[11px] font-sans tracking-wide uppercase transition-colors border ${mode === 'bathroom' ? 'bg-gold text-navy border-gold' : 'border-cream/20 text-cream/60 hover:border-cream/40 hover:text-cream'}`}
              >
                Bathroom
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-navy-light border-b border-cream/8 px-6 lg:px-10 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center gap-6">
          {steps.map((s, i) => (
            <button key={s} onClick={() => setStep(i)} className="flex items-center gap-2 group">
              <div className={`w-5 h-5 flex items-center justify-center text-[9px] font-sans border transition-colors ${i === step ? 'bg-gold text-navy border-gold' : i < step ? 'bg-gold/20 text-gold border-gold/40' : 'border-cream/20 text-cream/30'}`}>
                {i < step ? <Check className="w-3 h-3" /> : i + 1}
              </div>
              <span className={`text-[10px] font-sans uppercase tracking-wide hidden sm:block transition-colors ${i === step ? 'text-gold' : i < step ? 'text-gold/60' : 'text-cream/30 group-hover:text-cream/50'}`}>{s}</span>
              {i < steps.length - 1 && <ChevronRight className="w-3 h-3 text-cream/20 hidden sm:block" />}
            </button>
          ))}
          <span className="ml-auto text-[10px] font-sans text-cream/30">Step {step + 1} of {totalSteps} — {steps[step]}</span>
        </div>
      </div>

      {/* Main split */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left panel — controls */}
        <div className="w-full lg:w-[40%] bg-navy-light border-r border-cream/10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${mode}-${step}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.25 }}
              className="p-8"
            >
              {mode === 'kitchen' && (
                <KitchenStepPanel step={step} config={kitchenConfig} setConfig={setKitchenConfig} />
              )}
              {mode === 'bathroom' && (
                <BathroomStepPanel step={step} config={bathroomConfig} setConfig={setBathroomConfig} />
              )}

              {/* Navigation */}
              <div className="mt-10 flex gap-3">
                {step > 0 && (
                  <button onClick={() => setStep(s => s - 1)} className="flex-1 border border-cream/20 text-cream/60 text-xs font-sans uppercase tracking-wide py-3 hover:border-cream/40 hover:text-cream transition-colors">
                    ← Back
                  </button>
                )}
                {step < totalSteps - 1 ? (
                  <button onClick={() => setStep(s => s + 1)} className="flex-1 bg-gold text-navy text-xs font-sans uppercase tracking-wide py-3 hover:bg-gold/90 transition-colors">
                    Next: {steps[step + 1]} →
                  </button>
                ) : (
                  <div className="flex-1 p-4 border border-gold/40 bg-gold/5">
                    <p className="text-gold text-xs font-sans text-center">✓ Your design is complete. Save it or book a consultation below.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right panel — 2D preview */}
        <div className="w-full lg:w-[60%] bg-[#F5EFE6] flex flex-col">
          <div className="flex-1 relative overflow-hidden p-6">
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div>
                <p className="text-[8px] font-sans tracking-widest uppercase text-warm-grey">KOPPERSTONE · {mode.toUpperCase()} DESIGN PREVIEW</p>
                <p className="text-[8px] font-sans text-warm-grey/60">PLAN VIEW · FOR REFERENCE ONLY</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-sans text-warm-grey/60">Live Preview</p>
              </div>
            </div>

            <div className="mt-10 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${mode}-${JSON.stringify(config)}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {mode === 'kitchen' ? (
                    <KitchenCanvas config={kitchenConfig} />
                  ) : (
                    <BathroomCanvas config={bathroomConfig} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Legend */}
          <ConfigLegend mode={mode} config={config} />
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="bg-navy border-t border-cream/10 px-6 lg:px-10 py-4">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {savedCode ? (
              <div className="flex items-center gap-2 border border-gold/40 px-4 py-2">
                <span className="text-gold font-sans text-xs tracking-widest">{savedCode}</span>
                <button onClick={handleCopy} className="text-cream/40 hover:text-gold transition-colors">
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ) : (
              <button onClick={handleSave} className="border border-gold/50 text-gold text-[11px] font-sans uppercase tracking-wide px-5 py-2.5 hover:border-gold hover:bg-gold/5 transition-colors">
                Save My Design
              </button>
            )}
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowEmailModal(true)} className="border border-gold/50 text-gold text-[11px] font-sans uppercase tracking-wide px-5 py-2.5 hover:border-gold hover:bg-gold/5 transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" /> Email My Design
            </button>
            <button onClick={() => setShowQuoteModal(true)} className="bg-gold text-navy text-[11px] font-sans uppercase tracking-wide px-5 py-2.5 hover:bg-gold/90 transition-colors">
              Book a Consultation <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showEmailModal && <EmailSpecModal mode={mode} config={config} onClose={() => setShowEmailModal(false)} />}
        {showQuoteModal && <QuoteModal mode={mode} config={config} onClose={() => setShowQuoteModal(false)} />}
      </AnimatePresence>
    </div>
  );
}

// ─── Kitchen Step Panel ───────────────────────────────────────────────────────
function KitchenStepPanel({ step, config, setConfig }) {
  const layouts = [
    { id: 'galley',   label: 'Galley',    desc: 'Best for narrow or compact kitchens' },
    { id: 'l-shaped', label: 'L-Shaped',  desc: 'Great for corner spaces and open plans' },
    { id: 'u-shaped', label: 'U-Shaped',  desc: 'Maximum storage and counter space' },
    { id: 'island',   label: 'Island',    desc: 'Ideal for open-plan living areas' },
  ];
  const cabinets = [
    { id: 'acrylic-white',   label: 'Acrylic White',   hint: 'High-gloss, easy to clean',            color: '#F5F5F5', border: '#ddd' },
    { id: 'acrylic-black',   label: 'Acrylic Black',   hint: 'Dramatic finish, fingerprints visible', color: '#1A1A1A', border: '#333' },
    { id: 'lacquer-navy',    label: 'Lacquer Navy',    hint: 'Deep tone, fully custom color',         color: '#0E1A2B', border: '#1a2e45' },
    { id: 'lacquer-forest',  label: 'Lacquer Forest',  hint: 'Rich green, bespoke feel',              color: '#2D4A2D', border: '#3a5e3a' },
    { id: 'laminate-walnut', label: 'Laminate Walnut', hint: 'Durable wood look, scratch-resistant',  color: '#7B4F2E', border: '#8B5E3C' },
    { id: 'veneer-oak',      label: 'Veneer Oak',      hint: 'Real wood grain, premium natural feel', color: '#C4A882', border: '#B8976E' },
  ];
  const countertops = [
    { id: 'calacatta',   label: 'Calacatta Quartz',  hint: 'White marble look, low maintenance',     color: '#F8F6F3', veins: '#C0B8B0' },
    { id: 'statuario',   label: 'Statuario Quartz',  hint: 'Bold veining, makes a statement',        color: '#F4F2EF', veins: '#7A7068' },
    { id: 'carrara',     label: 'Carrara Quartz',    hint: 'Soft grey veins, classic and timeless',  color: '#F7F6F4', veins: '#B8B4AE' },
    { id: 'pure-white',  label: 'Pure White Surface', hint: 'Seamless solid surface, no joins',      color: '#FFFFFF', veins: '#E8E8E8' },
    { id: 'charcoal-ss', label: 'Charcoal Surface',  hint: 'Dark and modern, hides everyday wear',   color: '#3A3A3A', veins: '#4A4A4A' },
    { id: 'terrazzo',    label: 'Terrazzo Surface',  hint: 'Speckled texture, one-of-a-kind look',   color: '#D4C8B8', veins: '#A89880' },
  ];
  const hardware = [
    { id: 'brushed-gold',  label: 'Brushed Gold',  color: '#C9A77C' },
    { id: 'matte-black',   label: 'Matte Black',   color: '#1A1A1A' },
    { id: 'gunmetal',      label: 'Gunmetal',      color: '#4A4E54' },
    { id: 'brushed-steel', label: 'Brushed Steel', color: '#B8BEC6' },
  ];
  const sinks = [
    { id: 'drop-in-single', label: 'Drop-in Single Bowl' },
    { id: 'drop-in-double', label: 'Drop-in Double Bowl' },
    { id: 'farmhouse',      label: 'Farmhouse Single' },
    { id: 'undermount',     label: 'Undermount' },
    { id: 'stone-composite', label: 'Stone Composite' },
  ];
  const faucets = [
    { id: 'pull-down-spring', label: 'Pull-down Spring' },
    { id: 'pull-down-modern', label: 'Pull-down Modern' },
    { id: 'deck-mount',       label: 'Deck Mount Mixer' },
    { id: 'wall-mount',       label: 'Wall Mount' },
  ];

  if (step === 0) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Kitchen Layout</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose the layout that fits your kitchen best.</p>
      <div className="grid grid-cols-2 gap-3">
        {layouts.map(l => (
          <button key={l.id} onClick={() => setConfig(c => ({ ...c, layout: l.id }))}
            className={`p-4 border transition-all text-left ${config.layout === l.id ? 'border-gold bg-gold/5' : 'border-cream/15 hover:border-cream/30'}`}>
            <LayoutIcon id={l.id} active={config.layout === l.id} />
            <p className={`text-sm font-sans mt-3 ${config.layout === l.id ? 'text-gold' : 'text-cream/70'}`}>{l.label}</p>
            <p className="text-[10px] font-sans text-cream/30 mt-0.5">{l.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 1) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Cabinet Finish</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose the finish for your cabinet doors.</p>
      <div className="grid grid-cols-2 gap-3">
        {cabinets.map(c => (
          <button key={c.id} onClick={() => setConfig(cfg => ({ ...cfg, cabinet: c.id }))}
            className={`border transition-all overflow-hidden ${config.cabinet === c.id ? 'border-gold' : 'border-cream/15 hover:border-cream/30'}`}>
            <div className="h-20 w-full" style={{ backgroundColor: c.color, border: `1px solid ${c.border}` }} />
            <p className={`text-[11px] font-sans px-2 pt-2 text-left ${config.cabinet === c.id ? 'text-gold bg-gold/5' : 'text-cream/60'}`}>{c.label}</p>
            <p className={`text-[9px] font-sans px-2 pb-2 text-left ${config.cabinet === c.id ? 'text-gold/50 bg-gold/5' : 'text-cream/25'}`}>{c.hint}</p>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 2) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Countertop</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose your countertop material and finish.</p>
      <div className="grid grid-cols-2 gap-3">
        {countertops.map(c => (
          <button key={c.id} onClick={() => setConfig(cfg => ({ ...cfg, countertop: c.id }))}
            className={`border transition-all overflow-hidden ${config.countertop === c.id ? 'border-gold' : 'border-cream/15 hover:border-cream/30'}`}>
            <div className="h-20 w-full relative overflow-hidden" style={{ backgroundColor: c.color }}>
              <VeinPattern color={c.veins} />
            </div>
            <p className={`text-[11px] font-sans px-2 pt-2 text-left ${config.countertop === c.id ? 'text-gold bg-gold/5' : 'text-cream/60'}`}>{c.label}</p>
            <p className={`text-[9px] font-sans px-2 pb-2 text-left ${config.countertop === c.id ? 'text-gold/50 bg-gold/5' : 'text-cream/25'}`}>{c.hint}</p>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 3) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Hardware Finish</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose the metal finish for handles, taps, and fittings.</p>
      <div className="grid grid-cols-2 gap-4">
        {hardware.map(h => (
          <button key={h.id} onClick={() => setConfig(c => ({ ...c, hardware: h.id }))}
            className={`flex items-center gap-3 p-4 border transition-all ${config.hardware === h.id ? 'border-gold bg-gold/5' : 'border-cream/15 hover:border-cream/30'}`}>
            <div className="w-10 h-10 rounded-full flex-shrink-0 border-2" style={{ backgroundColor: h.color, borderColor: config.hardware === h.id ? '#C9A77C' : 'transparent' }} />
            <span className={`text-sm font-sans ${config.hardware === h.id ? 'text-gold' : 'text-cream/70'}`}>{h.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 4) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Sink & Faucet</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose your sink type and faucet style.</p>
      <div className="mb-6">
        <p className="text-[9px] font-sans uppercase tracking-widest text-gold mb-3">Sink Type</p>
        <div className="space-y-2">
          {sinks.map(s => (
            <button key={s.id} onClick={() => setConfig(c => ({ ...c, sink: s.id }))}
              className={`w-full text-left px-4 py-3 border text-sm font-sans transition-all ${config.sink === s.id ? 'border-gold text-gold bg-gold/5' : 'border-cream/15 text-cream/60 hover:border-cream/30'}`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[9px] font-sans uppercase tracking-widest text-gold mb-3">Faucet Style</p>
        <div className="space-y-2">
          {faucets.map(f => (
            <button key={f.id} onClick={() => setConfig(c => ({ ...c, faucet: f.id }))}
              className={`w-full text-left px-4 py-3 border text-sm font-sans transition-all ${config.faucet === f.id ? 'border-gold text-gold bg-gold/5' : 'border-cream/15 text-cream/60 hover:border-cream/30'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
  return null;
}

// ─── Bathroom Step Panel ──────────────────────────────────────────────────────
function BathroomStepPanel({ step, config, setConfig }) {
  const layouts = [
    { id: 'single-vanity', label: 'Single Vanity', desc: 'One sink — ideal for a personal bathroom' },
    { id: 'double-vanity', label: 'Double Vanity', desc: 'Two sinks — great for shared bathrooms' },
    { id: 'powder-room',   label: 'Powder Room',   desc: 'Toilet and sink only, no shower' },
    { id: 'master-suite',  label: 'Master Suite',  desc: 'Full bathroom with shower and separate tub' },
  ];
  const vanities = [
    { id: 'acrylic-white',   label: 'Acrylic White',   hint: 'High-gloss, easy to clean',            color: '#F5F5F5' },
    { id: 'acrylic-black',   label: 'Acrylic Black',   hint: 'Dramatic finish, fingerprints visible', color: '#1A1A1A' },
    { id: 'lacquer-navy',    label: 'Lacquer Navy',    hint: 'Deep tone, fully custom color',         color: '#0E1A2B' },
    { id: 'lacquer-forest',  label: 'Lacquer Forest',  hint: 'Rich green, bespoke feel',              color: '#2D4A2D' },
    { id: 'laminate-walnut', label: 'Laminate Walnut', hint: 'Durable wood look, scratch-resistant',  color: '#7B4F2E' },
    { id: 'veneer-oak',      label: 'Veneer Oak',      hint: 'Real wood grain, premium natural feel', color: '#C4A882' },
  ];
  const counters = [
    { id: 'integrated-solid',  label: 'Integrated Solid Surface',      hint: 'Seamless look, easiest to clean' },
    { id: 'quartz-vessel',     label: 'Quartz with Vessel Sink',       hint: 'Statement sink that sits on top' },
    { id: 'cultured-marble',   label: 'Cultured Marble + Undermount',  hint: 'Timeless look, sink sits below counter' },
    { id: 'stone-wallmount',   label: 'Stone with Wall-Mount Basin',   hint: 'Floating design, easy floor cleaning' },
  ];
  const showers = [
    { id: 'walkin-glass',  label: 'Walk-in with Glass Panel',         hint: 'Open and spacious, no door needed' },
    { id: 'tub-shower',    label: 'Tub-Shower Combo',                 hint: 'Space-saving and versatile' },
    { id: 'standalone',    label: 'Standalone Tub + Separate Shower', hint: 'Luxury setup, needs more space' },
    { id: 'wet-room',      label: 'Wet Room',                         hint: 'Fully waterproofed, sleek and minimal' },
  ];
  const hardware = [
    { id: 'brushed-gold',  label: 'Brushed Gold',  color: '#C9A77C' },
    { id: 'matte-black',   label: 'Matte Black',   color: '#1A1A1A' },
    { id: 'gunmetal',      label: 'Gunmetal',      color: '#4A4E54' },
    { id: 'brushed-steel', label: 'Brushed Steel', color: '#B8BEC6' },
  ];

  if (step === 0) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Bathroom Layout</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose the layout that matches your bathroom space.</p>
      <div className="grid grid-cols-2 gap-3">
        {layouts.map(l => (
          <button key={l.id} onClick={() => setConfig(c => ({ ...c, layout: l.id }))}
            className={`p-4 border transition-all text-left ${config.layout === l.id ? 'border-gold bg-gold/5' : 'border-cream/15 hover:border-cream/30'}`}>
            <BathroomLayoutIcon id={l.id} active={config.layout === l.id} />
            <p className={`text-sm font-sans mt-3 ${config.layout === l.id ? 'text-gold' : 'text-cream/70'}`}>{l.label}</p>
            <p className="text-[10px] font-sans text-cream/30 mt-0.5">{l.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 1) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Vanity Finish</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose the finish for your vanity cabinet.</p>
      <div className="grid grid-cols-2 gap-3">
        {vanities.map(v => (
          <button key={v.id} onClick={() => setConfig(c => ({ ...c, vanity: v.id }))}
            className={`border transition-all overflow-hidden ${config.vanity === v.id ? 'border-gold' : 'border-cream/15 hover:border-cream/30'}`}>
            <div className="h-20 w-full" style={{ backgroundColor: v.color }} />
            <p className={`text-[11px] font-sans px-2 pt-2 text-left ${config.vanity === v.id ? 'text-gold bg-gold/5' : 'text-cream/60'}`}>{v.label}</p>
            <p className={`text-[9px] font-sans px-2 pb-2 text-left ${config.vanity === v.id ? 'text-gold/50 bg-gold/5' : 'text-cream/25'}`}>{v.hint}</p>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 2) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Counter & Sink</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose your countertop and sink combination.</p>
      <div className="space-y-2">
        {counters.map(c => (
          <button key={c.id} onClick={() => setConfig(cfg => ({ ...cfg, counter: c.id }))}
            className={`w-full text-left px-4 py-3 border transition-all ${config.counter === c.id ? 'border-gold bg-gold/5' : 'border-cream/15 hover:border-cream/30'}`}>
            <p className={`text-sm font-sans ${config.counter === c.id ? 'text-gold' : 'text-cream/60'}`}>{c.label}</p>
            <p className={`text-[10px] font-sans mt-0.5 ${config.counter === c.id ? 'text-gold/50' : 'text-cream/25'}`}>{c.hint}</p>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 3) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Shower & Bath</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose your preferred shower and bathing setup.</p>
      <div className="space-y-2">
        {showers.map(s => (
          <button key={s.id} onClick={() => setConfig(c => ({ ...c, shower: s.id }))}
            className={`w-full text-left px-4 py-3 border transition-all ${config.shower === s.id ? 'border-gold bg-gold/5' : 'border-cream/15 hover:border-cream/30'}`}>
            <p className={`text-sm font-sans ${config.shower === s.id ? 'text-gold' : 'text-cream/60'}`}>{s.label}</p>
            <p className={`text-[10px] font-sans mt-0.5 ${config.shower === s.id ? 'text-gold/50' : 'text-cream/25'}`}>{s.hint}</p>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 4) return (
    <div>
      <h2 className="font-serif text-2xl text-cream mb-2">Hardware Finish</h2>
      <p className="text-cream/40 text-xs font-sans mb-6">Choose the metal finish for taps, towel bars, and fittings.</p>
      <div className="grid grid-cols-2 gap-4">
        {hardware.map(h => (
          <button key={h.id} onClick={() => setConfig(c => ({ ...c, hardware: h.id }))}
            className={`flex items-center gap-3 p-4 border transition-all ${config.hardware === h.id ? 'border-gold bg-gold/5' : 'border-cream/15 hover:border-cream/30'}`}>
            <div className="w-10 h-10 rounded-full flex-shrink-0 border-2" style={{ backgroundColor: h.color, borderColor: config.hardware === h.id ? '#C9A77C' : 'transparent' }} />
            <span className={`text-sm font-sans ${config.hardware === h.id ? 'text-gold' : 'text-cream/70'}`}>{h.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
  return null;
}

// ─── Config Legend ────────────────────────────────────────────────────────────
function ConfigLegend({ mode, config }) {
  const labels = mode === 'kitchen'
    ? { layout: 'Layout', cabinet: 'Cabinet', countertop: 'Countertop', hardware: 'Hardware', sink: 'Sink', faucet: 'Faucet' }
    : { layout: 'Layout', vanity: 'Vanity', counter: 'Counter', shower: 'Shower', hardware: 'Hardware' };

  return (
    <div className="border-t border-navy/10 bg-white/60 px-6 py-3">
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        {Object.entries(labels).map(([k, label]) => (
          <div key={k} className="flex items-center gap-2">
            <span className="text-[9px] font-sans uppercase tracking-widest text-warm-grey">{label}:</span>
            <span className="text-[10px] font-sans text-navy/70">{config[k]?.replace(/-/g, ' ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Layout Icons ─────────────────────────────────────────────────────────────
function LayoutIcon({ id, active }) {
  const c = active ? '#C9A77C' : '#8C8680';
  const s = { stroke: c, strokeWidth: 1.5, fill: 'none' };
  return (
    <svg viewBox="0 0 60 40" className="w-full h-14">
      {id === 'galley' && <>
        <rect x="4" y="8" width="52" height="8" {...s} />
        <rect x="4" y="24" width="52" height="8" {...s} />
      </>}
      {id === 'l-shaped' && <>
        <rect x="4" y="4" width="8" height="32" {...s} />
        <rect x="4" y="28" width="52" height="8" {...s} />
      </>}
      {id === 'u-shaped' && <>
        <rect x="4" y="4" width="8" height="32" {...s} />
        <rect x="48" y="4" width="8" height="32" {...s} />
        <rect x="4" y="28" width="52" height="8" {...s} />
      </>}
      {id === 'island' && <>
        <rect x="4" y="4" width="52" height="7" {...s} />
        <rect x="4" y="29" width="52" height="7" {...s} />
        <rect x="18" y="15" width="24" height="10" {...s} />
      </>}
    </svg>
  );
}

function BathroomLayoutIcon({ id, active }) {
  const c = active ? '#C9A77C' : '#8C8680';
  const s = { stroke: c, strokeWidth: 1.5, fill: 'none' };
  return (
    <svg viewBox="0 0 60 40" className="w-full h-14">
      {id === 'single-vanity' && <>
        <rect x="4" y="4" width="52" height="32" {...s} />
        <rect x="18" y="28" width="24" height="7" {...s} />
        <circle cx="30" cy="31" r="3" {...s} />
      </>}
      {id === 'double-vanity' && <>
        <rect x="4" y="4" width="52" height="32" {...s} />
        <rect x="6" y="28" width="20" height="7" {...s} />
        <rect x="34" y="28" width="20" height="7" {...s} />
        <circle cx="16" cy="31" r="3" {...s} />
        <circle cx="44" cy="31" r="3" {...s} />
      </>}
      {id === 'powder-room' && <>
        <rect x="14" y="4" width="32" height="32" {...s} />
        <rect x="18" y="28" width="20" height="7" {...s} />
        <circle cx="28" cy="31" r="3" {...s} />
      </>}
      {id === 'master-suite' && <>
        <rect x="4" y="4" width="52" height="32" {...s} />
        <rect x="6" y="28" width="20" height="7" {...s} />
        <rect x="32" y="14" width="22" height="20" {...s} />
        <rect x="6" y="6" width="20" height="16" {...s} />
      </>}
    </svg>
  );
}

// ─── Vein Pattern ─────────────────────────────────────────────────────────────
function VeinPattern({ color }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
      <path d="M10,20 Q30,10 50,30 Q70,50 90,40" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M5,50 Q25,35 45,55 Q65,70 85,60" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />
      <path d="M20,5 Q35,25 55,15 Q75,5 85,25" stroke={color} strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
