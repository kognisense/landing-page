import { LinkedInIcon } from '../icons/social/linkedin-icon'
import { XIcon } from '../icons/social/x-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from './footer-with-newsletter-form-categories-and-social-icons'
import { BRAND, getCopyrightText } from '@/config/brand'

export function FooterSection() {
  return (
    <FooterWithNewsletterFormCategoriesAndSocialIcons
      id="footer"
      cta={
        <NewsletterForm
          headline={`Get Early Access - ${BRAND.product.launchQuarter} Launch`}
          subheadline={
            <p>
              Be first in line for {BRAND.name} Early Access. Join UK Food SMEs preparing for the {BRAND.product.complianceDeadline} SDR mandate.
            </p>
          }
          action="#"
        />
      }
      links={
        <>
          <FooterCategory title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/partnerships">Partners</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCategory>
          <FooterCategory title="Legal">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/security">Security</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint={getCopyrightText()}
      socialLinks={
        <>
          <SocialLink href={BRAND.social.linkedin} name="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href={BRAND.social.twitter} name="X">
            <XIcon />
          </SocialLink>
        </>
      }
    />
  )
}
