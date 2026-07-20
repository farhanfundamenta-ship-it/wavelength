import type { InputHTMLAttributes, ReactNode } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
};

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 text-sm leading-relaxed text-body">
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 shrink-0 accent-accent-strong"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
