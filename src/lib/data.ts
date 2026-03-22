export const siteConfig = {
  name: "Yash Sonwaney",
  initials: "YS",
  tagline: "Designing systems that make complex things feel simple.",
  bio: "Senior product designer with 7+ years of experience shaping enterprise tools, service ecosystems, and AI-native workflows. Currently finishing an MS in Strategic Design & Management at Parsons School of Design.",
  email: "yash@email.com",
  linkedin: "https://linkedin.com/in/yashsonwaney",
};

export const experience = [
  { year: "2025", company: "Disruptive Edge", role: "Innovation & Strategy Intern", logo: "/logos/disruptive-edge.jpg" },
  { year: "2026", company: "Parsons ELab", role: "Research Assistant", logo: "/logos/parsons-elab.png" },
  { year: "2020", company: "HP Inc.", role: "Product Designer", logo: "/logos/hp-inc.png" },
  { year: "2017", company: "Accenture", role: "UX Designer", logo: "/logos/accenture.png" },
];

export const projectCategories = ["All", "Product Design", "Strategy", "Research"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const projects = [
  {
    slug: "print-management-dashboard",
    title: "Redesigning the Print Management Dashboard",
    subtitle: "Simplifying a complex workflow for 50,000+ enterprise users.",
    category: "ENTERPRISE UX",
    filterCategory: "Product Design" as ProjectCategory,
    company: "HP Inc.",
    year: "2021",
    imagePlaceholder: "Final dashboard design",
  },
  {
    slug: "ai-hiring-bias-tool",
    title: "AI-Powered Hiring Bias Detection",
    subtitle: "Building an equitable screening tool powered by NLP analysis.",
    category: "AI PRODUCT DESIGN",
    filterCategory: "Product Design" as ProjectCategory,
    company: "Parsons ELab",
    year: "2024",
    imagePlaceholder: "Bias analysis interface",
  },
  {
    slug: "service-blueprint-hp",
    title: "Enterprise Service Blueprint",
    subtitle: "Mapping the end-to-end service experience for managed print services.",
    category: "SERVICE DESIGN",
    filterCategory: "Research" as ProjectCategory,
    company: "HP Inc.",
    year: "2020",
    imagePlaceholder: "Service blueprint diagram",
  },
  {
    slug: "design-system-unification",
    title: "Unifying a Fragmented Design System",
    subtitle: "Creating coherence across 12 product teams and 40+ components.",
    category: "DESIGN SYSTEMS",
    filterCategory: "Product Design" as ProjectCategory,
    company: "HP Inc.",
    year: "2022",
    imagePlaceholder: "Component library overview",
  },
  {
    slug: "innovation-framework",
    title: "Strategic Innovation Framework",
    subtitle: "A repeatable process for identifying and validating disruptive opportunities.",
    category: "STRATEGY",
    filterCategory: "Strategy" as ProjectCategory,
    company: "Disruptive Edge",
    year: "2025",
    imagePlaceholder: "Framework visualization",
  },
  {
    slug: "patient-onboarding-flow",
    title: "Reimagining Patient Onboarding",
    subtitle: "Reducing drop-off by 40% through empathetic form design.",
    category: "ENTERPRISE UX",
    filterCategory: "Product Design" as ProjectCategory,
    company: "Accenture",
    year: "2018",
    imagePlaceholder: "Onboarding flow screens",
  },
];

export const testimonials = [
  {
    quote: "Working with Yash transformed how our team approached enterprise UX. His ability to bridge strategy and execution is rare.",
    name: "Placeholder Name",
    title: "Title at Company",
  },
  {
    quote: "Yash brings a systems-thinking lens to every design problem. He sees the full picture and sweats the details.",
    name: "Placeholder Name",
    title: "Title at Company",
  },
  {
    quote: "His research-driven approach consistently uncovered insights that shaped our product direction.",
    name: "Placeholder Name",
    title: "Title at Company",
  },
];

export const skills = [
  "UX Design",
  "Product Strategy",
  "User Research",
  "Design Systems",
  "Service Design",
  "AI Prototyping",
  "Enterprise B2B",
  "Figma",
  "Cursor",
  "Claude Code",
  "Stakeholder Management",
  "Workshop Facilitation",
  "Information Architecture",
];
