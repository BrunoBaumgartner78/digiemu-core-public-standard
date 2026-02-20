"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SmartLink } from "./SmartLink";

export function MobileNav({
  nav,
  githubHref,
  contactHref,
}: {
  nav: readonly { label: string; href: string }[];
  githubHref: string;
  contactHref: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // ✅ close on route change (avoid direct setState in effect body)
  useEffect(() => {
    const id = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  // ✅ close on outside click + Escape + scroll
  useEffect(() => {
    if (!open) return;

    const onDown = (e: MouseEvent | TouchEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onScroll = () => setOpen(false);

    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  // ✅ optional: close if resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false); // sm breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = (href: string) => {
    // exact match for pages
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const itemClass = (active: boolean) =>
  [
    "relative rounded-xl px-3 py-2 text-sm transition hover:bg-black/[0.05]",
    active
      ? "!text-blue-600 !font-semibold before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-blue-500"
      : "text-black/80 hover:text-black",
  ].join(" ");


  return (
    <div ref={wrapRef} className="relative sm:hidden">
      {/* ✅ Menu button: text-only (no bg/border) */}
      <button
        type="button"
        className="text-sm font-medium text-black/70 hover:text-black"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        Menu
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-lg backdrop-blur"
        >
          <div className="flex flex-col">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={itemClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="my-1 h-px bg-black/10" />

            <SmartLink
              href={githubHref}
              external
              onClick={() => setOpen(false)}
              className={itemClass(false)}
            >
              GitHub
            </SmartLink>

            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className={itemClass(isActive(contactHref))}
              aria-current={isActive(contactHref) ? "page" : undefined}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}