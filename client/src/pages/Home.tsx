import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientsSection from '@/components/ClientsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

const Home = () => {
  // Initialize scroll reveal effect
  useScrollReveal();

  useEffect(() => {
    // Set document title
    document.title = 'YashAI Solutions | AI Software and Solutions';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YashAI Solutions provides cutting-edge AI software and solutions for enterprise clients seeking innovation and digital transformation.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
