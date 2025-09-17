import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import RecentWorkSection from "@/components/sections/RecentWorkSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIDoSection />
      <RecentWorkSection />
      <AchievementsSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
