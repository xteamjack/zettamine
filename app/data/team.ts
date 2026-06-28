// Our people. Real names, photos and bios are a business input; the entries
// below are placeholders (placeholder: true) so the page renders honestly until
// the real profiles arrive. Photos go in public/team/. Replace name/role/bio and
// drop placeholder when a real profile is ready.
export interface TeamMember {
  name: string
  role: string
  group: 'Leadership' | 'Advisors' | 'Mentors'
  bio: string
  photo?: string
  socials?: { label: string; icon: string; href: string }[]
  placeholder?: boolean
}

export const teamGroups = ['Leadership', 'Advisors', 'Mentors'] as const

export const team: TeamMember[] = [
  {
    name: 'Founder & CEO',
    role: 'Profile coming soon',
    group: 'Leadership',
    placeholder: true,
    bio: 'Sets the innovation-first direction and works directly with clients on the hardest problems.',
  },
  {
    name: 'Co-Founder & CTO',
    role: 'Profile coming soon',
    group: 'Leadership',
    placeholder: true,
    bio: 'Leads engineering and the Frontier Tech Labs, turning research into shipping software.',
  },
  {
    name: 'Head of Delivery',
    role: 'Profile coming soon',
    group: 'Leadership',
    placeholder: true,
    bio: 'Owns outcomes for clients, keeping every engagement scoped, de-risked and on value.',
  },
  {
    name: 'Strategy Advisor',
    role: 'Advisor',
    group: 'Advisors',
    placeholder: true,
    bio: 'Guides our market focus and the SME-first thesis.',
  },
  {
    name: 'Industry Advisor',
    role: 'Advisor',
    group: 'Advisors',
    placeholder: true,
    bio: 'Brings deep manufacturing and ERP experience to our practice.',
  },
  {
    name: 'Engineering Mentor',
    role: 'Mentor',
    group: 'Mentors',
    placeholder: true,
    bio: 'Coaches our teams and Academy cohorts on modern delivery.',
  },
  {
    name: 'Data Science Mentor',
    role: 'Mentor',
    group: 'Mentors',
    placeholder: true,
    bio: 'Mentors on ground-truth data, machine learning and responsible AI.',
  },
]

export const teamByGroup = (g: TeamMember['group']) => team.filter((m) => m.group === g)
