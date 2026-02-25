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
    <Section id="spec">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">SPEC v1.0 — DigiEmu Core Public Standard</h1>
          <p className="mt-3 max-w-3xl text-black/70">deterministic knowledge state reconstruction, snapshot-verifiable</p>
        </header>

        <div className="mt-10">
          <h2 className="text-lg font-medium mb-4">Headings overview</h2>
          <div className="mt-4 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
            <div>1) Scope</div>
            <div>2) Definitions</div>
            <div>3) Snapshot Bundle v1</div>
            <div>4) Canonical JSON v1</div>
            <div>5) Hash v1 (sha256(canonical_json_v1))</div>
            <div>6) Replay v1</div>
            <div>7) Verify v1</div>
            <div>8) CLI Contract v1 (link to core tag)</div>
            <div>9) Versioning Policy</div>
            <div>10) Governance &amp; Conformance</div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-medium mb-3">Artifacts</h3>
          <div className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
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
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-medium mb-3">Specification (raw)</h3>
          <div className="rounded-2xl border border-black/10 bg-white p-5">
            <pre className="mt-4 whitespace-pre-wrap text-sm leading-6 text-black/80">{md}</pre>
          </div>
        </div>
      </div>
    </Section>
  );
}
