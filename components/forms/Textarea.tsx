import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean };

export function Textarea({ className, error, rows = 6, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "w-full resize-none border-b border-line bg-transparent py-2.5 text-sm text-heading placeholder:text-body/50 transition-colors focus:border-accent-strong focus:outline-none",
        error && "border-red-500",
        className
      )}
      {...props}
    />
  );
}
