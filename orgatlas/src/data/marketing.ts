import type { FaqEntry, PricingPlan } from "@/types";

export const customerLogos = [
  { name: "Northwind", initials: "NW" },
  { name: "Helios", initials: "HG" },
  { name: "Brightline", initials: "BL" },
  { name: "Cascade", initials: "CR" },
  { name: "Arctic", initials: "AS" },
  { name: "Vertex", initials: "VX" },
];

export const testimonials = [
  {
    quote:
      "OrgAtlas compresses weeks of research into a morning. Our sellers walk into calls already understanding the org chart and buying signals.",
    name: "Nia Roberts",
    title: "Chief Revenue Officer, Helios Grid",
  },
  {
    quote: "It finally feels like marketing and sales share the same source of truth. We plan campaigns around OrgAtlas data now.",
    name: "Lucas Meyer",
    title: "VP Marketing, Northwind Analytics",
  },
  {
    quote: "The AI Mode gives my team instant call prep. It's like having a dedicated analyst for every meeting.",
    name: "Priya Singh",
    title: "Director of Sales Enablement, Brightline Cloud",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Try OrgAtlas with curated weekly signals and limited search.",
    cta: "Get started",
    features: [
      { label: "5 company lookups / week", included: true },
      { label: "Saved searches", included: false },
      { label: "Team collaboration", included: false },
      { label: "AI Mode access", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$249",
    description: "Full GTM workflow support for individual sellers and recruiters.",
    cta: "Start free trial",
    features: [
      { label: "Unlimited company and people search", included: true },
      { label: "Deal and talent alerts", included: true },
      { label: "AI Mode", included: true },
      { label: "CRM sync", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Contact",
    description: "Custom workspaces, advanced governance, and enterprise integrations.",
    cta: "Contact sales",
    features: [
      { label: "Unlimited workspaces", included: true },
      { label: "Role-based access controls", included: true },
      { label: "SAML + SCIM", included: true },
      { label: "Dedicated success manager", included: true },
    ],
  },
];

export const faqs: FaqEntry[] = [
  {
    question: "How fresh is the data?",
    answer:
      "Signals are refreshed daily from public sources, proprietary research, and customer contributed updates.",
  },
  {
    question: "Does OrgAtlas integrate with my CRM?",
    answer: "Pro and Enterprise plans include native Salesforce, HubSpot, and Snowflake exports.",
  },
  {
    question: "Can I invite my team?",
    answer: "Yes. Every plan includes free viewer seats so GTM and talent teams stay aligned.",
  },
  {
    question: "Do you offer trials?",
    answer: "The Pro plan comes with a 14-day free trial and the demo workspace is always available.",
  },
];
