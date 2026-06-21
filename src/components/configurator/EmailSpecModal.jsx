import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Mail } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function EmailSpecModal({ mode, config, onClose }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!email) return;
    setSending(true);
    const configLines = Object.entries(config).map(([k, v]) => `• ${k.charAt(0).toUpperCase() + k.slice(1)}: ${v.replace(/-/g, ' ')}`).join('\n');
    await Promise.all([
      base44.integrations.Core.SendEmail({
        to: email,
        subject: `Your Kopperstone ${mode === 'kitchen' ? 'Kitchen' : 'Bathroom'} Specification`,
      body: `<div style="font-family:sans-serif;color:#1A1A1A;max-width:600px">
        <div style="background:#0E1A2B;padding:32px;text-align:center">
          <h1 style="color:#F5EFE6;font-family:Georgia,serif;margin:0;font-size:24px">Kopperstone</h1>
          <p style="color:#C9A77C;font-size:10px;letter-spacing:3px;margin:4px 0 0;text-transform:uppercase">Developer Supply Partner</p>
        </div>
        <div style="padding:32px;background:#F9F7F4">
          <h2 style="color:#0E1A2B;font-family:Georgia,serif">Your ${mode === 'kitchen' ? 'Kitchen' : 'Bathroom'} Specification</h2>
          <p style="color:#666;font-size:14px">Thank you for using the Kopperstone Design Configurator. Below is your selected specification.</p>
          <div style="background:#fff;border:1px solid #E5E0D8;padding:24px;margin:24px 0">
            <h3 style="color:#C9A77C;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-top:0">Selected Configuration</h3>
            <pre style="font-family:sans-serif;font-size:13px;color:#333;line-height:1.8;white-space:pre-wrap">${configLines}</pre>
          </div>
          <p style="color:#666;font-size:13px">This specification is indicative. Final specifications, SKUs, and pricing are confirmed upon project consultation.</p>
          <div style="margin-top:24px">
            <a href="https://kopperstone.com/contact" style="background:#C9A77C;color:#0E1A2B;padding:14px 28px;text-decoration:none;font-size:12px;letter-spacing:1px;text-transform:uppercase;font-family:sans-serif">Request a Formal Quote →</a>
          </div>
        </div>
        <div style="padding:16px 32px;background:#0E1A2B;text-align:center">
          <p style="color:rgba(245,239,230,0.4);font-size:10px;margin:0">© ${new Date().getFullYear()} Kopperstone Inc. · info@kopperstone.com</p>
        </div>
      </div>`
      }),
      base44.integrations.Core.SendEmail({
      to: 'ricardo@kopperstone.com',
      subject: `[Spec Sheet] New ${mode === 'kitchen' ? 'Kitchen' : 'Bathroom'} Configuration — ${email}`,
      body: `A spec sheet was requested by ${email}.\n\nConfiguration:\n${Object.entries(config).map(([k, v]) => `• ${k}: ${v}`).join('\n')}`,
      }),
      ]);
      setSent(true);
    setSending(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm px-4">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        className="bg-navy-light border border-cream/15 p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors">
          <X className="w-4 h-4" />
        </button>
        {sent ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-4">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-2">Specification Sent</h3>
            <p className="text-cream/50 text-sm font-sans">Check your inbox at <span className="text-gold">{email}</span></p>
            <button onClick={onClose} className="mt-6 border border-gold/40 text-gold text-xs font-sans uppercase tracking-wide px-6 py-2.5 hover:bg-gold/5 transition-colors">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="gold-overline mb-4">EMAIL SPEC SHEET</div>
            <h3 className="font-serif text-2xl text-cream mb-2">Email Me This Spec</h3>
            <p className="text-cream/45 text-xs font-sans mb-6 leading-relaxed">
              We'll send your configuration with selected materials, estimated lead times, and a CTA to request a formal quote.
            </p>
            <label className="block text-[9px] font-sans uppercase tracking-widest text-gold mb-2">Your Email Address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="procurement@company.com"
              className="w-full bg-navy border border-cream/20 text-cream placeholder:text-cream/25 px-4 py-3 text-sm font-sans mb-4 focus:border-gold focus:outline-none transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!email || sending}
              className="w-full bg-gold text-navy text-xs font-sans uppercase tracking-wide py-3.5 hover:bg-gold/90 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              {sending ? 'Sending…' : 'Send Spec Sheet'}
            </button>
            <p className="text-cream/25 text-[10px] font-sans mt-3 text-center">Specification-grade materials list · Estimated lead times · SKU references</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}