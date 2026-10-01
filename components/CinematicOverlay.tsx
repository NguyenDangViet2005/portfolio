"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function CinematicOverlay() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Cinematic Film Grain Texture */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 z-40 cinematic-noise select-none" 
      />

      {/* Cinematic Vignette (darkened edges) */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 z-30 cinematic-vignette select-none pointer-events-none" 
      />

      {/* Top Cinematic Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-400 dark:from-zinc-400 dark:via-white dark:to-zinc-300 origin-left shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          style={{ scaleX }}
        />
      </div>
    </>
  );
}
