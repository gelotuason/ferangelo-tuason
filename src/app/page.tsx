import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Techstack from "@/components/techstack/techstack";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Techstack />
      <Projects />
      <Contact />
    </main>
  );
}
