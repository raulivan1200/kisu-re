"use client"
import Foot from "./Components/Foot";
import Menu from "./Components/Menu";
import Faq from "./Components/home/Faq/Faq";
import LilFaq from "./Components/home/Faq/LilFaq";
import styles from "./styles/Head.module.css"
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import React, { useRef,useEffect } from "react";
import Scrollcheker from "./Components/home/Scrollchecker";
import Viewanimate from "./Components/Viewanimate";
import { useState } from "react";
import Textimg from "./Components/home/Textimg";
import Image from "next/image";
import Bcallus from "./Components/home/Bcallus"
import Ourbrand from "./Components/home/Ourbrand";
import { useInView } from "framer-motion"
import Head from 'next/head';

export default function home() {
  const refst = useRef(null)
  
  const isInView = useInView(refst)
  useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light');
    setIsDarkTheme(storedTheme === 'dark');
  handleThemeToggle();  }, [isInView])
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  
  const handleThemeToggle = () => {
    const targetTheme = isDarkTheme ? 'light' : 'light';
  
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  };
  
//image index
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  const imageData = [
   'empty.svg', 'drawx.svg',"device.svg", 'world.svg', '/icons/code.svg','photo.svg','/cats/catpad.png'
    // Add more image URLs as needed
  ];
  
  const ref= useRef(null);
  const { scrollY } = useScroll({
    target:ref,
    offset:["start start", "end end"]
  })
  const rotate = useTransform(
    scrollY,
    [0, 100],
    ["85%", "75%"],
    
  )
  const lines = [
    "Kisu is a global ",
    "branding and UX",
    "design agency"
  ];
  const animation = {
        initial: {y: "5em"},
        enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i,type:"tween"}}),
      }
  return ( 
    
  <div>
      <Head>
        <title>Kisu</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      </Head>
    <div className="space"></div>
    <div className="space"></div>

    {lines.map((line, index) => (
  <div className={styles.lineMask} key={index}>  
    <motion.h1 custom={index} variants={animation} initial="initial" animate={"enter"}>
      {line}
    </motion.h1>
  </div>
))}
    <div className="space"></div>
    
    <motion.div style={{width:rotate}} transition={{ease:"easeInOut"}} className={styles.papa} ref={ref}>
    <video className={styles.video}  type="video/mp4" muted  loop playsInline disablePictureInPicture autoPlay preload="metadata">
      <source src="/videos/4kisushowreel.mp4" type="video/mp4"/>
    </video>
    </motion.div>
    <div className="space">    </div>

      <Textimg/>

      <div className="space">    </div>
      <div className="space hom">    </div>

 <Ourbrand/>
 <div className="space">    </div>

<div className={styles.ptw}>
<Image
className={styles.bgimh}
 style={{
  mixBlendMode: "revert",
  filter:"invert(1)",
  transition: "transform .2s ease-in-out", // Cambiado 'all' a 'transform'
  transform: `scale(${0.5 + activeImageIndex * 0.1})`, // Corregido el formato de transformación
  zIndex: -999,
  position: "absolute",
  left: `${20 + activeImageIndex * 5}%`
}}
          src={imageData[activeImageIndex]}
        alt={`Image ${activeImageIndex}`}
        width={300}
        height={300}

        />
      <div className={styles.twodiv}>


    <div className={styles.twchone}>  

      <Viewanimate inx={"-150%"} anx={0} dtime={.3}>
    <small style={{width:"85%", display:"flex", margin:"0 auto",color: "var(--tb)"}}>   
     Rooted in Aguascalientes, Mexico, kisu is a creative powerhouse that crafts exceptional digital experiences for brands worldwide.
     </small>
      </Viewanimate>    
    </div>

    <div className={styles.twchtwo}>
    <Viewanimate inx={"150%"} anx={0} dtime={.3} delay={.05}>
      <LilFaq activeImageIndex={activeImageIndex} onImageChange={handleImageChange} />
    </Viewanimate>
    </div>
    </div>
</div>

<div className="space"></div>


<div className={styles.papicon}>
<div className={styles.icons}>
  
    <div className={styles.col1}>
       <Viewanimate iny={"150%"} any={0} delay={0}>
         <img className="inicli" src="/icons/amazon.svg" alt="Icon 1"/>
        </Viewanimate>
       </div>
    <div className={styles.col2}>
       <Viewanimate iny={"150%"} any={0} delay={0.1}>
         <img className="inicli" src="/icons/shopify.svg" alt="Icon 2"/>
        </Viewanimate>
       </div>
    <div className={styles.col3}>
       <Viewanimate iny={"150%"} any={0} delay={0.15}>
         <img className="inicli" src="/icons/fiverr.svg" alt="Icon 3"/>
        </Viewanimate>
       </div>
    <div className={styles.col4}>
       <Viewanimate iny={"150%"} any={0} delay={0.2}>
         <img className="inicli" src="/icons/upwork.svg" alt="Icon 4"/>
        </Viewanimate>
       </div>
    <div className={styles.col5}>
       <Viewanimate iny={"150%"} any={0} delay={0.04}>
         <img className="inicli" src="/icons/next-js.svg" alt="Icon 5"/>
        </Viewanimate>
       </div>
    <div className={styles.col6}>
       <Viewanimate iny={"150%"} any={0} delay={0.13}>
         <img className="inicli" src="/icons/vercel.svg" alt="Icon 6"/>
        </Viewanimate>
       </div>
    <div className={styles.col7}>
       <Viewanimate iny={"150%"} any={0} delay={0.18}>
         <img className="inicli" src="/icons/html.svg" alt="Icon 7"/>
        </Viewanimate>
       </div>
    <div className={styles.col8}>
       <Viewanimate iny={"150%"} any={0} delay={0.23}>
         <img className="inicli" src="/icons/java.svg" alt="Icon 8"/>
        </Viewanimate>
       </div>

</div>
</div>
<div className="space"></div>

<div className="space"></div>
<Bcallus/>


<div className="space"></div>
<div className="space"></div>

  <div >    
<h3 className="spacel spacesm" style={{lineHeight:"0",margin:"0", width:"100%"}}>FAQ</h3>
    <div  ref={refst}>
      
    <Faq />
    </div>
  </div>
    <div className="space"></div>
    <div className="space"></div>

  </div> );
}