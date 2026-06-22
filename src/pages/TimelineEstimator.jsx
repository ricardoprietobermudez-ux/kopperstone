import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, AlertTriangle, CheckCircle, Calendar, Layers, Truck, Wrench, FileText, Copy, Check } from 'lucide-react';
import { addWeeks, subWeeks, format, differenceInDays } from 'date-fns';

const PROJECT_TYPES = [
  'Hotel (180+ keys)',
  'Multi-Family Residential (30–300 units)',
  'Multi-Family Residential (300+ units)',
  'Mixed-Use Development',
  'Healthcare Facility',
  'Restaurant Group / Commercial Fit-Out',
  'Other',
];

const SCOPE_OPTIONS = [
  { id: 'kitchens', label: 'Kitchens only' },
  { id: 'bathrooms', label: 'Bathrooms only' },
  { id: 'full', label: 'Full kitchen + bathroom package' },
  { id: 'custom', label: 'Custom scope (other materials)' },
];

const PHASE_ICONS = [FileText, Layers, Wrench, Truck, CheckCircle];

const MFG_HOLIDAYS = [
  { name: 'Chinese New Year', start: new Date(2025, 0, 29), end: new Date(2025, 1, 12) },
  { name: 'Chinese New Year', start: new Date(2026, 1, 17), end: new Date(2026, 2, 3) },
  { name: 'Golden Week (China)', start: new Date(2025, 9, 1), end: new Date(2025, 9, 7) },
  { name: 'Golden Week (China)', start: new Date(2026, 9, 1), end: new Date(2026, 9, 7) },
];

function getDefaultDate() {
  const d = new Date();
  d.setMonth(d.getMonth() + 6);
  return d.toISOString().split('T')[0];
}

function calcDurations(units, scope, installation, projectType) {
  const isLatin = false; // could be added as input later
  const spec = units >= 100 ? 2 : 1;
  const isComplex = scope.includes('full') || scope.includes('custom') || units >= 300;
  const design = isComplex ? 4 : 2;
  const production = units >= 300 ? 14 : units >= 100 ? 10 : 8;
  const shipping = isLatin ? 5 : 4;
  const install = installation ? (units >= 100 ? 3 : 2) : 1;
  return [spec, design, production, shipping, install];
}

function checkHolidayOverlap(start, end) {
  for (const h of MFG_HOLIDAYS) {
    if (start <= h.end && end >= h.start) return h.name;
  }
  return null;
}

