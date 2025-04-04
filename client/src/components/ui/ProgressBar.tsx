import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="progress-container fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <motion.div
        className="progress-bar h-1 bg-gradient-to-r from-amber-500 to-amber-600"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </div>
  );
};

export default ProgressBar;
