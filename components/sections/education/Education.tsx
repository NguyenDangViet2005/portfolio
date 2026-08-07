"use client";

import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";
import { ExternalLink, Bookmark } from "lucide-react";

export default function Education() {
  const points = [
    "During my time at university, I have developed programming, problem-solving, and teamwork skills through both academic projects and self-learning.",
    "I enjoy creating user-friendly interfaces and customizing web experiences, which motivated me to pursue Web Development.",
    "Besides coursework, I actively explore modern technologies such as JavaScript, React, Node.js, and MongoDB through personal projects and online learning.",
    "University life has also helped me improve my communication skills, collaborate with classmates, and gain confidence in presenting technical ideas."
  ];

  return (
    <section id="education" className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="text-left mb-8">
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em] mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Education
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
        >
          {/* Content */}
          <div className="flex-1 space-y-6 order-2 lg:order-1">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <a href="#" className="flex items-center gap-2 group">
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    University of Technology and Education
                  </h3>
                  <ExternalLink size={20} className="text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2 text-base sm:text-lg leading-relaxed">
                  I am currently a third-year student majoring in Information Technology with a GPA of <b>3.92/4.0</b> and <b>5 scholarships</b>. While studying, I discovered a strong passion for Web Development and decided to focus on building modern, interactive web applications.
                </p>
              </div>
              <div className="font-mono text-xs px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                Aug 2023 – Present
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-sm dark:shadow-none"
                >
                  <Bookmark className="text-zinc-900 dark:text-white flex-shrink-0 mt-0.5" size={20} />
                  <div>{point}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="w-full lg:w-72 h-auto flex-shrink-0 bg-white dark:bg-zinc-900/60 rounded-2xl p-6 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-xl order-1 lg:order-2">
            <Image src="/ute.png" alt="University Logo" width={300} height={300} className="object-contain w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
