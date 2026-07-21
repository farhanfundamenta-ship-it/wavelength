"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/ui/icons";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils/cn";
import { headerNav } from "@/config/navigation/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFloating(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scrolls with the document; spans the Hero height. Header floats once
          this leaves the viewport, so the Hero layout stays untouched. */}
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-screen w-px"
      />

      <header
        className={cn(
          "fixed inset-x-0 z-50 transition-all duration-[400ms] ease-out",
          floating ? "top-5 md:top-6" : "top-0"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-[400ms] ease-out",
            floating
              ? "max-w-6xl rounded-2xl border border-[#E5E7EB] bg-white/80 px-4 shadow-[0_12px_40px_-12px_rgba(10,15,12,0.25)] backdrop-blur-xl md:px-6"
              : "max-w-7xl border border-transparent bg-transparent px-6 shadow-none md:px-10"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-[400ms] ease-out",
              floating ? "h-14 md:h-16" : "h-16 md:h-20"
            )}
          >
            <Logo tone={floating ? "dark" : "light"} />

            <nav className="hidden items-center gap-7 md:flex lg:gap-9">
              {headerNav.map((item) => {
                const hasChildren = Boolean(item.children?.length);

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300",
                        floating
                          ? "text-body hover:text-heading"
                          : "text-white/70 hover:text-white"
                      )}
                    >
                      {item.label}
                      {hasChildren ? (
                        <Icon
                          name="arrowRight"
                          className={cn(
                            "h-3 w-3 rotate-90 transition-transform duration-200",
                            openDropdown === item.label && "-rotate-90"
                          )}
                        />
                      ) : null}
                    </Link>

                    {hasChildren && openDropdown === item.label ? (
                      /* pt-3 (not mt-3) keeps this box flush against the
                         trigger — a margin gap here would be a dead zone
                         the cursor exits through, firing the parent's
                         mouseleave before reaching the panel. */
                      <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                        <div
                          className={cn(
                            "rounded-xl border p-2 shadow-2xl backdrop-blur-xl",
                            floating
                              ? "border-[#E5E7EB] bg-white/95"
                              : "border-white/10 bg-ink/95"
                          )}
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors",
                                floating
                                  ? "text-body hover:bg-mist hover:text-heading"
                                  : "text-white/70 hover:bg-white/5 hover:text-white"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <Button
                href="/contact"
                variant={floating ? "solid" : "outline-light"}
                className="uppercase tracking-[0.15em]"
              >
                Contact
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 md:hidden",
                floating
                  ? "border-[#E5E7EB] text-heading"
                  : "border-white/15 text-white"
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>

          {open ? (
            <div
              className={cn(
                "border-t md:hidden",
                floating ? "border-[#E5E7EB]" : "border-white/10"
              )}
            >
              <div className="flex flex-col gap-1 py-4">
                {headerNav.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                        floating
                          ? "text-body hover:bg-mist hover:text-heading"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children?.length ? (
                      <div
                        className={cn(
                          "ml-3 flex flex-col gap-0.5 border-l pl-3",
                          floating ? "border-line" : "border-white/10"
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-colors",
                              floating
                                ? "text-body hover:bg-mist hover:text-heading"
                                : "text-white/60 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "mt-2 rounded-lg border px-3 py-3 text-center text-sm font-medium transition-colors",
                    floating
                      ? "border-accent bg-accent text-ink"
                      : "border-accent text-white"
                  )}
                >
                  Contact
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}
