"use client";

import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/project/Projects";
import Experience from "@/components/sections/experience/Experience";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skill/Skills";
import Education from "@/components/sections/education/Education";
import End from "@/components/end/End";

export default function PrismaLandingPage() {
  return (
    <div style={{ color: "#E1E0CC" }} className="overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <End />
      <ScrollToTop />
    </div>
  );
}
