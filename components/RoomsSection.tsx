'use client';

import { useTranslations } from 'next-intl';
import { RoomCard } from './RoomCard';
import Link from 'next/link';

const rooms = [
  {
    key: 'deluxeTwinGarden',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqf75sK-cb6jo5KtIYM6g0zFLmSWed-L0x36A1nvpGiSHMlR3swSjCtSC0IRmEdoUPasRlWH90GOtKZqUw9lVUrsnktUwhwzvfbJ2DAOcPoYK5jIpjHQaveA6YesvqJzaQz2LuNNLqzvtSk4JEMmZwyc24WmhEouWDgebW9DNcX1yIijfyoT948C2uXqsXjxbXBNu1YfgPnkHxvNbjp_USZyyrw6cTOYjLe0TtQnKG2QH8cLCjrrLS9JnHByG7-igZqIApab3erfE',
    size: 35
  },
  {
    key: 'deluxeFrenchGarden',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUn51CCuRh-eC4ypqG-W3HMEy3ygBUhpnwTsF2a1OLFSU0Ps1JEQ0AfKlPz4K1oW5M4CgS6akDcOYnP4Cp3iGAmnEbCDExv7vN-cHkU_aV0QkpADfu6Vm_jXvHHSnUN6R2HuCtIi0ksaANHyCfl-zEFIfa9544Mmlu6tDpqabB-vMQIP-kW0tig-b2KFKjg15PMT-xZTImbkyGeMkCes0Bo3GEq7GZQilzaM2c3fDeJkDWai5ds9z-sEXLfld9_XeHUYyPrJkX2uc',
    size: 35
  },
  {
    key: 'deluxeFrenchCity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA99bJCgrzHnt8f7pdiulkZGRaxcYxfKPibvqMcQSSf92lzXsnsPquKMTdYPD1hq89T-PIBR5X0xw_MLJ3PjFpiz9YU66OByCgLlfJec8FLI7Ei8kwfNKSFPNF8kJjjRhKMXRfH2ScaSkKc2GWRNv9Mk5eoTKIkN6X8524g34rGOjC1g2hYSOWYFmX4fVdCzO1v4BeZ329kcVfk6h419GwFdPeNePyZfwB6jG_sCxLzKiAgLGgzSE9J_5nJNg4kp0wv_qAqSR_2_Zs',
    size: 35
  }
];

export function RoomsSection() {
  const t = useTranslations('rooms');

  return (
    <section className="py-16" id="rooms">
      <div className="max-w-full mx-auto px-6 mb-8 flex items-baseline justify-between border-b border-[#015C54]/10 pb-4">
        <div>
          <h2 className="text-2xl font-extrabold text-[#015C54] tracking-tight">
            {t('title')}
          </h2>
          <span className="text-[#015C54]/60 font-semibold tracking-wider uppercase text-[10px]">
            {t('subtitle')}
          </span>
        </div>
        <Link className="text-[11px] font-bold text-[#015C54] uppercase underline hover:opacity-80 transition-opacity" href="#">
          {t('viewAll')}
        </Link>
      </div>
      <div className="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard
            key={room.key}
            name={t(`${room.key}.name`)}
            category={t(`${room.key}.category`)}
            description={t(`${room.key}.description`)}
            image={room.image}
            size={room.size}
          />
        ))}
      </div>
    </section>
  );
}
