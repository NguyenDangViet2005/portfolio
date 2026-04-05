"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
}

export default function ShinyText({ 
  children, 
  className = "",
}: ShinyTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage: "linear-gradient(to bottom right, #ffffff62, #a1a1aa)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
      <motion.span
        className="absolute inset-0 block pointer-events-none"
        initial={{ backgroundPosition: "200% 0" }}
        animate={{ backgroundPosition: "-200% 0" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0.3,
        }}
        style={{
          backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 80%, transparent 100%)",
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mixBlendMode: "overlay",
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
