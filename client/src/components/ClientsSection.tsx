import { motion } from 'framer-motion';
import { clients } from '@/constants/clients';
import GlassCard from '@/components/ui/GlassCard';
import { useCursor } from '@/contexts/CursorContext';

const ClientsSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="clients" className="py-16 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-3xl lg:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Partnering with forward-thinking organizations to implement transformative AI solutions
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="glass p-4 rounded-lg w-full max-w-[160px] h-[80px] flex items-center justify-center transition-all duration-300 hover:shadow-lg opacity-70 hover:opacity-100"
              variants={itemVariants}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="text-xl text-gray-300 font-semibold">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassCard className="p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h3 className="font-space text-2xl font-bold mb-4">Ready to transform your business with AI?</h3>
                <p className="text-gray-300 mb-6 md:mb-0">
                  Discover how our solutions can drive innovation and efficiency in your organization.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <motion.a 
                  href="#contact" 
                  className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-3 rounded-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
