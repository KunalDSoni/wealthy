import {
  TrendingUp,
  ShieldCheck,
  HeartPulse,
  Home,
  GraduationCap,
  Receipt,
  type LucideIcon,
} from "lucide-react";

/**
 * Six core services — copy preserved from the live site with a goal-led reframe.
 * A wealth advisory leads with the outcome, not the product.
 */
export type Service = {
  slug: string;
  title: string;
  goalReframe: string;
  tagline: string;
  body: string;
  highlights: string[];
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "mutual-funds",
    title: "Mutual Funds",
    goalReframe: "Wealth Creation Engine",
    tagline: "The simplest way to build wealth across market cycles.",
    body:
      "Goal-mapped portfolios across equity, debt and hybrid — risk-profiled, tax-aware, and rebalanced with discipline so emotion never sells at the bottom.",
    highlights: [
      "Goal-mapped equity / debt / hybrid mix",
      "Risk-profiled SIP & lump-sum strategy",
      "Annual review + rebalancing discipline",
    ],
    icon: TrendingUp,
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    goalReframe: "Family Protection Plan",
    tagline: "Pure-risk term cover that does its job — and nothing it shouldn't.",
    body:
      "We cut through the noise to size the right term cover for your real liabilities and dreams — never insurance disguised as investment.",
    highlights: [
      "Need-based sum-assured calculation",
      "Term plans across leading insurers",
      "Cover reviewed at every milestone",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    goalReframe: "Medical Safety Net",
    tagline: "Protect long-term goals from short-term medical shocks.",
    body:
      "The right base + top-up structure so a hospital bill never derails your retirement or your child's education fund.",
    highlights: [
      "Base + Top-Up / Super Top-Up structure",
      "Family-floater vs individual analysis",
      "Senior-citizen & pre-existing guidance",
    ],
    icon: HeartPulse,
  },
  {
    slug: "house-purchase-planning",
    title: "House Purchase Planning",
    goalReframe: "Dream Home Roadmap",
    tagline: "From down-payment SIP to keys-in-hand — planned, not leapt.",
    body:
      "End-to-end home-acquisition guidance — budget, financing, EMI trade-offs and prepayment — without treating a future sale as your retirement plan.",
    highlights: [
      "Down-payment SIP roadmap",
      "EMI affordability & tenure trade-offs",
      "Loan structure & prepayment strategy",
    ],
    icon: Home,
  },
  {
    slug: "childrens-education",
    title: "Children's Education",
    goalReframe: "Next-Generation Planning",
    tagline: "Plan early so your child chooses without compromise.",
    body:
      "Inflation-adjusted corpus modelling for India and overseas education, funded by a SIP plan you can actually sustain — ready the year your child is.",
    highlights: [
      "India + overseas cost modelling",
      "Inflation-adjusted target corpus",
      "SIP plan with milestone reviews",
    ],
    icon: GraduationCap,
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    goalReframe: "Tax-Efficient Wealth",
    tagline: "Tax evasion is illegal. Tax planning isn't.",
    body:
      "We apply every legitimate exemption and provision to reduce your liability and grow your investible surplus — old vs new regime, 80C / 80D / 80CCD and capital-gains timing.",
    highlights: [
      "Old vs new regime comparison",
      "80C / 80D / 80CCD optimisation",
      "Capital-gains harvesting calendar",
    ],
    icon: Receipt,
  },
];
