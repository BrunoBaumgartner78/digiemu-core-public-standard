import * as React from "react";
import { Section } from "../../src/components/site/Section";
import { SmartLink } from "../../src/components/site/SmartLink";
import { links } from "../../src/config/links";

export const metadata = {
  title: "Reference — DigiEmu Core Public Standard",
  description:
    "Reference implementation and verification workflow: pick snapshot, deterministic replay, compute SHA-256, compare and report.",
};

function Card({
  title,
  children,
  right,
}: {
  title: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] min-w-0">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-black">{title}</h3>
        {right ? <div className="text-xs text-black/50">{right}</div> : null}
      </div>
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

function Step({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-2xl border border-black/10 bg-white text-sm font-semibold text-black">
          {n}
        </div>
        <h3 className="text-base font-semibold text-black">{title}</h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-black/70">{body}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-3 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-2xl border border-black/10 bg-white px-4 py-3 text-xs leading-relaxed text-black/80 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <code>{children}</code>
    </pre>
  );
}

function DownloadDocx({
  href,
  label = "Download",
}: {
  href: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black/70 transition hover:bg-black/5 hover:text-black"
    >
      {label}
      <span className="ml-2 rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] text-black/50">
        V1.0
      </span>
    </a>
  );
}

const auditArtifacts = [
  {
    title: "Specification",
    right: "Normative",
    body: "Authoritative definition of data formats, snapshot semantics, and verification APIs.",
    href: links.docs.specification,
  },
  {
    title: "Determinism (Formal)",
    right: "Evidence",
    body: "Formal definition of determinism, replay invariants, and reproducibility guarantees.",
    href: links.docs.determinismFormal,
  },
  {
    title: "Audit Framework",
    right: "Mechanics",
    body: "Procedures for capturing, storing, and validating audit evidence and decision provenance.",
    href: links.docs.auditFramework,
  },
  {
    title: "Conformance",
    right: "MUST/SHALL",
    body: "Testable requirements and acceptance criteria implementers must meet for compliance.",
    href: links.docs.conformance,
  },
  {
    title: "Certification",
    right: "Policy",
    body: "Technical evidence and assessment steps used during certification and audits.",
    href: links.docs.certification,
  },
  {
    title: "Governance",
    right: "Process",
    body: "Roles, change control, and release practices that ensure traceability and accountability.",
    href: links.docs.governance,
  },

  { title: "Security Model", right: "Model", body: "Threat assumptions and protection goals.", href: links.docs.securityModel },
  { title: "Threat Model", right: "Model", body: "Adversaries, attack surfaces and mitigations.", href: links.docs.threatModel },
  { title: "Deployment Guidelines", right: "Ops", body: "Operational guidance for reproducible builds and verification.", href: links.docs.deploymentGuidelines },
] as const;


export default function ReferencePage() {
  return (
    <main>
      <Section id="reference">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Pill>Reference implementation</Pill>
                <Pill>Deterministic replay</Pill>
                <Pill>Verification report</Pill>
                <Pill>Tool-agnostic</Pill>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                Reference & Verification
              </h1>

              <p className="max-w-6xl text-base leading-relaxed text-black/70">
                The goal is independent verification: a third party can reconstruct a
                knowledge state from referenced inputs and confirm the expected SHA-256
                snapshot hash. Same inputs → same reconstructed state → same hash.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2 min-w-0">
              <Card title="Verify in 60 seconds" right={<span>Workflow</span>}>
                <p>
                  This is the minimal verification loop. It is intentionally simple and
                  auditable.
                </p>

                <div className="mt-4 grid gap-4">
                  <Step
                    n="1"
                    title="Pick a snapshot"
                    body={
                      <>
                        Choose a snapshot hash and collect its referenced inputs (units,
                        versions, claims, uncertainty, artifacts).
                      </>
                    }
                  />
                  <Step
                    n="2"
                    title="Replay deterministically"
                    body={
                      <>
                        Reconstruct the knowledge state from the referenced inputs using
                        deterministic replay.
                      </>
                    }
                  />
                  <Step
                    n="3"
                    title="Compute the hash"
                    body={
                      <>
                        Compute the resulting SHA-256 state hash from the reconstructed
                        state.
                      </>
                    }
                  />
                  <Step
                    n="4"
                    title="Compare + report"
                    body={
                      <>
                        Compare computed vs expected hash and emit a verification report
                        (PASS / FAIL + details).
                      </>
                    }
                  />
                </div>
              </Card>

              <Card title="CLI Contract v1 (reference interface)" right={<span>Defined by tag: cli-contract-v1.0.0</span>}>
                <p>
                  This interface reflects the locked CLI contract v1. It documents the normative input/output shape and does not imply a distributed binary release.
                </p>

                <div className="mt-3">
                  <SmartLink
                    href={links.cliContractV1Tag}
                    external
                    className="inline-flex items-center rounded-xl border border-black/15 bg-white px-3 py-1 text-sm text-black hover:bg-black/5"
                  >
                    cli-contract-v1.0.0 (tag)
                  </SmartLink>
                </div>

                <CodeBlock>
                  {[
                    "# Placeholder (interface example — not a released CLI yet)",
                    "digiemu verify \\",
                    "  --snapshot <SHA256> \\",
                    "  --inputs ./inputs \\",
                    "  --out ./report.json",
                    "",
                    "# Expected output:",
                    "#  report.json (PASS/FAIL, computedHash, expectedHash, referencedInputs, metadata)",
                  ].join("\n")}
                </CodeBlock>

                <div className="mt-4 flex flex-wrap gap-2">
                  <SmartLink
                    href={links.githubCore}
                    external
                    className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
                  >
                    GitHub — Core
                  </SmartLink>

                  <SmartLink
                    href={links.githubReference}
                    external
                    className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5"
                  >
                    GitHub — Reference
                  </SmartLink>
                </div>
              </Card>
            </div>

            <div className="mt-10">
              <h2 className="text-base font-semibold text-black">Audit artifacts</h2>
              <p className="mt-2 max-w-6xl text-sm leading-relaxed text-black/70">
                These artifacts define the verification mechanics, test expectations, and
                decision provenance. Drafts are published as downloadable PDF while the
                public spec stabilizes.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {auditArtifacts.map((a) => (
                  <Card key={a.title} title={a.title} right={<span>{a.right}</span>}>
                    <p className="mb-4">{a.body}</p>
                    <DownloadDocx href={a.href} />
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <h2 className="text-base font-semibold text-black">
                Independent verification principle
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                Verification must be possible without privileged access. A third party
                should be able to implement replay independently and still obtain the
                identical hash for the same referenced inputs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Tool-agnostic</Pill>
                <Pill>Deterministic replay</Pill>
                <Pill>Evidence-based PASS/FAIL</Pill>
                <Pill>Referentially closed inputs</Pill>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
