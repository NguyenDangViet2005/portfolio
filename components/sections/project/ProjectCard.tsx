"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface ProjectCardProps {
  name: string;
  category: string;
  desc: string;
  tech: string[];
  image: string;
  demo: string;
  reelIndex: number;
  totalReels: number;
}

export default function ProjectCard({
  name,
  category,
  desc,
  tech,
  image,
  demo,
  reelIndex,
  totalReels,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt
    const rotX = -((y - centerY) / centerY) * 5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const formattedIndex = String(reelIndex).padStart(2, "0");
  const formattedTotal = String(totalReels).padStart(2, "0");

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full select-none">
      <motion.a
        ref={cardRef}
        href={demo}
        target="_blank"
        rel="noreferrer"
        data-cursor="view"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out, border-color 0.3s ease",
        }}
        className="group relative flex flex-col justify-between w-full h-[460px] sm:h-[500px] md:h-[540px] rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/80 bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-300 shadow-xl hover:shadow-2xl"
      >
        {/* Project Thumbnail Image with Cinematic Contrast */}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 500px, 640px"
          priority={reelIndex === 1}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] contrast-[1.05] group-hover:brightness-100 group-hover:contrast-100"
        />

        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/60" />

        {/* Dynamic Glass Glare Spotlight Reflection */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.2), transparent 70%)`,
          }}
        />

        {/* Top Header: Reel Badge & Category */}
        <div className="relative z-20 flex items-center justify-between p-6 sm:p-7 pointer-events-none">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 text-[11px] font-mono tracking-widest uppercase font-semibold text-zinc-300 bg-black/75 backdrop-blur-md rounded-full border border-zinc-700/80">
              REEL // {formattedIndex}
            </span>
            <span className="px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-200 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-700/80">
              {category}
            </span>
          </div>

          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="relative z-20 p-6 sm:p-8 flex flex-col gap-3 pointer-events-none">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight group-hover:text-zinc-100 transition-colors drop-shadow-md">
              {name}
            </h3>
            <span className="font-mono text-xs text-zinc-400">
              {formattedIndex} / {formattedTotal}
            </span>
          </div>

          <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl line-clamp-2">
            {desc}
          </p>

          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[11px] font-mono tracking-wide text-zinc-200 bg-black/60 backdrop-blur-md border border-zinc-700/80 rounded-lg shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.a>
    </div>
  );
}
