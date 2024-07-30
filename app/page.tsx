import Header from "@/components/Header";
import Homepage from "@/components/homepage/Homepage";
import About from "../components/About";
import MyProjects from "@/components/MyProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className=" w-screen h-screen scrollbar-hidden">
      <Header />
      <Homepage />
      <About />
      <MyProjects />
      <Contact />
    </main>
  );
}
