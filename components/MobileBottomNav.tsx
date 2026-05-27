"use client";

import {
  Briefcase,
  Flag,
  FolderGit2,
  GraduationCap,
  Sparkles,
  User,
} from "lucide-react";

import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "the-end", label: "End", icon: Flag },
];

export default function MobileBottomNav() {
  const activeId = useScrollSpy(
    navItems.map((item) => item.id),
    0,
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 rounded-2xl border border-zinc-800/80 bg-zinc-950/85 px-2 py-2 shadow-xl backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                isActive
                  ? "bg-indigo-500/20 text-indigo-200"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
