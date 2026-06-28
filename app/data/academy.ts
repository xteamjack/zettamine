// The Academy: four streams plus institutional tie-ups. GuildTrek and DigiHire
// are sibling brands; confirm their live URLs with the business.
export interface AcademyStream {
  slug: string
  name: string
  audience: string
  promise: string
  icon: string
  highlights: string[]
  cta: { label: string; to: string; external?: boolean }
}

export interface Institution {
  name: string
  type: 'University' | 'Institute'
}

export const academyStreams: AcademyStream[] = [
  {
    slug: 'campus-internships',
    name: 'Campus Internships',
    audience: 'For students, institutions, and the SMEs that need their skills',
    icon: 'lucide:graduation-cap',
    promise:
      'Hands-on, project-based internships run with partner universities and institutes. Interns work on real problems with mentorship from the Labs, and the strongest become hire-ready talent.',
    highlights: [
      'Capstone projects on live briefs, not toy exercises',
      'Mentor pairing with senior engineers',
      'A syllabus co-designed with faculty to match what industry needs',
      'A clear route from campus to placement, feeding DigiHire',
    ],
    cta: { label: 'Partner your institution', to: '/contact' },
  },
  {
    slug: 'cxo-programmes',
    name: 'Executive and CXO Programmes',
    audience: 'For CxOs and senior managers who need to stay relevant',
    icon: 'lucide:trending-up',
    promise:
      'Industry-focused briefings and strategy labs that tie the technologies of the future to the leader’s own strategy. Not a generic course, but sessions built around the decisions a specific team is facing this year.',
    highlights: [
      'Future technology briefings aligned to your strategy',
      'AI strategy and risk labs',
      'A board-level learning agenda',
      'Follow-up advisory so the momentum holds',
    ],
    cta: { label: 'Design a CXO programme', to: '/contact' },
  },
  {
    slug: 'guildtrek',
    name: 'Continuous Upskilling with GuildTrek',
    audience: 'For working professionals and the lean teams they belong to',
    icon: 'lucide:route',
    promise:
      'A continuous learning mission for professionals, delivered through GuildTrek, with role-based tracks, mentorship and certifications that keep skills current as the field moves.',
    highlights: [
      'A stated mission for lifelong upskilling',
      'Role-based tracks a small team can follow',
      'Mentorship and pair-programming with Labs experts',
      'Recognised certifications',
    ],
    cta: { label: 'Explore GuildTrek', to: 'https://guildtrek.com/', external: true },
  },
  {
    slug: 'digihire',
    name: 'Talent Pipeline with DigiHire',
    audience: 'For SMEs that need scarce, skilled, hire-ready talent',
    icon: 'lucide:users',
    promise:
      'The DigiHire stream brings screened, skilled and hire-ready people into the ZettaMine story. Cohorts that train through the Academy become a vetted talent pool, so an SME hires with confidence.',
    highlights: [
      'Skilled and screened candidates',
      'Assessment and verification',
      'A direct line from upskilling to placement',
      'Tight integration with the internship stream',
    ],
    cta: { label: 'Hire through DigiHire', to: 'https://digihire.com/', external: true },
  },
]

export const institutions: Institution[] = [
  { name: 'CBIT', type: 'Institute' },
  { name: 'GITAM', type: 'University' },
  { name: 'Dayanand Sagar', type: 'Institute' },
  { name: 'Narayanamma', type: 'Institute' },
]
