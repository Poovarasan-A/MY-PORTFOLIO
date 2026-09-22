"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`grid h-10 w-10 place-items-center rounded-[8px] border border-zinc-300/60 bg-zinc-100/60 dark:border-white/10 dark:bg-white/[0.04] ${className}`}
        aria-hidden="true"
      >
        <span className="h-4 w-4 rounded-full bg-zinc-400/40" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`group relative flex items-center justify-center gap-2 rounded-[8px] border border-zinc-300/80 bg-white/80 p-2.5 text-zinc-700 shadow-sm transition hover:border-cyan-500/50 hover:bg-zinc-100/90 hover:text-cyan-700 active:scale-95 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-white/[0.08] dark:hover:text-cyan-200 ${
        showLabel ? "px-4 py-2 text-xs font-semibold" : "h-10 w-10"
      } ${className}`}
    >
      <div className="relative grid h-5 w-5 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="absolute"
            >
              <FiMoon className="text-base text-cyan-300" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="absolute"
            >
              <FiSun className="text-base text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="tracking-wider uppercase">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
