import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, MapPin, Phone, Mail, Linkedin, Home as HomeIcon, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const roles = [
  { v: 'developer', l: 'Developer / Owner' },
  { v: 'general_contractor', l: 'General Contractor' },
  { v: 'procurement_manager', l: 'Procurement Manager' },
  { v: 'architect', l: 'Architect / Specification Writer' },
  { v: 'designer', l: 'Interior Designer' },
  { v: 'other', l: 'Other' },
];
const projectTypes = [
  { v: 'multi_family_residential', l: 'Multi-Family Residential' },
  { v: 'hospitality', l: 'Hotel / Hospitality' },
  { v: 'commercial', l: 'Commercial Fit-Out' },
  { v: 'healthcare', l: 'Healthcare Facility' },
  { v: 'restaurant', l: 'Restaurant / Food Service' },
  { v: 'villa', l: 'Villa / Resort' },
  { v: 'other', l: 'Other' },
];
const unitOptions = [
  { v: 'under_30', l: 'Under 30 units / rooms' },
  { v: '30_100', l: '30 – 100 units / rooms' },
  { v: '100_300', l: '100 – 300 units / rooms' },
  { v: '300_plus', l: '300+ units / rooms' },
];
const regions = [
  { v: 'canada', l: 'Canada' },
  { v: 'united_states', l: 'United States' },
  { v: 'mexico', l: 'Mexico' },
  { v: 'latin_america', l: 'Other Latin America' },
  { v: 'other', l: 'Other / International' },
];
const prodCats = [
  { v: 'kitchens', l: 'Complete Kitchens' },
  { v: 'bathrooms', l: 'Complete Bathrooms' },
  { v: 'countertops', l: 'Countertops & Solid Surface' },
  { v: 'cabinets', l: 'Cabinetry Only' },
  { v: 'full_package', l: 'Full Kitchen & Bathroom Package' },
];
const installOptions = ['Yes — turnkey installation required', 'No — supply only', 'Not sure'];

const homeownerProjects = [
  { v: 'kitchen', l: 'Kitchen' },
  { v: 'bathroom', l: 'Bathroom' },
  { v: 'both', l: 'Kitchen & Bathroom' },
];

const emptyForm = {
  company_name: '', contact_name: '', email: '', phone: '',
  role: '', project_type: '', estimated_units: '', target_ship_date: '',
  delivery_region: '', product_categories: [], installation: '', message: '',
  homeowner_project: '',
};

