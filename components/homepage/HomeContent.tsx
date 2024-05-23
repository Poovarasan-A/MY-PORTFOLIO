"use client";

import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import SkillList from "../SkillList";
import profile from "../../public/images/Techguy2.png";

const HomeContent = () => {
  return (
    <div className="absolute z-10 lg:flex w-full lg:h-full justify-around">
      <div className="lg:w-[50%] flex flex-col items-start px-[2rem] lg:pl-[10rem] justify-center lg:pt-[6rem]">
        <h1 className="lg:text-4xl text-xl font-bold tracking-wide lg:pb-5 pb-1 ">
          Hi, I&apos;m <span className="text-violet-500">Poovarasan</span>
        </h1>
        <div className="lg:flex flex lg:text-4xl w-full text-2xl font-semibold">
          <TypeAnimation
            sequence={["MERN STACK", 3000, "NEXT JS", 3000]}
            speed={50}
            className="lg:text-4xl text-2xl font-extrabold text-violet-500"
            repeat={Infinity}
          />
          <h2>DEVELOPER</h2>
        </div>
        <p className="lg:text-lg text-sm w-full text-left font-semibold lg:py-5 pb-3 pt-1 tracking-wide leading-6 lg:leading-9">
          I develop scalable, user-interactive web applications
          <br className="lg:flex hidden" />& captivating animated websites
        </p>
        <button
          className="bg-violet-600 py-2 px-5 rounded-3xl flex items-center gap-2 font-semibold hover:bg-violet-800"
          type="button"
        >
          Resume
          <FaCloudDownloadAlt className="text-xl animate-bounce" />
        </button>
      </div>
      <div className="lg:w-[50%] h-full relative flex flex-col items-center justify-center opacity-[90%] pt-[6rem]">
        <Image
          src={profile}
          priority
          className="lg:w-[22rem] w-[15rem] pb-6"
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
