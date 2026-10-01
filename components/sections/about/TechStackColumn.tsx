"use client";

import { Layers, Terminal } from "lucide-react";
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

export default function TechStackColumn() {
  const techStackItems = [
    { name: "React", category: "Core UI", icon: SiReact },
    { name: "Next.js", category: "App Framework", icon: SiNextdotjs },
    { name: "TypeScript", category: "Strict Typing", icon: SiTypescript },
    { name: "Node.js", category: "Async Runtime", icon: SiNodedotjs },
    { name: "Express", category: "Microservices", icon: SiExpress },
    { name: "MongoDB", category: "Document DB", icon: SiMongodb },
    { name: "PostgreSQL", category: "Relational DB", icon: SiPostgresql },
    { name: "TailwindCSS", category: "Design System", icon: SiTailwindcss },
  ];

  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full gap-8">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold text-xs tracking-[0.2em] uppercase font-mono">
          <Layers className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
          <span>Core Stack // 02</span>
        </div>
        <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Monochrome Tech Stack Grid with Iridescent Hover Glow */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3.5 my-auto">
        {techStackItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.name}
              className="group relative p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/50 hover:bg-zinc-100/90 dark:hover:bg-zinc-800/80 hover:border-zinc-400/80 dark:hover:border-zinc-600/80 transition-all duration-300 flex items-center gap-3.5 shadow-sm hover:shadow-md"
            >
              <div className="p-2.5 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300 shadow-sm">
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Production Philosophy Note */}
      <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 w-full backdrop-blur-sm">
        <Terminal className="w-4 h-4 text-zinc-600 dark:text-zinc-400 flex-shrink-0" />
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal font-light">
          Engineering with modern React 19 paradigms, server components, and performant browser APIs.
        </p>
      </div>
    </div>
  );
}
