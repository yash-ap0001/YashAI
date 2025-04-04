import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
    document.title = 'YashAI | Intelligent Software Solutions';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YashAI provides cutting-edge artificial intelligence software and solutions for enterprise clients seeking innovation and digital transformation.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
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
