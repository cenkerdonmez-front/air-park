import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, Plane } from 'lucide-react';

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

      {/* Air / By plane - same style as Google Maps section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl text-brand-primary mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6" />
            {t('transportByPlane')}
          </h2>
          <p className="text-brand-primary/80 mb-6">
            {t('transportByPlaneDescription')}
          </p>
          <div className="rounded-2xl overflow-hidden border border-brand-primary/10 shadow-lg bg-brand-beige/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] min-h-[240px] bg-brand-beige/30">
                <Image
                  src="/harita_shm_tr.jpg.webp"
                  alt={t('planeSectionTitle')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h4 className="font-display text-lg font-semibold text-brand-primary tracking-wide mb-4">
                  {t('planeSectionTitle')}
                </h4>
                <div className="space-y-2 text-sm text-brand-primary/90">
                  <p><span className="font-semibold">{t('shmCoordinates')}</span><br />{t('shmCoordinatesValue')}</p>
                  <p><span className="font-semibold">{t('tower')}</span><br />{t('towerValue')}</p>
                  <p><span className="font-semibold">{t('runwayHeadings')}</span><br />{t('runwayHeadingsValue')}</p>
                  <p><span className="font-semibold">{t('runwayLength')}</span><br />{t('runwayLengthValue')}</p>
                  <p><span className="font-semibold">{t('elevation')}</span><br />{t('elevationValue')}</p>
                  <p><span className="font-semibold">{t('operatingHours')}</span><br /><span className="whitespace-pre-line">{t('operatingHoursValue')}</span></p>
                </div>
              </div>
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
      <section className="py-12 px-6 border-t border-brand-primary/10">
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
