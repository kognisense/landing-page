'use client'

import { motion } from 'framer-motion'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'

export function FinancialRiskCardsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Eyebrow>Financial Risk Assessment</Eyebrow>
          <Subheading className="mt-2">The Financial Cost of Inaction</Subheading>
          <p className="mt-6 text-base/7 text-olive-700 dark:text-olive-400">
            With mandatory ESG reporting now in force, the cost of delayed compliance is no longer theoretical—it&apos;s
            a quantifiable business risk affecting contracts, fines, and market access.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {/* Card 1: Regulatory Penalty - Light Card */}
          <motion.div
            className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-olive-950/2.5 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start dark:bg-white/5"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <p className="flex-none font-display text-6xl font-bold tracking-tight text-olive-700 dark:text-olive-300">
              £50k+
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-2xl/8 font-medium tracking-tight text-olive-950 dark:text-white">
                Direct Regulatory Fines
              </p>
              <p className="mt-2 text-base/7 text-olive-700 dark:text-olive-400">
                The FRC Conduct Committee can impose civil penalties exceeding £50,000 per breach for inaccurate SECR
                disclosures.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Market Access Risk - Dark Card (Featured) */}
          <motion.div
            className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-olive-950 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 dark:bg-olive-800"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            <p className="flex-none font-display text-6xl font-bold tracking-tight text-white">90%</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-2xl/8 font-medium tracking-tight text-white">
                Retailers representing 90% of the UK grocery market now mandate Scope 3 transparency.
              </p>
              <p className="mt-2 text-base/7 text-olive-300">
                Suppliers failing to provide audit-ready carbon data risk immediate exclusion from Tier-1 retailer
                supply chains.
              </p>
            </div>
          </motion.div>

          {/* Card 3: SDR Ripple Deadline - Accent Card */}
          <motion.div
            className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-olive-700 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-36 dark:bg-olive-600"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            <p className="flex-none font-display text-6xl font-bold tracking-tight text-white">Jan 2027</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-2xl/8 font-medium tracking-tight text-white">The 'SDR Ripple' Deadline</p>
              <p className="mt-2 text-base/7 text-olive-200">
                While mandatory for large groups first, the UK SDR 2027 mandate triggers a data request ripple across
                82% of the food supply chain.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sources Attribution */}
        <div className="mx-auto mt-8 max-w-2xl border-t border-olive-950/10 pt-8 lg:mx-0 lg:max-w-none dark:border-white/10">
          <p className="text-xs text-olive-600 dark:text-olive-500">
            Sources: UK Government SECR Guidelines, FRC Enforcement Policy 2026, BRC Retailer Net Zero Pledges.
          </p>
        </div>
      </Container>
    </section>
  )
}
