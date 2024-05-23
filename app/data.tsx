import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandBootstrap } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandThreejs } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import Image from "next/image";

// Project images
import BodyMech from "../public/images/Body Mechanics gym.png";
import Continental from "../public/images/conti.png";
import Brownstone from "../public/images/Brownstone.png";
import weather from "../public/images/weather.png";
import qrgen from "../public/images/qrgen.png";
import advisor from "../public/images/Advisor.png";
import bmical from "../public/images/Bmical.png";
import LoginSign from "../public/images/Login-signup.png";
import feedback from "../public/images/Feedback.png";
import reactico from "../public/images/react.png";
import materialUi from "../public/images/material ui.png";

export const skillsList = [
  { label: "ReactJs", link: "", icon: <RiReactjsLine />, newTab: false },
  { label: "NextJs", link: "", icon: <SiNextdotjs />, newTab: false },
  { label: "Tailwind ", link: "", icon: <RiTailwindCssFill />, newTab: false },
  { label: "MongoDB", link: "", icon: <SiMongodb />, newTab: false },
  { label: "ThreeJs", link: "", icon: <TbBrandThreejs />, newTab: false },
  { label: "Redux", link: "", icon: <TbBrandRedux />, newTab: false },
  { label: "Bootstrap", link: "", icon: <TbBrandBootstrap />, newTab: false },
  { label: "NodeJs", link: "", icon: <IoLogoNodejs />, newTab: false },
  { label: "ExpressJs", link: "", icon: <SiExpress />, newTab: false },
  { label: "GitHub", link: "", icon: <IoLogoGithub />, newTab: false },
  { label: "TypeScript", link: "", icon: <BiLogoTypescript />, newTab: false },
];

export const projectsList = [
  {
    name: "Body Mechanics",
    image: BodyMech,
    title: "Gym Website",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    gitlink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  {
    name: "The Continental",
    image: Continental,
    title: "Hotel Website with Animaiton",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/The-Continental-Hotel/",
    gitlink: "https://github.com/Poovarasan-A/The-Continental-Hotel.git",
  },
  {
    name: "Brownstone Hotel",
    image: Brownstone,
    title: "Hotel Website",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Hotel-Brownstone/",
    gitlink: "https://github.com/Poovarasan-A/Hotel-Brownstone.git",
  },
  //mini  projects
  {
    name: "Weather App",
    image: weather,
    title: "Weather App",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    gitlink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  {
    name: "QR Generator",
    image: qrgen,
    title: "Qr Genrator App",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    gitlink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  {
    name: "Advisor App",
    image: advisor,
    title: "Advisor App",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    gitlink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  {
    name: "BMI Calculator",
    image: bmical,
    title: "BMI Calculator",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    gitlink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  {
    name: "Login SignUp Page",
    image: LoginSign,
    title: "Login & SignUp",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "",
    gitlink: "https://github.com/Poovarasan-A/Login-Signup-.git",
  },
  {
    name: "Emoji Feedback",
    image: feedback,
    title: "Emoji Feedback",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    gitlink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  {
    name: "Emoji Feedback",
    image: feedback,
    title: "Emoji Feedback",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={materialUi}
        alt="icon"
        key="materialUi"
        width={15}
        height={15}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Body Mechanics Gym website is developed using React framework and for styling Material UI used.",
    weblink: "https://poovarasan-a.github.io/Feedback-Emoji-/",
    gitlink: "https://github.com/Poovarasan-A/Feedback-Emoji-.git",
  },
];
