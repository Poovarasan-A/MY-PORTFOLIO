import { Input } from "postcss";
import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import Image from "next/image";
import circebg from "../public/images/bg circle.png";
import sign from "../public/images/sign.png";

const Contact = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative items-center justify-center text-white bg-black">
      <div className="absolute top-0 left-0 opacity-30  w-full h-full bg-cover bg-center z-0">
        <Image
          src={circebg}
          alt="contact"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        {/* <h1 className="text-3xl font-bold tracking-wider">
          Let&apos;s <span className="text-violet-500 text-[2rem]">work </span>
          together
        </h1> */}
      </div>
      <div className="w-[100%] h-full flex justify-center items-center z-50">
        <div className="w-[50%] h-[80%] flex flex-col justify-center items-start pl-[5rem] ">
          <h2 className="text-[4rem] text-bolder">Let&apos;s talk</h2>
          <p className="text-xl font-semibold pb-10">
            If you like my projects, just say hi !
          </p>
          <div className="flex items-center gap-4 pt-20">
            <FiPhoneCall className="text-violet-500 text-xl" />
            <p className="text-md py-5">9500276714</p>
          </div>
          <div className="flex items-center gap-4">
            <LuMail className="text-violet-500 text-xl" />
            <p className="text-md">poovarasanarumugam1030@gmail.com</p>
          </div>
        </div>
        <form className="w-[50%] h-[80%] flex flex-col pr-[5rem] justify-center gap-5">
          <div className="flex gap-8">
            <div className="flex flex-col w-full gap-4">
              <label htmlFor="name">Name</label>
              <input
                className="py-3 bg-inherit border-white outline-none border-b-2"
                type="text"
                placeholder="Your name"
                id="name"
              />
            </div>
            <div className="flex flex-col w-full gap-4">
              <label htmlFor="email">Email</label>
              <input
                className="py-3 bg-inherit border-white outline-none border-b-2"
                type="email"
                placeholder="you@mail.com"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-5">
            <label htmlFor="message">Message</label>
            <textarea
              className=" bg-inherit border-white outline-none border-b-2 h-10"
              placeholder="say something..."
              id="message"
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
      </div>
      <div className="h-[20%] w-full flex items-center justify-around">
        <div className="flex items-center">
          <p>designed by &nbsp;</p>
          <Image src={sign} alt="sign" className="invert w-[8rem]" />
        </div>
        <div className="flex gap-10 text-violet-500">
          <div className="border-2 border-dotted border-white rounded-full p-3 animate-spin-slow">
            <FaGithub className="text-2xl animate-spin-slow-reverse" />
          </div>
          <div className="border-2 border-dotted border-white rounded-full p-3 animate-spin-slow ">
            <GrInstagram className="text-2xl animate-spin-slow-reverse" />
          </div>
          <div className="border-2 border-dotted border-white rounded-full p-3 animate-spin-slow ">
            <ImLinkedin className="text-2xl animate-spin-slow-reverse" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
