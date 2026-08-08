"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="relative mx-auto max-w-6xl space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center px-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em]"
          >
            Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight"
          >
            Experience and delivery programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
          >
            Professional milestones across freelance and academic work with measurable impact.
          </motion.p>
        </div>

        {/* Minimal Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-3.5 sm:left-4 md:left-44 top-2 bottom-2 w-0.5 border-l border-zinc-300 dark:border-zinc-800" />

          <div className="space-y-10 sm:space-y-14">
            {experiences.map((experience, index) => {
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8"
                >
                  {/* Left Column: Period Timestamp (Desktop view) */}
                  <div className="hidden md:block md:w-36 md:text-right shrink-0 pt-0.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
                      {experience.period}
                    </span>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-3.5 sm:left-4 md:left-44 top-1.5 sm:top-2 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-[var(--bg-color)]" />
                  </div>

                  {/* Right Column: Content */}
                  <div className="pl-8 sm:pl-10 md:pl-0 flex-1 min-w-0 w-full space-y-3">
                    {/* Period Badge for Mobile */}
                    <div className="md:hidden">
                      <span className="inline-block font-mono text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
                        {experience.period}
                      </span>
                    </div>

                    {/* Title & Link */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                          {experience.title}
                        </h3>
                        {experience.teamSize && (
                          <p className="text-xs font-mono text-zinc-500 mt-0.5">
                            Team size: {experience.teamSize}
                          </p>
                        )}
                      </div>

                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors shrink-0 mt-0.5 sm:mt-0"
                        >
                          Link ↗
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Responsibilities List */}
                    <div className="space-y-2 pt-1">
                      {experience.responsibilities.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.04 * i }}
                          className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                          <span className="flex-1 min-w-0 leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack List */}
                    {experience.tech && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] sm:text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/50"
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


