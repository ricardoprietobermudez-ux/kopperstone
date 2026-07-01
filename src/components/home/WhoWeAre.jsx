import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy py-0">
      {/* Main two-column block */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-[10px] font-sans tracking-widest uppercase text-gold">{t('who.overline')}</span>
              <span className="text-[10px] font-sans tracking-widest text-cream/30">{t('who.number')}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl text-cream leading-tight tracking-tight">
              {t('who.headline1')}<br />
              {t('who.headline2')}<br />
              {t('who.headline3')}<em className="text-gold italic">{t('who.headline4')}</em>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:pt-24">
            <p className="text-cream/60 text-base leading-relaxed font-sans">{t('who.body1')}</p>
            
          </motion.div>
        </div>
      </div>

      {/* Three pillar strip */}
      <div className="border-t border-cream/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream/10">
            {[
            { numKey: 'pillars.i', titleKey: 'pillars.title1', descKey: 'pillars.desc1' },
            { numKey: 'pillars.ii', titleKey: 'pillars.title2', descKey: 'pillars.desc2' },
            { numKey: 'pillars.iii', titleKey: 'pillars.title3', descKey: 'pillars.desc3' }].
            map(({ numKey, titleKey, descKey }) =>
            <div key={titleKey} className="py-10 px-8">
                <span className="font-serif text-sm text-gold/50 italic">{t(numKey)}</span>
                <h3 className="font-serif text-xl text-cream mt-2 mb-3">{t(titleKey)}</h3>
                <p className="text-cream/40 text-sm leading-relaxed font-sans">{t(descKey)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}