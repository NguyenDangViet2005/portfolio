"use client";

import OrbitingIcons from "@/components/sections/about/OrbitingIcons";
import { Layers, Star } from "lucide-react";
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
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", angle: -90 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#7b61ff", angle: -45 },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", angle: 0 },
    { name: "Express", icon: SiExpress, color: "#e4e4e7", angle: 45 },
    { name: "React", icon: SiReact, color: "#61DAFB", angle: 90 },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", angle: 135 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", angle: 180 },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", angle: 225 },
  ];

  const orbitingIconsData = techStackItems.map((item) => {
    const IconComponent = item.icon;
    return {
      icon: <IconComponent className="w-full h-full" />,
      label: item.name,
      color: item.color,
    };
  });

  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-between min-h-[500px] lg:min-h-[580px] gap-8">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
        <div className="flex items-center gap-2 text-zinc-300 font-semibold text-xs tracking-[0.2em] uppercase">
          <Layers className="w-4 h-4 text-amber-500" />
          Tech Stack
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
      </div>

      {/* Circle Graphic Container */}
      <div className="relative w-full flex items-center justify-center overflow-visible">
        <OrbitingIcons
          icons={orbitingIconsData}
          duration={25}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-11 sm:h-11 text-amber-100"
          >
            <path d="M16 18l6-6-6-6M8 6L2 12l6 6M14 4l-4 16" />
          </svg>
        </OrbitingIcons>
      </div>

      {/* Bottom Note */}
      <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/10 bg-amber-500/[0.02] w-full mt-4">
        <Star className="w-5 h-5 text-amber-500 flex-shrink-0 animate-pulse" />
        <p className="text-xs text-zinc-400 leading-normal font-light">
          Constantly learning and exploring new technologies to build better solutions.
        </p>
      </div>
    </div>
  );
}
