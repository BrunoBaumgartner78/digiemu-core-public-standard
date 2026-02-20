import { ui } from "../../config/ui";

export function TrustStrip() {
  return (
    <div className={["mx-auto", ui.layout.max, ui.layout.px, "py-8"].join(" ")}>
      <div className="rounded-2xl border border-black/5 bg-white p-4 text-center text-sm text-black/60">
        Snapshot-verifiable state • Deterministic replay • Audit evidence
      </div>
    </div>
  );
}
