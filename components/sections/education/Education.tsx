"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, GraduationCap, Award } from "lucide-react";

export default function Education() {
  const points = [
    "During my tenure at university, I systematically mastered algorithmic problem-solving, software architecture, and modern full-stack application development.",
    "Driven by user-centric interface engineering and performant runtime experiences, with extensive personal R&D into cutting-edge web technologies.",
    "Engineered robust projects combining React, Next.js, Node.js, and multi-paradigm database architectures (SQL & NoSQL).",
    "Enhanced collaborative software development through team leadership, Git collaboration workflows, and clear technical communication.",
  ];

  return (
    <section
      id="education"
      className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-14 sm:py-28 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200 overflow-hidden"
    >
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-16 left-0 text-[10vw] font-black uppercase text-zinc-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none"
      >
        ACADEMIA
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            SCENE // 07 • ACADEMIA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Academic Background & Honors
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Theoretical computer science foundations and academic scholarship records at university.
          </p>
        </div>

        {/* Content Flow - Seamless Editorial Reading (No Box Borders) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
        >
          {/* Main Reading Flow */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            {/* University Title & Degree */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <a
                  href="http://ute.udn.vn/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 group w-fit"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    University of Technology and Education
                  </h3>
                  <ExternalLink size={18} className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>

                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  Aug 2023 – Present
                </span>
              </div>

              <p className="text-zinc-500 font-mono text-xs tracking-wider uppercase">
                The University of Danang • Major in Information Technology
              </p>

              <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed pt-2">
                Third-year student focusing on Full-Stack Web Development, modern architectures, and resilient system engineering.
              </p>
            </div>

            {/* Academic Metrics - Clean Editorial Statistics (No box borders) */}
            <div className="grid grid-cols-2 gap-8 py-4 border-y border-zinc-200/70 dark:border-zinc-800/70">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-amber-500" />
                  <span>Cumulative GPA</span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-zinc-900 dark:text-white tracking-tight">
                  3.92 <span className="text-sm font-light text-zinc-400">/ 4.0</span>
                </div>
                <p className="text-xs text-zinc-500 font-light">Near-perfect academic distinction</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span>Merit Honors</span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-zinc-900 dark:text-white tracking-tight">
                  5x <span className="text-sm font-light text-zinc-400">Scholarships</span>
                </div>
                <p className="text-xs text-zinc-500 font-light">Consecutive semester study awards</p>
              </div>
            </div>

            {/* Detailed Learning Paragraphs (No box borders, natural reading flow) */}
            <div className="space-y-4 pt-1">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                ACADEMIC & PRACTICAL TAKEAWAYS:
              </h4>
              <div className="space-y-3.5">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-light"
                  >
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 pt-1 select-none">
                      0{index + 1}.
                    </span>
                    <p className="flex-1 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* School Emblem - Seamless without hard box framing */}
          <div className="w-full lg:w-72 flex-shrink-0 flex flex-col items-center justify-center order-1 lg:order-2 self-center lg:self-start pt-4">
            <div className="relative w-48 sm:w-56 aspect-square opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/ute.png"
                alt="University of Technology and Education Logo"
                fill
                sizes="(max-width: 1024px) 200px, 240px"
                className="object-contain filter drop-shadow-md"
              />
            </div>
            <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase mt-4 text-center">
              Danang University of Technology & Education
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
