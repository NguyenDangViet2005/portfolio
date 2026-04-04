"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Search, Moon, Sun, Bell } from "lucide-react";

const sectionNames: Record<string, string> = {
  overview: "Overview",
  projects: "Projects",
  playground: "Playground",
  story: "Story",
  contact: "Contact"
};

export default function TopNav() {
  const activeId = useScrollSpy(["overview", "projects", "playground", "story", "contact"], 64);
  
  const currentSection = activeId ? sectionNames[activeId] : "Overview";

  return (
    <header className="h-16 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-2 text-zinc-400 font-medium text-sm">
        <span>Workspace</span>
        <span>/</span>
        <span className="text-zinc-100">{currentSection}</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Mock Search */}
        <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 text-zinc-400 text-sm w-48">
          <Search size={14} />
          <span>Search...</span>
          <div className="ml-auto text-[10px] border border-zinc-700 rounded px-1 flex items-center justify-center bg-zinc-800">
            ⌘K
          </div>
        </div>

        {/* Mock Notifications & Theme */}
        <button className="text-zinc-400 hover:text-zinc-100 transition-colors">
          <Bell size={18} />
        </button>
        <button className="text-zinc-400 hover:text-zinc-100 transition-colors">
          <Moon size={18} />
        </button>
      </div>
    </header>
  );
}
