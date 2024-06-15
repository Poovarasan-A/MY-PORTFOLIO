"use client";

import { useEffect, useState } from "react";
import { skillsList } from "../app/data";
import Link from "next/link";

const SkillList = () => {
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 360px)");
    const mediumScreen = window.matchMedia("(max-width: 768px)");

    const updateRadius = () => {
      if (smallScreen.matches) {
        setRadius(7);
      } else if (mediumScreen.matches) {
        setRadius(9);
      } else {
        setRadius(12);
      }
    };

    updateRadius();

    smallScreen.addEventListener("change", updateRadius);
    mediumScreen.addEventListener("change", updateRadius);

    return () => {
      smallScreen.removeEventListener("change", updateRadius);
      mediumScreen.removeEventListener("change", updateRadius);
    };
  }, []);

  const angleIncrement = 360 / skillsList.length;

  return (
    <div className="lg:w-full h-full relative animate-spin-slow">
      <div className="lg:w-max flex items-center justify-center">
        {skillsList.map((skill, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const x = `${radius * Math.cos(angleRad)}rem`;
          const y = `${radius * Math.sin(angleRad)}rem`;
          return (
            <Link
              href={skill.link}
              className="absolute text-2xl border-2 p-2 border-white rounded-full backdrop-blur-3xl"
              key={index}
              style={{
                transform: `translate(${x}, ${y})`,
              }}
              aria-label={skill.label}
            >
              <div className="animate-spin-slow-reverse">{skill.icon}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SkillList;
