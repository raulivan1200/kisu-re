import React from 'react'
import { useTransform,motion,useScroll } from 'framer-motion';
import { useRef } from 'react';

function ParallaxYaxis({customYstart, customY,children }) {
    const refx = useRef(null);

    const { scrollYProgress } = useScroll({
        target: refx,
        offset: ["end end", "start start"]
      });

    const y = useTransform(scrollYProgress, [0, 1], [customYstart, customY]);
  
  return (
    <section>
    <motion.div ref={refx} style={{ y }}>
        {children}
    </motion.div>
  </section>  )
}

export default ParallaxYaxis
