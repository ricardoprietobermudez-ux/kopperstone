import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function EmailSpecModal({ mode, config, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleSubmit = async () => {
    if (!form.email || !form.name) return;
    setSubmitting(true);
    const configSummary = Object.entries(config).map(([k, v]) => `${k}: ${v}`).join(', ');
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Email My Design — ${mode === 'kitchen' ? 'Kitchen' : 'Bathroom'} Design — ${form.name}`,
          from_name: form.name,
          email: form.email,
          notes: form.notes,
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
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm px-4">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-navy-light border border-cream/15 p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors">
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-4">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-2">Design Sent</h3>
            <p className="text-cream/50 text-sm font-sans">We've received your design and will follow up by email shortly.</p>
            <button onClick={onClose} className="mt-6 border border-gold/40 text-gold text-xs font-sans uppercase tracking-wide px-6 py-2.5 hover:bg-gold/5 transition-colors">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="gold-overline mb-4">EMAIL MY DESIGN</div>
            <h3 className="font-serif text-2xl text-cream mb-1">Send Your Design</h3>
            <p className="text-cream/45 text-xs font-sans mb-6 leading-relaxed">
              Leave your details and we'll email you a copy of your selected configuration, with estimated lead times and next steps.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-1.5">Your Name *</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="First and last name"
                  className="w-full bg-navy border border-cream/20 text-cream placeholder:text-cream/25 px-4 py-2.5 text-sm font-sans focus:border-gold focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-1.5">Email Address *</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full bg-navy border border-cream/20 text-cream placeholder:text-cream/25 px-4 py-2.5 text-sm font-sans focus:border-gold focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-1.5">Notes <span className="text-cream/30 normal-case tracking-normal">(optional)</span></label>
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  placeholder="Anything else we should know?"
                  rows={3}
                  className="w-full bg-navy border border-cream/20 text-cream placeholder:text-cream/25 px-4 py-2.5 text-sm font-sans focus:border-gold focus:outline-none transition-colors resize-none" />
              </div>

              <div className="bg-navy border border-cream/10 p-4">
                <p className="text-[9px] font-sans uppercase tracking-widest text-gold mb-2">Your Configuration</p>
                <div className="space-y-1">
                  {Object.entries(config).map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-[10px] font-sans">
                      <span className="text-cream/50 capitalize">{k}:</span>
                      <span className="text-cream/80">{v.replace(/-/g, ' ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.email || !form.name || submitting}
                className="w-full bg-gold text-navy text-xs font-sans uppercase tracking-wide py-3.5 hover:bg-gold/90 transition-colors disabled:opacity-40"
              >
                {submitting ? 'Sending…' : 'Send My Design'}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
