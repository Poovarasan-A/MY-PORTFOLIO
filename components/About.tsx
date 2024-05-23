import { skillsList } from "@/app/data";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TextFadeAnimation } from "./TextAnimation";

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const About = () => {
  return (
    <div className="w-full relative text-white h-screen bg-gradient-to-b flex flex-col items-center justify-center from-[#02030C] to-black z-10">
      <div className="lg:mb-20 mb-14 lg:w-[60%] flex flex-col items-center leading-8">
        <h1 className="text-center font-bold lg:text-3xl px-[2rem]  text-2xl">
          Making <span className="text-violet-500 italic">apps</span> with
          modern technologies
        </h1>
        <h5 className="text-center p-[1rem] text-sm lg:text-md text-wrap mt-5 lg:mt-10 tracking-wider">
          <TextFadeAnimation />
        </h5>
      </div>
      <div className="w-full px-[1rem] flex mb-12 flex-col justify-center items-center gap-14">
        {/* first row */}
        <div className="lg:w-[45%] w-[100%] flex items-center justify-between">
          {skillsList.slice(0, 5).map((skill, index) => {
            return (
              <div
                className="flex items-center justify-around relative"
                key={index}
              >
                <div className="w-[4rem] lg:w-[5.5rem] lg:h-[3.7rem] h-[2.6rem] pb-1 font-semibold bg-violet-400 rounded-md text-black flex items-end justify-center">
                  <h1 className="bg-transparent lg:text-sm text-xs">
                    {skill.label}
                  </h1>
                </div>
                <div className="lg:w-[4rem] top-[-2rem] lg:h-[4rem] w-[3rem] h-[3rem] rounded-full absolute  text-black lg:border-[6px] border-[4px] border-black z-20">
                  <div className="border-2 border-dotted animate-spin-slow border-white w-full h-full flex items-center bg-black justify-center rounded-full z-30">
                    <div className="text-violet-400 font-bold lg:text-[2rem] text-xl animate-spin-slow-reverse">
                      {skill.icon}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* second row */}
        <div className="lg:w-[35%] w-[82%] flex items-center justify-between">
          {skillsList.slice(5, 9).map((skill, index) => {
            return (
              <div
                className="flex items-center justify-around relative"
                key={index}
              >
                <div className="w-[4.2rem] lg:w-[5.5rem] lg:h-[3.7rem] h-[2.6rem] pb-1 font-semibold bg-violet-400 rounded-md text-black flex items-end justify-center">
                  <h1 className="bg-transparent lg:text-sm text-xs">
                    {skill.label}
                  </h1>
                </div>
                <div className="lg:w-[4rem] top-[-2rem] lg:h-[4rem] w-[3rem] h-[3rem] rounded-full absolute  text-black lg:border-[6px] border-[4px] border-black z-20">
                  <div className="border-2 border-dotted animate-spin-slow border-white w-full h-full flex items-center bg-black justify-center rounded-full z-30">
                    <div className="text-violet-400 font-bold lg:text-[2rem] text-xl animate-spin-slow-reverse">
                      {skill.icon}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* third row */}
        <div className="lg:w-[15%] w-[39%] flex items-center justify-between">
          {skillsList.slice(9, 12).map((skill, index) => {
            return (
              <div
                className="flex items-center justify-around relative"
                key={index}
              >
                <div className="w-[4.2rem] lg:w-[5.5rem] lg:h-[3.7rem] h-[2.6rem] pb-1 font-semibold bg-violet-400 rounded-md text-black flex items-end justify-center">
                  <h1 className="bg-transparent lg:text-sm text-xs">
                    {skill.label}
                  </h1>
                </div>
                <div className="lg:w-[4rem] top-[-2rem] lg:h-[4rem] w-[3rem] h-[3rem] rounded-full absolute  text-black lg:border-[6px] border-[4px] border-black z-20">
                  <div className="border-2 border-dotted animate-spin-slow border-white w-full h-full flex items-center bg-black justify-center rounded-full z-30">
                    <div className="text-violet-400 font-bold lg:text-[2rem] text-xl animate-spin-slow-reverse">
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
