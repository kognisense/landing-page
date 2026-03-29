'use client'

import { useState } from 'react'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Button } from '@/components/elements/button'
import { DocumentCentered } from '@/components/sections/document-centered'
import { PartnershipInquiryModal } from '@/components/sections/partnership-inquiry-modal'
import { BRAND } from '@/config/brand'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Main>
        <DocumentCentered id="partners" headline="Founding Partner Program">
          <p>
            We are seeking {BRAND.product.foundingPartnerLimit} forward-thinking UK Food SMEs to join our Founding Partner Program.
            Help us refine our AI engine to your specific needs while securing exclusive lifetime benefits.
          </p>
          <p>
            {BRAND.name} is launching in {BRAND.product.launchQuarter} to help UK Food SMEs comply with the {BRAND.product.complianceDeadline} SDR
            mandate. Before our public launch, we're inviting {BRAND.product.foundingPartnerLimit} pioneering companies to
            join as founding partners.
          </p>
          <p>
            As a founding partner, you'll work directly with our product team to ensure {BRAND.name} handles
            your specific compliance challenges. In return, you'll receive permanent pricing discounts,
            priority support, and a direct line to our roadmap.
          </p>
          <p>
            This is a limited opportunity. Once we reach {BRAND.product.foundingPartnerLimit} partners, the program closes permanently.
          </p>

          <h2>Partner Benefits</h2>
          <ul>
            <li>
              <strong>Direct Roadmap Influence:</strong> Access to the product team for feature requests.
              Your compliance challenges shape our development priorities.
            </li>
            <li>
              <strong>Founding Price Lock:</strong> Permanent discount on all document tiers.
              Lock in your pricing before the 2027 compliance rush.
            </li>
            <li>
              <strong>Implementation Concierge:</strong> Priority onboarding for the 2027 reporting cycle.
              Dedicated support from our {BRAND.location.city}-based team.
            </li>
          </ul>

          <h2>Who Should Apply?</h2>
          <p>Ideal candidates include:</p>
          <ul>
            <li>UK Food SMEs with 250+ employees or £36M+ annual turnover</li>
            <li>Suppliers to major UK retailers (Tesco, M&S, Sainsbury's, etc.)</li>
            <li>Companies facing the {BRAND.product.complianceDeadline} SDR reporting mandate</li>
            <li>Businesses currently using manual data entry for ESG compliance</li>
            <li>Organizations willing to provide feedback on early product iterations</li>
          </ul>

          <h2>Application Process</h2>
          <ol>
            <li>Submit application via the form below</li>
            <li>Initial screening call (30 minutes)</li>
            <li>Technical requirements review</li>
            <li>Onboarding and early access ({BRAND.product.launchQuarter})</li>
          </ol>
        </DocumentCentered>

        {/* CTA */}
        <section className="py-24 bg-olive-950/2.5 dark:bg-white/5">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Heading>Ready to Join?</Heading>
              <p className="mt-6 text-base/7 text-olive-700 dark:text-olive-400">
                Apply now to secure your spot as one of our {BRAND.product.foundingPartnerLimit} founding partners. This opportunity
                closes when all positions are filled.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                  Apply for the Partner Program
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </Main>

      {/* Partnership Inquiry Modal */}
      <PartnershipInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
