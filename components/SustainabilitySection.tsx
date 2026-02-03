'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function SustainabilitySection() {
  const t = useTranslations('sustainability');

  return (
    <section className="bg-white py-16 border-y border-[#015C54]/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image
          alt="Sustainability items"
          className="w-full h-auto object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHq2oEr1lk_Fp66cbe6Zf6wZbx_T-KSNuL8s3lx-fr7PpNpgOPKSdBxPtiXN3_v1kReZWv8MrIrFbSh-uDr-HlJ5aOjhFb-NrZJ03QFQOaa6llnM70v41pk1kEWNlEpqqpfpmfOB1VXwFHxwc1ll-gjDii7wYkGE6aPMx-oUsKUeqmx_8Tmk16YaFk9AtbO6iWsl9PMIFwQMee4blJRfALlgg647ek5Q2Cgukx0p-vL-Aw3KrmiFAkIput5Q752DcGGDr03EDL78A"
          width={600}
          height={400}
        />
        <div>
          <span className="text-[#015C54]/60 font-bold tracking-wider uppercase text-[10px] mb-2 block">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl font-extrabold text-[#015C54] mb-6">
            {t('title')}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {t('description')}
          </p>
          <Button className="bg-[#015C54] text-white hover:bg-[#015C54]/90 px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-sm">
            {t('cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
