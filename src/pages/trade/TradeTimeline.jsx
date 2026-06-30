import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

export default function TradeTimeline() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-navy min-h-[50vh] flex items-end py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <Link to="/trade" className="text-xs text-cream/40 hover:text-cream font-sans tracking-widest uppercase mb-6 block transition-colors">
            ← {t('trade.nav.forDevelopers')}
          </Link>
          <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold mb-4">
            — {t('trade.timeline.label')}
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-cream mt-2">{t('trade.timeline.title')}</h1>
          <p className="text-cream/60 mt-4 max-w-xl">{t('trade.timeline.sub')}</p>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="border border-dashed border-warm-300 p-12 text-center max-w-2xl mx-auto mb-12">
            <p className="font-serif text-2xl text-navy mb-3">Coming Soon</p>
            <p className="text-sm text-warm-500 leading-relaxed">{t('trade.timeline.placeholder')}</p>
          </div>
          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-gold text-navy text-sm font-sans tracking-wide uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
              {t('trade.timeline.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
