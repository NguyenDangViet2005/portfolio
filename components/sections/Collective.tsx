"use client";

import { motion, useInView } from "framer-motion";
import {
  Code2
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import OrbitingIcons from "@/components/OrbitingIcons";
import Image from "next/image";
import ShinyText from "@/components/ShinyText";
import { skillIcons } from "@/data/skills";
import { stats } from "@/data/stats";

const highlights = [
  { 
    title: "System Architecture", 
    desc: "Scalable & optimized systems",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  { 
    title: "Clean Code", 
    desc: "Reusable components",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  { 
    title: "Performance", 
    desc: "Optimization & caching",
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
  { 
    title: "Security First", 
    desc: "API security & prevention",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

const techStack = [
  { 
    category: "Front-end", 
    description: "I have experience working with ReactJS ",
    teches: "(NextJS, Hook, Redux Toolkit) & VueJS (NuxtJS, Vuex), Material UI, TailwindCSS, Shadcn/ui, Bootstrap, Axios, and other technologies."
  },
  { 
    category: "Back-end", 
    description: "I have experience working with ",
    teches: "Node.JS, TypeScript, ExpressJS, NestJS, MongoDB, MySQL, and other technologies."
  },
];

export default function Collective() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [orbitRadius, setOrbitRadius] = useState(150);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setOrbitRadius(100);
      } else if (window.innerWidth < 1024) {
        setOrbitRadius(125);
      } else {
        setOrbitRadius(150);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section id="collective" className="relative bg-transparent px-4 sm:px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sunset-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-mist/20 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl" ref={sectionRef}>
        {/* Unified Block Container */}
        <div className="relative border border-white/10 bg-black/10 backdrop-blur-sm">
          {/* Header with Avatar */}
          <div className="border-b border-white/10 p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              {/* Left - Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-shrink-0 lg:w-1/4"
              >
                <div className="relative w-full aspect-square max-w-[200px] lg:max-w-none flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E1E0CC]/30 via-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
                  <Image
                    src="/ndv.png"
                    alt="Nguyễn Đăng Việt"
                    width={200}
                    height={200}
                    className="relative rounded-full border-2 border-white/20 object-cover w-[80%] h-[80%] shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Right - Title and Description */}
              <div className="flex-1 lg:w-3/4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  className="text-primary/60 text-[10px] uppercase tracking-[0.3em] mb-3"
                >
                  About Me
                </motion.p>
                
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-11">
                  <ShinyText>Nguyễn Đăng Việt</ShinyText>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-2xl space-y-3"
                >
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Fullstack Developer based in Da Nang City, Vietnam. Passionate about creating seamless 
                    user experiences through clean, scalable code and modern web technologies.
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="space-y-3 pt-4">
                    {techStack.map((stack) => (
                      <div key={stack.category} className="space-y-1.5">
                        <h4 className="text-[#E1E0CC] text-xl font-semibold">
                          {stack.category}:
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {stack.description} <b>{stack.teches}</b>
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Main Grid - No gaps, divided by borders */}
          <div className="grid lg:grid-cols-[1fr_auto_1.5fr_auto_1fr] relative flex-col lg:flex-row">
            {/* Stats Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 flex flex-col min-h-[400px] lg:h-[500px]"
            >
              <h3 className="text-[#E1E0CC] text-lg font-semibold mb-3">
                Overview
              </h3>
              <div className="flex-1 flex flex-col justify-between gap-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative group flex-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E1E0CC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-3 hover:border-white/20 transition-all h-full flex flex-col justify-center">
                      <p className="text-xl font-bold text-[#E1E0CC] mb-0.5">
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-lg uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vertical Border */}
            <div className="w-px bg-white/10 hidden lg:block" />

            {/* Orbiting Skills - Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-4 sm:p-6 flex items-center justify-center min-h-[400px] sm:min-h-[450px] lg:h-[500px]"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/10 to-sky-mist/10 blur-2xl" />
                <div className="relative border border-sunset-300/30 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-sky-dark/60 to-sky-storm/40 backdrop-blur-sm h-full flex items-center justify-center overflow-hidden">
                  <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] aspect-square flex items-center justify-center">
                    <OrbitingIcons 
                      icons={skillIcons}
                      radiusX={orbitRadius}
                      radiusY={orbitRadius}
                      duration={20}
                    />
                    
                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-sunset-400/30 to-sunset-500/30 rounded-full flex items-center justify-center border-2 border-sunset-300/30 shadow-2xl">
                        <Code2 className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#E1E0CC]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vertical Border */}
            <div className="w-px bg-white/10 hidden lg:block" />

            {/* Highlights Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 flex flex-col min-h-[400px] lg:h-[500px]"
            >
              <h3 className="text-[#E1E0CC] text-lg font-semibold mb-3">
                Strengths
              </h3>
              <div className="flex-1 flex flex-col justify-between gap-2">
                {highlights.map((highlight, index) => {
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="relative group flex-1"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative bg-black/60 border border-white/10 p-3 hover:border-white/20 transition-all backdrop-blur-sm h-full flex flex-col justify-center">
                        <p className="text-white text-xl font-semibold mb-0.5">
                          {highlight.title}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {highlight.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
