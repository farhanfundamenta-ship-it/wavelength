import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/buttons/Button";
import { Icon, type IconName } from "@/components/ui/icons";
import { siteConfig } from "@/config/site/site";
import { ContactForm } from "@/features/contact/components/ContactForm";

const steps: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Discovery call",
    body: "A 30-minute conversation to understand your operation, constraints, and what a workable outcome looks like.",
    icon: "compass",
  },
  {
    title: "Tailored proposal",
    body: "A scoped engineering approach with a clear timeline and cost — no generic package, no obligation.",
    icon: "shield",
  },
  {
    title: "Engineering kickoff",
    body: "Once you're ready, our engineers start on concept development with your team from day one.",
    icon: "bolt",
  },
];

const faqs = [
  {
    question: "How quickly can you start on a new project?",
    answer:
      "Most engagements begin with a discovery call within a week of first contact. Detailed engineering typically kicks off within a month, depending on scope.",
  },
  {
    question: "Do you work with international clients and offshore teams?",
    answer:
      "Yes. We support maritime and industrial clients worldwide, and coordinate directly with in-house engineering teams and licensed fabrication partners across regions.",
  },
  {
    question: "What happens during the discovery call?",
    answer:
      "We walk through your current systems, the outcome you're targeting, and any regulatory or operational constraints — enough for us to scope a proposal without back-and-forth.",
  },
  {
    question: "Can you integrate with our existing engineering team?",
    answer:
      "Yes, we regularly work alongside in-house teams — either leading specific workstreams or supporting your engineers on the parts that need our expertise.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Wavelength Technology Centre's engineering team about your next decarbonisation project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section tone="ink">
        <Container>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Contact
          </div>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Let&rsquo;s talk about your
            <span className="text-accent"> next project</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-body-dark md:text-lg">
            Whether you&rsquo;re exploring a new decarbonisation programme or
            need engineering support on an existing asset, our team is ready
            to help.
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <div className="border-t border-heading/80 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-body">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-lg font-medium text-heading transition-colors hover:text-accent-strong"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="mt-10 border-t border-heading/80 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-body">
                  Office
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </p>
              </div>

              <div className="mt-10 border-t border-heading/80 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-body">
                  Follow
                </p>
                <div className="mt-3 flex gap-5">
                  <a
                    href={siteConfig.social.linkedin}
                    className="text-sm text-body transition-colors hover:text-accent-strong"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    className="text-sm text-body transition-colors hover:text-accent-strong"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- What happens next: sets expectations post-submission —
          nurture step, will eventually link into a booking/CRM funnel. ---- */}
      <Section tone="mist" className="relative overflow-hidden">
        <style>{`
          @supports (animation-timeline: view()) {
            @media (prefers-reduced-motion: no-preference) {
              .con-reveal {
                opacity: 0;
                transform: translateY(28px);
                animation: con-reveal-in linear both;
                animation-timeline: view();
                animation-range: entry 4% cover 26%;
              }
              .con-row:nth-child(2) { animation-delay: 90ms; }
              .con-row:nth-child(3) { animation-delay: 180ms; }
            }
          }
          @keyframes con-reveal-in {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Container>
          <div className="con-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            What happens next
          </div>
          <h2 className="con-reveal mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            From first message to engineering kickoff
          </h2>

          <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-line md:block"
            />
            {steps.map((step) => (
              <div key={step.title} className="con-reveal con-row relative">
                <span className="hex-clip relative z-10 flex h-11 w-11 items-center justify-center bg-ink text-accent">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-heading">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- FAQ: pre-sale objection handling — keeps the lead moving
          instead of bouncing. Native <details>/<summary>, no JS. ---- */}
      <Section tone="paper">
        <style>{`
          .con-faq summary::-webkit-details-marker {
            display: none;
          }
          .con-faq summary {
            list-style: none;
          }
          .con-faq .con-faq-icon {
            transform: rotate(45deg);
            transition: transform 300ms ease-out;
          }
          .con-faq details[open] .con-faq-icon {
            transform: rotate(0deg);
          }
        `}</style>

        <Container>
          <div className="con-reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-body">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            FAQ
          </div>
          <h2 className="con-reveal mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            Common questions before you reach out
          </h2>

          <div className="con-faq mt-14 max-w-3xl">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="con-reveal group border-t border-heading/80 py-6 last:border-b"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg font-medium tracking-tight text-heading">
                  {faq.question}
                  <Icon
                    name="close"
                    className="con-faq-icon h-4 w-4 shrink-0 text-accent-strong"
                  />
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-body">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="con-reveal mt-12 flex flex-col items-start gap-4 border-t border-heading/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-body">
              Still have questions? Skip the form and book time directly.
            </p>
            {/* Dummy funnel entry — wire to a real scheduler (Calendly, HubSpot, etc.) later */}
            <Button href="#" variant="outline" withArrow>
              Book a Discovery Call
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
