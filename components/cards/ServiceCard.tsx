import type { Service } from "@/types/service";
import { Icon } from "@/components/ui/icons";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-accent">
      <div className="hex-clip flex h-12 w-12 items-center justify-center bg-accent-soft text-accent-strong transition-colors group-hover:bg-accent group-hover:text-ink">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-heading">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body">
        {service.description}
      </p>
    </div>
  );
}
