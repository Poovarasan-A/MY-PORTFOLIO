"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./theme/ThemeToggle";
import LogoImg from "../public/images/logo.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#projects" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-[90] px-4"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-[8px] border border-zinc-200/80 bg-white/80 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-black/55 dark:shadow-[0_18px_80px_rgba(0,0,0,0.45)] sm:px-5">
        <a href="#" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[8px] border border-cyan-500/30 bg-cyan-500/10 p-1 transition group-hover:border-cyan-500/60 group-hover:bg-cyan-500/15 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:group-hover:border-cyan-300/60 dark:group-hover:bg-cyan-300/15">
            <Image
              src={LogoImg}
              alt="NexVulf Logo"
              className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105 dark:invert"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
              NexVulf
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Technologies
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-zinc-200/80 bg-zinc-100/70 p-1 dark:border-white/10 dark:bg-white/[0.035] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-white hover:text-zinc-950 hover:shadow-sm dark:text-zinc-300 dark:hover:bg-white/[0.08] dark:hover:text-white dark:hover:shadow-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button in Desktop Header */}
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-cyan-100 sm:inline-flex"
          >
            Start a Project
            <FiArrowUpRight />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="grid h-10 w-10 place-items-center rounded-[8px] border border-zinc-200/80 bg-zinc-100/80 text-lg text-zinc-800 transition hover:bg-zinc-200/80 active:scale-95 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08] lg:hidden"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-[8px] border border-zinc-200/90 bg-white/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#07090d]/95 dark:shadow-[0_20px_80px_rgba(0,0,0,0.7)] lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[6px] px-3 py-2.5 text-base font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-cyan-700 dark:text-zinc-200 dark:hover:bg-white/[0.06] dark:hover:text-cyan-200"
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight className="text-zinc-400 dark:text-zinc-500" />
                </a>
              ))}

              <div className="mt-2 pt-3 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-3">
                <ThemeToggle showLabel className="w-full justify-between" />
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-cyan-100"
                >
                  Start a Project
                  <FiArrowUpRight />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
