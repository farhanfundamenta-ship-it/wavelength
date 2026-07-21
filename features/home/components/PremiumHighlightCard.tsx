"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { Icon, type IconName } from "@/components/ui/icons";
import { cn } from "@/lib/utils/cn";

const NOISE_BG = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"
)}")`;

interface PremiumHighlightCardProps {
  index: number;
  category: string;
  title: string;
  body: string;
  icon: IconName;
  href: string;
  stat?: string;
  statLabel?: string;
  className?: string;
}

export function PremiumHighlightCard({
  index,
  category,
  title,
  body,
  icon,
  href,
  stat,
  statLabel,
  className,
}: PremiumHighlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  const glow = useTransform([mouseX, mouseY], ([x, y]) =>
    `radial-gradient(480px circle at ${x}px ${y}px, rgba(111,207,67,0.16), transparent 55%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[22px] border border-white/[0.08]",
        "bg-gradient-to-b from-ink-2 to-ink p-8",
        "shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)] transition-colors duration-500 hover:border-accent/40",
        className
      )}
    >
      {/* inner highlight, keeps the surface reading as a solid object, not a panel */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />

      {/* faint engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: NOISE_BG }}
      />

      {/* mouse-follow radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glow }}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span className="hex-clip flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10 text-accent transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:bg-accent group-hover:text-ink">
            <Icon name={icon} className="h-5 w-5" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-body-dark">
            {category}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white lg:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-body-dark">{body}</p>

        {stat ? (
          <div className="mt-6">
            <p className="text-3xl font-semibold tracking-tight text-white">{stat}</p>
            <p className="mt-1 text-xs leading-relaxed text-body-dark">{statLabel}</p>
          </div>
        ) : null}

        <div className="mt-auto pt-8">
          {/* animated technical-drawing baseline */}
          <div className="relative h-px w-full bg-white/[0.08]">
            <span className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
          </div>

          {/* CTA revealed progressively on hover */}
          <Link
            href={href}
            className="mt-5 flex max-h-0 items-center gap-2 overflow-hidden text-xs font-medium uppercase tracking-[0.15em] text-accent opacity-0 transition-all duration-400 ease-out group-hover:max-h-8 group-hover:opacity-100"
          >
            Learn more
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
