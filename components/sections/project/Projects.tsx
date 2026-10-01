"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/sections/project/ProjectCard";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, SlidersHorizontal, Film } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const totalReels = projects.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate total horizontal scroll distance so the last card easily reaches the center
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          id: "projects-reel",
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount() + 300}`, // +300px buffer to view the final card comfortably
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            // More natural index calculation so reel 6 is reached smoothly
            const rawIdx = Math.floor(self.progress * totalReels);
            const idx = Math.min(totalReels - 1, Math.max(0, rawIdx));
            setCurrentIndex(idx);
          },
        },
      });
    }, section);

    // Refresh ScrollTrigger after elements settle
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, [totalReels]);

  // Jump smoothly to a specific project reel
  const scrollToReel = (direction: "prev" | "next") => {
    const targetIdx =
      direction === "next"
        ? Math.min(totalReels - 1, currentIndex + 1)
        : Math.max(0, currentIndex - 1);

    const st = ScrollTrigger.getById("projects-reel");
    if (st) {
      const targetScroll = st.start + (targetIdx / (totalReels - 1)) * (st.end - st.start - 300);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[var(--bg-color)] border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300 flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 -translate-y-1/2 right-0 text-[12vw] font-black uppercase text-zinc-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none z-0"
      >
        ARTIFACTS
      </div>

      {/* Top Header & Controllers */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full shrink-0 z-10">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-1.5">
            <Film className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
            SCENE // 06 • PINNED HORIZONTAL FILM REEL
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light mt-0.5">
            Scroll down to navigate horizontally through production architectures.
          </p>
        </div>

        {/* Reel Indicator & Buttons */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 font-mono text-xs text-zinc-700 dark:text-zinc-300 shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-semibold text-zinc-900 dark:text-white text-xs">
              0{currentIndex + 1}
            </span>
            <span className="text-zinc-400">/</span>
            <span>0{totalReels}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToReel("prev")}
              disabled={currentIndex === 0}
              className="w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-500 disabled:opacity-40 transition-all cursor-pointer shadow-sm"
              aria-label="Previous Project Reel"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToReel("next")}
              disabled={currentIndex === totalReels - 1}
              className="w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-500 disabled:opacity-40 transition-all cursor-pointer shadow-sm"
              aria-label="Next Project Reel"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Translation Track Powered by Page Scroll */}
      <div className="relative w-full flex-1 flex items-center my-auto overflow-hidden z-10">
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 items-center w-max px-2 pr-[35vw] sm:pr-[45vw] will-change-transform"
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="w-[84vw] sm:w-[500px] md:w-[580px] lg:w-[640px] shrink-0"
            >
              <ProjectCard
                name={project.name}
                category={project.category}
                desc={project.desc}
                tech={project.tech}
                image={project.image}
                demo={project.demo}
                reelIndex={index + 1}
                totalReels={totalReels}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Progress Bar & Pin Status */}
      <div className="w-full shrink-0 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 z-10">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mb-1.5">
          <span>SCROLL CONTROL // HORIZONTAL FEED</span>
          <span>
            {currentIndex === totalReels - 1
              ? "FINAL REEL REACHED (06/06) ↓ SCROLL DOWN TO CONTINUE"
              : `EXPLORING REEL 0${currentIndex + 1} OF 0${totalReels}`}
          </span>
        </div>

        <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-zinc-900 dark:bg-white rounded-full origin-left transition-all duration-75"
            style={{ width: `${Math.max(16, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
