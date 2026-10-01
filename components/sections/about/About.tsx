"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Code2,
  Shield,
  Database,
  Monitor,
  Gauge,
  Lock,
  Puzzle,
  Terminal,
  Radio,
  ExternalLink,
} from "lucide-react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiDownload,
} from "react-icons/fi";

const specializationPillars = [
  {
    code: "01",
    title: "Fullstack Architecture",
    desc: "End-to-end modern web applications built on scalable React, Next.js, and Node.js ecosystems.",
    icon: Code2,
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    code: "02",
    title: "High-Throughput APIs",
    desc: "Designing resilient REST & GraphQL endpoints with strict authorization and clean modular routing.",
    icon: Shield,
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    code: "03",
    title: "Data Modeling & Cache",
    desc: "Architecting relational SQL schemas & MongoDB document models with query index optimization.",
    icon: Database,
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    code: "04",
    title: "Cinematic UI/UX",
    desc: "Crafting fluid, GPU-accelerated motion experiences with GSAP, Lenis, and Framer Motion.",
    icon: Monitor,
    accent: "from-purple-500/20 to-pink-500/10",
  },
];

const coreValues = [
  {
    icon: Gauge,
    title: "Performance First",
    desc: "Obsessed with 100/100 Core Web Vitals, minimal bundle footprints, and streaming rendering.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Security",
    desc: "Sanitized data contracts, strict JWT tokens, CORS compliance, and defensive coding.",
  },
  {
    icon: Puzzle,
    title: "System Thinking",
    desc: "Deconstructing ambiguous requirements into clean domain models and pragmatic solutions.",
  },
  {
    icon: Terminal,
    title: "Clean Codebase",
    desc: "Strict TypeScript types, modular folder structures, and high maintainability.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-14 sm:py-28 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Watermark & Ambient Spotlights */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-6 text-[12vw] font-black uppercase text-zinc-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none"
      >
        DOSSIER
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-32 w-96 h-96 bg-zinc-400/10 dark:bg-zinc-600/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            SCENE // 02 • IDENTITY & SPECIALIZATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Engineering Profile & Core Capabilities
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            A comprehensive dossier detailing technical philosophy, architectural pillars, and production execution.
          </p>
        </div>

        {/* 1. Cinematic Hologram Dossier Slate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-b from-white/90 via-zinc-50/50 to-white/90 dark:from-zinc-900/80 dark:via-zinc-950/60 dark:to-zinc-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-xl overflow-hidden"
        >
          {/* Subtle Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-600 to-transparent opacity-60" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            {/* Left: Avatar with Radar Ring */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 shrink-0 w-full lg:w-auto">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1 bg-gradient-to-tr from-zinc-300 via-zinc-100 to-zinc-400 dark:from-zinc-700 dark:via-zinc-900 dark:to-zinc-600 shadow-xl shrink-0 group">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                  <Image
                    src="/ndv.jpg"
                    alt="Nguyễn Đăng Việt (Nguyen Dang Viet) - Full-Stack Software Engineer"
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                {/* Live Radar Pulse Dot */}
                <div className="absolute -bottom-1.5 -right-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black border-2 border-[var(--bg-color)] shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800/80 text-[10px] font-mono tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
                  <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
                  <span>STATUS: ACTIVE & AVAILABLE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  Nguyen Dang Viet
                </h3>
                <p className="text-xs font-mono text-zinc-500 tracking-wider uppercase">
                  Full-Stack Software Engineer • Da Nang, Vietnam
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] font-mono text-zinc-400">
                  <FiMapPin className="w-3 h-3 text-zinc-500" />
                  <span>16.0544° N, 108.2022° E</span>
                </div>
              </div>
            </div>

            {/* Right: Bio Narrative */}
            <div className="flex-1 space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                I am a dedicated software engineer with an obsession for high-performance web systems, elegant user interfaces, and resilient backend architectures.
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Specialized in the React 19 / Next.js ecosystem, modern TypeScript, distributed Node.js runtimes, and multi-paradigm databases. I thrive on translating ambitious product requirements into seamless, cinematic digital realities with pixel-perfect attention to detail.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. Four Specialization Pillars (Cinematic Hologram Cards) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">
            <span>// ARCHITECTURAL SPECIALIZATION PILLARS</span>
            <span>04 DOMAINS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {specializationPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-white shadow-sm group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-zinc-400">
                        {pillar.code}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight pt-1">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    CORE DOMAIN
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Core Values Matrix & Fast Track Communications Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: 4 Delivery Values (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block px-1">
              // PRODUCTION EXECUTION PRINCIPLES
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 backdrop-blur-sm space-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-zinc-900 dark:text-white" />
                      <h5 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-900 dark:text-white">
                        {val.title}
                      </h5>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Communications Console (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block px-1">
              // FAST-TRACK COMMUNICATIONS
            </span>

            <div className="p-6 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur-sm space-y-5">
              <div className="space-y-2.5">
                <a
                  href="mailto:vietnguyen.1022005@gmail.com"
                  className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <FiMail className="w-4 h-4 text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200 truncate">
                      vietnguyen.1022005@gmail.com
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href="tel:+84905507622"
                  className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <FiPhone className="w-4 h-4 text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200">
                      (+84) 905 507 622
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* Socials & CV Download */}
              <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/NguyenDangViet2005"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors"
                    title="GitHub"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors"
                    title="LinkedIn"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/dangvietdzday"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors"
                    title="Facebook"
                  >
                    <FiFacebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/dangviet102/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors"
                    title="Instagram"
                  >
                    <FiInstagram className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href="/NguyenDangViet_cv.pdf"
                  download="NguyenDangViet_cv.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium rounded-xl transition-all duration-200 text-xs shadow-sm hover:scale-105 active:scale-95"
                >
                  <FiDownload className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
