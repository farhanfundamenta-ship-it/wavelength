import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { news } from "@/data/news/news";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    return buildMetadata({ title: "News", path: "/news" });
  }

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Section tone="ink" className="relative overflow-hidden">
        <Container className="relative">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {article.category} &middot; {formatDate(article.date)}
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl">
            {article.title}
          </h1>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <figure className="mb-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-mist">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover grayscale-[25%]"
              />
            </div>
          </figure>

          <div className="max-w-2xl space-y-6">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-body md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href="/news"
            className="group mt-14 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-heading"
          >
            <Icon
              name="arrowRight"
              className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1"
            />
            All news
          </a>
        </Container>
      </Section>

      <CTASection
        eyebrow="Let's talk"
        title="Have a similar project in mind?"
        description="Tell us about your challenge. Our engineers will help design the right system for it."
      >
        <Button href="/contact" variant="solid" withArrow>
          Get in Touch
        </Button>
      </CTASection>
    </>
  );
}
