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

const experienceStack = [
  "React.js",
  "React Query",
  "Redux",
  "AWS Lambda",
  "DynamoDB",
  "REST APIs",
];

const companyDetails = {
  name: "Xlorit Innovations Pvt Ltd",
  role: "Software Engineer",
  duration: "~2 Years Experience",
  type: "Product Engineering / SaaS Delivery",
  location: "Coimbatore, Tamilnadu",
  team: "Frontend, dashboards, APIs, serverless workflows",
  domain:
    "Built and maintained production systems across SaaS, fintech, real estate operations, analytics, and enterprise workflow products.",
  highlights: [
    "Owned production-facing frontend modules and dashboard workflows",
    "Collaborated on API integrations, data flows, and release-ready UI systems",
    "Worked with enterprise clients and business-critical operational platforms",
  ],
};

const metrics = [
  { value: 2, suffix: "+", label: "Years Industry Experience" },
  { value: 10, suffix: "+", label: "Production Projects" },
  { value: 3, suffix: "", label: "Full Stack Development" },
  { value: 4, suffix: "", label: "Mobile + Web + Backend" },
];

const projects: ExperienceProject[] = [
  {
    id: "loftx-ai",
    title: "Loftx.ai",
    category: "Enterprise Property Management SaaS",
    description:
      "Worked on a large-scale property management platform focused on real estate operations, analytics, financial workflows, and business management systems.",
    points: [
      "Developed scalable frontend modules",
      "Built reusable dashboard systems",
      "Integrated APIs and business workflows",
      "Optimized frontend performance",
      "Worked with React Query and Redux",
      "Implemented production-ready UI systems",
    ],
    stack: ["React.js", "React Query", "Redux"],
    badges: ["Enterprise SaaS", "Production System", "Real Estate Tech"],
    icon: FiLayers,
    accent: "from-cyan-300 via-violet-300 to-emerald-300",
  },
  {
    id: "kaaspay-admin",
    title: "Kaaspay Admin Dashboard",
    category: "Financial Dashboard System",
    description:
      "Developed admin dashboard modules for managing users, payouts, transactions, and operational workflows.",
    points: [
      "User management",
      "Payout workflows",
      "Transaction monitoring",
      "Financial analytics",
      "Admin controls",
    ],
    stack: ["React.js", "REST APIs"],
    badges: ["Fintech", "Transactions", "Admin System"],
    icon: FiTrendingUp,
    accent: "from-sky-300 via-cyan-300 to-violet-300",
  },
  {
    id: "tata-consumer",
    title: "Tata Consumer Products",
    category: "Enterprise Appraisal Management System",
    description:
      "Contributed to an enterprise appraisal and workflow management system for Tata Consumer Products.",
    points: [
      "Frontend module development",
      "API integrations",
      "Enterprise workflow UI",
      "Scalable dashboard systems",
    ],
    stack: ["React.js", "AWS Lambda", "DynamoDB"],
    badges: ["Enterprise", "AWS", "Corporate System"],
    icon: FiBriefcase,
    accent: "from-violet-300 via-cyan-300 to-blue-300",
  },
];

