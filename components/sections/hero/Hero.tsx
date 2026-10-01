"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ContactModal from "@/components/ContactModal";
import { ArrowUpRight } from "lucide-react";

type Segment = {
  text: string;
  className?: string;
};

const aboutText =
  "Crafting high-performance, modern web architectures with clean code, seamless interactions, and cinematic digital experiences.";

function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const words = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className ?? "",
    })),
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((item, index) => (
        <span key={`${item.word}-${index}`} className="inline-block overflow-hidden mr-[0.22em] pb-2 sm:pb-4 -mb-2 sm:-mb-4 pt-0.5 sm:pt-1">
          <motion.span
            initial={{ y: "120%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : { y: "120%", opacity: 0 }}
            transition={{
              duration: 0.85,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${item.className}`}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const heroRef = useRef<HTMLElement | null>(null);

  // Parallax typography effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // Live ICT Time for Da Nang, Vietnam
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[88svh] sm:min-h-[96vh] flex flex-col justify-between bg-[var(--bg-color)] border-b border-zinc-200 dark:border-zinc-800 bg-grid-pattern transition-colors duration-300 overflow-hidden"
    >
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Cinematic Ambient Flare Spots */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -left-40 w-96 h-96 bg-zinc-400/10 dark:bg-zinc-600/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 -right-40 w-[450px] h-[450px] bg-zinc-300/15 dark:bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* Parallax Background Watermark */}
      <motion.div
        style={{ x: watermarkX }}
        aria-hidden="true"
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[12vw] font-black uppercase tracking-tighter text-zinc-900/[0.03] dark:text-white/[0.025] select-none pointer-events-none"
      >
        FULLSTACK ENGINEER • NGUYEN DANG VIET • PORTFOLIO 2025
      </motion.div>

      {/* Header Navigation & Theme Toggle */}
      <header className="relative z-10 w-full pt-4 sm:pt-8 px-4 sm:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <a 
          href="/" 
          className="group flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-zinc-900 dark:text-white uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white group-hover:scale-150 transition-transform duration-300" />
          <span>NDV.</span>
        </a>

        <div className="flex items-center gap-6 sm:gap-10">
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-zinc-600 dark:text-zinc-400">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Education", href: "#education" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 hover:text-black dark:hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-zinc-900 dark:after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="relative py-1 hover:text-black dark:hover:text-white transition-colors uppercase font-mono text-xs cursor-pointer after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-zinc-900 dark:after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              Contact
            </button>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Content - Perfectly balanced padding and gap for Mobile & Desktop */}
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-16 my-auto flex flex-col items-start gap-4 sm:gap-8"
      >
        {/* Cinematic Slate / Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center flex-wrap gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md text-[11px] sm:text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide">AVAILABLE FOR WORK</span>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <span className="text-zinc-500 dark:text-zinc-400">DA NANG, VN</span>
          {currentTime && (
            <>
              <span className="text-zinc-400 dark:text-zinc-600 hidden xs:inline">•</span>
              <span className="text-zinc-500 dark:text-zinc-400 tabular-nums hidden xs:inline">{currentTime} ICT</span>
            </>
          )}
        </motion.div>

        {/* Hero Headline */}
        <h1 className="max-w-5xl m-0 font-normal">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Hi there,", className: "font-light text-zinc-500 dark:text-zinc-400" },
              {
                text: "I'm Nguyen Dang Viet.",
                className: "font-bold text-zinc-900 dark:text-white tracking-tight drop-shadow-sm",
              },
            ]}
            className="text-left text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.2] sm:leading-[1.18] md:leading-[1.16]"
          />
          <span className="sr-only">
            Nguyễn Đăng Việt (Nguyen Dang Viet) - Full-Stack Software Engineer Portfolio
          </span>
        </h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl font-light"
        >
          {aboutText}
        </motion.p>

        {/* Call to Actions - Responsive Touch Sizing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-xs sm:text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/90 transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98]"
          >
            <span>Initiate Contact</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Cinematic Bottom Cue */}
      <div className="relative z-10 w-full pb-4 sm:pb-8 pt-1 flex flex-col items-center justify-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 font-mono tracking-widest uppercase">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em]">SCROLL TO EXPLORE</span>
          <div className="w-[1px] h-4 sm:h-6 bg-gradient-to-b from-zinc-400 dark:from-zinc-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
