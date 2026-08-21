import { industryPath } from "@/constants/site";

export const INDUSTRY_ANCHOR_REDIRECTS: Record<string, string> = {
  fintech: industryPath("fintech"),
  retail: industryPath("retail"),
  manufacturing: industryPath("manufacturing"),
  saas: industryPath("saas"),
};

export const SECTOR_WORK: Record<string, readonly string[]> = {
  fintech: [
    "Real-time fraud and risk decisioning",
    "KYC/AML document intelligence",
    "Core banking and payment rail integration",
  ],
  retail: [
    "Demand forecasting at SKU and store level",
    "Customer intelligence and personalization",
    "Inventory and supply chain optimization",
  ],
  manufacturing: [
    "Predictive maintenance on sensor streams",
    "Computer-vision quality inspection",
    "MES and plant-floor system integration",
  ],
  saas: [
    "In-product AI features and copilots",
    "Usage intelligence and churn modelling",
    "Multi-tenant platform modernization",
  ],
};

export const ALSO_SERVED = [
  "Healthcare",
  "Logistics",
  "Insurance",
  "Real Estate",
  "EdTech",
  "Energy",
  "Media & Entertainment",
  "Travel & Hospitality",
  "Telecommunications",
  "Professional Services",
] as const;

export interface IndustryPage {
  id: string;
  slug: string;
  title: string;
  heroTitle: string;
  description: string;
  regulation: string;
  typical: readonly string[];
  systems: readonly string[];
}

export const INDUSTRY_PAGES: readonly IndustryPage[] = [
  {
    id: "fintech",
    slug: "fintech",
    title: "FinTech",
    heroTitle: "Risk, fraud, and ops intelligence that can survive audit",
    description:
      "AI for banking, payments, and insurance operations — explainable decisions, PCI-aware data paths, and logs a regulator can read.",
    regulation:
      "Decisioning in this sector is not a UX problem. Models that cannot explain themselves, or that train on data they should not have seen, do not ship.",
    typical: [
      "Fraud and credit decisioning with reason codes",
      "Document intelligence for KYC/AML packets",
      "Ops copilots over core and payment rails",
    ],
    systems: ["Core banking", "Card / ACH rails", "Salesforce", "Snowflake", "ServiceNow"],
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail",
    heroTitle: "Forecasts and personalization that match the shelf, not the slide",
    description:
      "Demand, inventory, and customer intelligence wired into POS, ERP, and warehouse systems — not a model that lives in a notebook.",
    regulation:
      "The constraint is usually the data, not the algorithm: eleven systems of record, two decades of SKUs, and a promotion calendar that lies.",
    typical: [
      "SKU and store-level demand forecasting",
      "Customer intelligence with consent boundaries",
      "Allocation and replenishment that operations will actually run",
    ],
    systems: ["POS", "ERP", "WMS", "Shopify / ecom", "Snowflake"],
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing",
    heroTitle: "Plant-floor intelligence that respects the OT/IT line",
    description:
      "Predictive maintenance, quality vision, and MES integration — edge inference included, air-gapped where it has to be.",
    regulation:
      "A model that needs the public cloud for every inference is not a plant-floor system. We design for the network you actually have.",
    typical: [
      "Predictive maintenance on sensor streams",
      "Computer-vision inspection on the line",
      "Exception agents over MES and warehouse events",
    ],
    systems: ["MES", "SCADA / historians", "SAP", "Kafka", "Edge GPU"],
  },
  {
    id: "saas",
    slug: "saas",
    title: "SaaS",
    heroTitle: "In-product AI that does not blow the tenancy model",
    description:
      "Copilots, usage intelligence, and platform modernization for multi-tenant products — isolation first, features second.",
    regulation:
      "A retrieval index that mixes tenants is an incident, not a shortcut. Every AI surface inherits the product's permission model.",
    typical: [
      "In-product copilots grounded in the tenant's own data",
      "Churn and expansion models on product usage",
      "Modernizing the platform so those features have somewhere to live",
    ],
    systems: ["Your product API", "Warehouse", "Billing", "Auth / SSO", "Feature flags"],
  },
];
