import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

function Viewanimate({ children, iny, inx, any, anx, dtime,delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true } );
  
  const variants = {
    visible: { opacity: 1, y: any, x: anx,filter: "blur(0px)" },
    hidden: { opacity: 1, y: iny, x: inx,filter: "blur(4px)" },
  };

  return (
    <section ref={ref} style={{overflow:"hidden"}}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{
          duration: dtime || 0.3, // Usa la duración proporcionada o un valor predeterminado
          ease: [0.33, 1, 0.68, 1], // Usa el easing proporcionado o un valor predeterminado
          delay: delay || 0, // Usa el retraso proporcionado o un valor predeterminado
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default Viewanimate;
