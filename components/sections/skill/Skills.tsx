"use client";

import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
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
  SiTrello,
  SiSlack,
  SiWordpress,
  SiNestjs,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { Check } from "lucide-react";

export default function Skills() {
  const tools = [
    { icon: SiHtml5, color: "text-[#E34F26]" },
    { icon: SiCss, color: "text-[#1572B6]" },
    { icon: SiJavascript, color: "text-[#F7DF1E]" },
    { icon: SiTypescript, color: "text-[#3178C6]" },
    { icon: SiReact, color: "text-[#61DAFB]" },
    { icon: SiRedux, color: "text-[#764ABC]" },
    { icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { icon: SiMui, color: "text-[#007FFF]" },
    { icon: SiBootstrap, color: "text-[#7952B3]" },
    { icon: SiNextdotjs, color: "text-white" },
    { icon: SiNodedotjs, color: "text-[#339933]" },
    { icon: SiExpress, color: "text-gray-400" },
    { icon: SiNestjs, color: "text-[#E02347]" },
    { icon: SiMongodb, color: "text-[#47A248]" },
    { icon: SiMysql, color: "text-[#4479A1]" },
    { icon: SiPostgresql, color: "text-[#4479A1]" },
    { icon: SiGithub, color: "text-white" },
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
      className="relative bg-[#0f0e0c]/60 px-4 sm:px-6 py-20"
    >
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            <ShinyText>Skills</ShinyText>
          </h2>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl sm:text-2xl text-gray-200 font-medium mb-6">
              Programming Languages & Tools:
            </h3>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {tools.map((Tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-zinc-900/60 rounded-xl border border-zinc-800/80 hover:border-zinc-500 transition-colors shadow-lg"
                >
                  <Tool.icon className={`text-3xl sm:text-4xl ${Tool.color}`} />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl text-gray-200 font-medium mb-6">
              Workflow:
            </h3>
            <div className="space-y-5">
              {workflows.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-start gap-3">
                    <Check
                      className="text-[#00C58E] mt-1 flex-shrink-0 font-bold"
                      size={22}
                      strokeWidth={3}
                    />
                    <div>
                      <span className="text-gray-200 text-lg font-medium">
                        {item.text}
                        {item.italic && (
                          <span className="italic font-light text-gray-400">
                            "{item.italic}"
                          </span>
                        )}
                      </span>
                    </div>
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
