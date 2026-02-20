import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { ui } from "../../config/ui";

const steps = [
  {
    n: "1",
    title: "Write path",
    body: "Units, versions, claims and uncertainty are appended deterministically. Inputs are explicit.",
  },
  {
    n: "2",
    title: "Snapshot",
    body: "A SHA-256 state identifier is computed from the reconstructed knowledge state.",
  },
  {
    n: "3",
    title: "Replay",
    body: "Given the referenced inputs, any independent implementation can rebuild the same state.",
  },
  {
    n: "4",
    title: "Verify",
    body: "Compute the hash and compare to the snapshot. Produce a PASS/FAIL evidence report.",
  },
] as const;

export function Architecture() {
  return (
    <Section id="architecture">
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
              Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/70 leading-7 max-w-2xl">
              The core is designed around a simple proof obligation: state must be reconstructible,
              and verification must be independent.
            </p>
          </div>
          <div className="hidden sm:block text-xs text-black/40">
            Write → Snapshot → Replay → Verify
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.n} className={ui.card.pad}>
              <div className="flex items-center justify-between">
                <div className="text-xs text-black/50">Step</div>
                <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs text-black/60">
                  {s.n}
                </div>
              </div>
              <div className="mt-3 text-base font-semibold tracking-tight text-black">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-black/70">{s.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Invariant</div>
            <div className="mt-2 text-sm leading-6 text-black/70">
              Same inputs → same reconstructed state → same SHA-256 hash.
            </div>
            <div className="mt-4 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
              Deterministic replay
            </div>
          </Card>

          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Evidence</div>
            <div className="mt-2 text-sm leading-6 text-black/70">
              Verification emits a minimal report: snapshot id, computed hash, comparison result,
              and referenced inputs.
            </div>
            <div className="mt-4 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
              PASS / FAIL
            </div>
          </Card>

          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Tool-agnostic</div>
            <div className="mt-2 text-sm leading-6 text-black/70">
              Any independent implementation can reproduce the computation and verify the hash,
              without trusting the original system.
            </div>
            <div className="mt-4 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
              Independent replay
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
