"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/sections/project/ProjectCard";
import ShinyText from "@/components/ShinyText";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

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

export default function Projects() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative min-h-screen bg-[var(--bg-color)] px-4 sm:px-6 py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="relative mx-auto max-w-[1300px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em] mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="mt-4">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Building scalable systems with modern technologies.",
                  className: "text-zinc-600 dark:text-zinc-400 font-light",
                },
              ]}
              className="justify-center text-sm sm:text-base md:text-lg"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              category={project.category}
              desc={project.desc}
              tech={project.tech}
              image={project.image}
              demo={project.demo}
              delay={0.1 * (index + 1)}
              isInView={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

