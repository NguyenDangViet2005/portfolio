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

const rightCards = [
  {
    title: "High-Speed Performance",
    desc: "Optimizing Core Web Vitals, lazy rendering, and asset caching.",
    icon: <Gauge className="w-4 h-4" />,
  },
  {
    title: "Security & Reliability",
    desc: "Implementing input sanitization, JWT authorization, and CORS safety.",
    icon: <Lock className="w-4 h-4" />,
  },
  {
    title: "Analytical Problem Solver",
    desc: "Deconstructing complex workflows into elegant, maintainable code.",
    icon: <Puzzle className="w-4 h-4" />,
  },
  {
    title: "Production-Grade Clean Code",
    desc: "Modular component hierarchy, strict typing, and DRY architecture.",
    icon: <Code2 className="w-4 h-4" />,
  },
];

export default function WhatIBringColumn({
  sectionInView,
}: WhatIBringColumnProps) {
  return (
    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-zinc-200/80 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-white shadow-sm">
            <Gem className="w-4 h-4" />
          </div>
          <div>
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold text-xs tracking-[0.2em] uppercase font-mono block">
              Capabilities // 03
            </span>
            <span className="text-zinc-500 text-[11px] font-mono">Value Delivered</span>
          </div>
        </div>

        <div className="space-y-3">
          {rightCards.map((card, index) => {
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="flex gap-3.5 p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/40 hover:bg-zinc-100/90 dark:hover:bg-zinc-800/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="w-9 h-9 flex-shrink-0 rounded-lg border border-zinc-300/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[13px] text-zinc-900 dark:text-zinc-100 mb-0.5">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal font-light">
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
        <div className="flex items-center gap-3 mb-5 border-t border-zinc-200 dark:border-zinc-800/80 pt-5">
          <div className="w-8 h-8 rounded-full bg-zinc-200/80 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-900 dark:text-white">
            <Handshake className="w-4 h-4" />
          </div>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-xs tracking-[0.2em] uppercase font-mono">
            Fast Track Channel
          </span>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm">
          {/* Email & Phone List */}
          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:vietnguyen.1022005@gmail.com"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 transition-all duration-200 group"
            >
              <FiMail className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              <span className="truncate font-mono text-xs">vietnguyen.1022005@gmail.com</span>
            </a>
            <a
              href="tel:+84905507622"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 transition-all duration-200 group"
            >
              <FiPhone className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              <span className="font-mono text-xs">(+84) 905 507 622</span>
            </a>
          </div>

          {/* Social & CV Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-3 pt-1">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/NguyenDangViet2005"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all duration-200"
                title="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all duration-200"
                title="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/dangvietdzday"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all duration-200"
                title="Facebook"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/dangviet102/"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all duration-200"
                title="Instagram"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
            </div>

            {/* CV Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="/NguyenDangViet_cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 font-medium rounded-lg transition-all duration-200 text-xs shadow-sm"
              >
                <span>View CV</span>
              </a>
              <a
                href="/NguyenDangViet_cv.pdf"
                download="NguyenDangViet_cv.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium rounded-lg transition-all duration-200 text-xs shadow-sm"
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>CV</span>
              </a>
            </div>
          </div>

          {/* Location info */}
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 pt-2 border-t border-zinc-200 dark:border-zinc-800/60 font-mono">
            <FiMapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>Da Nang City, Viet Nam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
