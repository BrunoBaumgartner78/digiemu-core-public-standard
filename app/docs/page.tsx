import * as React from "react";
import { Section } from "../../src/components/site/Section";
import { links } from "../../src/config/links";

export const metadata = {
  title: "Docs — DigiEmu Core Public Standard",
  description: "Public documents (PDF) and quick links for verification/audit and test strategy.",
};

const DocRow = ({ id, title, href, note }: { id: string; title: string; href: string; note?: string }) => (
  <div id={id} className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-black">{title}</h2>
        {note ? <p className="mt-1 text-sm text-black/70">{note}</p> : null}
      </div>
      <a
        href={href}
        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-black/5"
      >
        Open PDF
      </a>
    </div>
  </div>
);

export default function DocsPage() {
  return (
    <main>
      <Section id="docs">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">Docs</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/70">
            These documents are served as static PDFs from <code className="rounded bg-black/5 px-1">/public/docs</code>.
            Use this page for stable anchors (e.g. <code className="rounded bg-black/5 px-1">#test-strategy</code>).
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <a href="#specification" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Specification</a>
            <a href="#governance" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Governance</a>
            <a href="#security-model" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Security Model</a>
            <a href="#verify-audit-spec" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Verify/Audit</a>
            <a href="#test-strategy" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Test Strategy</a>
            <a href="#threat-model" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Threat Model</a>
            <a href="#deployment" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Deployment</a>
            <a href="#determinism" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Determinism</a>
            <a href="#conformance" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Conformance</a>
          </div>

          <div className="mt-10 grid gap-4">
            <DocRow id="specification" title="Core Specification v1.0" href={links.docs.specification} note="Normative: data model, snapshot mechanics, deterministic replay." />
            <DocRow id="governance" title="Governance Framework v1.0" href={links.docs.governance} note="Roles, change control, decision records, compliance posture." />
            <DocRow id="security-model" title="Security Model v1.0" href={links.docs.securityModel} note="Threat surfaces, integrity, tamper evidence, artifact handling." />
            <DocRow id="verify-audit-spec" title="Audit Verification Framework v1.0" href={links.docs.auditFramework} note="Verification loop and expected evidence outputs." />
            <DocRow id="test-strategy" title="Test Strategy v1.0" href={links.artifacts.testStrategy ?? links.docs.conformance} note="Deterministic replay tests, golden vectors, compliance checks." />
            <DocRow id="threat-model" title="Threat Model v1.0" href={links.docs.threatModel} note="Adversary model, misuse cases, mitigations." />
            <DocRow id="deployment" title="Deployment Operational Guidelines v1.0" href={links.docs.deploymentGuidelines} note="Production assumptions, observability, change safety." />
            <DocRow id="determinism" title="Determinism Formal Definition v1.0" href={links.docs.determinismFormal} note="Formal notes on deterministic reconstruction and hashing." />
            <DocRow id="conformance" title="Conformance Requirements v1.0" href={links.docs.conformance} note="Conformance rules for implementations and audits." />
          </div>
        </div>
      </Section>
    </main>
  );
}
