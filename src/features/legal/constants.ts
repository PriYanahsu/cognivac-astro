import { SITE_CONFIG, NAV_ROUTES } from "@/constants/site";

export const LEGAL_UPDATED = "August 21, 2026";

export interface LegalSection {
  heading: string;
  body: readonly string[];
}

export interface LegalDoc {
  path: string;
  title: string;
  description: string;
  sections: readonly LegalSection[];
}

const contact = `Contact ${SITE_CONFIG.email} for access, correction, deletion, or a copy of the processing record for an engagement.`;

export const PRIVACY: LegalDoc = {
  path: NAV_ROUTES.privacy,
  title: "Privacy Policy",
  description:
    "How Cognivac collects, uses, and protects information on this website and in client engagements.",
  sections: [
    {
      heading: "Who we are",
      body: [
        `${SITE_CONFIG.legalName} ("Cognivac", "we") operates ${SITE_CONFIG.url} and delivers custom software and AI systems under client contracts. This policy covers the website and the business-contact data we collect to respond to you. Engagement-specific processing is governed by the MSA and DPA for that work.`,
      ],
    },
    {
      heading: "What we collect on this website",
      body: [
        "Contact form: name, work email, company, message, optional role, optional resume, optional resource identifier.",
        "Newsletter: email address.",
        "Technical: IP address, user agent, and basic device data used to rate-limit forms and operate the site (including Vercel Analytics, which is designed not to use cross-site tracking cookies).",
        "We do not sell personal information. We do not run advertising pixels on this site.",
      ],
    },
    {
      heading: "What we collect in engagements",
      body: [
        "Only the data the statement of work names, in the environment the statement of work names. Client data is not used to train Cognivac-owned, shared, or public models.",
        "Retention and deletion follow the DPA and the exit plan in the MSA.",
      ],
    },
    {
      heading: "How we use website data",
      body: [
        "To reply to your message, deliver a requested resource, consider an application, or send the newsletter you subscribed to.",
        "To keep the forms usable (rate limits, abuse detection).",
        "To understand which pages are read, in aggregate.",
      ],
    },
    {
      heading: "Processors",
      body: [
        "Email delivery and form notifications may be sent through Resend. Hosting and analytics run on Vercel. Scheduling, if configured, runs on Cal.com. The live list is on the subprocessors page.",
        `See ${SITE_CONFIG.url}${NAV_ROUTES.subprocessors}.`,
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You can ask for access, correction, deletion, or a copy of the website data we hold about you. If you are in the EEA, UK, or a similar regime, you may also have the right to object, restrict, or lodge a complaint with a supervisory authority.",
        contact,
      ],
    },
    {
      heading: "Children",
      body: ["This site is for business use. We do not knowingly collect data from children."],
    },
    {
      heading: "Changes",
      body: [
        `We will update this page when the practice changes. Last updated ${LEGAL_UPDATED}.`,
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  path: NAV_ROUTES.terms,
  title: "Terms of Service",
  description:
    "Terms for use of the Cognivac website. Client work is governed by a signed MSA, not by this page.",
  sections: [
    {
      heading: "The website, not the work",
      body: [
        "These terms govern the public website and any forms on it. Design, build, and support engagements are governed by a master services agreement and statement of work. If those conflict with this page, the signed documents win.",
      ],
    },
    {
      heading: "Intellectual property on this site",
      body: [
        "The site design, copy, and marks are Cognivac's. Do not scrape, republish, or imply a partnership from a page on this site.",
        "Case studies describe kinds of work. They are not permission to name a customer.",
      ],
    },
    {
      heading: "No warranty on public pages",
      body: [
        "Content is provided as-is for information. Architecture notes and assessments are starting points, not professional advice for your environment.",
      ],
    },
    {
      heading: "Acceptable use",
      body: [
        "Do not abuse the forms, attempt to probe the APIs beyond ordinary use, or submit content you do not have the right to send (including resumes that are not yours).",
      ],
    },
    {
      heading: "Liability",
      body: [
        "To the extent the law allows, Cognivac is not liable for damages arising from use of the public website. Engagement liability is set in the MSA.",
      ],
    },
    {
      heading: "Law",
      body: [
        "These website terms are governed by the laws of the State of California, excluding conflict-of-law rules, unless a mandatory local consumer law says otherwise.",
        contact,
      ],
    },
  ],
};

export const DPA: LegalDoc = {
  path: NAV_ROUTES.dpa,
  title: "Data Processing Addendum",
  description:
    "How Cognivac processes personal data as a processor on a client engagement, and how to execute the DPA.",
  sections: [
    {
      heading: "How to execute",
      body: [
        `Email ${SITE_CONFIG.email} with the legal entity name, residency requirements, and any customer DPA template you need us to review. We countersign before production data is accessed.`,
        "A website form is not an executed DPA.",
      ],
    },
    {
      heading: "Roles",
      body: [
        "On an engagement, the client is the controller (or a processor instructing us as a subprocessor). Cognivac processes personal data only on documented instructions in the SOW, MSA, and this DPA.",
      ],
    },
    {
      heading: "Instructions we will not follow",
      body: [
        "We will not use client personal data to train shared or public models, mix it into another tenant, or move it outside the agreed residency without a written change.",
      ],
    },
    {
      heading: "Security measures",
      body: [
        "Access control with least privilege, encryption in transit, encryption at rest on the platforms we operate, audit logging of privileged actions, and deletion on the schedule in the SOW.",
        "Details live on the security page and can be expanded in a questionnaire under NDA.",
      ],
    },
    {
      heading: "Subprocessors",
      body: [
        `The current list is published at ${SITE_CONFIG.url}${NAV_ROUTES.subprocessors}. Material changes are announced to the named security contact on the engagement before they apply to that engagement, except in an emergency needed to keep the service available.`,
      ],
    },
    {
      heading: "Assistance, audits, deletion",
      body: [
        "We will assist with data-subject requests that concern data we process for you, and with reasonable audits under NDA on a yearly cadence unless an incident requires sooner.",
        "At exit we delete or return engagement data according to the SOW, except for copies the law requires us to keep.",
      ],
    },
  ],
};

export const SUBPROCESSORS: LegalDoc = {
  path: NAV_ROUTES.subprocessors,
  title: "Subprocessors",
  description:
    "Vendors that may process data for the Cognivac website or for a client engagement.",
  sections: [
    {
      heading: "Website",
      body: [
        "Vercel — hosting, CDN, serverless functions, first-party analytics.",
        "Resend — transactional email for contact and newsletter forms, when configured.",
        "Cal.com — scheduling, only if PUBLIC_CAL_URL is set for an environment.",
      ],
    },
    {
      heading: "Engagements",
      body: [
        "Cloud accounts are typically the client's (AWS, Azure, or GCP). When Cognivac operates a tool on your behalf, it is named in the SOW.",
        "We do not add a subprocessor to an engagement without a path to object, except as stated in the DPA.",
      ],
    },
    {
      heading: "Changes",
      body: [
        `This page is the public list. Last updated ${LEGAL_UPDATED}. Named security contacts on active engagements are notified of material changes that apply to their environment.`,
      ],
    },
  ],
};

export const AI_USAGE: LegalDoc = {
  path: NAV_ROUTES.aiUsage,
  title: "AI usage policy",
  description:
    "How Cognivac uses AI systems internally and on client work, and what we will not do with your data.",
  sections: [
    {
      heading: "On client work",
      body: [
        "Models, prompts, and tools are chosen for the job in the SOW. Client data stays in the agreed environment.",
        "We do not send client production data to a consumer chatbot, a public playground, or a vendor that is not a named subprocessor.",
        "Human review is required for outputs that can affect credit, employment, safety, or similarly consequential decisions, unless the SOW documents a different control.",
      ],
    },
    {
      heading: "Internally",
      body: [
        "Engineers may use coding assistants on Cognivac-owned code. Client code and data are excluded unless the SOW and the tool's processing terms both allow it.",
      ],
    },
    {
      heading: "Your employees",
      body: [
        "If your staff use our delivered system, the acceptable-use rules in your own policies still apply. We can log and filter; we cannot replace your policy.",
      ],
    },
  ],
};

export const ACCESSIBILITY: LegalDoc = {
  path: NAV_ROUTES.accessibility,
  title: "Accessibility",
  description:
    "What we aim for on this website and on the products we ship for clients.",
  sections: [
    {
      heading: "This website",
      body: [
        "We aim for WCAG 2.2 AA on cognivac.com: keyboard access, visible focus, skip link, captions on text images via alt, and contrast that meets the floor we set in the design tokens.",
        `If something is in the way, email ${SITE_CONFIG.email} with the page and the barrier. We treat that as a defect.`,
      ],
    },
    {
      heading: "Client products",
      body: [
        "Accessibility is in scope when the SOW says so — which is the default for anything with a user interface. We test; we do not only assert.",
      ],
    },
  ],
};
