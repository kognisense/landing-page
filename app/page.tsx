import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Main } from '@/components/elements/main'
import { Subheading } from '@/components/elements/subheading'
import { ThemeToggle } from '@/components/elements/theme-toggle'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CloudIcon } from '@/components/icons/cloud-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { DocumentIcon } from '@/components/icons/document-icon'
import { LockIcon } from '@/components/icons/lock-icon'
import { MapPinIcon } from '@/components/icons/map-pin-icon'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import {
  FinancialRiskValidationGrid,
  ValidationRow,
} from '@/components/sections/financial-risk-validation-grid'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { RiskAssessmentQuiz } from '@/components/sections/risk-assessment-quiz'
import { Stat, StatsThreeColumnWithDescription } from '@/components/sections/stats-three-column-with-description'

export default function Page() {
  return (
    <>
      <NavbarWithLinksActionsAndCenteredLogo
        id="navbar"
        links={
          <>
            <NavbarLink href="#why-now">Why Now</NavbarLink>
            <NavbarLink href="#how-it-works">How It Works</NavbarLink>
            <NavbarLink href="#resources">Resources</NavbarLink>
          </>
        }
        logo={
          <NavbarLogo href="#" className="font-display text-xl tracking-tight text-olive-950 dark:text-white">
            Docuparse ESG
          </NavbarLogo>
        }
        actions={
          <>
            <ThemeToggle />
            <ButtonLink href="#quiz" size="lg">
              Check Compliance
            </ButtonLink>
          </>
        }
      />

      <Main>
        {/* Hero Section */}
        <HeroLeftAlignedWithDemo
          id="hero"
          eyebrow={
            <AnnouncementBadge href="#" text="SDR 2026 Compliance Mandatory for UK Food SMEs" cta="Learn more" />
          }
          headline="Avoid 2026 ESG Fines. Automate Compliance from Your Invoices. Protect Your Supply Chain Contracts."
          subheadline={
            <p>
              UK Food SMEs face mandatory ESG reporting under SDR 2026. Docuparse ESG uses secure AI to turn your
              invoices and documents into audit-ready reports. Built for the UK Food Sector&apos;s new mandatory
              standards.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="#quiz" size="lg">
                Check Your Compliance Status (2-Min Quiz)
              </ButtonLink>

              <PlainButtonLink href="#footer" size="lg">
                Join Waitlist <ArrowNarrowRightIcon />
              </PlainButtonLink>
            </div>
          }
          footer={
            <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-row sm:items-start sm:justify-center sm:gap-12 lg:gap-16">
              {/* AWS Cloud Infrastructure */}
              <div className="flex flex-col items-center gap-3 text-center">
                <CloudIcon className="h-8 w-8 text-olive-500 dark:text-olive-500" />
                <span className="text-xs font-medium uppercase tracking-wide text-olive-600 dark:text-olive-400">
                  Cloud Infrastructure
                </span>
              </div>

              {/* AWS Bedrock */}
              <div className="flex flex-col items-center gap-3 text-center">
                <CpuIcon className="h-8 w-8 text-olive-500 dark:text-olive-500" />
                <span className="text-xs font-medium uppercase tracking-wide text-olive-600 dark:text-olive-400">
                  Private AI Model Isolation
                </span>
              </div>

              {/* AWS Textract */}
              <div className="flex flex-col items-center gap-3 text-center">
                <DocumentIcon className="h-8 w-8 text-olive-500 dark:text-olive-500" />
                <span className="text-xs font-medium uppercase tracking-wide text-olive-600 dark:text-olive-400">
                  Automated Document Extraction
                </span>
              </div>

              {/* UK GDPR */}
              <div className="flex flex-col items-center gap-3 text-center">
                <LockIcon className="h-8 w-8 text-olive-500 dark:text-olive-500" />
                <span className="text-xs font-medium uppercase tracking-wide text-olive-600 dark:text-olive-400">
                  Data Privacy Compliant
                </span>
              </div>

              {/* UK-Based Data */}
              <div className="flex flex-col items-center gap-3 text-center">
                <MapPinIcon className="h-8 w-8 text-olive-500 dark:text-olive-500" />
                <span className="text-xs font-medium uppercase tracking-wide text-olive-600 dark:text-olive-400">
                  London Region Residency
                </span>
              </div>
            </div>
          }
        />

        {/* Financial Cost of Inaction Section */}
        <section className="py-16">
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
                    copy="Retailers representing 90% of the UK grocery market (including Tesco, M&S, and Asda) have now mandated Scope 3 transparency. Suppliers failing to provide audit-ready carbon data face immediate 'High Risk' categorization and contract non-renewal."
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

        {/* Industry Benchmarks Section */}
        <StatsThreeColumnWithDescription
          heading="Industry Benchmarks"
          description={
            <p>
              Leading UK food companies are already meeting the new ESG standards. Here&apos;s what the data
              shows—and how Docuparse ESG helps SMEs match this performance.
            </p>
          }
        >
          {/* Card 1: The Compleat Food Group */}
          <Stat
            stat={<span className="font-bold">2x Data Points</span>}
            text={
              <>
                <span className="block font-medium text-olive-950 dark:text-white">The Compleat Food Group</span>
                <span className="mt-2 block">
                  UK chilled food leaders are doubling ESG data granularity to meet M&S and Tesco requirements.
                  Docuparse ESG automates this &apos;data doubling&apos; via AWS Textract.
                </span>
                <a
                  href="https://www.compleatfood.com/wp-content/uploads/2024/07/The-Compleat-Food-Group-ESG-Report-2023-24.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
                >
                  Source <ArrowNarrowRightIcon className="h-3 w-3" />
                </a>
              </>
            }
          />

          {/* Card 2: Bakkavor Group */}
          <Stat
            stat={<span className="font-bold">44.2% Waste Reduction</span>}
            text={
              <>
                <span className="block font-medium text-olive-950 dark:text-white">Bakkavor Group</span>
                <span className="mt-2 block">
                  Bakkavor saved 22,000 tonnes of waste through strategic data partnerships. Our platform provides
                  the real-time visibility needed for this level of operational efficiency.
                </span>
                <a
                  href="https://www.bakkavor.com/en/esg/esg-resources/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
                >
                  Source <ArrowNarrowRightIcon className="h-3 w-3" />
                </a>
              </>
            }
          />

          {/* Card 3: Cottage Delight */}
          <Stat
            stat={<span className="font-bold">4.8 Tonnes Saved</span>}
            text={
              <>
                <span className="block font-medium text-olive-950 dark:text-white">Cottage Delight</span>
                <span className="mt-2 block">
                  SMEs are optimizing packaging in minutes, not weeks, to hit the BRC Retailer Plastic Pact targets.
                </span>
                <a
                  href="https://www.brcgs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
                >
                  Source <ArrowNarrowRightIcon className="h-3 w-3" />
                </a>
              </>
            }
          />
        </StatsThreeColumnWithDescription>

        {/* Regulatory Timeline Section */}
        <section className="py-16">
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
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {/* Timeline Item 1: EUDR */}
              <div>
                <time dateTime="2025-12" className="flex items-center text-sm/6 font-semibold text-olive-600 dark:text-olive-500">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                    <circle r="2" cx="2" cy="2" fill="currentColor" />
                  </svg>
                  Dec 2025
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
                  All UK food companies with EU trade must provide deforestation-free supply chain verification.
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
                <time dateTime="2026-01" className="flex items-center text-sm/6 font-semibold text-olive-600 dark:text-olive-500">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                    <circle r="2" cx="2" cy="2" fill="currentColor" />
                  </svg>
                  Jan 2026
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
                  begins. SMEs must provide audit-ready carbon data to maintain contracts with major retailers.
                </p>
                <a
                  href="https://www.gov.uk/government/publications/sustainability-disclosure-requirements-sdr-and-investment-labels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
                >
                  UK Government SDR Framework <ArrowNarrowRightIcon className="h-3 w-3" />
                </a>
              </div>

              {/* Timeline Item 3: CSRD */}
              <div>
                <time dateTime="2026-06" className="flex items-center text-sm/6 font-semibold text-olive-600 dark:text-olive-500">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                    <circle r="2" cx="2" cy="2" fill="currentColor" />
                  </svg>
                  June 2026
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-olive-950/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/10"
                  ></div>
                </time>
                <p className="mt-6 text-lg/8 font-semibold tracking-tight text-olive-950 dark:text-white">
                  CSRD Alignment
                </p>
                <p className="mt-1 text-base/7 text-olive-700 dark:text-olive-400">
                  Required for all UK companies trading with the EU Single Market. Docuparse ESG ensures your data is{' '}
                  <span className="font-semibold">ESRS-compliant</span> from day one.
                </p>
                <a
                  href="https://www.efrag.org/lab3"
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
                  href="https://www.fca.org.uk/publications/consultation-papers/cp23-28-code-conduct-esg-ratings-and-data-product-providers"
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
                  Beyond regulatory compliance, UK food suppliers must meet specific retailer requirements. We help SMEs
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
                Data Integrity Notice: All benchmarks and regulatory dates are sourced from official 2024/2025 filings
                and government roadmaps. Docuparse ESG ensures your reporting stays aligned with these evolving
                standards.
              </p>
            </div>
          </Container>
        </section>

        {/* Regulatory Risk Assessment Quiz */}
        <RiskAssessmentQuiz />
      </Main>

      {/* Footer */}
      <FooterWithNewsletterFormCategoriesAndSocialIcons
        id="footer"
        logo={
          <img
            src="https://assets.tailwindplus.com/logos/oatmeal-instrument.svg?color=olive-950"
            alt="Logo"
            className="dark:hidden"
            width={85}
            height={28}
          />
        }
        tagline="Build something amazing."
        newsletter={
          <NewsletterForm
            description="Subscribe to our newsletter for updates and tips."
            submitButton="Subscribe"
            placeholder="Enter your email"
          />
        }
        socialLinks={
          <>
            <SocialLink href="#" label="GitHub" icon={<GitHubIcon />} />
            <SocialLink href="#" label="X" icon={<XIcon />} />
          </>
        }
      >
        <FooterCategory name="Product">
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Changelog</FooterLink>
        </FooterCategory>
        <FooterCategory name="Company">
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
        </FooterCategory>
        <FooterCategory name="Resources">
          <FooterLink href="#">Documentation</FooterLink>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">API Reference</FooterLink>
        </FooterCategory>
        <FooterCategory name="Legal">
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
          <FooterLink href="#">Security</FooterLink>
        </FooterCategory>
      </FooterWithNewsletterFormCategoriesAndSocialIcons>
    </>
  )
}
