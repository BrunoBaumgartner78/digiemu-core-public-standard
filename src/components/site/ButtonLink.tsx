import Link from "next/link";
import * as React from "react";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({ href, children, variant = "secondary", className }: Props) {
  const variants = {
    primary:
      "rounded-xl bg-black px-4 py-3 min-h-[44px] text-sm font-semibold text-white !text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30",
    secondary:
      "rounded-xl border border-black/15 bg-white px-4 py-3 min-h-[44px] text-sm text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20",
  } as const;

  const cls = variant === "primary" ? variants.primary : variants.secondary;
  return (
    <Link href={href} className={[cls, className ?? ""].join(" ")}>
      {children}
    </Link>
  );
}
