"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Shield, Database, Monitor } from "lucide-react";

interface AboutColumnProps {
  sectionInView: boolean;
}

const leftCards = [
  {
    title: "Fullstack Architecture",
    desc: "End-to-end development of modern, resilient web applications.",
    icon: <Code2 className="w-4 h-4" />,
  },
  {
    title: "API & Backend Systems",
    desc: "Designing secure, high-throughput REST and GraphQL endpoints.",
    icon: <Shield className="w-4 h-4" />,
  },
  {
    title: "Database Modeling",
    desc: "Building relational & NoSQL schemas with query optimization.",
    icon: <Database className="w-4 h-4" />,
  },
  {
    title: "Interactive UI/UX",
    desc: "Crafting fluid, accessible web interfaces with cinematic polish.",
    icon: <Monitor className="w-4 h-4" />,
  },
];

export default function AboutColumn({ sectionInView }: AboutColumnProps) {
  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
      <div>
        {/* Profile Header with Camera Lens Focus Ring */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-zinc-400 via-zinc-200 to-zinc-600 dark:from-zinc-700 dark:via-white dark:to-zinc-800 shadow-md">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/ndv.jpg"
                alt="Nguyễn Đăng Việt"
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold text-xs tracking-[0.2em] uppercase font-mono block">
              Dossier // 01
            </span>
            <span className="text-zinc-500 text-[11px] font-mono">Full-Stack Engineer</span>
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-light">
          Web Developer based in Da Nang City, Vietnam. Passionate about creating seamless user experiences through clean, scalable code and modern web technologies.
        </p>

        <div className="space-y-3 mb-8 text-xs sm:text-sm">
          <div className="text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold text-zinc-900 dark:text-white font-mono">Front-end:</span>{" "}
            <span className="text-zinc-600 dark:text-zinc-400 font-light">
              React, Next.js, TypeScript, TailwindCSS, Framer Motion, GSAP, Redux Toolkit, Shadcn/UI.
            </span>
          </div>
          <div className="text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold text-zinc-900 dark:text-white font-mono">Back-end:</span>{" "}
            <span className="text-zinc-600 dark:text-zinc-400 font-light">
              Node.js, Express, NestJS, MongoDB, MySQL, PostgreSQL, RESTful APIs, System Design.
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {leftCards.map((card, index) => {
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: -20 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="flex gap-3.5 p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/40 hover:bg-zinc-100/90 dark:hover:bg-zinc-800/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-9 h-9 flex-shrink-0 rounded-lg border border-zinc-300/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                {card.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[13px] text-zinc-900 dark:text-zinc-100 mb-0.5">{card.title}</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal font-light">{card.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
