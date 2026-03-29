import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon'
import { BRAND } from '@/config/brand'

export function RegulatoryTimelineSection() {
  return (
    <section className="py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-16">
          <Eyebrow>Compliance Roadmap</Eyebrow>
          <Subheading className="mx-auto mt-2 max-w-2xl">Regulatory Timeline</Subheading>
          <p className="mx-auto mt-4 max-w-xl text-base/7 text-olive-700 dark:text-olive-400">
            Key ESG compliance deadlines for UK food sector companies. All dates sourced from official government
            and regulatory body publications.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {/* Timeline Item 1: EUDR */}
          <div>
            <time dateTime="2025-12" className="flex items-center text-sm/6 font-semibold text-olive-600 dark:text-olive-500">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                <circle r="2" cx="2" cy="2" fill="currentColor" />
              </svg>
              Now Active
              <div
                aria-hidden="true"
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-olive-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/10"
              ></div>
            </time>
            <p className="mt-6 text-lg/8 font-semibold tracking-tight text-olive-950 dark:text-white">
              EUDR (Deforestation Regulation)
            </p>
            <p className="mt-1 text-base/7 text-olive-700 dark:text-olive-400">
              <span className="font-semibold">4% turnover penalty</span> for soy, cocoa, and palm oil non-compliance.
              {BRAND.location.region} food companies with EU trade must now provide deforestation-free supply chain verification.
            </p>
            <a
              href="https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
            >
              Official EU EUDR Page <ArrowNarrowRightIcon className="h-3 w-3" />
            </a>
          </div>

          {/* Timeline Item 2: UK SDR */}
          <div>
            <time dateTime="2027-01" className="flex items-center text-sm/6 font-semibold text-olive-600 dark:text-olive-500">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                <circle r="2" cx="2" cy="2" fill="currentColor" />
              </svg>
              Jan 2027
              <div
                aria-hidden="true"
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-olive-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/10"
              ></div>
            </time>
            <p className="mt-6 text-lg/8 font-semibold tracking-tight text-olive-950 dark:text-white">
              UK SDR (Sustainability Disclosures)
            </p>
            <p className="mt-1 text-base/7 text-olive-700 dark:text-olive-400">
              Mandatory <span className="font-semibold">Scope 3 reporting</span> for &apos;Big Four&apos; suppliers
              begins. SMEs must provide audit-ready carbon data to maintain contracts with major {BRAND.location.region} retailers.
            </p>
            <a
              href="https://www.gov.uk/government/publications/sustainability-disclosure-requirements-implementation-update-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
            >
              UK Government SDR Framework <ArrowNarrowRightIcon className="h-3 w-3" />
            </a>
          </div>

          {/* Timeline Item 3: CSRD */}
          <div>
            <time dateTime="2027-06" className="flex items-center text-sm/6 font-semibold text-olive-600 dark:text-olive-500">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                <circle r="2" cx="2" cy="2" fill="currentColor" />
              </svg>
              June 2027
              <div
                aria-hidden="true"
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-olive-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/10"
              ></div>
            </time>
            <p className="mt-6 text-lg/8 font-semibold tracking-tight text-olive-950 dark:text-white">
              CSRD Alignment
            </p>
            <p className="mt-1 text-base/7 text-olive-700 dark:text-olive-400">
              Required for all {BRAND.location.region} companies trading with the EU Single Market. {BRAND.name} ensures your data is{' '}
              <span className="font-semibold">ESRS-compliant</span> from day one.
            </p>
            <a
              href="https://www.efrag.org/en/sustainability-reporting"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
            >
              Official EFRAG ESRS Standards <ArrowNarrowRightIcon className="h-3 w-3" />
            </a>
          </div>

          {/* Timeline Item 4: FCA Ratings */}
          <div>
            <time dateTime="2028" className="flex items-center text-sm/6 font-semibold text-olive-600 dark:text-olive-500">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                <circle r="2" cx="2" cy="2" fill="currentColor" />
              </svg>
              2028
              <div
                aria-hidden="true"
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-olive-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/10"
              ></div>
            </time>
            <p className="mt-6 text-lg/8 font-semibold tracking-tight text-olive-950 dark:text-white">
              FCA ESG Ratings Oversight
            </p>
            <p className="mt-1 text-base/7 text-olive-700 dark:text-olive-400">
              <span className="font-semibold">Audit-grade data</span> becomes the mandatory standard for all ESG
              claims. Companies without verifiable data trails face regulatory penalties and market exclusion.
            </p>
            <a
              href="https://www.fca.org.uk/firms/climate-change-sustainable-finance"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
            >
              FCA ESG Ratings Consultation <ArrowNarrowRightIcon className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Industry Insights Banner */}
        <div className="mt-16 rounded-lg bg-olive-950/2.5 px-8 py-10 dark:bg-white/5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-olive-600 dark:text-olive-500">
              Industry Requirements
            </p>
            <h3 className="mt-3 text-2xl/8 font-semibold tracking-tight text-olive-950 dark:text-white">
              Real-World Supplier Standards
            </h3>
            <p className="mt-4 text-base/7 text-olive-700 dark:text-olive-400">
              Beyond regulatory compliance, {BRAND.location.region} food suppliers must meet specific retailer requirements. We help SMEs
              automate the data extraction required for the <span className="font-semibold">&apos;Big Four&apos;</span>{' '}
              supermarket audits and the{' '}
              <span className="font-semibold">BRC Mondra Coalition framework</span>.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2 text-left">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="size-1 flex-none text-olive-600 dark:text-olive-500">
                    <circle r="2" cx="2" cy="2" fill="currentColor" />
                  </svg>
                  <span className="text-sm font-semibold text-olive-950 dark:text-white">BRCGS Grade AA Standards</span>
                </div>
                <p className="ml-3 text-sm/6 text-olive-700 dark:text-olive-400">
                  Audit-ready ESG data mapped to BRCGS certification requirements for food safety and sustainability.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="size-1 flex-none text-olive-600 dark:text-olive-500">
                    <circle r="2" cx="2" cy="2" fill="currentColor" />
                  </svg>
                  <span className="text-sm font-semibold text-olive-950 dark:text-white">
                    Tesco&apos;s Net Zero Supplier Pledge
                  </span>
                </div>
                <p className="ml-3 text-sm/6 text-olive-700 dark:text-olive-400">
                  Automated carbon reporting aligned with Tesco, M&amp;S, Sainsbury&apos;s, and Asda&apos;s supplier
                  sustainability requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Integrity Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-olive-600 dark:text-olive-500">
            Data Integrity Notice: All benchmarks and regulatory dates are sourced from official 2025/2026 filings
            and government roadmaps. {BRAND.name} ensures your reporting stays aligned with these evolving
            standards.
          </p>
        </div>
      </Container>
    </section>
  )
}
