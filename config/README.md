# Brand Configuration Guide

## Overview

All brand-related information (business name, location, contact details, etc.) is centralized in `/config/brand.ts`. This makes it easy to update branding across the entire application from a single location.

## How to Change the Business Name

To change from "Kognisense" to a different name, simply update the `brand.ts` file:

### 1. Open the configuration file:
```
/config/brand.ts
```

### 2. Update the `name` property:
```typescript
export const BRAND = {
  name: 'YourNewName',  // ← Change this
  tagline: 'Automated Compliance for UK Food SMEs',
  // ... rest of config
}
```

### 3. That's it!

The new name will automatically appear everywhere across the application:
- Page titles and metadata
- Navigation bar
- Footer
- All page content
- Contact information
- Email signatures

## What Can Be Changed

### Core Business
- `name` - Business name (appears everywhere)
- `tagline` - Used in page titles and hero sections
- `description` - Meta description for SEO

### Location
- `city` - Default: "Edinburgh"
- `country` - Default: "Scotland"
- `region` - Default: "United Kingdom"

### Contact
- `email` - Contact email address
- `website` - Website URL

### Social Media
- `linkedin` - LinkedIn profile URL
- `twitter` - Twitter/X profile URL

### Product Information
- `launchQuarter` - Default: "Q2 2026"
- `complianceDeadline` - Default: "Jan 2026"
- `foundingPartnerLimit` - Default: 10

### Legal
- `copyrightYear` - Default: "2025"
- `copyrightEntity` - Usually same as business name

## Files That Use BRAND Config

The configuration is used throughout the application in these key areas:

### Layouts & Navigation
- `/app/layout.tsx` - Site metadata and navbar logo
- `/components/sections/footer-section.tsx` - Footer content and copyright

### Pages
- `/app/about/page.tsx`
- `/app/blog/page.tsx`
- `/app/blog/[slug]/page.tsx`
- `/app/contact/page.tsx`
- `/app/partnerships/page.tsx`
- `/app/privacy-policy/page.tsx`
- `/app/security/page.tsx`
- `/app/terms-of-service/page.tsx`

### Components
- `/components/sections/built-for-scale-section.tsx`
- `/components/sections/faq-section.tsx`
- `/components/sections/industry-benchmarks-section.tsx`
- `/components/sections/regulatory-timeline-section.tsx`

## Example: Complete Rebrand

To rebrand from "Kognisense" to "ComplianceAI":

```typescript
export const BRAND = {
  name: 'ComplianceAI',
  tagline: 'AI-Powered Compliance Automation',
  description: 'Transform your compliance workflow with intelligent automation.',

  location: {
    city: 'Edinburgh',
    country: 'Scotland',
    region: 'United Kingdom',
  },

  contact: {
    email: 'hello@complianceai.com',
    website: 'https://complianceai.com',
  },

  social: {
    linkedin: 'https://linkedin.com/company/complianceai',
    twitter: 'https://x.com/complianceai',
  },

  product: {
    launchQuarter: 'Q2 2026',
    complianceDeadline: 'Jan 2026',
    foundingPartnerLimit: 10,
  },

  legal: {
    copyrightYear: '2025',
    copyrightEntity: 'ComplianceAI',
  },
}
```

After saving this change, rebuild the application:
```bash
npm run build
```

All references throughout the site will now show "ComplianceAI" instead of "Kognisense"!

## Note About Blog Posts

Blog post content in `/content/blog/*.md` files contain hardcoded references to "Kognisense" in their markdown content. These are intentionally NOT linked to the BRAND config because:

1. They are historical content that may reference the specific brand at the time they were written
2. Changing them automatically might alter the meaning or context of the posts
3. They can be updated manually if needed for a complete rebrand

If you want to update blog posts, search for "Kognisense" in the `/content/blog/` directory and manually update as needed.
