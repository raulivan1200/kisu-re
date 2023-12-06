"use client";
import React, { useState } from 'react'
import styles from "../../styles/Head.module.css"
import { useInView } from "framer-motion"
import { useRef,useEffect } from 'react';
function Textimg() {
  const [ismobile, setismobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setismobile(window.innerWidth <= 768)
    }
  }, [])
  const ref = useRef(null)
  const isInView = useInView(ref)
  const refo = useRef(null)
  const isInViewo = useInView(refo)
    const reft = useRef(null)
  const isInViewt = useInView(reft)
  useEffect(() => {
    if(ismobile){

      if (isInView && ref.current) {
        ref.current.play();
      } else if (!isInView && ref.current) {
      ref.current.pause();
    }
    if (isInViewo && refo.current) {
      refo.current.play();
    } else if (!isInViewo && refo.current) {
      ref.current.pause();
    }
    if (isInViewt && reft.current) {
      reft.current.play();
    } else if (!isInViewt && reft.current) {
      reft.current.pause();
    }
  }
  }, [isInView]);
  return (
    <div className={styles.timdivc}>
        <div className={styles.tmdivr}>            
        <div className={styles.bsde}>
        <h4>
        Kisu is a global agency crafting digital experiences that transform brands and cultures.
          </h4>
        </div>
        <div className={styles.kst}>
            <h1>KISU</h1>
        </div>
        </div>
      <div className="space">    </div>

        <div className={styles.tmdivrim}>            
        <div className={styles.imgtc}>
        <video  ref={ref}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.vidhover}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => {
                  event.target.pause();
                  event.target.currentTime = 0;
                }}
                src="/videos/woffles.mp4#t=0.1"
                muted loop
              ></video>
              <div className={styles.teximt}>
                
                            <h7>WOOFLES </h7>
            <h6>The Waffle Experience You Won't Forget <br/>
</h6>      
              </div>
        </div>
        <div className={styles.imgtc}>
        <video  ref={refo}
                style={{ width: "100%", height: "100%", objectFit: "cover !important" }}
                 className={styles.vidhover}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => {
                  event.target.pause();
                  event.target.currentTime = 0;
                }}
                src="/videos/KiiKii.mp4#t=0.1"
                muted loop
              ></video>        
              <div className={styles.teximt}>                
              <h7>KIIKII</h7>
              <h6>Fashion for the modern world
                </h6>     
              </div>
        </div>
        <div className={styles.imgtc}>
        <video  ref={reft}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
               className={styles.vidhover}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => {
                  event.target.pause();
                  event.target.currentTime = 0;
                }}
                src="/videos/vidarta.mp4#t=0.1"
                muted loop
              ></video>     
                            <div className={styles.teximt}>
                              
              <h7>VIDARTA </h7>
                 <h6>A world-class golfing experience
   
                 </h6>
                            </div>
                 
        </div>
        </div>
    </div>
  )
}

export default Textimg