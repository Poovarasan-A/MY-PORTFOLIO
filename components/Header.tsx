"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-[8px] border border-white/10 bg-black/55 px-4 shadow-[0_18px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-5">
        <a href="#" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[8px] border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold tracking-wider text-cyan-100 transition group-hover:border-cyan-300/60 group-hover:bg-cyan-300/15">
            NV
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white tracking-tight">
              NexVulf
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Technologies
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-100 active:scale-95 sm:inline-flex"
          >
            Start a Project
            <FiArrowUpRight />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.04] text-lg text-white transition hover:bg-white/[0.08] active:scale-95 lg:hidden"
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
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-[8px] border border-white/10 bg-[#07090d]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[6px] px-3 py-2.5 text-base font-medium text-zinc-200 transition hover:bg-white/[0.06] hover:text-cyan-200"
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight className="text-zinc-500" />
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 active:scale-95"
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
