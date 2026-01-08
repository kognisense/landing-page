import type { Metadata } from 'next'
import { Main } from '@/components/elements/main'
import { DocumentCentered } from '@/components/sections/document-centered'
import { BRAND } from '@/config/brand'

export const metadata: Metadata = {
  title: `Terms of Service | ${BRAND.name}`,
  description: `Terms of Service for ${BRAND.name} - understand the terms and conditions for using our intelligent document processing platform.`,
}

export default function Page() {
  return (
    <Main>
      <DocumentCentered
        headline="Terms of Service"
        subheadline={<p>Effective Date: January 2026</p>}
      >
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using {BRAND.name}'s services, you agree to be bound by these Terms of Service
          and all applicable laws and regulations. If you do not agree with any of these terms, you
          are prohibited from using or accessing our services.
        </p>

        <h2>Service Description</h2>
        <p>
          {BRAND.name} provides an intelligent document processing platform that uses AI to extract
          structured data from unstructured documents, including invoices, bills, receipts, and
          regulatory forms. Our primary focus is helping UK Food SMEs comply with ESG reporting
          requirements, though our platform supports various document processing use cases.
        </p>

        <h2>User Accounts</h2>
        <p>
          To use our services, you must create an account and provide accurate, complete information.
          You are responsible for:
        </p>
        <ul>
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized access</li>
          <li>Ensuring your use complies with all applicable laws</li>
        </ul>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for any unlawful purpose</li>
          <li>Upload malicious code, viruses, or harmful data</li>
          <li>Attempt to access, tamper with, or reverse engineer our systems</li>
          <li>Share your account credentials with unauthorized parties</li>
          <li>Use the platform in any way that could harm {BRAND.name} or our users</li>
        </ul>

        <h2>Payment Terms</h2>
        <p>
          For paid services, you agree to pay all fees as specified at the time of purchase. Prices
          are subject to change with notice. Founding Partner Program members receive locked pricing
          as specified in their partnership agreement.
        </p>
        <p>
          We use third-party payment processors. By providing payment information, you authorize us
          to charge the specified fees to your payment method.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The {BRAND.name} platform, including all software, algorithms, designs, and documentation, is
          owned by {BRAND.name} and protected by intellectual property laws. You retain ownership of your
          uploaded documents and generated reports.
        </p>
        <p>
          You grant us a limited license to process your documents solely for the purpose of providing
          our services. We do not use your proprietary data to train public AI models.
        </p>

        <h2>Data Processing and Privacy</h2>
        <p>
          Our data processing practices are governed by our Privacy Policy. Your data remains in AWS
          London regions and is protected with enterprise-grade security measures including VPC
          isolation and encryption.
        </p>

        <h2>Service Availability and Support</h2>
        <p>
          While we strive for 99.98% uptime, we do not guarantee uninterrupted access. We may perform
          maintenance, updates, or modifications that temporarily affect service availability.
        </p>
        <p>
          Support is provided based on your service tier. Founding Partner Program members receive
          priority support from our {BRAND.location.city}-based team.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, {BRAND.name} shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages resulting from your use of or
          inability to use the service.
        </p>
        <p>
          Our total liability for any claims arising from our services shall not exceed the amount
          you paid us in the twelve months preceding the claim.
        </p>

        <h2>Warranties and Disclaimers</h2>
        <p>
          While we use advanced AI models for document processing, we provide the service "as is"
          without warranties of any kind. We recommend human review of critical compliance data before
          final submission to regulators.
        </p>

        <h2>Termination</h2>
        <p>
          Either party may terminate this agreement with notice. Upon termination, you will lose
          access to the platform, but you may export your data within 30 days. We reserve the right
          to terminate accounts that violate these terms.
        </p>

        <h2>Governing Law and Jurisdiction</h2>
        <p>
          These Terms of Service are governed by the laws of {BRAND.location.country} and the {BRAND.location.region}. Any
          disputes shall be resolved in the courts of {BRAND.location.country}.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We may modify these terms at any time. Material changes will be communicated via email.
          Continued use of the service after changes constitutes acceptance of the modified terms.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact us at:
        </p>
        <p>
          Email: {BRAND.contact.email}<br />
          Address: {BRAND.location.city}, {BRAND.location.country}, {BRAND.location.region}
        </p>
      </DocumentCentered>
    </Main>
  )
}
