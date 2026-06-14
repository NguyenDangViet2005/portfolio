"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useEffect, useRef } from "react";

interface OrbitingIconsProps {
  icons: {
    icon: ReactNode;
    label: string;
    color: string;
  }[];
  radiusX?: number;
  radiusY?: number;
  duration?: number;
  reverse?: boolean;
  children?: ReactNode;
  className?: string;
}

interface ResponsiveConfig {
  radius: number;
  offset: number;
  iconSizeClass: string;
  iconBoxHalfSize: number;
  centerOrbSizeClass: string;
  centerRadius: number;
}

const getResponsiveConfig = (width: number): ResponsiveConfig => {
  if (width < 360) {
    return {
      radius: 60,
      offset: 25,
      iconSizeClass: "w-10 h-10 rounded-[12px]",
      iconBoxHalfSize: 20,
      centerOrbSizeClass: "w-16 h-16",
      centerRadius: 32,
    };
  }
  if (width < 400) {
    return {
      radius: 75,
      offset: 30,
      iconSizeClass: "w-11 h-11 rounded-[14px]",
      iconBoxHalfSize: 22,
      centerOrbSizeClass: "w-16 h-16",
      centerRadius: 32,
    };
  }
  if (width < 480) {
    return {
      radius: 90,
      offset: 32,
      iconSizeClass: "w-12 h-12 rounded-[16px]",
      iconBoxHalfSize: 24,
      centerOrbSizeClass: "w-20 h-20",
      centerRadius: 40,
    };
  }
  if (width < 640) {
    return {
      radius: 110,
      offset: 35,
      iconSizeClass: "w-12 h-12 rounded-[16px]",
      iconBoxHalfSize: 24,
      centerOrbSizeClass: "w-20 h-20",
      centerRadius: 40,
    };
  }
  if (width < 1024) {
    return {
      radius: 135,
      offset: 35,
      iconSizeClass: "w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-[18px]",
      iconBoxHalfSize: 30,
      centerOrbSizeClass: "w-24 h-24",
      centerRadius: 48,
    };
  }
  if (width < 1280) {
    return {
      radius: 90,
      offset: 32,
      iconSizeClass: "w-12 h-12 rounded-[16px]",
      iconBoxHalfSize: 24,
      centerOrbSizeClass: "w-20 h-20",
      centerRadius: 40,
    };
  }
  if (width < 1440) {
    return {
      radius: 125,
      offset: 35,
      iconSizeClass: "w-14 h-14 rounded-[18px]",
      iconBoxHalfSize: 28,
      centerOrbSizeClass: "w-24 h-24",
      centerRadius: 48,
    };
  }
  return {
    radius: 145,
    offset: 35,
    iconSizeClass: "w-[68px] h-[68px] rounded-[20px]",
    iconBoxHalfSize: 34,
    centerOrbSizeClass: "w-24 h-24",
    centerRadius: 48,
  };
};

