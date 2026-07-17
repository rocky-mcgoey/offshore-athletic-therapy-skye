import type { Metadata } from "next";
import { siteContent } from "@/data/site";

/**
 * Builds consistent metadata for every page.
 * Each page only needs to provide the page-specific title, description, and path.
 */
export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | ${siteContent.businessName}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "en_CA",
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
