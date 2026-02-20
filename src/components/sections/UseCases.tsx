import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { ui } from "../../config/ui";

const cases = [
  {
    head: "Regulated AI systems",
    body:
      "Provide a reconstructible audit surface for systems operating under regulatory scrutiny. Snapshots enable evidence-based review of knowledge state.",
  },
  {
    head: "Incident forensics",
    body:
      "Reconstruct the knowledge state associated with an incident. Deterministic replay reduces reliance on operator memory and ad-hoc logs.",
  },
  {
    head: "Reproducible research",
    body:
      "Enable reproducible knowledge contexts for experiments. Snapshots and deterministic replay support verifiable replication of results.",
  },
  {
    head: "Governed knowledge bases",
    body:
      "Introduce explicit claims and uncertainty as governance objects. Versioned units support controlled change and review processes.",
  },
  {
    head: "Certifiable standards",
    body:
      "Define measurable conformance criteria: canonical encoding, hashing procedure, replay determinism, and verification reports.",
  },
  {
    head: "Enterprise AI substrate",
    body:
      "Separate the knowledge substrate from application logic. Use a deterministic, hash-identifiable state for internal assurance and external audits.",
  },
] as const;

export function UseCases() {
  return (
    <Section id="use-cases" dividerTop>
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <h2 className={["text-2xl", ui.text.title].join(" ")}>Use Cases</h2>
        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
          DigiEmu Core is intended as an infrastructure substrate. The following use cases follow from
          reconstructible state, deterministic replay, and snapshot-verifiable evidence.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.head} className={ui.card.pad}>
              <div className="text-sm font-semibold text-black">{c.head}</div>
              <div className="mt-3 text-sm leading-6 text-black/70">{c.body}</div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
