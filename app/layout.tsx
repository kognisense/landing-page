import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Docuparse ESG - Automated Compliance for UK Food SMEs',
  description: 'Avoid 2026 ESG fines. Docuparse ESG turns your invoices into audit-ready reports using secure AI. Built for UK Food sector mandatory SDR 2026 compliance.',
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
      <body>{children}</body>
    </html>
  )
}
