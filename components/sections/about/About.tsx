"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutColumn from "./AboutColumn";
import TechStackColumn from "./TechStackColumn";
import WhatIBringColumn from "./WhatIBringColumn";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative bg-[var(--bg-color)] px-4 sm:px-6 py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      {/* Hidden scrollspy target */}
      <div id="overview" className="absolute -top-16" />

      <div className="relative mx-auto max-w-[1360px]" ref={sectionRef}>
        {/* Unified Block Container */}
        <div ref={containerRef} className="relative border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/80 rounded-2xl overflow-hidden shadow-sm dark:shadow-2xl transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr_1.1fr] divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 dark:divide-zinc-800">
            <AboutColumn sectionInView={sectionInView} />
            <TechStackColumn />
            <WhatIBringColumn sectionInView={sectionInView} />
          </div>
        </div>
      </div>
    </section>
  );
}

