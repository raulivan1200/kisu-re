import React from 'react'
import { useTransform,motion,useScroll } from 'framer-motion';
import { useRef } from 'react';

function Parallaxscale({children, scale,scalep }) {
    const refx = useRef(null);

    const { scrollYProgress } = useScroll({
        target: refx,
        offset: ["end end", "start start"]
      });

    const scaleup = useTransform(scrollYProgress, [0, 1], [scale, scalep]);
  
  return (
    <section style={{overflow:"hidden",height:"100%"}}>
    <motion.div ref={refx} style={{ scale:scaleup ,height:"100%"}}>
        {children}
    </motion.div>
  </section>  )
}

export default Parallaxscale
