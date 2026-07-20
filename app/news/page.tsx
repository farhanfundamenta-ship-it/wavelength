import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/icons";
import { news } from "@/data/news/news";

export const metadata: Metadata = buildMetadata({
  title: "News",
  description:
    "Project milestones, industry updates, and company news from Wavelength.",
  path: "/news",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <>
      {/* ---- Page intro ---- */}
      <Section tone="ink" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .news-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: news-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .news-card {
                opacity: 0;
                transform: translateY(32px);
                animation: news-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 2% cover 30%;
              }
            }
          }
          @keyframes news-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
          .news-card:nth-child(2) { animation-delay: 90ms; }
          .news-card:nth-child(3) { animation-delay: 180ms; }
        `}</style>

        <Container className="relative">
          <div className="news-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            News
          </div>
          <h1 className="news-reveal mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Project milestones and
            <span className="text-accent"> industry updates</span>.
          </h1>
        </Container>
      </Section>

      {/* ---- Featured article ---- */}
      <Section tone="paper">
        <Container>
          {featured ? (
            <Link
              href={`/news/${featured.slug}`}
              className="news-card group grid grid-cols-1 gap-x-10 gap-y-8 overflow-hidden rounded-sm md:grid-cols-12"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-mist md:col-span-7">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="md:col-span-5 md:self-center">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent-strong">
                  {featured.category} &middot; {formatDate(featured.date)}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-heading md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-body md:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-heading">
                  Read more
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ) : null}

          <div className="mt-16 grid grid-cols-1 gap-5 border-t border-line pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="news-card group relative overflow-hidden rounded-sm border border-line bg-mist/40 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-ink/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent-strong">
                    {article.category} &middot; {formatDate(article.date)}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-heading">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
