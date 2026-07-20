import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site/site";
import { footerNav } from "@/config/navigation/nav";

const columns = [
  { title: "Company", links: footerNav.company },
  { title: "Work", links: footerNav.work },
  { title: "Legal", links: footerNav.legal },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-dark bg-ink text-body-dark">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.tagline}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Wavelength on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent"
            >
              in
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Wavelength on X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent"
            >
              X
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-dark">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-line-dark">
        <Container className="flex flex-col gap-4 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
            <span>
              {siteConfig.address.line1}, {siteConfig.address.line2}
            </span>
          </div>
        </Container>
      </div>

      <div className="flex justify-center pb-6 text-accent">
        <Icon name="hexagon" className="h-5 w-5" />
      </div>
    </footer>
  );
}
