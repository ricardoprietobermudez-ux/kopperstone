import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function CatalogRequestModal({ category, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Catalog Request — ${category}`,
          from_name: name,
          email,
          category,
        }),
      });
    } catch (_) {}
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="relative bg-navy border border-cream/15 w-full max-w-md shadow-2xl"
      >
        <div className="flex items-center justify-between px-7 py-5 border-b border-cream/10">
          <h2 className="font-serif text-xl text-cream">Request Full Catalog</h2>
          <button onClick={onClose} className="text-cream/30 hover:text-cream transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-7 text-center py-12">
            <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-6 h-6 text-gold" />
            </div>
            <p className="font-serif text-lg text-cream mb-2">Request Received</p>
            <p className="text-cream/40 text-sm font-sans">We'll send over the full {category} catalog shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-7 space-y-5">
            <p className="text-cream/40 text-sm font-sans -mt-1">
              Leave your details and we'll send you the full {category} catalog with all available styles and finishes.
            </p>
            <div>
              <Label className="text-xs uppercase tracking-wide text-cream/50">Full Name</Label>
              <Input required className="mt-1.5 border-cream/20 bg-transparent text-cream" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wide text-cream/50">Email Address</Label>
              <Input required type="email" className="mt-1.5 border-cream/20 bg-transparent text-cream" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
            </div>
            <button type="submit" disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors disabled:opacity-40">
              {submitting ? 'Sending...' : 'Send Me the Catalog'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
