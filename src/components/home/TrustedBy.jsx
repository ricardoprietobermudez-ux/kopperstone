import React from 'react';
import { useLanguage } from '@/lib/i18n';

const logos = [
  'Meridian Hotel Group', 'Atlas Properties', 'Pacific Rim Developments',
  'Summit Residential', 'Cornerstone Hospitality', 'NorthPoint Capital',
  'Granite Bay Group', 'Elevation Partners',
];

export default function TrustedBy() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy border-y border-cream/8 py-14">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-center text-[9px] font-sans tracking-widest uppercase text-cream/25 mb-10">
          {t('trusted.overline')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5">
          {logos.map(name => (
            <span key={name} className="font-serif text-base text-cream/15 tracking-wide select-none">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}