const ProfessionalExperience = () => {
  const [activeId, setActiveId] = useState("overview");
  const sectionRef = useRef<HTMLElement | null>(null);

  const timelineItems = useMemo(
    () => [
      {
        id: "overview",
        label: "2024 - 2026",
        meta: "Software Engineer",
      },
    ],
    [],
  );

  useEffect(() => {
    const nodes = timelineItems
      .map((item) => document.getElementById(`experience-${item.id}`))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id.replace("experience-", ""));
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [timelineItems]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020305] py-24 text-white sm:pb-28 lg:pb-28"
    >
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
            <FiBriefcase className="text-base" />
            Industry Experience
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-balance text-3xl font-bold leading-[0.95] tracking-normal text-white sm:text-4xl lg:text-5xl"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-emerald-200 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-8 text-zinc-300 sm:text-lg"
          >
            Building scalable SaaS platforms, enterprise dashboards, and
            production-grade systems for real-world businesses.
          </motion.p>
        </motion.div>

        {/* <MetricsStrip /> */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
          <Timeline items={timelineItems} activeId={activeId} />

          <div className="space-y-6">
            <ExperienceOverview />
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
          Experience Map
        </p>
        <div className="absolute bottom-4 left-[13px] top-10 w-px bg-gradient-to-b from-cyan-300/60 via-violet-300/30 to-transparent" />
        <div className="space-y-2">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#experience-${item.id}`}
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

const ExperienceOverview = () => (
  <motion.article
    id="experience-overview"
    initial={{ opacity: 0, y: 34, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.22 }}
    transition={{ duration: 0.65, ease: "easeOut" }}
    className="relative overflow-hidden rounded-[8px] border border-white/10 bg-zinc-950/70 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-7"
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300" />
    <div className="absolute right-0 top-0 h-72 w-72 bg-cyan-400/10 blur-3xl" />
    <div className="grid gap-8 lg:grid-cols-1 lg:items-start">
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            <FiShield />
            {companyDetails.name}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">
            {companyDetails.duration}
          </span>
        </div>

        <h3 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">
          {companyDetails.role}
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
          Worked on multiple production-grade enterprise applications, SaaS
          dashboards, analytics systems, financial platforms, and workflow
          management systems.
        </p>

        <CompanyDetailsPanel />

        <div className="mt-7 flex flex-wrap gap-3">
          {experienceStack.map((item) => {
            const Icon = techIcons[item] || FiCpu;

            return (
              <motion.span
                key={item}
                whileHover={{ y: -3, scale: 1.03 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <Icon className="text-cyan-200" />
                {item}
              </motion.span>
            );
          })}
        </div>
      </div>
      {/* <CompanyProjects /> */}
    </div>
  </motion.article>
);

const CompanyDetailsPanel = () => {
  const facts = [
    { label: "Company", value: companyDetails.name, icon: FiBriefcase },
    { label: "Location", value: companyDetails.location, icon: FiMapPin },
    { label: "Engagement", value: companyDetails.type, icon: FiGlobe },
    { label: "Team Scope", value: companyDetails.team, icon: FiUsers },
  ];

  return (
    <div className="mt-7 rounded-[8px] border border-white/10 bg-black/30 p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {facts.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
          >
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <Icon />
              {label}
            </div>
            <p className="text-sm font-semibold leading-6 text-zinc-200">
              {value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {companyDetails.domain}
      </p>

      <div className="mt-4 grid gap-3">
        {companyDetails.highlights.map((item) => (
          <div
            key={item}
            className="flex gap-3 text-sm leading-6 text-zinc-300"
          >
            <FiCheckCircle className="mt-1 flex-none text-emerald-300" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompanyProjects = () => (
  <div className="mt-7">
    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
          Production Projects
        </p>
        <h4 className="mt-2 text-xl font-bold text-white">
          Key systems delivered at {companyDetails.name}
        </h4>
      </div>
      <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400">
        {projects.length} enterprise builds
      </span>
    </div>

    <div className="grid gap-3">
      {projects.map((project, index) => {
        const Icon = project.icon;

        return (
          <motion.div
            key={project.id}
            variants={fadeUp}
            whileHover={{ x: 4 }}
            className="group relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.055]"
          >
            <div
              className={`absolute inset-y-0 left-0 w-px bg-gradient-to-b ${project.accent}`}
            />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-4">
                <div className="grid h-11 w-11 flex-none place-items-center rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <Icon />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h5 className="text-base font-bold text-white">
                      {project.title}
                    </h5>
                    <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {project.category}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.points.slice(0, 3).map((point) => (
                      <span
                        key={point}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[11px] text-zinc-300"
                      >
                        <FiCheckCircle className="text-emerald-300" />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-wrap gap-2 lg:max-w-[240px] lg:justify-end">
                {project.stack.map((item) => {
                  const TechIcon = techIcons[item] || FiCpu;

                  return (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3 py-1.5 text-[11px] font-semibold text-cyan-100"
                    >
                      <TechIcon />
                      {item}
                    </motion.span>
                  );
                })}
              </div> */}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const MetricsStrip = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    variants={container}
    className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
  >
    {metrics.map((metric) => (
      <motion.div
        key={metric.label}
        variants={fadeUp}
        whileHover={{ y: -5 }}
        className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300/70 via-violet-300/50 to-transparent" />
        <p className="bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text text-3xl font-bold text-transparent">
          <AnimatedCounter value={metric.value} suffix={metric.suffix} />
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-400">
          {metric.label}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
};

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

const ProductionSystemVisual = () => (
  <div className="relative min-h-[320px] overflow-hidden rounded-[8px] border border-white/10 bg-black/45 p-4">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] opacity-35" />
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 rounded-[8px] border border-white/10 bg-zinc-950/80 p-4 shadow-2xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="h-2 w-28 rounded-full bg-cyan-300/80" />
          <div className="mt-2 h-2 w-16 rounded-full bg-white/15" />
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-[8px] border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
          <FiZap />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {["SaaS", "Finance", "Workflow"].map((item, index) => (
          <div
            key={item}
            className="rounded-[8px] border border-white/10 bg-white/[0.04] p-3"
          >
            <div
              className={`mb-8 h-14 rounded-[6px] ${
                index === 0
                  ? "bg-cyan-300/15"
                  : index === 1
                    ? "bg-violet-300/15"
                    : "bg-emerald-300/15"
              }`}
            />
            <p className="text-xs font-semibold text-zinc-200">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[11px] font-semibold text-zinc-300">
        <VisualNode label="Frontend" />
        <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-violet-300" />
        <VisualNode label="APIs" />
        <span className="col-start-2 h-8 w-px justify-self-center bg-gradient-to-b from-violet-300 to-emerald-300" />
        <div className="col-span-3 flex justify-center">
          <VisualNode label="Serverless Data Layer" wide />
        </div>
      </div>
    </motion.div>
  </div>
);

const FintechPreview = ({ bars }: { bars: string[] }) => (
  <div className="space-y-3">
    {[
      "Payout queue",
      "Transaction risk",
      "User verification",
      "Settlement",
    ].map((item, index) => (
      <div
        key={item}
        className="rounded-[6px] border border-white/10 bg-white/[0.04] p-3"
      >
        <div className="mb-2 flex items-center justify-between text-[10px] text-zinc-400">
          <span>{item}</span>
          <span className="text-cyan-200">{bars[index]}</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-300"
            style={{ width: bars[index] }}
          />
        </div>
      </div>
    ))}
  </div>
);

const MobilePreview = () => (
  <div className="mx-auto grid max-w-sm grid-cols-[0.72fr_1fr] gap-3">
    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-2">
      <div className="h-48 rounded-[14px] bg-gradient-to-b from-cyan-300/20 via-violet-300/10 to-black p-3">
        <div className="h-2 w-12 rounded-full bg-white/30" />
        <div className="mt-10 space-y-2">
          <div className="h-2 rounded-full bg-cyan-200/70" />
          <div className="h-2 w-2/3 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      {["Admin", "Analytics", "Data sync", "Responsive"].map((item) => (
        <div
          key={item}
          className="rounded-[6px] border border-white/10 bg-white/[0.04] p-3 text-[11px] font-semibold text-zinc-300"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const EnterprisePreview = () => (
  <div className="grid gap-3">
    <div className="grid grid-cols-4 gap-2">
      {["HR", "Review", "Score", "Approval"].map((item) => (
        <div
          key={item}
          className="rounded-[6px] border border-white/10 bg-white/[0.04] p-2 text-center text-[10px] text-zinc-300"
        >
          {item}
        </div>
      ))}
    </div>
    <div className="rounded-[6px] border border-white/10 bg-white/[0.04] p-3">
      {["Manager review", "Appraisal workflow", "Corporate reporting"].map(
        (item) => (
          <div key={item} className="mb-2 flex items-center gap-2 last:mb-0">
            <FiCheckCircle className="text-emerald-300" />
            <span className="text-[11px] text-zinc-300">{item}</span>
          </div>
        ),
      )}
    </div>
  </div>
);

const MonitoringPreview = ({ bars }: { bars: string[] }) => (
  <div className="grid gap-3">
    <div className="grid grid-cols-3 gap-2">
      {["Open", "Resolved", "SLA"].map((item, index) => (
        <div
          key={item}
          className="rounded-[6px] border border-white/10 bg-white/[0.04] p-3"
        >
          <p className="text-lg font-bold text-white">
            {index === 0 ? "128" : index === 1 ? "94%" : "99"}
          </p>
          <p className="text-[10px] text-zinc-400">{item}</p>
        </div>
      ))}
    </div>
    <FintechPreview bars={bars} />
  </div>
);

const VisualNode = ({
  label,
  wide = false,
}: {
  label: string;
  wide?: boolean;
}) => (
  <div
    className={`rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-center text-cyan-50 ${wide ? "w-full max-w-xs" : ""}`}
  >
    {label}
  </div>
);

export default ProfessionalExperience;
