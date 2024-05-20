"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

// images
import BodyMech from "../public/images/Body Mechanics gym.png";
import Continental from "../public/images/conti.png";
import Brownstone from "../public/images/Brownstone.png";
import weather from "../public/images/weather.png";
import qrgen from "../public/images/qrgen.png";
import advisor from "../public/images/Advisor.png";
import bmical from "../public/images/Bmical.png";
import LoginSign from "../public/images/Login-signup.png";
import feedback from "../public/images/Feedback.png";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const MyProjects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div className="h-[600vh] relative bg-black z-50" ref={ref}>
      <div className=" flex flex-col sticky h-screen top-0 pt-5 ">
        <BackgroundBeams />
        <h1 className="text-white text-3xl font-bold text-center">
          My <span className="text-violet-500">Projects</span>
        </h1>
        <div className="sticky top-0 flex h-screen gap-4 items-center  overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-20 ml-20 items-center scroll-smooth"
          >
            {/* project 1 */}
            <div
              className={`h-[32rem] w-[42rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
            >
              <div className=" w-full">
                <Image src={BodyMech} alt="" sizes="100%" />
              </div>
            </div>
            {/* project 2 */}
            <div
              className={`h-[32rem] w-[42rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
            >
              <div className=" w-full">
                <Image src={Continental} alt="" sizes="100%" />
              </div>
            </div>
            {/* project 3 */}
            <div
              className={`h-[32rem] w-[42rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
            >
              <div className=" w-full">
                <Image src={Brownstone} alt="" sizes="100%" />
              </div>
            </div>
            {/* project 4 */}
            <div
              className={`h-[32rem] w-[42rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
            >
              <div className=" w-full">
                <Image src={BodyMech} alt="" sizes="100%" />
              </div>
            </div>
            {/* project 5 */}

            <div className="grid grid-cols-3 w-[85vw] gap-14">
              <div
                className={`h-[17rem] w-[25rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
              >
                <div className=" w-full">
                  <Image src={weather} alt="" sizes="100%" />
                </div>
              </div>
              <div
                className={`h-[17rem] w-[25rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
              >
                <div className=" w-full">
                  <Image src={bmical} alt="" sizes="100%" />
                </div>
              </div>
              <div
                className={`h-[17rem] w-[25rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
              >
                <div className=" w-full">
                  <Image src={qrgen} alt="" sizes="100%" />
                </div>
              </div>
              <div
                className={`h-[17rem] w-[25rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
              >
                <div className=" w-full">
                  <Image src={LoginSign} alt="" sizes="100%" />
                </div>
              </div>
              <div
                className={`h-[17rem] w-[25rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
              >
                <div className=" w-full">
                  <Image src={feedback} alt="" sizes="100%" />
                </div>
              </div>
              <div
                className={`h-[17rem] w-[25rem] border-2 rounded-lg border-white overflow-hidden flex justify-center `}
              >
                <div className=" w-full">
                  <Image src={advisor} alt="" sizes="100%" />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <p className="text-white text-center">Let&apos;s Collaborate</p>
              <MdKeyboardArrowDown className="text-gray-400 text-2xl animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
