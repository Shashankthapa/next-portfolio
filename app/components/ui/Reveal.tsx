"use client";

import { motion } from "framer-motion";
import React, { HTMLProps } from "react";

interface Props {
  children: React.ReactNode;
  width?: "100%" | "fit-content";
  cssPropertyMotion: string;  
  cssProperty: string;
  height?: "100vh" | "fit-content";
}

const Reveal: React.FC<Props> = ({
  children,
  cssPropertyMotion,
  width,
  height,
  cssProperty,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        height,
        backgroundColor: "red",
      }}
      className={`${cssProperty}`}
    >
      <motion.div
        className={`${cssPropertyMotion}`}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
