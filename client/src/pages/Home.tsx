import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

const Home = () => {
  // Initialize scroll reveal effect
  useScrollReveal();

  useEffect(() => {
    // Set document title
    document.title = 'YashAI Technologies | AI Software Startup, Hyderabad';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YashAI Technologies is a Hyderabad AI software startup, founded in 2025, building AI video generation and AI assistant tools for small businesses.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
