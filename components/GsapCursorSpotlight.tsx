"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapCursorSpotlight() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on fine pointer devices (desktop)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-red-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_rgba(239,68,68,0.8)]"
    />
  );
}

