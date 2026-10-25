import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ConsentScripts } from '@/components/consent-scripts'
import { site } from '@/lib/site'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })

const title = 'UK Visa Overstay Calculator: Check Your Status | OverstayCheck'
const description =
  'Overstayed your UK visa? Enter your expiry date and find out where you stand: the 14-day rule, re-entry bans and what to do next. Free, private, plain English.'

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: title, template: '%s | OverstayCheck UK' },
  description,
  robots: 'index, follow',
  alternates: { canonical: site.domain },
  openGraph: {
    title,
    description,
    url: site.domain,
    siteName: site.name,
    type: 'website',
    locale: 'en_GB',
  },
  twitter: { card: 'summary', title, description },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  manifest: '/manifest.json',
  other: { 'google-adsense-account': 'ca-pub-8935274984783226' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2b3f86',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ConsentScripts />
        <Analytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8935274984783226"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
