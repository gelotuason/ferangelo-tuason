import HeroSection from "@/app/ui/home/header/hero-section";
import AboutSection from "@/app/ui/home/about/about-section";
import ServicesSection from "@/app/ui/home/services/services-section";
import TechstackSection from "@/app/ui/home/techstack/techstack-section";
import ProjectsSection from "@/app/ui/home/projects/projects-section";
import ContactSection from "@/app/ui/home/contact/contact-section";

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
