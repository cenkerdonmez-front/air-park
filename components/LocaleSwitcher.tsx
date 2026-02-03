'use client';

import { useLocale } from 'next-intl';
import { setLocale } from '@/app/actions/locale';
import { useTransition } from 'react';

export function LocaleSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(async () => {
      await setLocale(newLocale);
      window.location.reload();
    });
  };

  return (
    <div className="hidden sm:flex border border-[#015C54]/20 rounded-md overflow-hidden text-[10px] font-bold">
      <button
        onClick={() => handleLocaleChange('tr')}
        disabled={isPending}
        className={`px-2 py-1 transition-colors ${
          locale === 'tr'
            ? 'bg-[#015C54] text-white'
            : 'text-[#015C54] hover:bg-[#015C54]/10'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => handleLocaleChange('en')}
        disabled={isPending}
        className={`px-2 py-1 transition-colors ${
          locale === 'en'
            ? 'bg-[#015C54] text-white'
            : 'text-[#015C54] hover:bg-[#015C54]/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}
