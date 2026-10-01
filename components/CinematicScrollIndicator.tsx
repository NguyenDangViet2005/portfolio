"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenes = [
  { id: "hero", number: "01", title: "PROLOGUE", label: "Intro" },
  { id: "about", number: "02", title: "DOSSIER", label: "About" },
  { id: "tech-stack", number: "03", title: "STACK", label: "Core Stack" },
  { id: "experience", number: "04", title: "CHRONICLES", label: "Experience" },
  { id: "skills", number: "05", title: "ARSENAL", label: "Skills" },
  { id: "projects", number: "06", title: "ARTIFACTS", label: "Projects" },
  { id: "education", number: "07", title: "ACADEMIA", label: "Education" },
  { id: "the-end", number: "08", title: "EPILOGUE", label: "Credits" },
];

export default function CinematicScrollIndicator() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If at very top, always activate hero
      if (window.scrollY < window.innerHeight * 0.3) {
        setActiveSceneIndex(0);
        return;
      }

      // Check if user is near the bottom of page -> activate the last scene (the-end)
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isNearBottom) {
        setActiveSceneIndex(scenes.length - 1);
        return;
      }

      // Trigger line at 45% viewport height
      const threshold = window.innerHeight * 0.45;

      // Loop backward from last scene to first
      for (let i = scenes.length - 1; i >= 0; i--) {
        const scene = scenes[i];
        if (scene.id === "hero") continue;

        const el = document.getElementById(scene.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element's top has entered the upper half of viewport, it's the active section
          if (rect.top <= threshold) {
            setActiveSceneIndex(i);
            return;
          }
        }
      }

      setActiveSceneIndex(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also listen to resize
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentScene = scenes[activeSceneIndex] || scenes[0];

  return (
    <aside
      aria-label="Cinematic Scene Navigator"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Current Scene Badge */}
      <div className="mb-4 pr-1 text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.number}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-end"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 dark:text-zinc-500 uppercase font-light">
              SCENE {currentScene.number}
            </span>
            <span className="font-mono text-xs tracking-wider text-zinc-800 dark:text-zinc-200 font-semibold uppercase">
              {currentScene.title}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical Navigation Track */}
      <div className="flex flex-col items-end gap-3 p-2 rounded-full backdrop-blur-md bg-white/40 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 shadow-lg">
        {scenes.map((scene, idx) => {
          const isActive = idx === activeSceneIndex;

          return (
            <button
              key={scene.id}
              onClick={() => scrollToSection(scene.id)}
              className="group relative flex items-center justify-end py-1 px-1 focus:outline-none cursor-pointer"
              title={`Jump to ${scene.label}`}
              aria-label={`Jump to scene ${scene.number} ${scene.label}`}
            >
              {/* Tooltip on hover */}
              <div
                className={`absolute right-6 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap bg-zinc-900 dark:bg-white text-white dark:text-black pointer-events-none transition-all duration-200 shadow-md ${
                  isHovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 pointer-events-none"
                }`}
              >
                <span className="opacity-60 mr-1.5">{scene.number}</span>
                <span>{scene.label}</span>
              </div>

              {/* Dot / Dash Indicator */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 h-1.5 bg-zinc-900 dark:bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    : "w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 group-hover:w-3 group-hover:bg-zinc-700 dark:group-hover:bg-zinc-300"
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
