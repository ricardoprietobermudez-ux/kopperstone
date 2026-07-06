import React from 'react';
import Hero from '@/components/home/Hero';
import WhoWeAre from '@/components/home/WhoWeAre';
import KitchenTeaser from '@/components/home/KitchenTeaser';
import ProcessSection from '@/components/home/ProcessSection';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <KitchenTeaser />
      <WhoWeAre />
      <ProcessSection />

      <CtaSection />
    </div>
  );
}