export default function TimelineEstimator() {
  const [inputs, setInputs] = useState({
    targetDate: getDefaultDate(),
    projectType: PROJECT_TYPES[1],
    units: 100,
    scope: ['full'],
    installation: false,
  });
  const [result, setResult] = useState(null);
  const [emailModal, setEmailModal] = useState(false);
  const [shareLink, setShareLink] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleScope = (id) => {
    setInputs(prev => ({
      ...prev,
      scope: prev.scope.includes(id) ? prev.scope.filter(s => s !== id) : [...prev.scope, id],
    }));
  };

  const calculate = () => {
    const target = new Date(inputs.targetDate);
    const durations = calcDurations(inputs.units, inputs.scope, inputs.installation, inputs.projectType);
    const phaseNames = ['Specification', 'Design & Approval', 'Production', 'Shipping & Customs', 'Delivery & Installation'];
    const phaseDescs = [
      'Share your measurements, brief, and design vision. Our team reviews unit counts, layout constraints, and timeline.',
      'Architectural drawings, 3D renders, and full material specification. Revisions until you approve.',
      'Custom manufacturing through our vetted production network with full quality control.',
      'Ocean freight, customs clearance, and delivery to job site.',
      'On-site delivery, unboxing, and installation if requested.',
    ];

    // Calculate backwards from target
    const phases = [];
    let cursor = new Date(target);
    for (let i = durations.length - 1; i >= 0; i--) {
      const end = new Date(cursor);
      const start = subWeeks(cursor, durations[i]);
      phases.unshift({ name: phaseNames[i], desc: phaseDescs[i], weeks: durations[i], start, end, index: i });
      cursor = new Date(start);
    }

    // Check production holiday overlap
    const productionPhase = phases[2];
    const holidayWarning = checkHolidayOverlap(productionPhase.start, productionPhase.end);

    const specStart = phases[0].start;
    const daysUntilSpec = differenceInDays(specStart, new Date());
    const status = daysUntilSpec < 0 ? 'overdue' : daysUntilSpec <= 14 ? 'tight' : 'ok';

    setResult({ phases, specStart, target, status, daysUntilSpec, holidayWarning });
  };

  const handleShareLink = () => {
    const code = `KS-TL-${Date.now().toString(36).toUpperCase()}`;
    setShareLink(code);
    navigator.clipboard.writeText(`${window.location.origin}/timeline-estimator?ref=${code}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const totalWeeks = result ? result.phases.reduce((s, p) => s + p.weeks, 0) : 0;

  return (
    <div className="min-h-screen bg-navy pt-16">
      {/* Header */}
      <div className="bg-navy border-b border-cream/10 px-6 lg:px-10 py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="gold-overline mb-3">PROJECT TIMELINE ESTIMATOR</div>
          <h1 className="font-serif text-3xl md:text-4xl text-cream tracking-tight mb-2">
            Plan your project backwards from your installation date.
          </h1>
          <p className="text-cream/45 text-sm font-sans max-w-2xl">
            See exactly when you need to commit to stay on schedule. Built for developers, GCs, and procurement teams managing fixed delivery deadlines.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Input panel */}
          <div className="lg:col-span-4">
            <div className="bg-navy-light border border-cream/10 p-8 space-y-7">
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-2">
                  When do you need installation complete?
                </label>
                <input
                  type="date"
                  value={inputs.targetDate}
                  onChange={e => setInputs(p => ({ ...p, targetDate: e.target.value }))}
                  className="w-full bg-navy border border-cream/20 text-cream px-4 py-3 text-sm font-sans focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-2">Project Type</label>
                <select
                  value={inputs.projectType}
                  onChange={e => setInputs(p => ({ ...p, projectType: e.target.value }))}
                  className="w-full bg-navy border border-cream/20 text-cream px-4 py-3 text-sm font-sans focus:border-gold focus:outline-none transition-colors"
                >
                  {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-2">
                  How many units? — <span className="text-cream/60">{inputs.units}</span>
                </label>
                <input type="range" min="30" max="500" step="10" value={inputs.units}
                  onChange={e => setInputs(p => ({ ...p, units: parseInt(e.target.value) }))}
                  className="w-full accent-gold" />
                <div className="flex justify-between text-[9px] font-sans text-cream/30 mt-1">
                  <span>30</span><span>100</span><span>200</span><span>300</span><span>500+</span>
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-3">Scope</label>
                <div className="flex flex-wrap gap-2">
                  {SCOPE_OPTIONS.map(s => (
                    <button key={s.id} onClick={() => toggleScope(s.id)}
                      className={`px-3 py-1.5 text-[11px] font-sans border transition-all ${inputs.scope.includes(s.id) ? 'border-gold bg-gold/10 text-gold' : 'border-cream/20 text-cream/50 hover:border-cream/40'}`}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-3">
                  Installation Service Required?
                </label>
                <div className="flex gap-3">
                  <button onClick={() => setInputs(p => ({ ...p, installation: true }))}
                    className={`flex-1 py-2.5 text-xs font-sans uppercase border transition-all ${inputs.installation ? 'border-gold bg-gold/10 text-gold' : 'border-cream/20 text-cream/40 hover:border-cream/40'}`}>
                    Yes
                  </button>
                  <button onClick={() => setInputs(p => ({ ...p, installation: false }))}
                    className={`flex-1 py-2.5 text-xs font-sans uppercase border transition-all ${!inputs.installation ? 'border-gold bg-gold/10 text-gold' : 'border-cream/20 text-cream/40 hover:border-cream/40'}`}>
                    No
                  </button>
                </div>
              </div>

              <button onClick={calculate}
                className="w-full bg-gold text-navy text-xs font-sans uppercase tracking-wide py-4 hover:bg-gold/90 transition-colors flex items-center justify-center gap-2">
                Calculate My Timeline <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center border border-cream/8 min-h-96">
                  <div className="text-center">
                    <Calendar className="w-10 h-10 text-cream/15 mx-auto mb-4" />
                    <p className="text-cream/25 text-sm font-sans">Enter your project details and calculate your timeline</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

                  {/* Status banner */}
                  <div className={`border p-5 mb-6 ${result.status === 'ok' ? 'border-gold/40 bg-gold/5' : result.status === 'tight' ? 'border-amber-500/40 bg-amber-500/5' : 'border-red-500/40 bg-red-500/5'}`}>
                    <div className="flex items-start gap-3">
                      {result.status === 'ok'
                        ? <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        : <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${result.status === 'tight' ? 'text-amber-400' : 'text-red-400'}`} />
                      }
                      <div>
                        <p className={`text-sm font-sans font-medium ${result.status === 'ok' ? 'text-gold' : result.status === 'tight' ? 'text-amber-300' : 'text-red-300'}`}>
                          {result.status === 'ok'
                            ? `✓ You're on track. Begin specification by ${format(result.specStart, 'MMMM d, yyyy')} to stay ahead of schedule.`
                            : result.status === 'tight'
                            ? `⚠ This timeline is tight. Contact our team immediately to assess feasibility.`
                            : `⚠ This timeline is overdue. Contact our team immediately — expedited options may be available.`
                          }
                        </p>
                        <p className="text-cream/50 text-xs font-sans mt-1">
                          To install by <strong className="text-cream/70">{format(result.target, 'MMMM d, yyyy')}</strong>, your project must enter specification by <strong className="text-cream/70">{format(result.specStart, 'MMMM d, yyyy')}</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Holiday warning */}
                  {result.holidayWarning && (
                    <div className="border border-amber-500/30 bg-amber-500/5 p-4 mb-6 flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-300/80 text-xs font-sans">
                        <strong>Manufacturing Holiday Alert:</strong> Your production phase overlaps with <strong>{result.holidayWarning}</strong>. Add 1–2 weeks buffer to your timeline.
                      </p>
                    </div>
                  )}

                  {/* Gantt chart */}
                  <div className="bg-navy-light border border-cream/10 p-6 mb-6">
                    <p className="text-[9px] font-sans uppercase tracking-widest text-gold mb-5">Project Timeline — {totalWeeks} Weeks Total</p>
                    <div className="space-y-3">
                      {result.phases.map((phase, i) => {
                        const Icon = PHASE_ICONS[i];
                        const pct = (phase.weeks / totalWeeks) * 100;
                        return (
                          <motion.div key={phase.name}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-6 h-6 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                              <Icon className="w-3 h-3 text-gold" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-sans text-cream/80">{phase.name}</span>
                                <span className="text-[10px] font-sans text-cream/40 ml-2">{phase.weeks}w</span>
                              </div>
                              <div className="h-5 bg-navy rounded-sm overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${pct}%` }}
                                  transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                                  className="h-full bg-gold/70 relative"
                                />
                              </div>
                              <div className="flex gap-4 mt-1">
                                <span className="text-[9px] font-sans text-cream/35">{format(phase.start, 'MMM d, yyyy')}</span>
                                <span className="text-[9px] font-sans text-cream/20">→</span>
                                <span className="text-[9px] font-sans text-cream/35">{format(phase.end, 'MMM d, yyyy')}</span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Key dates list */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {result.phases.map((phase, i) => (
                      <div key={phase.name} className="bg-navy border border-cream/8 px-4 py-3 flex items-center justify-between">
                        <span className="text-[10px] font-sans text-cream/45">{phase.name} begins</span>
                        <span className={`text-xs font-sans ${i === 0 ? 'text-gold' : 'text-cream/70'}`}>{format(phase.start, 'MMM d, yyyy')}</span>
                      </div>
                    ))}
                    <div className="bg-gold/10 border border-gold/30 px-4 py-3 flex items-center justify-between">
                      <span className="text-[10px] font-sans text-gold">Installation complete</span>
                      <span className="text-xs font-sans text-gold">{format(result.target, 'MMM d, yyyy')}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={() => setEmailModal(true)}
                      className="flex-1 border border-gold/40 text-gold text-[11px] font-sans uppercase tracking-wide py-3 hover:bg-gold/5 transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-3.5 h-3.5" /> Email Me This Timeline
                    </button>
                    <button onClick={handleShareLink}
                      className="flex-1 border border-cream/20 text-cream/60 text-[11px] font-sans uppercase tracking-wide py-3 hover:border-cream/40 hover:text-cream transition-colors flex items-center justify-center gap-2">
                      {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedLink ? 'Link Copied' : 'Share Timeline'}
                    </button>
                    <Link to="/contact"
                      className="flex-1 bg-gold text-navy text-[11px] font-sans uppercase tracking-wide py-3 hover:bg-gold/90 transition-colors flex items-center justify-center gap-2">
                      Begin Specification Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Email modal */}
      <AnimatePresence>
        {emailModal && <TimelineEmailModal inputs={inputs} result={result} onClose={() => setEmailModal(false)} />}
      </AnimatePresence>
    </div>
  );
}

function TimelineEmailModal({ inputs, result, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (!result) return;
    const phaseLines = result.phases.map(p =>
      `${p.name}: ${format(p.start, 'MMM d, yyyy')} - ${format(p.end, 'MMM d, yyyy')} (${p.weeks} weeks)`
    ).join('\n');

    const text = [
      'Kopperstone — Project Timeline Estimator',
      '',
      `Installation target: ${format(result.target, 'MMMM d, yyyy')}`,
      `Units: ${inputs.units} · Project type: ${inputs.projectType}`,
      '',
      'Phase Schedule:',
      phaseLines,
      '',
      `Begin specification by: ${format(result.specStart, 'MMMM d, yyyy')}`,
      '',
      'Begin Specification Now: https://kopperstone.com/contact',
    ].join('\n');

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kopperstone-Project-Timeline.txt';
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm px-4">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        className="bg-navy-light border border-cream/15 p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors">
          <span className="text-lg">×</span>
        </button>
        {downloaded ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-4">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-2">Timeline Downloaded</h3>
            <p className="text-cream/50 text-sm font-sans">Your project timeline has been saved.</p>
            <button onClick={onClose} className="mt-6 border border-gold/40 text-gold text-xs font-sans uppercase tracking-wide px-6 py-2.5">Close</button>
          </div>
        ) : (
          <>
            <div className="gold-overline mb-4">DOWNLOAD TIMELINE</div>
            <h3 className="font-serif text-2xl text-cream mb-4">Save Your Timeline</h3>
            <button onClick={handleDownload}
              className="w-full bg-gold text-navy text-xs font-sans uppercase tracking-wide py-3.5 hover:bg-gold/90 transition-colors flex items-center justify-center gap-2">
              Download Timeline
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}