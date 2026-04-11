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
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container} className="space-y-6">
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
            Nguyễn Đăng Việt
          </h1>
          <div className="space-y-2 mb-6">
            <p className="text-zinc-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Enthusiast Fullstack Web Developer
            </p>
            <p className="text-zinc-400 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Da Nang City, Vietnam
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-indigo-500/10 border border-indigo-500/20 rounded-md p-6 text-indigo-100/80 leading-relaxed text-sm md:text-base">
          Hi there, welcome to look at my profile! <br/>
          With experience in JavaScript/TypeScript ecosystems, I have a strong passion for creating seamless user experiences and believe that simplifying code leads to more agile applications.<br/>
          I am a team player, friendly, and always eager to approach new technical challenges.
        </motion.div>

        <motion.div variants={item} className="space-y-3 bg-zinc-900/40 p-6 rounded-md border border-zinc-800/50">
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
            <span className="text-indigo-400 font-bold inline-flex items-center gap-2"><Globe className="w-4 h-4" /> Front-end:</span> I have experience working with <span className="text-white font-medium">ReactJS, NextJS, TailwindCSS, Framer Motion, Redux Toolkit</span>, and other modern technologies.
          </p>
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
            <span className="text-green-400 font-bold inline-flex items-center gap-2"><Server className="w-4 h-4" /> Back-end:</span> I have experience working with <span className="text-white font-medium">Node.js, TypeScript, ExpressJS, NestJS, MongoDB, PostgreSQL</span>, and other technologies.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-col gap-3 pt-2">
          <a href="mailto:vietnguyen.1022005@gmail.com" className="text-rose-400 hover:text-rose-300 flex items-center gap-2 transition-colors w-fit">
            <Mail className="w-4 h-4" /> vietnguyen.1022005@gmail.com
          </a>
          <a href="https://github.com/NguyenDangViet2005" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors w-fit">
            <FaGithub className="w-4 h-4" /> github.com/NguyenDangViet2005
          </a>
          <a href="https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors w-fit">
            <FaLinkedin className="w-4 h-4" /> linkedin.com/in/đăng-việt-82a881292
          </a>
        </motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            variants={item} 
            whileHover={{ y: -5, borderColor: "rgb(99 102 241 / 0.5)" }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-md p-6 backdrop-blur-sm hover:bg-purple-900 text-white transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{stat.label}</p>
              <span className="text-2xl group-hover:scale-110 transition-transform">{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold mb-2">{stat.value}</p>
            <p className="text-xs">{stat.description}</p>
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
            className={`bg-gradient-to-br ${highlight.color} border ${highlight.borderColor} rounded-md p-5 backdrop-blur-sm`}
          >
            <div className="text-white mb-3">{highlight.icon}</div>
            <h3 className="text-white font-semibold mb-1">{highlight.title}</h3>
            <p className="text-zinc-400 text-sm">{highlight.desc}</p>
          </motion.div>
        ))}
      </motion.div>


    </div>
  );
}
