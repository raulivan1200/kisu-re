"use client";
import kisu from "../../../public/cats/catgold.png";
import Image from "next/image";
import ParallaxYaxis from "../Components/ParallaxYaxis";
import styles from "../styles/work.module.css";
import Parallaxscale from "../Components/Parallaxscale";
import Head from "next/head";
import { useState } from "react";
import { motion, useTransform } from "framer-motion";
import useMousePosition from "../Components/useMousePosition";
import imki from "../../../public/Portfolio/Imagikids.jpg"
import billsp from "../../../public/Portfolio/billspl.jpg"
import sys from "../../../public/Portfolio/System.jpg"
const Work = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 60 : 20;


  
  const variants = {
    default: {
      backgroundColor: "var(--white)",
      color:"var(--black)",
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      x: x - size / 2,
      y: y - size / 2,
      width: size,
      height: size,
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "var(--white)",
      color:"var(--black)",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: x - size / 2,
      y: y - size / 2,
      width: size,
      height: size,
    }}



  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorText("play");
  };
  const handleMouseEnternovideo = () => {
    setIsHovered(true);
    setCursorText("WIP");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorText("");
  };
  return (
    <div>
   
 <motion.div
           variants={variants}
           animate={cursorVariant}
        className={styles.circle}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h5 className={styles.cursorText}>{cursorText}</h5>
      </motion.div>




      <div className="space"></div>
      <div className={styles.container}>
        <div className={styles.imo}   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1} scalep={1.05}>
              <video
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
            </Parallaxscale>
        </div>

        <div className={styles.imtw}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1} scalep={1.05}>
              <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                 className={styles.vidhover}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => {
                  event.target.pause();
                  event.target.currentTime = 0;
                }}
                src="/videos/lumin.mp4#t=0.1"
                muted loop
              ></video>
            </Parallaxscale>
        </div>

        <div className={styles.imtr}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1} scalep={1.05}>
              <video
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
            </Parallaxscale>
        </div>
        <div className={styles.imf}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1.05} scalep={1}>
              <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.vidhover}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => {
                  event.target.pause();
                  event.target.currentTime = 0;
                }}
                src="/videos/hairsaloon.mp4#t=0.1"
                muted loop
              ></video>
            </Parallaxscale>
        </div>

        <div className={styles.imfi}  onMouseEnter={handleMouseEnternovideo} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={.8} scalep={1}>
             <Image width={0} height={0} src="kisu.svg" alt="" className={styles.imworkhk}/>
            </Parallaxscale>
        </div>

        <div className={styles.ims}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1.05} scalep={1}>
              <video
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
            </Parallaxscale>
        </div>

        <div className={styles.imse}  onMouseEnter={handleMouseEnternovideo} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1} scalep={1.05}>
              
            <Image width={0} height={0} src={sys} alt="" className={styles.imworkh}/>

            </Parallaxscale>
        </div>

        <div className={styles.imei}  onMouseEnter={handleMouseEnternovideo} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1} scalep={1.05}>
            <Image width={0} height={0} src={billsp} alt="" className={styles.imworkh}/>

            </Parallaxscale>
        </div>

        <div className={styles.imn}  onMouseEnter={handleMouseEnternovideo} onMouseLeave={handleMouseLeave}>
            <Parallaxscale scale={1} scalep={1.05}>
            <Image width={300} height={300} src={imki} alt="" className={styles.imworkh}/>

            </Parallaxscale>
        </div>
      </div>
                <div className="space "> 
                  
                </div>
    </div>
  );
};

export default Work;
