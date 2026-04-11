"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import OrbitingIcons from "@/components/OrbitingIcons";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiNestjs, 
  SiPostgresql, 
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { PiTargetBold } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";

const orbitingTechs = [
  { icon: <SiReact size={24} className="text-[#61DAFB]" />, label: "React", color: "bg-[#61DAFB]/10" },
  { icon: <SiNextdotjs size={24} className="text-white" />, label: "Next.js", color: "bg-zinc-800" },
  { icon: <SiTailwindcss size={24} className="text-[#06B6D4]" />, label: "Tailwind", color: "bg-[#06B6D4]/10" },
  { icon: <SiTypescript size={24} className="text-[#3178C6]" />, label: "TypeScript", color: "bg-[#3178C6]/10" },
  { icon: <SiNodedotjs size={24} className="text-[#339933]" />, label: "Node.js", color: "bg-[#339933]/10" },
  { icon: <SiNestjs size={24} className="text-[#E0234E]" />, label: "NestJS", color: "bg-[#E0234E]/10" },
  { icon: <SiPostgresql size={24} className="text-[#4169E1]" />, label: "PostgreSQL", color: "bg-[#4169E1]/10" },
  { icon: <SiMongodb size={24} className="text-[#47A248]" />, label: "MongoDB", color: "bg-[#47A248]/10" },
];

export default function Playground() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Skills & Goals</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.2 }} 
          className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-md p-8 transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/30 group/card"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 group-hover/card:text-indigo-400 transition-colors">
            <Code2 className="text-indigo-400" /> Core Technologies
          </h2>
          <OrbitingIcons icons={orbitingTechs} radiusX={200} radiusY={100} duration={25} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.3 }} 
          className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-md p-8 flex flex-col justify-between transition-all duration-300 hover:from-zinc-900/50 hover:to-zinc-900/50 hover:border-zinc-800 group/goals"
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-white flex gap-2 items-center group-hover/goals:text-zinc-400 transition-colors">
              <PiTargetBold /> Current Goals
            </h2>
            <p className="text-indigo-200/70 mb-6 group-hover/goals:text-zinc-400 transition-colors">Aiming to become a System Architect, specializing in system architecture and performance optimization.</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <p className="font-medium text-white group-hover/goals:text-zinc-300 transition-colors">Available for full-time</p>
                  <p className="text-sm text-indigo-300/60 group-hover/goals:text-zinc-500 transition-colors">Ready to start immediately</p>
                </div>
              </div>
              <div className="pt-4 border-t border-indigo-500/20 group-hover/goals:border-zinc-800 transition-colors">
                <p className="text-sm text-indigo-300/80 mb-2 flex gap-2 items-center group-hover/goals:text-zinc-400 transition-colors">
                  <RiPlantFill /> Currently learning:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 rounded-sm text-indigo-200 group-hover/goals:bg-zinc-800/80 group-hover/goals:text-zinc-400 transition-colors">Microservices</span>
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 rounded-sm text-indigo-200 group-hover/goals:bg-zinc-800/80 group-hover/goals:text-zinc-400 transition-colors">Cloud</span>
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 rounded-sm text-indigo-200 group-hover/goals:bg-zinc-800/80 group-hover/goals:text-zinc-400 transition-colors">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
