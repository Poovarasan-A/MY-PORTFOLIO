"use client";

import { animate, motion, useInView, type Variants } from "framer-motion";
import { type ElementType, useEffect, useMemo, useRef, useState } from "react";
import {
  FiBriefcase,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMapPin,
  FiServer,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { SiAmazonaws, SiReact, SiReactquery, SiRedux } from "react-icons/si";

type ExperienceProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  points: string[];
  stack: string[];
  badges: string[];
  icon: ElementType;
  accent: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const techIcons: Record<string, ElementType> = {
  "React.js": SiReact,
  "React Query": SiReactquery,
  Redux: SiRedux,
  "AWS Lambda": SiAmazonaws,
  DynamoDB: FiDatabase,
  "REST APIs": FiServer,
};

const systemsStack = [
  "React.js",
  "React Query",
  "Redux",
  "AWS Lambda",
  "DynamoDB",
  "REST APIs",
];

const projects: ExperienceProject[] = [
  {
    id: "loftx-ai",
    title: "Loftx.ai",
    category: "Property Management Platform",
    description:
      "A modular web platform focused on real estate operations, property management workflows, unit tracking, and business analytics.",
    points: [
      "Modular dashboard architecture",
      "Property & unit management workflows",
      "API integrations & operational analytics",
      "Optimized query & state management",
    ],
    stack: ["React.js", "React Query", "Redux"],
    badges: ["Property Platform", "Production System", "Real Estate Tech"],
    icon: FiLayers,
    accent: "from-cyan-300 via-violet-300 to-emerald-300",
  },
  {
    id: "kaaspay-admin",
    title: "Kaaspay Admin Dashboard",
    category: "Financial Dashboard System",
    description:
      "An administrative dashboard engineered for managing accounts, payout workflows, transaction records, and operational monitoring.",
    points: [
      "User & account management",
      "Payout queue workflows",
      "Transaction monitoring & logs",
      "Administrative security controls",
    ],
    stack: ["React.js", "REST APIs"],
    badges: ["Fintech", "Transactions", "Admin System"],
    icon: FiTrendingUp,
    accent: "from-sky-300 via-cyan-300 to-violet-300",
  },
  {
    id: "tata-consumer",
    title: "Tata Consumer Products",
    category: "Corporate Appraisal System",
    description:
      "Internal employee appraisal and review workflow application featuring role-based submission interfaces and serverless cloud backend integrations.",
    points: [
      "Role-based submission interfaces",
      "Corporate review workflows",
      "Serverless cloud backend integration",
      "Data persistence with DynamoDB",
    ],
    stack: ["React.js", "AWS Lambda", "DynamoDB"],
    badges: ["Corporate System", "AWS Serverless", "Workflow Engine"],
    icon: FiBriefcase,
    accent: "from-violet-300 via-cyan-300 to-blue-300",
  },
];

const ProfessionalExperience = () => {
  const [activeId, setActiveId] = useState("loftx-ai");
  const sectionRef = useRef<HTMLElement | null>(null);

  const timelineItems = useMemo(
    () => [
      {
        id: "loftx-ai",
        label: "Loftx.ai",
        meta: "Property Platform",
      },
      {
        id: "kaaspay-admin",
        label: "Kaaspay",
        meta: "Fintech Portal",
      },
      {
        id: "tata-consumer",
        label: "Tata Consumer",
        meta: "Corporate System",
      },
    ],
    [],
  );

  useEffect(() => {
    const nodes = timelineItems
      .map((item) => document.getElementById(`system-${item.id}`))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id.replace("system-", ""));
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [timelineItems]);

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020305] py-24 text-white sm:pb-28 lg:pb-28"
    >
      <span id="experience" className="absolute -top-24" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[130px]" />
      <div className="absolute bottom-24 right-0 h-[28rem] w-[36rem] rounded-full bg-violet-500/14 blur-[130px]" />
      <div className="absolute bottom-0 left-[-10rem] h-[26rem] w-[32rem] rounded-full bg-emerald-400/10 blur-[120px]" />

      <FloatingTechPills />

      <div className="md:container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.12)] backdrop-blur"
          >
            <FiCpu className="text-base" />
            Production Platforms
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold leading-[0.95] tracking-normal text-white sm:text-4xl lg:text-5xl"
          >
            Platforms & Systems{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-emerald-200 bg-clip-text text-transparent">
              We&apos;ve Built
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-8 text-zinc-300 sm:text-lg"
          >
            Production web platforms, operational dashboards, and business systems engineered for reliability and real-world utility.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[240px_1fr] lg:items-start">
          <Timeline items={timelineItems} activeId={activeId} />

          <div className="space-y-6">
            <SystemsOverview />
          </div>
        </div>
      </div>
    </section>
  );
};

const Timeline = ({
  items,
  activeId,
}: {
  items: { id: string; label: string; meta: string }[];
  activeId: string;
}) => (
  <aside className="hidden lg:sticky lg:top-24 lg:block">
    <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] opacity-25" />
      <div className="relative">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
          Systems Index
        </p>
        <div className="absolute bottom-4 left-[13px] top-10 w-px bg-gradient-to-b from-cyan-300/60 via-violet-300/30 to-transparent" />
        <div className="space-y-2">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#system-${item.id}`}
                className="group relative flex gap-3 rounded-[8px] px-1 py-2 transition hover:bg-white/[0.05]"
              >
                <span
                  className={`relative z-10 mt-1 h-6 w-6 flex-none rounded-full border transition ${
                    isActive
                      ? "border-cyan-200 bg-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.7)]"
                      : "border-white/15 bg-black"
                  }`}
                >
                  <span
                    className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                      isActive
                        ? "bg-black"
                        : "bg-zinc-600 group-hover:bg-cyan-200"
                    }`}
                  />
                </span>
                <span>
                  <span
                    className={`block text-sm font-semibold transition ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[11px] leading-4 text-zinc-500">
                    {item.meta}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </aside>
);

const SystemsOverview = () => (
  <div className="space-y-6">
    {projects.map((project, index) => {
      const Icon = project.icon;

      return (
        <motion.article
          key={project.id}
          id={`system-${project.id}`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-[8px] border border-white/10 bg-zinc-950/70 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-7"
        >
          <div
            className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent}`}
          />
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 flex-none place-items-center rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-100">
                <Icon />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {project.category}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:justify-end">
              {project.stack.map((item) => {
                const TechIcon = techIcons[item] || FiCpu;
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-zinc-300"
                  >
                    <TechIcon className="text-cyan-200 text-xs" />
                    {item}
                  </span>
                );
              })}
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-zinc-300">
            {project.description}
          </p>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {project.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2.5 rounded-[6px] border border-white/5 bg-black/30 p-3 text-xs leading-5 text-zinc-300"
              >
                <FiCheckCircle className="flex-none text-emerald-300" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.article>
      );
    })}
  </div>
);



const FloatingTechPills = () => (
  <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
    {["React Query", "Redux", "AWS Lambda", "DynamoDB"].map((item, index) => (
      <motion.span
        key={item}
        animate={{ y: [0, -14, 0], opacity: [0.28, 0.7, 0.28] }}
        transition={{
          duration: 6 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.45,
        }}
        className="absolute rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.12)] backdrop-blur-xl"
        style={{
          left: `${8 + index * 22}%`,
          top: `${18 + (index % 2) * 55}%`,
        }}
      >
        {item}
      </motion.span>
    ))}
  </div>
);

export default ProfessionalExperience;
