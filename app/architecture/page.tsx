import { Section } from "../../src/components/site/Section";
import { Card } from "../../src/components/site/Card";
import { Pill } from "../../src/components/site/Pill";
import { ui } from "../../src/config/ui";

export const metadata = {
  title: "Architecture — DigiEmu Core Public Standard",
  description:
    "Write path, deterministic replay, and snapshot verification flow — same inputs yield the same reconstructed state hash.",
};
 

const writePath = [
  "Ingest Units (structured knowledge objects)",
  "Create immutable Versions",
  "Attach explicit Claims",
  "Represent Uncertainty as first-class data",
  "Produce canonical state encodings",
  "Emit snapshot references (append-only evidence)",
] as const;

const replayPath = [
  "Select snapshot hash",
  "Resolve referenced inputs (Units/Versions/Claims/Uncertainty)",
  "Replay deterministically to reconstruct state",
  "Serialize canonical state encoding",
  "Compute SHA-256 hash",
  "Compare to expected snapshot hash",
] as const;

export default function ArchitecturePage() {
  return (
    <>
      <Section id="architecture" variant="hero">
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">
            Architecture
          </h1>
          <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
            DigiEmu Core separates knowledge production (write path) from verification (replay path).
            Determinism is defined at the level of reconstructed knowledge state and its canonical encoding.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pill>Write Path</Pill>
            <Pill>Replay Path</Pill>
            <Pill>Canonical Encoding</Pill>
            <Pill>SHA-256 Snapshot</Pill>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
            <div className="text-sm text-black/50">Invariant</div>
            <div className="mt-2 text-sm font-medium text-black">
              Same inputs → same reconstructed state → same hash.
            </div>
          </div>
        </div>
      </Section>

      <Section id="paths" dividerTop>
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className={["text-2xl", ui.text.title].join(" ")}>Paths</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Card className={ui.card.pad}>
              <div className="text-sm text-black/50">Write Path</div>
              <div className="mt-2 text-base font-semibold text-black">Construct admissible inputs</div>
              <ol className="mt-4 space-y-2 text-sm text-black/70">
                {writePath.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="w-5 text-black/40">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className={ui.card.pad}>
              <div className="text-sm text-black/50">Replay Path</div>
              <div className="mt-2 text-base font-semibold text-black">Verify by deterministic reconstruction</div>
              <ol className="mt-4 space-y-2 text-sm text-black/70">
                {replayPath.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="w-5 text-black/40">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
            <div className="text-sm text-black/50">Hash Verification</div>
            <div className="mt-3 text-sm leading-6 text-black/70">
              Verification is defined as a pure function over referenced inputs and a deterministic replay procedure.
              Any independent implementation can reconstruct the state, compute the canonical SHA-256 hash, and compare it
              to the snapshot hash.
            </div>
            <div className="mt-4 text-xs text-black/50">
              Output: PASS / FAIL + report (snapshot, inputs, computed hash).
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
