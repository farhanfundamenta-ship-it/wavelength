import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `The terms that govern use of ${siteConfig.url}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Section tone="ink">
        <Container>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Legal
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-body-dark">Last updated: 20 July 2026</p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-body">
            <p>
              These terms govern your use of {siteConfig.url} (the
              &ldquo;site&rdquo;), operated by {siteConfig.name}. By using the
              site, you agree to these terms.
            </p>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                1. Acceptance of terms
              </h2>
              <p className="mt-3">
                By accessing or using the site, you agree to be bound by
                these terms. If you do not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                2. Use of the website
              </h2>
              <p className="mt-3">
                You agree to use the site only for lawful purposes and in a
                way that does not infringe the rights of, or restrict or
                inhibit the use and enjoyment of, the site by anyone else.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                3. Interactive tools and assessments
              </h2>
              <p className="mt-3">
                The Readiness Assessment, Fuel Selection Calculator, and any
                similar interactive tools on this site produce{" "}
                <strong className="text-heading">directional, informational output</strong> based
                on the answers you provide. Results, scores, and
                recommendations are not a substitute for a formal engineering
                evaluation and should not be relied upon as professional
                engineering, financial, or regulatory advice. We make no
                warranty as to the completeness or accuracy of any output
                these tools generate.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                4. Intellectual property
              </h2>
              <p className="mt-3">
                All content on this site, including text, graphics, logos,
                and downloadable materials, is the property of{" "}
                {siteConfig.name} or its licensors and is protected by
                applicable intellectual property laws. You may not reproduce,
                distribute, or create derivative works from this content
                without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                5. User submissions
              </h2>
              <p className="mt-3">
                Any information you submit through contact forms, interactive
                tools, or applications is handled in accordance with our{" "}
                <a href="/privacy-policy" className="text-heading underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                6. Third-party links
              </h2>
              <p className="mt-3">
                This site may link to third-party websites. We are not
                responsible for the content, accuracy, or practices of any
                third-party site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                7. Limitation of liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {siteConfig.name}{" "}
                shall not be liable for any indirect, incidental, or
                consequential damages arising from your use of the site or
                reliance on any content, tool output, or downloadable
                material provided through it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                8. Governing law
              </h2>
              <p className="mt-3">
                These terms are governed by the laws of Portugal, without
                regard to conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                9. Changes to these terms
              </h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use of
                the site after changes take effect constitutes acceptance of
                the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                10. Contact us
              </h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-heading underline underline-offset-2">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
