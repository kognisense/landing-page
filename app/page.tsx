import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { ThemeToggle } from '@/components/elements/theme-toggle'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { FadeIn } from '@/components/elements/fade-in'
import { BuiltForScaleSection } from '@/components/sections/built-for-scale-section'
import { FAQSection } from '@/components/sections/faq-section'
import { FinancialRiskCardsSection } from '@/components/sections/financial-risk-cards-section'
import { FooterSection } from '@/components/sections/footer-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { IndustryBenchmarksSection } from '@/components/sections/industry-benchmarks-section'
import { RegulatoryTimelineSection } from '@/components/sections/regulatory-timeline-section'
import { ResourcesSection } from '@/components/sections/resources-section'
import { RiskAssessmentQuiz } from '@/components/sections/risk-assessment-quiz'

export default function Page() {
  return (
    <>
      <NavbarWithLinksActionsAndCenteredLogo
        id="navbar"
        links={
          <>
            <NavbarLink href="#how-it-works">How It Works</NavbarLink>
            <NavbarLink href="#quiz">Risk Assessment</NavbarLink>
            <NavbarLink href="#faq">FAQ</NavbarLink>
          </>
        }
        logo={
          <NavbarLogo href="#" className="max-lg:hidden font-display text-xl tracking-tight text-olive-950 dark:text-white">
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
          headline="Turn Invoices Into Audit-Ready ESG Reports—Automatically"
          subheadline={
            <p>
              Secure your supplier contracts for 2026. Automate your ESG data extraction with audit-ready accuracy.
              Docuparse uses secure AI to transform your invoices into compliance-ready reports for UK Food SMEs.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="#quiz" size="lg">
                Check Your Compliance
              </ButtonLink>

              <PlainButtonLink href="#footer" size="lg">
                Join Waitlist <ArrowNarrowRightIcon />
              </PlainButtonLink>
            </div>
          }
        />

        {/* Financial Risk Cards */}
        <FadeIn>
          <FinancialRiskCardsSection />
        </FadeIn>

        {/* Regulatory Timeline */}
        <FadeIn>
          <RegulatoryTimelineSection />
        </FadeIn>

        {/* How It Works */}
        <FadeIn>
          <HowItWorksSection />
        </FadeIn>

        {/* Industry Benchmarks */}
        <FadeIn>
          <IndustryBenchmarksSection />
        </FadeIn>

        {/* Built for Scale */}
        <FadeIn>
          <BuiltForScaleSection />
        </FadeIn>

        {/* Risk Assessment Quiz */}
        <FadeIn>
          <RiskAssessmentQuiz />
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <FAQSection />
        </FadeIn>

        {/* Resources */}
        <FadeIn>
          <ResourcesSection />
        </FadeIn>
      </Main>

      {/* Footer */}
      <FooterSection />
    </>
  )
}
