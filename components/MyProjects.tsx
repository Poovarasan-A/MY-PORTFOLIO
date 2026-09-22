"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ElementType, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiLayers,
  FiMonitor,
  FiShoppingBag,
  FiSmartphone,
  FiX,
  FiZap,
} from "react-icons/fi";
import {
  SiFlutter,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import DoctorApp from "../public/images/doctor-appointment.png";
import BodyMech from "../public/images/Body Mechanics gym.png";
import GuestRoom from "../public/images/GuestRoom thumbnail.jpg";
import HotoOffers from "../public/images/hoto-offers.png";
import InteriorDesign from "../public/images/interiors-designer.png";
import TaskEasy from "../public/images/TaskEasy thumbnail.jpg";
import Wolfkart from "../public/images/Wolfkart thumbnail 2.jpg";
import Livixius from "../public/images/Livixius.png";
import Rapid from "../public/images/Rapid.png";
import realestate from "../public/images/real-estate.png";
import ShopifyStorefront from "../public/images/shopify-storefront.png";

type Project = {
  title: string;
  kicker: string;
  role: string;
  image: StaticImageData;
  summary: string;
  description: string;
  stack: string[];
  labels: string[];
  metrics: { value: string; label: string }[];
  systems: string[];
  accent: string;
  icon: ElementType;
  link?: string;
  liveLink?: string;
  githubLink?: string;
};

const stackIcons = [
  { label: "Flutter", icon: SiFlutter },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React.js", icon: SiReact },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "Framer Motion", icon: SiFramer },
  { label: "TypeScript", icon: SiTypescript },
];

const featuredProject: Project = {
  title: "HOTO Offers Ecosystem",
  kicker: "Hyperlocal retail ecosystem",
  role: "Multi-Surface Platform Architecture",
  image: HotoOffers,
  summary:
    "A multi-surface production ecosystem spanning customer mobile, vendor operations, admin control, public marketing website, and backend architecture.",
  description:
    "Architected and engineered across mobile, web, backend, and database layers. The system connects customer discovery, vendor promotion workflows, administrative governance, and business operations across multiple production surfaces.",
  stack: ["Flutter", "React.js", "Next.js", "Node.js", "MongoDB", "REST APIs"],
  labels: [
    "Multi-Platform",
    "Production System",
    "Live Ecosystem",
    "Mobile + Web",
  ],
  metrics: [
    { value: "4 Apps", label: "Customer, vendor, admin, web" },
    { value: "Flutter", label: "Mobile architecture" },
    { value: "Full Stack", label: "Node.js & MongoDB" },
  ],
  systems: [
    "Customer app for hyperlocal offer discovery",
    "Vendor app for real-time promotion management",
    "React admin dashboard for operations and governance",
    "Node.js backend with MongoDB data architecture",
    "Next.js official marketing website",
  ],
  accent: "from-cyan-400 via-violet-400 to-emerald-300",
  icon: FiLayers,
  link: "https://hotooffers.com",
  liveLink: "https://hotooffers.com",
};

const caseStudies: Project[] = [
  featuredProject,
  {
    title: "Shopify Custom Storefront",
    kicker: "E-commerce / Shopify",
    role: "Theme Architecture & Development",
    image: ShopifyStorefront,
    summary:
      "A tailored Shopify storefront built with bespoke Liquid sections, modular product showcases, quick-add modal, and predictive search.",
    description:
      "Developed custom Liquid theme architecture, modular sections, predictive search, quick-add modal interactions, dynamic collection filtering, and responsive product showcases for an e-commerce brand.",
    stack: [
      "Shopify Liquid",
      "HTML / CSS",
      "JavaScript",
      "Theme Sections",
      "Predictive Search",
      "Responsive UX",
    ],
    labels: [
      "E-commerce",
      "Shopify Liquid",
      "Custom Storefront",
      "Modular Sections",
    ],
    metrics: [
      { value: "Modular", label: "Liquid architecture" },
      { value: "Custom", label: "Storefront sections" },
      { value: "Mobile", label: "Optimized experience" },
    ],
    systems: [
      "Bespoke Liquid section and snippet architecture",
      "Predictive search and dynamic collection filtering",
      "Quick-add modal and streamlined cart interactions",
      "Responsive product showcase and custom legal policy templates",
    ],
    accent: "from-emerald-300 via-teal-300 to-cyan-300",
    icon: FiShoppingBag,
    liveLink: "#",
  },
  {
    title: "Doctor Appointment Platform",
    kicker: "Healthcare Web Platform",
    role: "Full-Stack Web Application",
    image: DoctorApp,
    summary:
      "A healthcare booking platform with dynamic calendar slot allocation, appointment tracking, content engine, and automated patient communication.",
    description:
      "Designed booking flows for clinics and patients with dynamic doctor availability calendars, appointment tracking, payment workflow states, multi-language informational content, and automated notifications.",
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Booking Flows",
      "Automated Alerts",
      "Admin Portal",
    ],
    labels: ["Health-tech", "Smart Booking", "Automation", "Admin Dashboard"],
    metrics: [
      { value: "Real-Time", label: "Calendar scheduling" },
      { value: "Multi-Lang", label: "Educational content" },
      { value: "Automated", label: "Patient notifications" },
    ],
    systems: [
      "Dynamic calendar and slot allocation logic",
      "Appointment lifecycle tracking for admins",
      "Booking status and payment state workflows",
      "Multi-language informational blog and video integrations",
    ],
    accent: "from-sky-400 via-teal-300 to-lime-300",
    icon: FiCalendar,
    liveLink: "https://ahamalar.netlify.app/",
  },
  {
    title: "Interior Design Website",
    kicker: "Studio Brand Showcase",
    role: "Frontend Architecture & Motion",
    image: InteriorDesign,
    summary:
      "A visual showcase website crafted for a luxury interior design studio with polished transitions and visual storytelling.",
    description:
      "Focused on brand presentation, smooth motion, immersive project galleries, responsive layouts, and an interactive consultation inquiry flow.",
    stack: [
      "React.js",
      "GSAP / Animations",
      "Tailwind CSS",
      "Responsive UX",
      "Gallery Showcase",
    ],
    labels: ["Visual UI", "Studio Brand", "Smooth Motion", "Responsive"],
    metrics: [
      { value: "Tailored", label: "Visual design" },
      { value: "Smooth", label: "Animated transitions" },
      { value: "Editorial", label: "Gallery showcase" },
    ],
    systems: [
      "Animated visual sections and polished transitions",
      "Responsive gallery-first project presentation",
      "Consultation-focused client inquiry workflow",
    ],
    accent: "from-amber-200 via-rose-300 to-violet-300",
    icon: FiMonitor,
    liveLink: "https://inhabytatelier.com/",
  },
];

