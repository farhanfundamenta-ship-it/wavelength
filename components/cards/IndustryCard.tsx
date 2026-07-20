import type { Industry } from "@/types/industry";
import { Icon } from "@/components/ui/icons";

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
      <div className="hex-clip flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-accent">
        <Icon name={industry.icon} className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-heading">
          {industry.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-body">
          {industry.description}
        </p>
      </div>
    </div>
  );
}
