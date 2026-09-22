import Header from "@/components/Header";
import Homepage from "@/components/homepage/Homepage";
import About from "../components/About";
import MyProjects from "@/components/MyProjects";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#020305]">
      <Header />
      <Homepage />
      <About />
      <MyProjects />
      <ClientReviews />
      <Contact />
    </main>
  );
}

