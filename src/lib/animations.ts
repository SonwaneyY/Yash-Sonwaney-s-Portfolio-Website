import type { Variants, Transition } from "framer-motion";

// Shared easing curve — smooth deceleration
const ease = [0.25, 0.1, 0.25, 1] as const;

// Standard transition
export const defaultTransition: Transition = {
  duration: 0.6,
  ease,
};

// Fade in + slide up — used for most scroll-triggered entrances
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Stagger container — wrap around a group of children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger with wider gap (for cards)
export const staggerContainerWide: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Text reveal — word slides up from behind mask
export const textRevealWord: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

// Text reveal container
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// Fade only (no movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

// For delayed sequential reveals (hero sections)
export const heroSequence = {
  tagline: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease, delay: 0.3 },
    },
  },
  bio: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease, delay: 0.5 },
    },
  },
  cta: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease, delay: 0.7 },
    },
  },
};

// Viewport settings for whileInView
export const viewportOnce = {
  once: true,
  margin: "-10%" as const,
};
