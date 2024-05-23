"use client";

import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import Image from "next/image";
import circebg from "../public/images/bg circle.png";
import sign from "../public/images/sign.png";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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
            if (formRef.current) {
              formRef.current.reset();
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col relative items-center justify-center text-white bg-black overflow-hidden">
      <div className="absolute top-0 left-0 opacity-30  w-full h-full bg-cover bg-center z-0">
        <Image
          src={circebg}
          alt="contact"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <div>
        {/* <h1 className="text-3xl font-bold tracking-wider">
          Let&apos;s <span className="text-violet-500 text-[2rem]">work </span>
          together
        </h1> */}
      </div>
      <div className="w-[100%] h-full lg:flex justify-center items-center z-50">
        <div className="lg:w-[50%] w-full lg:h-[80%] flex flex-col justify-center items-start lg:pl-[5rem] px-[2rem]">
          <h2 className="lg:text-[4rem] text-[3rem] text-bolder">
            Let&apos;s talk
          </h2>
          <p className="text-xl font-semibold lg:pb-10 pb-5">
            If you like my projects, just say hi !
          </p>
          <div className="flex items-center gap-4 lg:pt-20">
            <FiPhoneCall className="text-violet-500 text-xl" />
            <p className="text-md py-5">9500276714</p>
          </div>
          <div className="flex items-center gap-4">
            <LuMail className="text-violet-500 text-xl" />
            <p className="text-md">poovarasanarumugam1030@gmail.com</p>
          </div>
        </div>
        {showForm && (
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={`lg:w-[50%] w-full lg:h-[80%] flex flex-col lg:pr-[5rem] px-[2rem] pt-[5rem] justify-center gap-5 transition-opacity duration-500 ${
              !showForm ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="lg:flex gap-8">
              <div className="flex flex-col w-full gap-4">
                <label htmlFor="name">Name</label>
                <input
                  className="py-3 bg-inherit border-white outline-none border-b-2"
                  type="text"
                  placeholder="Your name"
                  id="name"
                  name="from_name"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-4 pt-5 lg:pt-0">
                <label htmlFor="email">Email</label>
                <input
                  className="py-3 bg-inherit border-white outline-none border-b-2"
                  type="email"
                  placeholder="you@mail.com"
                  id="email"
                  name="from_email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-5">
              <label htmlFor="message">Message</label>
              <textarea
                className=" bg-inherit border-white outline-none border-b-2 h-10"
                placeholder="say something..."
                id="message"
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-500 flex items-center justify-around w-[7rem] mt-5 px-4 py-2 rounded-lg hover:bg-violet-800"
            >
              Send
              <IoSend className="text-md" />
            </button>
          </form>
        )}
        {successMsg && (
          <div className="lg:w-[50%] w-full lg:h-[80%] flex flex-col lg:pr-[5rem] px-[2rem] pt-[5rem] justify-center gap-5">
            <p className="text-center text-xl font-semibold text-violet-500">
              Thank you for showing your intrest !<br />
              I&apos;ll get back to you soon.
            </p>
          </div>
        )}
      </div>
      <div className="h-[20%] w-full flex lg:flex-row flex-col items-center justify-around">
        <div className="flex gap-10 text-violet-500 lg:py-0 py-5">
          <Link
            href="https://github.com/Poovarasan-A"
            className="border-2 border-dotted border-white rounded-full p-3 animate-spin-slow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl animate-spin-slow-reverse" />
          </Link>
          <Link
            href="https://www.instagram.com/im_darkk_?utm_source=qr&igsh=MWlzZ3drZ3N2cmZuaw=="
            className="border-2 border-dotted border-white rounded-full p-3 animate-spin-slow "
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className="text-2xl animate-spin-slow-reverse" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/poovarasan-arumugam-3b798523b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="border-2 border-dotted border-white rounded-full p-3 animate-spin-slow "
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin className="text-2xl animate-spin-slow-reverse" />
          </Link>
        </div>
        <div className="flex items-center lg:pb-0 pb-5">
          <p>designed by &nbsp;</p>
          <Image
            src={sign}
            alt="sign"
            className="invert w-[8rem]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
