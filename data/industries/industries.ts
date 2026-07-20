import type { Industry } from "@/types/industry";

export const industries: Industry[] = [
  {
    slug: "maritime-shipping",
    title: "Maritime & Shipping",
    description:
      "Propulsion and fuel systems that help shipowners meet emissions targets without giving up uptime.",
    icon: "ship",
  },
  {
    slug: "ports-terminals",
    title: "Ports & Terminals",
    description:
      "Cargo and bunkering infrastructure built for the next generation of marine fuels and gases.",
    icon: "container",
  },
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    description:
      "Storage and power-conversion systems that help utilities firm up renewable generation at scale.",
    icon: "bolt",
  },
  {
    slug: "heavy-industry",
    title: "Heavy Industry",
    description:
      "Process-heat and biogas systems that cut carbon intensity in hard-to-electrify industrial plants.",
    icon: "factory",
  },
];
