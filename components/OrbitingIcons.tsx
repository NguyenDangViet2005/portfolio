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
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm flex items-center justify-center z-20">
        <div className="text-center">
          <p className="text-xs text-zinc-400 font-medium">Tech</p>
          <p className="text-xs text-zinc-400 font-medium">Stack</p>
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
            <div className={`w-16 h-16 rounded-xl ${item.color} backdrop-blur-sm border border-zinc-700/50 flex flex-col items-center justify-center gap-1 shadow-lg hover:scale-110 transition-transform`}>
              <div className="text-white [&>svg]:w-6 [&>svg]:h-6">
                {item.icon}
              </div>
              <span className="text-[8px] text-zinc-300 font-medium text-center leading-tight px-1">
                {item.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
