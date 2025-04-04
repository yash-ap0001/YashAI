import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
  withHover?: boolean;
} & MotionProps;

const GlassCard = ({ 
  children, 
  className, 
  animate = true,
  delay = 0,
  withHover = false,
  ...motionProps 
}: GlassCardProps) => {
  const baseClass = "glass rounded-xl";
  const hoverClass = withHover ? "transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20" : "";
  
  const variants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.1
      }
    }
  };

  return (
    <motion.div
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={cn(baseClass, hoverClass, className)}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
