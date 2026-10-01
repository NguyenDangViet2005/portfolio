"use client";

import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/project/Projects";
import Experience from "@/components/sections/experience/Experience";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/sections/about/About";
import TechStackSection from "@/components/sections/about/TechStackSection";
import Skills from "@/components/sections/skill/Skills";
import Education from "@/components/sections/education/Education";
import End from "@/components/end/End";
import MobileBottomNav from "@/components/MobileBottomNav";
import CinematicScrollIndicator from "@/components/CinematicScrollIndicator";

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden pb-24 md:pb-0 bg-[var(--bg-color)] text-[var(--text-main)] transition-colors duration-200">
      <CinematicScrollIndicator />
      <Hero />
      <About />
      <TechStackSection />
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
