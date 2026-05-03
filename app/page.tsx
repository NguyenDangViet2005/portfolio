"use client";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Collective from "@/components/sections/Collective";
import Experience from "@/components/sections/Experience";
import Story from "@/components/sections/Story";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function PrismaLandingPage() {
  return (
    <div className="bg-black" style={{ color: "#E1E0CC" }}>
      <Hero />
      <Collective />
      <Experience />
      <Projects />
      <Story />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
