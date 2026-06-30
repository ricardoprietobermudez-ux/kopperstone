import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

const kitchenPaths = [
  { key: 'kitchens', path: '/kitchens' },
  { key: 'countertops', path: '/countertops' },
  { key: 'cabinetDoors', path: '/cabinet-doors' },
  { key: 'sinks', path: '/kitchen-sinks' },
  { key: 'faucetsKitchen', path: '/kitchen-faucets' },
];

const bathroomPaths = [
  { key: 'sinks', path: '/bathroom-sinks' },
  { key: 'vanities', path: '/vanities' },
  { key: 'bathtubs', path: '/bathtubs' },
  { key: 'faucetsBath', path: '/bathroom-faucets' },
];

const mainPaths = [
  { key: 'process', path: '/process' },
  { key: 'about', path: '/about' },
];

const toolPaths = [
  { label: 'Design Configurator', path: '/configurator' },
  { label: 'Timeline Estimator', path: '/timeline-estimator' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMega(null); setMobileOpen(false); setContactModal(false); }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/98 shadow-lg' : 'bg-navy'}`}
        style={{ top: 'var(--announcement-height, 0)' }}
        onMouseLeave={() => setMega(null)}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 mr-10">
            <div>
              <span className="font-serif text-xl text-cream tracking-wide">Kopperstone</span>
              <span className="block text-[9px] font-sans text-gold/70 tracking-widest uppercase mt-0">Developer Supply Partner</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 flex-1">
            {/* Collections mega trigger */}
            <button
              onMouseEnter={() => setMega('kitchens')}
              onClick={() => setMega(mega === 'kitchens' ? null : 'kitchens')}
              className={`flex items-center gap-1 px-3 py-2 text-[11px] font-sans tracking-wide uppercase transition-colors ${mega === 'kitchens' ? 'text-gold' : 'text-cream/70 hover:text-cream'}`}
            >
              {t('nav.kitchens').split(' ')[0]} <ChevronDown className={`w-3 h-3 transition-transform ${mega === 'kitchens' ? 'rotate-180 text-gold' : ''}`} />
            </button>
            <button
              onMouseEnter={() => setMega('bathrooms')}
              onClick={() => setMega(mega === 'bathrooms' ? null : 'bathrooms')}
              className={`flex items-center gap-1 px-3 py-2 text-[11px] font-sans tracking-wide uppercase transition-colors ${mega === 'bathrooms' ? 'text-gold' : 'text-cream/70 hover:text-cream'}`}
            >
              {t('nav.bathrooms').split(' ')[0]} <ChevronDown className={`w-3 h-3 transition-transform ${mega === 'bathrooms' ? 'rotate-180 text-gold' : ''}`} />
            </button>

            {mainPaths.map(l => (
              <Link key={l.path} to={l.path} className="px-3 py-2 text-[11px] font-sans tracking-wide uppercase text-cream/70 hover:text-cream transition-colors">
                {t(`nav.${l.key}`)}
              </Link>
            ))}
            <div className="w-px h-4 bg-cream/10 mx-1" />
            {toolPaths.map(l => (
              <Link key={l.path} to={l.path} className="px-3 py-2 text-[11px] font-sans tracking-wide uppercase text-gold/70 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-cream/10 mx-1" />
            <Link to="/trade" className="px-3 py-2 text-[11px] font-sans tracking-wide uppercase text-cream/40 hover:text-cream transition-colors">
              {t('trade.nav.forDevelopers')}
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <div className="flex gap-1">
              {['en','es','fr'].map(l => (
                <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-sans uppercase px-1.5 py-0.5 transition-colors ${lang === l ? 'text-gold' : 'text-cream/40 hover:text-cream/70'}`}>
                  {l}
                </button>
              ))}
            </div>
            <div className="w-px h-4 bg-cream/10" />
            <button onClick={() => setContactModal(true)} className="bg-gold text-navy text-[11px] font-sans tracking-wide uppercase px-5 py-2 hover:bg-gold/90 transition-colors">
              Get in Touch
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden ml-auto text-cream/70" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mega menu */}
        {mega && (
          <div className="hidden lg:block absolute top-full left-0 right-0 bg-navy border-t border-cream/10 shadow-2xl z-50">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[9px] font-sans tracking-widest uppercase text-gold mb-4">{t('nav.kitchens').split(' ')[0]}</p>
                {kitchenPaths.map(l => (
                  <Link key={l.path} to={l.path} className="block py-2 text-sm font-sans text-cream/60 hover:text-gold transition-colors border-b border-cream/5 last:border-0">
                    {t(`nav.${l.key}`)}
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-[9px] font-sans tracking-widest uppercase text-gold mb-4">{t('nav.bathrooms').split(' ')[0]}</p>
                {bathroomPaths.map(l => (
                  <Link key={l.path} to={l.path} className="block py-2 text-sm font-sans text-cream/60 hover:text-gold transition-colors border-b border-cream/5 last:border-0">
                    {t(`nav.${l.key}`)}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        )}
      </nav>

      {/* Contact modal */}
      <AnimatePresence>
        {contactModal && <ContactModal onClose={() => setContactModal(false)} />}
      </AnimatePresence>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy pt-16 overflow-y-auto lg:hidden">
          <div className="p-6 space-y-1">
            <p className="text-[9px] text-gold tracking-widest uppercase mb-3">{t('nav.kitchens').split(' ')[0]}</p>
            {kitchenPaths.map(l => (
              <Link key={l.path} to={l.path} className="block py-2.5 text-sm text-cream/70 border-b border-cream/5">{t(`nav.${l.key}`)}</Link>
            ))}

            <p className="text-[9px] text-gold tracking-widest uppercase mb-3 pt-5">{t('nav.bathrooms').split(' ')[0]}</p>
            {bathroomPaths.map(l => (
              <Link key={l.path} to={l.path} className="block py-2.5 text-sm text-cream/70 border-b border-cream/5">{t(`nav.${l.key}`)}</Link>
            ))}
            <p className="text-[9px] text-gold tracking-widest uppercase mb-3 pt-5">Company</p>
            {mainPaths.map(l => (
              <Link key={l.path} to={l.path} className="block py-2.5 text-sm text-cream/70 border-b border-cream/5">{t(`nav.${l.key}`)}</Link>
            ))}
            <p className="text-[9px] text-gold tracking-widest uppercase mb-3 pt-5">Tools</p>
            {toolPaths.map(l => (
              <Link key={l.path} to={l.path} className="block py-2.5 text-sm text-gold/70 border-b border-cream/5">{l.label}</Link>
            ))}
            <Link to="/trade" className="block py-2.5 text-sm text-cream/40 hover:text-cream border-b border-cream/5">{t('trade.nav.forDevelopers')}</Link>
            <div className="pt-6">
              <button onClick={() => setMobileOpen(false) || setContactModal(true)} className="block w-full text-center bg-gold text-navy text-sm font-sans tracking-wide uppercase px-6 py-3">
                Get in Touch
              </button>
            </div>
            <div className="flex gap-3 pt-4">
              {['en','es','fr'].map(l => (
                <button key={l} onClick={() => setLang(l)} className={`text-xs uppercase ${lang === l ? 'text-gold' : 'text-cream/40'}`}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}