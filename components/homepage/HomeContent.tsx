"use client";

import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import SkillList from "../SkillList";
import profile from "../../public/images/Techguy2.png";
import TextWriting from "../TextWriting";
import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="absolute z-10 lg:flex w-full h-full justify-around pt-[6rem] lg:pt-0 ">
      <div className="lg:w-[50%] w-full lg:h-full h-[30%] flex flex-col items-start px-[2rem] lg:pl-[10rem] justify-center lg:pt-[6rem]">
        <h1 className="lg:text-4xl text-xl font-bold tracking-wide lg:pb-5 pb-1 ">
          Hi, I&apos;m <span className="text-violet-500">Poovarasan</span>
        </h1>
        <div className="lg:flex flex lg:text-4xl w-full text-xl font-semibold">
          <TextWriting />
          <TypeAnimation
            sequence={["MERN STACK DEVELOPER", 3000, "NEXT JS DEVELOPER", 3000]}
            speed={50}
            className="lg:text-4xl text-xl font-extrabold text-violet-500"
            repeat={Infinity}
          />
          {/* <h2></h2> */}
        </div>
        <p className="lg:text-lg text-sm w-full text-left font-semibold lg:py-5 pb-3 pt-1 tracking-wide leading-6 lg:leading-9">
          I develop scalable, user-interactive web applications
          <br className="lg:flex hidden" />& captivating animated websites
        </p>
        <Link
          href="/images/Poovarasan Resume.pdf"
          className="bg-violet-600 py-2 px-5 rounded-3xl flex items-center gap-2 font-semibold hover:bg-violet-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <FaCloudDownloadAlt className="text-xl animate-bounce" />
        </Link>
      </div>
      <div className="lg:w-[50%] w-full lg:h-full h-[60%] relative flex flex-col items-center justify-center opacity-[90%] lg:pt-[6rem]">
        <Image
          src={profile}
          priority
          className="lg:w-[22rem] w-[50%] pb-6 z-20"
          alt="Profile"
        />
        <div className="absolute z-10">
          <SkillList />
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
