import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { ui } from "../../config/ui";

const items = [
  {
    n: "1",
    title: "AI systems are not state-deterministic",
    body:
      "Modern AI pipelines accumulate implicit state (retrieval layers, tool chains, model updates, caches). Re-running the same system often does not reproduce the same knowledge state.",
  },
  {
    n: "2",
    title: "Knowledge state is not reconstructible",
    body:
      "The underlying knowledge state of a system is typically not available as a verifiable artifact. Inputs, transformations, and intermediate states are not captured in a deterministic, replayable form.",
  },
  {
    n: "3",
    title: "Auditability therefore fails",
    body:
      "If state cannot be reconstructed, independent verification is not possible. This blocks regulatory assessment, incident forensics, reproducibility, and standardization.",
  },
] as const;

export function Problem() {
  return (
    <Section id="problem" dividerTop>
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <h2 className={["text-2xl sm:text-3xl font-semibold tracking-tight", ui.text.title].join(" ")}>Problem</h2>

        <div className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
          AI systems are typically evaluated by output behavior. However, for governance and verification,
          the relevant object is the underlying knowledge state — and that state is usually not deterministic
          or reconstructible.
        </div>

        <div className="mt-10 grid gap-4">
          {items.map((it) => (
            <Card key={it.n} className={ui.card.pad}>
              <div className="text-xs text-black/50">Claim {it.n}</div>
              <div className="mt-2 text-base font-semibold text-black">{it.title}</div>
              <div className="mt-3 text-sm leading-6 text-black/70">{it.body}</div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
          <div className="text-sm text-black/50">Consequence</div>
          <div className="mt-2 text-sm leading-6 text-black/70">
            Without reconstructible state, there is no reliable audit surface. Verification becomes dependent
            on operator trust rather than evidence.
          </div>
        </div>
      </div>
    </Section>
  );
}

