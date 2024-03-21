import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillSection from "@/components/SkillSection";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectsSection/>
      <TestimonialSection/>
    </main>
  );
}
