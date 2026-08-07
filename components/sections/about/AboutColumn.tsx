"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Shield, Database, Monitor } from "lucide-react";

interface AboutColumnProps {
  sectionInView: boolean;
}

const themeMap = {
  amber: {
    card: "border-amber-500/10 bg-amber-500/[0.01] hover:border-amber-500/30 hover:bg-amber-500/[0.03] hover:shadow-[0_0_15px_rgba(245,124,0,0.06)]",
    icon: "border-amber-500/20 text-amber-400"
  },
  emerald: {
    card: "border-emerald-500/10 bg-amber-500/[0.01] hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] hover:shadow-[0_0_15px_rgba(16,185,129,0.06)]",
    icon: "border-emerald-500/20 text-emerald-400"
  },
  purple: {
    card: "border-purple-500/10 bg-amber-500/[0.01] hover:border-purple-500/30 hover:bg-purple-500/[0.03] hover:shadow-[0_0_15px_rgba(168,85,247,0.06)]",
    icon: "border-purple-500/20 text-purple-400"
  },
  cyan: {
    card: "border-cyan-500/10 bg-amber-500/[0.01] hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] hover:shadow-[0_0_15px_rgba(6,182,212,0.06)]",
    icon: "border-cyan-500/20 text-cyan-400"
  }
} as const;

const leftCards: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: keyof typeof themeMap;
}[] = [
  {
    title: "Development",
    desc: "End-to-end development of modern web applications.",
    icon: <Code2 className="w-4 h-4" />,
    color: "amber"
  },
  {
    title: "API & Backend",
    desc: "Designing secure, scalable APIs and robust server-side systems.",
    icon: <Shield className="w-4 h-4" />,
    color: "amber"
  },
  {
    title: "Database & Data Modeling",
    desc: "Building efficient databases and optimizing data performance.",
    icon: <Database className="w-4 h-4" />,
    color: "amber"
  },
  {
    title: "UI/UX Implementation",
    desc: "Crafting responsive, accessible interfaces with great UX.",
    icon: <Monitor className="w-4 h-4" />,
    color: "amber"
  }
];

export default function AboutColumn({ sectionInView }: AboutColumnProps) {
  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
      <div>
        <div className="flex items-center gap-3.5 mb-6">
          <div className="relative w-14 h-14 rounded-full border border-zinc-300 dark:border-zinc-700 overflow-hidden flex-shrink-0">
            <Image
              src="/ndv.png"
              alt="Nguyễn Đăng Việt"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-xs tracking-[0.2em] uppercase font-mono">
            About Me
          </span>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-light">
          Web Developer based in Da Nang City, Vietnam. Passionate about creating seamless user experiences through clean, scalable code and modern web technologies.
        </p>

        <div className="space-y-3 mb-8 text-xs sm:text-sm">
          <div className="text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold text-zinc-900 dark:text-white font-mono">Front-end:</span>{" "}
            <span className="text-zinc-600 dark:text-zinc-400 font-light">
              I have experience working with ReactJS (NextJS, Hook, Redux Toolkit), Material UI, TailwindCSS, Shadcn/ui, Bootstrap, Axios, and other technologies.
            </span>
          </div>
          <div className="text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold text-zinc-900 dark:text-white font-mono">Back-end:</span>{" "}
            <span className="text-zinc-600 dark:text-zinc-400 font-light">
              I have experience working with Node.JS, TypeScript, ExpressJS, NestJS, MongoDB, MySQL, and other technologies.
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
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 group"
            >
              <div className="w-9 h-9 flex-shrink-0 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-200">
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
