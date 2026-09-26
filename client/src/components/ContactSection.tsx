import { motion } from 'framer-motion';
import { useCursor } from '@/contexts/CursorContext';
import { CONTACT } from '@/constants/contact';

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
            Want early access to one of our products, or have a problem AI could solve? Get in touch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start">
              <div className="text-amber-500 text-xl mt-1 mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Registered Office</h4>
                <p className="text-gray-400">
                  Patancheru, Medak – 502319, Telangana, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-amber-500 text-xl mt-1 mr-4">
                <i className="fas fa-user"></i>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">WhatsApp</h4>
                <p className="text-gray-400">
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {CONTACT.name}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-amber-500 text-xl mt-1 mr-4">
                <i aria-hidden="true" className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Email</h4>
                <p className="text-gray-400">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:underline"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {CONTACT.email}
                  </a>
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

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
