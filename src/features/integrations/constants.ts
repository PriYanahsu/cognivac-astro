import { NAV_ROUTES } from "@/constants/site";

export const INTEGRATIONS_PAGE = {
  label: "Integrations",
  title: "We meet the systems you already run",
  description:
    "Salesforce, SAP, Snowflake, Databricks, HubSpot, Slack, ServiceNow, and MCP. The integration is usually the project. We treat it that way.",
  highlights: ["Systems of record, not screenshots", "MCP where the tool surface is an LLM"],
} as const;

export const INTEGRATIONS = [
  {
    id: "salesforce",
    name: "Salesforce",
    body: "Objects, flows, and the permission model. Agents and copilots that respect sharing rules, not a connected-app dump into a vector store.",
  },
  {
    id: "sap",
    name: "SAP",
    body: "ECC and S/4HANA integrations through the interfaces you already operate. No UI scraping dressed up as an API.",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    body: "Warehouses as the source of truth for RAG, features, and evals. Row-level security inherited, not reimplemented.",
  },
  {
    id: "databricks",
    name: "Databricks",
    body: "Training, feature stores, and serving on the lakehouse you already pay for — MLflow included, not bolted on.",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    body: "CRM context for copilots and automation without turning the portal into a second data warehouse.",
  },
  {
    id: "slack",
    name: "Slack",
    body: "Human-in-the-loop where people already work: approvals, exception queues, and incident notes, with an audit trail that is not a DM.",
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    body: "Tickets, CMDB, and change windows as first-class tools for agents — not a webhook afterthought.",
  },
  {
    id: "mcp",
    name: "MCP",
    body: "Model Context Protocol servers for the tools an agent is allowed to call. Typed, permissioned, and logged. This is how we keep tool use auditable.",
  },
] as const;

export const INTEGRATIONS_CTA = {
  label: "Talk through your stack",
  href: NAV_ROUTES.contact,
} as const;
