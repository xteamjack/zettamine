// Client logos shown in the "Trusted by" wall. Files live in public/clientele/.
// Filenames are kept exactly as on disk (some have spelling quirks); only the
// display name is curated. Confirm display names with the business.
export interface Client {
  name: string
  logo: string
  url?: string
}

export const clientele: Client[] = [
  { name: 'Wipro', logo: 'wipro.svg' },
  { name: 'Capgemini', logo: 'capgemini.svg' },
  { name: 'TCS', logo: 'TCS_consultance.svg' },
  { name: 'Tech Mahindra', logo: 'Tech_mahendra.svg' },
  { name: 'LTIMindtree', logo: 'LTI_mindtree.svg' },
  { name: 'NTT DATA', logo: 'NT_data.svg' },
  { name: 'Stefanini', logo: 'stefanini.svg' },
  { name: 'GE', logo: 'ge.svg' },
  { name: 'AGI Glaspac', logo: 'AGI_glasspac.svg' },
  { name: 'HSIL', logo: 'HSIL.svg' },
  { name: 'Hindware', logo: 'hindware.svg' },
  { name: 'GNA', logo: 'GNA.svg' },
  { name: 'Avok', logo: 'avok.svg' },
  { name: 'SM', logo: 'sm-logo.svg' },
]
