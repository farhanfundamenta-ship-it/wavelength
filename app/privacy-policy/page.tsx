import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section tone="ink">
        <Container>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Legal
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-body-dark">Last updated: 20 July 2026</p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-body">
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) respects your privacy. This policy explains
              what information we collect through {siteConfig.url}, why we
              collect it, and what rights you have over it.
            </p>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                1. Information we collect
              </h2>
              <p className="mt-3">We collect information you provide directly to us, including:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-heading">Contact form submissions</strong> &mdash; name,
                  email, company, and message content.
                </li>
                <li>
                  <strong className="text-heading">Interactive tool submissions</strong> &mdash;
                  when you use the Readiness Assessment or Fuel Selection
                  Calculator, we collect your name, email, company, job title
                  (where provided), and your answers to the tool&rsquo;s
                  questions.
                </li>
                <li>
                  <strong className="text-heading">Careers applications</strong> &mdash; any
                  information you submit in connection with an open role.
                </li>
                <li>
                  <strong className="text-heading">Usage data</strong> &mdash; standard technical
                  data such as browser type, device type, and pages visited,
                  collected automatically through cookies and similar
                  technologies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                2. How we use your information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To respond to enquiries and provide requested reports or downloads.</li>
                <li>To follow up on interactive tool results with relevant engineering guidance.</li>
                <li>To operate, maintain, and improve the website.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                3. Cookies and tracking
              </h2>
              <p className="mt-3">
                We use cookies and similar technologies to operate the site
                and understand how it is used. You can control cookies
                through your browser settings; disabling them may affect some
                site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                4. Sharing your information
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share it
                with service providers who help us operate the site (such as
                email delivery, analytics, or CRM providers), and only to the
                extent necessary for them to perform those services on our
                behalf.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                5. Data retention
              </h2>
              <p className="mt-3">
                We retain personal information for as long as necessary to
                fulfil the purposes described in this policy, or as required
                by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                6. Your rights
              </h2>
              <p className="mt-3">
                Depending on where you are located, you may have the right to
                access, correct, delete, or object to our use of your
                personal information. To exercise any of these rights,
                contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                7. Data security
              </h2>
              <p className="mt-3">
                We use reasonable technical and organizational measures to
                protect your information. No method of transmission or
                storage is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                8. Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. The &ldquo;last
                updated&rdquo; date at the top of this page reflects the most
                recent changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-heading">
                9. Contact us
              </h2>
              <p className="mt-3">
                Questions about this policy or your information can be sent
                to{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-heading underline underline-offset-2">
                  {siteConfig.email}
                </a>{" "}
                or {siteConfig.address.line1}, {siteConfig.address.line2}.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
