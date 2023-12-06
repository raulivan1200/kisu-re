import React from 'react'
import styles from "../../styles/Head.module.css"
import Viewanimate from "../Viewanimate";
import Image from "next/image";
function Bcallus() {
  return (
    <div className={styles.parentbtr}>
    <div className={styles.wsbt}>
      <Viewanimate  >
    <h1 className={styles.bthh}>
           Empowering <br/> Digital <br/> Interactions
            </h1>
      </Viewanimate>
    </div>
            <div className={styles.abbt}>
                <div className={styles.cardbt}>
                  <div style={{display:"flex",height:"fit-content",position:"relative",justifyContent:"center"}}>
<div className={styles.anlg}>
  
                  <Image src="/kisu.svg" width={100} height={100} alt="kisu" className="inicli"/>
</div>
                  </div>
                    <div className={styles.mu}>
                    <h4>Book a Call</h4>
                    <p>Lear more about us.</p>

                    <button role="submit" style={{backgroundColor:"black"}} class="button" href="#">
            <span className="button__icon-wrapper">
           
            <img src="/arrow.svg"  className="button__icon-svg" style={{filter:"invert(1)"}} alt=""/>
            <img src="/arrow.svg"  className="button__icon-svg  button__icon-svg--copy" style={{filter:"invert(1)" }} alt=""/>
            </span>
            <h6 style={{color:"white"}}>Contact us</h6>
        </button>


                    </div>
                </div>
            </div>
        </div>
  )
}

export default Bcallus