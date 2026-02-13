import { motion } from 'framer-motion';

export const fadeIn = (duration = 0.5) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration },
});

export const fadeOut = (duration = 0.5) => ({
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 1 },
  transition: { duration },
});

export const slideInFromLeft = (duration = 0.5, distance = '100%') => ({
  initial: { x: `-${distance}` },
  animate: { x: 0 },
  exit: { x: `-${distance}` },
  transition: { duration },
});

export const slideOutToLeft = (duration = 0.5, distance = '100%') => ({
  initial: { x: 0 },
  animate: { x: `-${distance}` },
  exit: { x: 0 },
  transition: { duration },
});

export const bounce = (duration = 1) => ({
  animate: {
    y: [0, -20, 0],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
});

export const stopAnimation = () => ({
  initial: {},
  animate: {},
  exit: {},
  transition: {},
});