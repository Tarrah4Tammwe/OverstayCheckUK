import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Consequences of Overstaying in the UK',
  description:
    'How overstaying affects work, renting, healthcare, banking, criminal liability and future visa applications in the UK.',
  alternates: { canonical: `${site.domain}/overstaying-consequences` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="overstaying-consequences"
      title="The Consequences of Overstaying in the UK"
      description="Beyond re-entry bans, overstaying affects work, housing, healthcare, banking and future applications."
      sources={[
        { label: 'Immigration Act 1971, section 24 (offences)', href: 'https://www.legislation.gov.uk/ukpga/1971/77/section/24' },
        { label: 'GOV.UK: check a job applicant’s right to work', href: 'https://www.gov.uk/legal-right-to-work-in-the-uk' },
        { label: 'GOV.UK: right to rent checks', href: 'https://www.gov.uk/check-tenant-right-to-rent-documents' },
        { label: 'Citizens Advice: immigration', href: 'https://www.citizensadvice.org.uk/immigration/' },
      ]}
    >
      <p className="lede">
        The longer an overstay continues, the more of daily life it touches. Many of these consequences begin from the
        first day, not after any particular threshold.
      </p>

      <Callout tone="info" title="In short">
        Overstayers have <strong>no right to work or rent</strong>, can be charged for NHS care, can lose bank accounts
        and driving licences, may commit an offence, and will face a ban when they leave. Staying makes each of these
        worse, not better.
      </Callout>

      <h2>Work</h2>
      <p>
        If you have no permission to be in the UK, you have no right to work. Working without permission can be a
        criminal offence, and employers who knowingly employ people without the right to work can face large civil
        penalties and prosecution. It can also damage a later application.
      </p>

      <h2>Housing</h2>
      <p>
        Landlords in England must check that tenants have a right to rent, and can face penalties for letting to people
        who do not. Overstayers are generally unable to rent privately and risk eviction or homelessness. The rules
        differ in Scotland, Wales and Northern Ireland, so check local guidance.
      </p>

      <h2>Healthcare</h2>
      <p>
        The NHS charges people who are not ordinarily resident for some services, which can include overstayers. Urgent
        and immediately necessary treatment is not withheld because of charging, but you can be billed afterwards, and
        unpaid NHS debts can be considered in later applications. Ask Citizens Advice about what you must pay and what is
        exempt.
      </p>

      <h2>Banking and driving</h2>
      <p>
        Banks must check the immigration status of account holders and can close accounts. A driving licence can be
        revoked or refused where you are not lawfully resident.
      </p>

      <h2>Criminal liability</h2>
      <p>
        Under section 24 of the Immigration Act 1971, knowingly remaining beyond the time allowed is an offence
        punishable by a fine or up to six months in prison. Prosecutions for overstaying alone are uncommon, but the
        offence exists, and other offences, such as working illegally or using false documents, are treated more
        seriously.
      </p>

      <h2>Future applications and other countries</h2>
      <ul>
        <li>Most UK applications ask about previous breaches, and an overstay can lead to refusal under the ban rules. See <Link href="/uk-re-entry-ban">re-entry bans</Link>.</li>
        <li>Many other countries ask on visa forms whether you have ever overstayed or been refused entry, and you must answer truthfully.</li>
        <li>A false answer is usually far more damaging than an honest account of a past overstay.</li>
      </ul>

      <h2>What reduces the damage</h2>
      <ol>
        <li>Act quickly. Many of the rules change at 14 and 30 days.</li>
        <li>Apply or leave in the way that gives you the shortest ban.</li>
        <li>Keep evidence of why it happened. Genuine reasons are weighed.</li>
        <li>Use regulated advice. See <Link href="/overstayed-uk-visa-what-to-do">what to do if you have overstayed</Link>.</li>
      </ol>

      <Callout tone="warning" title="Not legal advice">
        General information only. Rules differ across the UK and change over time. Speak to a regulated adviser about
        your own situation.
      </Callout>
    </GuideLayout>
  )
}
