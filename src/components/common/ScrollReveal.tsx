import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─────────────────────────────────────────────
// 1. ScrollReveal — fade-in on scroll (section level)
// ─────────────────────────────────────────────

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up': return { hidden: { y: distance, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'down': return { hidden: { y: -distance, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'left': return { hidden: { x: distance, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'right': return { hidden: { x: -distance, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'none': return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default: return { hidden: { y: distance, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay,
      }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// 2. StaggerChildren — cascading reveal for grids
// ─────────────────────────────────────────────

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child (seconds). Default 0.1 */
  staggerDelay?: number;
  /** Initial Y offset for each child (px). Default 30 */
  distance?: number;
}

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.05,
    },
  },
});

const childVariants = (dist: number) => ({
  hidden: { y: dist, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
});

export const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  distance = 30,
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={containerVariants(staggerDelay)}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants(distance)}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// 3. ParallaxText — subtle depth shift on scroll
// ─────────────────────────────────────────────

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  /** How many px the element shifts (positive = slower). Default 50 */
  offset?: number;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  className = '',
  offset = 50,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
