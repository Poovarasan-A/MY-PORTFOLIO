"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

// images

import { projectsList } from "@/app/data";

const MyProjects = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-84%" : "-70%"]
  );

  return (
    <div className="h-[700vh] relative bg-black z-50" ref={ref}>
      <div className=" flex flex-col sticky h-[90vh] lg:h-screen top-0 pt-5 ">
        <h1 className="text-white text-3xl font-bold text-center lg:mt-2 mt-14">
          My <span className="text-violet-500">Projects</span>
        </h1>
        <div className="sticky top-0 flex h-[90vh] lg:h-screen gap-4 items-center scroll-smooth overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-20 lg:ml-20 pl-[2rem] items-center scroll-smooth"
          >
            {/*Big Projects */}
            {projectsList.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className="h-[36rem] lg:w-[42rem] w-[23rem] border-[1px] rounded-2xl lg:p-5 p-2 border-zinc-400 overflow-hidden flex flex-col "
              >
                <div className=" w-full ">
                  <Image
                    src={project.image}
                    alt="Projects"
                    sizes="100%"
                    className="rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="px-2">
                  <div className="flex pt-3 w-full gap-2">{project.icons}</div>
                  <h2 className="font-bold lg:text-xl text-md text-white py-3">
                    {project.title}
                  </h2>
                  <p className="text-white text-justify">
                    {project.description}
                  </p>
                  <div className="text-white flex gap-5 pt-4">
                    <Link
                      href={project.gitlink}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-violet-500 py-2 px-4 rounded-3xl">
                        View code
                      </button>
                    </Link>
                    <Link
                      href={project.weblink}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="border-violet-500 border-2 py-2 px-4 rounded-3xl">
                        Live demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Mini Projects */}

            <div className="grid grid-cols-3 gap-4 lg:w-[82vw] w-[300vw]">
              {projectsList.slice(4).map((project, index) => (
                <div
                  key={index}
                  className={`h-[19rem] w-[25rem] border-[1px] rounded-lg p-3 border-zinc-400 overflow-hidden flex flex-col relative`}
                >
                  <div className="w-full">
                    <Image
                      src={project.image}
                      alt="mini project"
                      sizes="100%"
                      className="rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-2">
                    <div className="flex w-full gap-2 absolute top-[10rem]">
                      {project.icons}
                    </div>
                    <h2 className="font-bold lg:text-md text-sm text-white py-1">
                      {project.title}
                    </h2>
                    <p className="text-white text-xs text-justify">
                      {project.description}
                    </p>
                    <div className="text-white flex gap-5 pt-2">
                      <Link
                        href={project.gitlink}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-violet-500 py-1.5 px-3 text-xs rounded-3xl">
                          View code
                        </button>
                      </Link>
                      <Link
                        href={project.weblink}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="border-violet-500 border-2 py-1.5 px-3 text-xs rounded-3xl">
                          Live demo
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center">
              <p className="text-white text-center lg:flex hidden">
                Let&apos;s Collaborate
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-2xl animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
