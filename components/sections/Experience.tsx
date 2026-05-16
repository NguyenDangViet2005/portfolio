"use client";

import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="programs" className="relative bg-transparent px-4 sm:px-6 py-20 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sunset-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-mist/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sunset-400 text-xs uppercase tracking-[0.3em]"
          >
            Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium leading-12"
          >
            <ShinyText>Experience and delivery programs</ShinyText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Professional milestones across freelance and academic work with measurable impact.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical left line - dashed */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px">
            <div className="h-full border-l-2 border-dashed border-sunset-400/40" />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((experience, index) => {
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot with circle border */}
                  <div className="absolute left-4 md:left-8 top-0 -ml-4 md:-ml-4 flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full border-2 border-sunset-400 bg-sky-dark flex items-center justify-center shadow-lg shadow-sunset-400/30">
                      <div className="w-2 h-2 rounded-full bg-sunset-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 md:ml-20">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-semibold text-sunset-400">
                            {experience.title}
                          </h3>
                          {experience.link && (
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sunset-400 hover:text-sunset-300 transition-colors text-sm"
                            >
                              ↗
                            </a>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">
                          {experience.role}
                        </p>
                        
                        {/* Meta info */}
                        <div className="flex gap-3 text-xs text-gray-500 flex-wrap">
                          <span>{experience.period}</span>
                          {experience.teamSize && (
                            <span>Team size: {experience.teamSize}</span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-1.5">
                        {experience.responsibilities.map((item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-2 text-gray-400 text-sm"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-sunset-400 flex-shrink-0" />
                            <span className="flex-1">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs text-gray-400 border border-sunset-400/20 rounded-full hover:border-sunset-400/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
