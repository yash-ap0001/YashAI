import { motion } from 'framer-motion';
import { Service } from '@/constants/services';
import { useCursor } from '@/contexts/CursorContext';
import { useMemo } from 'react';

type ServiceHighlightProps = {
  service: Service;
  reverse?: boolean;
};

const ServiceHighlight = ({ service, reverse = false }: ServiceHighlightProps) => {
  const { setIsHovering } = useCursor();
  
  const backgroundStyle = useMemo(() => {
    return service.backgroundImage 
      ? { backgroundImage: `url(${service.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
      : { background: 'linear-gradient(to bottom right, #0F172A, #1E1F4E)' };
  }, [service.backgroundImage]);

  // Service-specific content
  const getServiceTitle = () => {
    switch(service.name) {
      case "Modernization":
        return (
          <>
            Modernization to <br />
            <span className="text-gradient">Reimagine IBM i Systems</span>
          </>
        );
      case "Strategy":
        return (
          <>
            Strategic <span className="text-gradient">AI Advisory</span><br />
            Services
          </>
        );
      case "Cloud":
        return (
          <>
            Intelligent <span className="text-gradient">Cloud</span><br />
            Infrastructure
          </>
        );
      default:
        return <>{service.name} <span className="text-gradient">Solutions</span></>;
    }
  };

  const getServiceDescription = () => {
    switch(service.name) {
      case "Modernization":
        return "End-to-end IT and AS/400 solutions that bring digital experiences to life.";
      case "Strategy":
        return "Expert guidance to develop comprehensive AI implementation roadmaps aligned with business goals.";
      case "Cloud":
        return "Scalable, secure, and optimized cloud solutions designed for modern AI workloads.";
      default:
        return "Comprehensive solutions tailored to your organization's unique requirements.";
    }
  };

  // Determine accent color based on service
  const getAccentColor = () => {
    switch(service.name) {
      case "Strategy":
        return "bg-purple-700/90 hover:bg-purple-700";
      case "Cloud":
        return "bg-blue-700/90 hover:bg-blue-700";
      default:
        return "bg-primary/90 hover:bg-primary";
    }
  };

  // Determine icon color based on service
  const getIconColor = () => {
    switch(service.name) {
      case "Strategy":
        return "text-purple-500";
      case "Cloud":
        return "text-blue-500";
      default:
        return "text-amber-500";
    }
  };

  return (
    <motion.div 
      className="my-20 overflow-hidden rounded-2xl shadow-lg shadow-black/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div 
          className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[480px]"
          style={backgroundStyle}
        >
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Text content that appears on the image */}
          <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
            <h2 className="font-space text-3xl lg:text-4xl font-bold mb-3">
              {getServiceTitle()}
            </h2>
            
            <p className="text-white/80 mb-6 max-w-md">
              {getServiceDescription()}
            </p>
            
            <motion.button
              className={`${getAccentColor()} text-white px-6 py-2 rounded-full font-medium transition-all`}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              LEARN MORE
            </motion.button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 bg-muted p-8 md:p-12 flex flex-col justify-center">
          <div className={`${getIconColor()} text-4xl mb-6`}>
            <i className={`fas ${service.icon}`}></i>
          </div>
          
          <h3 className="font-space text-2xl font-bold mb-6">Key Offerings</h3>
          
          <ul className="space-y-4">
            {service.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1 text-teal-500">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <motion.a
              href="#"
              className={`${getIconColor()} hover:opacity-80 flex items-center font-medium`}
              whileHover={{ x: 5 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              View all {service.name} services <i className="fas fa-arrow-right ml-2"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceHighlight;