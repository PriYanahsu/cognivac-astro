import { PLATFORM_STACK } from "@/features/platform-section/constants";
import { CLAIMS } from "@/constants/claims";

/** Live trust strip — stack we actually build with, not implied customers. */
export const TECH_STRIP = {
  label: "Built with the platforms our clients already run",
  names: PLATFORM_STACK,
} as const;

export const CLIENT_MARKS = CLAIMS.clientMarks.items;

export const LIVE_PARTNERSHIPS = CLAIMS.partnerships.items.filter(
  (item) => item.VERIFIED,
);
