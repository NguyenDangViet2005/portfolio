"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ShinyText from "@/components/ShinyText";

type Segment = {
  text: string;
  className?: string;
};

const aboutText =
  "I am Nguyen Dang Viet, an enthusiastic fullstack developer based in Da Nang City. Over the last few years I have delivered 7+ full-stack applications, maintained a 3.9/4.0 GPA, and focused on system architecture, performance, and secure engineering across Next.js, Node.js, and modern databases.";

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

export default function Hero() {
  return (
    <section className="relative h-screen p-4 md:p-6">
      <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 text-[10px] sm:text-xs md:text-sm">
              {[
                { label: "About", href: "#collective" },
                { label: "Experience", href: "#programs" },
                { label: "Projects", href: "#projects" },
                { label: "Story", href: "#story" },
                { label: "Contact", href: "#inquiries" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[rgba(225,224,204,0.8)] hover:text-[#E1E0CC] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-10 pb-6 sm:pb-10">
          <div className="flex flex-col gap-6">
            <div className="max-w-5xl">
              <WordsPullUpMultiStyle
                segments={[
                  { text: "I am Nguyen Dang Viet,", className: "font-normal" },
                  {
                    text: "a fullstack developer.",
                    className: "font-serif italic text-primary",
                  },
                  
                ]}
                className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.6] max-w-3xl"
            >
              {aboutText}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
