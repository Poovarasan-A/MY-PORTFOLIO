import Header from "@/components/Header";
import Homepage from "@/components/homepage/Homepage";

import dynamic from "next/dynamic";
import About from "../components/About";

const DynamicProjects = dynamic(() => import("../components/MyProjects"), {
  loading: () => <p>Projects</p>,
  ssr: false,
});
const DynamicContact = dynamic(() => import("../components/Contact"), {
  loading: () => <p>Contact</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main className=" w-screen h-screen scrollbar-hidden">
      <Header />
      <Homepage />
      <About />
      <DynamicProjects />
      <DynamicContact />
    </main>
  );
}
