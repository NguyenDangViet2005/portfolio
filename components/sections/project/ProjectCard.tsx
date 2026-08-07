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
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative block w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:border-zinc-500 min-h-[300px] sm:min-h-[360px]"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
      
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-300 bg-black/60 backdrop-blur-md rounded-full border border-zinc-700/80">
          {category}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight group-hover:text-zinc-200 transition-colors">
            {name}
          </h3>
          <div className="p-2 rounded-full bg-zinc-800/80 text-white group-hover:bg-white group-hover:text-black transition-colors">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
        
        <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
          {desc}
        </p>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}
