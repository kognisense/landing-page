import type { Metadata } from 'next'
import './globals.css'
import { NavbarWithLinksActionsAndCenteredLogo, NavbarLink, NavbarLogo } from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { FooterSection } from '@/components/sections/footer-section'
import { ScrollToTop } from '@/components/elements/scroll-to-top'
import { ThemeToggle } from '@/components/elements/theme-toggle'
import { ButtonLink } from '@/components/elements/button'
import { BRAND } from '@/config/brand'

export const metadata: Metadata = {
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: BRAND.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Default to light mode
                // Only add dark class if user has explicitly set theme to 'dark'
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                // If localStorage fails, stay in light mode (default)
              }
            `,
          }}
        />
      </head>
      <body>
        <NavbarWithLinksActionsAndCenteredLogo
          id="navbar"
          links={
            <>
              <NavbarLink href="/">Home</NavbarLink>
              <NavbarLink href="/about">About</NavbarLink>
              <NavbarLink href="/blog">Blog</NavbarLink>
              <NavbarLink href="/partnerships">Partners</NavbarLink>
              <NavbarLink href="/contact">Contact</NavbarLink>
            </>
          }
          logo={
            <NavbarLogo href="/" className="max-lg:hidden font-display text-xl tracking-tight text-olive-950 dark:text-white">
              {BRAND.name}
            </NavbarLogo>
          }
          actions={
            <>
              <ThemeToggle />
              <ButtonLink href="/#quiz" size="lg">
                Check Compliance
              </ButtonLink>
            </>
          }
        />

        {children}

        <FooterSection />
        <ScrollToTop />
      </body>
    </html>
  )
}
