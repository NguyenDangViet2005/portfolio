"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const coreStack = [
  {
    name: "React 19",
    category: "Core Library",
    role: "Modern Hooks, Suspense, Concurrent Rendering, Component Architecture.",
    icon: SiReact,
    brandColor: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Fullstack Framework",
    role: "App Router, Server Components, Streaming SSR & SEO Optimization.",
    icon: SiNextdotjs,
    brandColor: "currentColor",
    iconClass: "text-black dark:text-white",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    role: "Strict Typing, Interfaces, Generics & Maintainable Enterprise Codebases.",
    icon: SiTypescript,
    brandColor: "#3178C6",
  },
  {
    name: "Node.js",
    category: "Runtime Environment",
    role: "Asynchronous Event-driven Architecture, High-concurrency I/O.",
    icon: SiNodedotjs,
    brandColor: "#5FA04E",
  },
  {
    name: "Express.js",
    category: "Backend Engine",
    role: "Modular Routing, Middleware Pipelines & Secure RESTful APIs.",
    icon: SiExpress,
    brandColor: "currentColor",
    iconClass: "text-zinc-800 dark:text-zinc-200",
  },
  {
    name: "MongoDB",
    category: "NoSQL Database",
    role: "Document Storage, Mongoose Modeling, High-scale Query Aggregation.",
    icon: SiMongodb,
    brandColor: "#47A248",
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    role: "ACID Compliance, Relational Integrity & Complex Query Optimization.",
    icon: SiPostgresql,
    brandColor: "#4169E1",
  },
  {
    name: "TailwindCSS",
    category: "Design System",
    role: "Utility-first CSS, Responsive Viewports & Fluid Micro-interactions.",
    icon: SiTailwindcss,
    brandColor: "#06B6D4",
  },
];

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-14 sm:py-28 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-16 right-4 text-[10vw] font-black uppercase text-zinc-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none"
      >
        ARCHITECTURE
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            CORE ARSENAL • ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Core Engineering Stack
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            The foundational pillars powering my production applications, selected for scalability, developer velocity, and runtime performance.
          </p>
        </div>

        {/* 8 Core Technologies Grid with Adaptive Theme Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {coreStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800 shadow-sm transition-transform duration-300 group-hover:scale-110 ${tech.iconClass || ""}`}
                      style={tech.brandColor && tech.brandColor !== "currentColor" ? { color: tech.brandColor } : undefined}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase px-2 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 border border-zinc-300/40 dark:border-zinc-700/40">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                    {tech.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {tech.role}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>DEPLOYMENT</span>
                  <span className="text-zinc-600 dark:text-zinc-300">PRODUCTION</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm max-w-3xl mx-auto">
          <Terminal className="w-5 h-5 text-zinc-700 dark:text-zinc-300 shrink-0" />
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Continuous architecture evaluation: Benchmarking bundle footprints, runtime memory allocations, and latency to deliver optimal user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
