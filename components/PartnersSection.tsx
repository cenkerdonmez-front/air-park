'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const PARTNER_CARDS = [
  { key: 'mso', logo: '/logos/mso_logo.png', title: 'M.S.Ö. Hava ve Uzay Müzesi', url: 'https://msomuseum.com/' },
  { key: 'shm', logo: '/logos/SHM.png', title: 'Sivrihisar Havacılık Merkezi', url: 'https://shm.aero/' },
  { key: 'lokantaSenan', logo: '/logos/lokanta_senan.png', title: 'Lokanta Senan', url: 'https://www.lokantasenan.com/' },
] as const;

export function PartnersSection() {
  const t = useTranslations('partners');

  return (
    <section className="bg-white py-16 border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNER_CARDS.map(({ key, logo, title, url }) => (
            <Card
              key={key}
              className="border-brand-primary/10 overflow-hidden flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <CardHeader className="w-full flex flex-col items-center pt-8 pb-2">
                <div className="relative w-32 h-32 min-h-32 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={title}
                    width={128}
                    height={128}
                    className="object-contain w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4 pb-8 pt-0">
                <h3 className="text-xl font-semibold text-brand-primary">
                  {title}
                </h3>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
                >
                  {t(`cards.${key}.linkLabel`)}
                  <ExternalLink className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
