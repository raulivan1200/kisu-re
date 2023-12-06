import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedLink({ title }) {
    const [isHovered, setHovered] = useState(false);
  
    return (
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="anle"
      >
        <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered}/>
        <div className="anli">
          <AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered}/>
        </div>
      </motion.div>
    );
  }


  const titleAnimation = {
    rest: {
      transition: {
        staggerChildren: 0.003,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.003,
      },
    },
  };
  
  const letterAnimation = {
    rest: {
      y: 0,
    },
    hover: {
      y: -50,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };
  
  const letterAnimationTwo = {
    rest: {
      y: 50,
    },
    hover: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };
const AnimatedLetter = ({ character, animation }) => {
  return (
    <motion.h6
      variants={animation}
      className="anle"
    >
      {character}
    </motion.h6>
  );
};

const AnimatedWord = ({ title, animation,isHovered }) => {
    
  return (
    <motion.span
    
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="anwor"
    >
      {title
        .split("")
        .map((character, i) =>
          character === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <AnimatedLetter key={i} character={character} animation={animation} />
          )
        )}
    </motion.span>
  );
};