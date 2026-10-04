"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 0.84, 0.24, 1] as const;

/** Fades + lifts its children into place when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/** Splits a headline into words and rises each one in sequence. */
export function SplitHeadline({
  text,
  accent,
  className,
  as = "h1",
}: {
  text: string;
  /** words (exact match) to colour in brand red */
  accent?: string[];
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${accent?.includes(w) ? "text-brand" : ""}`}
            variants={{
              hidden: reduce ? { y: 0 } : { y: "105%" },
              show: { y: 0, transition: { duration: 0.9, ease } },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
