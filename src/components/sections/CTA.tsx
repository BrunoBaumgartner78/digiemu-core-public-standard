import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { ButtonLink } from "../site/ButtonLink";
import { SmartLink } from "../site/SmartLink";
import { ui } from "../../config/ui";
import { links } from "../../config/links";

export function CTA() {
  return (
    <Section id="cta" dividerTop>
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <h2 className={["text-2xl", ui.text.title].join(" ")}>Engage</h2>
        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
          DigiEmu Core is a deterministic knowledge standard intended for verification and governance.
          Engagement paths differ by context.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className={ui.card.pad}>
            <div className="text-sm font-semibold text-black">Researchers</div>
            <div className="mt-3 text-sm leading-6 text-black/70">
              Evaluate the model, replay procedure, and evidence format. Use snapshots for reproducible experiments.
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={links.spec} variant="secondary">
                Read the Spec
              </ButtonLink>
              <SmartLink
                href={links.docs.determinismFormal}
                className="text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
              >
                Determinism Formal Definition (PDF)
              </SmartLink>
            </div>
          </Card>

          <Card className={ui.card.pad}>
            <div className="text-sm font-semibold text-black">Institutions</div>
            <div className="mt-3 text-sm leading-6 text-black/70">
              Adopt the governance surface: versioned units, decision logs, audit procedures, and conformance requirements.
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={links.reference} variant="secondary">
                Reference Page
              </ButtonLink>
              <SmartLink
                href={links.docs.governance}
                className="text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
              >
                Governance Framework (PDF)
              </SmartLink>
            </div>
          </Card>

          <Card className={ui.card.pad}>
            <div className="text-sm font-semibold text-black">Enterprise partners</div>
            <div className="mt-3 text-sm leading-6 text-black/70">
              Evaluate deterministic replay and snapshot verification as a compliance substrate for regulated deployments
              and incident reconstruction.
            </div>
            <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={links.reference} variant="primary">
                  Validate a Snapshot
                </ButtonLink>

              <SmartLink
                href={links.compliance}
                className="text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
              >
                Compliance & Governance
              </SmartLink>

              <SmartLink href={links.contact} className="text-sm text-black/70 hover:text-black transition">
                Contact
              </SmartLink>
            </div>
          </Card>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
          <div className="text-sm text-black/50">Note</div>
          <div className="mt-2 text-sm leading-6 text-black/70">
            The standard is designed to be independently replayable. Verification does not require privileged access
            beyond the referenced inputs and the published procedure.
            {" "}
            Evidence is designed to be audit-ready (replayable inputs, deterministic hash comparison, and human-reviewable reports).
          </div>
        </div>
      </div>
    </Section>
  );
}
