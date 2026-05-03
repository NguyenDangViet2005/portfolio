"use client";

import { motion, useInView } from "framer-motion";
import {
  Code2,
} from "lucide-react";
import { useRef } from "react";
import OrbitingIcons from "@/components/OrbitingIcons";
import Image from "next/image";
import ShinyText from "@/components/ShinyText";
import { skillIcons } from "@/data/skills";
import { stats } from "@/data/stats";

type Segment = {
  text: string;
  className?: string;
};

function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const words = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className ?? "",
    }))
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((item, index) => (
        <motion.span
          key={`${item.word}-${index}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block mr-[0.25em] ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Collective() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="collective" className="relative bg-black px-4 sm:px-6 py-10">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />
      
      <div className="relative mx-auto max-w-6xl" ref={sectionRef}>
        {/* Header with Avatar */}
        <div className="mb-10 border border-dashed border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left - Title and Description */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-primary/60 text-xs sm:text-sm uppercase tracking-[0.3em] mb-4"
              >
                About Me
              </motion.p>
              
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                <ShinyText>Nguyễn Đăng Việt</ShinyText>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-2xl"
              >
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                  Fullstack Developer based in Da Nang City, Vietnam. Passionate about creating seamless 
                  user experiences through clean, scalable code and modern web technologies.
                </p>
              </motion.div>
            </div>

            {/* Right - Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1E0CC]/20 to-transparent rounded-full blur-xl" />
                <Image
                  src="/ndv.png"
                  alt="Nguyễn Đăng Việt"
                  width={160}
                  height={160}
                  className="relative rounded-full border-2 border-white/10 object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats and Tech Stack Grid */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-6 md:gap-12">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6 border border-dashed border-white/10 rounded-2xl p-4 md:p-8"
          >
            <h3 className="text-[#E1E0CC] text-lg sm:text-xl font-semibold">
              Overview
            </h3>
            <div className="flex flex-col gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-[#0a0a0a] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors flex items-center gap-4">
                    <p className="text-xl sm:text-2xl font-bold text-[#E1E0CC] min-w-[70px]">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Orbiting Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden"
          >
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              <OrbitingIcons 
                icons={skillIcons}
                radiusX={140}
                radiusY={140}
                duration={20}
              />
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E1E0CC]/20 to-transparent rounded-full flex items-center justify-center border border-white/10">
                  <Code2 className="h-10 w-10 text-[#E1E0CC]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
