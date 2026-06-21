import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const BG = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80';

export default function CtaSection() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-navy py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold/40" />
            <span className="text-[9px] font-sans tracking-widest uppercase text-gold">Get Started</span>
            <div className="w-12 h-px bg-gold/40" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-cream tracking-tight max-w-2xl mx-auto leading-tight">
            {t('cta.headline')}
          </h2>
          <p className="mt-6 text-cream/40 text-base max-w-md mx-auto leading-relaxed">
            {t('cta.sub')}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-4 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
              {t('cta.primary')} <ArrowRight className="w-4 h-4" />
            </Link>
            

            
          </div>
        </motion.div>
      </div>
    </section>);

}