"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiGithub,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import {
  GitBranch,
  Layers,
  Cpu,
  CheckCircle2,
  Rocket,
  Activity,
  ArrowRight,
} from "lucide-react";

// Full tools list with brand colors
const skillsRow1 = [
  { icon: SiReact, name: "React 19", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "currentColor", iconClass: "text-zinc-900 dark:text-white" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4" },
  { icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS3", color: "#1572B6" },
  { icon: SiMui, name: "MUI", color: "#007FFF" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
];

const skillsRow2 = [
  { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { icon: SiExpress, name: "Express.js", color: "currentColor", iconClass: "text-zinc-800 dark:text-zinc-200" },
  { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGithub, name: "GitHub", color: "currentColor", iconClass: "text-zinc-900 dark:text-white" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiFigma, name: "Figma UI", color: "#F24E1E" },
];

// Dynamic Production Lifecycle Stages (Left to Right flow)
const workflowStages = [
  {
    step: "01",
    phase: "ARCHITECTURE",
    title: "Discovery & System Design",
    desc: "Technical specification, DB schema normalization, API contract definitions, and performance constraints.",
    icon: Layers,
    items: ["ERD & Schema Modeling", "API Contracts (REST/GraphQL)", "State Management Design"],
  },
  {
    step: "02",
    phase: "FRONTEND",
    title: "Component & UI Engineering",
    desc: "Building isolated, accessible, and responsive components with fluid GPU-accelerated motion.",
    icon: Cpu,
    items: ["Design System Sync", "Atomic Component Tree", "Micro-Interactions (GSAP/Motion)"],
  },
  {
    step: "03",
    phase: "BACKEND",
    title: "API & Data Pipeline",
    desc: "Developing secure server endpoints, JWT authentication guards, transaction logic, and caching layers.",
    icon: GitBranch,
    items: ["Authentication & RBAC", "Optimized Query Indexes", "Middleware & Error Handling"],
  },
  {
    step: "04",
    phase: "VERIFICATION",
    title: "Testing & Code Review",
    desc: "Multi-tier quality assurance covering unit validations, edge-cases, and strict linting standards.",
    icon: CheckCircle2,
    items: ["Automated Unit Tests", "Contract & Integration Tests", "Strict TypeScript Auditing"],
  },
  {
    step: "05",
    phase: "DEPLOYMENT",
    title: "CI/CD & Release Pipeline",
    desc: "Automated container builds, zero-downtime deployment, staging verification, and domain DNS setup.",
    icon: Rocket,
    items: ["GitHub Actions Pipeline", "Dockerized Containerization", "Edge CDN & Asset Caching"],
  },
  {
    step: "06",
    phase: "SCALING",
    title: "Telemetry & Optimization",
    desc: "Continuous monitoring of Core Web Vitals, server latencies, database loads, and iterative scaling.",
    icon: Activity,
    items: ["Web Vitals (LCP/FID/CLS)", "Server Log Telemetry", "Memory & Bundle Optimization"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[var(--bg-color)] py-14 sm:py-28 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-16 right-0 text-[10vw] font-black uppercase text-zinc-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none"
      >
        ARSENAL
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Header */}
        <div className="text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            SCENE // 05 • TECHNICAL ARSENAL & WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Production Skills & Engineering Lifecycle
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Continuous delivery standards and modern technology arsenal fueling enterprise-grade applications.
          </p>
        </div>

        {/* 1. Infinite Auto-Scrolling Skills Carousel (No Border, Bold Clean Icons) */}
        <div className="space-y-5">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">
            <span>{"// CONTINUOUS TECH ARSENAL"}</span>
            <span className="hidden sm:inline">20+ MODERN TOOLS & PROTOCOLS</span>
          </div>

          {/* Marquee Row 1 (Leftward) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-10 sm:gap-14 w-max py-2"
            >
              {[...skillsRow1, ...skillsRow1].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center gap-3 shrink-0 group cursor-default transition-transform duration-200 hover:scale-110"
                  >
                    <Icon
                      className={`text-3xl sm:text-4xl transition-transform duration-300 drop-shadow-sm ${item.iconClass || ""}`}
                      style={item.color !== "currentColor" ? { color: item.color } : undefined}
                    />
                    <span className="text-sm font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Marquee Row 2 (Rightward) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-10 sm:gap-14 w-max py-2"
            >
              {[...skillsRow2, ...skillsRow2].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center gap-3 shrink-0 group cursor-default transition-transform duration-200 hover:scale-110"
                  >
                    <Icon
                      className={`text-3xl sm:text-4xl transition-transform duration-300 drop-shadow-sm ${item.iconClass || ""}`}
                      style={item.color !== "currentColor" ? { color: item.color } : undefined}
                    />
                    <span className="text-sm font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* 2. Dynamic Production Workflow (Left to Right Horizontal Flow) */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">
            <span>{"// END-TO-END PRODUCTION PIPELINE FLOW"}</span>
            <span>STAGE 01 → STAGE 06</span>
          </div>

          {/* Horizontal Flow Container with Connecting Visual Beam */}
          <div className="relative w-full overflow-x-auto pb-6 scroll-smooth" style={{ scrollbarWidth: "thin" }}>
            <div className="min-w-[1080px] grid grid-cols-6 gap-4 relative">
              {workflowStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isLast = idx === workflowStages.length - 1;

                return (
                  <div key={stage.step} className="relative flex flex-col justify-between">
                    {/* Step Card */}
                    <div className="relative p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 h-full flex flex-col justify-between group shadow-sm hover:shadow-md">
                      <div>
                        {/* Header: Step & Phase */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-lg font-bold text-zinc-900 dark:text-white">
                            {stage.step}
                          </span>
                          <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300">
                            {stage.phase}
                          </span>
                        </div>

                        {/* Title & Icon */}
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                          <h4 className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                            {stage.title}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                          {stage.desc}
                        </p>
                      </div>

                      {/* Sub-milestones */}
                      <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-1.5">
                        {stage.items.map((it) => (
                          <div
                            key={it}
                            className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400"
                          >
                            <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                            <span className="truncate">{it}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connecting Flow Arrow to Next Step */}
                    {!isLast && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black shadow-md">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
