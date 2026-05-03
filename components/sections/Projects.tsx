"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
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
    <section id="projects" className="relative min-h-screen bg-black px-4 sm:px-6 py-10">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {/* Astronaut Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-2xl bg-black border border-white/5 min-h-[400px] sm:min-h-[450px]"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-[#E1E0CC] text-2xl sm:text-3xl font-semibold mb-2">
                Your creative canvas.
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Explore my journey through code and design.
              </p>
            </div>
          </motion.div>

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
