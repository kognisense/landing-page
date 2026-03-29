import type { Metadata } from 'next'
import { Main } from '@/components/elements/main'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { DocumentCentered } from '@/components/sections/document-centered'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { BRAND } from '@/config/brand'

export const metadata: Metadata = {
  title: `About ${BRAND.name} | Intelligent Document Processing for UK Businesses`,
  description: `Learn about ${BRAND.name}, the ${BRAND.location.city}-based document processing platform helping UK Food SMEs automate ESG compliance and regulatory reporting.`,
}

export default function Page() {
  return (
    <Main>
      <DocumentCentered id="about" headline="About">
        <p>
          We're building the intelligent document processing platform for UK businesses facing
          complex regulatory requirements. Our mission is to transform document chaos into clean,
          actionable data—freeing you to focus on growth, not data entry.
        </p>

        <p>
          {BRAND.name} is a document processing platform built in {BRAND.location.city}, {BRAND.location.country}. We focus on doing
          one thing exceptionally well: extracting structured data from unstructured documents using AI.
        </p>

        <p>
          Our ESG compliance solution for UK Food SMEs is our flagship application, but it represents
          just one use case of our broader document processing capabilities. Whether it's invoices,
          receipts, utility bills, or regulatory forms, {BRAND.name} transforms document chaos into
          clean, actionable data.
        </p>

        <h2>What We Do</h2>
        <p>
          At our core, we're AI engineers obsessed with document understanding. Our platform uses
          advanced machine learning models (powered by AWS Bedrock) to:
        </p>
        <ul>
          <li>Extract key data points from PDFs, images, Excel files, and scanned documents</li>
          <li>Validate extracted data with confidence scores</li>
          <li>Generate audit-ready reports in formats required by regulators</li>
          <li>Maintain complete data lineage from source document to final output</li>
        </ul>

        <h2>Why We Built {BRAND.name}</h2>
        <p>
          We saw UK businesses drowning in manual data entry. Compliance teams spending weeks
          copying numbers from invoices into spreadsheets. Small businesses losing retailer
          contracts because they couldn't afford dedicated ESG analysts.
        </p>
        <p>
          We knew AI could solve this. But most AI solutions are black boxes. We built {BRAND.name}
          to be transparent, verifiable, and audit-ready. Every extraction includes a confidence
          score. Every report shows its source documents. Every piece of data stays in the UK.
        </p>

        <h2>Our Approach to Document Processing</h2>
        <p>
          {BRAND.name} is designed around three core principles:
        </p>
        <ul>
          <li>
            <strong>Accuracy First:</strong> We provide confidence scores for every extraction,
            flag low-confidence items for human review, and maintain audit trails showing how each
            data point was derived.
          </li>
          <li>
            <strong>UK Compliance Built-In:</strong> From SECR to GHG Protocol to FRC standards,
            we understand UK regulatory requirements and build them into our platform—not as an
            afterthought, but as core features.
          </li>
          <li>
            <strong>Privacy by Design:</strong> UK data residency isn't a checkbox for us—it's
            fundamental. Every architectural decision prioritizes data privacy and security.
          </li>
        </ul>

        <h2>The Technology Behind {BRAND.name}</h2>
        <p>
          We leverage AWS Bedrock's state-of-the-art AI models, but we don't stop there. Our
          platform adds:
        </p>
        <ul>
          <li>Custom validation layers tuned for UK regulatory documents</li>
          <li>Confidence scoring to identify extraction uncertainty</li>
          <li>Data lineage tracking from source document to final output</li>
          <li>VPC isolation ensuring your data never mingles with other customers</li>
          <li>Zero use of customer data for training public AI models</li>
        </ul>

        <h2>Beyond ESG: The Future of {BRAND.name}</h2>
        <p>
          While ESG compliance is our current focus, we're building a platform that can handle any
          document processing challenge:
        </p>
        <ul>
          <li>Financial statement consolidation</li>
          <li>Supply chain documentation management</li>
          <li>Expense reporting and invoice processing</li>
          <li>Regulatory filings for other industries (healthcare, finance, property)</li>
        </ul>
        <p>
          Our founding partners will shape this roadmap. If you have document processing challenges
          beyond ESG, we want to hear from you.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Data Privacy First:</strong> UK data residency, VPC isolation, no AI training on
            your data. Your proprietary information stays yours.
          </li>
          <li>
            <strong>Accuracy & Transparency:</strong> Confidence scores, human review workflows, and
            complete audit trails. No black boxes.
          </li>
          <li>
            <strong>Built for UK Standards:</strong> SECR, FRC, GHG Protocol compliance isn't
            bolted on—it's baked into our platform architecture.
          </li>
          <li>
            <strong>Customer Success:</strong> Our {BRAND.location.city}-based support team understands UK
            regulations. We're not just a software provider—we're your compliance partner.
          </li>
        </ul>

        <h2>Built in {BRAND.location.city} for UK Businesses</h2>
        <p>
          As a {BRAND.location.country}-based company, we understand the unique challenges facing UK businesses:
          post-Brexit regulatory complexity, increasing ESG mandates, and the pressure to do more
          with limited resources.
        </p>
        <p>
          That's why we're committed to keeping our development, support, and data infrastructure
          in the UK. When you work with {BRAND.name}, you're working with a team that understands your
          regulatory environment—because we operate in it too.
        </p>
      </DocumentCentered>

      <CallToActionSimpleCentered
        headline="Ready to automate your document processing?"
        subheadline={
          <p>
            Join our founding partner program and shape the future of compliance automation for UK
            businesses.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/partnerships" size="lg">
              Apply for Partner Program
            </ButtonLink>
            <PlainButtonLink href="/contact" size="lg">
              Contact Us <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </Main>
  )
}
