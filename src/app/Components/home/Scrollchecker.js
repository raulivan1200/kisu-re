import React, { useState, useEffect } from 'react';
import Verticalscroll from './Verticalscroll';
import Scroll from './Horizontalscroll';

function Scrollcheker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 770); // Adjust breakpoint as needed
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div >        
    {isMobile ? <Verticalscroll/> : <Scroll/>}
  </div>
  )
}

export default Scrollcheker