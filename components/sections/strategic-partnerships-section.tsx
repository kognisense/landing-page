'use client'

import { useState } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { Button } from '../elements/button'
import { LightBulbIcon } from '../icons/light-bulb-icon'
import { LockIcon } from '../icons/lock-icon'
import { UserGroupIcon } from '../icons/user-group-icon'
import { PartnershipInquiryModal } from './partnership-inquiry-modal'

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

export function StrategicPartnershipsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="partnerships" className="py-24">
        <Container>
          <div className="rounded-2xl border border-olive-950/10 bg-olive-950/2.5 p-8 sm:p-12 lg:p-16 dark:border-white/10 dark:bg-white/5">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Limited Founding Opportunity</Eyebrow>
              <Subheading className="mt-2">Shape the Future of Food Compliance</Subheading>
              <p className="mt-6 text-base/7 text-olive-700 dark:text-olive-400">
                We are seeking 10 forward-thinking UK Food SMEs to join our Founding Partner Program. Help us refine
                our AI engine to your specific needs while securing exclusive lifetime benefits.
              </p>
            </div>

            {/* Incentive Grid */}
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                description="Priority onboarding for the 2026 reporting cycle. Dedicated support from our Edinburgh-based team."
              />
            </div>

            {/* CTA */}
            <div className="mt-12 flex justify-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Apply for the Partner Program
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Inquiry Modal */}
      <PartnershipInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
