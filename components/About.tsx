"use client";

import { motion, type Variants } from "framer-motion";
import {
  FiActivity,
  FiArrowDown,
  FiCloud,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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

const capabilities = [
  {
    title: "Product Architecture",
    description:
      "Translating business needs into systems, flows, data models, dashboards, and release-ready product surfaces.",
    icon: FiLayers,
  },
  {
    title: "Full Stack Execution",
    description:
      "Frontend, backend, APIs, databases, authentication, payments, deployment, and ongoing maintenance.",
    icon: FiCode,
  },
  {
    title: "Production Operations",
    description:
      "Building admin tools, automation, monitoring-ready workflows, and maintainable systems for real users.",
    icon: FiActivity,
  },
];

const systems = [
  { label: "Mobile Apps", icon: FiSmartphone },
  { label: "Admin Dashboards", icon: FiShield },
  { label: "Backend APIs", icon: FiGitBranch },
  { label: "Databases", icon: FiDatabase },
  { label: "Deployments", icon: FiCloud },
];

const technologies = [
  { label: "Flutter", icon: SiFlutter },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React", icon: SiReact },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "TypeScript", icon: SiTypescript },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020305] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-violet-500/12 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur"
            >
              <FiLayers />
              Built End-to-End
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              I build the whole product, not just the interface.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-base leading-8 text-zinc-300 sm:text-lg"
          >
            I work like a product-minded engineering partner: planning the
            architecture, shaping user flows, building the frontend and backend,
            wiring databases and payments, deploying releases, and keeping
            systems maintainable after launch.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-14 grid gap-4 lg:grid-cols-3"
        >
          {capabilities.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group rounded-[8px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.055]"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-100">
                <Icon />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200"
            >
              Systems I&apos;ve Built
            </motion.p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {systems.map(({ label, icon: Icon }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-black/35 p-4"
                >
                  <Icon className="text-lg text-emerald-200" />
                  <span className="text-sm font-semibold text-zinc-200">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200"
            >
              Technologies I Work With
            </motion.p>
            <div className="mt-5 flex flex-wrap gap-3">
              {technologies.map(({ label, icon: Icon }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-3 text-sm font-semibold text-zinc-200"
                >
                  <Icon className="text-lg text-cyan-200" />
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 transition hover:text-cyan-200"
          >
            Selected works
            <FiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
