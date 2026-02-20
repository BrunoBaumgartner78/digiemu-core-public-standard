import Link from "next/link";
import { links } from "../../config/links";
import { SmartLink } from "./SmartLink";
import { MobileNav } from "./MobileNav";

const nav = [
  { label: "Spec", href: links.spec },
  { label: "Reference", href: links.reference },
  { label: "Architecture", href: links.architecture },
  { label: "Compliance", href: links.compliance },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
       <Link href="/" className="group flex items-center gap-3 text-black">

<span
  className="core-mark relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-sm"
  aria-hidden="true"
/> 


          <div className="leading-tight">
            <div className="font-semibold tracking-tight">DigiEmu Core</div>
            <div className="text-xs text-black/50">Public Standard</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 text-sm sm:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-2 py-1 text-black/70 transition hover:bg-black/[0.04] hover:text-black"
            >
              {item.label}
            </Link>
          ))}

          <div className="mx-1 h-5 w-px bg-black/10" />

          <SmartLink
            href={links.githubCore}
            external
            className="rounded-md px-2 py-1 text-black/70 transition hover:bg-black/[0.04] hover:text-black"
          >
            GitHub
          </SmartLink>

          <SmartLink
            href={links.contact}
            className="rounded-md px-2 py-1 text-black/70 transition hover:bg-black/[0.04] hover:text-black"
          >
            Contact
          </SmartLink>
        </nav>

        {/* Mobile nav */}
        <MobileNav nav={nav} githubHref={links.githubCore} contactHref={links.contact} />
      </div>
    </header>
  );
}
