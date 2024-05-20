"use client";

import Image from "next/image";
import mainbg from "../../public/images/mainbg.png";
import HomeContent from "./HomeContent";
import Particle from "../Particle";

const Homepage = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0">
        <Image
          src={mainbg}
          alt="main"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <Particle />
      <HomeContent />
    </div>
  );
};

export default Homepage;
