"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-zinc-900/90 hover:bg-white border border-zinc-700 hover:border-white rounded-full cursor-pointer text-zinc-300 hover:text-black shadow-xl transition-all duration-200 ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
