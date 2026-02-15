import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, PlaneLanding } from 'lucide-react';

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Sivrihisar+Havac%C4%B1l%C4%B1k+Merkezi,+Ye%C5%9Filk%C3%B6y,+26600+Sivrihisar/Eski%C5%9Fehir&output=embed';
const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir//Sivrihisar+Havac%C4%B1l%C4%B1k+Merkezi,+Ye%C5%9Filk%C3%B6y,+26600+Sivrihisar/Eski%C5%9Fehir';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const tFooter = useTranslations('footer');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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

      {/* Havadan Ulaşım */}
      <section id="transport" className="mb-24 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-brand-primary mb-8 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-brand-primary rounded-full" />
            {t('planeSectionTitle')} Ulaşım
          </h2>

          <div className="bg-brand-primary rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-700">
              <PlaneLanding className="w-40 h-40 text-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase mb-2">
                    {t('shmCoordinates')}
                  </h4>
                  <p className="text-2xl font-black text-white font-mono">{t('shmCoordN')}</p>
                  <p className="text-2xl font-black text-white font-mono">{t('shmCoordE')}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase mb-2">
                    {t('tower')}
                  </h4>
                  <p className="text-3xl font-black text-brand-beige">{t('towerValue')}</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase mb-2">
                    {t('elevation')}
                  </h4>
                  <p className="text-2xl font-black text-white">{t('elevationValue')}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase mb-2">
                      {t('runwayHeadings')}
                    </h4>
                    <p className="text-2xl font-black text-white">{t('runwayHeadingsValue')}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase mb-2">
                      {t('runwayLength')}
                    </h4>
                    <p className="text-xl font-black text-white leading-tight">
                      {t('runwayLengthWithSurface')}
                      <span className="text-xs text-brand-beige block uppercase mt-0.5">{t('runwaySurface')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center border-t border-white/10 pt-10 relative z-10">
              <p className="text-white text-center text-sm md:text-base font-medium leading-relaxed max-w-2xl mb-4">
                {t('planeNotice')}
              </p>
              <p className="text-white/60 text-center text-sm md:text-base font-medium mb-8">
                {t('planeDisplayDirector')}{' '}
                <a href="mailto:aysan@mach.aero" className="text-brand-beige font-bold hover:underline">
                  aysan@mach.aero
                </a>
              </p>
              <a
                href="https://shm.aero/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-primary font-black py-4 px-10 rounded-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl text-center uppercase tracking-widest text-sm"
              >
                {t('shmWebsite')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl text-brand-primary mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            {t('mapTitle')}
          </h2>
          <div className="rounded-2xl overflow-hidden border border-brand-primary/10 shadow-lg relative bg-brand-beige/20">
            <div className="relative w-full aspect-[16/10] min-h-[280px]">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('mapTitle')}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
            >
              {t('openInGoogleMaps')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact info at bottom of page */}
      <section id="contact" className="py-12 px-6 border-t border-brand-primary/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-xl text-brand-primary mb-4">
            {tFooter('contact.title')}
          </h2>
          <p className="text-brand-primary/80">
            {tFooter('contact.phone')} · {tFooter('contact.email')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
