import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { resources } from "@/data/resources/resources";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return buildMetadata({ title: "Resources", path: "/resources" });
  }

  return buildMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
  });
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      <Section tone="ink" className="relative overflow-hidden">
        <Container className="relative">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="hex-clip flex h-8 w-8 items-center justify-center bg-accent text-ink">
              <Icon name={resource.icon} className="h-4 w-4" />
            </span>
            {resource.meta}
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            {resource.description}
          </p>
        </Container>
      </Section>

      <CTASection
        eyebrow="Want the full version?"
        title="Get this resource sent to you"
        description="Reach out and we'll send over the full guide, case study, or download — along with anything else relevant to your project."
      >
        <Button href="/contact" variant="solid" withArrow>
          Request It
        </Button>
      </CTASection>

      <Section tone="mist" className="!py-10">
        <Container>
          <a
            href="/resources"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-heading"
          >
            <Icon
              name="arrowRight"
              className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1"
            />
            All resources
          </a>
        </Container>
      </Section>
    </>
  );
}
