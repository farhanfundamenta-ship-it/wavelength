# Framework-Integration Utilities

Utilities that exist to support the lib/ ecosystem: cn() (clsx + tailwind-merge), a typed fetch wrapper, type guards used by providers/hooks. Distinction from the root utils/ folder: everything here is allowed to depend on a library (clsx, tailwind-merge, etc). Root utils/ must stay dependency-free.
