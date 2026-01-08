'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Heading } from '@/components/elements/heading'
import { Subheading } from '@/components/elements/subheading'
import { Button } from '@/components/elements/button'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { LockIcon } from '@/components/icons/lock-icon'
import { UserGroupIcon } from '@/components/icons/user-group-icon'
import { PartnershipInquiryModal } from '@/components/sections/partnership-inquiry-modal'
import { BRAND } from '@/config/brand'

function IncentiveCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex size-12 items-center justify-center rounded-full bg-olive-950/10 dark:bg-white/10">
        <div className="flex size-6 items-center text-olive-600 dark:text-olive-500">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-olive-950 dark:text-white">{title}</h3>
      <p className="text-base/7 text-olive-700 dark:text-olive-400">{description}</p>
    </div>
  )
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Main>
        <HeroSimpleCentered
          headline="Limited Founding Opportunity"
          subheadline={
            <p>
              We are seeking {BRAND.product.foundingPartnerLimit} forward-thinking UK Food SMEs to join our Founding Partner Program.
              Help us refine our AI engine to your specific needs while securing exclusive lifetime benefits.
            </p>
          }
        />

        {/* Program Overview */}
        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Eyebrow className="text-center">Exclusive Program</Eyebrow>
              <Heading className="mt-2 text-center">What Is the Founding Partner Program?</Heading>
              <div className="mt-8 space-y-4 text-base/7 text-olive-700 dark:text-olive-400">
                <p>
                  {BRAND.name} is launching in {BRAND.product.launchQuarter} to help UK Food SMEs comply with the {BRAND.product.complianceDeadline}
                  SDR mandate. Before our public launch, we're inviting {BRAND.product.foundingPartnerLimit} pioneering companies to
                  join our Founding Partner Program.
                </p>
                <p>
                  As a founding partner, you'll work directly with our product team to ensure {BRAND.name}
                  handles your specific compliance challenges. In return, you'll receive permanent
                  pricing discounts, priority support, and a direct line to our roadmap.
                </p>
                <p>
                  This is a limited opportunity. Once we reach {BRAND.product.foundingPartnerLimit} partners, the program closes permanently.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Incentives */}
        <section className="py-24 bg-olive-950/2.5 dark:bg-white/5">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Eyebrow>Founding Partner Benefits</Eyebrow>
              <Subheading className="mt-2">Exclusive Lifetime Advantages</Subheading>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <IncentiveCard
                icon={<LightBulbIcon />}
                title="Direct Roadmap Influence"
                description="Access to the product team for feature requests. Your compliance challenges shape our development priorities."
              />
              <IncentiveCard
                icon={<LockIcon />}
                title="Founding Price Lock"
                description="Permanent discount on all document tiers. Lock in your pricing before the 2026 compliance rush."
              />
              <IncentiveCard
                icon={<UserGroupIcon />}
                title="Implementation Concierge"
                description={`Priority onboarding for the 2026 reporting cycle. Dedicated support from our ${BRAND.location.city}-based team.`}
              />
            </div>
          </Container>
        </section>

        {/* Who Should Apply */}
        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Heading className="text-center">Who Should Apply?</Heading>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-olive-950 dark:text-white">
                    Ideal Candidates:
                  </h3>
                  <ul className="mt-3 space-y-2 text-base/7 text-olive-700 dark:text-olive-400">
                    <li>• UK Food SMEs with 250+ employees or £36M+ annual turnover</li>
                    <li>• Suppliers to major UK retailers (Tesco, M&S, Sainsbury's, etc.)</li>
                    <li>• Companies facing the {BRAND.product.complianceDeadline} SDR reporting mandate</li>
                    <li>• Businesses currently using manual data entry for ESG compliance</li>
                    <li>• Organizations willing to provide feedback on early product iterations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-olive-950 dark:text-white">
                    Application Process:
                  </h3>
                  <ol className="mt-3 space-y-2 text-base/7 text-olive-700 dark:text-olive-400">
                    <li>1. Submit application via the form below</li>
                    <li>2. Initial screening call (30 minutes)</li>
                    <li>3. Technical requirements review</li>
                    <li>4. Onboarding and early access ({BRAND.product.launchQuarter})</li>
                  </ol>
                </div>
              </div>
            </div>
          </Container>
        </section>

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
