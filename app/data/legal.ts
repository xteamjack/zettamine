export interface LegalSection {
  heading: string
  body?: string[]
  list?: string[]
}
export interface LegalDoc {
  slug: string
  title: string
  eyebrow: string
  updated: string
  intro: string
  sections: LegalSection[]
}

const updated = 'Last updated: 1 June 2026'
const contactLine =
  'Questions about this document can be sent to hello@zettamine.com and we will respond promptly.'

export const legalDocs: Record<string, LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    updated,
    intro:
      'ZettaMine respects your privacy. This policy explains what information we collect, how we use it, and the choices you have. It applies to zettamine.com and our related services.',
    sections: [
      {
        heading: 'Information we collect',
        body: ['We collect only what we need to operate our business and respond to you:'],
        list: [
          'Contact details you provide via our forms or email (name, company, email, message).',
          'Limited, privacy-respecting analytics about how the site is used (aggregated and non-identifying).',
          'Technical information your browser sends automatically, such as device and approximate region.',
        ],
      },
      {
        heading: 'How we use information',
        list: [
          'To respond to enquiries and deliver the services you request.',
          'To improve the performance, security and content of our website.',
          'To meet legal, accounting and security obligations.',
        ],
      },
      {
        heading: 'What we do not do',
        list: [
          'We do not sell your personal data.',
          'We do not use your project data to train third-party models without explicit consent.',
          'We do not share data with advertisers.',
        ],
      },
      {
        heading: 'Data security & retention',
        body: [
          'We apply industry-standard technical and organisational measures to protect your information, and retain personal data only as long as necessary for the purposes described here or as required by law.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Depending on your jurisdiction, you may have the right to access, correct, export or delete your personal data, and to object to certain processing. To exercise these rights, contact us.',
        ],
      },
      { heading: 'Contact', body: [contactLine] },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Terms of Service',
    eyebrow: 'Legal',
    updated,
    intro:
      'These terms govern your use of the ZettaMine website. By accessing the site you agree to them. Engagement-specific services are governed by separate written agreements.',
    sections: [
      {
        heading: 'Use of the site',
        body: [
          'You may use this website for lawful, informational purposes. You agree not to misuse the site, attempt to disrupt it, or access it through automated means that place unreasonable load on our infrastructure.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'All content on this site — including text, graphics, logos and code — is owned by ZettaMine or its licensors and is protected by applicable intellectual property laws. The ZettaMine name and mark may not be used without written permission.',
        ],
      },
      {
        heading: 'No warranty',
        body: [
          'The site and its content are provided "as is" for general information. While we strive for accuracy, we make no warranties regarding completeness or fitness for a particular purpose.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'To the maximum extent permitted by law, ZettaMine is not liable for any indirect or consequential loss arising from use of this website.',
        ],
      },
      {
        heading: 'Engagements',
        body: [
          'Any professional services we provide are governed by a separate master services agreement and statement of work, which take precedence over these site terms for that work.',
        ],
      },
      { heading: 'Contact', body: [contactLine] },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie Policy',
    eyebrow: 'Legal',
    updated,
    intro:
      'This policy explains how ZettaMine uses cookies and similar technologies on zettamine.com. We keep our use of cookies minimal and purposeful.',
    sections: [
      {
        heading: 'What cookies we use',
        list: [
          'Essential cookies required for the site to function and to remember your theme preference.',
          'Optional, aggregated analytics to understand which content is useful — these never identify you personally.',
        ],
      },
      {
        heading: 'Managing cookies',
        body: [
          'You can control or delete cookies through your browser settings. Disabling essential cookies may affect how the site behaves, such as remembering light/dark mode.',
        ],
      },
      {
        heading: 'Third parties',
        body: [
          'We load web fonts from a third-party provider to render the site. We do not embed advertising or cross-site tracking cookies.',
        ],
      },
      { heading: 'Contact', body: [contactLine] },
    ],
  },
  'responsible-ai': {
    slug: 'responsible-ai',
    title: 'Responsible AI',
    eyebrow: 'Our commitment',
    updated,
    intro:
      'AI is central to what we build. We hold ourselves to a clear standard for how it is designed, deployed and governed — because trustworthy AI is a prerequisite for real business value.',
    sections: [
      {
        heading: 'Principles we build by',
        list: [
          'Human oversight: AI augments expert decision-making; it does not replace accountability.',
          'Transparency: we are explicit about model capabilities, limits and failure modes.',
          'Data integrity: models are only as good as their ground truth — we verify it.',
          'Privacy by design: client data is isolated, and never used to train third-party models without consent.',
          'Fairness & safety: we test for bias, misuse and harmful outputs before deployment.',
        ],
      },
      {
        heading: 'Governance',
        body: [
          'Every AI engagement includes a readiness and risk assessment covering data maturity, infrastructure, compliance and ethical considerations — so deployments are responsible from day one.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'We treat security and compliance as foundations, not afterthoughts, applying least-privilege access, audited pipelines and decoupled architectures that protect core systems.',
        ],
      },
      { heading: 'Talk to us', body: [contactLine] },
    ],
  },
}
