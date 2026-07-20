import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & { error?: boolean };

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full border-b border-line bg-transparent py-2.5 text-sm text-heading placeholder:text-body/50 transition-colors focus:border-accent-strong focus:outline-none",
        error && "border-red-500",
        className
      )}
      {...props}
    />
  );
}
