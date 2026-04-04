"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Database, LayoutTemplate } from "lucide-react";

// Keeping the same content you already liked
const stats = [
  { label: "GPA", value: "3.9/4.0", description: "University of Tech & Education" },
  { label: "Experience", value: "1+ Years", description: "Freelance & Real-world Projects" },
  { label: "Projects", value: "3+", description: "Fullstack Web Systems" },
  { label: "Focus", value: "Full Stack", description: "Next.js & Node.js ecosystem" },
];

const skills = [
  { name: "React / Next.js", icon: <LayoutTemplate size={18} />, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Tailwind CSS", icon: <Code2 size={18} />, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "Express / NestJS", icon: <Briefcase size={18} />, color: "text-green-400", bg: "bg-green-400/10" },
  { name: "PostgreSQL / MongoDB", icon: <Database size={18} />, color: "text-purple-400", bg: "bg-purple-400/10" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } };

export default function Overview() {
  return (
    <div className="space-y-12">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container} className="space-y-2">
        <motion.h1 variants={item} className="text-3xl font-bold tracking-tight text-white">Welcome to my Workspace</motion.h1>
        <motion.p variants={item} className="text-zinc-400 max-w-2xl text-lg">
          Aspiring Full Stack Developer dedicated to building efficient, scalable web applications. 
          Eager to leverage strong front-end and back-end fundamentals to contribute to a professional team.
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={i} variants={item} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm hover:border-zinc-700 transition-colors">
            <p className="text-zinc-400 font-medium mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 mb-2">{stat.value}</p>
            <p className="text-xs text-zinc-500">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Code2 className="text-indigo-400" /> Core Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className={`p-3 rounded-lg ${skill.bg} ${skill.color}`}>{skill.icon}</div>
                <div className="font-medium text-zinc-200">{skill.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-white">Current Status</h2>
            <p className="text-indigo-200/70 mb-6">Actively seeking Full Stack opportunities.</p>
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
