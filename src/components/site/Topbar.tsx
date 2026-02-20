"use client";

import { usePathname } from "next/navigation";
import { SmartLink } from "./SmartLink";
import { links } from "../../config/links";
import { ui } from "../../config/ui";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const nav: NavItem[] = [
  { label: "Spec", href: links.spec },
  { label: "Reference", href: links.reference },
  { label: "Architecture", href: links.architecture },
  { label: "Compliance", href: links.compliance },
  { label: "GitHub", href: links.githubCore, external: true },
  { label: "Contact", href: links.contact },
];

function isActive(pathname: string, href: string) {
  if (!href || href === "#") return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Topbar() {
  const pathname = usePathname() || "/";

  return (
    <div className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <SmartLink href="/" className="text-sm font-semibold tracking-tight text-black">
              DigiEmu Core
            </SmartLink>
            <span className="hidden sm:inline text-xs text-black/40">Public Standard</span>
          </div>

          <nav className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              const base = "rounded-xl px-3 py-2 text-sm transition";
              const activeCls = "bg-black/[0.04] text-black";
              const idleCls = "text-black/70 hover:text-black hover:bg-black/[0.03]";
              const cls = [base, active ? activeCls : idleCls].join(" ");

              return (
                <SmartLink
                  key={item.label}
                  href={item.href}
                  external={item.external}
                  className={cls}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </SmartLink>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
