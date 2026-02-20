import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { SmartLink } from "../site/SmartLink";
import { ui } from "../../config/ui";
import { links } from "../../config/links";

export function ReferenceImpl() {
  return (
    <Section id="reference-impl" dividerTop>
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <h2 className={["text-2xl", ui.text.title].join(" ")}>Reference Implementation</h2>

        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
          A public reference implementation demonstrates deterministic reconstruction, snapshot hashing,
          and evidence-based verification. The goal is to enable independent replay and audit review.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Verify in 60 seconds</div>
            <ol className="mt-4 space-y-2 text-sm text-black/70">
              <li>1. Select snapshot hash</li>
              <li>2. Deterministically replay referenced inputs</li>
              <li>3. Compute canonical SHA-256 state hash</li>
              <li>4. Compare + generate report (PASS/FAIL)</li>
            </ol>
            <div className="mt-5">
              <SmartLink
                href={links.reference}
                className="text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
              >
                Open Reference Page
              </SmartLink>
            </div>
          </Card>

          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Artifacts</div>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <SmartLink
                href={links.docsPage}
                className="text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
              >
                Core Specification v1.0 (PDF)
              </SmartLink>
              <SmartLink
                href={links.docsPage}
                className="text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
              >
                Determinism — Formal Definition v1.0 (PDF)
              </SmartLink>
              <SmartLink
                href={links.docsPage}
                className="text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
              >
                Conformance Requirements v1.0 (PDF)
              </SmartLink>
            </div>

            <div className="mt-5 text-xs text-black/50">
              Additional governance and audit documents are available under the Reference page.
            </div>
          </Card>
        </div>

        <div className={`${ui.card.base} ${ui.card.pad}`}>
          <div className="text-sm text-black/50">Repositories</div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <SmartLink href={links.githubCore} external className="text-black/70 hover:text-black transition">
              GitHub — Core
            </SmartLink>
            <SmartLink href={links.githubReference} external className="text-black/70 hover:text-black transition">
              GitHub — Reference
            </SmartLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
