import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from "../../styles/Head.module.css"
import step1 from "../../../../public/stock/design2.jpg"
import step2 from "../../../../public/stock/code2.jpg"
import step3 from "../../../../public/stock/code5.jpg"
import step4 from "../../../../public/stock/code3.jpg"
import step5 from "../../../../public/stock/design5.jpg"
function Ourcarousel() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,

      };

  return (
    <div style={{overflow:"hidden",width:"85%",margin:"0 auto"}}>
        <h2>Our Brand Building Method</h2>

        <Slider {...settings}>
          <div>
            
          <div className={styles.textrows}>
            <div className={styles.lte}>              
            <h3>1. Research and design</h3>
            <h6>
            we'll help you craft a distinct visual and verbal identity, create the assets you need to tell your story, and establish clear brand guidelines to keep your message consistent across all your channels.

            </h6>
            </div>

            <div className={styles.rim}>              
            <Image placeholder='blur' src={step1} className={styles.caim} width={0} height={0} alt=""/>
            </div>
          </div>
          </div>
            <div>
            
          <div className={styles.textrows}>
            <div className={styles.lte}>              
            <h3>2. Prototype and feedback</h3>
            <h6>
              We'll analyze your competitors' websites, gather feedback 
              With this feedback loop, we'll keep your website fresh, relevant, as you need 
              </h6>
            </div>

            <div className={styles.rim}>              
            <Image placeholder='blur' src={step2} className={styles.caim} width={0} height={0} alt=""/>
            </div>
          </div>
          </div>
            <div>
            
          <div className={styles.textrows}>
            <div className={styles.lte}>              
            <h3>3. Coding</h3>
            <h6>
              We'll create a user-centered design that's easy to navigate, visually appealing, and optimized for all devices. Plus, we'll infuse it with Kisu's signature style, ensuring your brand's creative, innovative, and luxurious spirit shines through every pixel.
              </h6>
            </div>

            <div className={styles.rim}>              
            <Image placeholder='blur' src={step3} className={styles.caim} width={0} height={0} alt=""/>
            </div>
          </div>
          </div>
            <div>
            
          <div className={styles.textrows}>
            <div className={styles.lte}>              
            <h3>4. Develop and clean</h3>
            <h6>
              we leverage the latest React technologies to build dynamic and interactive websites that deliver a superior user experience.
              we've got a team of experts who will ensure your website is robust, scalable, and secure.
              </h6>
            </div>

            <div className={styles.rim}>              
            <Image placeholder='blur' src={step4} className={styles.caim} width={0} height={0} alt=""/>
            </div>
          </div>
          </div>
            <div>
            
          <div className={styles.textrows}>
            <div className={styles.lte}>              
            <h3>5. Enjoy our success</h3>
            <h6>
            We'll help you bring it to life with engaging content, social media integration, and effective lead capture mechanisms. By nurturing your leads and driving conversions, we'll turn your website into a powerful marketing machine that helps you grow your business.
            </h6>
            </div>

            <div className={styles.rim}>              
            <Image placeholder='blur' src={step5} className={styles.caim} width={0} height={0} alt=""/>
            </div>
          </div>
          </div>
   
        </Slider>
      </div>
    )
}

export default Ourcarousel