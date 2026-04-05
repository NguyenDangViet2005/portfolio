"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Lightbulb } from "lucide-react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { PiTargetBold } from "react-icons/pi";

const timeline = [
  {
    period: "10/2025 – Present",
    title: "Freelance Web Developer",
    icon: <Briefcase className="w-5 h-5" />,
    desc: "Delivered end-to-end outsourced projects, managing full lifecycle from requirements to deployment.",
    highlights: ["Full-stack development", "Client communication", "Project management"],
    active: true,
    color: "bg-indigo-500"
  },
  {
    period: "2023 – 2025",
    title: "University of Technology and Education",
    icon: <GraduationCap className="w-5 h-5" />,
    desc: "Maintained a 3.9/4.0 GPA while building real-world projects and learning system architecture.",
    highlights: ["3.9/4.0 GPA", "Data Structures", "System Design"],
    active: false,
    color: "bg-zinc-700"
  },
];

const passions = [
  { icon: <PiTargetBold />, title: "System Architecture", desc: "Design scalable and maintainable systems" },
  { icon: <AiFillThunderbolt />, title: "Performance", desc: "Optimize from database to UI" },
  { icon: <IoMdLock />, title: "Security", desc: "Secure applications at every layer" },
  { icon: <IoRocket />, title: "Innovation", desc: "Continuously learning new technologies" },
];

export default function Story() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Heart className="text-indigo-400" />
          My Journey
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          The journey from student to Fullstack Developer, aiming to become a System Architect.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-zinc-800"></div>
        
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-20"
            >
              <div className={`absolute left-5 top-2 w-6 h-6 rounded-full ${item.color} border-4 border-zinc-950 flex items-center justify-center text-white z-10`}>
                {item.icon}
              </div>
              
              <div className={`bg-gradient-to-br ${item.active ? 'from-indigo-900/20 to-purple-900/20 border-indigo-500/30' : 'from-zinc-900/50 to-zinc-800/30 border-zinc-700/50'} border rounded-2xl p-6 backdrop-blur-sm`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-zinc-400">{item.period}</p>
                  </div>
                  {item.active && (
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium">
                      Active
                    </span>
                  )}
                </div>
                
                <p className="text-zinc-400 mb-4 leading-relaxed">{item.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Lightbulb className="text-purple-400" />
          What Drives Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {passions.map((passion, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex flex-col items-center text-center hover:border-zinc-700 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{passion.icon}</div>
              <h3 className="font-semibold text-white mb-2">{passion.title}</h3>
              <p className="text-sm text-zinc-400">{passion.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><FiMessageCircle /> Philosophy</h3>
        <p className="text-zinc-300 leading-relaxed italic">
          "I aim to become a Fullstack Developer specializing in system architecture and performance optimization. 
          My goal is to create practical, useful applications that deliver long-term value to users."
        </p>
      </motion.div>
    </div>
  );
}

