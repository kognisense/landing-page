'use client'

import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { FinancialRiskValidationGrid, ValidationRow } from './financial-risk-validation-grid'

export function FinancialRiskSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-lg bg-olive-950/2.5 p-8 dark:bg-white/5">
          <FinancialRiskValidationGrid>
            <div className="flex max-w-2xl flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Eyebrow>Financial Risk Assessment</Eyebrow>
                <Subheading>The Financial Cost of Inaction</Subheading>
              </div>
              <div className="text-base/7 text-olive-700 dark:text-olive-400">
                <p>
                  With mandatory ESG reporting now in force, the cost of delayed compliance is no longer
                  theoretical—it&apos;s a quantifiable business risk affecting contracts, fines, and market access.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:mt-16">
              {/* Row 1: Regulatory Penalty */}
              <ValidationRow
                stat="£50,000+"
                subheader="Direct Regulatory Fines"
                copy="The FRC Conduct Committee can impose civil penalties exceeding £50,000 per breach for inaccurate or missing SECR disclosures. With the 2026 SRS transition, the 'grace period' for reporting errors is officially closing."
              />

              {/* Row 2: Market Access Threat */}
              <ValidationRow
                stat="90%"
                subheader="Market Access Risk"
                copy="Retailers representing 90% of the UK grocery market (including Tesco, M&S, and Asda) have now mandated Scope 3 transparency. Suppliers failing to provide audit-ready carbon data risk immediate exclusion from Tier-1 retailer supply chains."
              />

              {/* Row 3: Supply Chain Deadline */}
              <ValidationRow
                stat="Jan 2026"
                subheader="The 'SDR Ripple' Deadline"
                copy="While mandatory for large groups first, the UK SDR 2026 mandate triggers a data request ripple across 82% of the food supply chain. SMEs with ready-to-share ESG data are already securing 'Preferred Supplier' status over those who wait."
              />
            </div>
          </FinancialRiskValidationGrid>

          {/* Sources Attribution */}
          <div className="mt-8 border-t border-olive-950/10 pt-8 dark:border-white/10">
            <p className="text-xs text-olive-600 dark:text-olive-500">
              Sources: UK Government SECR Guidelines, FRC Enforcement Policy 2025, BRC Retailer Net Zero Pledges.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
