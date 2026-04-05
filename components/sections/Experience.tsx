"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Oct 2025 - Present",
    current: true,
    description: "Delivering end-to-end web solutions for clients, managing full project lifecycle from requirements gathering to deployment and maintenance.",
    achievements: [
      "Built 8+ full-stack applications using Next.js, React, and Node.js",
      "Implemented scalable architectures with PostgreSQL and MongoDB",
      "Achieved 95%+ client satisfaction through effective communication",
      "Reduced application load times by 40% through optimization techniques"
    ],
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "MongoDB", "TailwindCSS"]
  },
  {
    title: "Student Developer",
    company: "University Projects",
    location: "Ho Chi Minh City",
    period: "2023 - 2025",
    current: false,
    description: "Developed various academic and personal projects while maintaining a 3.9/4.0 GPA, focusing on system design and full-stack development.",
    achievements: [
      "Led team projects in Software Engineering courses",
      "Built real-world applications solving actual business problems",
      "Participated in coding competitions and hackathons",
      "Mentored junior students in web development"
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL", "Git"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Experience() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Briefcase className="text-indigo-400" />
          Work Experience
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          My professional journey building real-world applications and delivering value to clients.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={item}
            className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  {exp.current && (
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-indigo-400 font-medium mb-2">{exp.company}</p>
                <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 mb-6 leading-relaxed">
              {exp.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center"
      >
        <p className="text-zinc-300 mb-4">
          Looking for opportunities to contribute to innovative projects and grow as a developer.
        </p>
        <p className="text-indigo-400 font-medium">
          Open to full-time positions and exciting collaborations! 🚀
        </p>
      </motion.div>
    </div>
  );
}
