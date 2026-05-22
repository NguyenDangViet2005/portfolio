"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

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
    // 3-column layout middle column is narrow
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
  // Large desktop (>= 1440)
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
  radiusX, // ignored in favor of auto-responsive sizing
  radiusY, // ignored in favor of auto-responsive sizing
  duration = 20,
  reverse = false,
  children,
  className = ""
}: OrbitingIconsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  // Helper to extract hex color from hex code or Tailwind class
  const getBrandColor = (colorStr: string) => {
    if (colorStr.startsWith("#")) return colorStr;
    const match = colorStr.match(/#([0-9a-fA-F]{3,6})/);
    if (match) return `#${match[1]}`;
    return "#a1a1aa"; // fallback gray
  };

  // Helper to convert hex to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    if (!hex || !hex.startsWith("#")) return hex;
    const cleanHex = hex.replace("#", "");
    let r = 0, g = 0, b = 0;
    if (cleanHex.length === 3) {
      r = parseInt(cleanHex[0] + cleanHex[0], 16);
      g = parseInt(cleanHex[1] + cleanHex[1], 16);
      b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
      r = parseInt(cleanHex.substring(0, 2), 16);
      g = parseInt(cleanHex.substring(2, 4), 16);
      b = parseInt(cleanHex.substring(4, 6), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div 
      className={`relative w-full flex items-center justify-center overflow-visible ${className}`}
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

      {/* Center circle (Glossy Yellow/Amber 3D-like Orb) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border border-amber-500/20 scale-[1.25] pointer-events-none" />
        
        {/* Glossy orb */}
        <div 
          className={`relative rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md group hover:scale-105 hover:border-white/50 transition-all duration-500 cursor-pointer ${config.centerOrbSizeClass}`}
          style={{
            background: "radial-gradient(circle at 30% 30%, #fef08a 0%, #eab308 30%, #854d0e 70%, #1c0d02 100%)",
            boxShadow: "0 0 50px rgba(245, 158, 11, 0.4), inset 0 -8px 20px rgba(0, 0, 0, 0.8), inset 0 8px 20px rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Glass highlight reflection */}
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

      {/* Orbiting icons */}
      {icons.map((item, index) => {
        const startAngleDegrees = ((360 / icons.length) * index) - 90;
        const isHovered = hoveredIndex === index;
        const brandColor = getBrandColor(item.color);

        const orbitRadius = config.radius + config.offset;
        const lineStart = config.centerRadius;
        const lineEnd = orbitRadius - config.iconBoxHalfSize;
        const dotPosition = config.radius;

        return (
          <div key={index}>
            {/* Connector Line & Dot (pointing to center) - rotated parent container */}
            <motion.div
              className="absolute pointer-events-none z-10"
              style={{
                left: "50%",
                top: "50%",
                width: 0,
                height: 0,
              }}
              animate={{
                rotate: reverse
                  ? [startAngleDegrees, startAngleDegrees - 360]
                  : [startAngleDegrees, startAngleDegrees + 360],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg 
                width={orbitRadius} 
                height="10" 
                className="overflow-visible absolute" 
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
                  stroke={hexToRgba(brandColor, isHovered ? 0.8 : 0.25)}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-all duration-300"
                />
                
                {/* Connector Dot */}
                <circle
                  cx={dotPosition}
                  cy="5"
                  r={isHovered ? 4.5 : 2.5}
                  fill={brandColor}
                  className="transition-all duration-300"
                  style={{
                    opacity: isHovered ? 1.0 : 0.6,
                    filter: isHovered ? `drop-shadow(0 0 4px ${brandColor})` : "none",
                  }}
                />
              </svg>
            </motion.div>

            {/* Icon Box and Label */}
            <div
              className="absolute z-30"
              style={{
                left: "50%",
                top: "50%",
                width: 0,
                height: 0,
              }}
            >
              {/* Parent container that rotates around center */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                }}
                animate={{
                  rotate: reverse
                    ? [startAngleDegrees, startAngleDegrees - 360]
                    : [startAngleDegrees, startAngleDegrees + 360],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Centering wrapper positioned at orbit radius */}
                <div
                  className="absolute"
                  style={{
                    left: orbitRadius,
                    top: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Inner counter-rotating motion.div to keep the icon box upright */}
                  <motion.div
                    className="pointer-events-auto"
                    animate={{
                      rotate: reverse
                        ? [-startAngleDegrees, -startAngleDegrees + 360]
                        : [-startAngleDegrees, -startAngleDegrees - 360],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative flex flex-col items-center group cursor-pointer">
                      {/* Square-rounded Box */}
                      <div 
                        className={`backdrop-blur-md border flex items-center justify-center shadow-lg transition-all duration-300 ${config.iconSizeClass}`}
                        style={{
                          backgroundColor: "#0c0c0aef",
                          borderColor: isHovered
                            ? brandColor
                            : hexToRgba(brandColor, 0.25),
                          boxShadow: isHovered 
                            ? `0 0 20px ${hexToRgba(brandColor, 0.35)}`
                            : "none",
                          transform: isHovered ? "scale(1.1)" : "scale(1)",
                        }}
                      >
                        {/* Brand Icon (Colored by default) */}
                        <div 
                          className="w-1/2 h-1/2 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full transition-all duration-300"
                          style={{ 
                            color: brandColor,
                            filter: isHovered ? `drop-shadow(0 0 6px ${hexToRgba(brandColor, 0.6)})` : "none" 
                          }}
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Brand label (Hover-only) */}
                      <span 
                        className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] tracking-wide font-semibold transition-all duration-300 whitespace-nowrap pointer-events-none"
                        style={{ 
                          color: "#ffffff", 
                          opacity: isHovered ? 1.0 : 0,
                          transform: isHovered ? "translate(-50%, 0)" : "translate(-50%, -4px)",
                          textShadow: `0 0 8px ${hexToRgba(brandColor, 0.5)}`
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
