import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { caseStudies } from '@/constants/caseStudies';
import { testimonials } from '@/constants/testimonials';
import { useCursor } from '@/contexts/CursorContext';

const WorkSection = () => {
  const { setIsHovering } = useCursor();

  return (
    <section id="work" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-900/30 text-teal-400 text-sm font-semibold mb-4">
            Case Studies
          </span>
          <h2 className="font-space text-3xl lg:text-4xl font-bold mb-6">
            Transformative <span className="text-gradient">Results</span> for Our Clients
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore how our AI solutions have driven measurable business impact across industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div 
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary-900/20 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-teal-900/70 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-space text-xl font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {caseStudy.description}
                </p>
                <div className="flex items-center justify-between">
                  <motion.a 
                    href="#" 
                    className="text-amber-500 hover:text-amber-400 flex items-center text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study <i className="fas fa-arrow-right ml-2"></i>
                  </motion.a>
                  <span className="text-gray-500 text-sm">Client: {caseStudy.client}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="#" 
            className="inline-block bg-transparent border-2 border-amber-600 text-amber-500 px-8 py-3 rounded-lg hover:bg-amber-900/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            View All Case Studies
          </motion.a>
        </motion.div>
        
        {/* Testimonials */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h3 className="font-space text-2xl lg:text-3xl font-bold mb-4">Client Testimonials</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              What our clients say about working with YashAI Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-8 rounded-xl relative" delay={index}>
                  <div className="text-amber-500 text-5xl absolute -top-6 -left-2 opacity-30">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-gray-300 mb-6 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.author.image} 
                        alt={testimonial.author.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.author.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.author.title}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
