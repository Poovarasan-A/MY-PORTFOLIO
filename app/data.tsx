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
import { SiPostman } from "react-icons/si";
import Image from "next/image";

// Project images
import GuestRoom from "../public/images/GuestRoom thumbnail.jpg";
import BodyMech from "../public/images/Body Mechanics gym.png";
import Continental from "../public/images/conti.png";
import Brownstone from "../public/images/Brownstone.png";
import weather from "../public/images/weather.png";
import qrgen from "../public/images/qrgen.png";
import advisor from "../public/images/Advisor.png";
import bmical from "../public/images/Bmical.png";
import Livixius from "../public/images/Livixius.png";
import feedback from "../public/images/Feedback.png";
import reactico from "../public/images/react.png";
import materialUi from "../public/images/material ui.png";
import gsap from "../public/images/gsap.png";
import wolfkart from "../public/images/Wolfkart thumbnail 2.jpg";
import taskeasy from "../public/images/TaskEasy thumbnail.jpg";
import css from "../public/images/css-3.png";
import html from "../public/images/html-5.png";
import bootstrap from "../public/images/bootstrap.png";
import rapid from "../public/images/Rapid.png";

// New Freelance Projects
import DoctorApp from "../public/images/doctor-appointment.png";
import InteriorDesign from "../public/images/interiors-designer.png";
import HotoOffers from "../public/images/hoto-offers.png";

export const skillsList = [
  { label: "ReactJs", link: "", icon: <RiReactjsLine />, newTab: false },
  { label: "NextJs", link: "", icon: <SiNextdotjs />, newTab: false },
  { label: "Tailwind ", link: "", icon: <RiTailwindCssFill />, newTab: false },
  { label: "MongoDB", link: "", icon: <SiMongodb />, newTab: false },
  { label: "Postman", link: "", icon: <SiPostman />, newTab: false },
  { label: "Redux", link: "", icon: <TbBrandRedux />, newTab: false },
  { label: "Bootstrap", link: "", icon: <TbBrandBootstrap />, newTab: false },
  { label: "NodeJs", link: "", icon: <IoLogoNodejs />, newTab: false },
  { label: "ExpressJs", link: "", icon: <SiExpress />, newTab: false },
  { label: "GitHub", link: "", icon: <IoLogoGithub />, newTab: false },
  { label: "TypeScript", link: "", icon: <BiLogoTypescript />, newTab: false },
];

