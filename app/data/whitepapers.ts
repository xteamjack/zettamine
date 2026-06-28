// SME-focused whitepaper ideas, grouped by service area. These are content
// ideas (titles, audience, abstract), not a publishing module. As papers are
// written, flip status to 'available' and add a fileUrl in public/whitepapers/.
export interface Whitepaper {
  title: string
  area: string // solution slug, or 'cross-cutting'
  areaLabel: string
  audience: string
  blurb: string
  status: 'available' | 'coming-soon'
  fileUrl?: string
}

export const whitepapers: Whitepaper[] = [
  // Flagship, cross-cutting
  {
    title: 'The SME Frontier Advantage: Why Being Smaller Is an Edge in the AI Era',
    area: 'cross-cutting',
    areaLabel: 'Flagship',
    audience: 'Founders, MDs, CIOs',
    blurb:
      'Smaller firms can adopt frontier technology faster than large incumbents because they carry less legacy drag. A lean, low-risk adoption sequence that fits an SME budget.',
    status: 'coming-soon',
  },
  {
    title: 'Doing More With Less: A Pragmatic Technology Investment Playbook for SMEs',
    area: 'cross-cutting',
    areaLabel: 'Flagship',
    audience: 'SME owners, CFOs, IT heads',
    blurb:
      'How an SME should prioritise scarce technology spend, where to buy, where to build, and where to leave well alone.',
    status: 'coming-soon',
  },
  // Industrial AI
  {
    title: 'Industry 4.0 for the Mid-Sized Factory: Why SMEs Cannot Afford to Wait',
    area: 'industrial-ai',
    areaLabel: 'Industrial AI',
    audience: 'Plant owners, operations heads',
    blurb:
      'Why Industry 4.0 is no longer a big-factory luxury, framed as small, cheap, provable steps rather than a transformation programme. Start with one machine and measure downtime in money.',
    status: 'coming-soon',
  },
  {
    title: 'Predictive Maintenance on an SME Budget: Proving Value on One Machine',
    area: 'industrial-ai',
    areaLabel: 'Industrial AI',
    audience: 'Plant owners, maintenance leads',
    blurb:
      'The lowest-cost route into industrial AI: retrofit sensors on one critical asset and turn unplanned downtime into a number the owner can see.',
    status: 'coming-soon',
  },
  {
    title: 'Affordable Factory Vision: Quality and Safety Without a Big-Four Price Tag',
    area: 'industrial-ai',
    areaLabel: 'Industrial AI',
    audience: 'Quality and safety leads',
    blurb:
      'Automated visual quality and safety monitoring for a smaller plant, using off-the-shelf cameras and edge inference.',
    status: 'coming-soon',
  },
  // Cognitive ERP
  {
    title: 'Get More From the SAP You Already Bought: An SME Guide to Augmentation Over Migration',
    area: 'cognitive-erp-decoupling',
    areaLabel: 'Cognitive ERP',
    audience: 'SME CIOs, IT heads, finance leaders',
    blurb:
      'Most SMEs cannot justify an S/4HANA migration, and should not have to. How to add modern, AI-assisted experiences and analytics on top of the SAP core, capturing value without replacement.',
    status: 'coming-soon',
  },
  {
    title: 'The SME ERP Squeeze: Beating Rising Licensing Costs Without Ripping Out the Core',
    area: 'cognitive-erp-decoupling',
    areaLabel: 'Cognitive ERP',
    audience: 'SME CFOs, CIOs',
    blurb:
      'Practical ways to move casual users to lighter experiences and offload expensive workflows, cutting cost of ownership while the system of record stays put.',
    status: 'coming-soon',
  },
  {
    title: 'Ninety Days, One Workflow: How SMEs Prove ERP Value Fast',
    area: 'cognitive-erp-decoupling',
    areaLabel: 'Cognitive ERP',
    audience: 'SME IT heads, operations',
    blurb:
      'A low-risk method to prove ERP augmentation on a single high-friction workflow in one quarter, before committing budget.',
    status: 'coming-soon',
  },
  // Frontier Tech Labs
  {
    title: 'Frontier Tech Without a Research Budget: How SMEs Tap Emerging Technology',
    area: 'frontier-tech-labs',
    areaLabel: 'Frontier Tech Labs',
    audience: 'SME founders, CTOs',
    blurb:
      'SMEs cannot fund a research lab, but they can borrow one. How a smaller firm accesses agents, twins and optimisation through co-innovation.',
    status: 'coming-soon',
  },
  {
    title: 'Should an SME Care About AI Agents Yet? A Practical Readiness Guide',
    area: 'frontier-tech-labs',
    areaLabel: 'Frontier Tech Labs',
    audience: 'SME IT heads, operations',
    blurb:
      'A sober readiness test for a smaller firm: where agents pay off today, where they do not, and what has to be true first.',
    status: 'coming-soon',
  },
  // Data Services
  {
    title: 'Good Data Beats Big Models: Why SMEs Win With Quality Ground Truth',
    area: 'data-services',
    areaLabel: 'Data Services',
    audience: 'SME AI and product leads',
    blurb:
      'An SME cannot outspend a giant on compute, but it can win on data quality. Reliable ground truth is the cheapest lever a smaller team has.',
    status: 'coming-soon',
  },
  {
    title: 'The Hidden Cost of Cheap Labels for Resource-Constrained Teams',
    area: 'data-services',
    areaLabel: 'Data Services',
    audience: 'SME AI leads, founders',
    blurb:
      'Cheap annotation looks like a saving and quietly becomes the most expensive mistake a lean team makes. The rework and risk, quantified.',
    status: 'coming-soon',
  },
  // Enterprise Upskilling
  {
    title: 'The SME Talent Gap: Building AI-Native Teams Without Big-Tech Salaries',
    area: 'enterprise-upskilling',
    areaLabel: 'Enterprise Upskilling',
    audience: 'SME founders, HR and IT leaders',
    blurb:
      'SMEs cannot outbid big tech for AI talent, so they must grow and borrow it. A practical talent strategy built on upskilling, internships and partnerships.',
    status: 'coming-soon',
  },
  {
    title: 'The SME Leader’s Learning Agenda: Staying Relevant Without a Sabbatical',
    area: 'enterprise-upskilling',
    areaLabel: 'Enterprise Upskilling',
    audience: 'SME owners, CxOs, senior managers',
    blurb:
      'What a busy SME leader actually needs to understand about frontier technology to make good calls, delivered as a focused agenda aligned to their strategy.',
    status: 'coming-soon',
  },
  // Strategic Advisory
  {
    title: 'Build, Buy or Decouple: An SME Decision Framework for Technology Investments',
    area: 'strategic-advisory',
    areaLabel: 'Strategic Advisory',
    audience: 'SME owners, CIOs, CFOs',
    blurb:
      'The three-way choice behind every SME technology decision, made simple and budget-aware, with a clear test for which path fits which problem.',
    status: 'coming-soon',
  },
  {
    title: 'The SME AI Readiness Scorecard: A One-Page Diagnostic Before You Spend',
    area: 'strategic-advisory',
    areaLabel: 'Strategic Advisory',
    audience: 'SME leadership',
    blurb:
      'A short, honest self-assessment a smaller firm can run before committing to AI, covering data, skills, infrastructure and risk.',
    status: 'coming-soon',
  },
]
