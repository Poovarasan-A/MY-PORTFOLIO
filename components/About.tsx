"use client";

import { motion, type Variants } from "framer-motion";
import {
  FiActivity,
  FiArrowDown,
  FiCheckCircle,
  FiCloud,
  FiCode,
  FiCpu,
  FiCreditCard,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiLifeBuoy,
  FiShare2,
  FiShoppingBag,
  FiSmartphone,
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

const primaryServices = [
  {
    number: "01",
    title: "Web Development",
    icon: FiGlobe,
    description:
      "High-performance, responsive websites, web platforms, and marketing flagships built with Next.js, React, TypeScript, and modern CSS architecture.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    icon: FiSmartphone,
    description:
      "Cross-platform mobile applications for iOS and Android built with Flutter, focusing on native performance, fluid animations, and clean state architecture.",
    tags: ["Flutter", "Dart", "iOS", "Android"],
  },
  {
    number: "03",
    title: "Custom Software",
    icon: FiLayers,
    description:
      "Bespoke business software, role-based admin portals, internal operations tools, and real-time operational workflow management dashboards.",
    tags: ["Admin Portals", "Workflow Tools", "Dashboards", "Internal Systems"],
  },
  {
    number: "04",
    title: "E-commerce",
    icon: FiShoppingBag,
    description:
      "Custom Shopify theme development and bespoke storefronts, product catalogs, shopping carts, checkout workflows, and secure payment processing.",
    tags: ["Shopify Liquid", "Custom Storefronts", "Stripe", "Checkout Flows"],
  },
  {
    number: "05",
    title: "SaaS & Product Development",
    icon: FiCpu,
    description:
      "End-to-end digital product engineering, multi-surface application architectures, authentication, database schemas, and cloud deployment.",
    tags: ["SaaS Architecture", "REST APIs", "MongoDB", "Node.js"],
  },
];

const supportingCapabilities = [
  {
    label: "UI/UX Design",
    icon: FiLayout,
    description:
      "Design systems, responsive layouts, user flow architecture, and interactive micro-interactions.",
  },
  {
    label: "Backend & API Development",
    icon: FiCode,
    description:
      "RESTful APIs, Node.js services, serverless cloud functions, and robust database modeling.",
  },
  {
    label: "Payment Integrations",
    icon: FiCreditCard,
    description:
      "Payment gateway setups, checkout flows, transaction tracking, and automated payout states.",
  },
  {
    label: "Cloud Deployment",
    icon: FiCloud,
    description:
      "Production releases, cloud hosting setups, DNS configuration, and automated build pipelines.",
  },
  {
    label: "Third-Party Integrations",
    icon: FiShare2,
    description:
      "CRM systems, automated email/SMS/WhatsApp notifications, analytics, and custom API syncs.",
  },
  {
    label: "Maintenance & Support",
    icon: FiLifeBuoy,
    description:
      "Post-launch technical support, system monitoring, performance optimization, and feature updates.",
  },
];

const deliverySteps = [
  {
    step: "01",
    title: "Discovery & Scope",
    desc: "Aligning on technical specifications, product requirements, user flows, and delivery timeline.",
  },
  {
    step: "02",
    title: "Architecture & UI",
    desc: "Designing responsive interfaces, data models, API contracts, and scalable system structures.",
  },
  {
    step: "03",
    title: "Full-Stack Build",
    desc: "Engineering clean frontend code, reliable backend services, database schemas, and third-party integrations.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Conducting quality assurance, cloud deployment, production testing, and ongoing support.",
  },
];

const About = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 text-zinc-900 transition-colors duration-300 dark:bg-[#020305] dark:text-white sm:py-28 lg:py-32"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:opacity-35" />
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-violet-500/8 blur-[120px] dark:bg-violet-500/12" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/8 blur-[120px] dark:bg-cyan-400/10" />

      <div className="md:container relative z-10 mx-auto px-4">
        {/* Header Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-200"
            >
              <FiActivity />
              Studio Capabilities
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              Engineering complete digital products across{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-emerald-600 dark:from-cyan-200 dark:via-violet-200 dark:to-emerald-200 bg-clip-text text-transparent">
                five core disciplines
              </span>
              .
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg"
          >
            NexVulf Technologies combines full-stack web engineering, cross-platform mobile development, custom business software, and e-commerce platforms to turn product objectives into dependable software.
          </motion.p>
        </motion.div>

        {/* 5 Primary Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {primaryServices.map(({ number, title, description, icon: Icon, tags }, index) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col justify-between rounded-[8px] border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition hover:border-cyan-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.055] ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/70 via-violet-500/50 to-transparent dark:from-cyan-300/60 dark:via-violet-300/40 dark:to-transparent" />
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-[8px] border border-cyan-500/25 bg-cyan-500/10 text-xl text-cyan-700 transition group-hover:border-cyan-500/50 group-hover:bg-cyan-500/15 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100 dark:group-hover:border-cyan-300/50 dark:group-hover:bg-cyan-300/15">
                    <Icon />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-cyan-600 dark:text-zinc-600 dark:group-hover:text-cyan-200">
                    {number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/80 dark:border-white/10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:border-white/10 dark:bg-black/40 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Supporting Capabilities Matrix */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-14"
        >
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-700 dark:text-cyan-200">
                Engineering Depth
              </p>
              <h3 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-white">
                Supporting Capabilities
              </h3>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              End-To-End Delivery Suite
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supportingCapabilities.map(({ label, icon: Icon, description }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between rounded-[8px] border border-zinc-200/90 bg-white/80 p-4 shadow-sm backdrop-blur-xl transition hover:border-cyan-500/30 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.05]"
              >
                <div>
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-[6px] border border-cyan-500/20 bg-cyan-500/10 text-sm text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
                      <Icon />
                    </span>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{label}</h4>
                  </div>
                  <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4-Step Delivery Pipeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-14 rounded-[8px] border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-8"
        >
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end border-b border-zinc-200/80 pb-5 dark:border-white/10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-700 dark:text-cyan-200">
                Execution Blueprint
              </p>
              <h3 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-white">
                How We Deliver
              </h3>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Transparent, Milestone-Driven Process
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative rounded-[8px] border border-zinc-200/80 bg-zinc-50 p-4 shadow-sm dark:border-white/10 dark:bg-black/40 dark:shadow-none"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-200">{step}</span>
                  <FiCheckCircle className="text-emerald-500 text-sm dark:text-emerald-300" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{title}</h4>
                <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 transition hover:text-cyan-600 dark:hover:text-cyan-200"
          >
            Explore Systems We&apos;ve Built
            <FiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
