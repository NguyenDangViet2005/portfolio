"use client";

import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/project/Projects";
import Experience from "@/components/sections/experience/Experience";
import Contact from "@/components/end/End";
import ScrollToTop from "@/components/ScrollToTop";
import Collective from "@/components/sections/about/Collective";
import Skills from "@/components/sections/skill/Skills";
import Education from "@/components/sections/education/Education";

export default function PrismaLandingPage() {
  return (
    <div style={{ color: "#E1E0CC" }} className="overflow-x-hidden">
      <Hero />
      <Collective />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
