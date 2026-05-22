"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import AboutColumn from "./AboutColumn";
import TechStackColumn from "./TechStackColumn";
import WhatIBringColumn from "./WhatIBringColumn";

export default function Collective() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="collective" className="relative bg-[#0f0e0c]/60 px-4 sm:px-6 py-16">
      {/* Hidden scrollspy target */}
      <div id="overview" className="absolute -top-16" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sunset-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-mist/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-[1360px]" ref={sectionRef}>
        {/* Unified Block Container */}
        <div className="relative border border-white/10 bg-transparent backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr_1.1fr] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <AboutColumn sectionInView={sectionInView} />
            <TechStackColumn />
            <WhatIBringColumn sectionInView={sectionInView} />
          </div>
        </div>
      </div>
    </section>
  );
}
