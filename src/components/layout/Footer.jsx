import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-cream/10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-serif text-xl text-cream">Kopperstone</span>
            </div>
            <p className="text-cream/40 text-xs leading-relaxed max-w-xs">
              Custom kitchens, bathrooms, and building materials for homeowners across North America — designed, sourced, and installed by one team.
            </p>
            <div className="mt-6 space-y-1.5">
              <p className="text-[10px] font-sans text-gold/60 uppercase tracking-widest">General Inquiries</p>
              <a href="mailto:info@kopperstone.com" className="text-xs text-cream/40 hover:text-gold transition-colors">info@kopperstone.com</a>
              <p className="text-[10px] font-sans text-gold/60 uppercase tracking-widest mt-3">Canada HQ · U.S. — Austin, TX</p>
            </div>
          </div>

          {/* Right: CTA + Follow Us */}
          <div className="flex flex-col items-end gap-6">
            <Link to="/contact" className="block text-center border border-gold/40 text-gold text-[11px] font-sans uppercase tracking-wide px-6 py-2.5 hover:bg-gold hover:text-navy transition-colors whitespace-nowrap">
              Request Consultation
            </Link>
            <div>
              <p className="text-[9px] font-sans text-gold/60 tracking-widest uppercase mb-3 text-right">—— Follow Us</p>
              <a
                href="https://www.linkedin.com/company/kopperstone/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kopperstone on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 border border-gold/30 text-gold hover:text-cream hover:border-cream/40 hover:scale-110 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/8 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/25">© {new Date().getFullYear()} Kopperstone Inc. All rights reserved. Kopperstone LLC — Austin, Texas, USA.</p>
          <div className="flex gap-6">
            
            
            
          </div>
        </div>
      </div>
    </footer>);

}