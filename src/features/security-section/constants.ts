import { NAV_ROUTES } from "@/constants/site";

export const SECURITY_CONTENT = {
  label: "Security & Governance",
  title: "Built to clear security review, not to survive it",
  description:
    "Your security team, legal, and procurement each look for this before engineering gets a decision. Here is what they will find.",
  cta: { label: "Request our security overview", href: NAV_ROUTES.contact },
} as const;

/**
 * ⚠️ VERIFY EVERY LINE BEFORE THIS SHIPS.
 * One unsubstantiated badge in this section discredits the other three.
 * If a framework is not yet certified, say "in progress" — that still helps.
 * Nothing here should be aspirational.
 */
export const SECURITY_PILLARS = [
  {
    id: "certifications",
    icon: "ShieldCheck",
    title: "Certifications",
    points: [
      "SOC 2 Type II — readiness in progress, current controls documented",
      "ISO 27001 — aligned controls, report available under NDA",
      "Annual third-party penetration testing",
    ],
  },
  {
    id: "data",
    icon: "Database",
    title: "Data handling",
    points: [
      "Your data is never used to train shared or public models",
      "Regional residency options across AWS, Azure, and GCP",
      "Defined retention windows and verified deletion on exit",
    ],
  },
  {
    id: "access",
    icon: "KeyRound",
    title: "Access & audit",
    points: [
      "SSO / SAML and SCIM provisioning",
      "Role-based access with least-privilege defaults",
      "Immutable audit logging on every privileged action",
    ],
  },
  {
    id: "governance",
    icon: "ScrollText",
    title: "AI governance",
    points: [
      "Documented model provenance and version history",
      "Human-in-the-loop checkpoints on consequential decisions",
      "Continuous evaluation, drift monitoring, and no model lock-in",
    ],
  },
] as const;
