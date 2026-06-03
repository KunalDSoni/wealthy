/**
 * Single source of truth for brand-level facts.
 * Every value here is verified against the live site / founder data.
 * To update business copy, edit this file — never a component.
 */

export const SITE = {
  name: "Plan Happy Wealth",
  shortName: "PHW",
  tagline: "Plan, manage, and grow your wealth — stress-free.",
  description:
    "Plan Happy Wealth, led by Seema Kakade Ahuja (CFP, QPFP, MBA) with 25+ years of experience, helps families plan goal-based financial roadmaps and build lasting wealth without stress.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://planhappywealth.com",
  locale: "en_IN",

  // Verbatim from the live site
  email: "seemakakade@gmail.com",
  phone: "+91 9930061909",
  phoneE164: "+919930061909",
  address: {
    line1: "F 2708, Oberoi Splendor",
    line2: "JVLR, Andheri East",
    city: "Mumbai",
    region: "Maharashtra",
    pin: "400060",
    country: "India",
  },

  // AMFI compliance label used across the live site
  regulatoryLabel: "AMFI-Registered Mutual Fund Distributor",
  // TODO(founder): confirm ARN / EUIN before launch
  arn: "ARN-XXXXXX",
  euin: "EUIN-XXXXXXX",
} as const;

export const FOUNDER = {
  name: "Seema Kakade Ahuja",
  position: "Founder & Wealth Architect",
  initials: "SKA",
  credentials: ["CFP", "QPFP", "MBA"],
  yearsExperience: 25,
  // Verbatim from /detail/782530/company-profile
  mission:
    "Plan and manage your resources in a stress-free manner — so you achieve every financial dream and goal, and create wealth and happiness for you and your family.",
  focus:
    "Promoting financial literacy and helping clients take charge of their financial life, achieve their goals, and enjoy life to the fullest.",
} as const;

export const SOCIAL = {
  instagram: "https://instagram.com/plan_happy_wealth",
  instagramHandle: "@plan_happy_wealth",
  linkedin: "https://www.linkedin.com/in/seema-kakade-3883a9a",
} as const;

export const NAV_LINKS = [
  { label: "Approach", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Goals", href: "#goals" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Conversion paths — primary / secondary. */
export const CTA = {
  primary: { label: "Book a Free Consultation", href: "#consult" },
  secondary: { label: "Talk to an Advisor", href: "tel:+919930061909" },
} as const;

export const SEO_KEYWORDS = [
  "financial planner",
  "wealth advisor India",
  "goal based financial planning",
  "retirement planning",
  "investment planning",
  "financial planning India",
  "mutual fund distributor Mumbai",
  "CFP financial planner",
] as const;

export const DISCLAIMERS = {
  calculator:
    "For illustration only. Actual returns may vary. Mutual fund investments are subject to market risks; read all scheme-related documents carefully.",
  general:
    "Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Plan Happy Wealth is an AMFI-registered mutual fund distributor; insurance and planning services are advisory in nature.",
} as const;
