"use client";

import { label } from "three/examples/jsm/nodes/Nodes.js";
import { skillsList } from "../app/data";
import Link from "next/link";

const SkillList = () => {
  const angleIncrement = 360 / skillsList.length;
  const radius = 12;
  return (
    <div className=" w-full h-full relative animate-spin-slow">
      <div className="w-max flex items-center justify-center">
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
