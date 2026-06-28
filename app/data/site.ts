import { solutions, allTopicCount } from './solutions'

export const company = {
  name: 'ZettaMine',
  domain: 'zettamine.com',
  tagline: 'The Innovation-Driven Enterprise',
  promise:
    'Next-generation boutique solutions and SaaS, engineered for high-performance sectors where generic services fall short.',
  email: 'hello@zettamine.com',
  careers: 'careers@zettamine.com',
  phone: '+91 (0) 40 4000 0000',
  locations: ['Hyderabad, India', 'Remote-first, globally'],
  founded: 2024,
  social: [
    { label: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://www.linkedin.com/' },
    { label: 'X', icon: 'lucide:twitter', href: 'https://x.com/' },
    { label: 'GitHub', icon: 'lucide:github', href: 'https://github.com/' },
    { label: 'Email', icon: 'lucide:mail', href: 'mailto:hello@zettamine.com' },
  ],
}

// Company group, surfaced as a dropdown in the header and a column in the footer.
export const companyNav = [
  { label: 'About', to: '/about', icon: 'lucide:building-2', desc: 'Who we are' },
  { label: 'Our Story', to: '/story', icon: 'lucide:book-open', desc: 'How we began' },
  { label: 'Our Approach', to: '/approach', icon: 'lucide:compass', desc: 'How we work' },
  { label: 'Team', to: '/team', icon: 'lucide:users', desc: 'Leaders, advisors and mentors' },
  { label: 'Partners', to: '/partners', icon: 'lucide:handshake', desc: 'Our ecosystem' },
  { label: 'Life at ZettaMine', to: '/life', icon: 'lucide:party-popper', desc: 'Culture and events' },
]

// Primary navigation. Solutions renders as a mega-menu built from `solutions`;
// Company renders as a dropdown built from `companyNav`.
export interface NavItem {
  label: string
  to: string
  mega?: boolean
  group?: boolean
}

export const primaryNav: NavItem[] = [
  { label: 'Solutions', to: '/solutions', mega: true },
  { label: 'Academy', to: '/academy' },
  { label: 'Insights', to: '/insights' },
  { label: 'Labs', to: '/labs' },
  { label: 'Company', to: '/about', group: true },
]

export const stats = [
  { value: 6, suffix: '', label: 'Deep-tech practices', sub: 'Not a generalist shop' },
  { value: allTopicCount, suffix: '', label: 'Specialised capabilities', sub: 'Across the six pillars' },
  { value: 2028, suffix: '', label: 'No forced SAP migration', sub: 'Augment over migrate', plain: true },
  { value: 100, suffix: '%', label: 'Innovation-first delivery', sub: 'No run-of-the-mill work' },
]

// The differentiators that separate a boutique innovation house from a body shop.
export const differentiators = [
  {
    icon: 'lucide:gem',
    title: 'Niche, not generic',
    body: 'We deliberately avoid commodity work. Every engagement targets high-value, defensible problems where deep expertise compounds.',
  },
  {
    icon: 'lucide:flask-conical',
    title: 'Lab-grade R&D',
    body: 'Our Frontier Tech Labs continuously turn emerging research such as agents, BCI and quantum-inspired methods into production-grade capability.',
  },
  {
    icon: 'lucide:scale',
    title: 'Coexistence by design',
    body: 'We help you get more from the core systems you already run, adding agility and a lower cost of ownership without a forced overhaul.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Ground-truth obsessed',
    body: 'From annotation to deployment, we build on verified, pixel-perfect data and measurable outcomes, never on hand-waving.',
  },
]

// "How we work" is a repeatable, low-risk delivery rhythm.
export const approachSteps = [
  {
    no: '01',
    icon: 'lucide:compass',
    title: 'Frame',
    body: 'We start with the business outcome, not the technology. A focused discovery maps the highest-value, lowest-risk opportunity.',
  },
  {
    no: '02',
    icon: 'lucide:flask-conical',
    title: 'Prototype',
    body: 'Frontier Tech Labs builds a production-shaped proof of concept in weeks, using real data, real constraints and measurable signal.',
  },
  {
    no: '03',
    icon: 'lucide:layers',
    title: 'Build alongside',
    body: 'We add value as standalone, edge-first services that wrap around your protected core systems and never disrupt them.',
  },
  {
    no: '04',
    icon: 'lucide:infinity',
    title: 'Scale & enable',
    body: 'We harden, instrument and hand over, upskilling your teams so the capability compounds long after we leave.',
  },
]

export const values = [
  { icon: 'lucide:lightbulb', title: 'Innovation as default', body: 'If it already exists off the shelf, it is not our problem to solve. We pursue the frontier.' },
  { icon: 'lucide:target', title: 'Outcomes over output', body: 'We measure ourselves in business value delivered, not in hours billed or slides produced.' },
  { icon: 'lucide:users', title: 'Boutique by design', body: 'Small, senior, deeply embedded teams. You work with the people who actually build.' },
  { icon: 'lucide:recycle', title: 'Leave teams stronger', body: 'Every engagement transfers capability. We succeed when you no longer need us.' },
  { icon: 'lucide:lock', title: 'Trust & rigour', body: 'Security, compliance and verified ground truth are foundations, not afterthoughts.' },
  { icon: 'lucide:globe', title: 'Build for the long arc', body: 'We architect for where technology is heading, not just where it is today.' },
]

export const story = [
  {
    year: '2024',
    title: 'A different kind of firm',
    body: 'ZettaMine is founded on a contrarian bet, that the most valuable technology work is the work most firms avoid, the niche, frontier and deeply innovative.',
  },
  {
    year: '2024',
    title: 'Frontier Tech Labs opens',
    body: 'Our innovation incubator begins turning emerging research such as autonomous agents, digital twins and quantum-inspired optimisation into deployable capability.',
  },
  {
    year: '2025',
    title: 'The coexistence thesis',
    body: 'We formalise a pragmatic alternative to forced S/4HANA migration, helping SMEs get more value from SAP and modernise at their own pace, decoupling only where it pays.',
  },
  {
    year: '2025',
    title: 'Ground-truth at scale',
    body: 'Our high-fidelity data services mature into domain-verified pipelines for autonomy, medical imaging and industrial vision.',
  },
  {
    year: 'Today',
    title: 'Six pillars, one philosophy',
    body: 'Industrial AI, cognitive ERP, frontier R&D, data services, upskilling and advisory. Each is a deep practice, and all share a single innovation-first DNA.',
  },
]

export const industries = [
  { icon: 'lucide:factory', label: 'Manufacturing' },
  { icon: 'lucide:car', label: 'Mobility & Autonomy' },
  { icon: 'lucide:heart-pulse', label: 'Healthcare & Life Sciences' },
  { icon: 'lucide:truck', label: 'Logistics & Supply Chain' },
  { icon: 'lucide:landmark', label: 'Financial Services' },
  { icon: 'lucide:zap', label: 'Energy & Utilities' },
]

export const footerNav = [
  {
    title: 'Solutions',
    links: solutions.map((s) => ({ label: s.menuTitle, to: `/solutions/${s.slug}` })),
  },
  {
    title: 'Company',
    links: companyNav.map((c) => ({ label: c.label, to: c.to })),
  },
  {
    title: 'Explore',
    links: [
      { label: 'Academy', to: '/academy' },
      { label: 'Insights', to: '/insights' },
      { label: 'Frontier Tech Labs', to: '/labs' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookies' },
      { label: 'Responsible AI', to: '/responsible-ai' },
    ],
  },
]
