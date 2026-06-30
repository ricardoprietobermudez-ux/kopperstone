import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

function ValueCard({ title, body }) {
  return (
    <div className="border border-white/10 p-8">
      <h3 className="font-serif text-xl text-cream mb-3">{title}</h3>
      <p className="text-sm text-cream/50 leading-relaxed">{body}</p>
    </div>
  );
}

export default function TradeHome() {
  const { t } = useLanguage();
  const videoRef = useRef(null);

  function handleVideoLoad() {
    if (videoRef.current) {
      videoRef.current.currentTime = 2;
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={handleVideoLoad}
            className="w-full h-full object-cover opacity-55"
          >
            <source src="/video_2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/65 to-navy/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-navy via-navy/40 to-transparent" />
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gold/20" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
          <div className="max-w-2xl">
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold mb-6">
              — {t('trade.hero.label')}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-tight mb-6">
              {t('trade.hero.title')}
            </h1>
            <p className="text-cream/60 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              {t('trade.hero.sub')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center bg-gold text-navy text-sm font-sans tracking-wide uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
                {t('trade.cta.btn')}
              </Link>
              <Link to="/trade/process" className="inline-flex items-center justify-center border border-cream/30 text-cream text-sm font-sans tracking-wide uppercase px-8 py-4 hover:bg-cream/10 transition-colors">
                {t('trade.hero.cta_secondary')}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 py-3 bg-white/5 border-t border-white/10 text-center">
          <p className="text-xs text-cream/40 font-sans">
            Renovating your home?{' '}
            <Link to="/" className="text-gold/70 hover:text-gold underline-offset-2 hover:underline transition-colors">
              {t('trade.nav.backToHome')} →
            </Link>
          </p>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold mb-4">
            — {t('trade.values.label')}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-12 max-w-xl">
            Built for volume. Managed from spec to site.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard title={t('trade.values.v1_title')} body={t('trade.values.v1_body')} />
            <ValueCard title={t('trade.values.v2_title')} body={t('trade.values.v2_body')} />
            <ValueCard title={t('trade.values.v3_title')} body={t('trade.values.v3_body')} />
            <ValueCard title={t('trade.values.v4_title')} body={t('trade.values.v4_body')} />
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold mb-4">
            — {t('trade.process.label')}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-10">{t('trade.process.title')}</h2>
          <div className="border border-dashed border-warm-300 p-10 text-center max-w-2xl mb-10">
            <p className="text-sm text-warm-500 leading-relaxed">{t('trade.process.placeholder')}</p>
          </div>
          <Link to="/trade/process" className="inline-flex items-center justify-center border border-navy text-navy text-sm font-sans tracking-wide uppercase px-8 py-4 hover:bg-navy hover:text-cream transition-colors">
            {t('trade.process.cta')}
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4">{t('trade.cta.title')}</h2>
          <p className="text-cream/50 mb-8 max-w-lg mx-auto">{t('trade.cta.sub')}</p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-gold text-navy text-sm font-sans tracking-wide uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
            {t('trade.cta.btn')}
          </Link>
        </div>
      </section>
    </>
  );
}
