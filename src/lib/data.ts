// v2 — updated 2026-03-25
export const siteConfig = {
  name: "Yash Sonwaney",
  initials: "YS",
  tagline: "Designing systems that make complex things feel simple.",
  bio: "Senior product designer with 7+ years of experience shaping enterprise tools, service ecosystems, and AI-native workflows. Currently finishing an MS in Strategic Design & Management at Parsons School of Design.",
  email: "yash.sonwaney@newschool.edu",
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

export type CaseStudySection =
  | { type: "text"; heading: string; body: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; layout?: "default" | "mobile" }
  | { type: "two-images"; images: { src: string; alt: string; caption?: string }[]; layout?: "default" | "mobile" }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "pull-quote"; text: string; attribution?: string }
  | { type: "callout"; label: string; body: string[] }
  | { type: "steps"; title?: string; items: { num: string; label: string; body?: string }[] }
  | { type: "metrics"; items: { value: string; label: string }[] }
  | { type: "chart"; chartId: "subscriber-growth" | "conversion-milestones" | "churn-reasons"; caption?: string };

export interface CaseStudy {
  role: string;
  timeline: string;
  tools: string[];
  team: string;
  sections: CaseStudySection[];
}


export const projects = [
  {
    slug: "beyond-efficiency",
    title: "Beyond Efficiency: Understanding the Paradox of AI in Hiring",
    subtitle: "A design research capstone investigating how automation and AI have created a paradox — employers drown in high-volume, low-relevance applications while qualified candidates are systematically excluded.",
    category: "DESIGN RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    year: "2025",
    cardBg: "#F5F0E8",
    cardTextColor: "dark" as const,
    coverImage: "/covers/beyond-efficiency.png",
    imageConfig: { fit: "cover" as const, position: "center 75%" },
    caseStudy: {
      role: "Lead Researcher & Designer",
      timeline: "Fall 2025",
      tools: ["DARN Framework", "Focus Groups", "Employer Interviews", "Candidate Surveys", "Thematic Analysis", "Figma"],
      team: "Yash Sonwaney & Ananya (Parsons Design Research Capstone)",
      sections: [
        {
          type: "text" as const,
          heading: "The Paradox of Efficiency",
          body: [
            "Tech hiring promised to get better with AI. Instead, it created a paradox. Employers face an overwhelming flood of applications — many AI-generated — and can't identify the right candidates. Candidates submit hundreds of applications into black-box systems and hear nothing back. Both sides are more frustrated than ever, even as the tools supposedly optimizing the process multiply.",
            "This research project set out to understand that contradiction. Using a multi-method approach, we mapped the hiring ecosystem from both sides — candidate and employer — to identify where the system breaks down, who bears the cost, and how design might intervene.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/hypothesis.png",
          alt: "Research hypothesis: the paradox of efficiency in AI-driven hiring",
          caption: "The central hypothesis — automation creates high volume but low relevance for employers, while qualified candidates are filtered out.",
        },
        {
          type: "metrics" as const,
          items: [
            { value: "92%", label: "Of candidates don't trust AI to be fair in hiring" },
            { value: "61%", label: "Of candidates are ghosted even after an interview" },
            { value: "30–50%", label: "Increase in applications in 24 months due to AI-generated resumes" },
            { value: "53%", label: "Of recruiters report burnout from high volumes of low-quality applications" },
            { value: "$180K", label: "Average cost of a bad hire for a mid-level tech role" },
          ],
        },
        {
          type: "callout" as const,
          label: "The Core Finding",
          body: [
            "AI in hiring hasn't reduced inefficiency — it has displaced it. The burden has shifted from volume management to verification, from filtering to fraud detection. Both sides are working harder than before, inside a system where the tools meant to help are generating the problems they were sold to solve.",
          ],
        },
        {
          type: "text" as const,
          heading: "Research Questions",
          body: [
            "Three questions oriented our inquiry. First: how has AI reshaped hiring, and where do inequities emerge for both candidates and employers? Second: how have AI hiring tools changed how recruiters and hiring managers actually work and make decisions — day to day, not in the abstract? Third: how are candidates adapting to the opacity, ghosting, and systemic inequities baked into modern hiring?",
            "These questions were deliberately held together rather than treated separately. The hiring system is relational — understanding the candidate experience required understanding the recruiter experience, and vice versa.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/research-questions.png",
          alt: "Three research questions guiding the inquiry",
          caption: "Our three research questions — held together as a relational system, not separate tracks.",
        },
        {
          type: "text" as const,
          heading: "Research Methods",
          body: [
            "We used a mixed-methods approach combining primary and secondary research. On the primary side: in-depth interviews with recruiters and hiring managers, a candidate survey with 51 responses, and focus group discussions with candidates navigating active job searches.",
            "Secondary research included a literature review of bias and automation research, social media scans of communities where candidates discuss hiring tactics (Reddit, Blind, LinkedIn), and industry market reports from Greenhouse, Joveo, and The Planet Group.",
            "To map the system as a whole, we applied the D-A-R-N framework — Devices, Actors, Representations, Networks — a strategic design method that surfaces the material and social infrastructure underpinning a market. This helped us see how ATS platforms, AI scoring algorithms, LinkedIn Recruiter, candidate resumes, and job descriptions interact as a system, not just as individual tools.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/case-studies/beyond-efficiency/research-methods.png",
              alt: "Primary and secondary research methods overview",
              caption: "Mixed-method approach: employer interviews, 51-response candidate survey, focus groups, literature review.",
            },
            {
              src: "/case-studies/beyond-efficiency/darn-map.png",
              alt: "D-A-R-N system map of the hiring ecosystem",
              caption: "The D-A-R-N map — Devices, Actors, Representations, Networks — surfacing the hiring system's full infrastructure.",
            },
          ],
        },
        {
          type: "text" as const,
          heading: "The ATS Pipeline & Where AI Enters",
          body: [
            "Most candidates interact with a 7-stage hiring pipeline: job posting, resume submission, AI-powered skill extraction, machine learning ranking by fit score, recruiter review and shortlisting, interview coordination, and final decision. AI is most densely concentrated in stages 3 and 4 — extracting qualifications and ranking candidates before any human sees the application.",
            "What looks like a clean pipeline obscures the reality: recruiters told us that most of their work is still manual, concentrated at the stages where AI is supposed to help most. One recruiter described spending an entire week on a single role that received over a thousand applications. The AI had filtered — but the shortlist it produced still required significant human judgment to evaluate.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/ats-workflow.png",
          alt: "7-stage ATS workflow showing where AI is densely integrated, integrated, or only assisting",
          caption: "The 7-stage ATS pipeline — stages 3 and 4 have the densest AI involvement, yet recruiters report those stages still demand heavy manual effort.",
        },
        {
          type: "pull-quote" as const,
          text: "It's not the rejection that hurts — it's sitting in that grey area, not knowing if any human ever even saw my application.",
          attribution: "Candidate, Focus Group Discussion",
        },
        {
          type: "text" as const,
          heading: "What Candidates Are Experiencing",
          body: [
            "Candidates described a hiring process defined by opacity and asymmetry. Applications disappear into ATS systems with no feedback. The rise of AI-generated resumes has made keyword optimization feel mandatory, pushing candidates to game systems rather than communicate their actual experience. 61% reported being ghosted after completing an interview — a stage where candidates have already invested significant time and emotional energy.",
            "The 92% distrust figure for AI fairness wasn't cynicism — it reflected lived experience. Candidates who optimized their resumes by mirroring job description language reported better response rates, regardless of underlying fit. The system rewards pattern-matching over capability, and candidates know it.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/candidate-journey.png",
          alt: "Candidate journey map showing emotional states from awareness through offer stage",
          caption: "The candidate journey — moving from overwhelmed and unsure at awareness, to strained during preparation, to guarded hope through screening, with relief only at offer.",
        },
        {
          type: "quote" as const,
          text: "Recruitment is still very manual. One role had over a thousand applications and I spent an entire week just going through them.",
          attribution: "Recruiter P002, Employer Interview",
        },
        {
          type: "text" as const,
          heading: "What Employers Are Experiencing",
          body: [
            "Recruiters and hiring managers described being overwhelmed, not empowered. AI hiring tools have increased application volume dramatically but haven't solved the quality problem. 53% of recruiters reported burnout from reviewing high volumes of low-quality, often AI-generated applications.",
            "A new category of problem emerged: fraud. 17% of hiring managers reported interviewing a deepfake candidate — a sign that AI-generated applications are no longer just keyword-stuffed resumes but increasingly fabricated identities. The most consistent AI use case recruiters actually valued wasn't ranking or scoring — it was detecting fake profiles at the top of the funnel.",
            "The best candidates, multiple recruiters noted, still come from outbound sourcing via LinkedIn Recruiter — a manual process. The tools meant to automate inbound hiring haven't replaced the human judgment required to identify genuine fit.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/employer-journey.png",
          alt: "Employer journey map showing emotional states from awareness through decision-making",
          caption: "The employer journey — alert at job posting, hopeful at inflow, then overloaded, stressed, and cautious as volume overwhelms the process.",
        },
        {
          type: "text" as const,
          heading: "Candidate Needs",
          body: [
            "Synthesis across survey responses and focus group sessions identified four core needs. First, trust through fair evaluation — candidates want to know the criteria for assessment and that those criteria apply consistently regardless of identity markers. Second, closure over silence — rejection is acceptable; disappearing without response is not. Third, protection from burnout — the process of applying to dozens of roles weekly, reformatting materials per ATS, and managing uncertainty is exhausting. Fourth, agency in a system that feels rigged — candidates want the process to feel like a two-way assessment, not an opaque filter.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/candidate-needs.png",
          alt: "Four synthesized candidate needs: Trust, Closure, Protection from Burnout, Restored Agency",
          caption: "Four candidate needs synthesized from surveys and focus groups — trust, closure, burnout protection, and restored agency.",
        },
        {
          type: "text" as const,
          heading: "Employer Needs",
          body: [
            "Employers surfaced four parallel needs. First, identifying authentic candidates — separating real, qualified humans from AI-generated applications has become a primary concern. Second, managing application volume — the volume problem isn't solved by existing AI tools; it has been created, in part, by them. Third, closing communication gaps — ghosting persists not because recruiters are indifferent but because the process is so manual that communication falls through. Fourth, technology as a cognitive offloader — recruiters want AI to handle the mechanical parts of the process so they can invest judgment in evaluation and relationship-building.",
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/employer-needs.png",
          alt: "Four synthesized employer needs: Authentic Candidates, Volume Management, Communication Gaps, Cognitive Offloading",
          caption: "Four employer needs synthesized from recruiter and hiring manager interviews — authenticity, volume, communication, and cognitive offloading.",
        },
        {
          type: "text" as const,
          heading: "Opportunity & Direction",
          body: [
            "The research converged on a single reframe: the opportunity isn't to make hiring faster, it's to make it more legible for everyone involved. The question we carried into concept development was: how might we rebalance AI in tech hiring to reduce recruiter overload while making qualified candidates more visible?",
            "The theory of change we developed positioned technology as a cognitive offloader — handling mechanical tasks so humans can focus on what requires judgment. In practice, this means less manual processing of applications leads to deeper evaluation of fit, which enables more consistent candidate communication, which attracts more engaged and higher-quality candidates. It's a compounding loop, not a one-time fix.",
            "Our first concept direction was Loop: an AI candidate communication agent that keeps every candidate informed without recruiters having to send a single email themselves. Loop addresses the most emotionally costly part of the hiring process — ghosting — while freeing recruiter bandwidth for higher-value work. Prototyping and testing is underway in Spring 2026.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            {
              src: "/case-studies/beyond-efficiency/opportunity-statement.png",
              alt: "How might we rebalance AI in tech hiring",
              caption: "The opportunity statement reframing the challenge from speed to legibility.",
            },
            {
              src: "/case-studies/beyond-efficiency/theory-of-change.png",
              alt: "Theory of change: technology as cognitive offloader leading to better hiring outcomes",
              caption: "The theory of change — cognitive offloading cascades into deeper evaluation, consistent communication, and better candidate quality.",
            },
          ],
        },
        {
          type: "image" as const,
          src: "/case-studies/beyond-efficiency/loop-concept.png",
          alt: "Loop: Candidate Communication Agent concept — keeping every candidate in the loop without sending a single email",
          caption: "Concept I: Loop — an AI communication agent that eliminates ghosting by keeping every candidate informed, automatically.",
        },
      ],
    },
  },
  {
    slug: "loop-strategy",
    title: "Loop : Strategy",
    subtitle: "Solving the problem of ghosting, Loop is an AI intelligence layer that autonomously manages rejection conversations for recruiters.",
    category: "PRODUCT DESIGN · STRATEGY · AI PRODUCT",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2024",
    cardBg: "#1C1C1A",
    cardTextColor: "light" as const,
    coverImage: "/covers/loop-strategy.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#faf9f7" },
    caseStudy: {
      role: "Product Designer & Strategist",
      timeline: "Oct — Dec 2024",
      tools: ["Figma", "Claude API", "Business Model Canvas", "User Interviews"],
      team: "2 designers + 1 engineer",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "Ghosting is recruiting's dirty secret. Recruiters handle hundreds of candidates simultaneously, and the ones who don't get the job simply... never hear back. Loop is an AI intelligence layer that autonomously manages rejection conversations — turning the worst part of recruiting into a relationship-building opportunity.",
            "I led the product strategy and interaction design, defining the AI's conversational tone, the recruiter's control surface, and the candidate experience. The core design challenge was making automated rejection feel genuinely human and constructive.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "85%", label: "Of candidates preferred Loop rejection over silence" },
            { value: "3x", label: "Faster closure on open candidate loops" },
            { value: "60%", label: "Reduction in recruiter time on rejection tasks" },
          ],
        },
        {
          type: "text" as const,
          heading: "Outcome",
          body: [
            "Loop demonstrated that AI can handle sensitive human conversations when designed with empathy as a constraint, not an afterthought. The prototype was validated with 3 recruiting teams and is being developed further as a standalone product.",
          ],
        },
      ],
    },
  },
  {
    slug: "goretex-accesswear",
    title: "GORE-TEX Accesswear",
    subtitle: "End-to-end service design and growth strategy for a circular outerwear subscription — from 1 subscriber to 120 and a 10/10 NPS in 9 months.",
    category: "GROWTH DESIGN · SERVICE DESIGN",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2025",
    cardBg: "#2B3B2F",
    cardTextColor: "light" as const,
    coverImage: "/covers/goretex-accesswear.png",
    imageConfig: { fit: "cover" as const, position: "center 35%" },
    caseStudy: {
      role: "Design & Growth Strategist",
      timeline: "May — Dec 2025 (9 months)",
      tools: ["Shopify", "Figma", "Stripe", "Supercycle", "Meta Ads", "Mailchimp", "Discord", "Instagram"],
      team: "Lean startup team at Disruptive Edge × GORE-TEX Innovation",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "GORE-TEX AccessWear is a circular outerwear subscription — $50/month for seasonal access to premium jackets across 10+ brands. I joined as the sole designer and growth strategist two weeks after launch, when the platform had 200 waitlisted users but fewer than 5 paying subscribers. Over nine months, I redesigned the end-to-end service experience and built the growth infrastructure that scaled the business to 120+ active subscribers, a 10/10 NPS, and validated product-market fit.",
            "GORE-TEX partnered with Disruptive Edge to test a fundamentally different business model — shifting from one-time, $600\u2013800 jacket purchases to recurring access. The platform ran as a Wizard of Oz pilot: manually operated throughout, designed to validate demand patterns and user behavior before committing to scaled infrastructure.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "1\u2192120+", label: "Active subscribers in 9 months" },
            { value: "5,500+", label: "Instagram followers from ~200" },
            { value: "10/10", label: "Net Promoter Score" },
            { value: "106+", label: "User interviews conducted" },
          ],
        },
        {
          type: "text" as const,
          heading: "Problem Framing",
          body: [
            "Two weeks after launch, the conversion funnel told a clear story: a 4.7% waitlist-to-subscriber rate against a 10% target, and 65% of homepage visitors dropping off above the fold. The platform ran on a fragmented Shopify\u2013Stripe\u2013customer portal stack with multiple broken handoffs in the checkout flow.",
            "Initial usability testing identified two primary failure modes: absent trust signals (no social proof, no founder narrative, no product reviews) and a disorienting browse-to-subscribe journey. Users weren\u2019t rejecting the subscription model \u2014 they were losing confidence mid-flow and dropping off.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "conversion-milestones" as const,
          caption: "Conversion rate as % of the original 200-person waitlist — before and after each phase of work.",
        },
        {
          type: "text" as const,
          heading: "Research & Synthesis",
          body: [
            "Sixteen moderated usability sessions in month one surfaced three failure patterns that cut across participant types.",
            "Trust signals were absent. The site lacked social proof, product reviews, and a recognizable brand voice. Users described it as anonymous — they wanted to know who was behind the service before committing a recurring payment.",
            "The browse-to-subscribe journey was fragmented. No activity-based filtering, and checkout required navigating three disconnected systems. Users lost orientation mid-flow and defaulted to exit rather than working through the confusion.",
            "Seasonality was a structural constraint to design around, not just a timing problem. A late-spring launch meant summer was the wrong context to convert for winter jackets. The research reframed this as an opportunity: use low-demand months to stabilize the UX and build the audience — so the system was primed when seasonal intent arrived.",
          ],
        },
        {
          type: "text" as const,
          heading: "Constraints",
          body: [
            "There was no dedicated engineering — I owned the full platform stack. Every Shopify change, checkout fix, and product upload was mine to execute alongside the design work. Every order involved manual procurement, inspection, packaging, and shipping. I built the inventory tracking system from scratch mid-project.",
            "The catalog spanned 10+ outdoor brands — Mountain Hardwear, Patagonia, Burton, Rab, 686, GOREWEAR, 7mesh, Mammut, Rapha, Sitka — each with their own product cycles, asset specs, and approval workflows. Operating without a fulfillment system was a deliberate cost-minimization trade-off for the validation stage, not an oversight.",
          ],
        },
        {
          type: "text" as const,
          heading: "Design Strategy",
          body: [
            "I structured the work as a three-phase strategy, sequenced around the product\u2019s seasonal demand curve rather than arbitrary sprint cycles.",
            "Phase 1 \u2014 Stabilize (May\u2013July): Fix the broken conversion funnel, establish trust signals, and run low-investment acquisition experiments to identify which channels and messages deserved deeper investment.",
            "Phase 2 \u2014 Build (August\u2013September): With a stable core flow, shift to systematic value proposition testing across paid and organic channels — and build the lifecycle email infrastructure needed for retention before peak season.",
            "Phase 3 \u2014 Convert (October\u2013December): Activate the full conversion system as seasonal demand rose — brand co-marketing, community launch, and structured outbound across warm channels.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "subscriber-growth" as const,
          caption: "Active subscriber growth across three design phases, May — December 2025.",
        },
        {
          type: "image" as const,
          src: "/covers/goretex-accesswear.png",
          alt: "GORE-TEX AccessWear platform showing the rental subscription experience",
          caption: "The AccessWear platform — manually operated throughout the pilot to validate demand patterns and user behavior before committing to scaled infrastructure.",
        },
        {
          type: "text" as const,
          heading: "Phase 1 \u2014 UX Stabilization",
          body: [
            "My first sprint targeted the homepage and checkout flow. I redesigned the above-the-fold section to address the 65% drop-off, restructured the browse experience with activity-based filters, and repaired the Shopify\u2013Stripe integration to close the broken checkout handoffs. I launched a lead capture modal that generated 15 sign-ups in its first weekend.",
            "To address the trust deficit, I sourced product reviews from brand partners and added a founder narrative section. Sign-ups climbed from 9 to 17 within the first sprint cycle. A second round of 16 usability sessions surfaced the next barrier: pricing comprehension. Users needed MSRP comparisons alongside the subscription price to internalize the value proposition.",
          ],
        },
        {
          type: "text" as const,
          heading: "Phase 2 \u2014 Messaging & Lifecycle Infrastructure",
          body: [
            "With a stable conversion funnel, I turned to the top of the funnel — specifically, which value propositions moved people. I designed and launched 18 awareness ads testing distinct framings: try-before-you-buy, activity-specific gear, multi-brand access, sustainability, and travel use cases. Try-before-you-buy consistently outperformed, with CTRs reaching 6.56% and CPCs as low as $0.24.",
            "In parallel, I built a 14-touchpoint email lifecycle covering non-user nurture, subscriber onboarding, engagement, and churn recovery. The mailing list reached 740 subscribers. By the end of Phase 2, I had a clear segmentation of high-intent users, a validated messaging hierarchy, and a defined channel strategy — everything needed to run a full conversion push in peak season.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "18", label: "Awareness ads across distinct value props" },
            { value: "6.56%", label: "Best ad click-through rate" },
            { value: "$0.24", label: "Best cost per click" },
            { value: "14", label: "Email lifecycle touchpoints built" },
          ],
        },
        {
          type: "text" as const,
          heading: "Phase 3 \u2014 Conversion & Community",
          body: [
            "October marked the shift from awareness to conversion. I activated brand co-marketing with 7mesh, GOREWEAR, and Mountain Hardwear — each campaign drove 90+ new followers. Outreach across 500+ accounts per week generated 1,500+ conversations at a 10% response rate.",
            "I designed and launched the AccessWear Insider Program on Discord — a structured community with a contribution-based rewards system where high-engagement members could earn access to $700\u2013800 jackets. The community became the project\u2019s most valuable feedback loop: accelerating product learning and reducing churn through peer accountability.",
            "Growth compounded through the quarter: 79 sign-ups and 3,000+ Instagram followers by mid-October, 120+ active subscribers by December. The platform reached operational capacity at 85\u2013100 concurrent users — a ceiling set by the manual fulfillment model, not by product demand.",
          ],
        },
        {
          type: "text" as const,
          heading: "Outcomes",
          body: [
            "The pilot validated the core hypothesis: premium outdoor consumers will engage with a subscription access model when the service experience is frictionless and the product variety is compelling. Active subscribers gave a 10/10 NPS, and organic community behavior — members sharing trip photos, recruiting peers, requesting new gear categories — provided qualitative signal that went well beyond the headline metrics.",
            "Churn data deepened the picture. The primary drivers for leaving were limited jacket variety (80%) and seasonal timing (20%) — inventory and catalog constraints, not dissatisfaction with the model. When asked what would bring them back, 80% cited broader selection and 60% cited access to additional gear categories. Both are solvable with scale.",
            "Brand partner engagement strengthened independently of subscriber growth: Mountain Hardwear moved to a collaborative marketing arrangement, GOREWEAR co-created a giveaway campaign, and leadership from Mammut, Burton, and Mountain Hardwear requested follow-up sessions. Rent the Runway co-founder Jenny Fleiss was brought in as a consultant on financial modeling.",
          ],
        },
        {
          type: "chart" as const,
          chartId: "churn-reasons" as const,
          caption: "Exit reasons cluster around inventory constraints and seasonal timing — not dissatisfaction with the subscription model itself.",
        },
        {
          type: "metrics" as const,
          items: [
            { value: "12,000%", label: "Subscriber growth over 9 months" },
            { value: "920+", label: "Mailing list subscribers" },
            { value: "35+", label: "Active Discord community members" },
            { value: "7", label: "Brand partner collab campaigns" },
          ],
        },
        {
          type: "text" as const,
          heading: "Retrospective",
          body: [
            "The email lifecycle I built in September should have been live from July — the delay cost conversions during the months when trust-building mattered most. The Supercycle integration, which would have resolved the fragmented checkout experience, was deprioritized for too long. The Discord community, which became the most valuable feedback mechanism in the project, should have been part of the initial service design — not a month-four addition.",
            "The underlying pattern: in zero-to-one product work, retention and feedback infrastructure almost always need to come before acquisition. Building the loop before scaling the funnel consistently delivers stronger outcomes than the reverse.",
          ],
        },
      ],
    },
  },
  {
    slug: "hp-scale-ui",
    title: "HP: Scale UI",
    subtitle: "Designing & shipping printer control panel UX for all HP Printers across market segments & user archetypes.",
    category: "PRODUCT DESIGN · DESIGN SYSTEMS",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2024",
    cardBg: "#EDECE8",
    cardTextColor: "dark" as const,
    coverImage: "/covers/hp-scale-ui.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#e8e8e8" },
    caseStudy: {
      role: "Interaction Designer",
      timeline: "2020 — 2024",
      tools: ["Figma", "Axure", "FigJam", "Scale UI Toolkit", "Jira"],
      team: "Visual Design, Product CX Architects, UX Writing, Cross-segment design teams",
      sections: [
        {
          type: "text" as const,
          heading: "Shipped to 56 Million Customers. On a 2.7\u2033 Screen.",
          body: [
            "Scale UI is HP's proprietary design system and shared codebase for printer control panels — ensuring design consistency and reducing time to market by reusing code across platforms. The first product built on Scale UI shipped globally as the HP Color LaserJet Pro 4310dw. I shipped multiple printer programs for HP's 56 million customers worldwide.",
            "As Interaction Designer, I owned design delivery for three key use cases: Print from USB/Network/Source experience, Contacts Management app, and Active Jobs app (Print/Copy/Scan/Fax). My collaborators spanned Visual Design, Product CX Architects, UX Writing teams, and cross-segment design teams. Partners included Scale UI FW Developers, Product Development Firmware, Product Managers, and Design Leadership.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "56M", label: "HP customers reached worldwide" },
            { value: "4", label: "Market segments — Home, SoHo, SMB, Enterprise" },
            { value: "4", label: "Display sizes from 21\u2033 to 2.7\u2033" },
            { value: "4\u2605", label: "Rated on PC Mag, Amazon, Digital Trends" },
          ],
        },
        {
          type: "text" as const,
          heading: "The Constraints Were the Design",
          body: [
            "Scale UI presented four compounding challenges that don't exist in typical software design. First, a myriad of archetypes: printers are used by multiple personas in many contexts — from Ella (Home Consumer) to Joe (SMB IT Admin) to Wen (Small Business Owner). My design files had to deliver a smooth experience for all of them. Second, wide range responsive: printer program teams can use any display size, so every design had to work responsively across XL-L (21\u2033 to 8\u2033), S (4.3\u2033), and XS (2.7\u2033) displays.",
            "Third, a unified design system: all design output had to fit existing patterns, managing one-off changes and code customization within product timelines. Fourth, segment adherence: a single design file had to incorporate requirements from Home, SoHo, SMB, and Large Format Printing — simultaneously.",
          ],
        },
        {
          type: "quote" as const,
          text: "Designing for hardware means your mistakes ship in plastic. There's no hotfix for a bad touchscreen interaction.",
        },
        {
          type: "text" as const,
          heading: "Task Analysis and Rigorous Delivery",
          body: [
            "For each use case, I created task flows and Data Flow Diagrams (DFDs) mapping the happy path and all edge case scenarios. I documented every error case and error handling scenario, then validated the workflow with Subject Matter Experts from both design and development. This wasn't just thoroughness — it was how firmware teams built the product.",
            "Design delivery followed a set of clear principles: Wide Range Responsive, Detailed, Modular, Cohesive, and Predecessor product compatibility. Each atomic element of the design system trickled responsively from 21\u2033 down to 2.7\u2033 display. I defined Pattern Buildup Tables — documenting every interactive element in every workflow, with verbiage matched to internal code repositories for easier change management. Behavior Tables specified interactive component behavior to reduce manual communication overhead between teams.",
          ],
        },
        {
          type: "text" as const,
          heading: "Design Validation in the Lab",
          body: [
            "Once development milestones were achieved, I conducted implementation reviews on physical devices and documented issues in Jira to ensure the build matched design to pixel perfection. The Print from USB user journey: Plug in USB → Menu > Print > Print from USB → Browse and choose file → Select copies and print options → Print successful. The Contacts app: Menu > Contacts → View list → Add/edit contacts and groups — all on a resistive touchscreen in a physical office environment.",
            "The HP Color LaserJet Pro MFP 4301fdw — the first product launched on Scale UI — received 4-star reviews from PC Mag, Amazon, and was named a top pick by Digital Trends. The design system continues to ship across HP's global printer portfolio.",
          ],
        },
      ],
    },
  },
  {
    slug: "hp-learning",
    title: "HP Learning",
    subtitle: "B2C EdTech platform backed by strategic educational partnerships — connecting classrooms to living rooms through printable, hands-on learning.",
    category: "PRODUCT DESIGN · EDTECH",
    filterCategory: "Product Design" as ProjectCategory,
    year: "2022",
    cardBg: "#C25B3A",
    cardTextColor: "light" as const,
    coverImage: "/covers/hp-learning.png",
    imageConfig: { fit: "contain" as const, position: "center center", bg: "#f0ede8" },
    caseStudy: {
      role: "Interaction Designer",
      timeline: "2021 — 2022 (1 year)",
      tools: ["Figma", "FigJam", "Miro", "UserTesting", "Analytics"],
      team: "Interaction Designer, Visual Designer, Design Team Lead, Content Strategy",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "HP Learning is a premium supplemental learning platform for pre-primary and primary school students, backed by strategic educational partnerships. HP already had a presence in millions of homes through its printers. The bet: use that footprint to drive educational engagement — and in turn, drive print revenue.",
            "I envisioned the initial concept for an internal leadership showcase, leveraging the power of video to make learning more accessible for kids. That concept earned executive buy-in and kicked off the project. As the sole Interaction Designer, I owned the full design process end-to-end — from discovery and research through design delivery, dev review cycles, and implementation validation.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "2M", label: "Printed pages generated" },
            { value: "60K", label: "Active users on the platform" },
            { value: "16", label: "EdTech platforms benchmarked" },
            { value: "2021", label: "Pilot — Russia & Turkey" },
          ],
        },
        {
          type: "text" as const,
          heading: "The Challenge",
          body: [
            "HP Learning had a structural challenge most EdTech products don't face: the person paying (parent), the person assigning (teacher), and the person learning (child) are three distinct actors with entirely different needs and motivations. The Parent and The Teacher are the design center archetypes — The Child is inexplicit in decision-making, but absolutely central to the experience.",
            "The platform also needed to serve two business goals simultaneously: drive educational engagement meaningful enough to earn parent trust, and generate enough print activity to justify HP's investment in the product. Every design decision had to move both needles at once.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/home-first-time-user.png",
          alt: "HP Learning home screen — first-time user with grade filter and personalised top picks",
          caption: "Home screen: grade-filtered content, personalised top picks, and structured discovery across mobile and desktop.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          heading: "Research",
          body: [
            "The global EdTech market was worth US$185.20Bn. Major players — Khan Academy, Toppr, IXL, Byju's, Education.com, Outschool — had launched digital solutions with real, measurable impact. Before designing a single screen, I conducted an in-depth analysis of 16 platforms, mapping existing user flows, interaction patterns, and content systems.",
            "Collaborating with the Research and Marketing teams, I studied consumer psychology theories around value propositions, persuasion, and activation. The central question wasn't just 'what do children need?' — it was 'what creates a habit?' I mapped HP Learning's full activation journey using habit loop theory: Sign Up → Setup Moment → Aha Moment → Habit Moment → Engaged.",
          ],
        },
        {
          type: "text" as const,
          heading: "Habit Loop",
          body: [
            "Activation mapping meant identifying the exact moments that would turn a curious new user into a committed one. I mapped 10 distinct Aha Moments for parents — from finding the right content by their child's age, grade, and activity type, to watching their child score well on a printed exercise, to having the platform surface teacher recommendations before the parent even thought to ask. The product needed to feel less like a utility and more like an educational partner.",
            "Each Aha Moment anchored to a specific trigger. I mapped three layers: habits (regular content consumption, social sharing, progress tracking), triggers (notifications, rewards one step away, school schedule alignment, new content drops), and low-effort actions (open printables, resume learning, mark activity complete). Every design decision downstream traced back to this framework — making sure the product didn't just attract users, but held them.",
          ],
        },
        {
          type: "text" as const,
          heading: "User Journey",
          body: [
            "The hero scenario tied all three actors together. A child goes to school and learns theoretical principles from a teacher. After class, the teacher selects exercises aligned with the day's curriculum and assigns them through HP Learning. The parent finds the homework, prints the activity, and monitors progress. The child revises school-learnt knowledge in a fun, physical, interactive way.",
            "This loop — school theory to home practice through print — was the flywheel the entire product was built around. It gave teachers a lightweight assignment tool, parents a purposeful reason to print, and children a tactile learning experience that extended the classroom.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/entry-returning-user.png",
          alt: "HP Learning entry point and returning user flow — Engagement Point to Print Exercise",
          caption: "Core user flow: Engagement Point → Choose Topic → Video Lesson → Print Exercise. Designed for the first-time visitor and the habitual learner equally.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          heading: "Design & Delivery",
          body: [
            "I led strategic workshops in FigJam and Miro to build alignment across adjacent partners — Development Lead, Product Owner (Marketing), Legal & Security Council, and the Analytics Dev Team. We iterated hero user flows end-to-end, annotating directly in Figma with development notes, copy review flags, and analytics instrumentation points.",
            "Every screen had to serve both the child (playful, low-friction) and the parent (efficient, informative) simultaneously. The experience was also architected for outward compatibility — built to integrate with HP Smart app, HP Store rewards, and social sharing from the ground up, not retrofitted later.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/post-printing-subtopic.png",
          alt: "Post-printing sub-topic screen — learning outcome, Print Activity CTA, Mark as Complete, Up Next",
          caption: "Post-printing screen: learning outcome, Print Activity, Mark as Complete, Up Next — each state closing one loop and surfacing the next action.",
          layout: "mobile" as const,
        },
        {
          type: "text" as const,
          heading: "The Interstitial",
          body: [
            "Most EdTech products leave the space between lessons undesigned. I treated it as a product moment. The interstitial reinforced progress, surfaced the next learning step, and gave parents a passive visibility window into their child's activity — all without interrupting the flow.",
            "The 'Mark as Complete' mechanic was deliberately low-effort so children could self-report progress without parental intervention. This gave parents a quiet signal of completion and immediately served the next action — closing the habit loop at the exact point where learner drop-off typically spikes.",
          ],
        },
        {
          type: "image" as const,
          src: "/casestudy/hp-learning/interstitial.png",
          alt: "HP Learning interstitial screen — progress reinforcement and next lesson prompt",
          caption: "Interstitial screen: progress signal, Up Next prompt, and Mark as Complete — designed to close one habit loop and open the next.",
          layout: "mobile" as const,
        },
        {
          type: "quote" as const,
          text: "The most successful EdTech product isn't the one with the most content — it's the one that builds the right habit.",
        },
        {
          type: "text" as const,
          heading: "Impact",
          body: [
            "The pilot launched in Russia and Turkey in 2021. My contributions directly drove 2M printed pages across 60K users. Every printed exercise wasn't just educational engagement — it was a tangible signal of print revenue for HP's core business. The redesigned onboarding and activation flow, built on the habit loop framework, measurably improved engagement metrics across the pilot markets.",
            "The experience was architected to integrate with HP Smart app, HP Store rewards, and HP ecosystem products — positioning HP Learning not just as an EdTech play, but as a long-term flywheel for HP's broader consumer business. The pilot proved the concept both educationally and commercially; the architecture was ready to scale.",
          ],
        },
        {
          type: "text" as const,
          heading: "Reflection",
          body: [
            "The sharpest shift in my thinking on this project was moving from 'what features does an EdTech platform need?' to 'what moment makes a parent come back tomorrow?' Framing the design problem around habit formation — not content completeness — changed every decision we made downstream, from the activation flow to the interstitial mechanic to how we sequenced the teacher-parent-child journey.",
            "If I were to revisit it, I'd invest more research time with children directly. The child is the inexplicit user — central to the experience but invisible in our design process. I'd also A/B test the interstitial variations rather than shipping one direction, and build teacher-side tools with the same depth as the parent experience. The teacher journey was the least designed leg of the three-actor loop, and that's where I see the most untapped retention leverage.",
          ],
        },
      ],
    },
  },
  {
    slug: "bridgit",
    title: "Bridgit",
    subtitle: "AI-powered assistant designed for specialized education teachers.",
    category: "INCLUSIVE DESIGN RESEARCH",
    filterCategory: "Research" as ProjectCategory,
    year: "2025",
    cardBg: "#1E2E40",
    cardTextColor: "light" as const,
    coverImage: "/covers/bridgit.png",
    imageConfig: { fit: "cover" as const, position: "center center" },
    caseStudy: {
      role: "UX Researcher & Interaction Designer",
      timeline: "16 weeks — Microsoft EES × Parsons",
      tools: ["Figma", "Miro", "Semi-structured Interviews", "Affinity Mapping", "Participatory Design"],
      team: "4 designers (Microsoft External Engagement Studio × Parsons School of Design)",
      sections: [
        {
          type: "text" as const,
          heading: "No One Was Building for the Specialists",
          body: [
            "Specialized education teachers — ESL instructors, speech pathologists, reading intervention specialists — manage their own schedules across multiple classrooms, write individualized plans for every student, and coordinate through hallway conversations and after-hours texts. No AI tool on the market was built for how they actually work. Bridgit changed that.",
            "Over 16 weeks with Microsoft's External Engagement Studio at Parsons, I worked with a team of four to go from a deliberately open brief — 'How might we empower under-represented communities through AI?' — to a validated product direction grounded in seven interviews, seven literature reviews, and six participatory design sessions across three co-design rounds.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "7", label: "Semi-structured interviews across 5 stakeholder groups" },
            { value: "7", label: "Literature papers reviewed" },
            { value: "6", label: "Co-design sessions across 3 rounds" },
            { value: "3", label: "Major research pivots" },
          ],
        },
        {
          type: "text" as const,
          heading: "Open Brief, Documented Assumptions",
          body: [
            "Microsoft gave us no target user, no domain, no constraints. Our team gravitated toward education — specifically, AI's role in elementary learning. Before any fieldwork, we logged six assumptions: 'AI will replace teachers,' 'Parents are nervous about AI,' 'Learning with AI is better than without.' Most turned out to be incomplete.",
            "We scoped a mixed-methods study: literature review across seven papers, semi-structured interviews with seven participants spanning teachers, specialists, administrators, and parents, and three rounds of co-design workshops. The semi-structured format was deliberate — we didn't yet know which threads would matter most.",
          ],
        },
        {
          type: "text" as const,
          heading: "The Same Bottleneck, Every Interview",
          body: [
            "Seven interviews. Four recurring patterns. Administrative overload: Meher, a speech pathologist, spends more time making her schedule than working with students. Broken parent communication: Olivia described texting, emailing, calling, and sending backpack notes to a parent and still getting no response. Technology adopted without support: Stephanie, 42 years in the classroom, recounted getting Apple computers with no training — 'nobody knew how to turn them on.' And foundational skills being sacrificed to screen time.",
            "Three of seven literature papers had already flagged the same signal: implementation challenges in AI education sit overwhelmingly with teachers — not students, not parents. The interviews confirmed it from every direction.",
          ],
        },
        {
          type: "quote" as const,
          text: "I might need to text, email, put a note in the backpack, and call home and I still won't hear anything.",
          attribution: "Olivia, classroom teacher — on parent communication",
        },
        {
          type: "text" as const,
          heading: "Three Pivots",
          body: [
            "The research took three significant turns. The first came after interviews: we'd started centered on children. Every participant — regardless of role — pointed to teacher burden as the systemic bottleneck. We reframed the entire project around educators. The second pivot happened in co-design Round 2, when Meher and Stephanie revealed that specialist teachers experience every pain point at higher intensity than general classroom teachers — fragmented schedules across multiple classrooms, per-student documentation, and the lowest priority in school-wide scheduling. Competitive analysis confirmed no product addressed their workflow: Magic School, Brisk, and ClassDojo all target general classrooms.",
            "The third pivot shaped the interaction model. Concept validation showed that specialists don't work in isolated tasks — they move through continuous rhythms of sessions, transitions, disruptions, and documentation. A tool offering discrete features would add fragmentation. Bridgit's AI became proactive rather than reactive: surfacing schedule disruptions, drafting session summaries, proposing make-up slots, and generating parent communications without being prompted.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/dashboard.png", alt: "Bridgit dashboard with proactive AI assistant and daily overview", caption: "The dashboard surfaces the day's schedule, student alerts, and AI-generated tasks at a glance." },
            { src: "/casestudy/bridgit/dashboard-absence.png", alt: "Bridgit handling an absent student with AI-suggested rescheduling", caption: "When a student is absent, Bridgit proactively suggests make-up slots — no manual scheduling required." },
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/schedule.png", alt: "Bridgit weekly calendar view with color-coded sessions", caption: "Color-coded by student and session type — designed for specialists who need to scan their day in seconds." },
            { src: "/casestudy/bridgit/schedule-ai.png", alt: "AI-suggested session slots for rescheduling", caption: "AI-generated make-up slot recommendations, validated in concept testing as a top-priority feature." },
          ],
        },
        {
          type: "text" as const,
          heading: "From Research to Product",
          body: [
            "The traceability between research and product was explicit. Color-coded scheduling came from concept validation: 'simple UI, color-coding needed — I'm moving between classrooms all day.' Proactive absence handling came from workshop data showing specialist schedules are highly prone to disruption. Structured note import came from Meher's finding that documentation consumes more time than instruction. Specialist-to-teacher messaging was validated as the single highest-value feature across all three co-design rounds.",
            "Nothing in Bridgit exists because it seemed like a good idea. It exists because someone told us they needed it.",
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/import-notes.png", alt: "Structured note import interface for session documentation", caption: "Structured note import — Meher's documentation burden translated directly into a core feature." },
            { src: "/casestudy/bridgit/personalize.png", alt: "AI-generated personalization strategies per student", caption: "One-click personalization: AI surfaces activity guides and strategies tailored to each student's profile." },
          ],
        },
        {
          type: "two-images" as const,
          images: [
            { src: "/casestudy/bridgit/session-page.png", alt: "Session page with AI-drafted session summary", caption: "AI drafts the session summary — the specialist reviews and approves, rather than writing from scratch." },
            { src: "/casestudy/bridgit/bulk-sending.png", alt: "AI-drafted parent communication templates for bulk sending", caption: "Parent communication templates drafted by AI — addressing Olivia's multi-channel outreach problem directly." },
          ],
        },
        {
          type: "text" as const,
          heading: "Reflection",
          body: [
            "Documenting assumptions before fieldwork created accountability — we couldn't rationalize around findings that contradicted our starting point. Shifting from generative to participatory methods at the right moment maintained momentum and gave participants ownership of the solution direction.",
            "What I'd strengthen: observational shadowing to watch specialists through their actual day, longer usability testing cycles in-context, and time-motion baselines to quantify administrative burden in hours rather than themes. The qualitative evidence was strong. The quantitative case had room to grow.",
          ],
        },
      ],
    },
  },
  {
    slug: "flexible-insurance-gig-workers",
    title: "Flexible Insurance for Gig Workers",
    subtitle: "1st Place — Rotman Design Challenge. Reimagining traditional insurance structures to enable security and trust for gig workers using AI-enabled CX experiences.",
    category: "STRATEGY · AI CUSTOMER EXPERIENCE",
    filterCategory: "Strategy" as ProjectCategory,
    year: "2024",
    cardBg: "#FAFAF7",
    cardTextColor: "dark" as const,
    coverImage: "/covers/flexible-insurance.jpg",
    imageConfig: { fit: "cover" as const, position: "center center" },
    caseStudy: {
      role: "Strategy Lead & Designer",
      timeline: "48-hour design challenge",
      tools: ["Figma", "Miro", "Business Model Canvas"],
      team: "4 designers (cross-disciplinary)",
      sections: [
        {
          type: "text" as const,
          heading: "Overview",
          body: [
            "The Rotman Design Challenge asked teams to reimagine insurance for the future of work. Our team focused on gig workers — a growing workforce segment that traditional insurance products fundamentally fail to serve.",
            "We designed a flexible, AI-enabled insurance platform that adapts coverage to work patterns in real-time. Instead of fixed monthly premiums, coverage activates and scales based on actual gig activity, creating a trust bridge between insurers and a historically underserved market.",
          ],
        },
        {
          type: "metrics" as const,
          items: [
            { value: "1st", label: "Place — Rotman Design Challenge" },
            { value: "48hrs", label: "From brief to final presentation" },
            { value: "78M", label: "Gig workers in the US alone" },
          ],
        },
        {
          type: "text" as const,
          heading: "Outcome",
          body: [
            "Won first place against 20+ competing teams. The judges highlighted our approach to behavioral trust-building and the AI-driven personalization model as key differentiators. The concept was later developed into a more detailed strategy proposal.",
          ],
        },
      ],
    },
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

export const aboutData = {
  subtitle: "Product Designer & Strategist based in New York",
  narrative: [
    "I\u2019ve spent the last seven years figuring out how to make complicated things feel obvious. At HP, that meant redesigning printer software used by tens of thousands of people who never wanted to think about printers. At Accenture, it was enterprise onboarding flows where a single confusing field could lose a patient. At Parsons, it became something bigger \u2014 understanding how design decisions carry bias, and how AI can either amplify or correct it.",
    "What I keep coming back to is the seam between strategy and craft. I like being in the room where the business model gets debated, and I like being the one who turns that conversation into an interface someone actually wants to use. I think the best designers do both \u2014 they don\u2019t just make things pretty, they make things right.",
    "Right now I\u2019m finishing my MS at Parsons, building AI-native tools, and trying to figure out what design practice looks like when your most powerful collaborator is a language model.",
  ],
  education: {
    school: "Parsons School of Design",
    degree: "MS Strategic Design & Management",
    year: "2026",
  },
  now: [
    "Exploring AI-native design patterns",
    "Finishing MS at Parsons School of Design",
    "Building tools with Claude Code & Cursor",
    "Researching bias in venture capital decisions",
  ],
  philosophy: [
    "Complexity is a design failure.",
    "Strategy without craft is a deck. Craft without strategy is decoration.",
    "The best interface is the one that teaches you something.",
  ],
  personal: "Based in New York. Perpetual optimizer. Finds calm in long walks and loud music.",
};
