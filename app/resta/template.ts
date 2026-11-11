"use client";

import { motion } from "framer-motion";
import { createElement } from "react";
import type { ReactNode } from "react";

// Varian animasi untuk transisi halaman yang mulus dan elegan
const pageVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(10px)" 
  },
  enter: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const // Custom cubic-bezier untuk efek premium
    } 
  },
};

export default function Template({ children }: { children: ReactNode }) {
  return createElement(
    motion.main,
    {
      variants: pageVariants,
      initial: "hidden",
      animate: "enter",
    },
    children
  );
}