export default function OrbitingIcons({ 
  icons, 
  radiusX, 
  radiusY, 
  duration = 25,
  reverse = false,
  children,
  className = ""
}: OrbitingIconsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState<ResponsiveConfig>({
    radius: 145,
    offset: 35,
    iconSizeClass: "w-[68px] h-[68px] rounded-[20px]",
    iconBoxHalfSize: 34,
    centerOrbSizeClass: "w-24 h-24",
    centerRadius: 48,
  });

  useEffect(() => {
    const handleResize = () => {
      setConfig(getResponsiveConfig(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBrandColor = (colorStr: string) => {
    if (colorStr.startsWith("#")) return colorStr;
    const match = colorStr.match(/#([0-9a-fA-F]{3,6})/);
    if (match) return `#${match[1]}`;
    return "#a1a1aa";
  };

  const hexToRgbStr = (hex: string) => {
    if (!hex || !hex.startsWith("#")) return "161, 161, 170";
    const cleanHex = hex.replace("#", "");
    let r = 161, g = 161, b = 170;
    if (cleanHex.length === 3) {
      r = parseInt(cleanHex[0] + cleanHex[0], 16);
      g = parseInt(cleanHex[1] + cleanHex[1], 16);
      b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
      r = parseInt(cleanHex.substring(0, 2), 16);
      g = parseInt(cleanHex.substring(2, 4), 16);
      b = parseInt(cleanHex.substring(4, 6), 16);
    }
    return `${r}, ${g}, ${b}`;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full flex items-center justify-center overflow-visible orbit-container ${className}`}
      style={{ height: (config.radius + config.offset) * 2 + 70 }}
    >
      {/* Concentric Ring 1 */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/15 pointer-events-none z-10 transition-all duration-300" 
        style={{
          width: config.radius * 1.1,
          height: config.radius * 1.1,
        }}
      />

      {/* Concentric Ring 2 */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/10 pointer-events-none z-10 transition-all duration-300" 
        style={{
          width: config.radius * 1.5,
          height: config.radius * 1.5,
        }}
      />

      {/* Center circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="absolute inset-0 rounded-full border border-amber-500/20 scale-[1.25] pointer-events-none" />
        <div 
          className={`relative rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md group hover:scale-105 hover:border-white/50 transition-all duration-500 cursor-pointer ${config.centerOrbSizeClass}`}
          style={{
            background: "radial-gradient(circle at 30% 30%, #fef08a 0%, #eab308 30%, #854d0e 70%, #1c0d02 100%)",
            boxShadow: "0 0 50px rgba(245, 158, 11, 0.4), inset 0 -8px 20px rgba(0, 0, 0, 0.8), inset 0 8px 20px rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="absolute top-1.5 left-1.5 w-[80%] h-[35%] rounded-[50%_50%_30%_30%] bg-gradient-to-b from-white/35 via-white/5 to-transparent rotate-[-10deg] pointer-events-none" />
          <div className="text-center flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110" style={{ filter: "drop-shadow(0 0 8px rgba(253, 224, 71, 0.5))" }}>
            {children}
          </div>
        </div>
      </div>

      {/* Ellipse orbit path */}
      <div 
        className="absolute border border-dashed border-white/10 pointer-events-none transition-all duration-300"
        style={{ 
          width: config.radius * 2, 
          height: config.radius * 2,
          borderRadius: "50%"
        }}
      />

      {/* Orbiting items using GPU-accelerated CSS Keyframe animations (0% idle CPU overhead) */}
      {icons.map((item, index) => {
        const startAngleDegrees = ((360 / icons.length) * index) - 90;
        const brandColor = getBrandColor(item.color);
        const brandRgb = hexToRgbStr(brandColor);

        const orbitRadius = config.radius + config.offset;
        const lineStart = config.centerRadius;
        const lineEnd = orbitRadius - config.iconBoxHalfSize;
        const dotPosition = config.radius;

        return (
          <div key={index}>
            {/* Outer container only handles scale and opacity fade-in at entrance */}
            <motion.div
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                width: 0,
                height: 0,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.04,
              }}
            >
              {/* Inner wrapper handles the GPU-accelerated CSS Orbit Animation */}
              <div
                className={`absolute group cursor-pointer hover:z-40 z-20 ${reverse ? "animate-orbit-reverse" : "animate-orbit"}`}
                style={{
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                  "--start-angle": `${startAngleDegrees}deg`,
                  "--orbit-duration": `${duration}s`,
                  "--brand-color": brandColor,
                  "--brand-color-rgb": brandRgb,
                } as React.CSSProperties}
              >
                {/* Connector Line & Dot (pointing to center) */}
                <svg 
                  width={orbitRadius} 
                  height="10" 
                  className="overflow-visible absolute pointer-events-none" 
                  style={{ 
                    left: 0, 
                    top: 0,
                    transform: "translateY(-50%)",
                    transformOrigin: "left center" 
                  }}
                >
                  {/* Radial Line */}
                  <line
                    x1={lineStart}
                    y1="5"
                    x2={lineEnd}
                    y2="5"
                    className="opacity-25 group-hover:opacity-80 transition-all duration-300 stroke-1 group-hover:stroke-[1.5px]"
                    style={{
                      stroke: "var(--brand-color)",
                    }}
                  />
                  
                  {/* Connector Dot */}
                  <circle
                    cx={dotPosition}
                    cy="5"
                    r="2.5"
                    className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:[r:4.5px] group-hover:[filter:drop-shadow(0_0_4px_var(--brand-color))]"
                    style={{
                      fill: "var(--brand-color)",
                    }}
                  />
                </svg>

                {/* Counter-rotating child wrapper to keep the icon upright */}
                <div
                  className={`absolute ${reverse ? "animate-counter-orbit-reverse" : "animate-counter-orbit"}`}
                  style={{
                    left: orbitRadius,
                    top: 0,
                    "--start-angle": `${startAngleDegrees}deg`,
                    "--orbit-duration": `${duration}s`,
                  } as React.CSSProperties}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Square-rounded Box */}
                    <div 
                      className={`backdrop-blur-md border border-[rgba(var(--brand-color-rgb),0.25)] group-hover:border-[var(--brand-color)] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-115 group-hover:[box-shadow:0_0_20px_rgba(var(--brand-color-rgb),0.35)] ${config.iconSizeClass}`}
                      style={{
                        backgroundColor: "#0c0c0aef",
                      }}
                    >
                      {/* Brand Icon */}
                      <div 
                        className="w-1/2 h-1/2 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full transition-all duration-300 group-hover:[filter:drop-shadow(0_0_6px_rgba(var(--brand-color-rgb),0.6))]"
                        style={{ 
                          color: "var(--brand-color)",
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Brand label */}
                    <span 
                      className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] tracking-wide font-semibold whitespace-nowrap pointer-events-none transition-all duration-300 opacity-0 translate-y-[-4px] group-hover:opacity-100 group-hover:translate-y-0"
                      style={{ 
                        color: "#ffffff", 
                        textShadow: "0 0 8px rgba(var(--brand-color-rgb),0.5)"
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
