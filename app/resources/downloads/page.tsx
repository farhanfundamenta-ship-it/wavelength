import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { resources } from "@/data/resources/resources";

export const metadata: Metadata = buildMetadata({
  title: "Downloads",
  description:
    "Technical downloads on marine and industrial decarbonisation engineering.",
  path: "/resources/downloads",
});

const downloads = resources.filter((resource) => resource.category === "download");

export default function DownloadsPage() {
  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <Container className="relative">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Resources
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Technical
            <span className="text-accent"> downloads</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            Specs, datasheets and reference material for marine and
            industrial decarbonisation programmes.
          </p>
        </Container>
      </Section>

      {/* ---- Downloads grid ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((resource) => (
              <a
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group relative overflow-hidden rounded-sm border border-line bg-mist/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-paper hover:shadow-2xl hover:shadow-ink/5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={resource.icon} className="h-5 w-5" />
                </span>
                <p className="relative mt-6 text-xs font-medium uppercase tracking-[0.15em] text-accent-strong">
                  {resource.meta}
                </p>
                <h2 className="relative mt-2 text-lg font-semibold tracking-tight text-heading">
                  {resource.title}
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-body">
                  {resource.description}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-heading">
                  Download
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Closing CTA ---- */}
      <CTASection
        eyebrow="Let's talk"
        title="Have a project in mind?"
        description="Tell us about your challenge. Our engineers will help design the right system for it."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}
