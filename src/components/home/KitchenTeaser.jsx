import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IMG = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85';

export default function KitchenTeaser() {
  const { t } = useLanguage();
  return (
    <section className="bg-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-10 lg:px-20 py-20">
          
          <div className="w-12 h-px bg-gold mb-4" />
          <span className="text-[10px] font-sans tracking-widest uppercase text-gold/80 mb-6">{t('kitchenTeaser.overline').replace('—— ', '')}</span>
          <h2 className="font-serif text-5xl lg:text-6xl text-navy tracking-tight leading-tight">
            {t('kitchenTeaser.headline1')}<br />
            <em className="text-gold italic">{t('kitchenTeaser.headline2')}</em>
          </h2>
          <p className="mt-6 text-warm-grey text-base leading-relaxed font-sans max-w-sm">{t('kitchenTeaser.body')}</p>
          <Link
            to="/kitchens"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 mt-8 text-navy text-sm font-sans tracking-wide uppercase hover:text-gold transition-colors group">
            
            {t('kitchenTeaser.cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right image — bleeding off edge */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[400px] lg:min-h-0">
          
          <img src="/images/1097cd802_generated_82db1fdd.png" alt="Kitchen collection" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>);

}