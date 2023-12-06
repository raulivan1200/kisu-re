import { motion, AnimatePresence } from 'framer-motion';
import styles from "../../../styles/Faq.module.css";

const LilExpandCollapseSection = ({ toggleText, contentText, isExpanded, onToggle,onMouseEnter  }) => {
  return (
    <div  className={styles.expandcont}>
      <div id='cursor-down' className={styles.buttonexpandll} onClick={onToggle} onMouseEnter={onMouseEnter} >
     <div className={styles.faqrowp}>
     <h5 style={{margin:"0"}}>{toggleText}</h5><img src="/arrow.svg" alt="arrow" className={isExpanded ? styles.rotated : styles.normal}/>
     </div>
      </div>
      <AnimatePresence >
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: .2, ease: 'easeInOut', stiffness: 30, damping: 10, mass: 300 }}
            style={{ overflow: 'hidden',}}
            className={styles.HidenText}
          >
            <div className={styles.extxt}><p>{contentText}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LilExpandCollapseSection;
