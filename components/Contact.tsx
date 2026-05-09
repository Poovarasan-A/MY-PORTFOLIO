"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
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

import sign from "../public/images/sign.png";

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
    label: "Phone",
    value: "9500276714",
    href: "tel:+919500276714",
    icon: FiPhoneCall,
  },
  {
    label: "Email",
    value: "poovarasanarumugam1030@gmail.com",
    href: "mailto:poovarasanarumugam1030@gmail.com",
    icon: FiMail,
  },
  {
    label: "Location",
    value: "India, available remotely",
    href: "#contact",
    icon: FiMapPin,
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Poovarasan-A", icon: FaGithub },
  {
    label: "Instagram",
    href: "https://www.instagram.com/im_darkk_?utm_source=qr&igsh=MWlzZ3drZ3N2cmZuaw==",
    icon: GrInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/poovarasan-arumugam-3b798523b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: ImLinkedin,
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);

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
            }, 3000);
            formRef.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020305] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-500/12 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur"
            >
              <FiSend />
              Start a Build
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Let&apos;s build something production-grade.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg"
            >
              Have a SaaS product, mobile app, dashboard, business system, or
              automation workflow in mind? I can help shape it, build it, and
              ship it.
            </motion.p>

            <motion.div variants={container} className="mt-6 grid gap-3">
              {contactCards.map(({ label, value, href, icon: Icon }) => (
                <motion.div key={label} variants={fadeUp}>
                  <Link
                    href={href}
                    className="group flex items-center justify-between gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.055]"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                        <Icon />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-zinc-200">
                          {value}
                        </span>
                      </span>
                    </span>
                    <FiArrowUpRight className="flex-none text-zinc-500 transition group-hover:text-cyan-200" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
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
            className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_35px_120px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-6"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Project Inquiry
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Tell me what you&apos;re building
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-100">
                <FiClock />
                Fast response
              </div>
            </div>

            {showForm && (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className={`grid gap-5 transition-opacity duration-500 ${!showForm ? "opacity-0" : "opacity-100"}`}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" id="name">
                    <input
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
                      type="text"
                      placeholder="Your name"
                      id="name"
                      name="from_name"
                      required
                    />
                  </Field>
                  <Field label="Email" id="email">
                    <input
                      className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
                      type="email"
                      placeholder="you@mail.com"
                      id="email"
                      name="from_email"
                      required
                    />
                  </Field>
                </div>

                <Field label="Message" id="message">
                  <textarea
                    className="min-h-32 lg:min-h-52 w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
                    placeholder="Tell me about the product, timeline, stack, or problem..."
                    id="message"
                    name="message"
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 active:scale-95"
                >
                  Send message
                  <FiSend />
                </button>
              </form>
            )}

            {successMsg && (
              <div className="grid min-h-64 place-items-center rounded-[8px] border border-emerald-300/20 bg-emerald-300/10 p-8 text-center">
                <div>
                  <FiCheckCircle className="mx-auto mb-4 text-4xl text-emerald-200" />
                  <p className="text-xl font-semibold text-emerald-100">
                    Thank you for reaching out.
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
          <div className="flex items-center">
            <span>Designed and built by&nbsp;</span>
            <Image
              src={sign}
              alt="Poovarasan signature"
              className="w-24 invert opacity-80"
              loading="lazy"
            />
          </div>
          <p>Full Stack Developer | Mobile + Web + Backend + Infrastructure</p>
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
