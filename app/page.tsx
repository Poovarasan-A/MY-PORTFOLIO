import Header from "@/components/Header";
import Homepage from "@/components/homepage/Homepage";
import About from "../components/About";
import MyProjects from "@/components/MyProjects";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";
import ProfessionalExperience from "@/components/ProfessionalExperience";


export default function Home() {
  return (
    <main className=" w-screen h-screen scrollbar-hidden">
      <Header />
      <Homepage />
      <About />
      <ProfessionalExperience />
      <MyProjects />
      <ClientReviews />
      <Contact />

    </main>
  );
}
