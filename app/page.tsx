"use client";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Collective from "@/components/sections/Collective";

export default function PrismaLandingPage() {
  return (
    <div style={{ color: "#E1E0CC" }} className="overflow-x-hidden">
      <Hero />
      <Collective />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
