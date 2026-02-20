import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { Pill } from "../site/Pill";
import { ui } from "../../config/ui";

const steps = [
  {
    n: "1",
    title: "Select snapshot",
    body:
      "Choose a snapshot hash and its referenced inputs (Units, Versions, Claims, Uncertainty).",
  },
  {
    n: "2",
    title: "Deterministic replay",
    body:
      "Reconstruct the canonical knowledge state from the referenced inputs using deterministic replay.",
  },
  {
    n: "3",
    title: "Compute SHA-256",
    body:
      "Serialize the reconstructed state using canonical encoding and compute the SHA-256 hash.",
  },
  {
    n: "4",
    title: "Compare + report",
    body:
      "Compare computed hash vs expected snapshot hash and generate a verification report (PASS/FAIL).",
  },
] as const;

export function SnapshotFlow() {
  return (
    <Section id="snapshot-flow" dividerTop>
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <h2 className={["text-2xl", ui.text.title].join(" ")}>Snapshot Verification</h2>

        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
          Verification is defined as deterministic reconstruction plus cryptographic hashing.
          The snapshot hash acts as a verifiable identifier of reconstructed knowledge state.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Pill>Replay</Pill>
          <Pill>Canonical Encoding</Pill>
          <Pill>SHA-256</Pill>
          <Pill>Evidence</Pill>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.n} className={ui.card.pad}>
              <div className="text-xs text-black/50">Step {s.n}</div>
              <div className="mt-2 text-base font-semibold text-black">{s.title}</div>
              <div className="mt-3 text-sm leading-6 text-black/70">{s.body}</div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
          <div className="text-sm text-black/50">Output</div>
          <div className="mt-2 text-sm leading-6 text-black/70">
            The verification result is binary:
            <span className="font-medium text-black"> PASS</span> if hashes match,
            <span className="font-medium text-black"> FAIL</span> otherwise.
            A report links snapshot, inputs, and computed evidence.
          </div>
        </div>
      </div>
    </Section>
  );
}
