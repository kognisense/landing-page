import { LinkedInIcon } from '../icons/social/linkedin-icon'
import { XIcon } from '../icons/social/x-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from './footer-with-newsletter-form-categories-and-social-icons'

export function FooterSection() {
  return (
    <FooterWithNewsletterFormCategoriesAndSocialIcons
      id="footer"
      cta={
        <NewsletterForm
          headline="Join Waiting List & Stay in the loop!"
          subheadline={
            <p>
              Get notified when we launch in Q1 2026. Receive regulatory updates and compliance tips for UK Food SMEs.
            </p>
          }
          action="#"
        />
      }
      links={
        <>
          <FooterCategory title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Who We Are & Mission</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterCategory>
          <FooterCategory title="Legal">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Security</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint="© 2025 Docuparse ESG. Built in Edinburgh, Scotland for UK regulatory standards. Verified for 2025/2026 compliance cycles."
      socialLinks={
        <>
          <SocialLink href="https://linkedin.com" name="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href="https://x.com" name="X">
            <XIcon />
          </SocialLink>
        </>
      }
    />
  )
}
