"use client";

import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/project/Projects";
import Experience from "@/components/sections/experience/Experience";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skill/Skills";
import Education from "@/components/sections/education/Education";
import End from "@/components/end/End";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function HomePage() {
  return (
    <div
      style={{ color: "#E1E0CC" }}
      className="overflow-x-hidden pb-24 md:pb-0"
    >
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <End />
      <ScrollToTop />
      <MobileBottomNav />
    </div>
  );
}
