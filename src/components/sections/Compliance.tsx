import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { ui } from "../../config/ui";

const guarantees = [
  {
    title: "Reconstructible state",
    body: "Given a snapshot and its referenced inputs, the knowledge state can be rebuilt deterministically.",
    tag: "State replay",
  },
  {
    title: "Cryptographic identifier",
    body: "The rebuilt state yields a SHA-256 hash that can be compared to the expected snapshot id.",
    tag: "Hash verification",
  },
  {
    title: "Evidence report",
    body: "Verification emits a minimal PASS/FAIL report with referenced inputs and computed hash.",
    tag: "Audit evidence",
  },
] as const;

const controls = [
  {
    title: "Traceability",
    body: "Snapshots reference explicit inputs (units, versions, claims). No hidden state is required for verification.",
  },
  {
    title: "Reproducibility",
    body: "Independent replay can be executed by third parties to confirm the same state identifier.",
  },
  {
    title: "Change governance",
    body: "Decision logs (DECs) and versioning allow auditors to review what changed, when, and why.",
  },
] as const;

const limits = [
  {
    title: "Model behavior is not proven",
    body: "A verified knowledge state does not prove a model’s internal reasoning or outputs are correct.",
  },
  {
    title: "Truth is not guaranteed",
    body: "Claims can be audited for provenance and structure, but factual correctness remains an epistemic task.",
  },
  {
    title: "Operational controls remain external",
    body: "Access control, incident response, and human oversight are required in addition to deterministic replay.",
  },
] as const;

export function Compliance() {
  return (
    <Section id="compliance">
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
              Compliance & Governance
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/70 leading-7 max-w-2xl">
              This is not a policy claim. It is a verification surface: what can be reconstructed,
              hashed, replayed, and evidenced.
            </p>
          </div>
          <div className="hidden sm:block text-xs text-black/40">Evidence-first</div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {guarantees.map((g) => (
            <Card key={g.title} className={ui.card.pad}>
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold tracking-tight text-black">{g.title}</div>
                <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs text-black/60">
                  {g.tag}
                </div>
              </div>
              <p className="mt-2 text-sm leading-6 text-black/70">{g.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Audit-relevant controls</div>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
              {controls.map((c) => (
                <li key={c.title}>
                  <div className="font-semibold text-black">{c.title}</div>
                  <div className="text-black/70">{c.body}</div>
                </li>
              ))}
            </ul>
          </Card>

          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Limits</div>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
              {limits.map((l) => (
                <li key={l.title}>
                  <div className="font-semibold text-black">{l.title}</div>
                  <div className="text-black/70">{l.body}</div>
                </li>
              ))}
            </ul>
          </Card>

          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Regulated AI contexts</div>
            <p className="mt-3 text-sm leading-6 text-black/70">
              Deterministic replay and snapshot evidence support audit workflows in regulated settings:
              incident forensics, reproducible research, governed knowledge bases, and risk documentation.
            </p>
            <div className="mt-4 grid gap-2">
              <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
                incident reconstruction
              </div>
              <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
                evidence trails
              </div>
              <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
                change governance
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
/* duplicate legacy content removed */
