import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-navy">

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 pb-24 pt-40">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="gold-overline mb-8">{t('hero.tag')}</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.02] tracking-tight">
            
            {t('hero.headline1')}<br />
            <em className="text-gold not-italic">{t('hero.headline2')}</em><br />
            {t('hero.headline3')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 text-cream/50 text-base leading-relaxed max-w-lg font-sans">
            
            {t('hero.sub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4">
            
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-gold text-navy px-8 py-4 text-sm font-sans tracking-wide uppercase hover:bg-gold/90 transition-colors">
              {t('hero.cta')} <ArrowRight className="w-4 h-4" />
            </Link>
            

            
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="w-px h-14 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>);

}