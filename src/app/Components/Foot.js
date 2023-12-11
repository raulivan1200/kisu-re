"use client"
import React from 'react'
import styles from "../styles/foot.module.css"
import Viewanimate from './Viewanimate'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function Foot() {
const pathname = usePathname()

  return (
    <div className={styles.parentf}>
          <div className={styles.container}>
          <div className={styles.ll}>
            <Viewanimate >

          <h2 style={{lineHeight:"100%", marginTop:"0"}}> Let’s Talk </h2> 
            </Viewanimate>
          <Viewanimate  >

         <a className={styles.hua} href="mailto:kisu.ags@gmail.com?body=Describe%20your%20project%2C%20budget%2C%20references%2C%20etc."> <h4 style={{marginBottom:"0.2rem"}}>kisu.ags@gmail.com</h4>  </a>
          </Viewanimate>
          </div>
          <div className={styles.rr}>
          <ul className={styles.vl}>
      <li className={styles.vli}>  <Viewanimate  > 
     <a href="Work" className={styles.hua}>
      <h6> Work </h6>
     </a>

        </Viewanimate> 
      
      </li>
      <li className={styles.vli}> <Viewanimate  > 
   <a href="Services" className={styles.hua}>
      <h6> Services </h6>
   </a>

        </Viewanimate> 
      
         </li>
      <li className={styles.vli}> <Viewanimate  > 
   <a href="Clients" className={styles.hua}>
      <h6> Clients </h6>
   </a>

        </Viewanimate> 
      
        </li>
      <li className={styles.vli}> <Viewanimate  > 
   <a href="About" className={styles.hua}>
      <h6> About </h6>
   </a>

        </Viewanimate> 
      
      </li>
      <li className={styles.vli}> <Viewanimate  > 
   <a href="Contact" className={styles.hua}>
      <h6> Contact </h6>
   </a>

        </Viewanimate> 
      
        </li>
    </ul>
          </div>

          </div>

<div className='space'></div>

          <div className={styles.container}>
          <div className={styles.ll}>
            <Viewanimate  >
          <h6>Aguascalientes, Ags., México</h6>     
            </Viewanimate>

          </div>
          <div className={styles.rr}>
          <div className={styles.hzdwp}>
          <Viewanimate   any={0} iny={"-120%"}>
      <a href="https://www.facebook.com/people/Kisu/100090125962082/"> <img className='iconf' src="/icons/facebook.svg" alt=""/> </a>    
          </Viewanimate>
          <Viewanimate   any={0} iny={"-120%"}>
      <a href="https://www.instagram.com/kisu.ags/"> <img className='iconf' src="/icons/instagram.svg" alt=""/> </a>    
            </Viewanimate> 
            <Viewanimate   any={0} iny={"-120%"}>
      <a href="https://www.linkedin.com/company/98554447/">   <img className='iconf' src="/icons/lin.svg" alt=""/> </a>    
            </Viewanimate>

          </div>
          </div>

          </div>
          <div className='spacesm'></div>

          <div className={styles.container}>
          <div className={styles.ll}>
          <div className={styles.rww}>
          <Viewanimate  >
<a href="Privacy-policy" className={styles.hua}>
  <h6>Privacy </h6> 
  </a> 
          </Viewanimate>
          <Viewanimate  >
<a href="Terms&Conditions" className={styles.hua}>
  <h6>Terms </h6> 
  </a> 
          </Viewanimate>
          <Viewanimate  >
<a href="sitemap.xml" className={styles.hua}>
  <h6>Sitemap </h6> 
  </a> 
          </Viewanimate>
</div>
          </div>
          <div className={styles.rr}>
          <Viewanimate   >
          <h6>© 2020 – 2023 kisu</h6>
          </Viewanimate>
          </div>
          </div>

<div className='spacesm'></div>

    </div>
  )
}

export default Foot

{/*

 <div className={styles.ll}>
     <h2> Let’s Talk </h2> 
<h4>kisu.ags@gmail.com</h4>    
<h6>300 Broadway, San Francisco, CA 94133</h6>     
<div className={styles.rww}>
<h6>Privacy </h6> 
<h6>Terms </h6> 
<h6>Sitemap </h6> 
</div>
     </div>

     <div className={styles.rr}>

     <ul className={styles.vl}>
      <li className={styles.vli}><h6> Work </h6> </li>
      <li className={styles.vli}><h6> Services </h6> </li>
      <li className={styles.vli}><h6> Clients </h6> </li>
      <li className={styles.vli}><h6> About </h6> </li>
      <li className={styles.vli}><h6> Contact </h6> </li>
    </ul>
    <div className={styles.hzdwp}>
      <a href=""> <img className={styles.iconf} src="/icons/facebook.svg" alt=""/> </a>    
      <a href=""> <img className={styles.iconf} src="/icons/instagram.svg" alt=""/> </a>    
      <a href="">   <img className={styles.iconf} src="/icons/lin.svg" alt=""/> </a>    
          </div>
          <h6>© 2016 – 2023 Clay Global, LLC</h6>
     </div>



  <div className={styles.ll}>
        <div>
        <h2> Let’s Talk </h2> 
<h4>kisu.ags@gmail.com</h4>    
<h6>300 Broadway, San Francisco, CA 94133</h6>     
<div className={styles.rww}>
<h6>Privacy </h6> 
<h6>Terms </h6> 
<h6>Sitemap </h6> 
</div>

        </div>

    <div className={styles.rr}>
    <ul className={styles.vl}>
      <li className={styles.vli}><h6> Work </h6> </li>
      <li className={styles.vli}><h6> Services </h6> </li>
      <li className={styles.vli}><h6> Clients </h6> </li>
      <li className={styles.vli}><h6> About </h6> </li>
      <li className={styles.vli}><h6> Contact </h6> </li>
    </ul>
    <div className={styles.hzdwp}>
      <a href=""> <img className={styles.iconf} src="/icons/facebook.svg" alt=""/> </a>    
      <a href=""> <img className={styles.iconf} src="/icons/instagram.svg" alt=""/> </a>    
      <a href="">   <img className={styles.iconf} src="/icons/lin.svg" alt=""/> </a>    

          </div>

    </div>
      </div>
*/}