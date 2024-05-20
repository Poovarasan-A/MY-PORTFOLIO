"use client";

import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import SkillList from "../SkillList";
import profile from "../../public/images/Techguy2.png";

const HomeContent = () => {
  return (
    <div className="absolute z-10 flex w-full h-full justify-around">
      <div className="w-[50%] flex flex-col items-start pl-[10rem] justify-center pt-[6rem]">
        <h1 className="text-4xl font-bold tracking-wide pb-5">
          Hi, I&apos;m <span className="text-violet-500">Poovarasan</span>
        </h1>
        <div className="flex text-4xl font-semibold">
          <TypeAnimation
            sequence={["MERN STACK", 3000, "NEXT JS", 3000]}
            speed={50}
            className="text-4xl font-extrabold text-violet-500"
            repeat={Infinity}
          />
          <h2>DEVELOPER</h2>
        </div>
        <p className="text-lg font-semibold py-5 tracking-wide leading-9">
          I develop scalable, user-interactive web applications <br />&
          captivating animated websites
        </p>
        <button
          className="bg-violet-600 py-2 px-5 rounded-3xl flex items-center gap-2 font-semibold hover:bg-violet-800"
          type="button"
        >
          Resume
          <FaCloudDownloadAlt className="text-xl animate-bounce" />
        </button>
      </div>
      <div className="w-[50%] h-full relative flex flex-col items-center justify-center opacity-[90%] pt-[6rem]">
        <Image src={profile} className="w-[22rem] pb-6" alt="Profile" />
        <div className="absolute z-10">
          <SkillList />
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
