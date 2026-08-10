import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import SmartHomeConfigurator from "@/components/SmartHomeConfigurator";
import FeatureSections from "@/components/FeatureSections";
import DailyScenes from "@/components/DailyScenes";
import ArchitectureSection from "@/components/ArchitectureSection";
import ProductSection from "@/components/ProductSection";
import EnergyDashboard from "@/components/EnergyDashboard";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <SmartHomeConfigurator />
      <FeatureSections />
      <DailyScenes />
      <ArchitectureSection />
      <ProductSection />
      <EnergyDashboard />
      <AboutSection />
    </PageWrapper>
  );
}
