"use client";

 
import { Section } from "../site/Section";
import { Card } from "../site/Card";
import { Pill } from "../site/Pill";
import { SmartLink } from "../site/SmartLink";
import  GlobeSVG  from "../site/GlobeSVG";
import { ui } from "../../config/ui";
import { links } from "../../config/links";

export function Hero() {
  const rotation = "animate-[spin_160s_linear_infinite]"; // constant: do not change on hover

  return (
    <Section id="hero" variant="hero" className="relative overflow-hidden group">
      <div className={["relative mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
        {/* Watermark Globe */}
        <div className="pointer-events-none absolute -top-56 right-[-18rem] sm:-top-72 sm:right-[-22rem] lg:-top-80 lg:right-[-26rem] opacity-10 group-hover:opacity-50 transition-opacity duration-500">
          <GlobeSVG
            className={[
              "stroke-sky-300/45",
              "h-[900px] w-[900px] lg:h-[1100px] lg:w-[1100px]",
              "transition-opacity duration-200",
              rotation,
            ].join(" ")}
          />
        </div>

        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-black">
            Deterministic AI Knowledge Infrastructure
          </h1>

          <p className="mt-6 text-base text-black/70 leading-7 max-w-2xl">
            DigiEmu Core defines a reconstructible knowledge substrate. It enables snapshot-verifiable state
            reconstruction, deterministic replay, and audit evidence — independent of any specific AI model.
          </p>

          {/* duplicate pill row removed */}

          {/* HERO: FINAL (do not redesign — only content edits if needed) */}
          <div className="mt-6 rounded-xl border border-black/15 bg-white px-5 py-3 text-sm text-black/80 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3">
              <span className="select-none text-black/40">│</span>
              <p className="leading-relaxed">
                <span className="font-semibold text-black">Invariant</span>{" "}
                <span className="text-black/60">(normative):</span>{" "}
                Same inputs → same reconstructed state → same SHA-256 hash.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            <Pill>Snapshot-verifiable state</Pill>
            <Pill>Deterministic replay</Pill>
            <Pill>SHA-256 snapshots</Pill>
            <Pill>Claims + Uncertainty</Pill>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Card className={ui.card.pad}>
              <div className="text-sm text-black/50">Position</div>
              <div className="mt-2 text-sm leading-6 text-black/70">
                Not model-level. Not prompt-level. A deterministic substrate for governed knowledge state.
              </div>
            </Card>

            <Card className={ui.card.pad}>
              <div className="text-sm text-black/50">Entry points</div>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <SmartLink
                  href={links.spec}
                  className="text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
                >
                  Read the Spec
                </SmartLink>
                <SmartLink
                  href={links.reference}
                  className="text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
                >
                  Verify in 60 seconds
                </SmartLink>
                <SmartLink
                  href={links.githubCore}
                  external
                  className="text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
                >
                  GitHub — Core
                </SmartLink>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

