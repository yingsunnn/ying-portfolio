"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="flex items-center gap-2 px-4 py-2 font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        size="16"
        className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size="16"
        className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}