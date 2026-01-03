import { Faq, FAQsAccordion } from './faqs-accordion'

export function FAQSection() {
  return (
    <FAQsAccordion
      id="faq"
      headline="Frequently Asked Questions"
      subheadline={
        <p>
          Everything you need to know about Docuparse ESG and UK mandatory ESG reporting requirements for 2026.
        </p>
      }
    >
      <Faq
        question="Who is required to comply with UK SDR 2026?"
        answer={
          <p>
            Companies with over £36 million in turnover or 250+ employees must comply with SECR (Streamlined Energy
            and Carbon Reporting). Suppliers to UK retailers (Tesco, M&S, Sainsbury&apos;s) face additional Scope 3
            reporting obligations starting January 2026.
          </p>
        }
      />
      <Faq
        question="How does Docuparse ESG handle my sensitive supplier data?"
        answer={
          <>
            <p>
              Your data stays 100% private. We use VPC isolation in AWS London regions, ensuring your proprietary
              supplier information never leaves the UK and is never used to train public AI models.
            </p>
            <p>
              Each customer&apos;s data is completely siloed in isolated virtual private cloud environments with
              enterprise-grade encryption.
            </p>
          </>
        }
      />
      <Faq
        question="What documents can Docuparse ESG process?"
        answer={
          <p>
            We extract data from utility bills (electricity, gas, water), fuel invoices, delivery receipts, fleet
            mileage logs, waste management reports, and commodity purchase orders. Supported formats include PDF,
            Excel, CSV, and scanned images.
          </p>
        }
      />
      <Faq
        question="How accurate is the AI extraction compared to manual data entry?"
        answer={
          <p>
            Our AWS Bedrock models are designed for high accuracy on structured documents like invoices and utility
            bills. All extractions include confidence scores, and flagged items can be manually reviewed before final
            report generation to ensure data quality.
          </p>
        }
      />
      <Faq
        question="Can I export data in formats required by auditors and regulators?"
        answer={
          <p>
            Yes. Docuparse ESG generates audit-ready reports in Excel (SECR templates), PDF (s172 strategic
            reports), and CSV for GHG Protocol submissions. All outputs include source document references and
            calculation methodologies required by the FRC.
          </p>
        }
      />
      <Faq
        question="What is the pricing and when will Docuparse ESG be available?"
        answer={
          <>
            <p>
              We&apos;re launching Q1 2026 with pricing based on document volume. Early waitlist members will
              receive priority access and founding member discounts.
            </p>
            <p>Join the waitlist at the bottom of this page to be notified when we launch.</p>
          </>
        }
      />
    </FAQsAccordion>
  )
}
