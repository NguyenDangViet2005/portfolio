"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  category: string;
  desc: string;
  tech: string[];
  image: string;
  demo: string;
  delay: number;
  isInView: boolean;
}

export default function ProjectCard({
  name,
  category,
  desc,
  tech,
  image,
  demo,
  delay,
  isInView,
}: ProjectCardProps) {
  return (
    <motion.a
      href={demo}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-dark/40 to-sky-storm/30 border border-sunset-300/20 hover:border-sunset-400/40 backdrop-blur-sm transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-sky-dark/60 backdrop-blur-sm">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-[#E1E0CC] rounded-full border border-white/10">
            {category}
          </span>
        </div>

        {/* External Link Icon */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
            <ExternalLink className="h-4 w-4 text-[#E1E0CC]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-[#E1E0CC] text-lg sm:text-xl font-semibold mb-2 group-hover:text-white transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-[10px] sm:text-xs bg-white/5 text-gray-400 rounded-lg border border-white/5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
