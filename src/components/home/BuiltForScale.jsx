import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Ship, Tag, TrendingDown, Clock, Users } from 'lucide-react';

const LOGISTICS_IMG = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/badec9e3b_generated_image.png';

const caps = [
  { k: 'sourcing',     descK: 'sourcingDesc',    Icon: Ship },
  { k: 'privateLabel', descK: 'privateLabelDesc', Icon: Tag },
  { k: 'volume',       descK: 'volumeDesc',       Icon: TrendingDown },
  { k: 'leadTimes',    descK: 'leadTimesDesc',    Icon: Clock },
  { k: 'pm',           descK: 'pmDesc',           Icon: Users },
];

export default function BuiltForScale() {
  const { t } = useLanguage();
  return (
    <section className="bg-obsidian py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-copper" />
              <span className="text-[10px] font-sans tracking-widest uppercase text-copper">02 — Capabilities</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-limestone leading-tight tracking-tight">
              {t('scale.title')}
            </h2>
            <p className="mt-6 text-limestone/45 text-base leading-relaxed max-w-lg">{t('scale.subtitle')}</p>
            <div className="mt-12 relative">
              <img src={LOGISTICS_IMG} alt="Shipping and logistics" className="w-full aspect-video object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10 lg:pt-20">
            {caps.map(({ k, descK, Icon }, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-9 h-9 border border-copper/25 flex items-center justify-center mt-0.5">
                  <Icon className="w-3.5 h-3.5 text-copper" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-limestone uppercase tracking-wide">{t(`scale.${k}`)}</h3>
                  <p className="mt-1.5 text-limestone/40 text-sm leading-relaxed">{t(`scale.${descK}`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}