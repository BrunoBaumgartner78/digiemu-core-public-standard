export const ui = {
  layout: {
    max: "max-w-6xl",
    px: "px-5 sm:px-6 lg:px-8",
    section: "py-24 sm:py-28",
    hero: "py-16 sm:py-24",
    grid2: "grid gap-4 sm:grid-cols-2",
    grid3: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
  },
  text: {
    title: "text-black font-semibold",
    sub: "text-black/70",
    meta: "text-black/50",
    muted: "text-black/60",
  },
  card: {
    // more premium shadow curve + subtle border
    base:
      "rounded-2xl border border-neutral-200/80 bg-white " +
      "shadow-[0_1px_0_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.05)] " +
      "transition will-change-transform",
    pad: "p-6 sm:p-7",
    head: "text-sm text-neutral-500",
    body: "mt-2 text-[15px] leading-6 text-neutral-800",
    hover: "hover:bg-black/[0.02] transition",
  },
  pill: {
    base:
      "inline-flex items-center rounded-full border border-black/10 bg-white " +
      "px-2.5 py-1 text-xs text-black/60",
  },
  button: {
    base:
      "inline-flex items-center justify-center rounded-xl border border-neutral-300/90 " +
      "bg-white px-4 py-2 text-sm font-medium text-neutral-900 " +
      "shadow-[0_1px_0_rgba(0,0,0,0.05),0_10px_24px_rgba(0,0,0,0.05)] " +
      "hover:bg-neutral-50 hover:shadow-[0_1px_0_rgba(0,0,0,0.05),0_14px_30px_rgba(0,0,0,0.06)] " +
      "active:translate-y-[0.5px] transition",
    primary:
      "inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm " +
      "font-medium text-white hover:bg-black/90 transition",
    secondary:
      "inline-flex items-center justify-center rounded-xl border border-black/15 bg-white " +
      "px-4 py-2 text-sm font-medium text-black hover:bg-black/[0.05] transition",
  },
  badge: {
    base:
      "inline-flex items-center rounded-full border border-neutral-200 bg-white " +
      "px-2 py-0.5 text-xs text-neutral-600 shadow-[0_1px_0_rgba(0,0,0,0.03)]",
  },
  hr: "border-neutral-200/70",
  divider: "border-t border-neutral-200/70",
} as const;
