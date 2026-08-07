export const WHY_CONTENT = {
  label: "Why Teams Choose Us",
  title: "The three commitments a competitor can't copy from a deck",
  description:
    "Capability lists look identical across vendors. How an engagement actually runs does not.",
} as const;

export const WHY_ITEMS = [
  {
    id: "after-launch",
    title: "We stay after launch",
    description:
      "Support, monitoring, and feature work sit inside the same engagement. No handoff cliff the week the system goes live.",
    accentColor: "#1e4fd8",
  },
  {
    id: "you-own-it",
    title: "Your team owns the code",
    description:
      "Documented, tested, and transferable — with knowledge transfer built into delivery. No black box, no model lock-in, no dependency you did not choose.",
    accentColor: "#0ea5e9",
  },
  {
    id: "production-first",
    title: "Production standards from day one",
    description:
      "Security, tests, and documentation are delivery scope — not a hardening phase you fund later after the audit fails.",
    accentColor: "#f5a623",
  },
] as const;
