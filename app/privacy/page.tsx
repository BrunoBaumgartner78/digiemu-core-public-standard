import { Section } from "../../src/components/site/Section";
import { SmartLink } from "../../src/components/site/SmartLink";
import { links } from "../../src/config/links";

export const metadata = {
  title: "Privacy",
  description: "Privacy information for the DigiEmu Core Public Standard site.",
};

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <h2 className="text-base font-semibold text-black">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-black/70">{children}</div>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-black/70 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      {children}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main>
      <Section id="privacy">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20">
            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Privacy
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-black/70">
              This page describes how this public documentation site handles personal data.
              It is written to be minimal and evidence-oriented.
            </p>

            <div className="mt-8">
              <Note>
                <span className="font-semibold text-black">Scope:</span> This site provides public standard
                documentation pages. It does not require user accounts and does not provide an interactive service
                that stores user-generated content.
              </Note>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <Card title="Data controller">
                <p>
                  Controller details must be provided by the site operator.
                </p>
                <p className="mt-3 text-xs text-black/50">
                  To be provided: legal entity / name, address, contact email.
                </p>
              </Card>

              <Card title="What we process">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-semibold text-black">Server logs</span> (typical):
                    IP address, date/time, requested URL, user agent, referrer, and status code.
                  </li>
                  <li>
                    <span className="font-semibold text-black">Downloads</span> (DOCX):
                    when you download documents, the request may be logged as part of standard server operation.
                  </li>
                </ul>
              </Card>

              <Card title="Purpose and legal basis (high-level)">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Security and operational stability (e.g., abuse prevention).</li>
                  <li>Delivery of requested content (pages and document downloads).</li>
                </ul>
                <p className="mt-3 text-xs text-black/50">
                  Note: exact legal basis depends on jurisdiction and hosting configuration.
                </p>
              </Card>

              <Card title="Cookies and analytics">
                <p>
                  As of now, this site is intended to run without marketing trackers.
                  If analytics or cookie banners are added later, this section must be updated.
                </p>
                <p className="mt-3 text-xs text-black/50">
                  Status: analytics not declared here. Confirm your deployment configuration.
                </p>
              </Card>

              <Card title="Third-party services">
                <p>
                  If you host on a platform (e.g., Vercel) your hosting provider processes requests to serve the site.
                  If external repositories are linked (GitHub), clicking those links leaves this site.
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

              <Card title="Your rights">
                <p>
                  Depending on your jurisdiction, you may have rights such as access, deletion, correction,
                  restriction, and objection. Contact the controller to exercise rights.
                </p>
                <p className="mt-3 text-xs text-black/50">
                  To be provided: contact channel for privacy requests.
                </p>
              </Card>
            </div>

            <div className="mt-10">
              <Note>
                <span className="font-semibold text-black">Policy maintenance:</span>{" "}
                If the site adds analytics, forms, newsletters, or user accounts, this privacy page must be updated
                before release.
              </Note>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
