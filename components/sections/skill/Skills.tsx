"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiGithub,
  SiNestjs,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { Check } from "lucide-react";

export default function Skills() {
  const tools = [
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss, name: "CSS3" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiRedux, name: "Redux" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiMui, name: "MUI" },
    { icon: SiBootstrap, name: "Bootstrap" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiNestjs, name: "NestJS" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiGithub, name: "GitHub" },
  ];

  const workflows = [
    { text: "Testing & Debugging" },
    { text: "Git, Github for Teamwork" },
    { text: "Responsive Web Design" },
    { text: "Agile Development & Scrum" },
    {
      text: "My maxim: ",
      italic: "Keep building. Keep becoming.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="text-left mb-8">
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em] mb-2">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Skills & Workflow
          </h2>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
              Programming Languages & Tools:
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {tools.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="group px-4 py-3 flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900/80 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 shadow-sm"
                  >
                    <Icon className="text-xl text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
              Workflow & Principles:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workflows.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 flex items-center gap-3 shadow-sm"
                >
                  <div className="p-1 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black">
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-zinc-800 dark:text-zinc-200 text-sm font-medium">
                      {item.text}
                      {item.italic && (
                        <span className="italic font-light text-zinc-500 dark:text-zinc-400 ml-1">
                          &quot;{item.italic}&quot;
                        </span>
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

