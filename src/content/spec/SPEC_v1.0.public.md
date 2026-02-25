# DigiEmu Core — SPEC v1.0 (Public)

- Status: PUBLIC-RELEASE-CANDIDATE (public)
- Source of truth: digiemu-core tags + schemas

## 1) Scope
- The system MUST support deterministic reconstruction of a knowledge state from referenced inputs.
- Implementations MUST treat the core repository tags and published schemas as normative sources.

## 2) Definitions
- A "Snapshot" MUST refer to a deterministic state identifier derived from canonicalized content.
- A "Bundle" MUST be a portable set of referenced inputs required for replay.
- "Canonical JSON v1" MUST be a stable serialization used for hashing and verification.

## 3) Snapshot Bundle v1
- A Snapshot Bundle v1 MUST include all required inputs to reproduce the state.
- A bundle MUST be self-describing (versions, units, claims, and references).

## 4) Canonical JSON v1
- Canonical JSON v1 MUST be produced deterministically.
- Implementations MUST NOT introduce non-deterministic fields (timestamps, random ids, unstable map ordering).

## 5) Hash v1
- Hash v1 MUST be computed as: sha256(canonical_json_v1).
- The same inputs MUST produce the same hash, byte-for-byte.

## 6) Replay v1
- Replay v1 MUST reconstruct the knowledge state solely from the referenced bundle inputs.
- Replay MUST be deterministic across machines when given the same inputs and versions.

## 7) Verify v1
- Verify v1 MUST validate the reconstructed state against the expected hash and result schema.
- Verify output MUST conform to the published VERIFY_RESULT_SCHEMA_v1.json.

## 8) CLI Contract v1
- Public CLI behavior MUST match the locked CLI contract tag.
- Tooling SHOULD use contract fixtures (goldens) for regression checks.

## 9) Versioning Policy
- Changes that affect hashing, canonicalization, or verification MUST be versioned explicitly.
- Breaking changes MUST increment the relevant spec/contract major version.

## 10) Governance & Conformance
- Conformance claims MUST reference specific tags/schemas.
- Governance decisions SHOULD be captured as decision records (DEC-*), linked from public documentation where applicable.

## Release Candidate Notes
- This document is published as a PUBLIC-RELEASE-CANDIDATE (public).
- The following artifacts are considered locked for this release candidate and MUST be referenced by conformance claims:
	- CLI contract tag: cli-contract-v1.0.0
	- VERIFY_RESULT_SCHEMA_v1.json
- The following may still change prior to a final SPEC v1.0 publication:
	- Explanatory text, examples, and editorial structure (without changing normative requirements)
	- Additional clarifications that do not modify Canonical JSON v1, Hash v1, Replay v1, or Verify v1 semantics
- Issue reporting SHOULD be done via the public repositories:
	- digiemu-core (spec + verifier/CLI contract)
	- digiemu-core-public-standard (site rendering + published documents)

## References
- Git tag: cli-contract-v1.0.0
- VERIFY_RESULT_SCHEMA_v1.json
- Acceptance script reference (Phase 4)
