"use client";

import { Layers, Code2 } from "lucide-react";
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
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Next.js", category: "Framework", icon: SiNextdotjs },
    { name: "TypeScript", category: "Language", icon: SiTypescript },
    { name: "Node.js", category: "Runtime", icon: SiNodedotjs },
    { name: "Express", category: "Backend", icon: SiExpress },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "TailwindCSS", category: "Styling", icon: SiTailwindcss },
  ];

  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full gap-8">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-semibold text-xs tracking-[0.2em] uppercase font-mono">
          <Layers className="w-4 h-4 text-zinc-900 dark:text-white" />
          Tech Stack
        </div>
        <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Monochrome Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 my-auto">
        {techStackItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.name}
              className="group p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex items-center gap-3.5"
            >
              <div className="p-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-200">
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 w-full">
        <Code2 className="w-4 h-4 text-zinc-600 dark:text-zinc-400 flex-shrink-0" />
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal font-light">
          Continuously adopting modern frameworks, optimal algorithms, and performant web APIs.
        </p>
      </div>
    </div>
  );
}
