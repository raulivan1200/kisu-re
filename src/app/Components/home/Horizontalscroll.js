"use client";
import Image from "next/image";
import Imkids from "../../../../public/Portfolio/imagigids.jpg";
import Imkidsf from "../../../../public/Portfolio/imagikco.jpg";
import Imkidsg from "../../../../public/Portfolio/Imagikids.jpg";
import Ssys from "../../../../public/Portfolio/System.jpg";
import Ssysf from "../../../../public/Portfolio/sale system.jpg";
import bills from "../../../../public/Portfolio/billsp.jpg";
import billsf from "../../../../public/Portfolio/billspco.jpg";
import billsg from "../../../../public/Portfolio/billspl.jpg";
import billsh from "../../../../public/Portfolio/billspgrey.jpg";
import woff from "../../../../public/Portfolio/woffles.jpg";
import woffh from "../../../../public/Portfolio/wofflescolor.jpg";
import woffg from "../../../../public/Portfolio/wofflesdetail.jpg";
import { useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";

function Scroll() {
  const stickySectionsRef = useRef([]);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      stickySectionsRef.current.forEach((section) => {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scroll_section');
        const scrollY = window.scrollY;
        const percentage = Math.min(
          Math.max((scrollY - offsetTop) / window.innerHeight, 0),
          50
        );
        const easing = 'ease-out';
        scrollSection.style.transform = `translate3d(${-percentage * 100}vw, 0, 0)`;
        scrollSection.style.transition = `transform 0.2s ${easing}`;
      });
    };

    // Query the DOM once during the initial render and store .sticky elements in stickySectionsRef
    stickySectionsRef.current = Array.from(document.querySelectorAll('.sticky'));

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
      <>
      <div className='spaceup'> </div>
     <div className='spaceleft' style={{scrollSnapType:"none",WebkitOverflowScrolling:"touch",overscrollBehavior:"none"}}>

     </div>
        <section>    
            <div className='sticky_parent'>
                <div className='sticky' >

                <div className='scroll_section'>

                      <div className='pppphz'>

                      <div className="pahz">
                          <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >
                          <video
  poster="https://i.imgur.com/Us5ckqm.jpg"
  onMouseOver={event => event.target.play()}
  onMouseOut={event => {  
    event.target.pause();
    event.target.currentTime = 0;
  }}  src="showreel.mp4" muted  >
</video>
                          </div>
                        </div>  

                      
                        <div className="pahz">
                        <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >
                          </div>
                        </div>  
                        
                        <div className="pahz">
                        <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >

                          </div>
                      </div>
                      <div className="pahz">
                        <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >
       
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Scroll