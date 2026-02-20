import { Section } from "../../src/components/site/Section";
import { SmartLink } from "../../src/components/site/SmartLink";
import { links } from "../../src/config/links";

export const metadata = {
  title: "Imprint",
  description: "Imprint / legal notice for the DigiEmu Core Public Standard site.",
};

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <h2 className="text-base font-semibold text-black">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-black/70">{children}</div>
    </div>
  );
}

export default function ImprintPage() {
  return (
    <main>
      <Section id="imprint">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20">
            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Imprint
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-black/70">
              Legal notice for this public standard documentation site.
              Provide the required operator information for your jurisdiction.
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <Card title="Operator">
                <p className="text-sm text-black/70">
                  To be provided by the site operator:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Legal entity / name</li>
                  <li>Postal address</li>
                  <li>Contact email</li>
                  <li>Commercial register / VAT (if applicable)</li>
                </ul>
              </Card>

              <Card title="Disclaimer">
                <p>
                  This site provides technical documentation about a deterministic knowledge infrastructure.
                  It does not provide legal advice and makes no claim of compliance for specific deployments.
                </p>
              </Card>

              <Card title="Liability for links">
                <p>
                  External links (e.g., GitHub) lead to third-party sites. The operator is not responsible for external content.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <SmartLink href={links.githubCore} className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5">
                    GitHub — Core
                  </SmartLink>
                  <SmartLink href={links.githubReference} className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 text-sm text-black hover:bg-black/5">
                    GitHub — Reference
                  </SmartLink>
                </div>
              </Card>

              <Card title="Copyright">
                <p>
                  Unless stated otherwise, text and documents on this site are provided under the terms
                  indicated in the respective repositories and documents.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
