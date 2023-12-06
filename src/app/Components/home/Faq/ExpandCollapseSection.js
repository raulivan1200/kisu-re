import { motion, AnimatePresence } from 'framer-motion';
import styles from "../../../styles/Faq.module.css";

const ExpandCollapseSection = ({ toggleText, contentText, isExpanded, onToggle }) => {
  return (
    <div  className={styles.expandcont}>
      <div id='cursor-down' className={styles.buttonexpand} onClick={onToggle}>
      <div className={styles.faqrowpt}>
         <div> 
         <h5>{toggleText}</h5>
         </div>
         <div style={{paddingTop:"1.5em"}}> 
         <img src="/arrow.svg" alt="arrow" className={isExpanded ? styles.rotated : styles.normal}/> <hr className={styles.hrex}/>
         </div>
      </div>
      </div>
      <AnimatePresence >
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: .2, ease: 'easeInOut', stiffness: 300, damping: 100, mass: 100 }}
            style={{ overflow: 'hidden' }}
            className={styles.HidenText}
          >
            <div className={styles.extxt}><p>{contentText}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandCollapseSection;
