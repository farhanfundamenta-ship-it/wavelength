import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className }: LogoProps) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 text-sm font-semibold tracking-wide transition-colors duration-300",
        isLight ? "text-white" : "text-heading",
        className
      )}
    >
      <span
        className={cn(
          "hex-clip flex h-8 w-8 items-center justify-center text-sm font-bold transition-colors duration-300",
          isLight ? "bg-accent text-ink" : "bg-ink text-accent"
        )}
      >
        W
      </span>
      <span className="hidden sm:inline">Wavelength Technology Centre</span>
    </Link>
  );
}
