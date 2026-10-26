import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'What OverstayCheck does and does not collect, how advertising cookies work, and your choices.',
  alternates: { canonical: `${site.domain}/privacy` },
}

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy policy" lede="Short version: the date you enter never leaves your browser.">
      <p><strong>Last updated: October 2026</strong></p>

      <h2>The calculator</h2>
      <p>
        The calculator runs in your browser. The date you enter is not sent to our servers and is not stored, in a
        database or in cookies.
      </p>

      <h2>What we do not collect</h2>
      <ul>
        <li>Your immigration status or any dates you enter</li>
        <li>Your name, email address or other identity details</li>
        <li>Accounts or logins. There are none.</li>
      </ul>

      <h2>Analytics and hosting</h2>
      <p>
        We use Vercel Web Analytics to count page views and understand which pages are useful. It does not use cookies
        and does not track you across sites. The site is hosted on Vercel, which processes standard request data (such
        as IP address and browser type) to deliver pages and protect the service.
      </p>

      <h2>Advertising</h2>
      <p>
        We show ads through Google AdSense to cover running costs. Google and its partners may use cookies or similar
        technologies to serve and measure ads, including personalised ads. You can manage this at{' '}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> or learn
        more at{' '}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
          how Google uses data from sites that use its services
        </a>
        .
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Opt out of personalised ads in Google Ad Settings</li>
        <li>Block or clear cookies in your browser, or use a content blocker</li>
      </ul>
      <p>We do not sell personal information.</p>

      <h2>Not legal advice</h2>
      <p>
        Everything on this site is general information, not legal advice. See the <a href="/about">About page</a> for
        how the calculator works and its limits.
      </p>
    </PageShell>
  )
}
