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
      className="group relative block w-full overflow-hidden bg-sky-dark/40 transition-all duration-300 min-h-[250px] sm:min-h-[300px]"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 z-10">
        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
          <h3 className="text-white text-base sm:text-lg font-bold uppercase tracking-wider group-hover:text-sunset-300 transition-colors drop-shadow-md">
            {name}
          </h3>
          <ExternalLink className="h-4 w-4 text-white group-hover:text-sunset-300 transition-colors drop-shadow-md" />
        </div>
        <p className="text-gray-200 text-sm sm:text-base font-light leading-snug drop-shadow-md">
          {desc}
        </p>
      </div>
    </motion.a>
  );
}