const otherProjects = [
  {
    title: "Real Estate Website",
    image: realestate,
    meta: "Property showcase platform with lead generation, enquiry forms, mobile-first design, and SEO-focused pages for real estate businesses.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    liveLink: "https://millionairelandmarkrealtor.com",
    githubLink: "",
  },
  {
    title: "Task Management App",
    image: TaskEasy,
    meta: "Productivity platform for managing tasks, tracking progress, organizing workflows, and improving team collaboration.",
    tech: "Next.js, MongoDB, OAuth",
    liveLink: "https://task-easy-manage.vercel.app/",
    githubLink: "https://github.com/Poovarasan-A/Task-Easy-Nextjs-Mongodb.git",
  },
  {
    title: "Body Mechanics Gym Website",
    image: BodyMech,
    meta: "Modern fitness website featuring membership plans, trainer information, workout programs, and engaging user experience.",
    tech: "React, Material UI",
    liveLink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    githubLink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  {
    title: "Guest Booking App",
    image: GuestRoom,
    meta: "Online reservation system allowing users to browse properties, check availability, and manage bookings seamlessly.",
    tech: "MERN Stack",
    liveLink: "https://guest-room-booking-application-2yex.onrender.com/",
    githubLink:
      "https://github.com/Poovarasan-A/Guest-room-booking-application.git",
  },
  {
    title: "Livixius HMS",
    image: Livixius,
    meta: "Product showcase website designed to present hotel management software features and product capabilities.",
    tech: "HTML, CSS, GSAP",
    liveLink: "https://poovarasan-a.github.io/Livixius-web/",
    githubLink: "https://github.com/Poovarasan-A/Livixius-web.git",
  },
];

const capabilities = [
  {
    label: "Mobile + Web",
    icon: FiSmartphone,
    description:
      "Developed production-grade mobile apps and modern web platforms with scalable user experiences across multiple devices.",
  },
  {
    label: "Backend Architecture",
    icon: FiCpu,
    description:
      "Designed APIs, business workflows, authentication systems, and scalable backend infrastructures for real-world applications.",
  },
  {
    label: "Dashboards",
    icon: FiBarChart2,
    description:
      "Built enterprise admin dashboards for analytics, transactions, property management, bookings, and operational workflows.",
  },
  {
    label: "Payments",
    icon: FiZap,
    description:
      "Integrated secure payment systems, booking payments, payout workflows, refunds, and automated transaction handling.",
  },
  {
    label: "Databases",
    icon: FiDatabase,
    description:
      "Worked extensively with MongoDB and DynamoDB for scalable data modeling, real-time systems, and optimized queries.",
  },
  {
    label: "Deployment",
    icon: FiExternalLink,
    description:
      "Managed production deployments, Play Store releases, cloud hosting, performance optimization, and long-term maintenance.",
  },
];

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

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.13), transparent 42%)`;

  return (
    <section
      id="projects"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      className="relative w-full overflow-hidden bg-slate-50 py-24 text-zinc-900 transition-colors duration-300 dark:bg-[#020305] dark:text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] dark:opacity-30" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(125,92,255,0.12),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(125,92,255,0.26),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.08),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.14),transparent_68%)]" />

      <div className="md:container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-200 dark:shadow-[0_0_32px_rgba(34,211,238,0.12)]"
          >
            <FiCode className="text-base" />
            Production Case Studies
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-3xl font-bold leading-[0.95] tracking-normal text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Platforms{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-emerald-600 dark:from-cyan-200 dark:via-violet-200 dark:to-emerald-200 bg-clip-text text-transparent">
              & Systems We&apos;ve Built
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg"
          >
            High-impact applications, multi-surface platforms, custom
            storefronts, and specialized software engineered for real-world
            reliability.
          </motion.p>

          <motion.div
            variants={container}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {featuredProject.labels.map((label) => (
              <motion.span
                key={label}
                variants={fadeUp}
                className="rounded-full border border-zinc-200/90 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-300 dark:shadow-none"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[180px_1fr] lg:items-start">
          <nav className="sticky top-24 hidden rounded-[8px] border border-zinc-200/90 bg-white/80 p-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none lg:block">
            {caseStudies.map((project, index) => (
              <a
                key={project.title}
                href={`#case-${index}`}
                className="group flex items-center gap-3 rounded-[8px] px-3 py-3 text-left text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 transition group-hover:bg-cyan-500 dark:bg-zinc-600 dark:group-hover:bg-cyan-300" />
                <span>{project.title.replace(" Platform", "")}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-8">
            <FeaturedCaseStudy
              project={featuredProject}
              onOpen={() => setSelectedProject(featuredProject)}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
              className="grid gap-4 md:grid-cols-3"
            >
              {capabilities.map(({ label, icon: Icon, description }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="group rounded-[8px] border border-zinc-200/90 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.06]"
                >
                  <Icon className="mb-4 text-2xl text-cyan-600 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-200" />

                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{label}</p>

                  <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid gap-5 xl:grid-cols-3">
              {caseStudies.slice(1).map((project, index) => (
                <ProjectCard
                  key={project.title}
                  index={index + 1}
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>

        <TechStackMarquee />
        <OtherProjects />
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

const FeaturedCaseStudy = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) => {
  const Icon = project.icon;

  return (
    <motion.article
      id="case-0"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[8px] border border-zinc-200/90 bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent}`}
      />
      <div className="absolute right-0 top-0 h-72 w-72 bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10" />
      <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_0.9fr] lg:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                <Icon />
                Hero Case Study
              </span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
                {project.role}
              </span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-normal text-zinc-900 dark:text-white sm:text-5xl">
              {project.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
              {project.summary}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -4 }}
                className="rounded-[8px] border border-zinc-200/90 bg-zinc-50/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none"
              >
                <p
                  className={`bg-gradient-to-r ${project.accent} bg-clip-text text-3xl font-bold text-transparent`}
                >
                  {metric.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600 active:scale-95 dark:bg-white dark:text-black dark:shadow-none dark:hover:bg-cyan-100"
            >
              Explore architecture
              <FiArrowUpRight />
            </button>
            <ProjectLinks project={project} variant="hero" />
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-[8px] border border-zinc-200 bg-zinc-100/90 p-4 dark:border-white/10 dark:bg-[#07090d]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -0.5, 0.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 mx-auto mt-4 max-w-[420px] rounded-[8px] border border-zinc-200 bg-white/95 p-3 shadow-xl dark:border-white/10 dark:bg-black/70 dark:shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="h-56 w-full rounded-[6px] object-cover object-top"
              priority
            />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Customer App", "Vendor App", "Admin OS"].map((item) => (
                <div
                  key={item}
                  className="rounded-[6px] border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="mb-3 h-1.5 w-10 rounded-full bg-cyan-500/70 dark:bg-cyan-300/70" />
                  <p className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative z-10 mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <ArchitectureNode label="Mobile Apps" />
            <div className="h-px w-10 bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-300 dark:to-violet-300" />
            <ArchitectureNode label="Node Backend" />
            <div className="col-start-2 h-10 w-px justify-self-center bg-gradient-to-b from-violet-500 to-emerald-500 dark:from-violet-300 dark:to-emerald-300" />
            <div className="col-span-3 flex justify-center">
              <ArchitectureNode label="MongoDB + Admin Workflows" wide />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ArchitectureNode = ({
  label,
  wide = false,
}: {
  label: string;
  wide?: boolean;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className={`rounded-[8px] border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-center font-semibold text-cyan-800 shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-50 dark:shadow-none ${wide ? "w-full max-w-sm" : ""}`}
  >
    {label}
  </motion.div>
);

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) => {
  const Icon = project.icon;

  return (
    <motion.article
      id={`case-${index}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={fadeUp}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex min-h-[540px] flex-col overflow-hidden rounded-[8px] border border-zinc-200/90 bg-white/80 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none"
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-80`}
      />
      <div className="relative overflow-hidden rounded-[8px] border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-black">
        <Image
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
          <Icon />
          {project.kicker}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-2 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          {project.role}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-normal text-zinc-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.labels.slice(0, 3).map((label) => (
            <span
              key={label}
              className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-[11px] text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300"
            >
              {label}
            </span>
          ))}
        </div>

        <button
          onClick={onOpen}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100/80 px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-cyan-500/50 hover:bg-cyan-50 active:scale-95 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:shadow-none dark:hover:border-cyan-300/50 dark:hover:bg-cyan-300/10"
        >
          View case study
          <FiArrowUpRight />
        </button>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
};

const ProjectLinks = ({
  project,
  variant = "card",
}: {
  project: Project;
  variant?: "card" | "hero";
}) => {
  const linkClass =
    variant === "hero"
      ? "inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-cyan-500/40 hover:bg-cyan-50 active:scale-95 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10"
      : "inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-3.5 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition hover:border-cyan-500/40 hover:bg-cyan-50 active:scale-95 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10";

  const targetLink = project.liveLink || project.link;

  return (
    <div
      className={
        variant === "hero"
          ? "flex flex-wrap gap-3"
          : "mt-4 flex flex-wrap gap-2"
      }
    >
      {project.githubLink && (
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub
          <FiExternalLink />
        </Link>
      )}
      {targetLink && (
        <Link
          href={targetLink}
          target={targetLink.startsWith("http") ? "_blank" : undefined}
          rel={
            targetLink.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className={linkClass}
        >
          Live
          <FiArrowUpRight />
        </Link>
      )}
    </div>
  );
};

const TechStackMarquee = () => (
  <div className="mt-20 overflow-hidden rounded-[8px] border border-zinc-200/90 bg-white/80 py-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      className="flex w-max gap-3 px-5"
    >
      {[...stackIcons, ...stackIcons, ...stackIcons].map(
        ({ label, icon: Icon }, index) => (
          <div
            key={`${label}-${index}`}
            className="flex min-w-max items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-200 dark:shadow-none"
          >
            <Icon className="text-lg text-cyan-600 dark:text-cyan-200" />
            {label}
          </div>
        ),
      )}
    </motion.div>
  </div>
);

const OtherProjects = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={container}
    className="mt-20"
  >
    <motion.div
      variants={fadeUp}
      className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">
          Additional Production Builds
        </p>
        <h2 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
          Specialized Web & Mobile Solutions
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        Focused business platforms, booking engines, responsive web experiences,
        and internal tools built with high performance and production
        reliability.
      </p>
    </motion.div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {otherProjects.map((project) => (
        <motion.article
          key={project.title}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-[8px] border border-zinc-200/90 bg-white/80 p-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none"
        >
          <div className="overflow-hidden rounded-[6px]">
            <Image
              src={project.image}
              alt={project.title}
              className="h-36 w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-2 pt-4">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">{project.title}</h3>
            <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              {project.meta}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.split(",").map((t) => (
                <span
                  key={t.trim()}
                  className="inline-flex items-center gap-1 rounded-full border border-cyan-500/25 bg-cyan-500/[0.08] px-2.5 py-1 text-[10px] font-semibold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/[0.07] dark:text-cyan-200"
                >
                  <FiCode className="text-[9px]" />
                  {t.trim()}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-zinc-100/80 px-3 py-2 text-[11px] font-semibold text-zinc-800 transition hover:border-cyan-500/40 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10"
                >
                  GitHub
                  <FiExternalLink />
                </Link>
              )}
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-zinc-100/80 px-3 py-2 text-[11px] font-semibold text-zinc-800 transition hover:border-cyan-500/40 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10"
              >
                Live
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </motion.div>
);

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xl dark:bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.28 }}
          onClick={(event) => event.stopPropagation()}
          className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[8px] border border-zinc-200 bg-white p-5 text-zinc-900 shadow-2xl dark:border-white/10 dark:bg-[#07090d] dark:text-white sm:p-7"
        >
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 z-10 rounded-full border border-zinc-200 bg-zinc-100 p-2 text-zinc-700 transition hover:bg-zinc-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
          >
            <FiX />
          </button>

          <div className="grid gap-7 lg:grid-cols-[0.9fr_1fr]">
            <Image
              src={project.image}
              alt={project.title}
              className="h-full max-h-[520px] rounded-[8px] object-cover object-top"
            />
            <div className="pr-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">
                {project.kicker}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[8px] border border-zinc-200 bg-zinc-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
                  >
                    <p
                      className={`bg-gradient-to-r ${project.accent} bg-clip-text text-2xl font-bold text-transparent`}
                    >
                      {metric.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                  Production Scope
                </h3>
                <div className="mt-4 space-y-3">
                  {project.systems.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300"
                    >
                      <FiCheckCircle className="mt-1 flex-none text-emerald-500 dark:text-emerald-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <ProjectLinks project={project} variant="hero" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MyProjects;
