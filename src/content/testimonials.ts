/**
 * Case studies framed as journeys. Composite stories with illustrative figures —
 * representative of real planning outcomes, not specific individuals.
 */
export interface SuccessStory {
  id: string;
  category: string;
  name: string;
  persona: string;
  before: string;
  journey: string;
  outcome: string;
  metric: { value: string; label: string };
  quote: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "the-late-starters",
    category: "Retirement · Age 47",
    name: "Anil & Meera",
    persona: "Dual-income, started late",
    before:
      "At 47 they felt they'd missed the boat — decent income, scattered policies, no real plan, and a quiet dread about retirement.",
    journey:
      "We consolidated six dead-weight policies, redirected the premiums into a tax-efficient equity-debt mix, and automated escalating SIPs tied to their raises.",
    outcome:
      "They're on track to retire at 60 with an inflation-protected income — and, for the first time, they sleep easy about money.",
    metric: { value: "₹6.4 Cr", label: "Projected nest egg" },
    quote:
      "We stopped feeling behind and started feeling in control. That shift was everything.",
  },
  {
    id: "one-income-two-dreams",
    category: "Education + Home · Age 34",
    name: "The Iyer Family",
    persona: "Single income, two big goals",
    before:
      "One income, a toddler, and two dreams that felt mutually exclusive: a home of their own and a world-class education for their daughter.",
    journey:
      "We sequenced the goals instead of competing them — a focused home-down-payment track, a separate education corpus, and term cover to protect both.",
    outcome:
      "Keys to their home arrived on schedule, and the education fund is fully on track — neither dream sacrificed for the other.",
    metric: { value: "2 of 2", label: "Goals funded on time" },
    quote:
      "She showed us we didn't have to choose. We just had to plan it properly.",
  },
  {
    id: "the-windfall",
    category: "Wealth Creation · Age 41",
    name: "Rohan",
    persona: "ESOP windfall, no roadmap",
    before:
      "A startup exit left Rohan with a sudden, life-changing sum — and total paralysis about what to do with it.",
    journey:
      "We built a phased deployment plan: liquidity buffer, global diversification, tax harvesting, and a giving plan aligned with his values.",
    outcome:
      "His windfall is now a working portfolio compounding toward financial freedom by 48 — not idling in a savings account.",
    metric: { value: "Freedom by 48", label: "7 years ahead of plan" },
    quote:
      "I went from overwhelmed to genuinely excited about what this money could build.",
  },
];
