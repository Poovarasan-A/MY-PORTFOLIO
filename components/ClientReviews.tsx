"use client";

import { motion, type Variants } from "framer-motion";
import { reviewsList } from "@/app/data";
import {
  FiArrowDown,
  FiCheckCircle,
  FiMessageSquare,
  FiStar,
} from "react-icons/fi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const proofPoints = [
  "Full-Lifecycle Ownership",
  "Production Engineering",
  "Direct Collaboration",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

const ClientReviews = () => {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-slate-50 py-24 text-zinc-900 transition-colors duration-300 dark:bg-[#020305] dark:text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:opacity-30" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[130px] dark:bg-violet-500/14" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/8 blur-[120px] dark:bg-emerald-400/10" />

      <div className="md:container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-200"
          >
            <FiMessageSquare />
            Client Testimonials
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Trusted to engineer and deliver production digital solutions.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300"
          >
            Direct feedback from founders and engineering leaders on collaboration, technical execution, and reliable delivery.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {reviewsList.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[8px] border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition hover:border-cyan-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_28px_90px_rgba(0,0,0,0.32)] dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.055]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/70 via-violet-500/70 to-emerald-500/70 opacity-70 dark:from-cyan-300/70 dark:via-violet-300/70 dark:to-emerald-300/70" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-amber-400 dark:text-cyan-200">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FiStar key={starIndex} className="fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                  0{index + 1}
                </span>
              </div>

              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                  {getInitials(item.name)}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mt-8 grid gap-3 rounded-[8px] border border-zinc-200/90 bg-white/80 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none md:grid-cols-3"
        >
          {proofPoints.map((point) => (
            <motion.div
              key={point}
              variants={fadeUp}
              className="flex items-center justify-center gap-3 rounded-[8px] bg-zinc-50 p-4 text-sm font-semibold text-zinc-800 dark:bg-black/30 dark:text-zinc-200"
            >
              <FiCheckCircle className="text-emerald-500 dark:text-emerald-200" />
              {point}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 transition hover:text-cyan-600 dark:hover:text-cyan-200"
          >
            Let&apos;s collaborate
            <FiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
