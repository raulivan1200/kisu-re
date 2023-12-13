"use client"
import Carousel from "../Components/About/Carousel";
import VelocityScroll from "../Components/Velocityscroll";
import styles from "../styles/about.module.css"
import Head from "next/head";




const About = () => {
    return ( 
    <div>
       <Head>
        <title>About Kisu</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta
          name="description"
          key="desc"

          content="Learn more about Kisu - Your dedicated partner for cutting-edge web development. 
          Discover our team, mission, and commitment to delivering high-quality solutions for your digital needs.
          "
        />
      </Head>
        <div className="space"></div>
        <div className="space"></div>
      <div className={styles.abt}>
      <h1> ABOUT KISU </h1> 
       <h6>
A community-based creative agency.
       kisu isn't your average agency. 
       <br/><br/> We're a band of rebels, innovators, and luxury brutes who use React to craft websites that rip open the seams of the ordinary and leave you breathless. We don't just create solutions; we crave the unique, the unexpected, the brutally beautiful. Fueled by a restless desire to change the world, we're a community of passionate storytellers, code wizards, and visual alchemists united by a hunger to create something truly extraordinary.<br/><br/>
        We're a global phenomenon with roots in Mexico, a tribe of over a thousand creative partners and 30 full-time warriors from 11 nationalities and 8 languages. We speak the language of innovation, fluently. <br/><br/>
         So if you're tired of the beige and the bland, if you crave an experience that leaves a mark on your soul, then kisu is your answer.
        <br/>  <br/> We'll help you roar, we'll help you change the game, and we'll do it all with a touch of Mexican brutality and a whole lot of heart.
       </h6>
      </div>

      <div className="space"></div>
      <div className="space"></div>

      <div className={styles.footp}>
      <div style={{overscrollBehavior:"contain",overflow:"hidden"}}>
      <VelocityScroll baseVelocity={-1}> 今すぐ電話！今すぐ電話！</VelocityScroll>
      <VelocityScroll baseVelocity={1}> us Contact</VelocityScroll>
      <VelocityScroll baseVelocity={-.3}> 今すぐ電話！今すぐ電話！</VelocityScroll>
      </div>
      </div>

      <div className="space"></div>
      <div className="space"></div>
    
<Carousel/>
<div className="space"></div>
<div className="space"></div>

    </div> 
    );
}
 
export default About;