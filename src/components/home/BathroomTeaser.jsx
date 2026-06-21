import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IMG = 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=85';

export default function BathroomTeaser() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
          
          <img src="https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/f94f43c59_generated_2c63c2a9.png" alt="Bathroom collection" className="w-full h-full object-cover opacity-70" />
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-10 lg:px-20 py-20 order-1 lg:order-2">
          
          <div className="w-12 h-px bg-gold mb-4" />
          <span className="text-[10px] font-sans tracking-widest uppercase text-gold/80 mb-6">{t('bathroomTeaser.overline').replace('—— ', '')}</span>
          <h2 className="font-serif text-5xl lg:text-6xl text-cream tracking-tight leading-tight">
            {t('bathroomTeaser.headline1')}<br />
            <em className="text-gold italic">{t('bathroomTeaser.headline2')}</em>
          </h2>
          <p className="mt-6 text-cream/50 text-base leading-relaxed font-sans max-w-sm">{t('bathroomTeaser.body')}</p>
          <Link
            to="/bathrooms"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 mt-8 text-gold text-sm font-sans tracking-wide uppercase hover:text-gold/80 transition-colors group">
            
            {t('bathroomTeaser.cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>);

}