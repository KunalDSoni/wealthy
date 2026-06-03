/**
 * FAQs — chosen to dismantle the specific objections that stop a family
 * from booking: cost, commitment, trust, and "is this for me?".
 */
export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: "Is the first consultation really free?",
    a: "Yes. The first conversation is a no-obligation discovery call to understand your goals and see whether we're the right fit. There's no charge and no pressure to commit.",
  },
  {
    q: "How is Plan Happy Wealth different from a bank or an agent?",
    a: "A bank or agent sells products. We start with your life goals and design a structured plan — protection, growth, taxation and succession — then choose instruments that fund those goals. The plan comes first; products serve it.",
  },
  {
    q: "I'm starting late. Is it too late to plan?",
    a: "Almost never. We regularly help families in their 40s and 50s build inflation-protected retirement income. The best time to start was years ago; the second-best time is now — with a realistic, disciplined plan.",
  },
  {
    q: "Do I need a large income or corpus to work with you?",
    a: "No. Good planning matters most when resources are finite. We design SIP-led roadmaps that work with your real surplus and scale as your income grows.",
  },
  {
    q: "How do you get paid?",
    a: "Mutual fund distribution is AMFI-registered and remunerated through standard distributor commissions disclosed by the schemes. Our ARN and EUIN appear in the footer of every page. Planning guidance is provided as part of the relationship.",
  },
  {
    q: "Will you keep reviewing my plan, or is it one-and-done?",
    a: "Planning is a decades-long relationship, not a transaction. We revisit your plan at every life milestone, rebalance, and keep you on track as markets and circumstances change.",
  },
];
