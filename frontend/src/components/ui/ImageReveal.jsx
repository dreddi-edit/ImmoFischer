import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ImageReveal = ({ src, alt, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-[#D9D0C1] z-10"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: isInView ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        style={{ transformOrigin: 'right' }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: isInView ? 1 : 1.2 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  );
};

export default ImageReveal;
