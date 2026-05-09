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
  "Independent execution",
  "Production ownership",
  "Business-first engineering",
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
      className="relative overflow-hidden bg-[#020305] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-500/14 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur"
          >
            <FiMessageSquare />
            Client Proof
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            Trusted to take complex ideas from blank page to launch.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300"
          >
            Partners value the ability to think through product, architecture,
            delivery, and polish without needing a large team around every
            decision.
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
              className="group relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.055]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300/70 via-violet-300/70 to-emerald-300/70 opacity-70" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-cyan-200">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FiStar key={starIndex} className="fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  0{index + 1}
                </span>
              </div>

              <p className="text-sm leading-7 text-zinc-300">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-100">
                  {getInitials(item.name)}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
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
          className="mt-8 grid gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl md:grid-cols-3"
        >
          {proofPoints.map((point) => (
            <motion.div
              key={point}
              variants={fadeUp}
              className="flex items-center justify-center gap-3 rounded-[8px] bg-black/30 p-4 text-sm font-semibold text-zinc-200"
            >
              <FiCheckCircle className="text-emerald-200" />
              {point}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 transition hover:text-cyan-200"
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
