import fs from "fs/promises";
import path from "path";
import { Section } from "@/components/site/Section";
import { SmartLink } from "@/components/site/SmartLink";
import { links } from "@/config/links";

export const metadata = {
  title: "SPEC v1.0 — DigiEmu Core Public Standard",
  description: "Deterministic knowledge state reconstruction, snapshot-verifiable.",
};

export default async function Page() {
  const mdPath = path.join(process.cwd(), "src", "content", "spec", "SPEC_v1.0.public.md");
  let md = "";
  try {
    md = await fs.readFile(mdPath, "utf8");
  } catch {
    md = "Specification content not found.";
  }

  return (
    <Section className="max-w-screen-md mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">SPEC v1.0 — DigiEmu Core Public Standard</h1>
        <p className="text-sm text-slate-600">deterministic knowledge state reconstruction, snapshot-verifiable</p>
      </header>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Headings overview</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700">
          <li>Scope</li>
          <li>Definitions</li>
          <li>Snapshot Bundle v1</li>
          <li>Canonical JSON v1</li>
          <li>Hash v1 (sha256(canonical_json_v1))</li>
          <li>Replay v1</li>
          <li>Verify v1</li>
          <li>CLI Contract v1 (link to core tag)</li>
          <li>Versioning Policy</li>
          <li>Governance &amp; Conformance</li>
        </ol>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Artifacts</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <SmartLink href={links.cliContractV1Tag} external className="text-sky-600">
              CLI contract tag (cli-contract-v1.0.0)
            </SmartLink>
          </li>
          <li>
            <SmartLink href={links.verifySchema} external className="text-sky-600">
              VERIFY_RESULT_SCHEMA_v1.json
            </SmartLink>
          </li>
          <li>
            <SmartLink href={links.snapshotBundleSpec} external className="text-sky-600">
              SNAPSHOT_BUNDLE_v1.0
            </SmartLink>
          </li>
          <li>
            <SmartLink href={links.versioningPolicy} external className="text-sky-600">
              VERSIONING_POLICY_v1.0
            </SmartLink>
          </li>
          <li>
            <SmartLink href={links.specV1} external className="text-sky-600">
              SPEC v1.0 source tag/index (core)
            </SmartLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Specification (raw)</h3>
        <pre className="whitespace-pre-wrap bg-slate-50 p-4 rounded text-sm text-slate-800">{md}</pre>
      </div>
    </Section>
  );
}
