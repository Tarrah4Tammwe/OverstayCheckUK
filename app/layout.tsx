import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: 'UK Visa Overstay Calculator — Check Your Status | OverstayCheck',
  description: 'Overstayed your UK visa? Enter your expiry date and find out exactly where you stand — 14-day rule, re-entry bans, and what to do next. Plain English.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.overstaycheck.co.uk',
  },
  openGraph: {
    title: 'UK Visa Overstay Calculator — Check Your Status | OverstayCheck',
    description: 'Overstayed your UK visa? Enter your expiry date and find out exactly where you stand — 14-day rule, re-entry bans, and what to do next. Plain English.',
    url: 'https://www.overstaycheck.co.uk',
    siteName: 'OverstayCheck',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8935274984783226"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
