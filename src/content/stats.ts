/**
 * Trust metrics — verified facts only.
 * AUM / families-served figures are intentionally omitted until the founder
 * confirms them; add here (ideally via CMS) once verified.
 */
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  caption: string;
}

export const TRUST_STATS: Stat[] = [
  {
    value: 25,
    suffix: "+",
    label: "Years in financial services",
    caption: "Across multiple market cycles and life stages.",
  },
  {
    value: 3,
    label: "Professional credentials",
    caption: "CFP, QPFP and MBA — a rare planning pedigree.",
  },
  {
    value: 6,
    label: "Life-goal categories planned",
    caption: "Education, marriage, retirement, home, vehicle, vacation.",
  },
  {
    value: 140,
    suffix: "+",
    label: "Investor-education articles",
    caption: "Financial literacy is the heart of the practice.",
  },
];

export interface Credential {
  title: string;
  body: string;
}

export const CREDENTIALS: Credential[] = [
  {
    title: "Certified Financial Planner (CFP)",
    body: "FPSB-certified, with a fiduciary commitment to clients' best interests in the planning process.",
  },
  {
    title: "Qualified Personal Finance Professional (QPFP)",
    body: "A recognised qualification reinforcing rigour in goal-based planning.",
  },
  {
    title: "MBA + 25 years of experience",
    body: "A quarter-century guiding families through every life event and every market.",
  },
  {
    title: "AMFI-Registered MF Distributor",
    body: "Distribution services are AMFI-registered; ARN and EUIN are disclosed in the footer.",
  },
];

/** Logos / labels for the trust marquee. */
export const TRUST_BADGES: string[] = [
  "CFP — Certified Financial Planner",
  "QPFP",
  "MBA",
  "AMFI-Registered Distributor",
  "Fiduciary Planning Process",
  "25+ Years Experience",
];
