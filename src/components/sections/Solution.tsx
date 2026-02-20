import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { Pill } from "../site/Pill";
import { ui } from "../../config/ui";

const pillars = [
  {
    head: "Deterministic knowledge layer",
    body:
      "DigiEmu Core defines a reconstructible knowledge substrate below AI applications. Knowledge state is treated as a deterministic object derived from admissible inputs.",
  },
  {
    head: "Versioned Units",
    body:
      "Knowledge is represented as Units with immutable Versions. Only versioned inputs are admissible for replay.",
  },
  {
    head: "Explicit Claims",
    body:
      "Assertions are represented explicitly as Claims and become part of the auditable state, rather than being implicit in model behavior.",
  },
  {
    head: "First-class Uncertainty",
    body:
      "Uncertainty is represented as data (bounds, confidence, incompleteness). It is explicit and audit-visible.",
  },
  {
    head: "SHA-256 snapshots",
    body:
      "A canonical encoding of the reconstructed state is hashed (SHA-256). The resulting snapshot hash is a verifiable state identifier.",
  },
  {
    head: "Tool-agnostic verification",
    body:
      "Independent implementations can replay the referenced inputs, reconstruct the state, compute the hash, and verify equality.",
  },
] as const;

export function Solution() {
  return (
    <Section id="solution" dividerTop>
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <h2 className={["text-2xl sm:text-3xl font-semibold tracking-tight", ui.text.title].join(" ")}>Solution</h2>

        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
          DigiEmu Core makes the knowledge state of an AI system reconstructible and verifiable.
          It introduces an explicit knowledge model (Units, Versions, Claims, Uncertainty) and defines
          deterministic reconstruction with cryptographic snapshots.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Pill>Versioned Units</Pill>
          <Pill>Claims</Pill>
          <Pill>Uncertainty</Pill>
          <Pill>SHA-256 Snapshot</Pill>
          <Pill>Deterministic Replay</Pill>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Card key={p.head} className={ui.card.pad}>
              <div className="text-sm font-semibold text-black">{p.head}</div>
              <div className="mt-3 text-sm leading-6 text-black/70">{p.body}</div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
          <div className="text-sm text-black/50">Invariant</div>
          <div className="mt-2 text-sm font-medium text-black">
            Same inputs → same reconstructed state → same hash.
          </div>
        </div>
      </div>
    </Section>
  );
}
