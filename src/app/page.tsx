import dynamic from "next/dynamic";
import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import FeatureSections from "@/components/FeatureSections";
import ArchitectureSection from "@/components/ArchitectureSection";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";

// Below-the-fold interactive components — lazy loaded for smaller initial bundle
const SmartHomeConfigurator = dynamic(
  () => import("@/components/SmartHomeConfigurator"),
  { loading: () => <section className="py-20 lg:py-28 bg-warm-cream section-auto-visibility" /> }
);
const DailyScenes = dynamic(
  () => import("@/components/DailyScenes"),
  { loading: () => <section className="py-20 lg:py-28 bg-warm-cream section-auto-visibility" /> }
);
const EnergyDashboard = dynamic(
  () => import("@/components/EnergyDashboard"),
  { loading: () => <section className="py-20 lg:py-28 bg-charcoal section-auto-visibility" /> }
);

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
