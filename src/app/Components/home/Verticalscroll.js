"use client";
import Image from "next/image";
import Imkidsg from "../../../../public/Portfolio/Imagikids.jpg";
import Ssys from "../../../../public/Portfolio/System.jpg";
import billsg from "../../../../public/Portfolio/billspl.jpg";
import woff from "../../../../public/Portfolio/woffles.jpg";

import React from 'react'
import styles from "../../styles/Scroll.module.css"
function Verticalscroll() {
  return (
    <div className={styles.parentvs}>
      <div style={{position:"absolute"}}>
        <h1>past <br/>projects</h1>
      </div>
        <div className={styles.imtext}>            
        <Image width={0} height={0} src={woff} alt="Restaurant landing page"/>
        <h5 className={styles.txc}>Woffles</h5>
        <small className={styles.text} >Restaurant landing page <br/>
        50% more traffic
        </small>
        </div>
        <div className={styles.imtext}>            
        <Image width={0} height={0} src={Imkidsg} alt="Babysitting App"/>
        <h5 className={styles.txc}>Babysitting app </h5>
        <small className={styles.text} >
        40% more interest
        </small>
        </div>
        <div className={styles.imtext}>            
        <Image width={0} height={0} src={billsg} alt="Bill splitter"/>
        <h5 className={styles.txc}>
                        Bill splitter 
            </h5>
        <small className={styles.text} >
        20% more users
        </small>
        </div>
        <div className={styles.imtext}>            
        <Image width={0} height={0} src={Ssys} alt="Sales System"/>
              <h5 className={styles.txc}>
                System for sales 
                </h5>
              <small className={styles.text} >
                        30% increase in productivity
        </small>
        </div>
    </div>
  )
}

export default Verticalscroll