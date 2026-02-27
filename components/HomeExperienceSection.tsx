'use client';

import { useTranslations } from 'next-intl';

export function HomeExperienceSection() {
  const t = useTranslations('homeExperience');

  return (
    <section className="bg-brand-beige/30 border-y border-brand-primary/10 py-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-primary/60 mb-2">
            {t('nature.eyebrow')}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-brand-primary mb-3">
            {t('nature.title')}
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/60 mb-6">
            {t('nature.subtitle')}
          </p>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-primary/90">
            <p>{t('nature.p1')}</p>
            <p>{t('nature.p2')}</p>
            <p>{t('nature.p3')}</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-primary/60 mb-2">
            {t('aviation.eyebrow')}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-brand-primary mb-3">
            {t('aviation.title')}
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/60 mb-6">
            {t('aviation.subtitle')}
          </p>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-primary/90">
            <p>{t('aviation.p1')}</p>
            <p>{t('aviation.p2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

