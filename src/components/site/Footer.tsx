// src/components/site/Footer.tsx
import { links } from "../../config/links";
import { ui } from "../../config/ui";
import { SmartLink } from "./SmartLink";

const artifacts = [
  { label: "VERIFY_AUDIT_SPEC", href: links.artifacts.verifyAuditSpec, enabled: true },
  { label: "TEST_STRATEGY", href: links.artifacts.testStrategy, enabled: true },
  { label: "DEC_LOG", href: links.artifacts.decLog, external: true, enabled: true },
] as const;

export function Footer() {
  return (
    <footer className={["mt-16", ui.divider].join(" ")}>
      <div className={["mx-auto", ui.layout.max, ui.layout.px, "py-10"].join(" ")}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <SmartLink href={links.spec} className="text-sm text-black/70 hover:text-black transition">
              Spec
            </SmartLink>
            <span className="text-black/30">•</span>
            <SmartLink href={links.reference} className="text-sm text-black/70 hover:text-black transition">
              Reference
            </SmartLink>
            <span className="text-black/30">•</span>
            <SmartLink href={links.docsPage} className="text-sm text-black/70 hover:text-black transition">
              Docs
            </SmartLink>
            <span className="text-black/30">•</span>
            <SmartLink href={links.githubCore} external className="text-sm text-black/70 hover:text-black transition">
              GitHub
            </SmartLink>
            <span className="text-black/30">•</span>
            <SmartLink href="/privacy" className="text-sm text-black/70 hover:text-black transition">
              Privacy
            </SmartLink>
            <span className="text-black/30">•</span>
            <SmartLink href="/imprint" className="text-sm text-black/70 hover:text-black transition">
              Imprint
            </SmartLink>
          </div>

          <div className="text-xs text-black/50">
            Snapshot-verifiable state • Deterministic replay • Audit evidence
          </div>

          {/* Artifacts */}
          <div className="flex flex-wrap items-center gap-2">
            {artifacts.map((a) => {
              const classes =
                "text-xs rounded-full border border-black/10 bg-white px-2 py-1 transition";

              if (!a.enabled) {
                return (
                  <span
                    key={a.label}
                    className={[classes, "text-black/35 opacity-70 cursor-not-allowed"].join(" ")}
                    title="Coming soon"
                    aria-disabled="true"
                  >
                    {a.label}
                  </span>
                );
              }

              const isExternal = (a as unknown as { external?: boolean }).external ?? false;

              return (
                <SmartLink
                  key={a.label}
                  href={a.href}
                  external={isExternal}
                  className={[classes, "text-black/70 hover:text-black hover:bg-black/[0.03]"].join(" ")}
                >
                  {a.label}
                </SmartLink>
              );
            })}
          </div>

          {/* Brand / Copyright */}
          <div className="flex items-center gap-3 text-xs text-black/50">
            <picture>
              <source media="(prefers-color-scheme: dark)" srcSet="/brand/logo-dark.webp" />
              <img
                src="/brand/logo-light.webp"
                alt="DigiEmu Core"
                width={148}
                height={148}
                className="h-[148px] w-[148px]"
                loading="lazy"
              />
            </picture>
            <span>© {new Date().getFullYear()} DigiEmu Core</span>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 pb-6">
        <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-xs text-black/60 backdrop-blur">
          <span className="font-medium text-black/70">Signals:</span>{" "}
          WCAG 2.2 AA (target), EU AI Act structural mapping, deterministic replay & snapshot verification.
        </div>
      </div>
    </footer>
  );
}
