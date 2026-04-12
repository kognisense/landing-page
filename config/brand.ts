/**
 * Brand Configuration
 *
 * Single source of truth for all branding, domain, and email constants.
 * Change a value here → it updates everywhere across the app.
 *
 * Only RESEND_API_KEY lives in .env.local (it's a secret).
 */

export const BRAND = {
  name: 'Kognisense',
  tagline: 'Automated Compliance for UK Food SMEs',
  description:
    'Avoid FY27 ESG fines. Kognisense turns your invoices into audit-ready reports using secure AI. Built for UK Food sector mandatory SDR compliance.',

  domain: 'kognisense.co.uk',

  location: {
    city: 'Edinburgh',
    country: 'Scotland',
    region: 'United Kingdom',
  },

  urls: {
    website: 'https://kognisense.co.uk',
    privacyPolicy: 'https://kognisense.co.uk/privacy-policy',
    logo: 'https://kognisense.co.uk/logo.png',
  },

  email: {
    admin: 'hello@kognisense.co.uk',
    sender: 'noreply@kognisense.co.uk',
    from: `"Kognisense" <noreply@kognisense.co.uk>`,
  },

  contact: {
    email: 'hello@kognisense.co.uk',
    website: 'https://kognisense.co.uk',
  },

  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },

  product: {
    launchQuarter: 'Summer 2026',
    complianceDeadline: 'Jan 2027',
    foundingPartnerLimit: 10,
  },

  legal: {
    copyrightYear: '2026',
    copyrightEntity: 'Kognisense',
  },
} as const

export const getBusinessNameWithLocation = () =>
  `${BRAND.name} - ${BRAND.location.city}, ${BRAND.location.country}`

export const getCopyrightText = () =>
  `© ${BRAND.legal.copyrightYear} ${BRAND.legal.copyrightEntity}. Built in ${BRAND.location.city}, ${BRAND.location.country} for UK regulatory standards.`
