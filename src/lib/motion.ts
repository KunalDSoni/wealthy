import type { Variants, Transition } from "framer-motion";

/**
 * Shared motion tokens — one motion language across the whole site.
 * Elegant, fast, intentional. Easing matches the design-system "luxury" curve.
 */
export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export const TRANSITION: Transition = {
  duration: 0.7,
  ease: EASE_LUXURY,
};

/** Default viewport config for scroll-reveal: fire once, slightly early. */
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Fade + rise — the workhorse reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: TRANSITION },
};

/** Container that staggers its children. */
export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

/** Subtle scale-in for cards / media. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: TRANSITION },
};
