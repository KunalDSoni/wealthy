/**
 * The financial-planning process — four steps from clarity to confidence.
 * Each step answers a client objection and moves them toward booking.
 */
export interface ProcessStep {
  no: string;
  title: string;
  body: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    no: "01",
    title: "Discover",
    body: "A relaxed conversation about your life, your family, and the goals that actually matter — before a single product is mentioned.",
  },
  {
    no: "02",
    title: "Design",
    body: "We translate those goals into numbers: corpus targets, time horizons, and a risk profile you genuinely understand and agree with.",
  },
  {
    no: "03",
    title: "Deploy",
    body: "A clear, tax-efficient roadmap — SIPs, protection and structure — put to work with disciplined, jargon-free execution.",
  },
  {
    no: "04",
    title: "Review",
    body: "Life changes. We revisit the plan at every milestone, rebalance, and keep you on track for decades — not just the first year.",
  },
];

/**
 * Philosophy pillars — what makes this a planning practice, not a product shop.
 */
export interface Pillar {
  title: string;
  body: string;
}

export const PHILOSOPHY_PILLARS: Pillar[] = [
  {
    title: "Goals before products",
    body: "We start with your life — education, home, retirement, freedom — and only then choose the instruments that fund them.",
  },
  {
    title: "Plans that survive markets",
    body: "Corrections don't break portfolios; reactions do. Your plan is stress-tested for the downturns, so you never sell in fear.",
  },
  {
    title: "Clarity, not jargon",
    body: "You'll always know what you own, why you own it, and exactly how close you are to each goal.",
  },
  {
    title: "A relationship for decades",
    body: "Planning isn't a one-time transaction. We walk with your family through every milestone and every market.",
  },
];
