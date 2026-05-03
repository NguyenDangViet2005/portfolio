"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Zap, Briefcase, MapPin, Globe, Server, Mail, Code2 } from "lucide-react";
import { FaGraduationCap, FaSuitcase, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";

const stats = [
  { label: "GPA", value: "3.9/4.0", description: "University of Technology & Education", icon: <FaGraduationCap /> },
  { label: "Experience", value: "1+ Years", description: "Freelance & Real-world Projects", icon:<FaSuitcase />},
  { label: "Projects", value: "7+", description: "Fullstack Web Systems", icon: <IoIosRocket /> },
  { label: "Focus", value: "Full Stack", description: "Next.js & Node.js ecosystem", icon: <AiFillThunderbolt /> },
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
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container} className="space-y-8">
        {/* Header Section */}
        <motion.div variants={item} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
              Nguyễn Đăng Việt
            </h1>
            <div className="space-y-2">
              <p className="text-zinc-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Enthusiast Fullstack Web Developer
              </p>
              <p className="text-zinc-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Da Nang City, Vietnam
              </p>
            </div>
          </div>

          {/* Contact Links - Horizontal */}
          <div className="flex flex-wrap gap-4">
            <a href="mailto:vietnguyen.1022005@gmail.com" className="text-rose-400 hover:text-rose-300 flex items-center gap-2 transition-colors text-sm">
              <Mail className="w-4 h-4" /> vietnguyen.1022005@gmail.com
            </a>
            <a href="https://github.com/NguyenDangViet2005" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors text-sm">
              <FaGithub className="w-4 h-4" /> github.com/NguyenDangViet2005
            </a>
            <a href="https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors text-sm">
              <FaLinkedin className="w-4 h-4" /> linkedin.com/in/đăng-việt
            </a>
          </div>
        </motion.div>

        {/* Stats Grid - Horizontal */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-zinc-900/50 border border-zinc-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-indigo-400">{stat.icon}</span>
                <p className="text-xs uppercase tracking-widest text-zinc-500">{stat.label}</p>
              </div>
              <p className="text-xl font-bold text-indigo-400">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-2">{stat.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Description Section */}
        <motion.div variants={item} className="space-y-4">
          <motion.div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-6 text-indigo-100/80 leading-relaxed text-sm md:text-base space-y-3">
            <p>I am Nguyen Dang Viet, an enthusiastic fullstack developer based in Da Nang City.</p>
            <p>Over the last few years I have delivered 7+ full-stack applications, maintained a 3.9/4.0 GPA, and focused on system architecture, performance, and secure engineering across Next.js, Node.js, and modern databases.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-900/40 p-6 rounded-lg border border-zinc-800/50">
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                <span className="text-indigo-400 font-bold inline-flex items-center gap-2"><Globe className="w-4 h-4" /> Front-end:</span>
                <br/>
                ReactJS, NextJS, TailwindCSS, Framer Motion, Redux Toolkit, and modern web technologies.
              </p>
            </div>
            <div className="bg-zinc-900/40 p-6 rounded-lg border border-zinc-800/50">
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                <span className="text-green-400 font-bold inline-flex items-center gap-2"><Server className="w-4 h-4" /> Back-end:</span>
                <br/>
                Node.js, TypeScript, ExpressJS, NestJS, MongoDB, PostgreSQL, and other technologies.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights - Horizontal */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="bg-zinc-900/40 border border-zinc-800/50 rounded-lg p-4">
              <div className="text-indigo-400 mb-3">{highlight.icon}</div>
              <p className="text-sm font-semibold text-white mb-2">{highlight.title}</p>
              <p className="text-xs text-zinc-400">{highlight.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
