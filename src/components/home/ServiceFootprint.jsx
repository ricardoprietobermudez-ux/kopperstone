import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const TORONTO_IMG = '/images/3e3c333d1_generated_image.png';

export default function ServiceFootprint() {
  const { t } = useLanguage();
  return (
    <section className="bg-obsidian py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left image */}
          <div className="relative">
            <img src={TORONTO_IMG} alt="Toronto headquarters" className="w-full aspect-[4/3] object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/20 to-transparent" />
          </div>

          {/* Right text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-copper" />
              <span className="text-[10px] font-sans tracking-widest uppercase text-copper">04 — Footprint</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-limestone tracking-tight">{t('footprint.title')}</h2>
            <p className="mt-4 text-limestone/45 text-sm leading-relaxed max-w-lg">{t('footprint.subtitle')}</p>

            <div className="mt-12 space-y-8">
              {[
                { k: 'canada', dK: 'canadaDesc', email: 'info@kopperstone.com' },
                { k: 'us',     dK: 'usDesc',     email: 'us@kopperstone.com' },
                { k: 'latam',  dK: 'latamDesc',  email: 'latam@kopperstone.com' },
              ].map(({ k, dK, email }) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <MapPin className="w-4 h-4 text-copper flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-sans font-semibold text-limestone">{t(`footprint.${k}`)}</p>
                    <p className="text-sm text-limestone/40 mt-1 leading-relaxed">{t(`footprint.${dK}`)}</p>
                    <p className="text-xs text-copper/60 mt-1">{email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}