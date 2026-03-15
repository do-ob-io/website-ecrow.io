import { Navigation, Footer } from '@/components';

import {
  HeroSection,
  ServicesSection,
  FeaturesSection,
  AboutSection,
  ContactSection,
} from './sections';

/**
 * Home page component for the eCrow website.
 *
 * @returns The home page element.
 */
export default function HomePage() {
  return (
    <div className="bg-noise min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
