"use client"
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import styles from "../styles/about.module.css";

const VelocityScroll = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (value) => {
    const rangeStart = -20;
    const rangeEnd = 0;
    const scrollWidth = rangeEnd - rangeStart;
    const normalizedValue = value < rangeStart ? rangeEnd - (rangeStart - value) % scrollWidth : value;
    const valueInRange = normalizedValue % scrollWidth;

    return `${rangeStart + valueInRange}%`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.parallax} >
      <motion.div className={styles.scroller} style={{ x}}>
      <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>
        <span className={styles.span}>{children} </span>

      </motion.div>
    </div>
  );
};

export default VelocityScroll;