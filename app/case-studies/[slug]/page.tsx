import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { caseStudies } from "@/data/case-studies/case-studies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return buildMetadata({ title: "Case Studies", path: "/case-studies" });
  }

  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Section tone="ink" className="relative overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="absolute inset-0 h-full w-full object-cover grayscale-[55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />

        <Container className="relative">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="hex-clip flex h-8 w-8 items-center justify-center bg-accent text-ink">
              <Icon name={study.icon} className="h-4 w-4" />
            </span>
            {study.sector} &middot; {study.location}
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            {study.summary}
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-6 md:border-r md:border-line md:pr-10">
              <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-body">
                The challenge
              </h2>
              <p className="mt-4 text-base leading-relaxed text-heading md:text-lg">
                {study.challenge}
              </p>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-body">
                The solution
              </h2>
              <p className="mt-4 text-base leading-relaxed text-heading md:text-lg">
                {study.solution}
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 divide-y divide-line border-t border-heading/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {study.results.map((result, i) => (
              <div
                key={result.label}
                className={i === 0 ? "pt-6 sm:pr-6" : "pt-6 sm:px-6"}
              >
                <p className="text-4xl font-semibold tracking-tight text-heading lg:text-5xl">
                  {result.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">{result.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Let's talk"
        title="Have a similar challenge?"
        description="Tell us about your project. Our engineers will help design the right system for it."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>

      <Section tone="mist" className="!py-10">
        <Container>
          <a
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-heading"
          >
            <Icon
              name="arrowRight"
              className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1"
            />
            All case studies
          </a>
        </Container>
      </Section>
    </>
  );
}
