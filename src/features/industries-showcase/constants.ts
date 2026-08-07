import { NAV_ROUTES } from "@/constants/site";

export const INDUSTRIES_SHOWCASE_CONTENT = {
  label: "Industries",
  title: "Domain context, not just engineering capacity",
  description:
    "Each sector brings its own regulation, data reality, and definition of done. Here is the specific ground we already know.",
  cta: { label: "All industries we serve", href: NAV_ROUTES.industries },
} as const;

/** One concrete detail per industry — turns a tag into demonstrated expertise. */
export const INDUSTRY_DETAILS: Record<string, string> = {
  fintech: "PCI-DSS scope, explainable decisioning, and audit-ready model logs",
  retail: "SKU-level forecasting across POS, ERP, and warehouse systems",
  manufacturing: "OT/IT boundaries, edge inference, and MES integration",
  saas: "Multi-tenant isolation, usage metering, and in-product AI surfaces",
};
