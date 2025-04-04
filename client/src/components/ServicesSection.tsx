import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { services, processSteps } from '@/constants/services';
import { useCursor } from '@/contexts/CursorContext';

const ServicesSection = () => {
  const { setIsHovering } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-900/30 text-secondary-400 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-space text-3xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide end-to-end AI services from strategy development to implementation and optimization, helping organizations leverage the power of artificial intelligence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <GlassCard 
              key={index}
              className="p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary-900/20"
              delay={index}
              withHover
            >
              <div className="text-amber-500 text-3xl mb-4">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="font-space text-xl font-bold mb-3">{service.name}</h3>
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="mr-3 mt-1 text-teal-500"><i className="fas fa-check-circle"></i></div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <motion.a 
                  href="#" 
                  className="text-amber-500 hover:text-amber-400 flex items-center text-sm font-medium"
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </motion.a>
              </div>
            </GlassCard>
          ))}
        </motion.div>
        
        {/* Process Visualization */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-space text-2xl lg:text-3xl font-bold mb-4">Our Implementation Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A proven methodology to deliver successful AI solutions
            </p>
          </div>
          
          <div className="relative">
            {/* Process timeline */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative process-step group">
                  <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-700 to-secondary-700 flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.2 }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  <GlassCard className="p-6 rounded-xl h-full transition-all duration-300 group-hover:shadow-xl" delay={index}>
                    <div className="md:hidden mb-4 w-10 h-10 rounded-full bg-gradient-to-r from-primary-700 to-secondary-700 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <h4 className="font-space text-lg font-bold mb-3">{step.title}</h4>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
