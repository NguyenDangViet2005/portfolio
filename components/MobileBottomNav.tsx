"use client";

import { useState } from "react";
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  Sparkles,
  User,
  Mail,
} from "lucide-react";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ThemeToggle";
import ContactModal from "@/components/ContactModal";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "education", label: "Education", icon: GraduationCap },
];

export default function MobileBottomNav() {
  const [isContactOpen, setIsContactOpen] = useState(false);
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
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/85 px-2 py-1.5 shadow-lg backdrop-blur-md transition-colors duration-200">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                  isActive
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black shadow-sm"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                <Icon size={16} />
              </button>
            );
          })}

          <button
            type="button"
            aria-label="Contact"
            onClick={() => setIsContactOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <Mail size={16} />
          </button>

          <div className="w-[1px] h-5 bg-zinc-200 dark:bg-zinc-800 mx-0.5" />
          <ThemeToggle className="!p-1.5 !h-9 !w-9" />
        </div>
      </nav>
    </>
  );
}

