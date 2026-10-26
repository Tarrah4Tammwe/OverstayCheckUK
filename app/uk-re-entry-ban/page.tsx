import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'UK Re-Entry Bans After Overstaying',
  description:
    'The 30-day no-ban rule and the 12-month, 2-year, 5-year and 10-year periods, and how the way you leave changes the outcome.',
  alternates: { canonical: `${site.domain}/uk-re-entry-ban` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="uk-re-entry-ban"
      title="UK Re-Entry Bans After Overstaying"
      description="The length of the ban depends on how long you overstayed and how you leave."
      sources={[
        { label: 'Immigration Rules: Part Suitability (refusal periods, SUI 12)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-part-suitability' },
        { label: 'Immigration Rules (index)', href: 'https://www.gov.uk/guidance/immigration-rules' },
        { label: 'Citizens Advice: immigration', href: 'https://www.citizensadvice.org.uk/immigration/' },
      ]}
    >
      <p className="lede">
        The UK does not usually stop you physically entering after an overstay. Instead, it has fixed periods during
        which most applications for entry clearance or permission will be refused. People call these re-entry bans.
      </p>

      <Callout tone="info" title="In short">
        <strong>No ban</strong> if you leave voluntarily, at your own expense, within 30 days. <strong>12 months</strong>{' '}
        if you leave voluntarily at your own expense after more than 30 days. <strong>2 or 5 years</strong> if you leave
        at the Home Office’s expense. <strong>10 years</strong> for removal, deportation or deception. Check the current
        rules, which were recently reorganised.
      </Callout>

      <h2>How the ban works</h2>
      <p>
        The Immigration Rules set “mandatory refusal periods”. If you breached the rules by overstaying, applications you
        make within the period are normally refused, whatever their merits. The period runs from the date you leave the
        UK. It does not run while you are still in the UK.
      </p>

      <h2>The usual periods</h2>
      <ul>
        <li>
          <strong>No ban:</strong> you overstayed by 30 days or less and left voluntarily at your own expense.
        </li>
        <li>
          <strong>12 months:</strong> you left voluntarily at your own expense after overstaying by more than 30 days.
        </li>
        <li>
          <strong>2 years:</strong> you left voluntarily at public expense (a Home Office funded return) within 6 months
          of being notified that you were liable for removal, or of your appeal rights ending.
        </li>
        <li>
          <strong>5 years:</strong> you left voluntarily at public expense, but more than 6 months after that point.
        </li>
        <li>
          <strong>10 years:</strong> you were removed or deported, or you used deception in an application (for example
          false documents or false information).
        </li>
      </ul>
      <p>
        This is a summary of the Immigration Rules, which were restructured into Part Suitability in late 2025. Check
        the current wording on GOV.UK before relying on it for a decision.
      </p>

      <h2>“Own expense” and “public expense”</h2>
      <p>
        Leaving “at your own expense” means you pay for your own travel. Leaving “at public expense” means the Home
        Office funds it, for example through a voluntary return scheme. The difference can decide the length of your ban,
        so get advice before accepting help to leave.
      </p>

      <h2>The 30-day line</h2>
      <p>
        The 30 days are counted from the day after your permission ended. A person who leaves on day 30 is treated very
        differently from a person who leaves on day 31. If you are close to the line, the calculator on the{' '}
        <Link href="/">home page</Link> shows your count.
      </p>

      <h2>Ban versus other consequences</h2>
      <p>
        A ban is only part of the picture. The overstay is still recorded and many countries ask whether you have
        overstayed. You can read more in{' '}
        <Link href="/overstaying-consequences">the consequences of overstaying</Link>.
      </p>

      <h2>Can a ban be avoided or shortened?</h2>
      <p>
        Some cases have exceptions or can be handled differently, for example where you are protected from removal or
        there are exceptional compassionate reasons. These depend on detailed facts, so ask an adviser. If you are within
        the first 14 days, the <Link href="/14-day-rule">14-day rule</Link> may also help.
      </p>

      <Callout tone="warning" title="Not legal advice">
        General information only. The length of any ban depends on your exact facts. Speak to a solicitor or
        OISC-regulated adviser before you leave the UK.
      </Callout>
    </GuideLayout>
  )
}
