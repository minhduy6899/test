"use client";

/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, delay = 0.35 }) => {
  const ref = useRef();

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 95 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay }}
      >
        {children}
      </motion.div>
      {/* slide control */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.8, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          //   background: '#f1f1f1',
          //   zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;
