import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "w-full border-b border-line bg-transparent py-2.5 text-sm text-heading transition-colors focus:border-accent-strong focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
