"use client";

import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";
import { ExternalLink, Bookmark } from "lucide-react";

export default function Education() {
  const points = [
    "During my time at university, I have developed programming, problem-solving, and teamwork skills through both academic projects and self-learning.",
    "I enjoy creating user-friendly interfaces and customizing web experiences, which motivated me to pursue Frontend and Full Stack Development.",
    "Besides coursework, I actively explore modern technologies such as JavaScript, React, Node.js, and MongoDB through personal projects and online learning.",
    "University life has also helped me improve my communication skills, collaborate with classmates, and gain confidence in presenting technical ideas."
  ];

  return (
    <section id="education" className="relative bg-[#0f0e0c]/60 px-4 sm:px-6 py-20">
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            <ShinyText>Education</ShinyText>
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
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    <ShinyText>University of Technology and Education</ShinyText>
                  </h3>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <p className="text-gray-300 mt-2 text-lg leading-relaxed">
                  I am currently a third-year student majoring in Information Systems Security Engineering. While studying, I discovered a strong passion for Web Development and decided to focus on building modern, interactive web applications.
                </p>
              </div>
              <div className="font-medium whitespace-nowrap text-lg">
                <ShinyText>Aug 2023 – Present</ShinyText>
              </div>
            </div>

            <div className="space-y-5 pt-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 text-gray-400 text-base sm:text-lg leading-relaxed"
                >
                  <Bookmark className="text-[#E1C159] flex-shrink-0 mt-1" size={24} fill="#E1C159" />
                  <div>{point}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Logo */}
          <div className="w-full lg:w-72 h-auto flex-shrink-0 bg-white/5 rounded-2xl p-6 flex items-center justify-center border border-zinc-800 shadow-2xl order-1 lg:order-2">
            <Image src="/ute.png" alt="University Logo" width={300} height={300} className="object-contain w-full h-auto drop-shadow-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
