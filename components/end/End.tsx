"use client";

import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";

export default function End() {
  return (
    <section id="the-end" className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="relative mx-auto max-w-4xl space-y-10">
        <div className="text-left">
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em] mb-2">
            Closing Note
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Thank You
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-left"
        >
          <div className="space-y-3 max-w-3xl">
            <p className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed">
              Thank you for taking your time to review my Portfolio.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg italic leading-relaxed font-light">
              "You're a flower on earth, let's make your life beautiful and meaningful!"
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-2xl bg-white dark:bg-zinc-900/60 p-2 w-fit">
            <Image
              src="/the_end_illustration.png"
              alt="The End Illustration"
              width={400}
              height={400}
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

