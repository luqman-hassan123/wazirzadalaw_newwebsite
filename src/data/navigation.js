export const mainNav = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Family Law', path: '/services/family-law' },
      { label: 'Civil Law & Litigation', path: '/services/civil-law' },
      { label: 'Corporate & Commercial', path: '/services/corporate-commercial' },
      { label: 'Immigration & Study Abroad', path: '/services/immigration' },
      { label: 'Attestation & Documentation', path: '/services/attestation' },
    ],
  },
  { label: 'About', path: '/about' },
  { label: 'Overseas Pakistanis', path: '/overseas-pakistanis' },
  { label: 'Contact', path: '/contact' },
]

export const footerNav = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services/family-law' },
  { label: 'About Us', path: '/about' },
  { label: 'Overseas Pakistanis', path: '/overseas-pakistanis' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
]

export const serviceOptions = [
  'Family Law',
  'Civil Law & Litigation',
  'Corporate & Commercial',
  'Immigration & Study Abroad',
  'Attestation & Documentation',
  'Overseas Pakistanis',
  'Other',
]
