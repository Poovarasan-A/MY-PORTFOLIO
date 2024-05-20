"use client";

// components/HorizontalScroll.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && cardsRef.current) {
      const container = containerRef.current;
      const cards = cardsRef.current;

      gsap.to(cards, {
        x: -2000,
        // duration: 50,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "100rem 40rem",
          // snap: 1,
          pin: true,
          anticipatePin: 1,
          scrub: true,
          toggleActions: "restart none none none",
          markers: true,
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[100vh] overflow-hidden overflow-y-hidden relative"
    >
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        excepturi id corporis ab est quidem officia facere laudantium, eius,
        odit assumenda perspiciatis? Iure pariatur obcaecati fuga vero repellat,
        voluptatibus totam magni corporis, quisquam adipisci eum magnam veniam
        voluptate omnis iste, odio blanditiis suscipit quo nulla? Amet
        architecto consequatur omnis voluptatem.
      </p>
      <div
        ref={cardsRef}
        className="flex h-full will-change-transform items-center mx-20"
      >
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 1
        </div>
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 2
        </div>
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 3
        </div>
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 4
        </div>
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 5
        </div>
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 6
        </div>
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 7
        </div>
        <div className="flex-none w-[25rem] h-[28rem] mr-[20px] bg-black text-white flex justify-center items-center ">
          Project 8
        </div>
      </div>
    </div>
  );
};

export default Projects;
