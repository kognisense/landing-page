import type { Metadata } from 'next'
import { Main } from '@/components/elements/main'
import { DocumentCentered } from '@/components/sections/document-centered'
import { BRAND } from '@/config/brand'

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND.name}`,
  description: `Privacy policy for ${BRAND.name} - learn how we protect your data with UK data residency and enterprise-grade security.`,
}

export default function Page() {
  return (
    <Main>
      <DocumentCentered
        headline="Privacy Policy"
        subheadline={<p>Last updated: January 2026</p>}
      >
        <h2>Introduction</h2>
        <p>
          {BRAND.name} is committed to protecting your privacy and ensuring the security of your data.
          This Privacy Policy explains how we collect, use, and protect your information when you use
          our document processing platform.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information you provide when using our document processing services, including:
        </p>
        <ul>
          <li>Account information (name, email address, company details)</li>
          <li>Documents and files you upload for processing</li>
          <li>Usage data and analytics to improve our services</li>
          <li>Payment information (processed securely through third-party providers)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our document processing services</li>
          <li>Generate compliance reports and audit-ready outputs</li>
          <li>Communicate with you about your account and our services</li>
          <li>Ensure platform security and prevent fraud</li>
          <li>Comply with legal obligations and regulatory requirements</li>
        </ul>

        <h2>Data Security & UK Compliance</h2>
        <p>
          Your data stays 100% private. We use VPC isolation in AWS London regions, ensuring your
          proprietary supplier information never leaves the UK and is never used to train public AI
          models.
        </p>
        <p>
          Each customer's data is completely siloed in isolated virtual private cloud environments
          with enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit).
        </p>

        <h2>Your Rights Under GDPR</h2>
        <p>
          As a {BRAND.location.region}-based service, we comply with GDPR and UK data protection laws. You have the
          right to:
        </p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain your data for as long as your account is active or as needed to provide services.
          We will retain and use your data as necessary to comply with legal obligations, resolve
          disputes, and enforce our agreements.
        </p>

        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to improve your experience, analyze usage patterns,
          and ensure platform security. You can control cookie preferences through your browser settings.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use trusted third-party services for specific functions (payment processing, analytics,
          cloud infrastructure). All third parties are required to maintain appropriate security
          standards and comply with applicable data protection laws.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes
          by email or through our platform.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          Email: {BRAND.contact.email}<br />
          Address: {BRAND.location.city}, {BRAND.location.country}, {BRAND.location.region}
        </p>
      </DocumentCentered>
    </Main>
  )
}
