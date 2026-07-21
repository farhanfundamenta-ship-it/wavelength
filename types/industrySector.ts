import type { IconName } from "@/components/ui/icons";

export interface IndustrySector {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  image: string;
  secondaryImage: string;
  capabilities: string[];
  challenges: string[];
  stats: { value: string; label: string }[];
  approach: string;
  caseStudySlug?: string;
}
