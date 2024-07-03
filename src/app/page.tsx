import HeroSection from "@/ui/home/header/hero-section";
import AboutSection from "@/ui/home/about/about-section";
import ServicesSection from "@/ui/home/services/services-section";
import TechstackSection from "@/ui/home/techstack/techstack-section";
import ProjectsSection from "@/ui/home/projects/projects-section";
import ContactSection from "@/ui/home/contact/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechstackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
