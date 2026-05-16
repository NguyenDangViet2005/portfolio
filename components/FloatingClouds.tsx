"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingClouds() {
  const clouds = [
    { id: 1, top: "10%", left: "5%", size: 200, duration: 25, delay: 0 },
    { id: 2, top: "20%", right: "8%", size: 180, duration: 30, delay: 2 },
    { id: 3, top: "40%", left: "2%", size: 150, duration: 28, delay: 4 },
    { id: 4, top: "60%", right: "5%", size: 220, duration: 32, delay: 1 },
    { id: 5, top: "75%", left: "10%", size: 170, duration: 27, delay: 3 },
    { id: 6, top: "85%", right: "12%", size: 190, duration: 29, delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute opacity-30"
          style={{
            top: cloud.top,
            left: cloud.left,
            right: cloud.right,
            width: cloud.size,
            height: cloud.size * 0.6,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: cloud.delay,
          }}
        >
          <Image
            src="/cloud.png"
            alt="Cloud decoration"
            width={cloud.size}
            height={cloud.size * 0.6}
            className="w-full h-full object-contain"
            priority={false}
          />
        </motion.div>
      ))}
    </div>
  );
}
