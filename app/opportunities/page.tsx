import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function OpportunitiesPage() {
  const t = useTranslations('opportunitiesPage');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative min-h-[260px] bg-linear-to-br from-brand-beige to-brand-beige/80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-brand-primary/60 text-sm font-semibold tracking-widest uppercase mb-4">
              {t('subtitle')}
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-brand-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-brand-primary/80 text-base md:text-lg max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-brand-primary/90 leading-relaxed">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <p>{t('paragraph3')}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

