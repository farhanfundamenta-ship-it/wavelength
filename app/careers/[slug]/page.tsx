import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { careers } from "@/data/careers/careers";

interface CareerPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return careers.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: CareerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = careers.find((r) => r.slug === slug);

  if (!role) {
    return buildMetadata({ title: "Careers", path: "/careers" });
  }

  return buildMetadata({
    title: role.title,
    description: role.summary,
    path: `/careers/${role.slug}`,
  });
}

export default async function CareerDetailPage({ params }: CareerPageProps) {
  const { slug } = await params;
  const role = careers.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <>
      <Section tone="ink" className="relative overflow-hidden">
        <Container className="relative">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {role.department}
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl">
            {role.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            {role.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white/80">
              {role.location}
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white/80">
              {role.type}
            </span>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="text-xl font-semibold tracking-tight text-heading">
                Responsibilities
              </h2>
              <ul className="mt-5 space-y-3">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-xl font-semibold tracking-tight text-heading">
                Requirements
              </h2>
              <ul className="mt-5 space-y-3">
                {role.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Apply now"
        title={`Interested in ${role.title}?`}
        description="Send us your CV and a short note on why this role fits. We reply to every application."
      >
        <Button href="/contact" variant="solid" withArrow>
          Apply for This Role
        </Button>
      </CTASection>

      <Section tone="mist" className="!py-10">
        <Container>
          <a
            href="/careers"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-heading"
          >
            <Icon
              name="arrowRight"
              className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1"
            />
            All open roles
          </a>
        </Container>
      </Section>
    </>
  );
}
