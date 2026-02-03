'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
  const t = useTranslations();

  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-[#015C54]/10">
      <div className="max-w-full mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link className="flex items-center" href="#">
            <Image 
              src="/AirParkHotel_Logo_RGB.png" 
              alt="AirPark Hotel Logo" 
              width={180} 
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-wider text-[#015C54]/80">
            <Link className="hover:text-[#015C54] transition-colors" href="#rooms">
              {t('nav.rooms')}
            </Link>
            <Link className="hover:text-[#015C54] transition-colors" href="#">
              {t('nav.restaurant')}
            </Link>
            <Link className="hover:text-[#015C54] transition-colors" href="#">
              {t('nav.spa')}
            </Link>
            <Link className="hover:text-[#015C54] transition-colors" href="#">
              {t('nav.wedding')}
            </Link>
            <Link className="hover:text-[#015C54] transition-colors" href="#">
              {t('nav.meeting')}
            </Link>
            <Link className="hover:text-[#015C54] transition-colors" href="#">
              {t('nav.sustainability')}
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <LocaleSwitcher />
          <Button 
            className="bg-[#015C54] hover:bg-[#015C54]/90 text-white px-5 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider"
          >
            {t('nav.reservation')}
          </Button>
        </div>
      </div>
    </nav>
  );
}
