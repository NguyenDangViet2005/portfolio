"use client";

import { motion } from "framer-motion";
import { Gem, Handshake, Gauge, Lock, Puzzle, Code2 } from "lucide-react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiDownload,
} from "react-icons/fi";

interface WhatIBringColumnProps {
  sectionInView: boolean;
}

const themeMap = {
  amber: {
    card: "border-amber-500/10 bg-amber-500/[0.01] hover:border-amber-500/30 hover:bg-amber-500/[0.03] hover:shadow-[0_0_15px_rgba(245,124,0,0.06)]",
    icon: "border-amber-500/20 text-amber-400",
  },
  emerald: {
    card: "border-emerald-500/10 bg-amber-500/[0.01] hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] hover:shadow-[0_0_15px_rgba(16,185,129,0.06)]",
    icon: "border-emerald-500/20 text-emerald-400",
  },
  purple: {
    card: "border-purple-500/10 bg-amber-500/[0.01] hover:border-purple-500/30 hover:bg-purple-500/[0.03] hover:shadow-[0_0_15px_rgba(168,85,247,0.06)]",
    icon: "border-purple-500/20 text-purple-400",
  },
  cyan: {
    card: "border-cyan-500/10 bg-amber-500/[0.01] hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] hover:shadow-[0_0_15px_rgba(6,182,212,0.06)]",
    icon: "border-cyan-500/20 text-cyan-400",
  },
} as const;

const rightCards: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: keyof typeof themeMap;
}[] = [
  {
    title: "Performance Focused",
    desc: "Optimize application performance and user experience.",
    icon: <Gauge className="w-4 h-4" />,
    color: "amber",
  },
  {
    title: "Security Mindset",
    desc: "Build secure applications and follow best security practices.",
    icon: <Lock className="w-4 h-4" />,
    color: "amber",
  },
  {
    title: "Problem Solver",
    desc: "Strong analytical thinking and effective problem-solving skills.",
    icon: <Puzzle className="w-4 h-4" />,
    color: "amber",
  },
  {
    title: "Clean & Maintainable Code",
    desc: "Write clean, modular, and well-documented code.",
    icon: <Code2 className="w-4 h-4" />,
    color: "amber",
  },
];

export default function WhatIBringColumn({
  sectionInView,
}: WhatIBringColumnProps) {
  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-[0_0_10px_rgba(245,124,0,0.15)]">
            <Gem className="w-4 h-4" />
          </div>
          <span className="text-zinc-200 font-semibold text-xs tracking-[0.2em] uppercase">
            What I Bring
          </span>
        </div>

        <div className="space-y-3">
          {rightCards.map((card, index) => {
            const theme = themeMap[card.color];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex gap-3 p-3 rounded-xl border transition-all duration-300 group ${theme.card}`}
              >
                <div
                  className={`w-9 h-9 flex-shrink-0 rounded-lg border bg-amber-500/5 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${theme.icon}`}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[13px] text-zinc-100 mb-0.5">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-normal font-light">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom: Let's Connect */}
      <div>
        <div className="flex items-center gap-3 mb-5 border-t border-white/5 pt-5">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-[0_0_10px_rgba(245,124,0,0.15)]">
            <Handshake className="w-4 h-4" />
          </div>
          <span className="text-zinc-200 font-semibold text-xs tracking-[0.2em] uppercase">
            Let's Connect
          </span>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm">
          {/* Email & Phone List */}
          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:vietnguyen.1022005@gmail.com"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-amber-500/20 hover:bg-amber-500/[0.02] text-zinc-400 hover:text-zinc-200 transition-all duration-300 group"
            >
              <FiMail className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
              <span className="truncate">vietnguyen.1022005@gmail.com</span>
            </a>
            <a
              href="tel:+84905507622"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] text-zinc-400 hover:text-zinc-200 transition-all duration-300 group"
            >
              <FiPhone className="w-4 h-4 text-amber-500/80 group-hover:text-emerald-500 transition-colors" />
              <span>(+84) 905 507 622</span>
            </a>
          </div>

          {/* Social & CV Grid */}
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 pt-1">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/NguyenDangViet2005"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:border-zinc-400 hover:bg-zinc-800/40 hover:text-white transition-all duration-300 hover:scale-105"
                title="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:border-blue-500/30 hover:bg-blue-950/20 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                title="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/dangvietdzday"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:border-indigo-500/30 hover:bg-indigo-950/20 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
                title="Facebook"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/dangviet102/"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:border-pink-500/30 hover:bg-pink-950/20 hover:text-pink-400 transition-all duration-300 hover:scale-105"
                title="Instagram"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
            </div>

            {/* Download CV */}
            <a
              href="/NguyenDangViet_cv.pdf"
              download="NguyenDangViet_cv.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500/10 text-amber-500 hover:text-amber-400 border border-amber-500/20 hover:border-amber-500/30 font-medium rounded-lg hover:bg-amber-500/20 transition-all duration-300 text-xs shadow-[0_0_10px_rgba(245,124,0,0.05)] hover:scale-102"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Location info */}
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 pt-2 border-t border-white/[0.03]">
            <FiMapPin className="w-3.5 h-3.5 text-zinc-500/70" />
            <span>Da Nang City, Viet Nam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
