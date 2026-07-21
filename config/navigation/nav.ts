import { sectors } from "@/data/industries/sectors";
import { services } from "@/data/services/services";

export interface HeaderNavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const headerNav: HeaderNavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "Industries",
    href: "/industries",
    children: sectors.map((sector) => ({
      label: sector.title,
      href: `/industries/${sector.slug}`,
    })),
  },
  {
    label: "Resources",
    children: [
      { label: "Blogs", href: "/news" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "Fuel Calculator", href: "/fuel-calculator" },
      { label: "Readiness Assessment", href: "/readiness-assessment" },
    ],
  },
  { label: "Careers", href: "/careers" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
  ],
  work: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Downloads", href: "/resources/downloads" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Licensed Partners", href: "/partners" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;
