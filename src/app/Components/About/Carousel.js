import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from "../../styles/about.module.css"
import kiki from "../../../../public/Portfolio/kiikii.jpg"
import woofles from "../../../../public/Portfolio/woffles.jpg" 
import bill from "../../../../public/Portfolio/billsp.jpg"
import imagikids from "../../../../public/Portfolio/Imagikids.jpg"
import salesys from "../../../../public/Portfolio/System.jpg"
function Carousel() {

    var settings = {
        dots: false,
        gap:69,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        pauseOnHover: true,

        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
         
        ]
      };

  return (
    <div style={{overflow:"hidden",width:"100%",margin:"0 auto",justifyContent:"center"}}>
        <Slider {...settings}>
          <div>
            <Image src={kiki} className={styles.caim} width={0} height={0} alt=""/>
          </div>
          <div>
          <Image src={woofles} className={styles.caim} width={0} height={0} alt=""/>
          </div>
          <div>
          <Image src={bill} className={styles.caim} width={0} height={0} alt=""/>
          </div>
          <div>
          <Image src={imagikids} className={styles.caim} width={0} height={0} alt=""/>
          </div>
          <div>
          <Image src={salesys} className={styles.caim} width={0} height={0} alt=""/>
          </div>
          
        </Slider>
      </div>
    )
}

export default Carousel