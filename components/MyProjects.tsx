"use client";

import Image from "next/image";
import Link from "next/link";

import { IoArrowDownCircleOutline } from "react-icons/io5";

// images

import { projectsList } from "@/app/data";

const MyProjects = () => {
  return (
    <section id="projects" className="w-full relative bg-black z-50">
      <div className=" flex flex-col lg:pt-5">
        <h1 className="text-white text-3xl font-bold text-center lg:my-2 my-5">
          My <span className="text-violet-500">Projects</span>
        </h1>
        <div className="flex gap-4 w-full items-center justify-center scroll-smooth overflow-hidden pt-10">
          <div className="w-full flex flex-wrap gap-10 items-center justify-center scroll-smooth">
            {/*Big Projects */}
            {projectsList.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className="lg:h-[32rem] lg:w-[40vw] w-[95vw] border-[1px] rounded-3xl lg:p-5 p-2 border-zinc-400 overflow-hidden flex flex-col "
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
                <div className="px-2 pt-1">
                  <h2 className="font-bold lg:text-md text-md text-white py-2">
                    {project.title}
                  </h2>
                  <p className="text-white tracking-wide leading-6.5 text-sm">
                    {project.description}
                  </p>
                  <div className="text-white flex  gap-5 pt-2 lg:pb-0 pb-2">
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

            <div className="flex flex-wrap gap-8  h-full items-center justify-center">
              {projectsList.slice(6).map((project, index) => (
                <div
                  key={index}
                  className={`h-[37vh] lg:h-[43vh] w-[90vw] lg:w-[26vw] border-[1px] rounded-2xl p-2 border-zinc-400 overflow-hidden flex flex-col relative`}
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
                    <div className="flex w-full gap-2 absolute top-[8.5rem]">
                      {project.icons}
                    </div>
                    <h2 className="font-bold lg:text-md text-sm text-white py-1">
                      {project.title}
                    </h2>
                    <p className="text-white xs:text-[12px] tracking-wide leading-5">
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
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-10 gap-4">
          <p className="text-white text-center lg:flex hidden">
            Let&apos;s Collaborate
          </p>
          <IoArrowDownCircleOutline className="text-gray-400 text-[2.5rem] font-extralight animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
