"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import LogoImg from "@/public/logo.png";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loader is visible
    document.body.style.overflow = "hidden";

    let minTimeElapsed = false;
    let pageLoaded = false;
    let isMounted = true;

    const checkAndComplete = () => {
      if (minTimeElapsed && pageLoaded && isMounted) {
        setLoading(false);
        document.body.style.overflow = "";
      }
    };

    // Minimum display time: 3 seconds (3000ms)
    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      checkAndComplete();
    }, 3000);

    // Check if the page has fully loaded
    const handleLoad = () => {
      pageLoaded = true;
      checkAndComplete();
    };

    if (document.readyState === "complete") {
      pageLoaded = true;
      checkAndComplete();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Safety fallback: ensure loader doesn't get stuck indefinitely if external scripts stall
    const fallbackTimer = setTimeout(() => {
      minTimeElapsed = true;
      pageLoaded = true;
      checkAndComplete();
    }, 10000);

    return () => {
      isMounted = false;
      clearTimeout(minTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-50 text-zinc-900 transition-colors duration-300 dark:bg-[#020305] dark:text-white"
        >
          {/* Subtle background ambient glow */}
          <div className="pointer-events-none absolute h-96 w-96 max-w-full rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-400/15" />
          <div className="pointer-events-none absolute h-80 w-80 max-w-full rounded-full bg-violet-500/10 blur-[110px] dark:bg-violet-500/15" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Compact Logo Container with Spinning Circle */}
            <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
              {/* Glowing Spin Circle Around Logo */}
              <svg
                className="absolute inset-0 h-full w-full animate-[spin_2.2s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient
                    id="loaderGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                {/* Background Ring Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="currentColor"
                  className="text-zinc-200/80 dark:text-white/10"
                  strokeWidth="3"
                />
                {/* Spinning Gradient Arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="url(#loaderGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="85 180"
                />
              </svg>

              {/* Pulsing Backlight for Logo */}
              <div className="absolute h-12 w-12 rounded-full bg-cyan-400/20 blur-md dark:bg-cyan-400/30" />

              {/* Central Logo */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{
                  scale: [0.96, 1.04, 0.96],
                  opacity: 1,
                }}
                transition={{
                  scale: {
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.5 },
                }}
                className="relative flex items-center justify-center"
              >
                <Image
                  src={LogoImg}
                  alt="NexVulf Technologies"
                  priority
                  className="h-12 w-12 object-contain transition duration-300 dark:invert sm:h-12 sm:w-12"
                />
              </motion.div>
            </div>

            {/* Typography & Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-8 flex flex-col items-center text-center"
            >
              {/* Studio Pill Badge */}
              {/* <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-700 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                Modern Technology Studio
              </div> */}

              {/* Welcome Headline */}
              <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl md:text-3xl">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400">
                  NexVulf Technologies
                </span>
              </h1>

              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                Engineering high-performance software, web platforms &amp;
                mobile apps
              </p>

              {/* Animated Progress Bar */}
              <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-zinc-200/80 dark:bg-white/10 sm:w-56">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
