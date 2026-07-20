import type { Metadata } from "next";
import { siteConfig } from "@/config/site/site";

interface BuildMetadataInput {
  title: string;
  description?: string;
  path?: string;
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
