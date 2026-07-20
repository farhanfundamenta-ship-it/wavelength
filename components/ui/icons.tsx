import type { ReactElement, SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type IconName =
  | "fuel"
  | "anchor"
  | "battery"
  | "shuffle"
  | "thermometer"
  | "leaf"
  | "ship"
  | "container"
  | "bolt"
  | "factory"
  | "shield"
  | "compass"
  | "trendingUp"
  | "globe"
  | "menu"
  | "close"
  | "arrowRight"
  | "hexagon";

type IconProps = SVGProps<SVGSVGElement>;

const paths: Record<IconName, ReactElement> = {
  fuel: (
    <>
      <path d="M6 21V9a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v12" />
      <path d="M4 21h11" />
      <path d="M15 8.5 18 11a2 2 0 0 1 .6 1.4V18a1.5 1.5 0 0 1-3 0v-1" />
      <circle cx="9.5" cy="6" r="1.4" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <line x1="12" y1="7" x2="12" y2="21" />
      <path d="M5 12a7 7 0 0 0 14 0" />
      <line x1="7" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="17" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <line x1="21" y1="10" x2="21" y2="14" />
      <path d="M9 9.5 7 13h3l-1.5 3.5" />
    </>
  ),
  shuffle: (
    <>
      <path d="M4 6h4l9 12h3" />
      <path d="M4 18h4l3-4" />
      <path d="M14 6h6" />
      <path d="M17 3l3 3-3 3" />
      <path d="M17 15l3 3-3 3" />
    </>
  ),
  thermometer: (
    <>
      <path d="M12 3a2 2 0 0 0-2 2v9.5a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2Z" />
      <line x1="12" y1="9" x2="12" y2="15" />
      <path d="M15.5 6.5 18 4" />
      <path d="M17 9.5 19.5 8" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 20c8 1 13-4 14-13-9-1-14 4-14 13Z" />
      <path d="M6 19c3-4 6-7 12-11" />
    </>
  ),
  ship: (
    <>
      <path d="M4 15h16l-2 5H6l-2-5Z" />
      <path d="M6 15V8h4" />
      <line x1="12" y1="4" x2="12" y2="15" />
      <path d="M12 6h4l1 4" />
    </>
  ),
  container: (
    <>
      <rect x="3" y="5" width="8" height="6" rx="1" />
      <rect x="13" y="5" width="8" height="6" rx="1" />
      <rect x="3" y="13" width="8" height="6" rx="1" />
      <rect x="13" y="13" width="8" height="6" rx="1" />
    </>
  ),
  bolt: <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />,
  factory: (
    <>
      <path d="M3 21V11l5 3v-3l5 3v-3l6 3.5V21Z" />
      <line x1="3" y1="21" x2="21" y2="21" />
      <line x1="7" y1="8" x2="7" y2="4" />
      <line x1="11" y1="8" x2="11" y2="4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  trendingUp: (
    <>
      <polyline points="4 16 10 10 14 14 20 6" />
      <polyline points="14 6 20 6 20 12" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  menu: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </>
  ),
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  ),
  arrowRight: (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </>
  ),
  hexagon: <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" />,
};

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  return (
    <svg {...base} {...props}>
      {paths[name]}
    </svg>
  );
}
