"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experiences";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated laser beam timeline that traces as user scrolls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-14 sm:py-28 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-20 left-0 text-[10vw] font-black uppercase text-zinc-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none"
      >
        CHRONICLES
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            SCENE // 04 • CHRONICLES
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight"
          >
            Experience & Delivery Milestones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed"
          >
            Professional milestones across freelance and academic work, delivering measurable engineering impact.
          </motion.p>
        </div>

        {/* Minimal Timeline Container with Animated Laser Light Beam */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Base Inactive Timeline Track */}
          <div className="absolute left-3.5 sm:left-4 md:left-40 top-3 bottom-4 w-[2px] bg-zinc-200 dark:bg-zinc-800/80 -translate-x-1/2" />

          {/* Active Glowing Laser Light Beam */}
          <motion.div
            style={{ scaleY: smoothProgress }}
            className="absolute left-3.5 sm:left-4 md:left-40 top-3 bottom-4 w-[2px] bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400 origin-top -translate-x-1/2 shadow-[0_0_12px_rgba(255,255,255,0.8)] z-0"
          />

          <div className="space-y-14 sm:space-y-18">
            {experiences.map((experience, index) => {
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8 group"
                >
                  {/* Left Column: Period Timestamp (Desktop view) */}
                  <div className="hidden md:block md:w-36 md:text-right shrink-0 pt-0.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      {experience.period}
                    </span>
                  </div>

                  {/* Interactive Timeline Node Dot */}
                  <div className="absolute left-3.5 sm:left-4 md:left-40 top-2 -translate-x-1/2 z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-[var(--bg-color)] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
                  </div>

                  {/* Right Column: Paragraph Content - Clean Editorial Flow (No box border) */}
                  <div className="pl-8 sm:pl-10 md:pl-0 flex-1 min-w-0 w-full pt-0.5 space-y-3">
                    {/* Period Badge for Mobile */}
                    <div className="md:hidden">
                      <span className="inline-block font-mono text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
                        {experience.period}
                      </span>
                    </div>

                    {/* Title & Link */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                          {experience.title}
                        </h3>
                        {experience.teamSize && (
                          <p className="text-xs font-mono text-zinc-500 mt-1">
                            Team size: {experience.teamSize}
                          </p>
                        )}
                      </div>

                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors shrink-0"
                        >
                          <span>Review Program</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>

                    {/* Paragraph Description */}
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                      {experience.description}
                    </p>

                    {/* Responsibilities Editorial List */}
                    <div className="space-y-2 pt-2">
                      {experience.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-200 transition-colors" />
                          <span className="flex-1 min-w-0 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Minimalist Tech Tags */}
                    {experience.tech && (
                      <div className="flex flex-wrap gap-2 pt-3">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
