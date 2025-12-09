// components/Layout.jsx
import React from "react";
import { motion } from "framer-motion";
import { slide, opacity, perspective, contentFade } from "./anim";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function Layout({ children }) {
  return (
    <div className="inner">
      <motion.div className="slide" {...anim(slide)} />
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          {/* Add content fade animation */}
          <motion.div {...anim(contentFade)}>{children}</motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
