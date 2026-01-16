import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import PhilosophySection from "@/components/PhilosophySection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeBuildSection />
        <PhilosophySection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
