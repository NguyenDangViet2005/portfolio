"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUp, Heart } from "lucide-react";

export default function End() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="the-end"
      className="relative bg-[var(--bg-color)] px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-200 overflow-hidden"
    >
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 -translate-y-1/2 right-4 text-[14vw] font-black uppercase text-zinc-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none"
      >
        EPILOGUE
      </div>

      <div className="relative mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            SCENE // 08 • CREDITS & FINALE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight">
            Thank You for Visiting
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 text-left"
        >
          <div className="space-y-4 max-w-2xl">
            <p className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Thank you for dedicating your time to explore my digital portfolio and engineering chronicles.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base italic leading-relaxed font-light border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 py-1">
              &quot;You&apos;re a flower on earth, let&apos;s make your life beautiful and meaningful!&quot;
            </p>
          </div>

          {/* Film Illustration Box */}
          <div className="relative rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-xl dark:shadow-2xl bg-white dark:bg-zinc-900/60 p-3 w-fit group">
            <div className="overflow-hidden rounded-2xl relative w-[320px] sm:w-[400px] aspect-square">
              <Image
                src="/the_end_illustration.png"
                alt="The End Illustration"
                fill
                sizes="(max-width: 640px) 320px, 400px"
                className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Return to Top Button & Footer Meta */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-zinc-200/70 dark:border-zinc-800/70 pt-8">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-pointer shadow-sm w-fit"
            >
              <span>Return to Premiere</span>
              <div className="p-1 rounded-full bg-zinc-200 dark:bg-zinc-800 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" />
              <span>by Nguyen Dang Viet © 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
