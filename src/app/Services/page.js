"use client"
import Image from "next/image";
import cat from "../../../public/cats/catmouse.png";
import cate from "../../../public/cats/cateating.png";
import catg from "../../../public/cats/catgold.png";
import catj from "../../../public/cats/catjump.png";
import catp from "../../../public/cats/catpad.png";
import styles from "../styles/service.module.css"
import Parallaxscale from "../Components/Parallaxscale";
import Head from "next/head";
import { useState,useEffect,memo } from "react";

import Carousel from "../Components/About/Carousel";
import website from  "../../../public/stock/design6.jpg" 
import catpc from  "../../../public/stock/catpc1.jpg" 
import design from  "../../../public/stock/design31.jpg" 
import marketing from  "../../../public/stock/design41.jpg" 
import software from  "../../../public/stock/code1.jpg" 

const service = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scaleDesktop = 1.05;
  const scaleMobile = 0.95;

  const scale = isMobile ? scaleMobile : scaleDesktop;

 
    return (
      <div>

         <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
        <div className="space"></div>
        
        <div className={styles.servp}>
          
        <Image alt="website creation website design ux ui" src={catpc} className={styles.cat}  placeholder="blur" style={{order:"2", width:"30vw"}} />
        <h1 style={{order:"1"}}>A full-service digital innovation partner</h1>
        </div>
        <div className="space"> </div>
  
        <div className={styles.wser}>





          <div className={styles.container} >
            <div className={styles.im1}>
              <Parallaxscale scale={1} scalep={scale}>
                <Image alt="website creation website design ux ui" src={marketing} className={styles.cat} placeholder="blur" />
              </Parallaxscale>
            </div>
            <div className={styles.im2}>
            <Parallaxscale scale={scale} scalep={1}>
                <Image alt="website creation website design ux ui" src={website} className={styles.cat} placeholder="blur" />
            </Parallaxscale>
            </div>
            <div className={styles.im3}>
            <Parallaxscale scale={1} scalep={scale}>
                <Image alt="website creation website design ux ui" src={design} className={styles.cat} placeholder="blur" />
            </Parallaxscale>
            </div>
            <div className={styles.im4}>
                            <Parallaxscale scale={scale} scalep={1}>
                <Image alt="website creation website design ux ui" src={software} className={styles.cat} placeholder="blur" />
                            </Parallaxscale>
            </div>
  <div className={styles.t1}>
<h2>
     Digital Products
    </h2> 
    <h6>
    At kisu, we're passionate about crafting exceptional digital experiences that empower people, whether they're using a product for work or personal enjoyment. We specialize in designing both memorable consumer and enterprise software, ensuring that every interaction is intuitive, engaging, and visually appealing.
    </h6>
    <br/>
    <h6>
<ul className={styles.pl}>
<li>
  
Consumer & Enterprise Software
  </li>  
  <li>
User Research & Testing
  </li>
  <li>
CX, UX & Interaction Design
  </li>
  <li>
UI Design
  </li>
  <li>
Motion Design
  </li>
  <li>
Design Systems
  </li>
</ul>

    </h6>
  </div>
  <div className={styles.t2}>
  <h2>
  Websites
  </h2>
  <h6>
Your website is your digital storefront, the face of your brand in the vast expanse of the internet. At kisu, we understand the immense power of a well-designed website, and we're committed to creating websites that not only captivate audiences but also achieve your business goals.
<br/>
<br/>
<ul className={styles.pl}>
<li>
Content Strategy
  </li>  
  <li>
Web Design
  </li>
  <li>
Interactive Experiences
  </li>
  <li>
Content Production
  </li>
  <li>
Frontend & Backend Development
  </li>
  <li>
CMS Implementation
  </li>
</ul>
  </h6>
  </div>
  <div className={styles.t3}>
  <h2>
  Content
  </h2>
  <h6>
  At kisu, we believe that authentic content is the cornerstone of a successful brand identity. We partner with brands to identify their unique content needs and deliver custom-made assets that capture their essence and resonate with their target audience.
  <br/>
<br/>
<ul className={styles.pl}>
  <li>Art Direction</li>
  <li>Illustration & Graphic Design</li>
  <li>Iconography</li>
  <li>Animation</li>
  <li>Photo & Video</li>
  <li>3D</li>
</ul>
  </h6>
  </div>
  <div className={styles.t4}>
  <h2>
  Development
  </h2>
<h6>

At kisu, designers and developers work in seamless harmony, crafting websites and products that captivate users and deliver exceptional functionality. We go beyond aesthetics, meticulously optimizing for search engine visibility, ensuring accessibility for all, and maximizing performance across devices.
<br/>
<br/>

<ul className={styles.pl}>
<li>
Technology Consulting
  </li>  <li>
Architecture Planning
  </li> <li>
Mobile App Development
  </li><li>
Frontend Web Development
  </li><li>
Backend Development & API Integration
  </li><li>
    Emerging Tech (AI, AR/VR, Wearables, Web3)
  </li>
</ul>
</h6>
  </div>
</div>

        </div>
        <div className="space"></div>
        <div className="space"></div>

   
    </div> );
})
 
export default service;