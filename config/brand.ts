/**
 * Brand Configuration
 *
 * Centralized configuration for business name and brand-related constants.
 * Update these values to change branding across the entire application.
 */

export const BRAND = {
  // Core Business Information
  name: 'Docuparse',
  tagline: 'Automated Compliance for UK Food SMEs',
  description: 'Avoid 2026 ESG fines. Docuparse turns your invoices into audit-ready reports using secure AI. Built for UK Food sector mandatory SDR 2026 compliance.',

  // Location
  location: {
    city: 'Edinburgh',
    country: 'Scotland',
    region: 'United Kingdom',
  },

  // Contact Information
  contact: {
    email: 'hello@docuparse.com',
    website: 'https://docuparse.com',
  },

  // Social Media
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },

  // Product Information
  product: {
    launchQuarter: 'Q2 2026',
    complianceDeadline: 'Jan 2026',
    foundingPartnerLimit: 10,
  },

  // Legal
  legal: {
    copyrightYear: '2025',
    copyrightEntity: 'Docuparse',
  },
} as const

// Helper function to get the full business name with location
export const getBusinessNameWithLocation = () => {
  return `${BRAND.name} - ${BRAND.location.city}, ${BRAND.location.country}`
}

// Helper function to get copyright text
export const getCopyrightText = () => {
  return `© ${BRAND.legal.copyrightYear} ${BRAND.legal.copyrightEntity}. Built in ${BRAND.location.city}, ${BRAND.location.country} for UK regulatory standards. Verified for 2025/2026 compliance cycles.`
}