export const projectsList = [
  // Hoto Offers Digital Ecosystem
  {
    name: "Hoto Offers",
    image: HotoOffers,
    title: "Hoto Offers Ecosystem - Official Developer",
    description:
      "As the Official Developer, I architected and built the complete Hoto Offers suite. This includes a high-traffic Customer App for discovering hyperlocal deals, a robust Vendor App for real-time offer management, a comprehensive Admin Dashboard with advanced analytics, and a SEO-optimized marketing website.",
    weblink: "https://hotooffers.com",
    gitlink: "#",
  },
  // Doctor Appointment Booking
  {
    name: "Doctor Appointment Booking",
    image: DoctorApp,
    title: "Doctor Appointment Booking - Health-tech Solution",
    description:
      "A sophisticated health-tech application designed to streamline clinical workflows. It features a real-time appointment booking system, specialized doctor profiles with availability calendars, an automated patient notification system, and a secure medical records management interface for healthcare providers.",
    weblink: "#",
    gitlink: "#",
  },
  // Interiors Designer Website
  {
    name: "Interior Design Portfolio",
    image: InteriorDesign,
    title: "Interior Designer Website - High-end Showcase",
    description:
      "A luxury web platform tailored for high-end interior designers. It focuses on visual excellence with smooth GSAP animations, high-resolution project galleries, a dynamic consultation inquiry system, and a minimalist design aesthetic that highlights artistic architectural and interior photography.",
    weblink: "#",
    gitlink: "#",
  },
  // Guest Room App
  {
    name: "Guest Room Booking App",
    image: GuestRoom,
    title: "Guest Room Booking App - MERN Stack ",

    description:
      "This App built using the MERN stack MongoDB, Express.js, React.js, Node.js. It allows users to book rooms, manage bookings, and view property details.",
    weblink: "https://guest-room-booking-application-2yex.onrender.com/",
    gitlink:
      "https://github.com/Poovarasan-A/Guest-room-booking-application.git",
  },
  // E commerce
  {
    name: "WOlfkart",
    image: wolfkart,
    title: "E Commerce - MERN Stack (with Admin Dashboard)",

    description:
      "Developed E-com project using React, MonogoDb, Express js, Node js & jwt for authenticetion, Stripe for payment gateway with admin dashboard.",
    weblink: "http://wolfkart.onrender.com",
    gitlink: "https://github.com/Poovarasan-A/E-Commerce--MERN-Stack.git",
  },
  // Task Easy
  {
    name: "Task Easy",
    image: taskeasy,
    title: "Task Management App - Next js (OAuth)",

    description:
      "Developed Task Management App using Next js with MonogoDb & auth.js for user and third-party authentication (Google & GitHub)",
    weblink: "https://task-easy-manage.vercel.app/",
    gitlink: "https://github.com/Poovarasan-A/Task-Easy-Nextjs-Mongodb.git",
  },
  // Body Mechanics
  {
    name: "Body Mechanics",
    image: BodyMech,
    title: "Gym Website (Dark & Light Theme)",
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
      "This Body Mechanics Gym website was crafted using the React framework, Leveraging the power of Material UI for styling.",
    weblink: "https://poovarasan-a.github.io/Body-Mech-Gym-Web/",
    gitlink: "https://github.com/Poovarasan-A/Body-Mech-Gym-Web.git",
  },
  // Continental hotel
  {
    name: "The Continental",
    image: Continental,
    title: "Hotel Website (with Animaiton using CSS)",
    icons: [
      <Image
        src={html}
        alt="icon"
        key="reactico"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={bootstrap}
        alt="icon"
        key="materialUi"
        width={30}
        height={30}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Hotel website landing page was handcrafted using HTML and Bootstrap, CSS animations were integrated to add a touch of modernity.",
    weblink: "https://poovarasan-a.github.io/The-Continental-Hotel/",
    gitlink: "https://github.com/Poovarasan-A/The-Continental-Hotel.git",
  },
  //Livixius
  {
    name: "Livixius HMS",
    image: Livixius,
    title: "Company website (Hotel Mangement System)",
    icons: [
      <Image
        src={html}
        alt="icon"
        key="reactico"
        width={25}
        height={25}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={css}
        alt="icon"
        key="reactico"
        width={25}
        height={25}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={gsap}
        alt="icon"
        key="materialUi"
        width={25}
        height={25}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This HMS company website, crafted for Start-up, is built entirely using Pure HTML and CSS, animations were meticulously implemented with GSAP.",
    weblink: "https://poovarasan-a.github.io/Livixius-web/",
    gitlink: "https://github.com/Poovarasan-A/Livixius-web.git",
  },
  //brownstone hotel
  {
    name: "Brownstone Hotel",
    image: Brownstone,
    title: "Hotel Website",
    icons: [
      <Image
        src={html}
        alt="icon"
        key="reactico"
        width={20}
        height={20}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={css}
        alt="icon"
        key="materialUi"
        width={20}
        height={20}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This Hotel website developed using Pure HTML & CSS, it is a basic hotel website.",
    weblink: "https://poovarasan-a.github.io/Hotel-Brownstone/",
    gitlink: "https://github.com/Poovarasan-A/Hotel-Brownstone.git",
  },
  //mini  projects
  //weather app
  {
    name: "Weather App",
    image: weather,
    title: "Weather App",
    icons: [
      <Image
        src={reactico}
        alt="icon"
        key="reactico"
        width={20}
        height={20}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={rapid}
        alt="icon"
        key="materialUi"
        width={20}
        height={20}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "This weather app crafted using React js and rapid Api, it works based on city search.",
    weblink: "https://poovarasan-a.github.io/weather",
    gitlink:
      "https://github.com/Poovarasan-A/React-small-projects/tree/main/src/Components/Weather%20App",
  },
  //qr generator
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
    ],
    description:
      "This app generate Qr using url with prefferable sizes, Used technolgies React js & QR Code Api.",
    weblink: "https://poovarasan-a.github.io/qrgen",
    gitlink:
      "https://github.com/Poovarasan-A/React-small-projects/tree/main/src/Components/QR%20Generator",
  },
  //advisor app
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
    ],
    description:
      "Developed Advisor app for reading advices, using React js & Advice Slip Api.",
    weblink: "https://poovarasan-a.github.io/advisor",
    gitlink:
      "https://github.com/Poovarasan-A/React-small-projects/tree/main/src/Components/Advisor%20App",
  },
  //bmi calci
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
    ],
    description:
      "Developed BMI Calculator in React js can calculate BMI by adding age, height, weight.",
    weblink: "https://poovarasan-a.github.io/bmi",
    gitlink:
      "https://github.com/Poovarasan-A/React-small-projects/tree/main/src/Components/BMI%20Calculator",
  },
  // emoji feedback
  {
    name: "Emoji Feedback",
    image: feedback,
    title: "Emoji Feedback",
    icons: [
      <Image
        src={html}
        alt="icon"
        key="reactico"
        width={20}
        height={20}
        quality={100}
        loading="lazy"
      />,
      <Image
        src={css}
        alt="icon"
        key="materialUi"
        width={20}
        height={20}
        quality={100}
        loading="lazy"
      />,
    ],
    description:
      "It's a feedback submiting form using emoji developed with HTML, CSS, Javascript.",
    weblink: "https://poovarasan-a.github.io/Feedback-Emoji-/",
    gitlink: "https://github.com/Poovarasan-A/Feedback-Emoji-.git",
  },
];

export const reviewsList = [
  {
    name: "Ashok Kumar S",
    role: "CEO, Hoto Offers",
    review:
      "Working with Poovarasan was a game-changer for our ecosystem. He didn't just code; he architected a solution that handled our growth seamlessly. His dedication to quality is unmatched.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    name: "M. Arumporai Chemmal",
    role: "Counselor - Trainer - Family Therapist",
    review:
      "The appointment booking system Poovarasan built for us is incredibly intuitive. Our patients love the ease of use, and our staff has seen a 40% reduction in scheduling errors.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Sabreen Jaffrey",
    role: "Founder, Inhabyt Atlier Interiors",
    review:
      "A true artist in web development. He captured the essence of our luxury brand perfectly. The animations are smooth, and the design is as elegant as the spaces we create.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julian",
  },
];
