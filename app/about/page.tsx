import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { PageShell } from '@/components/page-shell'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About and methodology',
  description:
    'Who runs OverstayCheck, how the UK overstay calculator works, what it is based on, and what it cannot tell you.',
  alternates: { canonical: `${site.domain}/about` },
}

export default function AboutPage() {
  return (
    <PageShell title="About OverstayCheck" lede="A free, independent tool that explains UK overstay rules in plain English.">
      <h2>What this site is</h2>
      <p>
        OverstayCheck helps people understand where they stand when their permission to stay in the United Kingdom has
        ended or is about to. It is an independent project. It is <strong>not a law firm</strong>, does not give legal
        advice, and is not affiliated with the Home Office, UK Visas and Immigration or any government body.
      </p>

      <h2>How the calculator works</h2>
      <ol>
        <li>You enter the end date of your permission to stay.</li>
        <li>The calculator counts the whole days between that date and today, in your local time zone.</li>
        <li>
          It compares the result with the points where the rules change: the 14-day window for late applications and the
          30-day line for voluntary departure, and explains what each means.
        </li>
      </ol>
      <p>The calculation runs entirely in your browser. The date you enter is not sent to us and is not stored.</p>

      <h2>What it is based on</h2>
      <p>
        The calculator is based on the Immigration Rules and published Home Office guidance on overstaying and
        re-entry. Overstaying is an offence under Section 24 of the Immigration Act 1971. The Immigration Rules and
        guidance are updated regularly, so always check the current wording on{' '}
        <a href="https://www.gov.uk/government/organisations/uk-visas-and-immigration" target="_blank" rel="noopener noreferrer">GOV.UK</a>.
      </p>

      <h2>What it cannot tell you</h2>
      <p>
        The calculator applies standard thresholds and summarises the Immigration Rules, which are updated regularly and were recently reorganised into Part Suitability. Real cases often involve things it cannot see: a pending
        application and Section 3C leave, an appeal, a human rights claim, family ties in the UK, or earlier
        immigration history. Those can change the outcome completely.
      </p>
      <Callout tone="warning" title="Get regulated advice for decisions">
        Before leaving, applying, or doing nothing, speak to a solicitor (check them on the SRA register) or an
        OISC-regulated adviser. Free help is available from Citizens Advice. See the{' '}
        <Link href="/contact">contact page</Link> for links.
      </Callout>

      <h2>Corrections</h2>
      <p>
        Spotted something out of date or wrong? We want to fix it. See the <Link href="/contact">contact page</Link>.
        Content last updated {site.updated}.
      </p>
    </PageShell>
  )
}
