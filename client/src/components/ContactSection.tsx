import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { useCursor } from '@/contexts/CursorContext';
import { isValidEmail } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const ContactSection = () => {
  const { setIsHovering } = useCursor();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a server
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-900/30 text-secondary-400 text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h2 className="font-space text-3xl lg:text-4xl font-bold mb-6">
              Let's Start Your <span className="text-gradient">AI Journey</span> Together
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Have questions about our services or ready to embark on your AI transformation? Our team is here to help you navigate the possibilities.
            </p>
            
            <div className="space-y-6 mb-8">
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
                    info@yashaisolutions.com
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
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
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
          
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 rounded-xl">
              <h3 className="font-space text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                      placeholder="John Doe"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                      placeholder="your@email.com"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-300 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    placeholder="Your Company"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-300 mb-2">Service of Interest</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white appearance-none"
                      style={{
                        backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/></svg>')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center'
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="strategy">Strategy & Advisory</option>
                      <option value="data">Data Solutions</option>
                      <option value="professional">Professional Services</option>
                      <option value="software">Software Products</option>
                      <option value="modernization">Modernization</option>
                      <option value="cloud">Cloud Services</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-3 rounded-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 flex justify-center items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
