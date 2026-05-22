"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderGit2,
  TerminalSquare,
  BookOpen,
  Briefcase
} from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Image from "next/image";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navItems = [
  { name: "About Me", id: "overview", icon: LayoutDashboard },
  { name: "Experience", id: "experience", icon: Briefcase },
  { name: "Projects", id: "projects", icon: FolderGit2 },
  { name: "Skills", id: "playground", icon: TerminalSquare },
  { name: "Education", id: "education", icon: BookOpen },
  { name: "My Journey", id: "story", icon: BookOpen },
];

export default function Sidebar() {
  const activeId = useScrollSpy(navItems.map(item => item.id), 64); // 64 is TopNav height approx

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 64; // Offset for top nav
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <aside className="w-64 bg-zinc-900/50 border-r border-zinc-800 flex-col justify-between hidden md:flex backdrop-blur-xl h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-12 w-12 rounded-full border border-zinc-800 overflow-hidden items-center justify-center">
            <Image src="/ndv.png" width={70} height={70} alt="author" />
          </div>
          <div>
            <h2 className="font-semibold text-zinc-100">Nguyễn Đăng Việt</h2>
            <p className="text-xs text-zinc-400">Web Dev</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = activeId === item.id || (!activeId && item.id === "overview"); // Default to overview

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left block relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${isActive ? "text-indigo-400" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                  }`}>
                  <item.icon size={18} />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-zinc-800/50">
        <a
          href="/cv.pdf"
          download
          className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md font-medium transition-colors text-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>
        <div className="flex justify-center gap-4 text-zinc-400 mt-4">
          <a href="https://github.com/NguyenDangViet2005" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/%C4%91%C4%83ng-vi%E1%BB%87t-82a881292/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
}
