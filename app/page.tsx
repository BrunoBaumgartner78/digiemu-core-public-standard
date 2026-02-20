import { Hero } from "../src/components/sections/Hero";
import { Problem } from "../src/components/sections/Problem";
import { Solution } from "../src/components/sections/Solution";
import { Architecture } from "../src/components/sections/Architecture";
import { SnapshotFlow } from "../src/components/sections/SnapshotFlow";
import { Compliance } from "../src/components/sections/Compliance";
import { ReferenceImpl } from "../src/components/sections/ReferenceImpl";
import { UseCases } from "../src/components/sections/UseCases";
import { CTA } from "../src/components/sections/CTA";
import { TrustStrip } from "../src/components/sections/TrustStrip";

export const metadata = {
  title: "Home",
  description:
    "Deterministic knowledge infrastructure: snapshot-verifiable state, deterministic replay, audit evidence.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Proof-flow (investor/auditor scan) */}
      <Hero />
      <Problem />
      <Solution />
      <Architecture />
      <SnapshotFlow />
      <Compliance />
      <ReferenceImpl />
      <UseCases />
      <CTA />
      <TrustStrip />
    </main>
  );
}