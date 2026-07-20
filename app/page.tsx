import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site/site";
import { Hero } from "@/features/home/components/Hero";
import { CompanyIntro } from "@/features/home/components/CompanyIntro";
import { ServicesSection } from "@/features/home/components/ServicesSection";
import { IndustriesSection } from "@/features/home/components/IndustriesSection";
import { WhyWavelength } from "@/features/home/components/WhyWavelength";
import { EngineeringConfidence } from "@/features/home/components/EngineeringConfidence";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesSection />
      <IndustriesSection />
      <WhyWavelength />
      <EngineeringConfidence />
    </>
  );
}
