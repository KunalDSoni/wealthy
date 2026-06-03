"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode, ElementType } from "react";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Use a staggered container instead of a single fade-up. */
  group?: boolean;
  /** Delay in seconds (single reveal only). */
  delay?: number;
  as?: ElementType;
  variants?: Variants;
};

/**
 * Scroll-reveal wrapper. Honours prefers-reduced-motion by rendering
 * content statically (no transform/opacity animation).
 */
export function Reveal({
  children,
  className,
  group = false,
  delay = 0,
  as = "div",
  variants,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const resolved = variants ?? (group ? stagger() : fadeUp);

  return (
    <MotionTag
      className={className}
      variants={resolved}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/** A single staggered child — pair inside a <Reveal group>. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
