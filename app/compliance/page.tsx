import { Section } from "../../src/components/site/Section";
import { links } from "../../src/config/links";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <h3 className="text-base font-semibold text-black">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-black/70">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60">
      {children}
    </span>
  );
}

function Table({
  rows,
}: {
  rows: Array<{ area: string; requirement: string; contribution: string }>;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="overflow-x-auto">
        <table  role="table" className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-black/10 bg-white">
              <th className="px-6 py-4 text-left font-semibold text-black">Area</th>
              <th className="px-6 py-4 text-left font-semibold text-black">Requirement (high-level)</th>
              <th className="px-6 py-4 text-left font-semibold text-black">DigiEmu Core contribution</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-black/10 last:border-b-0">
                <td className="px-6 py-4 align-top text-black">{r.area}</td>
                <td className="px-6 py-4 align-top text-black/70">{r.requirement}</td>
                <td className="px-6 py-4 align-top text-black/70">{r.contribution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapping = [
  {
    area: "Traceability",
    requirement: "Be able to reconstruct what state a system used for a decision/output.",
    contribution:
      "Snapshot-verifiable knowledge state. Independent deterministic replay reproduces the same state hash.",
  },
  {
    area: "Documentation",
    requirement: "Maintain structured documentation and change history for regulated systems.",
    contribution:
      "Versioned Units + append-only decision logs (DECs). Audit artifacts reference exact inputs/versions.",
  },
  {
    area: "Testing & validation",
    requirement: "Demonstrate stability and controlled behavior over time.",
    contribution:
      "Determinism fixtures and replay tests. PASS/FAIL verification reports for snapshots.",
  },
  {
    area: "Incident forensics",
    requirement: "Investigate incidents with evidence trails and reproducible reproduction steps.",
    contribution:
      "Evidence-oriented verification: select snapshot → reconstruct → hash compare → report.",
  },
  {
    area: "Governance",
    requirement: "Define responsibilities, decision processes, and controlled changes.",
    contribution:
      "Governance framework: DEC log + versioning policy + review gates for units/claims/uncertainty.",
  },
];

export const metadata = {
  title: "Compliance & Governance — DigiEmu Core Public Standard",
  description:
    "Deterministic replay, snapshot verification, governance framework and audit-ready evidence model aligned with EU AI Act principles.",
  openGraph: {
    title: "Compliance & Governance — DigiEmu Core",
    description: "Deterministic knowledge infrastructure for reproducible audit and governance.",
    type: "website",
  },
};

export default function CompliancePage() {
  return (
    <main>
      <Section id="compliance">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Pill>EU AI Act aligned</Pill>
                <Pill>Audit evidence</Pill>
                <Pill>Deterministic replay</Pill>
                <Pill>Governance substrate</Pill>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                Compliance & Governance
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-black/70">
                DigiEmu Core is not a compliance “checkbox”. It provides a substrate for
                reconstructible knowledge state and evidence trails that regulated AI
                systems can build on.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm hover:bg-black/5"
                  href="/reference"
                >
                  Reference artifacts
                </a>
                <a
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white !text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30"
                  href={links.docs.specification}
                >
                  Core Specification
                </a>
                <a
                  className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm hover:bg-black/5"
                  href={links.docs.auditFramework}
                >
                  Audit Framework 
                </a>
                <a
                  className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm hover:bg-black/5"
                  href={links.docs.certification}
                >
                  Certification Policy
                </a>
              </div>

            </div>

            <div className="mt-10">
              <h2 className="text-base font-semibold text-black">High-level mapping</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-black/70">
                The table below summarizes how deterministic state reconstruction and
                snapshot verification supports common regulatory needs (traceability,
                documentation, testing, incident response, governance).
              </p>
              <div className="mt-4">
                <Table rows={mapping} />
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <Card title="What DigiEmu Core does">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Defines versioned knowledge state (Units + Versions).</li>
                  <li>Models Claims explicitly.</li>
                  <li>Treats Uncertainty as first-class data.</li>
                  <li>Emits snapshot hashes and verification reports.</li>
                </ul>
              </Card>

              <Card title="What it does not do">
                <ul className="list-disc space-y-2 pl-5">
                  <li>It is not an AI model or agent runtime.</li>
                  <li>It does not replace risk management processes.</li>
                  <li>It does not “certify” a system by itself.</li>
                  <li>It does not claim legal compliance on its own.</li>
                </ul>
              </Card>

              <Card title="Evidence outputs">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Snapshot hash (expected state identifier).</li>
                  <li>Replay inputs list (referenced units/versions/artifacts).</li>
                  <li>Deterministic replay result (computed hash).</li>
                  <li>Verification report (PASS/FAIL + details).</li>
                </ul>
              </Card>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <h2 className="text-base font-semibold text-black">Certification policy (principles)</h2>
                <p className="mt-3 text-sm leading-relaxed text-black/70">
                  A certification process should be based on independently reproducible
                  evidence. The minimal criterion is that a third party can replay a
                  snapshot using referenced inputs and obtain the identical SHA-256
                  state hash.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/70">
                  <li>Independent replay must not require vendor-specific infrastructure.</li>
                  <li>Snapshot inputs must be complete and referentially closed.</li>
                  <li>Verification output must be machine-readable and human-reviewable.</li>
                  <li>Decision changes must be traceable via a DEC log.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <h2 className="text-base font-semibold text-black">Governance controls (minimal set)</h2>
                <p className="mt-3 text-sm leading-relaxed text-black/70">
                  Governance is implemented as explicit rules around how units, claims,
                  and uncertainty are created, reviewed, and versioned.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-sm font-semibold text-black">Change control</div>
                    <div className="mt-1 text-sm text-black/70">
                      Versioned units, review gates, immutable history.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-sm font-semibold text-black">Decision logs</div>
                    <div className="mt-1 text-sm text-black/70">
                      DEC entries link decisions to evidence and scope.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-sm font-semibold text-black">Audit readiness</div>
                    <div className="mt-1 text-sm text-black/70">
                      Verification fixtures and reproducible reports.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-sm font-semibold text-black">Accountability</div>
                    <div className="mt-1 text-sm text-black/70">
                      Roles and responsibilities defined per project.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <h2 className="text-base font-semibold text-black">Notes</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                This page describes technical properties and governance primitives. It is
                not legal advice and does not declare compliance for any specific
                deployment. The aim is reproducible evidence for audits and assurance.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

