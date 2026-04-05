"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Target, Zap } from "lucide-react";
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
import { FaGraduationCap, FaSuitcase } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiTargetBold } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";

const stats = [
  { label: "GPA", value: "3.9/4.0", description: "University of Technology & Education", icon: <FaGraduationCap /> },
  { label: "Experience", value: "1+ Years", description: "Freelance & Real-world Projects", icon:<FaSuitcase />},
  { label: "Projects", value: "8+", description: "Fullstack Web Systems", icon: <IoIosRocket /> },
  { label: "Focus", value: "Full Stack", description: "Next.js & Node.js ecosystem", icon: <AiFillThunderbolt /> },
];

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

const highlights = [
  { 
    icon: <Rocket className="w-5 h-5" />, 
    title: "System Architecture", 
    desc: "Design scalable systems with optimized performance",
    color: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-indigo-500/30"
  },
  { 
    icon: <Code2 className="w-5 h-5" />, 
    title: "Clean Code", 
    desc: "Clean architecture with highly reusable components",
    color: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-purple-500/30"
  },
  { 
    icon: <Zap className="w-5 h-5" />, 
    title: "Performance", 
    desc: "Query optimization, caching, load balancing",
    color: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-indigo-500/30"
  },
  { 
    icon: <Target className="w-5 h-5" />, 
    title: "Security First", 
    desc: "API security, prevent XSS, CSRF, SQL Injection",
    color: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-purple-500/30"
  },
];

const container = { 
  hidden: { opacity: 0 }, 
  show: { opacity: 1, transition: { staggerChildren: 0.1 } } 
};
const item = { 
  hidden: { opacity: 0, y: 20 }, 
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } } 
};

export default function Overview() {
  return (
    <div className="space-y-12">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container} className="space-y-4">
        <motion.h1 variants={item} className="text-3xl font-bold tracking-tight text-white">
          Welcome to my Workspace 
        </motion.h1>
        <motion.p variants={item} className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
          I don't just write code — I architect <span className="text-indigo-400 font-semibold">optimized solutions</span> that run smoothly, reliably, and scale effortlessly.
          <br/>
          <span className="text-indigo-400 font-semibold">System thinking, </span> <span className="text-indigo-400 font-semibold">clean architecture</span>, and <span className="text-indigo-400 font-semibold">user experience</span> are the three pillars I always pursue.
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            variants={item} 
            whileHover={{ y: -5, borderColor: "rgb(99 102 241 / 0.5)" }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm hover:border-zinc-700 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-zinc-400 font-medium">{stat.label}</p>
              <span className="text-2xl group-hover:scale-110 transition-transform">{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 mb-2">{stat.value}</p>
            <p className="text-xs text-zinc-500">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {highlights.map((highlight, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className={`bg-gradient-to-br ${highlight.color} border ${highlight.borderColor} rounded-xl p-5 backdrop-blur-sm`}
          >
            <div className="text-white mb-3">{highlight.icon}</div>
            <h3 className="text-white font-semibold mb-1">{highlight.title}</h3>
            <p className="text-zinc-400 text-sm">{highlight.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Code2 className="text-indigo-400" /> Core Technologies
          </h2>
          <OrbitingIcons icons={orbitingTechs} radiusX={200} radiusY={100} duration={25} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-white flex gap-2 items-center "><PiTargetBold /> Current Goals</h2>
            <p className="text-indigo-200/70 mb-6">Aiming to become a System Architect, specializing in system architecture and performance optimization.</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <p className="font-medium text-white">Available for full-time</p>
                  <p className="text-sm text-indigo-300/60">Ready to start immediately</p>
                </div>
              </div>
              <div className="pt-4 border-t border-indigo-500/20">
                <p className="text-sm text-indigo-300/80 mb-2 flex gap-2 items-center "><RiPlantFill /> Currently learning:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 rounded-full text-indigo-200">Microservices</span>
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 rounded-full text-indigo-200">Cloud</span>
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 rounded-full text-indigo-200">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
