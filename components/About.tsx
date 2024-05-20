import { skillsList } from "@/app/data";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MdKeyboardArrowDown } from "react-icons/md";

const About = () => {
  return (
    <div className="w-full relative h-screen bg-gradient-to-b flex flex-col items-center justify-center from-[#02030C] to-black z-10">
      <BackgroundBeams />

      <div className="mb-20 w-[60%] flex flex-col items-center leading-8">
        <h1 className="text-center font-bold text-3xl">
          Making <span className="text-violet-500 italic">apps</span> with
          modern technologies
        </h1>
        <TextGenerateEffect
          className="text-center text-md text-wrap mt-10 tracking-wider"
          words="I'm a skilled developer in TypeScript and JavaScript also
        expertise in frameworks like React, Node.js, Express.js and Next.js.
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to
        life!"
        />
      </div>
      <div className="w-full flex mb-12 flex-col justify-center items-center gap-14">
        {/* first row */}
        <div className=" grid grid-cols-5 gap-10">
          {skillsList.slice(0, 5).map((skill, index) => {
            return (
              <div
                className="flex items-center justify-around relative"
                key={index}
              >
                <div className="w-[5.5rem] h-[3.7rem] pb-1 font-semibold bg-violet-400 rounded-md text-black flex items-end justify-center">
                  <h1 className="bg-transparent text-sm">{skill.label} </h1>
                </div>
                <div className="w-[4rem] top-[-2rem] h-[4rem] rounded-full absolute bg-violet-400  text-black border-[6px] border-black z-20">
                  <div className="border-2 border-dotted animate-spin-slow border-white w-full h-full flex items-center bg-black justify-center rounded-full z-30">
                    <div className="text-violet-400 font-bold text-[2rem] animate-spin-slow-reverse">
                      {skill.icon}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* second row */}
        <div className=" grid grid-cols-4 gap-10">
          {skillsList.slice(5, 9).map((skill, index) => {
            return (
              <div
                className="flex items-center justify-around relative"
                key={index}
              >
                <div className="w-[5.5rem] h-[3.7rem] pb-1 font-semibold bg-violet-400 rounded-md text-black flex items-end justify-center">
                  <h1 className="bg-transparent text-sm">{skill.label} </h1>
                </div>
                <div className="w-[4rem] top-[-2rem] h-[4rem] rounded-full absolute bg-violet-400  text-black border-[6px] border-black z-20">
                  <div className="border-2 border-dotted animate-spin-slow border-white w-full h-full flex items-center bg-black justify-center rounded-full z-30">
                    <div className="text-violet-400 font-bold text-[2rem] animate-spin-slow-reverse">
                      {skill.icon}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* third row */}
        <div className=" grid grid-cols-2 gap-10">
          {skillsList.slice(9, 12).map((skill, index) => {
            return (
              <div
                className="flex items-center justify-around relative"
                key={index}
              >
                <div className="w-[5.5rem] h-[3.7rem] pb-1 font-semibold bg-violet-400 rounded-md text-black flex items-end justify-center">
                  <h1 className="bg-transparent text-sm">{skill.label} </h1>
                </div>
                <div className="w-[4rem] top-[-2rem] h-[4rem] rounded-full absolute bg-violet-400  text-black border-[6px] border-black z-20">
                  <div className="border-2 border-dotted animate-spin-slow border-white w-full h-full flex items-center bg-black justify-center rounded-full z-30">
                    <div className="text-violet-400 font-bold text-[2rem] animate-spin-slow-reverse">
                      {skill.icon}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm text-gray-400 font-semibold  tracking-wide">
          My Projects
        </h2>
        <MdKeyboardArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </div>
  );
};
export default About;
