// Ecosystem partners. Logos (optional) live in public/partners/. Confirm
// blurbs, categories and URLs with the business.
export interface Partner {
  name: string
  slug: string
  category: 'Technology' | 'Data' | 'Delivery' | 'Academic' | 'Cloud'
  blurb: string
  url?: string
  logo?: string
}

export const partners: Partner[] = [
  {
    name: 'P-Collab',
    slug: 'p-collab',
    category: 'Technology',
    url: 'https://p-collab.com/',
    blurb:
      'Engineering and platform partner that extends our delivery capacity, so we scale a build without losing the boutique attention an SME values.',
  },
  {
    name: 'Platina Data AI',
    slug: 'platina-data-ai',
    category: 'Data',
    blurb:
      'Data and AI partner for high-fidelity data and model development, strengthening the ground truth behind everything we ship.',
  },
]
