"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiSend,
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

const contactCards = [
  {
    label: "Direct Line",
    value: "+91 9500276714",
    href: "tel:+919500276714",
    icon: FiPhoneCall,
  },
  {
    label: "Inquiries",
    value: "info@nexvulf.com",
    href: "mailto:info@nexvulf.com",
    icon: FiMail,
  },
  {
    label: "Studio Location",
    value: "Bengaluru, India • Available globally",
    href: "#contact",
    icon: FiMapPin,
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Poovarasan-A", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/poovarasan-arumugam-3b798523b",
    icon: ImLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/im_darkk_?utm_source=qr&igsh=MWlzZ3drZ3N2cmZuaw==",
    icon: GrInstagram,
  },
];

const projectTypes = [
  "Web Application",
  "Mobile App",
  "Shopify / E-Commerce",
  "Custom Software",
  "SaaS Platform",
  "Cloud / APIs",
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);
  const [selectedType, setSelectedType] = useState("Web Application");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm("service_frq8g0o", "template_wojcqsa", formRef.current, {
          publicKey: "WXHya3AI87uriC2HT",
        })
        .then(
          () => {
            setShowForm(false);
            setSuccessMsg(true);
            setTimeout(() => {
              setShowForm(true);
              setSuccessMsg(false);
            }, 4000);
            formRef.current?.reset();
            setSelectedType("Web Application");
          },
          (error) => {
            console.log("FAILED...", error?.text || error);
          },
        );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020305] py-20 text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[30rem] w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 max-w-full rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="md:container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
        >
          <div className="min-w-0">
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200 backdrop-blur sm:tracking-[0.28em]"
            >
              <FiSend />
              Initiate a Project
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="max-w-2xl text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Let&apos;s build something production-grade.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg"
            >
              Have a web platform, mobile application, custom software, e-commerce storefront,
              or SaaS product in mind? Reach out to discuss architectural direction, timelines,
              and delivery.
            </motion.p>

            <motion.div variants={container} className="mt-8 grid gap-3">
              {contactCards.map(({ label, value, href, icon: Icon }) => (
                <motion.div key={label} variants={fadeUp}>
                  <Link
                    href={href}
                    className="group flex min-w-0 items-start justify-between gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-3.5 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.055] sm:items-center sm:gap-4 sm:p-4"
                  >
                    <span className="flex min-w-0 flex-1 items-start gap-3 sm:items-center sm:gap-4">
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 sm:h-11 sm:w-11">
                        <Icon />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500 sm:tracking-[0.2em]">
                          {label}
                        </span>
                        <span className="block break-all text-sm font-semibold leading-6 text-zinc-200 sm:truncate sm:break-normal">
                          {value}
                        </span>
                      </span>
                    </span>
                    <FiArrowUpRight className="mt-1 flex-none text-zinc-500 transition group-hover:text-cyan-200 sm:mt-0" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-zinc-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
                >
                  <Icon />
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="min-w-0 rounded-[8px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-7"
          >
            <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200 sm:tracking-[0.24em]">
                  Project Inquiry
                </p>
                <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                  Tell us what you&apos;re building
                </h3>
              </div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                <FiClock />
                Prompt Response
              </div>
            </div>

            {/* Interactive Project Type Chips */}
            <div className="mb-6">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Project Domain
              </span>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                        isSelected
                          ? "border border-cyan-400 bg-cyan-400/20 text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.25)]"
                          : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {showForm && (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className={`grid gap-5 transition-opacity duration-500 ${!showForm ? "opacity-0" : "opacity-100"}`}
              >
                <input type="hidden" name="project_type" value={selectedType} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name / Company" id="name">
                    <input
                      className="w-full min-w-0 border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
                      type="text"
                      placeholder="Your name or organization"
                      id="name"
                      name="from_name"
                      required
                    />
                  </Field>
                  <Field label="Work Email" id="email">
                    <input
                      className="w-full min-w-0 border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
                      type="email"
                      placeholder="name@company.com"
                      id="email"
                      name="from_email"
                      required
                    />
                  </Field>
                </div>

                <Field label="Project Scope & Requirements" id="message">
                  <textarea
                    className="min-h-36 w-full min-w-0 resize-none border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 lg:min-h-44"
                    placeholder={`Tell us about the project goals, tech preferences, timeline, or challenges...`}
                    id="message"
                    name="message"
                    required
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-100 active:scale-95 sm:w-fit"
                >
                  Submit Inquiry
                  <FiSend />
                </button>
              </form>
            )}

            {successMsg && (
              <div className="grid min-h-56 place-items-center rounded-[8px] border border-emerald-300/20 bg-emerald-300/10 p-6 text-center sm:min-h-64 sm:p-8">
                <div>
                  <FiCheckCircle className="mx-auto mb-4 text-4xl text-emerald-200" />
                  <p className="text-xl font-semibold text-emerald-100">
                    Thank you for reaching out.
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    The NexVulf team will review your requirements and respond promptly.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Corporate Studio Footer */}
        <div className="mt-24 border-t border-white/10 pt-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20 text-base font-black tracking-wider text-cyan-200">
                  NV
                </div>
                <div>
                  <span className="text-base font-bold tracking-tight text-white">
                    NexVulf
                  </span>{" "}
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Technologies
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
                A modern technology studio building websites, mobile applications,
                custom software, e-commerce storefronts, and SaaS platforms.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                Navigation
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
                <li>
                  <a href="#services" className="transition hover:text-cyan-300">
                    Services & Capabilities
                  </a>
                </li>
                <li>
                  <a href="#projects" className="transition hover:text-cyan-300">
                    Selected Work & Case Studies
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="transition hover:text-cyan-300">
                    Client Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-cyan-300">
                    Initiate a Project
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                Capabilities
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
                <li>Full-Stack Web Applications</li>
                <li>Cross-Platform Mobile Apps</li>
                <li>Shopify & Custom Storefronts</li>
                <li>Backend Architecture & Cloud APIs</li>
                <li>Scalable SaaS Platforms</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-zinc-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} NexVulf Technologies. All rights reserved.
            </p>
            <p className="text-zinc-500">
              Engineered for high performance, security, and production reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) => (
  <label htmlFor={id} className="block">
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
      {label}
    </span>
    {children}
  </label>
);

export default Contact;
