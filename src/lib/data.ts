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
    slug: "anti-bias-ai-training",
    title: "Anti-bias AI Training Tool for Capital Allocators",
    subtitle: "An experimental training platform for early-stage VC investors that improves venture evaluation and reduces bias in pitch decision-making.",
    category: "AI-ENABLED RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    coverImage: "/covers/anti-bias-ai-training.png",
    imageConfig: { fit: "cover" as const, position: "center 40%" },
  },
  {
    slug: "bridgit",
    title: "Bridgit",
    subtitle: "AI-powered assistant designed for specialized education teachers.",
    category: "INCLUSIVE DESIGN RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    coverImage: "/covers/bridgit.png",
    imageConfig: { fit: "cover" as const, position: "center center" },
  },
  {
    slug: "goretex-accesswear",
    title: "Gore-Tex Accesswear",
    subtitle: "Designing persuasion, trust and customer service for innovative circular business models.",
    category: "GROWTH DESIGN · SERVICE DESIGN",
    filterCategory: "Strategy" as ProjectCategory,
    coverImage: "/covers/goretex-accesswear.png",
    imageConfig: { fit: "cover" as const, position: "center 35%" },
  },
  {
    slug: "hp-learning",
    title: "HP Learning",
    subtitle: "B2C SaaS platform as a premium supplemental learning platform for pre-primary & primary school students.",
    category: "PRODUCT DESIGN",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/hp-learning.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#f0ede8" },
  },
  {
    slug: "hp-scale-ui",
    title: "HP: Scale UI",
    subtitle: "Designing & shipping printer control panel UX for all HP Printers across market segments & user archetypes.",
    category: "PRODUCT DESIGN · HARDWARE INTERACTION",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/hp-scale-ui.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#e8e8e8" },
  },
  {
    slug: "flexible-insurance-gig-workers",
    title: "Flexible Insurance for Gig Workers",
    subtitle: "1st Place — Rotman Design Challenge. Reimagining traditional insurance structures to enable security and trust for gig workers using AI-enabled CX experiences.",
    category: "STRATEGY · AI CUSTOMER EXPERIENCE",
    filterCategory: "Strategy" as ProjectCategory,
    coverImage: "/covers/flexible-insurance.jpg",
    imageConfig: { fit: "cover" as const, position: "center center" },
  },
  {
    slug: "project-sense",
    title: "Project SENSE",
    subtitle: "Deep analytics tool used to predict delays in Clinical Trial Study timelines & enable decision makers for proactive pivoting.",
    category: "PRODUCT DESIGN",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/project-sense.png",
    imageConfig: { fit: "cover" as const, position: "center 30%" },
  },
  {
    slug: "loop-strategy",
    title: "Loop : Strategy",
    subtitle: "Solving the problem of ghosting, Loop is an AI intelligence layer that autonomously manages rejection conversations for recruiters.",
    category: "PRODUCT DESIGN · STRATEGY · AI PRODUCT",
    filterCategory: "Product Design" as ProjectCategory,
    coverImage: "/covers/loop-strategy.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#faf9f7" },
  },
  {
    slug: "beyond-efficiency",
    title: "Beyond Efficiency",
    subtitle: "Research aimed to understand the shifting dynamics of tech hiring shaped by automation, AI, and technology.",
    category: "STRATEGY · USER RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    coverImage: "/covers/beyond-efficiency.png",
    imageConfig: { fit: "cover" as const, position: "center 75%" },
  },
];

export const testimonials = [
  {
    quote: "Yash is a talented UX/IX/VX design partner and I have thoroughly enjoyed working with him on several projects. He brings a positive attitude to tough challenges, turns around high quality work very quickly, and is very reliable for unplanned requests or issues. He is very focused on delightful end user outcomes and collaborates efficiently with product management and R&D teammates. I'd highly recommend Yash for all your SW product design needs!",
    name: "Rhea Adhikary",
    title: "Group Product Manager | Sr. Manager of AI Experiences",
  },
  {
    quote: "Yash is a great guy. A real self starter, laser focused at creating the best customer experience. He is very approachable and always open for a good conversation how to improve.",
    name: "Stefan Vermeul",
    title: "Senior Director, NA Consumer & Retail Marketing",
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
