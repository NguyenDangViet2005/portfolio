"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ContactModal from "@/components/ContactModal";

type Segment = {
  text: string;
  className?: string;
};

const aboutText = "Building scalable, modern web applications with focus on clean architecture, performance, and intuitive user experiences.";

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
    })),
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

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[var(--bg-color)] border-b border-zinc-200 dark:border-zinc-800 bg-grid-pattern transition-colors duration-300">
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Header Navigation & Theme Toggle */}
      <header className="relative z-10 w-full pt-8 px-6 sm:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="font-mono text-sm tracking-widest font-bold text-zinc-900 dark:text-white uppercase">
          NDV.
        </a>

        <div className="flex items-center gap-6 sm:gap-10">
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-zinc-600 dark:text-zinc-400">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Education", href: "#education" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="hover:text-black dark:hover:text-white transition-colors uppercase font-mono text-xs cursor-pointer"
            >
              Contact
            </button>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 py-20 my-auto flex flex-col items-start gap-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-xs font-mono text-zinc-700 dark:text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-pulse" />
          Full-Stack Web Developer
        </div>

        <div className="max-w-5xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Hi there,", className: "font-light text-zinc-500 dark:text-zinc-400" },
              {
                text: "I'm Nguyen Dang Viet.",
                className: "font-bold text-zinc-900 dark:text-white tracking-tight",
              },
            ]}
            className="text-left text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal"
        >
          {aboutText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            View Projects
          </a>
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <div className="relative z-10 w-full pb-8 text-center text-xs text-zinc-400 dark:text-zinc-600 font-mono tracking-widest uppercase">
        Scroll down to explore ↓
      </div>
    </section>
  );
}


