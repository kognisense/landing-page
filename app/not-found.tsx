import { ButtonLink } from '@/components/elements/button'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'

export default function NotFound() {
  return (
    <HeroSimpleCentered
      headline="404"
      subheadline={<p>Sorry, we couldn't find the page you're looking for.</p>}
      cta={
        <ButtonLink href="/" size="lg">
          Go to homepage
        </ButtonLink>
      }
    />
  )
}
