"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaCloudDownloadAlt } from "react-icons/fa";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import profile from "../../public/images/Techguy2.png";

const heroStats = [
  { value: "2+", label: "Years industry experience" },
  { value: "10+", label: "Products and systems shipped" },
  { value: "100%", label: "Solo product ownership" },
];

const orbitItems = [
  "Next.js",
  "Flutter",
  "Node.js",
  "MongoDB",
  "React",
  "Payments",
];

const HomeContent = () => {
  return (
    <div className="md:container relative z-10 mx-auto grid min-h-screen items-center gap-12  px-4 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pb-0 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_36px_rgba(34,211,238,0.12)] backdrop-blur">
          <FiZap />
          Full Stack Developer
        </div>

        <h1 className="text-balance text-3xl font-bold leading-[0.96] tracking-normal text-white sm:text-4xl lg:text-5xl">
          I architect and ship{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-emerald-200 bg-clip-text text-transparent">
            complete products
          </span>
        </h1>

        <div className="mt-3 md:mt-6 flex min-h-9 flex-wrap items-center gap-3 text-lg font-semibold text-zinc-200 sm:text-2xl">
          <span>Building</span>
          <TypeAnimation
            sequence={[
              "production ecosystems",
              2500,
              "scalable dashboards",
              2500,
              "mobile + web platforms",
              2500,
            ]}
            speed={55}
            className="text-cyan-200"
            repeat={Infinity}
          />
        </div>

        <p className="md:mt-6 mt-3 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
          I turn product ideas into deployed systems across frontend, backend,
          mobile apps, dashboards, payments, automation, and infrastructure.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 active:scale-95"
          >
            View Case Studies
            <FiArrowDown />
          </Link>
          <Link
            href="/images/Poovarasan Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/10 active:scale-95"
          >
            Resume
            <FaCloudDownloadAlt />
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
            >
              <p className="bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text text-3xl font-bold text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[520px]"
      >
        <div className="absolute inset-8 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-35" />
          <div className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-white/10 bg-black/60">
            <Image
              src={profile}
              alt="Poovarasan Arumugam"
              priority
              className="absolute bottom-0 left-1/2 z-10 w-[72%] -translate-x-1/2 object-contain drop-shadow-[0_32px_70px_rgba(34,211,238,0.22)]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/20"
            >
              {orbitItems.map((item, index) => {
                const angle = (index / orbitItems.length) * Math.PI * 2;
                return (
                  <span
                    key={item}
                    className="absolute rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-lg"
                    style={{
                      left: `calc(50% + ${Math.cos(angle) * 10}rem)`,
                      top: `calc(50% + ${Math.sin(angle) * 10}rem)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </motion.div>

            <div className="absolute left-4 top-4 z-20 rounded-[8px] border border-white/10 bg-black/70 p-4 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                <FiCheckCircle />
                Production Ready
              </div>
              <div className="space-y-2 text-sm text-zinc-300">
                <p className="flex items-center gap-2">
                  <FiLayers className="text-cyan-200" /> Mobile + Web
                </p>
                <p className="flex items-center gap-2">
                  <FiCpu className="text-violet-200" /> Backend + Ops
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-20 rounded-[8px] border border-white/10 bg-black/70 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Current Focus
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Scalable SaaS Systems
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeContent;
