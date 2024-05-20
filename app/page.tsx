import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Homepage from "@/components/homepage/Homepage";
import MyProjects from "@/components/MyProjects";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="text-white w-screen h-screen scrollbar-hidden">
      <Header />
      <Homepage />
      <About />
      <MyProjects />
      <Contact />
    </main>
  );
}
