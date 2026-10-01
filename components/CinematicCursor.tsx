"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CinematicCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const ambientGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const ambientGlow = ambientGlowRef.current;
    if (!ambientGlow) return;

    const xGlow = gsap.quickTo(ambientGlow, "x", { duration: 0.8, ease: "power2.out" });
    const yGlow = gsap.quickTo(ambientGlow, "y", { duration: 0.8, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      xGlow(e.clientX);
      yGlow(e.clientY);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Subtle Ambient Background Spotlight (soft atmospheric glow behind content) */}
      <div
        ref={ambientGlowRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0 transition-opacity duration-700 blur-[130px] hidden md:block ${
          isVisible ? "opacity-30 dark:opacity-20" : "opacity-0"
        } bg-[radial-gradient(circle,rgba(160,160,180,0.18)_0%,rgba(100,100,120,0.06)_50%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(140,140,160,0.04)_50%,transparent_70%)]`}
      />
    </>
  );
}
