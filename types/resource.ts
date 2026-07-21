import type { IconName } from "@/components/ui/icons";

export type ResourceCategory = "guide" | "case-study" | "insight" | "download";

export interface Resource {
  slug: string;
  category: ResourceCategory;
  title: string;
  description: string;
  icon: IconName;
  meta: string;
}
