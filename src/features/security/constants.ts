import { NAV_ROUTES } from "@/constants/site";
import { SECURITY_PILLARS } from "@/features/security-section/constants";

export { SECURITY_PILLARS };

export const SECURITY_PAGE = {
  label: "Security",
  title: "What a CISO and a procurement lead will actually ask",
  description:
    "Data residency, training policy, access, subprocessors, and how to get the DPA. Nothing here is a badge we have not earned.",
  highlights: [
    "We never train on your data",
    "Regional residency on the major clouds",
    "DPA on request",
  ],
} as const;

export const SECURITY_TOPICS = [
  {
    id: "residency",
    title: "Data residency",
    body: "Workloads run in the region you name — AWS, Azure, or GCP. We do not move production data to a convenience region of ours. Backups stay in the same residency boundary as the primary.",
  },
  {
    id: "training",
    title: "We never train on your data",
    body: "Client data is not used to train shared, public, or Cognivac-owned models. Fine-tunes and evaluation sets built for an engagement stay in that engagement's environment and are deleted on the retention schedule in the MSA.",
  },
  {
    id: "rbac",
    title: "RBAC and audit logging",
    body: "Access is role-based with least-privilege defaults. Privileged actions write to an immutable audit log. SSO / SAML and SCIM are the default for anything that will see production data; local passwords are a staging exception, not a production plan.",
  },
  {
    id: "pentest",
    title: "Penetration testing",
    body: "We run third-party penetration tests on a yearly cadence against the systems we operate, and we support customer-directed tests against an engagement environment under a scoped window. Reports are available under NDA.",
  },
  {
    id: "incident",
    title: "Incident response",
    body: "A named incident lead per engagement. Severity definitions, notification windows, and a post-incident write-up are part of the runbook we hand over — not a slide we write after the first page.",
  },
  {
    id: "certifications",
    title: "Certifications, honestly",
    body: "SOC 2 Type II readiness is in progress; current controls are documented and available under NDA. ISO 27001-aligned controls, same rule. We will not put a badge on this page until the report exists.",
  },
] as const;

export const SECURITY_ACTIONS = [
  {
    title: "DPA",
    description: "Data processing addendum covering subprocessors, residency, and deletion.",
    href: NAV_ROUTES.dpa,
    label: "Read the DPA",
  },
  {
    title: "Subprocessors",
    description: "The vendors that may process data on an engagement, and what they are used for.",
    href: NAV_ROUTES.subprocessors,
    label: "Subprocessor list",
  },
  {
    title: "Security questionnaire",
    description: "Send the SIG / CAIQ / custom pack. An engineer fills it, not a sales intern.",
    href: `${NAV_ROUTES.contact}?resource=security-questionnaire`,
    label: "Send a questionnaire",
  },
] as const;
