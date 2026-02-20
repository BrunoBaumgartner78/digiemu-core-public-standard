import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { ui } from "../../config/ui";

export function Contact() {
  return (
    <Section id="contact" dividerTop>
      <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">Contact</h2>
            <p className="mt-3 text-sm leading-6 text-black/70">
              Public contact channels will be enabled once the governance and inbox routing are finalized.
            </p>
          </div>

          <Card className={ui.card.pad}>
            <div className="text-sm text-black/50">Status</div>
            <div className="mt-2 text-sm leading-6 text-black/70">
              {""}
              <br />
              For now, please use the GitHub repositories for technical discussions and issues.
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
