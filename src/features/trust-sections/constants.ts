import { NAV_ROUTES } from "@/constants/site";

export const SOLUTIONS = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Agents that run multi-step work across your tools, data, and teams.",
    icon: "Bot",
    href: `${NAV_ROUTES.services}#ai-agents`,
    color: "#F5F0E8",
    image: "/images/solutions/ai-agents.webp",
    stats: [
      { value: "10x", label: "faster completion" },
      { value: "24/7", label: "always on" },
    ],
  },
  {
    id: "web-apps",
    title: "Custom Web Apps",
    description:
      "Fast, secure platforms built for real adoption—not just demos.",
    icon: "AppWindow",
    href: `${NAV_ROUTES.services}#apps`,
    color: "#FFE985",
    image: "/images/solutions/web-apps.webp",
    stats: [
      { value: "99.9%", label: "uptime SLA" },
      { value: "<1s", label: "page load" },
    ],
  },
  {
    id: "ml-integration",
    title: "ML Integration",
    description:
      "Production ML that plugs into the systems your operators already use.",
    icon: "Brain",
    href: `${NAV_ROUTES.services}#machine-learning`,
    color: "#BFE3FF",
    image: "/images/solutions/ml-integration.webp",
    stats: [
      { value: "3x", label: "deploy speed" },
      { value: "50%+", label: "accuracy lift" },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Intelligent workflows that connect people, systems, and decisions.",
    icon: "Workflow",
    href: `${NAV_ROUTES.services}#automation`,
    color: "#E4DDFF",
    image: "/images/solutions/automation.webp",
    stats: [
      { value: "80%", label: "less manual work" },
      { value: "4x", label: "throughput" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Platforms",
    description:
      "Cloud-native infra designed to scale cleanly with AI workloads.",
    icon: "Cloud",
    href: `${NAV_ROUTES.services}#cloud`,
    color: "#C7F2E3",
    image: "/images/solutions/cloud.webp",
    stats: [
      { value: "∞", label: "elastic scale" },
      { value: "40%", label: "cost savings" },
    ],
  },
] as const;
