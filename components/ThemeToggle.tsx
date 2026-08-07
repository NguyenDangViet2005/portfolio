"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center ${
        theme === "dark"
          ? "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
          : "bg-white border-zinc-300 text-zinc-700 hover:text-black hover:border-zinc-500 shadow-sm"
      } ${className}`}
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-800" />
      )}
    </button>
  );
}
