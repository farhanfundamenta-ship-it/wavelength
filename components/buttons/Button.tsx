import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Icon } from "@/components/ui/icons";

type ButtonVariant = "solid" | "outline" | "outline-light" | "ghost" | "ghost-light";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withArrow?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: "bg-accent text-ink hover:bg-accent-strong border border-transparent",
  outline: "border border-accent text-heading hover:bg-accent-soft",
  "outline-light": "border border-accent text-white hover:bg-white/5",
  ghost: "text-heading hover:text-accent",
  "ghost-light": "text-white hover:text-accent",
};

export function Button({
  children,
  variant = "solid",
  className,
  withArrow,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors",
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {withArrow ? <Icon name="arrowRight" className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
