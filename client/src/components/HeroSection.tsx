import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { useCursor } from '@/contexts/CursorContext';

const HeroSection = () => {
  const { setIsHovering } = useCursor();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      
      // Calculate relative mouse position within the section
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Subtle parallax effect on background elements
      const heroImage = document.querySelector('.hero-image');
      const infoCards = document.querySelectorAll('.info-card');
      
      if (heroImage) {
        (heroImage as HTMLElement).style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
      
      infoCards.forEach((card, index) => {
        const factor = index % 2 === 0 ? 1 : -1;
        (card as HTMLElement).style.transform = `translate(${x * factor * 15}px, ${y * factor * 15}px)`;
      });
    };

    const currentRef = sectionRef.current;
    
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen relative flex items-center overflow-hidden bg-[#0F172A] pt-20"
    >
      {/* Background with large globe element at bottom */}
      <div className="absolute bottom-0 right-0 w-full h-[70%] overflow-hidden">
        <img 
          src="https://storage.googleapis.com/msgsndr/UyloUwxMBzNexj0K7pcZ/media/6464a5e2b76bf86a7ffd5ee9.png" 
          alt="Digital Globe" 
          className="object-cover absolute bottom-0 w-full"
        />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-teal-900/30 text-teal-400 text-sm font-semibold mb-6">
                AI-Powered Solutions
              </span>
            </div>
            <h1 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Business With 
              <span className="text-gradient ml-2">Intelligent AI</span> Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              YashAI Solutions delivers cutting-edge artificial intelligence and machine learning technologies to drive innovation and efficiency for enterprise organizations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                href="#services" 
                className="bg-gradient-to-r from-secondary-700 to-primary-700 hover:from-secondary-600 hover:to-primary-600 text-white font-medium px-8 py-3 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Explore Solutions
              </motion.a>
              <motion.a 
                href="#contact" 
                className="bg-transparent border-2 border-teal-600 text-teal-400 font-medium px-8 py-3 rounded-lg text-center transition-all duration-300 hover:bg-teal-900/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Schedule a Demo
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="hero-image animate-float"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut"
                }}
              >
                <div className="rounded-xl shadow-2xl overflow-hidden">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto object-cover"
                  >
                    <source 
                      src="https://assets.mixkit.co/videos/preview/mixkit-digital-technology-earth-rotating-loop-1390-large.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 info-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <GlassCard className="p-4 shadow-lg" animate={false}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                    <p className="text-sm font-medium text-white">AI Model Training: 98% Complete</p>
                  </div>
                </GlassCard>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 info-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <GlassCard className="p-4 shadow-lg" animate={false}>
                  <div className="flex items-center">
                    <div className="text-amber-500 mr-2">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <p className="text-sm font-medium text-white">Intelligent Decision Support</p>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <a 
            href="#services" 
            aria-label="Scroll down"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <i className="fas fa-chevron-down text-white opacity-50 text-2xl"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
