// app/contact/page.tsx
import * as React from "react";
import { Section } from "../../src/components/site/Section";
import { SmartLink } from "../../src/components/site/SmartLink";
import { links } from "../../src/config/links";

export const metadata = {
  title: "Contact — DigiEmu Core Public Standard",
  description: "Contact and coordination for researchers, institutions and enterprise partners.",
};

export default function ContactPage() {
  return (
    <main>
      <Section id="contact">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Header */}
          <div className="flex items-start gap-4">
            <picture className="hidden sm:block">
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
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                Contact
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-black/70">
                Preferred channel: public, technical threads with references. This is a public
                standard architecture surface — communication stays technical and evidence-oriented.
              </p>
            </div>
          </div>

          {/* Contact surface */}
          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <h2 className="text-base font-semibold text-black">Preferred channel</h2>

            <p className="mt-3 text-sm leading-relaxed text-black/70">
              For verification questions, audit artifacts, or coordination with researchers and
              institutions, please open a GitHub thread and include the relevant snapshot hash and
              repository references.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <SmartLink
                href={links.githubCore}
                external
                className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
              >
                Open an issue — Core
              </SmartLink>

              <SmartLink
                href={links.githubReference}
                external
                className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
              >
                Reference repo
              </SmartLink>

              <SmartLink
                href={links.reference}
                className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
              >
                Verification workflow
              </SmartLink>
            </div>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white px-4 py-3 text-xs leading-relaxed text-black/60">
              <div className="font-semibold text-black/70">When opening a thread, include</div>
              <ul className="mt-2 list-disc pl-5">
                <li>Snapshot hash (expected SHA-256)</li>
                <li>Referenced inputs / artifact links</li>
                <li>Environment details (OS, Go/Node version if relevant)</li>
                <li>Reproduction steps (minimal)</li>
              </ul>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-black/50">
              Sensitive disclosures: please do not post publicly. Add a security policy / private
              channel when ready.
            </p>
          </div>

          {/* Helpful links */}
          <div className="mt-6 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <h2 className="text-base font-semibold text-black">Quick links</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <SmartLink
                href={links.spec}
                className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
              >
                Spec
              </SmartLink>
              <SmartLink
                href={links.compliance}
                className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
              >
                Compliance
              </SmartLink>
              <SmartLink
                href={links.docsPage}
                className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
              >
                Docs
              </SmartLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
