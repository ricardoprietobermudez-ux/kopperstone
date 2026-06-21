import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Projects() {
  const [form, setForm] = useState({ company: '', email: '', project_type: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInquiry = async () => {
    await base44.entities.Lead.create({
      company_name: form.company,
      email: form.email,
      project_type: form.project_type.toLowerCase().replace(/ /g, '_'),
      status: 'new',
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="gold-overline mb-5">SELECTED PROJECTS</div>
          <h1 className="font-serif text-5xl text-cream tracking-tight">
            Projects &<br /><em className="text-gold italic">Case Studies</em>
          </h1>
          <p className="mt-5 text-cream/45 text-base max-w-xl font-sans">
            From 180-key hotel programs to multi-tower residential developments — Kopperstone delivers specification-grade kitchen and bathroom packages at project scale.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-24">
        <div className="border border-cream/10 p-16 text-center max-w-2xl mx-auto">
          <p className="text-[9px] font-sans tracking-widest uppercase text-gold mb-6">COMING SOON</p>
          <h2 className="font-serif text-3xl text-cream mb-4">Case studies are being prepared.</h2>
          <p className="text-cream/40 text-sm font-sans leading-relaxed mb-10">
            Our project portfolio is currently being documented. In the meantime, contact our team to discuss how we've delivered specification-grade kitchens and bathrooms across hotels, multi-family residential towers, and commercial developments across North America.
          </p>

          {/* Quick inquiry form */}
          <div className="bg-navy-light border border-cream/10 p-8 text-left max-w-md mx-auto">
            <p className="text-[10px] font-sans tracking-widest uppercase text-gold mb-5">Quick Inquiry</p>
            {submitted ? (
              <p className="text-cream/60 text-sm font-sans text-center py-4">Thank you. Our team will be in touch within one business day.</p>
            ) : (
              <div className="space-y-3">
                <Input placeholder="Company name" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                  className="bg-navy border-cream/15 text-cream placeholder:text-cream/30 text-sm" />
                <Input placeholder="Email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  className="bg-navy border-cream/15 text-cream placeholder:text-cream/30 text-sm" />
                <Input placeholder="Project type" value={form.project_type} onChange={e => setForm(p => ({ ...p, project_type: e.target.value }))}
                  className="bg-navy border-cream/15 text-cream placeholder:text-cream/30 text-sm" />
                <button onClick={handleInquiry} disabled={!form.company || !form.email}
                  className="w-full bg-gold text-navy text-xs font-sans uppercase tracking-wide py-3 hover:bg-gold/90 transition-colors disabled:opacity-40">
                  Submit Inquiry
                </button>
              </div>
            )}
          </div>

          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 text-gold text-xs font-sans uppercase tracking-wide hover:text-gold/70 transition-colors">
              Or request a full project consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}