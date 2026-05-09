"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Proof", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const portfolioV1Link = "https://poovarasan-arumugam.vercel.app/";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-[90] px-4"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-[8px] border border-white/10 bg-black/45 px-4 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-5">
        <a href="#" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[8px] border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100">
            PA
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-white">
              Poovarasan Arumugam
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              Software Engineer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={portfolioV1Link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 sm:inline-flex"
          >
            v1
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-100 active:scale-95"
          >
            Build With Me
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
