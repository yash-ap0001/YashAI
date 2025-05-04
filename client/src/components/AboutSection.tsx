import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { useCursor } from '@/contexts/CursorContext';

const AboutSection = () => {
  const { setIsHovering } = useCursor();

  const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "10+", label: "Years of Innovation" }
  ];

  const timelineItems = [
    { year: "2015", title: "Company Founded", description: "YashAI Technologies was established with a focus on delivering custom AI solutions for enterprise clients." },
    { year: "2017", title: "First Major Partnership", description: "Secured our first major enterprise client and launched our enterprise AI services." },
    { year: "2019", title: "Expanded Service Offerings", description: "Launched our comprehensive cloud services and AI-powered data analytics solutions." },
    { year: "2022", title: "Global Expansion", description: "Opened offices in North America and Europe, expanding our client base to over 50 enterprise organizations." },
    { year: "Present", title: "Industry Leadership", description: "Recognized as a leader in AI solutions, continuing to innovate and expand our service offerings." }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="lg:absolute -left-4 top-1/2 transform lg:-translate-y-1/2 w-full max-w-md animate-float"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=700&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
              <motion.div 
                className="hidden lg:block absolute -right-8 -bottom-8 w-full max-w-sm animate-float"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=500&auto=format&fit=crop" 
                  alt="AI technology innovation" 
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-900/30 text-primary-400 text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-space text-3xl lg:text-4xl font-bold mb-6">
              Pioneering the Future of <span className="text-gradient">AI Innovation</span>
            </h2>
            <p className="text-gray-300 mb-6">
              YashAI Technologies was founded with a singular vision: to democratize access to cutting-edge artificial intelligence technologies and help organizations harness their transformative power.
            </p>
            <p className="text-gray-300 mb-6">
              Our team of AI specialists, data scientists, and software engineers brings decades of combined experience in developing and implementing AI solutions across diverse industries.
            </p>
            <p className="text-gray-300 mb-8">
              We are committed to ethical AI development and transparency, ensuring that our solutions not only drive business value but also uphold the highest standards of responsible innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-amber-500 text-4xl font-bold mb-2">{stat.value}</span>
                  <span className="text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div>
              <motion.a 
                href="#contact" 
                className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white px-8 py-3 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Contact Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Timeline Section */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h3 className="font-space text-2xl lg:text-3xl font-bold mb-4">Our Journey</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From startup to industry leader, our timeline showcases our evolution
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  {index % 2 === 0 ? (
                    <>
                      <motion.div 
                        className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <GlassCard className="p-6 rounded-xl">
                          <span className="text-amber-500 text-sm font-bold mb-2 block">{item.year}</span>
                          <h4 className="font-space text-xl font-bold mb-3">{item.title}</h4>
                          <p className="text-gray-400">
                            {item.description}
                          </p>
                        </GlassCard>
                      </motion.div>
                      <div className="hidden md:flex items-center justify-center relative z-10">
                        <motion.div 
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-700 to-secondary-700 flex items-center justify-center text-white font-bold shadow-lg"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true, margin: "-150px" }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                          whileHover={{ scale: 1.2 }}
                        ></motion.div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:invisible"></div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-12 md:invisible mb-6 md:mb-0"></div>
                      <div className="hidden md:flex items-center justify-center relative z-10">
                        <motion.div 
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-700 to-secondary-700 flex items-center justify-center text-white font-bold shadow-lg"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true, margin: "-150px" }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                          whileHover={{ scale: 1.2 }}
                        ></motion.div>
                      </div>
                      <motion.div 
                        className="md:w-1/2 md:pl-12"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <GlassCard className="p-6 rounded-xl">
                          <span className="text-amber-500 text-sm font-bold mb-2 block">{item.year}</span>
                          <h4 className="font-space text-xl font-bold mb-3">{item.title}</h4>
                          <p className="text-gray-400">
                            {item.description}
                          </p>
                        </GlassCard>
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
