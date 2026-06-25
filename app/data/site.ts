import { solutions, allTopicCount } from './solutions'

export const company = {
  name: 'Zettamine',
  domain: 'zettamine.com',
  tagline: 'The Innovation-Driven Enterprise',
  promise:
    'Next-generation boutique solutions and SaaS — engineered for high-performance sectors where generic services fall short.',
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

// Primary navigation. Solutions render as a mega-menu built from `solutions`.
export const primaryNav = [
  { label: 'Solutions', to: '/solutions', mega: true },
  { label: 'Approach', to: '/approach' },
  { label: 'Labs', to: '/labs' },
  { label: 'About', to: '/about' },
  { label: 'Story', to: '/story' },
]

export const stats = [
  { value: 6, suffix: '', label: 'Deep-tech practices', sub: 'Not a generalist shop' },
  { value: allTopicCount, suffix: '', label: 'Specialised capabilities', sub: 'Across the six pillars' },
  { value: 2028, suffix: '', label: 'SAP deadline, defied', sub: 'Decoupling over migration', plain: true },
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
    body: 'Our Frontier Tech Labs continuously turn emerging research — agents, BCI, quantum-inspired — into production-grade capability.',
  },
  {
    icon: 'lucide:scale',
    title: 'Cost-defiant architecture',
    body: 'Cognitive decoupling and edge-first design free you from forced migrations and runaway licensing — agility without the overhaul.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Ground-truth obsessed',
    body: 'From annotation to deployment, we build on verified, pixel-perfect data and measurable outcomes — never on hand-waving.',
  },
]

// "How we work" — a repeatable, low-risk delivery rhythm.
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
    body: 'Frontier Tech Labs builds a production-shaped proof of concept in weeks — real data, real constraints, measurable signal.',
  },
  {
    no: '03',
    icon: 'lucide:layers',
    title: 'Decouple & build',
    body: 'We extract value as standalone, edge-first services that wrap — never disrupt — your protected core systems.',
  },
  {
    no: '04',
    icon: 'lucide:infinity',
    title: 'Scale & enable',
    body: 'We harden, instrument and hand over — upskilling your teams so the capability compounds long after we leave.',
  },
]

export const values = [
  { icon: 'lucide:lightbulb', title: 'Innovation as default', body: 'If it already exists off the shelf, it is not our problem to solve. We pursue the frontier.' },
  { icon: 'lucide:target', title: 'Outcomes over output', body: 'We measure ourselves in business value delivered — not hours billed or slides produced.' },
  { icon: 'lucide:users', title: 'Boutique by design', body: 'Small, senior, deeply embedded teams. You work with the people who actually build.' },
  { icon: 'lucide:recycle', title: 'Leave teams stronger', body: 'Every engagement transfers capability. We succeed when you no longer need us.' },
  { icon: 'lucide:lock', title: 'Trust & rigour', body: 'Security, compliance and verified ground truth are foundations, not afterthoughts.' },
  { icon: 'lucide:globe', title: 'Build for the long arc', body: 'We architect for where technology is heading, not just where it is today.' },
]

export const story = [
  {
    year: '2024',
    title: 'A different kind of firm',
    body: 'Zettamine is founded on a contrarian bet: that the most valuable technology work is the work most firms avoid — niche, frontier and deeply innovative.',
  },
  {
    year: '2024',
    title: 'Frontier Tech Labs opens',
    body: 'Our innovation incubator begins turning emerging research — autonomous agents, digital twins, quantum-inspired optimisation — into deployable capability.',
  },
  {
    year: '2025',
    title: 'Cognitive Decoupling thesis',
    body: 'We formalise a radical alternative to forced S/4HANA migration, helping SMEs shrink their SAP footprint and defy the 2028 deadline on their own terms.',
  },
  {
    year: '2025',
    title: 'Ground-truth at scale',
    body: 'Our high-fidelity data services mature into domain-verified pipelines for autonomy, medical imaging and industrial vision.',
  },
  {
    year: 'Today',
    title: 'Six pillars, one philosophy',
    body: 'Industrial AI, ERP decoupling, frontier R&D, data services, upskilling and advisory — each a deep practice, all sharing a single innovation-first DNA.',
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
    links: [
      { label: 'About', to: '/about' },
      { label: 'Our Story', to: '/story' },
      { label: 'Our Approach', to: '/approach' },
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
