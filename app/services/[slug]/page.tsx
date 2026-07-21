import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { services } from "@/data/services/services";
import { caseStudies } from "@/data/case-studies/case-studies";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return buildMetadata({ title: "Services", path: "/services" });
  }

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const service = services[serviceIndex];

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const relatedCaseStudy = service.caseStudySlug
    ? caseStudies.find((c) => c.slug === service.caseStudySlug)
    : undefined;

  return (
    <>
      {/* ---- Hero: full-bleed photo + a persistent service rail, same
          signature device used on the industry pages — every service page
          shows the full set of six and where the current one sits. ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .svcd-hero-el {
              opacity: 0;
              transform: translateY(18px);
              animation: svcd-hero-in 1s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
            .svcd-hero-img {
              animation: svcd-hero-zoom 16s ease-out both;
            }
          }
          @keyframes svcd-hero-in { to { opacity: 1; transform: translateY(0); } }
          @keyframes svcd-hero-zoom {
            from { transform: scale(1.05); }
            to { transform: scale(1.15); }
          }
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .svcd-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: svcd-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 28%;
              }
              .svcd-card {
                opacity: 0;
                transform: translateY(32px);
                animation: svcd-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
              .svcd-img {
                clip-path: inset(0 0 12% 0);
                animation: svcd-img-in linear both;
                animation-timeline: view();
                animation-range: entry 0% cover 34%;
              }
            }
          }
          @keyframes svcd-reveal-in { to { opacity: 1; transform: translateY(0); } }
          @keyframes svcd-img-in { to { clip-path: inset(0 0 0 0); } }
          .svcd-card:nth-child(2) { animation-delay: 90ms; }
          .svcd-card:nth-child(3) { animation-delay: 180ms; }
          .svcd-card:nth-child(4) { animation-delay: 270ms; }
          .svcd-card:nth-child(5) { animation-delay: 360ms; }
          .svcd-card:nth-child(6) { animation-delay: 450ms; }
        `}</style>

        <img
          src={service.image}
          alt={service.title}
          className="svcd-hero-img absolute inset-0 h-full w-full object-cover grayscale-[55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

        {/* Service rail */}
        <nav
          aria-label="Services"
          className="absolute inset-y-0 left-0 z-10 hidden w-56 flex-col justify-center gap-1 border-r border-white/10 bg-ink/40 px-6 backdrop-blur-sm lg:flex"
        >
          {services.map((s, i) => {
            const isCurrent = s.slug === service.slug;
            return (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className={
                  "group flex items-baseline gap-3 rounded-md py-2.5 transition-colors duration-300 " +
                  (isCurrent ? "" : "hover:bg-white/5")
                }
              >
                <span
                  className={
                    "font-mono text-[10px] tabular-nums " +
                    (isCurrent ? "text-accent" : "text-white/30")
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    "text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 " +
                    (isCurrent ? "text-white" : "text-white/40 group-hover:text-white/70")
                  }
                >
                  {s.title}
                </span>
              </a>
            );
          })}
        </nav>

        <Container className="relative lg:pl-56">
          <div className="svcd-hero-el flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="hex-clip flex h-8 w-8 items-center justify-center bg-accent text-ink">
              <Icon name={service.icon} className="h-4 w-4" />
            </span>
            Services
            <span className="font-mono text-white/40">
              {String(serviceIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </div>
          <h1
            className="svcd-hero-el mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
            style={{ animationDelay: "90ms" }}
          >
            {service.title}
          </h1>
          <p
            className="svcd-hero-el mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {service.description}
          </p>
          <div
            className="svcd-hero-el mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/contact" variant="solid" withArrow>
              Talk to an Engineer
            </Button>
            <Button href="/industries" variant="outline-light">
              Explore Our Industries
            </Button>
          </div>
        </Container>
      </Section>

      {/* ---- Stats band ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-line border-t border-heading/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {service.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`svcd-reveal ${i === 0 ? "pt-6 sm:pr-6" : "pt-6 sm:px-6"}`}
              >
                <p className="text-5xl font-semibold tracking-tight text-heading lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- The challenge: asymmetric editorial, secondary image ---- */}
      <Section tone="ink-2" className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-12">
            <div className="svcd-reveal md:col-span-6">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                The challenge
              </div>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                What makes {service.title.toLowerCase()} hard to get right
              </h2>
              <ul className="mt-8 space-y-4">
                {service.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-sm leading-relaxed text-body-dark">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 md:pt-10">
              <figure className="svcd-img">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink-3">
                  <img
                    src={service.secondaryImage}
                    alt={`${service.title} in operation`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[45%] transition-all duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                  />
                </div>
              </figure>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Our approach + core capabilities ---- */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-12">
            <div className="svcd-reveal md:col-span-7">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                Our approach
              </div>
              <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                How we deliver {service.title.toLowerCase()}
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-14">
              <p className="svcd-reveal border-t border-heading/80 pt-6 text-base leading-relaxed text-body md:text-lg">
                {service.approach}
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((capability) => (
              <div
                key={capability}
                className="svcd-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-paper hover:shadow-2xl hover:shadow-ink/5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="hex-clip flex h-10 w-10 items-center justify-center bg-ink text-accent transition-transform duration-500 group-hover:scale-105">
                  <Icon name={service.icon} className="h-4 w-4" />
                </span>
                <p className="mt-4 text-sm font-semibold tracking-tight text-heading">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Related work ---- */}
      {relatedCaseStudy ? (
        <Section tone="mist">
          <Container>
            <p className="svcd-reveal text-xs font-medium uppercase tracking-[0.28em] text-body">
              Related work
            </p>
            <a
              href={`/case-studies/${relatedCaseStudy.slug}`}
              className="svcd-reveal group mt-6 grid grid-cols-1 gap-x-10 gap-y-6 overflow-hidden rounded-sm md:grid-cols-12"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-mist md:col-span-6">
                <img
                  src={relatedCaseStudy.image}
                  alt={relatedCaseStudy.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="md:col-span-6 md:self-center">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent-strong">
                  {relatedCaseStudy.sector} &middot; {relatedCaseStudy.location}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-heading md:text-3xl">
                  {relatedCaseStudy.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-body md:text-base">
                  {relatedCaseStudy.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-heading">
                  Read case study
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </a>
          </Container>
        </Section>
      ) : null}

      {/* ---- Closing CTA ---- */}
      <CTASection
        eyebrow="Let's talk"
        title={`Have a ${service.title.toLowerCase()} project in mind?`}
        description="Tell us about your challenge. Our engineers will help design the right system for it."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>

      {/* ---- Explore other services ---- */}
      <Section tone="paper">
        <Container>
          <h2 className="svcd-reveal text-xs font-medium uppercase tracking-[0.28em] text-body">
            Explore other services
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <a
                key={other.slug}
                href={`/services/${other.slug}`}
                className="svcd-card group relative flex h-40 items-end overflow-hidden rounded-sm"
              >
                <img
                  src={other.image}
                  alt={other.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="relative flex w-full items-center justify-between p-5">
                  <span className="text-sm font-semibold tracking-tight text-white">
                    {other.title}
                  </span>
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
