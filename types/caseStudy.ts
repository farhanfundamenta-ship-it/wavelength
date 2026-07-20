import type { IconName } from "@/components/ui/icons";

export interface CaseStudy {
  slug: string;
  title: string;
  sector: string;
  location: string;
  icon: IconName;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
}
