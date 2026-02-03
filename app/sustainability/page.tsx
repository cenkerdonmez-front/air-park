import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function SustainabilityPage() {
  const t = useTranslations('sustainability');

  const initiatives = [
    { key: 'energy', icon: '⚡' },
    { key: 'water', icon: '💧' },
    { key: 'waste', icon: '♻️' },
    { key: 'local', icon: '🌱' },
    { key: 'green', icon: '🌳' },
    { key: 'materials', icon: '🏗️' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation  />
      
      {/* Hero Section */}
      <section className="relative min-h-[300px] bg-gradient-to-br from-brand-beige to-brand-beige/80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-brand-primary/60 text-sm font-semibold tracking-widest uppercase mb-4">
              {t('subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-brand-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-brand-primary/80 text-lg md:text-xl max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-12">
            {t('initiativesTitle')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-brand-beige/20 p-8 rounded-lg hover:bg-brand-beige/40 transition-colors"
              >
                <div className="text-5xl mb-4">{initiative.icon}</div>
                <h3 className="font-semibold text-xl text-brand-primary mb-3">
                  {t(`initiatives.${initiative.key}.title`)}
                </h3>
                <p className="text-brand-primary/70">
                  {t(`initiatives.${initiative.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-10 bg-brand-beige/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-8">
            {t('commitmentTitle')}
          </h2>
          <div className="prose prose-lg mx-auto text-brand-primary/80">
            <p className="text-center mb-6">
              {t('commitment.paragraph1')}
            </p>
            <p className="text-center mb-6">
              {t('commitment.paragraph2')}
            </p>
            <p className="text-center">
              {t('commitment.paragraph3')}
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] bg-brand-beige rounded-lg"></div>
            <div className="aspect-[4/3] bg-brand-beige rounded-lg"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
