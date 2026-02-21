import * as React from "react";
import { Section } from "../../src/components/site/Section";
import { SmartLink } from "../../src/components/site/SmartLink";
import { links } from "../../src/config/links";

export const metadata = {
  title: "Docs — DigiEmu Core Public Standard",
  description: "Technical artifacts and guidance for DigiEmu Core",
};

export default function DocsPage() {
  return (
    <main>
      <Section id="docs">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-semibold text-black">Docs</h1>

          <p className="mt-4 text-sm text-black/70">
            This page lists downloadable reference artifacts and guidance documents.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 id="test-strategy" className="text-xl font-semibold text-black">
                Test Strategy
              </h2>
              <p className="mt-2 text-sm text-black/70">
                The test strategy describes verification workflows and acceptance
                criteria. Download the enterprise draft below.
              </p>
              <div className="mt-3 flex gap-2">
                <SmartLink href={links.artifacts.verifyAuditSpec} external>
                  Audit Verification Framework (PDF)
                </SmartLink>
                <SmartLink href={links.docs.conformance} external>
                  Conformance Requirements (PDF)
                </SmartLink>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">Other Artifacts</h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <SmartLink href={links.docs.specification} external>
                  Specification (PDF)
                </SmartLink>
                <SmartLink href={links.docs.determinismFormal} external>
                  Determinism (Formal) (PDF)
                </SmartLink>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
