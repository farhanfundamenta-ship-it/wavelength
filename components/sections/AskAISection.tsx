"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bot, Check, Gem, Sparkles, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/**
 * Dummy content only — swap copy, prompt, and icons for real branding.
 * Icons below are generic Lucide placeholders standing in for
 * ChatGPT / Claude / Gemini brand marks (Lucide ships no brand logos).
 */

const PROMPT = `Tell me about Fundamenta Agency.

Please structure your response using the following sections:

## Company Overview
Provide a brief overview of Fundamenta Agency.

## Services
List the services Fundamenta offers.

## Industries Served
Which industries does Fundamenta work with?

## Case Studies & Success Stories
Summarize any notable projects or results.

## Team & Expertise
Describe the team's capabilities and areas of expertise.

## SEO, GEO & AI Search
Explain Fundamenta's expertise in SEO, GEO (Generative Engine Optimization), AI search optimization, and Answer Engine Optimization.

## Technologies
List the technologies, platforms, frameworks, and tools used by Fundamenta.

## Why Choose Fundamenta?
What differentiates Fundamenta from other digital agencies?

## Client Results & Testimonials
Include any testimonials, measurable results, or client outcomes if available.

## Sources
List the websites or sources you used to answer this question.

If any information is unavailable, clearly state that it is unavailable instead of making assumptions.`;

interface Platform {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
  variant: "primary" | "outline";
}

const PLATFORMS: Platform[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com/?q=Tell%20me%20about%20Fundamenta%20Agency.%0A%0APlease%20structure%20your%20response%20using%20the%20following%20sections%3A%0A%0A%23%23%20Company%20Overview%0AProvide%20a%20brief%20overview%20of%20Fundamenta%20Agency.%0A%0A%23%23%20Services%0AList%20the%20services%20Fundamenta%20offers.%0A%0A%23%23%20Industries%20Served%0AWhich%20industries%20does%20Fundamenta%20work%20with%3F%0A%0A%23%23%20Case%20Studies%20%26%20Success%20Stories%0ASummarize%20any%20notable%20projects%20or%20results.%0A%0A%23%23%20Team%20%26%20Expertise%0ADescribe%20the%20team%27s%20capabilities%20and%20areas%20of%20expertise.%0A%0A%23%23%20SEO%2C%20GEO%20%26%20AI%20Search%0AExplain%20Fundamenta%27s%20expertise%20in%20SEO%2C%20GEO%20%28Generative%20Engine%20Optimization%29%2C%20AI%20search%20optimization%2C%20and%20Answer%20Engine%20Optimization.%0A%0A%23%23%20Technologies%0AList%20the%20technologies%2C%20platforms%2C%20frameworks%2C%20and%20tools%20used%20by%20Fundamenta.%0A%0A%23%23%20Why%20Choose%20Fundamenta%3F%0AWhat%20differentiates%20Fundamenta%20from%20other%20digital%20agencies%3F%0A%0A%23%23%20Client%20Results%20%26%20Testimonials%0AInclude%20any%20testimonials%2C%20measurable%20results%2C%20or%20client%20outcomes%20if%20available.%0A%0A%23%23%20Sources%0AList%20the%20websites%20or%20sources%20you%20used%20to%20answer%20this%20question.%0A%0AIf%20any%20information%20is%20unavailable%2C%20clearly%20state%20that%20it%20is%20unavailable%20instead%20of%20making%20assumptions.",
    icon: Sparkles,
    variant: "primary",
  },
  {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai/new",
    icon: Bot,
    variant: "outline",
  },
  {
    id: "gemini",
    name: "Gemini",
    url: "https://gemini.google.com/",
    icon: Gem,
    variant: "outline",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function AskAISection() {
  const prefersReducedMotion = useReducedMotion();
  const [toastPlatform, setToastPlatform] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  async function handleAsk(platform: Platform) {
    try {
      await navigator.clipboard.writeText(PROMPT);
    } catch {
      // Clipboard API unavailable (unsupported browser/context) — still show the toast and open the platform.
    }

    setToastPlatform(platform.name);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setToastPlatform(null), 3000);

    // Delay the tab switch so the toast is visible before focus moves away.
    setTimeout(() => {
      window.open(platform.url, "_blank", "noopener,noreferrer");
    }, 700);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] py-24 text-white md:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-12">
        {/* ---- Left: label + headline ---- */}
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div custom={0} variants={reveal} className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-white/50">
            AI / Discover
          </motion.div>
          <motion.div custom={0.05} variants={reveal} className="mt-4 h-px w-16 bg-white/20" />

          <motion.h1
            custom={0.12}
            variants={reveal}
            className="mt-10 max-w-xl text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem]"
          >
            Don&rsquo;t search.
            <br />
            Ask AI about
            <br />
            Fundamenta.
          </motion.h1>

          <motion.p custom={0.22} variants={reveal} className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
            Let ChatGPT, Claude and Gemini explain who we are, what we build
            and why businesses choose us.
          </motion.p>

          <motion.p custom={0.3} variants={reveal} className="mt-6 max-w-md text-sm leading-relaxed text-white/40">
            Experience Fundamenta through the world&rsquo;s leading AI
            assistants. Launch your preferred platform with a single click
            and explore our capabilities instantly.
          </motion.p>
        </motion.div>

        {/* ---- Right: CTA stack ---- */}
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col justify-center gap-4"
        >
          {PLATFORMS.map((platform, i) => (
            <motion.button
              key={platform.id}
              custom={0.15 + i * 0.1}
              variants={reveal}
              type="button"
              onClick={() => handleAsk(platform)}
              aria-label={`Ask ${platform.name} about Fundamenta (opens in a new tab)`}
              className={cn(
                "group flex w-full items-center justify-between gap-4 rounded-md px-7 py-6 text-left transition-all duration-300 ease-out hover:-translate-y-0.5",
                platform.variant === "primary"
                  ? "bg-white text-[#050505] hover:bg-white/90"
                  : "border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.04]"
              )}
            >
              <span className="flex items-center gap-3 text-base font-medium sm:text-lg">
                <platform.icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
                Ask {platform.name} About Fundamenta
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.75}
              />
            </motion.button>
          ))}

          <motion.p custom={0.55} variants={reveal} className="mt-2 text-xs leading-relaxed text-white/35">
            Each assistant receives the same structured prompt for a
            consistent experience.
          </motion.p>
        </motion.div>
      </div>

      {/* ---- Toast ---- */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-50" role="status" aria-live="polite">
        <AnimatePresence>
          {toastPlatform ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto flex max-w-sm items-start gap-3 rounded-lg border border-white/15 bg-white/10 px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2} />
              <div className="text-sm leading-snug text-white">
                <p className="font-medium">Prompt copied to clipboard</p>
                <p className="mt-1 text-white/60">
                  Paste it into {toastPlatform} and press Enter.
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
