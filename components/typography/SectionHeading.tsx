import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className={isDark ? "text-body-dark" : "text-body"}>
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold leading-tight tracking-tight md:text-4xl",
          isDark ? "text-white" : "text-heading"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            isDark ? "text-body-dark" : "text-body"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
