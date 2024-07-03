import HeroSection from "@/ui/header/hero-section";
import AboutSection from "@/ui/about/about-section";
import ServicesSection from "@/ui/services/services-section";
import TechstackSection from "@/ui/techstack/techstack-section";
import ProjectsSection from "@/ui/projects/projects-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechstackSection />
      <ProjectsSection />
    </main>
  );
}
