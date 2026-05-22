"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/sections/project/ProjectCard";
import ShinyText from "@/components/ShinyText";
import { projects } from "@/data/projects";

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
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="projects" className="relative min-h-screen bg-[#0f0e0c]/60 px-4 sm:px-6 py-10">
      <div className="pointer-events-none absolute bg-noise opacity-[0.15]" />
      <div className="relative mx-auto max-w-[1300px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <ShinyText>Featured Projects</ShinyText>
          </div>
          <div className="mt-4">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Building scalable systems with modern technologies.",
                  className: "text-gray-500",
                },
              ]}
              className="justify-center text-sm sm:text-base md:text-lg font-normal"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
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
              isInView={projectsInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
