import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function QuoteModal({ mode, config, onClose }) {
  const [form, setForm] = useState({ company: '', name: '', email: '', units: 50 });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!form.email || !form.company) return;
    setSubmitting(true);
    const configSummary = Object.entries(config).map(([k, v]) => `${k}: ${v}`).join(', ');
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote Request — ${form.units} units — ${mode === 'kitchen' ? 'Kitchen' : 'Bathroom'} Configurator`,
          from_name: form.name || form.company,
          email: form.email,
          company: form.company,
          units: form.units,
          mode,
          configuration: configSummary,
        }),
      });
    } catch (_) {}
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm px-4">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        className="bg-navy-light border border-cream/15 p-8 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors">
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-4">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-2">Quote Request Submitted</h3>
            <p className="text-cream/50 text-sm font-sans">Our team will contact you within one business day with pricing for <span className="text-gold">{form.units} units</span>.</p>
            <button onClick={onClose} className="mt-6 border border-gold/40 text-gold text-xs font-sans uppercase tracking-wide px-6 py-2.5 hover:bg-gold/5 transition-colors">Close</button>
          </div>
        ) : (
          <>
            <div className="gold-overline mb-4">REQUEST QUOTE</div>
            <h3 className="font-serif text-2xl text-cream mb-1">Request a Quote</h3>
            <p className="text-cream/45 text-xs font-sans mb-6">Your configuration will be pre-filled. Specify unit count and we'll provide volume pricing.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-1.5">Company Name *</label>
                <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  placeholder="Acme Development Corp"
                  className="w-full bg-navy border border-cream/20 text-cream placeholder:text-cream/25 px-4 py-2.5 text-sm font-sans focus:border-gold focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-1.5">Contact Name</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Full name"
                  className="w-full bg-navy border border-cream/20 text-cream placeholder:text-cream/25 px-4 py-2.5 text-sm font-sans focus:border-gold focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-1.5">Email Address *</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="procurement@company.com"
                  className="w-full bg-navy border border-cream/20 text-cream placeholder:text-cream/25 px-4 py-2.5 text-sm font-sans focus:border-gold focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-2">
                  How many units? — <span className="text-cream/60">{form.units} units</span>
                </label>
                <input type="range" min="30" max="500" step="10" value={form.units}
                  onChange={e => setForm(f => ({ ...f, units: parseInt(e.target.value) }))}
                  className="w-full accent-gold" />
                <div className="flex justify-between text-[9px] font-sans text-cream/30 mt-1">
                  <span>30</span><span>100</span><span>200</span><span>300</span><span>500+</span>
                </div>
              </div>

              <div className="bg-navy border border-cream/10 p-4">
                <p className="text-[9px] font-sans uppercase tracking-widest text-gold mb-2">Pre-filled Configuration</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {Object.entries(config).map(([k, v]) => (
                    <span key={k} className="text-[10px] font-sans text-cream/40">
                      <span className="text-cream/60">{k}:</span> {v.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>

              <button onClick={handleSubmit} disabled={!form.email || !form.company || submitting}
                className="w-full bg-gold text-navy text-xs font-sans uppercase tracking-wide py-3.5 hover:bg-gold/90 transition-colors disabled:opacity-40 flex items-center justify-center gap-2">
                {submitting ? 'Submitting…' : <>Submit Quote Request for {form.units} Units <ArrowRight className="w-3.5 h-3.5" /></>}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