export default function Contact() {
  const [track, setTrack] = useState(null); // null | 'homeowner' | 'trade'
  const [step, setStep] = useState(1);
  const [submitting, setSub] = useState(false);
  const [submitted, setDone] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const update = (f, v) => setForm(p => ({ ...p, [f]: v }));
  const toggleCat = c => setForm(p => ({
    ...p,
    product_categories: p.product_categories.includes(c)
      ? p.product_categories.filter(x => x !== c)
      : [...p.product_categories, c],
  }));

  const chooseTrack = (t) => { setTrack(t); setStep(1); };
  const backToStart = () => { setTrack(null); setStep(1); setForm(emptyForm); setSubmitError(false); };

  const submitToWeb3Forms = async (payload) => {
    setSub(true);
    setSubmitError(false);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
      });
      const result = await res.json();
      if (result.success) {
        setDone(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSub(false);
    }
  };

  const handleTradeSubmit = () => submitToWeb3Forms({
    subject: `New Trade Consultation Request — ${form.company_name}`,
    from_name: form.contact_name,
    email: form.email,
    company: form.company_name,
    phone: form.phone,
    role: form.role,
    project_type: form.project_type,
    estimated_units: form.estimated_units,
    delivery_region: form.delivery_region,
    installation: form.installation,
    products: form.product_categories.join(', '),
    target_date: form.target_ship_date,
    message: form.message,
  });

  const handleHomeownerSubmit = () => {
    const projectLabel = homeownerProjects.find(p => p.v === form.homeowner_project)?.l || 'Not specified';
    return submitToWeb3Forms({
      subject: `New Homeowner Consultation Request — ${form.contact_name}`,
      from_name: form.contact_name,
      email: form.email,
      phone: form.phone,
      project: projectLabel,
      message: form.message,
    });
  };

  if (submitted) {
    return (
      <div className="bg-cream min-h-screen flex items-center justify-center pt-24 pb-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-lg px-6">
          <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-serif text-3xl text-navy mb-4">Consultation Request Received</h2>
          <p className="text-warm-grey text-base leading-relaxed font-sans">Your request has been submitted. Our team will respond within one business day.</p>
        </motion.div>
      </div>
    );
  }

  const stepLabel = (n) => ['Your Role', 'Project Details', 'Contact Information'][n - 1];

  return (
    <div className="bg-cream pb-20">
      <section className="bg-navy py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="gold-overline mb-5">CONTACT</div>
          <h1 className="font-serif text-4xl md:text-5xl text-cream tracking-tight">Request a Project<br /><em className="text-gold italic">Consultation</em></h1>
          <p className="mt-4 text-cream/45 text-base font-sans">Our team responds within one business day.</p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">

            {track === null && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <p className="text-sm text-warm-grey font-sans mb-2">To route your request correctly, tell us a bit about your project first.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <button onClick={() => chooseTrack('homeowner')} className="text-left border border-navy/15 hover:border-gold p-7 transition-colors group">
                    <HomeIcon className="w-6 h-6 text-gold mb-4" />
                    <p className="font-serif text-xl text-navy mb-2">Single-Family Homeowner</p>
                    <p className="text-sm text-warm-grey font-sans leading-relaxed">I'm renovating my own kitchen or bathroom. A quick 1-step form, no company details needed.</p>
                  </button>
                  <button onClick={() => chooseTrack('trade')} className="text-left border border-navy/15 hover:border-gold p-7 transition-colors group">
                    <Building2 className="w-6 h-6 text-gold mb-4" />
                    <p className="font-serif text-xl text-navy mb-2">Developer / Contractor / Trade</p>
                    <p className="text-sm text-warm-grey font-sans leading-relaxed">I'm sourcing for a multi-unit, hospitality, or commercial project. A short project-scoping form.</p>
                  </button>
                </div>
              </motion.div>
            )}

            {track === 'homeowner' && (
              <motion.div key="homeowner" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <button onClick={backToStart} className="inline-flex items-center gap-2 text-xs font-sans text-warm-grey hover:text-gold transition-colors mb-2">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <div>
                  <Label className="text-xs uppercase tracking-wide text-warm-grey">Full Name</Label>
                  <Input className="mt-1.5 border-navy/20" value={form.contact_name} onChange={e => update('contact_name', e.target.value)} placeholder="First and last name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-xs uppercase tracking-wide text-warm-grey">Email Address</Label>
                    <Input type="email" className="mt-1.5 border-navy/20" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-xs uppercase tracking-wide text-warm-grey">Phone</Label>
                    <Input type="tel" className="mt-1.5 border-navy/20" value={form.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wide text-warm-grey">What are you working on?</Label>
                  <Select value={form.homeowner_project} onValueChange={v => update('homeowner_project', v)}>
                    <SelectTrigger className="mt-1.5 border-navy/20"><SelectValue placeholder="Select project" /></SelectTrigger>
                    <SelectContent>{homeownerProjects.map(o => <SelectItem key={o.v} value={o.v}>{o.l}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wide text-warm-grey">Tell us about your project (optional)</Label>
                  <Textarea className="mt-1.5 border-navy/20" rows={4} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Timeline, style, budget range, anything helpful..." />
                </div>
                {submitError && (
                  <p className="text-xs text-red-600 font-sans">Something went wrong sending your request. Please try again or email info@kopperstone.com directly.</p>
                )}
                <button onClick={handleHomeownerSubmit} disabled={submitting || !form.contact_name || !form.email}
                  className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors disabled:opacity-40">
                  {submitting ? 'Submitting...' : 'Submit Request'}
                  {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </motion.div>
            )}

            {track === 'trade' && (
              <>
                <div className="flex items-center gap-0 mb-10 border border-navy/10">
                  {[1, 2, 3].map(s => (
                    <div key={s} className={`flex-1 py-3 px-4 text-center border-r border-navy/10 last:border-0 text-xs font-sans tracking-wide transition-colors ${step === s ? 'bg-gold text-navy' : step > s ? 'bg-navy text-cream/50' : 'text-warm-grey'}`}>
                      {String(s).padStart(2, '0')} — {stepLabel(s)}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-6">
                      <button onClick={backToStart} className="inline-flex items-center gap-2 text-xs font-sans text-warm-grey hover:text-gold transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-warm-grey">Your Role</Label>
                        <Select value={form.role} onValueChange={v => update('role', v)}>
                          <SelectTrigger className="mt-1.5 border-navy/20"><SelectValue placeholder="Select your role" /></SelectTrigger>
                          <SelectContent>{roles.map(o => <SelectItem key={o.v} value={o.v}>{o.l}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-warm-grey">Company Name</Label>
                        <Input className="mt-1.5 border-navy/20" value={form.company_name} onChange={e => update('company_name', e.target.value)} placeholder="Your company or organization" />
                      </div>
                      <button onClick={() => setStep(2)} disabled={!form.role || !form.company_name}
                        className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors disabled:opacity-40">
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-xs uppercase tracking-wide text-warm-grey">Project Type</Label>
                          <Select value={form.project_type} onValueChange={v => update('project_type', v)}>
                            <SelectTrigger className="mt-1.5 border-navy/20"><SelectValue placeholder="Select type" /></SelectTrigger>
                            <SelectContent>{projectTypes.map(o => <SelectItem key={o.v} value={o.v}>{o.l}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-xs uppercase tracking-wide text-warm-grey">Estimated Units</Label>
                          <Select value={form.estimated_units} onValueChange={v => update('estimated_units', v)}>
                            <SelectTrigger className="mt-1.5 border-navy/20"><SelectValue placeholder="Select range" /></SelectTrigger>
                            <SelectContent>{unitOptions.map(o => <SelectItem key={o.v} value={o.v}>{o.l}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-xs uppercase tracking-wide text-warm-grey">Target Installation Date</Label>
                          <Input type="date" className="mt-1.5 border-navy/20" value={form.target_ship_date} onChange={e => update('target_ship_date', e.target.value)} />
                        </div>
                        <div>
                          <Label className="text-xs uppercase tracking-wide text-warm-grey">Delivery Region</Label>
                          <Select value={form.delivery_region} onValueChange={v => update('delivery_region', v)}>
                            <SelectTrigger className="mt-1.5 border-navy/20"><SelectValue placeholder="Select region" /></SelectTrigger>
                            <SelectContent>{regions.map(o => <SelectItem key={o.v} value={o.v}>{o.l}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-warm-grey mb-3 block">Product Scope</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {prodCats.map(c => (
                            <div key={c.v} className="flex items-center gap-2">
                              <Checkbox checked={form.product_categories.includes(c.v)} onCheckedChange={() => toggleCat(c.v)} />
                              <span className="text-sm text-navy font-sans">{c.l}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-warm-grey mb-3 block">Installation Required</Label>
                        <div className="flex flex-wrap gap-2">
                          {installOptions.map(o => (
                            <button key={o} onClick={() => update('installation', o)}
                              className={`text-xs font-sans px-3 py-2 border transition-colors ${form.installation === o ? 'border-gold bg-gold/10 text-navy' : 'border-navy/15 text-warm-grey hover:border-gold'}`}>
                              {o}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-warm-grey">Notes / Specification Details</Label>
                        <Textarea className="mt-1.5 border-navy/20" rows={4} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Project details, specifications, timeline notes..." />
                      </div>
                      <div className="flex gap-4">
                        <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 border border-navy/15 px-6 py-3 text-sm font-sans text-warm-grey hover:border-gold hover:text-gold transition-colors">
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button onClick={() => setStep(3)} className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
                          Continue <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-6">
                      <div>
                        <Label className="text-xs uppercase tracking-wide text-warm-grey">Full Name</Label>
                        <Input className="mt-1.5 border-navy/20" value={form.contact_name} onChange={e => update('contact_name', e.target.value)} placeholder="First and last name" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-xs uppercase tracking-wide text-warm-grey">Email Address</Label>
                          <Input type="email" className="mt-1.5 border-navy/20" value={form.email} onChange={e => update('email', e.target.value)} />
                        </div>
                        <div>
                          <Label className="text-xs uppercase tracking-wide text-warm-grey">Phone</Label>
                          <Input type="tel" className="mt-1.5 border-navy/20" value={form.phone} onChange={e => update('phone', e.target.value)} />
                        </div>
                      </div>
                      {submitError && (
                        <p className="text-xs text-red-600 font-sans">Something went wrong sending your request. Please try again or email info@kopperstone.com directly.</p>
                      )}
                      <div className="flex gap-4">
                        <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 border border-navy/15 px-6 py-3 text-sm font-sans text-warm-grey hover:border-gold hover:text-gold transition-colors">
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button onClick={handleTradeSubmit} disabled={submitting || !form.contact_name || !form.email}
                          className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors disabled:opacity-40">
                          {submitting ? 'Submitting...' : 'Submit Request'}
                          {!submitting && <ArrowRight className="w-4 h-4" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-navy-light border border-cream/10 p-7">
              <p className="text-[9px] font-sans tracking-widest uppercase text-gold mb-2">General Inquiries</p>
              <a href="mailto:info@kopperstone.com" className="font-serif text-lg text-cream hover:text-gold transition-colors">info@kopperstone.com</a>
            </div>
            <div className="bg-navy-light border border-cream/10 p-7">
              <p className="text-[9px] font-sans tracking-widest uppercase text-gold mb-4">Leadership</p>
              <div className="space-y-4">
                {[
                  { name: 'Ricardo Prieto', role: 'Co-Founder & CEO', email: 'ricardo@kopperstone.com' },
                  { name: 'Santiago Rojas', role: 'Co-Founder & CRO', email: 'santiago@kopperstone.com' },
                ].map(p => (
                  <div key={p.name}>
                    <p className="text-cream text-sm font-sans font-medium">{p.name}</p>
                    <p className="text-cream/40 text-xs font-sans">{p.role}</p>
                    <a href={`mailto:${p.email}`} className="text-gold/70 text-xs hover:text-gold transition-colors">{p.email}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-light border border-cream/10 p-7">
              <p className="text-[9px] font-sans tracking-widest uppercase text-gold mb-4">Connect With Us</p>
              <a href="https://www.linkedin.com/company/kopperstone/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
                <Linkedin className="w-5 h-5 text-gold group-hover:text-cream transition-colors" />
                <span className="text-cream/50 text-sm font-sans group-hover:text-gold transition-colors">linkedin.com/company/kopperstone</span>
              </a>
            </div>
            <div className="bg-navy-light border border-cream/10 p-7">
              <p className="text-[9px] font-sans tracking-widest uppercase text-gold mb-4">Operations</p>
              <div className="space-y-4">
                <div>
                  <p className="text-cream/60 text-xs font-sans uppercase tracking-wide mb-1">Canada — Kopperstone Inc.</p>
                  <div className="flex items-start gap-2 text-sm text-cream/40 font-sans"><MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" /><span>Toronto, Ontario, Canada</span></div>
                  <div className="flex items-center gap-2 text-sm text-cream/40 font-sans mt-1"><Phone className="w-3.5 h-3.5 text-gold" /><span>+1 (437) 494-7775</span></div>
                </div>
                <div>
                  <p className="text-cream/60 text-xs font-sans uppercase tracking-wide mb-1">U.S. — Kopperstone LLC</p>
                  <div className="flex items-start gap-2 text-sm text-cream/40 font-sans"><MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" /><span>Austin, Texas, USA</span></div>
                  <div className="flex items-center gap-2 text-sm text-cream/40 font-sans mt-1"><Phone className="w-3.5 h-3.5 text-gold" /><span>+1 (437) 494-7775</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
