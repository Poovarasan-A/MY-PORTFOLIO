"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiShoppingBag,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const capabilityHighlights = [
  { label: "Web Platforms", detail: "Next.js • React • TypeScript", icon: FiGlobe },
  { label: "Mobile Applications", detail: "iOS & Android • Flutter", icon: FiSmartphone },
  { label: "Custom Software", detail: "Admin Portals • Workflows", icon: FiLayers },
  { label: "E-commerce", detail: "Shopify • Custom Stores", icon: FiShoppingBag },
  { label: "SaaS Products", detail: "Cloud APIs • Databases", icon: FiCpu },
];

const HomeContent = () => {
  return (
    <div className="md:container relative z-10 mx-auto grid min-h-screen items-center gap-12 px-4 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pb-0 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_36px_rgba(34,211,238,0.12)] backdrop-blur">
          <FiZap />
          Modern Technology Studio
        </div>

        <h1 className="text-balance text-3xl font-bold leading-[0.96] tracking-normal text-white sm:text-4xl lg:text-5xl">
          We engineer and launch{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-emerald-200 bg-clip-text text-transparent">
            modern digital products
          </span>
        </h1>

        <div className="mt-3 md:mt-6 flex min-h-9 flex-wrap items-center gap-3 text-lg font-semibold text-zinc-200 sm:text-2xl">
          <span>Building</span>
          <TypeAnimation
            sequence={[
              "high-performance websites",
              2500,
              "cross-platform mobile apps",
              2500,
              "custom business software",
              2500,
              "tailored e-commerce experiences",
              2500,
              "scalable SaaS products",
              2500,
            ]}
            speed={55}
            className="text-cyan-200"
            repeat={Infinity}
          />
        </div>

        <p className="md:mt-6 mt-3 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
          NexVulf Technologies builds production-ready digital platforms for
          ambitious businesses—combining thoughtful architecture, intuitive
          interfaces, and scalable engineering.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 active:scale-95"
          >
            Explore Selected Work
            <FiArrowDown />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/10 active:scale-95"
          >
            Studio Capabilities
            <FiArrowUpRight />
          </Link>
        </div>

        {/* Non-numeric capability matrix */}
        <div className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityHighlights.map(({ label, detail, icon: Icon }) => (
            <div
              key={label}
              className="rounded-[8px] border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-[6px] border border-cyan-300/20 bg-cyan-300/10 text-xs text-cyan-200">
                  <Icon />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {label}
                </p>
              </div>
              <p className="mt-2 text-[11px] leading-4 text-zinc-400">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Digital Product Ecosystem Visualizer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[520px]"
      >
        <div className="absolute inset-8 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-3.5 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />

          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#06080d]/90 p-5 flex flex-col gap-4">
            {/* Top Bar Status */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  Digital Product Ecosystem
                </span>
              </div>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-cyan-200">
                NexVulf Engine
              </span>
            </div>

            {/* Center Hub */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 mx-auto w-fit rounded-[8px] border border-cyan-300/40 bg-zinc-950/90 p-4 shadow-[0_0_50px_rgba(34,211,238,0.18)] text-center"
            >
              {/* Connecting Ambient Lines behind hub */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 overflow-hidden rounded-[8px]">
                <div className="h-40 w-40 rounded-full border border-dashed border-cyan-300/40 animate-spin-slow" />
              </div>
              <div className="relative z-10">
                <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <FiCpu className="text-lg" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Core Architecture
                </p>
                <p className="mt-1 text-[10px] text-zinc-400">
                  APIs • Workflows • Cloud
                </p>
              </div>
            </motion.div>

            {/* Satellite Node: Web Platforms */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="relative z-10 flex items-center justify-between rounded-[8px] border border-white/10 bg-black/60 p-3 backdrop-blur"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-[6px] border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 text-xs">
                  <FiGlobe />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Web Platforms</p>
                  <p className="text-[10px] text-zinc-400">Next.js • React • TS</p>
                </div>
              </div>
              <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-200">
                Production Ready
              </span>
            </motion.div>

            {/* Satellite Grid: Mobile & E-commerce */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="rounded-[8px] border border-white/10 bg-black/60 p-3 backdrop-blur"
              >
                <div className="flex items-center gap-2 text-emerald-200 text-xs mb-1">
                  <FiSmartphone />
                  <span className="text-xs font-semibold text-white">Mobile Apps</span>
                </div>
                <p className="text-[10px] text-zinc-400">iOS & Android / Flutter</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="rounded-[8px] border border-white/10 bg-black/60 p-3 backdrop-blur"
              >
                <div className="flex items-center gap-2 text-violet-200 text-xs mb-1">
                  <FiShoppingBag />
                  <span className="text-xs font-semibold text-white">E-commerce</span>
                </div>
                <p className="text-[10px] text-zinc-400">Shopify & Custom Stores</p>
              </motion.div>
            </div>

            {/* Satellite Node: Custom Software & Dashboards */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="flex items-center justify-between rounded-[8px] border border-white/10 bg-black/60 p-3 backdrop-blur"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-[6px] border border-violet-300/20 bg-violet-300/10 text-violet-200 text-xs">
                  <FiLayers />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Custom Software & Dashboards</p>
                  <p className="text-[10px] text-zinc-400">Internal Portals • Data Systems</p>
                </div>
              </div>
              <FiCheckCircle className="text-emerald-300 text-sm" />
            </motion.div>

            {/* Bottom Info Footprint */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Cross-Platform
              </span>
              <span>Full-Stack Engineering</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeContent;
