"use client";

import Image from "next/image";
import mainbg from "../../public/images/mainbg.png";
import HomeContent from "./HomeContent";
import { HeroHighlight } from "../ui/hero-highlight";

const Homepage = () => {
  return (
    <section className="relative w-full h-screen text-white flex justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0">
        <Image
          src={mainbg}
          alt="main"
          quality={100}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          // loading="lazy"
        />
      </div>
      <HomeContent />
    </section>
  );
};

export default Homepage;
