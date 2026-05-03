"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ShinyText from "@/components/ShinyText";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="programs" className="bg-black px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="text-primary text-xs uppercase tracking-[0.3em]">Programs</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium">
            <ShinyText>Experience and delivery programs</ShinyText>
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-2xl">
            Professional milestones across freelance and academic work with measurable impact.
          </p>
        </div>

        <div className="grid gap-4">
          {experiences.map((experience) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{experience.title}</h3>
                  <p className="text-primary text-sm">{experience.company}</p>
                </div>
                <div className="text-xs text-gray-500">
                  {experience.period} · {experience.location}
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                {experience.description}
              </p>
              <ul className="mt-4 space-y-2">
                {experience.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
