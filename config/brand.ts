/**
 * Brand Configuration
 *
 * Centralized configuration for business name and brand-related constants.
 * Update these values to change branding across the entire application.
 */

export const BRAND = {
  // Core Business Information
  name: 'Kognisense',
  tagline: 'Automated Compliance for UK Food SMEs',
  description: 'Avoid FY27 ESG fines. Kognisense turns your invoices into audit-ready reports using secure AI. Built for UK Food sector mandatory SDR compliance.',

  // Location
  location: {
    city: 'Edinburgh',
    country: 'Scotland',
    region: 'United Kingdom',
  },

  // Contact Information
  contact: {
    email: 'hello@kognisense.com',
    website: 'https://kognisense.com',
  },

  // Social Media
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },

  // Product Information
  product: {
    launchQuarter: 'Summer 2026',
    complianceDeadline: 'Jan 2027',
    foundingPartnerLimit: 10,
  },

  // Legal
  legal: {
    copyrightYear: '2026',
    copyrightEntity: 'Kognisense',
  },
} as const

// Helper function to get the full business name with location
export const getBusinessNameWithLocation = () => {
  return `${BRAND.name} - ${BRAND.location.city}, ${BRAND.location.country}`
}

// Helper function to get copyright text
export const getCopyrightText = () => {
  return `© ${BRAND.legal.copyrightYear} ${BRAND.legal.copyrightEntity}. Built in ${BRAND.location.city}, ${BRAND.location.country} for UK regulatory standards.`
}
