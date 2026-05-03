"use client";

import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import { timeline, passions } from "@/data/story";

export default function Story() {
  return (
    <section id="story" className="bg-black px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <p className="text-primary text-xs uppercase tracking-[0.3em]">Our story</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium">
            <ShinyText>The journey from student to fullstack developer</ShinyText>
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Building a path toward system architecture and product excellence.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {timeline.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <span className={`text-xs ${item.active ? "text-primary" : "text-gray-500"}`}>
                  {item.period}
                </span>
              </div>
              <p className="mt-3 text-gray-400 text-sm sm:text-base">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {passions.map((passion) => (
            <div
              key={passion.title}
              className="rounded-2xl border border-white/10 bg-[#212121] p-5"
            >
              <p className="text-primary text-sm font-medium">{passion.title}</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">{passion.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-7">
          <p className="text-primary text-xs uppercase tracking-[0.3em]">Philosophy</p>
          <p className="mt-3 text-gray-400 text-sm sm:text-base italic">
            "I aim to become a Fullstack Developer specializing in system architecture and performance optimization.
            My goal is to create practical, useful applications that deliver long-term value to users."
          </p>
        </div>
      </div>
    </section>
  );
}
