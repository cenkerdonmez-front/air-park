import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { HomeExperienceSection } from '@/components/HomeExperienceSection';
import { RoomsSection } from '@/components/RoomsSection';
import { GallerySection } from '@/components/GallerySection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <Hero />
      <RoomsSection />
      <HomeExperienceSection />
      <GallerySection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
