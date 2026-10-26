import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'I Overstayed My UK Visa: What to Do Next',
  description:
    'A step-by-step guide if you have overstayed a UK visa: count the days, check the 14-day and 30-day rules, know your options, get regulated advice.',
  alternates: { canonical: `${site.domain}/overstayed-uk-visa-what-to-do` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="overstayed-uk-visa-what-to-do"
      title="I Overstayed My UK Visa: What Should I Do?"
      description="A step-by-step way to work out where you stand and what your realistic options are."
      sources={[
        { label: 'Immigration Rules: Part Suitability (re-entry ban and late-application rules)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-part-suitability' },
        { label: 'Citizens Advice: help with immigration problems', href: 'https://www.citizensadvice.org.uk/immigration/' },
        { label: 'OISC: find a regulated immigration adviser', href: 'https://finder.oisc.gov.uk/' },
        { label: 'SRA: check a solicitor', href: 'https://www.sra.org.uk/consumers/solicitor-check/' },
        { label: 'Immigration Act 1971, section 24', href: 'https://www.legislation.gov.uk/ukpga/1971/77/section/24' },
      ]}
    >
      <p className="lede">
        Overstaying is stressful, and the right next step depends on a few facts: how many days it has been, whether
        you applied in time, and what ties you have to the UK. This guide helps you work out where you stand.
      </p>

      <Callout tone="info" title="In short">
        Count your days first. Within <strong>14 days</strong> you may be able to make a late application. Within{' '}
        <strong>30 days</strong>, leaving voluntarily at your own expense carries no re-entry ban. After that, bans start.
        In every case, get advice from a regulated adviser before you act.
      </Callout>

      <h2>Step 1: Work out exactly how long you have overstayed</h2>
      <p>
        Your overstay starts the day after your permission to stay ended. Find the end date on your visa, your BRP, or
        in your online UKVI account, and use the <Link href="/">calculator</Link> to count the days. The exact number
        matters because the rules change at 14 and 30 days.
      </p>

      <h2>Step 2: Check whether you are actually an overstayer</h2>
      <p>You may still have permission if:</p>
      <ul>
        <li>
          You applied to extend or change your permission <strong>before</strong> it expired and the application is
          still being decided. See <Link href="/section-3c-leave">Section 3C leave</Link>.
        </li>
        <li>
          You have appealed or asked for an administrative review of a refusal, within the time limits, and your
          permission continues during that process.
        </li>
        <li>
          The Home Office extended or changed your permission and you have not yet updated your record. Check your
          UKVI account.
        </li>
      </ul>

      <h2>Step 3: Check the 14-day and 30-day rules</h2>
      <ul>
        <li>
          <strong>Up to 14 days:</strong> a late application for new permission can be accepted if you had a good reason
          beyond your control. See the <Link href="/14-day-rule">14-day rule</Link>.
        </li>
        <li>
          <strong>Up to 30 days:</strong> leaving the UK voluntarily at your own expense means no re-entry ban. See{' '}
          <Link href="/uk-re-entry-ban">UK re-entry bans</Link>.
        </li>
      </ul>

      <h2>Step 4: Understand your realistic options</h2>
      <p>The options depend on your circumstances, but usually fall into these groups:</p>
      <ul>
        <li>
          <strong>Apply for new permission.</strong> Possible in some situations: for example within the 14-day rule, or
          on the basis of family or private life where you meet the legal tests. Many routes require you not to be an
          overstayer, so this is a place where advice matters.
        </li>
        <li>
          <strong>Leave voluntarily and later apply from abroad.</strong> The length of any ban depends on how long you
          overstayed and who pays for your departure.
        </li>
        <li>
          <strong>Do nothing.</strong> This is not a safe option. The overstay keeps growing, you cannot lawfully work or
          rent, and enforcement can lead to removal, which brings the longest bans.
        </li>
      </ul>

      <h2>Step 5: Get regulated advice</h2>
      <p>
        Only a solicitor or an adviser regulated by the Office of the Immigration Services Commissioner (OISC) can lawfully
        give immigration advice. You can check them on the SRA register or the OISC finder. Citizens Advice offers free
        immigration advice and can point you to local help. Legal aid is limited for immigration cases, but some
        organisations work for free or low cost.
      </p>

      <h2>Things to avoid</h2>
      <ul>
        <li><strong>Unregulated agents</strong> who promise guaranteed outcomes or ask for large cash payments.</li>
        <li><strong>False information or documents.</strong> Deception brings a 10-year ban and can be a crime.</li>
        <li><strong>Working without permission.</strong> It is an offence and can ruin a later application.</li>
        <li><strong>Leaving without understanding the ban</strong> that will follow. Once you leave, you cannot undo it.</li>
      </ul>

      <h2>What to gather before you speak to an adviser</h2>
      <ul>
        <li>Your passport and any BRP, visas, and refusal or approval letters</li>
        <li>The exact dates your permission started and ended</li>
        <li>Any application receipts, reference numbers and emails from the Home Office</li>
        <li>Evidence of family or private life in the UK, if relevant</li>
        <li>A short timeline of what happened and why you stayed</li>
      </ul>

      <Callout tone="warning" title="Not legal advice">
        General information only. Immigration rules change and individual circumstances matter. Speak to a qualified
        solicitor or OISC-regulated adviser before making decisions.
      </Callout>
    </GuideLayout>
  )
}
