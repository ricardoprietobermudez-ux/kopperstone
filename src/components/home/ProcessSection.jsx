import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const { t } = useLanguage();
  const steps = t('process.steps');

  return (
    <section className="bg-navy py-28 border-t border-cream/10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="gold-overline mb-5">{t('process.overline').replace('—— ', '')}</div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
              {t('process.headline1')}<br />
              <em className="text-gold italic">{t('process.headline2')}</em>
            </h2>
          </div>
          <Link to="/process" className="inline-flex items-center gap-2 text-gold text-sm font-sans tracking-wide uppercase hover:text-gold/70 transition-colors group whitespace-nowrap">
            View Full Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gold/20" />

          {Array.isArray(steps) && steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4 relative"
            >
              {/* Number + label */}
              <div className="relative z-10 flex items-baseline gap-1 mb-6">
                <span className="font-serif text-4xl text-cream">{step.num}</span>
                <span className="text-[9px] font-sans tracking-widest uppercase text-warm-grey">{['DISCOVERY','DESIGN','REVIEW','PRODUCTION','CLOSE'][i]}</span>
              </div>
              <h3 className="font-serif text-base text-cream mb-3 italic text-gold">{step.title}</h3>
              <p className="text-cream/40 text-xs leading-relaxed font-sans">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}