"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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
}

export default function OrbitingIcons({ 
  icons, 
  radiusX = 180, 
  radiusY = 100,
  duration = 20,
  reverse = false 
}: OrbitingIconsProps) {
  return (
    <div className="relative w-full h-[200px] flex items-center justify-center">
      {/* Center circle */}
      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm flex items-center justify-center z-20">
        <div className="text-center">
        </div>
      </div>

      {/* Ellipse orbit path */}
      <div 
        className="absolute border border-dashed border-zinc-800"
        style={{ 
          width: radiusX * 2, 
          height: radiusY * 2,
          borderRadius: "50%"
        }}
      />

      {/* Orbiting icons */}
      {icons.map((item, index) => {
        const startAngle = ((360 / icons.length) * index) * (Math.PI / 180);
        
        return (
          <motion.div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: "50%",
              top: "50%",
              rotate: 0,
            }}
            animate={{
              x: Array.from({ length: 360 }, (_, i) => {
                const angle = startAngle + (reverse ? -i : i) * (Math.PI / 180);
                return Math.cos(angle) * radiusX;
              }),
              y: Array.from({ length: 360 }, (_, i) => {
                const angle = startAngle + (reverse ? -i : i) * (Math.PI / 180);
                return Math.sin(angle) * radiusY;
              }),
              zIndex: Array.from({ length: 360 }, (_, i) => {
                const angle = startAngle + (reverse ? -i : i) * (Math.PI / 180);
                const y = Math.sin(angle);
                return y > 0 ? 30 : 10;
              }),
              rotate: 0,
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl backdrop-blur-sm border flex flex-col items-center justify-center gap-0.5 sm:gap-1 shadow-lg hover:scale-110 transition-transform"
              style={{
                backgroundColor: `${item.color}15`,
                borderColor: `${item.color}40`,
              }}
            >
              <div 
                className="[&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <span className="text-[7px] sm:text-[8px] text-zinc-300 font-medium text-center leading-tight px-0.5 sm:px-1">
                {item.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
