import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { HomeExperienceSection } from '@/components/HomeExperienceSection';
import { GallerySection } from '@/components/GallerySection';
import { RoomsSection } from '@/components/RoomsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <HomeExperienceSection />
      <GallerySection />
      <RoomsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
