import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { RoomsSection } from '@/components/RoomsSection';
import { SustainabilitySection } from '@/components/SustainabilitySection';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <Hero />
      <RoomsSection />
      <SustainabilitySection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
