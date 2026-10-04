"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** The About hero: opens in darkness, then the "power comes back" and it turns Nearwaley red. */
export function LightsOn({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      initial={reduce ? false : { backgroundColor: "#120a0a" }}
      animate={{ backgroundColor: ["#120a0a", "#120a0a", "#2a0d10", "#c21321"] }}
      transition={{ duration: 2.8, times: [0, 0.45, 0.6, 1], ease: "easeInOut" }}
      style={{ backgroundColor: "#c21321" }}
    >
      {children}
    </motion.section>
  );
}
