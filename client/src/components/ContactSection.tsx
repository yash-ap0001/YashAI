import { motion } from 'framer-motion';
import { useCursor } from '@/contexts/CursorContext';

const ContactSection = () => {
  const { setIsHovering } = useCursor();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-900/30 text-secondary-400 text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="font-space text-3xl lg:text-4xl font-bold mb-6 text-center">
            Let's Start Your <span className="text-gradient">AI Journey</span> Together
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-center">
            Have questions about our services or ready to embark on your AI transformation? Our team is here to help you navigate the possibilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start">
              <div className="text-amber-500 text-xl mt-1 mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Office Location</h4>
                <p className="text-gray-400">
                  Madhapur, Hyderabad, 500081, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-amber-500 text-xl mt-1 mr-4">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Email</h4>
                <p className="text-gray-400">
                  <a href="mailto:yash@yashaitech.com" className="hover:underline">yash@yashaitech.com</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-amber-500 text-xl mt-1 mr-4">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Phone</h4>
                <p className="text-gray-400">
                  <a href="tel:+919347706474" className="hover:underline">+91 93477 06474</a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-amber-500 text-xl mt-1 mr-4">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Website</h4>
                <p className="text-gray-400">
                  <a href="https://www.yashaitech.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.yashaitech.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            {['linkedin-in', 'twitter', 'facebook-f', 'instagram'].map((icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-white hover:bg-primary-700 transition-colors duration-300"
                whileHover={{ scale: 1.1, backgroundColor: '#3949AB' }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <i className={`fab fa-${icon}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
