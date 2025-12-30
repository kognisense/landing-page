import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
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

        {/* Quiz Section - Placeholder (will be built in Section 2) */}
        <section id="quiz" className="py-16">
          {/* Quiz content will be added in the next section */}
        </section>
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
