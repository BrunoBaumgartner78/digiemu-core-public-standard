export const links = {
  // main navigation
  spec: "/spec",
  reference: "/reference",
  architecture: "/architecture",
  compliance: "/compliance",
  contact: "/contact",

  // repos
  githubReference: "https://github.com/BrunoBaumgartner78/digiemu-core-reference",
  githubCore: "https://github.com/BrunoBaumgartner78/digiemu-core",

  // docs page (if you add one later) – for now keep it simple:
  docsPage: "/docs",

  // artifact shortcuts used in Footer badges
  artifacts: {
    testStrategy: "/spec#release-anchors",
    verifyAuditSpec: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/blob/main/docs/AUDIT_STATEMENT_v1.0.md",
    decLog: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/tree/main/01_decisions",
  },

  // core reference repository + cryptographic anchors
  coreReference: {
    repo: "https://github.com/BrunoBaumgartner78/digiemu-core-reference",
    releases: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/releases",
    tags: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/tags",
    keysReadme: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/blob/main/spec/v1.0/KEYS/README.md",
    keyAsc: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/blob/main/spec/v1.0/KEYS/bruno_brainbloom.asc",
    verifying: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/blob/main/spec/v1.0/VERIFYING.md",
    auditStatement: "https://github.com/BrunoBaumgartner78/digiemu-core-reference/blob/main/docs/AUDIT_STATEMENT_v1.0.md",
    fingerprint: "DCB7 228C 6EC8 BE4A CB9E  049D 0F75 05E1 2685 E8A2",
  },

  // release-line constants mirrored from the reference repo
  releaseLine: {
    baseline: "spec-v1.0",
    patches: ["spec-v1.0.1", "spec-v1.0.2", "spec-v1.0.3"],
  },

 
  // ...
 docs: {
  specification: "/docs/DigiEmu_Core_Specification_v1_0_ENTERPRISE.pdf",
  governance: "/docs/DigiEmu_Core_Governance_Framework_v1_0_ENTERPRISE.pdf",
  securityModel: "/docs/DigiEmu_Core_Security_Model_v1_0_ENTERPRISE.pdf",
  auditFramework: "/docs/DigiEmu_Core_Audit_Verification_Framework_v1_0_ENTERPRISE.pdf",
  threatModel: "/docs/DigiEmu_Core_Threat_Model_v1_0_ENTERPRISE.pdf",
  certification: "/docs/DigiEmu_Core_Certification_Technical_Requirements_v1_0_ENTERPRISE.pdf",
  deploymentGuidelines: "/docs/DigiEmu_Core_Deployment_Operational_Guidelines_v1_0_ENTERPRISE.pdf",
  determinismFormal: "/docs/DigiEmu_Core_Determinism_Formal_Definition_v1_0_ENTERPRISE.pdf",
  conformance: "/docs/DigiEmu_Core_Conformance_Requirements_v1_0_ENTERPRISE.pdf",
},

  // core artifact shortcuts (public spec integration)
  specV1: "https://github.com/BrunoBaumgartner78/digiemu-core/tree/main/docs",
  cliContractV1Tag: "https://github.com/BrunoBaumgartner78/digiemu-core/tag/cli-contract-v1.0.0",
  verifySchema: "https://github.com/BrunoBaumgartner78/digiemu-core/blob/main/docs/VERIFY_RESULT_SCHEMA_v1.json",
  snapshotBundleSpec: "https://github.com/BrunoBaumgartner78/digiemu-core/blob/main/docs/SNAPSHOT_BUNDLE_v1.0.md",
  versioningPolicy: "https://github.com/BrunoBaumgartner78/digiemu-core/blob/main/docs/VERSIONING_POLICY_v1.0.md",


} as const;

