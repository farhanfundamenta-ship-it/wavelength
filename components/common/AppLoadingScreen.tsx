"use client";

import { useEffect, useState } from "react";
import { LoadingMark } from "@/components/common/LoadingMark";
import { cn } from "@/lib/utils/cn";

const HOLD_MS = 2000;
const FADE_MS = 500;

export function AppLoadingScreen() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), HOLD_MS);
    const unmountTimer = setTimeout(() => setMounted(false), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden={fading}
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink transition-opacity ease-out",
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <LoadingMark />
    </div>
  );
}
