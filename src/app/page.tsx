import dynamic from "next/dynamic";
import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
// Below-the-fold interactive components — lazy loaded for smaller initial bundle
const FeatureSections = dynamic(
  () => import("@/components/FeatureSections"),
  { loading: () => <section className="py-20 lg:py-28 bg-paper section-auto-visibility" /> }
);
const ArchitectureSection = dynamic(
  () => import("@/components/ArchitectureSection"),
  { loading: () => <section className="py-20 lg:py-28 bg-paper section-auto-visibility" /> }
);
const ProductSection = dynamic(
  () => import("@/components/ProductSection"),
  { loading: () => <section className="py-20 lg:py-28 bg-warm-cream section-auto-visibility" /> }
);
const AboutSection = dynamic(
  () => import("@/components/AboutSection"),
  { loading: () => <section className="py-20 lg:py-28 bg-paper section-auto-visibility" /> }
);
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
